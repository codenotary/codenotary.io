---
title: "Storing virus case numbers in immudb using Go"
date: "2020-12-11"
image: "/images/blog/gophermasker.png"
tags: ["Go", "immudb", "immutability", "example"]

---

# Storing virus case numbers in immudb

<img style="float: right;" src="/images/blog/gophermasker.png">

2020 was full of unpredictable events. Tough decisions had to be done. Data-driven decision making can prevent the truth from being the first casualty of these tensions. However, the data used for these decisions has to be correct and the process must be transparent otherwise people and businesses will lose trust in leadership. The number of cases of positive coronavirus tests is one of those sources that impacted decision making a lot in 2020. So how to make sure that nobody is manipulating them for their own interests? [immudb](https://github.com/codenotary/immudb) is a high-speed immutable database with built-in cryptographic proof and verification and the perfect place to store data safely. This tutorial is about how to store case numbers or any data in immudb and adding them to a sortable set and search for data using go. If you already installed immudb, make sure to update and recompile because these are some pretty new functions. 

## How to store data in immudb

Immudb stores data in a key-value schema. Antigen tests result are typically negative, positive, or invalid. Some tests can be later identified as false positives or false negatives. Every key should contain the region, the type of antibodies that have been tested, and the patient id (pid).


| key  |  value |
|---|---|
| location:region1:antibody:SARS-CoV-2:pid:1267449 | positive | 
| location:region1:antibody:SARS-CoV-2:pid:9784321 | negative |  
| location:region1:antibody:SARS-CoV-2:pid:2334563 | invalid | 

To identify hotspots of cases, it is necessary to be able to find and sort all tests from a specific region. Immudb is providing this functionality by the Zadd. We can add a record with ZAdd given a name of a set, a score, and the key of the record. It is also possible to search for records with the Scan function. The Scan function will work with prefixes and will search over all entries in a specific immune database.

 <img src="/images/blog/keyvalueadd.png" width="2500" />


## Code says more than pictures 
This blog is the successor of [immudb-using-go](https://codenotary.com/blog/store-vaccine-health-data-in-immudb-using-Go). Please look into the previous blog to learn about how to add new databases and use them. First, we have to define our data as a struct. Our antigenData struct is already prepared for ZAdd and later references. We will group the sets by the region. The regions will be called region1, region2 ... for demonstration purposes. 

```go
	var antigenData = struct {
		keys    [][]byte
		values  [][]byte
		refKeys [][]byte
		set     []byte
		scores  []float64
	}{
		keys:    [][]byte{[]byte("location:region1:antibody:SARS-CoV-2:pid:1267449"), 
                 []byte("location:region1:antibody:SARS-CoV-2:pid:9784321"), 
                 []byte("location:region1:antibody:SARS-CoV-2:pid:2334563")},
		values:  [][]byte{[]byte("positive"), []byte("negative"), []byte("invalid")},
		refKeys: [][]byte{[]byte("false positive"), []byte("correct"), []byte("correct")},
		set:     []byte("region1"),
		scores:  []float64{2020342, 2021003, 2020350},
	}
```
Before we can add a record with ZAdd to a set, we have to save them in immudb. We can do that by simply iterating over the antigenData.keys and antigenData.values. Client.Set will store the key-value pair in immudb. It is also possible to read and write with build-in cryptographic verification using client.SafeSet and SafeGet.

```go
	for i := 0; i < len(antigenData.keys); i++ {
		key1, value1 := antigenData.keys[i], antigenData.values[i]
		_, err2 := client.Set(ctx, key1, value1)
		if err2 != nil {
			log.Fatal(err2)
		}
	}
```
Given the existence of the records, we can use ZAdd to group them into a set. The set for these records is named region1, the scores are values that can be used for sorting (Timestamp like: YYYYDDD) and last but not least we need the key. Again we will ZAdd all the records by the key of our antigenData struct.

```go
	for i := 0; i < len(antigenData.keys); i++ {
		_, err := client.ZAdd(ctx, antigenData.set, antigenData.scores[i], antigenData.keys[i], nil)
		if err != nil {
			log.Fatal(err)
		}
	}
```

Now our entries have been added to a set called region1. We are now able to request the set with ZScan and specific options called ZScanOptions. With ZscanOptions it is mandatory to specify the Set that will be Scanned. Other parameters like Offset, Limit, Reverse, and Min, Max are allowing to change output and it’s ordered. For example, when using a timestamp as a score it is possible to sort for the most recent records as well as limiting the timeframe by the Min and Max parameter. Very useful for our example data.
```go
	zStructuredItemList, err := client.ZScan(ctx, &schema.ZScanOptions{
		Set: antigenData.set,
	})
```
The printout of the  ZstructuredItemList will contain following records:
```
index: 0
 key: location:region1:antibody:SARS-CoV-2:pid:1267449
 value: positive
 hash: d6ec038013b59d3bbd6886ead9fcf3bd74fa6b3ceafb9ba2d206a2309933665b
 time: 2020-12-10 04:06:46 -0800 PST
        ------
index: 2
 key: location:region1:antibody:SARS-CoV-2:pid:2334563
 value: invalid
 hash: 90d4ba3a4996a27bd0a427f0f435acccbfefe3c12214c86eed75ef661f294aa5
 time: 2020-12-10 04:06:46 -0800 PST
        ------
index: 1
 key: location:region1:antibody:SARS-CoV-2:pid:9784321
 value: negative
 hash: b3b6e2d543b238f80a45d7bbbc11c137ece738c5cc4c719f453b743c96914fad
 time: 2020-12-10 04:06:46 -0800 PST
        ------
```
Let's do this again with some more options.
```go
	zStructuredItemList, err := client.ZScan(ctx, &schema.ZScanOptions{
		Set: antigenData.set,
	})
```
```go
	var scoremin= &schema.Score{Score: float64(2020343)}
	zStructuredItemList, err := client.ZScan(ctx, &schema.ZScanOptions{
		Set: antigenData.set,
		Limit: uint64(2),
		Min: scoremin,
	})
```
This time we specified a limit of two and a scoremin of 2020342. That means we will not see the records below 2020343. The output now contains only two records:
```
index: 2
 key: location:region1:antibody:SARS-CoV-2:pid:2334563
 value: invalid
 hash: 90d4ba3a4996a27bd0a427f0f435acccbfefe3c12214c86eed75ef661f294aa5
 time: 2020-12-10 04:06:46 -0800 PST
        ------
index: 1
 key: location:region1:antibody:SARS-CoV-2:pid:9784321
 value: negative
 hash: b3b6e2d543b238f80a45d7bbbc11c137ece738c5cc4c719f453b743c96914fad
 time: 2020-12-10 04:06:46 -0800 PST
        ------
```
We have shown that we can sort and order a specific set of records. We could now look at exactly the records we want for the region of interest. There is also another way of searching records in immudb using the function Scan. With Scan we can specify ScanOptions that will help us finding records by a prefix. It is also possible to limit the number of records or change the sort order by reversing.

```go
    scanresult, err := client.Scan(ctx, &schema.ScanOptions{ Prefix: []byte("location:region1"),
        Limit: uint64(3),
        Reverse: true,
    })
```
The result will include up to 3 records starting with "location:region1" in a reversed order. Many antigen test results turn out to be false positive. In that case, we can either overwrite the key with a false-positive result or add a false positive reference to our test result key.

```go
	key0Ref := append([]byte("false positive"))
	verifiedIndex, err := client.Reference(ctx, key0Ref, antigenData.keys[0],nil)
	if err != nil {
		log.Fatal(err)
	}
```


<img style="float: right;" src="/images/blog/mascotfree.png" width="300">
In this blog, we have shown how to store critical data with up-to-date technology. 

Full source: https://github.com/codenotary/immudb-client-examples/blob/master/blog-examples/storing-virus-case-numbers-in-immudb/main.go

The future will be decided by data-driven decisions and will benefit leaders who will use technology to make those decisions as transparent and trustworthy as possible. Immudb is a great tool to ensure these characteristics. If you want to be that leader, please follow [immudb](https://github.com/codenotary/immudb) on GitHub and leave a star to stay tuned as we are constantly improving our technology.
