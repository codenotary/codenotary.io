---
title: "Commandline starter guide for immudb"
date: "2021-01-08"
image: "/images/blog/gopher.png"
tags: ["Go", "immudb", "immutability", "commandline"]

---

# Using immudb codeless

[immudb](https://github.com/codenotary/immudb) provides insanely fast tamperproof storage that can keep up with high-performance databases. If you have a requirement for immutability, [immudb](https://github.com/codenotary/immudb) is the right tool for you. Immudb can be used to secure logs of transaction systems and databases or many more things like securing CI/CD pipelines. Only your imagination is the limit. There is just one little caveat. Even if you have the greatest imagination, most tools require advanced coding skills stopping you from implementing your visions. That's why our hardworking gophers did their best to make [immudb](https://github.com/codenotary/immudb) easy to use. Infact you can try out immudb without writing a single line of code by using our immuclient.



## Install and run immudb

Installing immudb is easy. Immudb is written in go, that's why you will have to [install golang](https://golang.org/doc/install). Download the [release binaries](https://github.com/codenotary/immudb/releases) of immudb and immuclient for Linux, Mac OS (darwin) or Windows. Run immudb as follows:
```
# run immudb in the foreground
./immudb

# run immudb in the background
./immudb -d
```
You may want to restart immudb, in that the running instance must be stopped first. To stop immudb you need to find the process 'ps -ax | grep immudb' and then 'kill -15 <pid>'. Windows PowerShell would be 'Get-Process immudb* | Stop-Process'.
  
Start immuclient from your immuclient directory with ./immuclient --help to look at the options.

## Using immudb with immuclient

Let's get started using immudb with the immuclient. In this blog, we will create an example bash script that will create a folder with multiple files. Then we will get the checksums of those files and save them together with the file name in immudb. Doing so we need an authorized connection to immudb. The default user is "immudb" with the default password of "immudb". The immuclient will ask you for the password and will remind you of changing the password because using default passwords is not safe. It is okay for playing around though! 
```bash
#!/bin/bash

# Replace with our immudb path
export PATH="/home/sebastian/immudb2/immudb:$PATH"


# Delete sample data if it exists
if [ -d "$(pwd)/data/" ]; then
    rm -r data
fi

# Create directory and files
mkdir data
cd data
echo 'This content will be hashed by blake 2 and stored in immudb.' > file1.txt 
echo 'This information is important and no one should be able to tamper it unseen.' > file2.txt 
echo 'These files could contain anything. For example log data or sensitive customer data.' > file3.txt 
echo Files created!
```

```bash
# Immudb login
immuclient login immudb 
#immuclient use <yourdatabase>
```
Output:
```
Files created!
Password:
Successfully logged in.
immudb user has the default password: please change it to ensure proper security

```


Immudb is designed as a key-value database. Saving key values with immuclient is quite easy. Note that "safeset" will not only safe the key-value combination, it will also verify the write-operation. The script will iterate over every file in the directory and create a checksum with the BLAKE-2 algorithm. The output will then be stored in immudb. 


```bash
# Iterate over all files and get BLAKE-2-hash
# Save Hash as key with filename as value in immudb
for file in *; do
  	if [ -f "$file" ]; then 
   		#echo "$file"
        #b2sum algoritm SHA-3
		b2s=($(b2sum "$file"))
        #save filename b2s[1] and checksum b2s[0] as key-value pair in immudb
		immuclient safeset ${b2s[1]} ${b2s[0]}
 	fi
done
```
Output of safeset:
```
tx:		1 
key:		file1.txt 
value:		b74fb96658cc1526c8855b2c26352586398a46f3dc22d98940fb200af51b30e5136a7a6b8e00e4d862a825a4377ca7df25f809c882e69db7a5075848f5e05f87 
hash:		f2c420c87111cc0eb0525a96bbdfa84e087bd955dbb3910d16aba4b5f9862d42 
verified:	true 

tx:		2 
key:		file2.txt 
value:		d84c0a271d4b847ddd14af3fec750b5f2f40c3a67b015be37efbb6c819fedb00ede8936ba604d72777219f0a5987a1ed7002105e8cbd181fadd5b4813efd208c 
hash:		92151b189354cf326f9ba21c7a842d2d2b92e59a6c17e900f9705a277f49952e 
verified:	true 

tx:		3 
key:		file3.txt 
value:		8ea716717c3b11bbc421776dca36641912cd49fa356de2e72da2a1f2cafb0f9748111c6d098282f54c935e354920806309ac9c75d1bf47e5e62cb14d53a23b45 
hash:		56be327a1bc1552d2c6549d2c3d3d38e2c8b58e4d482fec2adba6e56aa6841a9 
verified:	true 
```

The information about the files is now stored immutable and verifiable in immudb. Now we do the other way around and look up the data of the files. Therefore we use the filename and do a verified read with immuclient safeget. Again the script is iterating over all files in the directory and requesting the values. It compares them to the actual checksum and reports if they match with the value from immudb. 

```bash
# Iterate over files and safeget values
# Compare value to realtime checksum and report matches
for file in *; do 
	output=$(immuclient safeget "$file")
	value=$(echo "$output" | grep "value" | awk '{print $NF}')
	b2out=($(b2sum "$file"))
	echo $b2out
	echo $value
	if [ "$b2out" == "$value" ]; then
		echo match for "$file"
	fi
done
```
Output comparison loop:
```
b74fb96658cc1526c8855b2c26352586398a46f3dc22d98940fb200af51b30e5136a7a6b8e00e4d862a825a4377ca7df25f809c882e69db7a5075848f5e05f87
b74fb96658cc1526c8855b2c26352586398a46f3dc22d98940fb200af51b30e5136a7a6b8e00e4d862a825a4377ca7df25f809c882e69db7a5075848f5e05f87
match for file1.txt
d84c0a271d4b847ddd14af3fec750b5f2f40c3a67b015be37efbb6c819fedb00ede8936ba604d72777219f0a5987a1ed7002105e8cbd181fadd5b4813efd208c
d84c0a271d4b847ddd14af3fec750b5f2f40c3a67b015be37efbb6c819fedb00ede8936ba604d72777219f0a5987a1ed7002105e8cbd181fadd5b4813efd208c
match for file2.txt
8ea716717c3b11bbc421776dca36641912cd49fa356de2e72da2a1f2cafb0f9748111c6d098282f54c935e354920806309ac9c75d1bf47e5e62cb14d53a23b45
8ea716717c3b11bbc421776dca36641912cd49fa356de2e72da2a1f2cafb0f9748111c6d098282f54c935e354920806309ac9c75d1bf47e5e62cb14d53a23b45
match for file3.txt

```

With immudb a whole lot of things can be used as "values" for example hash values of repositories, files, and even docker containers. Saving a key twice is possible. Each key will be handled in its own table and only show the most recent value by querying with "get" or "safeget". That's why there is a history function that will show us the history of a certain key.

```bash
echo $(immuclient history file1.txt)
```
Output of the histoy of file1.txt:
```
tx: 1 key: file1.txt value: b74fb96658cc1526c8855b2c26352586398a46f3dc22d98940fb200af51b30e5136a7a6b8e00e4d862a825a4377ca7df25f809c882e69db7a5075848f5e05f87 hash: f2c420c87111cc0eb0525a96bbdfa84e087bd955dbb3910d16aba4b5f9862d42
```


## Starting immudb with docker in 3 minutes (optional)

[Install Docker](https://docs.docker.com/get-docker/) and pull the [immudb as image](https://hub.docker.com/r/codenotary/immudb) from Docker Hub in seconds. 

immudb has already been downloaded over 1 million times. Pull immudb and immuclient for this tutorial:

```
#take care of matching versions
docker pull codenotary/immudb:latest
docker pull codenotary/immuclient:v0.9.0-RC1
```
Now start the immudb and immuclient. We also create a network so immuclient can communicate with our immudb container.
```
docker network create immudbnet
docker run -d --net immudbnet -it --rm --name immudb -p 3322:3322 codenotary/immudb:latest
docker run -it --rm --net immudbnet --name immuclient codenotary/immuclient:latest -a immudb
```
If everything worked out, you are now in the shell of immuclient. Type "-- help" to look up the options.

## Manage immudb with immuadmin (optional)
`immuadmin` is a powerful tool to manage your immudb installation. You can install and manage the service installation for both components and get statistics as well as runtime information. 
When logging in for the first time you will have to change your default password. It must contain upper and lower case letters, digits, punctuation mark or symbol. 

`immuadmin` can be downloaded as [release binary](https://github.com/codenotary/immudb/releases) or used as a [docker container](https://hub.docker.com/r/codenotary/immuadmin) just like immudb and immuclient. 

```
#default user immudb, default password immudb
./immuadmin login immudb
```
After logging in successfully immuadmin allows creating new databases. 

```
./immuadmin database create testdb
database successfully created
./immuadmin database list
2 database(s)
-  -------------  
#  Database Name  
-  -------------  
1  defaultdb      
2  testdb         
-  -------------  
```
Clients can now switch to the newly created database. One of the most requested activities for every admin is resetting or changing passwords. This can be done through immuadmin user commands. For example:
```
./immuadmin user changepassword user1
```


## Immutability without a headache
In this blog, we have shown that using immudb no hassle. In fact you can try it out and test its functionalities without having to code. 
Get new ideas and imagine how to make your data immutable. 
immudb can scale with your applications providing immutability and adding trust to businesses. 

Check out our more detailed [post](https://itnext.io/immudb-the-open-source-immutable-database-1f6e4bb5c79d) about immudb to dive deeper. 

immudb is an open-source technology. Leave a star on our [github](https://github.com/codenotary/immudb) if you like that.
