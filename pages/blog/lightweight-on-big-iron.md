---
title: "Immutable zOS data with immudb - lightweight on big iron"
date: "2021-01-18"
image: "/images/blog/immudb-mainframe.jpg"
tags: ["zOS", "mainframe", "immudb", "Java"]
---

# Immutable z/OS data with immudb: lightweight on big iron

<img style="float: right;" src="/images/blog/mascotfree.png" width="350">

A huge percentage of the world’s most valuable data is processed on IBM mainframes. Mainframes are designed with reliability and security in mind since day one. Many libraries on mainframes should only be changed through a trusted pipeline. Tampering central and highly critical programs on a mainframe infrastructure of an organization would be a strike at the heart. Attacks like [Sunburst](https://www.codenotary.com/blog/solarwinds-sunburst/) showed that cyber-criminals act opportunistic and are able to create huge damage by tampering software. Hackers won't stop at system frontiers but instead, look for a weak spot. Sometimes even mainframes get in their focus although known for being a highly secured platform. One example for that has been the [Logica-Nordea mainframe hack](https://badcyber.com/a-history-of-a-hacking/). Next to cyber-security threats orchestrated by state-funded hacker organizations is the possibility of a malicious insider attack by actors like employees. Although this scenario is not very common the consequences would be equally devastating.

[Immudb](https://www.codenotary.com/technologies/immudb/) is an open-source, lightweight, high-speed immutable database with built-in cryptographic proof and verification. It can run on almost every architecture and you can track changes in sensitive data in your transactional databases and then record those changes permanently in a tamperproof immudb database. This allows you to keep an indelible history of sensitive data, for example, debit/credit card transactions or datasets and it's members. Traditional DB transactions and logs are hard to scale and are mutable. So there is no way to know for sure if your data has been compromised. As such, immudb provides unparalleled insights retroactively of changes to your sensitive data, even if your perimeter has been compromised. immudb guarantees immutability by using cryptographic data structures internally.


## Immudb architecture on IBM Z 

<img style="float: right;" src="/images/blog/immudb-mainframe.jpg" width="450">
Immudb is lightweight and at the same time delivering unprecedented performance. Every Hardware-Architecture that is supported by golang will be able to run immudb. S390X is the Architecture of IBM Z and it is fully supported. The immudb server should run in a different and protected environment. LPAR partitioning on IBM Z is EAL5 certified therefore offering a high level of protection. Of course, immudb is also able to run next to a mainframe on distributed systems.

We propose running immudb on Linux on Z on a different LPAR communicating with z/OS over in-memory HiperSockets reducing overhead and latency. [Immugw](https://github.com/codenotary/immugw) is a middleware that provides a REST-API for immudb. The API can be consumed by z/OS through various programming languages and scripts. Take a look at rocket software's [open source tools for z/OS](https://www.rocketsoftware.com/zos-open-source) to expand your scope with tools like [cURL](https://www.rocketsoftware.com/platforms/ibm-z/curl-for-zos). 

Another very lean option is to use our [SDKs](https://docs.immudb.io/). Z/OS is supporting three languages with already existing SDKs: Java, Python and Nodejs. The SDKs are relying on the very fast and efficient gRPC (gRPC Remote Procedure Calls) protocol based on HTTP/2 and protocol buffers.

Immudb and immugw can be deployed on Linux on Z without a hassle. Git clone the repositories and install golang. Switch to the repositories directory and type: make all. Start up ./immudb and ./immugw. Done.

## Application design

One challenge of running highly critical systems is to ensure that no one tampered production software, as described above. Let’s start with a basic example, a developer pushed code into a protected library. Now he wants to notarize that member using immudb. He can do so by using a batch job that has the following steps:
- Step 1: pull the original signing program or script and verify it
- Step 2: generate checksum of his source code and set it in immudb

Now a build-job would look almost the same. First, the source will be verified. With immudb it is also possible to look up the history. An object with an unclear history wouldn't be able to get into production.Each stakeholder (machine or developer) of the process can notarize and authenticate objects, therefore adding trust to the process. The program can then be build from the trusted source and the resulting load module has to be notarized. 

### Example

In this blog we are showing how to communicate with immudb/immugw by using java on IBM Z. Java is a good candidate because it works in every environment even in Db2 as a stored procedure. It is even possible to backup data of DB2 tables on change. More about that later. 

Our Java program can be run as a step in JCL Jobs (for example: build jobs or jobs that are altering). The target dataset can be set as a variable in JCL and passed to the java program.
```jcl
//JAVAJVM  EXEC PGM=JVMLDM&VERSION,REGION=&REGSIZE,
//   PARM='&DATASET'
//STEPLIB  DD DSN=&LIBRARY,DISP=SHR  
//SYSPRINT DD SYSOUT=*                   <System stdout
//SYSOUT   DD SYSOUT=*                  <System stderr 
//STDOUT   DD SYSOUT=*                  <Java System.out 
//STDERR   DD SYSOUT=*                  <Java System.err 
//CEEDUMP  DD SYSOUT=*
//ABNLIGNR DD DUMMY
//*
//*The following DDs can/should be present in the calling JCL
//*
//*STDIN   DD                       <OPTIONAL - Java System.in
//*STDENV  DD                         <REQUIRED - JVM Environment script
//*MAINARGS DD                          <Preferred method to supply args
// PEND
```
The code snippet below is showing a clean way of doing HTTP-API calls with only using HttpURLConnection. That way you will not face missing dependencies in different runtime locations. The function postRequest needs to be provided with the URL of immugw and a JSON-string. The JSON-string will be converted to bytes and posted. The response is being returned.
```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.security.Provider;
import java.net.URL;


public class Main {
    
    public static String postRequest(String urlStr, String jsonBodyStr, String authorization) throws IOException {
        URL url = new URL(urlStr);
        HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();
        httpURLConnection.setDoOutput(true);
        httpURLConnection.setRequestMethod("POST");
        httpURLConnection.setRequestProperty("Content-Type", "application/json");
        if (authorization != ""){
            httpURLConnection.setRequestProperty("Authorization", authorization);
        }
        try (OutputStream outputStream = httpURLConnection.getOutputStream()) {
            outputStream.write(jsonBodyStr.getBytes());
            outputStream.flush();
        }
        if (httpURLConnection.getResponseCode() == HttpURLConnection.HTTP_OK) {
            try (BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(httpURLConnection.getInputStream()))) {
                String line;
                while ((line = bufferedReader.readLine()) != null) {
                    return line;
                }
                }
            }
        return "Error code: "+Integer.toString(httpURLConnection.getResponseCode());
        }
```
The first request will be the login request. The Api returns a token that will be used as authorization string later on.
```java
        String URLString = "http://LINUXONZ:3323/v1/immurestproxy/login";
        //jsonInputString for default credentials, note b64 encoded
        String jsonInputString = "{\"user\": \"aW1tdWRi\", \"password\": \"aW1tdWRi\"}";
        String response = postRequest(URLString,jsonInputString,"");
        System.out.println(response);
```
Read in the file for creating the checksum. Use JZOS (com.ibm.jzos) and a hash-function of your favor. It is recommended to use IBM Z's extensive crypto-hardware support (for example for hash functions) like [IBMJCECCA](https://www.ibm.com/support/knowledgecenter/SSYKE2_8.0.0/com.ibm.java.zsecurity.api.80.doc/com.ibm.crypto.hdwrCCA/com/ibm/crypto/hdwrCCA/provider/IBMJCECCA.html#IBMJCECCA--). Set the dataset name and its hash value in immudb. Look into our [immugw](https://www.codenotary.com/blog/ultimate-connectivity-for-immudb-with-immugw) blog to read more about using the immugw api.

```java
         String ddname = ZFile.allocDummyDDName();
         String cmd = "alloc fi("+ddname+") da(HLQ.MYDATA) reuse shr msg(2)";
         ZFile.bpxwdyn(cmd);
         RecordReader reader = null;
         try {
           reader = RecordReader.newReaderForDD(ddname);
           byte[] recordBuf = new byte[reader.getLrecl()];
           while ((bytesRead = reader.read(recordBuf)) >= 0) {
             ...
           }
```
### Getting checksums of datasets on change event

With z/OS it is possible to detect changes of datasets. There are two ways of doing that. Either write a started task and listen to the [SMF realtime api](https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.ieac100/ieac1-smf-inmem.htm) (SMF15) or monitor a module that gets loaded by CLOSE via CSVEXIT. Intercepting the CLOSE SVC is a delicate job but possible. Then use the name of the changed dataset create a hash and set it in immudb. That way you can track changes of datasets immutably and tamperproof.

### Overcoming EBCDIC and ASCII conversion challenges
Objects will change their checksum when they are converted from EBCDIC to ASCII and the other way around. Many code signing solutions will lose track of the object. Immudb is capable of storing JSON-Objects as value. Metadata can be added to an object including the ASCII/EBCDIC checksum of the object or many other information.
```json
{
  "ascii.checksum" : "d7e4d83a94d161837aa4038cbaf9708b2bb2d91675a20493a982ce4b17d8012e"
  "ebcdic.checksum": "cffeab52f4f186936e3697bf1c69a6ec72d298ff94e0b40d603f453285707e2e"
}
```

## Immutability for DB2

A possible cyber-attack could focus on databases. Bad actors could gain access to databases by using SQL injections or other methods. They then use their access levels to encrypt whatever they get their hands on. Immudb can keep up with the fastest databases and back up their data. Read more about that in our [randomware](https://www.codenotary.com/blog/immutability-vs-ransomware) blog. Keep in mind: immudb has to be run in a different protected environment. Now, even if immudb writes encrypted values, it still has the history of the record that can not be touched.

This is how it works: triggers in Db2 will notify about changes of tables. Set an [alter trigger](https://www.ibm.com/support/knowledgecenter/SSEPEK_12.0.0/sqlref/src/tpc/db2z_sql_altertriggeradvanced.html) and execute a stored procedure to store the new data of the table in immudb. Push the java code to Db2 and create the stored procedure. After that, it is callable by SQL. When the trigger is called, set the parameters and call javaproc. Use the OUT STATUS variable to report the HTTP-Code.

```SQL
CREATE PROCEDURE JAVAPROC (IN TABLE CHAR(99),
						   IN COLUMN CHAR(99),
						   IN KEY(99),
						   OUT STATUS INTEGER)
   NOT DETERMINISTIC
   LANGUAGE Java
   PARAMETER STYLE JAVA
   EXTERNAL NAME 'DS_20180823161823:com.userid.JAVAPROC.x_JAVAPROC'
   COLLID NULLID
   WLM ENVIRONMENT D121WLM_JAVA
```
Call the stored procedure with SQL:

```SQL
CALL IMMUDB.JAVAPROC(:TABLE,     
                     :COLUMN,   
                     :KEY,  
                     :OUT)     
```
Immudbs performance can keep up with high-speed databases. Add immutability to your database, not just by offline tape.
<img src="/images/blog/database2.jpg">



## Innovative software for your future proof hardware
<img style="float: right;" src="/images/blog/mainframemascot.png">

The hardware of IBM Z is suited very well for the crypto technologies of the future. Get the best of both worlds Linux and z/OS and make your system immutable. Back up critical data or secure your build process. Proof immutability for your transaction-logs. Or maybe you already have a use-case in mind we didn't even think about yet. 
