---
title: "Store vaccine health-data in immudb using Go"
date: "2020-12-01"
image: "/images/blog/gophermasker.png"
tags: ["Go", "immudb", "immutability", "example"]

---

# Go: How to store demo health-data in immudb

<img style="float: right;" src="/images/blog/gophermasker.png">

Gophers are not made for being locked down. Luckily the pandemic is about to end as multiple promising vaccines will be released soon. Once again innovation is the key to success. In order to minimize the damage to economies and well-being, we have to outsmart the virus by using the latest technology. Unfortunately, yellow cards (certificate of vaccination) are relicts of the 19 th century. I lost my yellow card some years ago, most entries were bleached out anyways. This is not a proper tool for today’s situation. I wished my vaccination data was stored safely, immutable, and verifiable like in immudb. [Immudb](https://github.com/codenotary/immudb) is an open-source, lightweight, high-speed immutable database with built-in cryptographic proof and verification. Much smarter technology than paper cards and surprisingly easy to use. In fact it takes just some minutes. This Blog is about how to store data in immudb using every gopher’s favorite programming language: Go.

## How to store demo health data in immudb (tutorial)

<img style="float: right;" src="/images/blog/vaccinestockphoto.jpg" width="350"/>
How does vaccination data look like? The following data model is inspired by the international [Health Level 7](https://www.hl7.org/) standard but strongly simplified. First, we need the personal data of the patient. Every person has a unique identification value, a name, and a date of birth:


| Person  | identification | name |  date_of_birth | 
|---|---|---|---|
| 1  | 345623 | Smarty McGopher | 20/10/1980 | 

Every person can get multiple vaccinations. Each vaccination has a manufacturer, a substance and product_id for identifying the charge, date of vaccination, and the id of the doctor who supervised the vaccination:

| Vaccination | manufacturer | substance |  product_id |   date_of_vaccination |   doctor_id | 
|---|---|---|---|---|---|
| 1  | Vaccine int. corp | IPV | 1230 | 15/09/2012| 345231 | 
| 2  | Medco | HEPB | 3309 | 03/06/2015| 345231 | 
| 3  | Gopher Immunization inc. | COV19 | 1097 | 15/03/2021| 345231 | 



<img src="/images/blog/vaccuml.png" width="800px">

Immudb is able to store key-value pairs. In order to use immudb for our demo vaccination data, we have to transform it into that schema.


|key (identification:valuename) |value                   |
|-------------------------------|-----------------------------|
|345623:name            |Smarty McGopher       |
|345623:date_of_birth          |20/10/1980     |


Let's join the vaccination information with the personal data:

|key (identification.person:substance.vaccination:valuename |value                   |
|-------------------------------|-----------------------------|
|345623:IPV:manufacturer            | Vaccine int. corp	      |
|345623:HEPB:manufacturer             | Medco	      |
|345623:COV19:manufacturer             | Gopher Immunization inc.	      |
|345623:IPV:date_if_vaccination            | 15/09/2012	      |
|345623:HEPB:date_if_vaccination            | 03/06/2015	      |
|345623:COV19:date_if_vaccination            | 15/03/2021	      |
|345623:IPV:doctor_id            | 100234	      |
|345623:HEPB:doctor_id             | 100234	      |
|345623:COV19:doctor_id            | 100956	      |
|345623:IPV:product_id            | 1230	      |
|345623:HEPB:product_id             | 3309	      |
|345623:COV19:product_id            | 1097	      |

The keys in immudb are not unique, which means you can set them again and if you request the value of the key you will get back the most recent value. Internally each key has an own table and you can trace the changes through a history function. You can also set a JSON object as the value of a key. For example, we could transform the vaccinations of Smarty McGopher into a JSON structure and save multiple vaccinations by using only one key. The downside of that is that we have to get all vaccinations and add the latest when he is vaccinated again.


## Let's look at the code

We are using Google's Golang in this tutorial. However, [immudb](https://github.com/codenotary/immudb) supports a whole lot of languages and there is also a REST-interface available by using [immugw](https://github.com/codenotary/immugw).

First we need to get immudb and run it. It takes just some seconds using this [quickstart](https://github.com/codenotary/immudb#quickstart) guide. Next, we connect through the [immuclient](https://github.com/codenotary/immudb/pkg/client) to immudb. The default options will use your local IP address and port 3322. The default user is immudb and the default password also immudb. Look up the full code on [github](https://github.com/codenotary/immudb-client-examples/tree/master/blog-examples/store-vaccine-health-data-in-immudb-using-Go).

```go
client, err := immuclient.NewImmuClient(immuclient.DefaultOptions())
ctx := context.Background()
// login with default username and password
lr, err := client.Login(ctx, []byte(`immudb`), []byte(`immudb`))

```
We are now logged in. Immudb provides multi-database capabilities, that's why we can create a new database. Let's call it “yellowcard” (remember you can only create a database with that name once). We also have to switch to that database in order to use it. The switch is being done by the token, as it is not only used for authentication, but also to route calls to the correct database.

```go
err = client.CreateDatabase(ctx, &schema.Database{
	Databasename: "yellowcard",
})
	// switch to database
resp, err := client.UseDatabase(ctx, &schema.Database{
	Databasename: "yellowcard",
})

md = metadata.Pairs("authorization", resp.Token)
ctx = metadata.NewOutgoingContext(context.Background(), md)
```
Having switched to our database, we are now ready to set our data. Golang provides a great datatype for the key-value schema called map. A map is filled by a key and it's the corresponding value. The type of the value is being set when defining a map. Immudb loves bytes so we choose bytes.

```go
// key-value map for personal data
person := map[string][]byte{			"345623:name": []byte("Smarty McGopher"),
										"345623:date_of_birth":  []byte("20/10/1980")}
// key-value map for vaccination data
vaccinations := map[string][]byte{      "345623:IPV:manufacturer": []byte("Vaccine int. corp"),
										"345623:HEPB:manufacturer" : []byte("Medco"),
										"345623:COV19:manufacturer": []byte("Gopher Immunization inc."),
										"345623:IPV:date_if_vaccination": []byte("15/09/2012"),
                                         ...
```
This looks already pretty good, we could now already set the key-value pairs in immudb. However Smarty McGopher wants full control over his data, that's why he decides to encrypt the values using his password.

```go
var password = "SmartyMcGopherisSmart-and-encrypts!#vaccinationdata!"
//create a new map with encrypted values
var encryptedPersonMap map[string][]byte=encryptMapValues(person,password,randomSalt(10))
var encryptedVaccinationMap map[string][]byte=encryptMapValues(vaccinations,password,randomSalt(10))
```
This looks good. Now we can iterate over the keys of the maps and write verifiably in immudb! You can write and read with built-in cryptographic verification. Also, we can read values by querying for the key, but of course, they are encrypted. We have to decrypt them first to be able to read them.

```go
// sets key-values of map in immudb
for key, value := range encryptedPersonMap {
	if _, err := client.VerifiedSet(ctx, []byte(key), value); err != nil {
		log.Fatal(err)
	}
}

for key := range encryptedPersonMap {
	if item, err := client.Get(ctx, []byte(key)); err != nil {
		log.Fatal(err)
	} else {
		// immudb sdk provides structured data. https://github.com/codenotary/immudb#structured-value
		fmt.Printf("%s\n", decryptValue(item.Value, password, randomSalt(10)))
	}
}
```

<img style="float: right;" src="/images/blog/mascotfree.png" width="300">

Our Gopher's vaccination data is now verifiable and immutably stored in immudb. Today’s challenges need technology like immudb to make the world a better place again. Smarty McGopher could now easily and safely proof his vaccinations and travel again. There are many more features of immudb that will be discussed in future blogs like adding references and indexes to data. Keep track of immudb by leaving a star at [github](https://github.com/codenotary/immudb).
