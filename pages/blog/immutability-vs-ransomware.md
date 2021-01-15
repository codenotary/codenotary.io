---
title: "Fight Ransomware with immutability"
date: "2021-01-15"
image: "/images/blog/database.png"
tags: ["ransomware", "encryption", "immudb", "Go"]
---


# Immutability vs Ransomware

<img style="float: right;" src="/images/blog/mascotfree.png" width="350">

Ransomware is one of the most effective types of malware at the moment. It is blocking access by encrypting the victim’s data and demands a ransom payment to decrypt it. 

The number of ransomware attacks has grown immensely and some ransomware crypto worms even became famous in mainstream media like WannaCry or CryptoLocker. Ransomware has the potential to take down businesses, destroying months of work, or even cost lives for example if a hospital is being crippled. A fast and reliable backup solution is the best tool against ransomware attacks. 

Unfortunately, backups can be encrypted too. Once created we don't want our backups to be manipulated. True offline backups like tapes are possible solutions. However, it takes a long time to recover from tape, especially if the tape system is far away from the target platform. The challenge is to create immutable backups on fast storage solutions. The open-source technology [immudb](https://github.com/codenotary/immudb) can fulfill the requirement of storing data immutably with unprecedented performance and scalability. 

## Why immutability is important

Things can still go wrong while cleaning an environment from ransomware. For example, if a backup is being deployed it can be reinfected because it is not yet patched against the malware. Meanwhile, everyone knows that a proper backup-strategy is key to prevent damage from ransomware, that's why it is important to protect the backups with state-of-the-art technology. Using immudb provides the following benefits:

- Once data is added it can't be changed or deleted
- Each record has its own history table tracking changes
- Scalability and performance that can keep up with your environment

Neither cybercriminals nor program errors or disgruntled employees can change the records. Even if the ransomware is still active, it will not overwrite records but instead, assign a new value to it. The changes are easily tracked by using the immudb history function. Querying for the last clean record index will provide the precious backup information without much trouble.

## Safe backups immutably 

Let's get our hands on a real world example using the favorite programming languages of our gophers: Go. 
This tutorial will show how to observe file changes in a directory and save the file and it's content to immudb if someone or something changed it. 
[Download](https://docs.immudb.io) and follow the installation instructions of immudb. First, we have to create the directory that will be observed. 

**Just keep in mind that the immudb server should run in a different and protected environment** and not on the same server where the files are stored your want to protect.


```go

package main

import (
	"context"
	"github.com/codenotary/immudb/pkg/api/schema"
	immuclient "github.com/codenotary/immudb/pkg/client"
	"github.com/fsnotify/fsnotify"
	"google.golang.org/grpc/metadata"
	"io/ioutil"
	"log"
	"os"
	"strings"
)

// creates example data if not existent
func SetUp() {
	if _, err := os.Stat("protected-data"); os.IsNotExist(err) {
		err = os.Mkdir("protected-data", 0755)
		if err != nil {
			log.Fatal(err)
		}

		f, err := os.Create("protected-data/data.txt")
		if err != nil {
			log.Fatal(err)
		}
		defer f.Close()
		_, err2 := f.WriteString("No ransom for hackers!\n")

		if err2 != nil {
			log.Fatal(err2)
		}

		log.Println("Data created!")
	}
	log.Println("Data exists!")
}
```
In the next step, the setup function is called to check the directory and create a new one if it exists with a file data.txt. Now the connection to immudb is needed. 

immudb supports multiple databases. We are creating a new database called "backupdb" and switch to that database.

```go

func main() {
	// invoking data creation
	SetUp()

	client, err := immuclient.NewImmuClient(immuclient.DefaultOptions())
	if err != nil {
		log.Fatal(err)
	}
	ctx := context.Background()
	// login with default username and password
	lr, err := client.Login(ctx, []byte(`immudb`), []byte(`immudb`))
	if err != nil {
		log.Fatal(err)
	}

	// immudb provides multidatabase capabilities.
	// token is used not only for authentication, but also to route calls to the correct database
	md := metadata.Pairs("authorization", lr.Token)
	ctx = metadata.NewOutgoingContext(context.Background(), md)
	
		// creating new database
		err = client.CreateDatabase(ctx, &schema.Database{
			Databasename: "backupdb",
		})
		if err != nil {
			log.Fatal(err)
		}
	
	// switch to database
	resp, err := client.UseDatabase(ctx, &schema.Database{
		Databasename: "backupdb",
	})

	md = metadata.Pairs("authorization", resp.Token)
	ctx = metadata.NewOutgoingContext(context.Background(), md)
```
Now the watcher is being started. Fsnotify will notify by naming the file when changes are made in the directory "protected-data". If changes were made, the path to the file as key and the content as value is being saved to immudb. Ransomware would trigger that notification. The path and the new encrypted values would be saved to immudb but previous versions of the file would still exist immutably in immudb. These previous versions can be looked up by the history function.

```go
	watcher, err := fsnotify.NewWatcher()
	if err != nil {
		log.Fatal(err)
	}
	defer watcher.Close()

	done := make(chan bool)

	go func() {
		for {
			select {
			case event, ok := <-watcher.Events:
				if !ok {
					return
				}
				// filter temporary file names
				res := strings.Contains(event.Name, ".goutputstream")
				if res == false {
					// get current directory
					dir, err := os.Getwd()
					if err != nil {
						log.Fatal(err)
					}
					log.Println(dir)
					// read content of file changed file in directory
					file, err := ioutil.ReadFile(event.Name)
					if err != nil {
						log.Println(err)
					}
					// create key for immudb
					key := []byte(dir +"/"+ event.Name)
					// save content of file to value for immudb
					value := file

					// set key-value pair in immudb
					tx, err2 := client.VerifiedSet(ctx, key, value)
					log.Printf("Set and verified key '%s' with value '%s' at tx %d\n", key, value, tx.Id)
					if err2 != nil {
						log.Fatal(err2)
					}

					// lookup history of file by key
					req := &schema.HistoryRequest{
						Key: []byte(key),
					}

					entries, err := client.History(ctx, req)
					if err != nil {
						log.Fatal(err)
					}
					log.Println("History-Entries:\n", len(entries.GetEntries()), string(req.Key))

				}

				if event.Op&fsnotify.Write == fsnotify.Write {
					log.Println("modified file:", event.Op, event.Name)
				}
			case err, ok := <-watcher.Errors:
				if !ok {
					return
				}
				log.Println("error:", err)
			}
		}
	}()

	err = watcher.Add("protected-data")
	if err != nil {
		log.Fatal(err)
	}
	<-done
}


```
## Add immutability to databases

Another possible ransomware attack could focus on databases. Cybercriminals could gain access to databases by using SQL injections. They then use their access levels to encrypt whatever they get their hands on. Immudb can keep up with the fastest databases and back up their data. Changes in databases can be captured and stored verifiable and tamperproof in immudb. Take a look at out [immdb-postgres-demo](https://github.com/codenotary/immudb-postgres-demo) for further information.

<img src="/images/blog/database.png">



## New opportunities by combining immutability and scalability
. 
Immudb combines immutability and scalability like no technology before. The use cases are plentiful. Ransomware is a huge thread for businesses. Outsmart the crypto-viruses by using crypto-technology against them. 

CodeNotary products and technologies can also be used to protect CI/CD pipelines making attacks like [sunburst](https://codenotary.com/blog/solarwinds-sunburst/) almost impossible.