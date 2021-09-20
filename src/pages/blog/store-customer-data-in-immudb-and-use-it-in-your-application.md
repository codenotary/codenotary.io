---
title: "Store customer data in immudb and use it in your application"
date: "2020-11-24"
image: "/images/blog/gopher_handling_python.jpg"
tags: ["immudb", "Python", "Guideline"]

---

## Requirements
- <a href="https://github.com/codenotary/immudb-client-examples/tree/master/blog-examples/store-customer-data-in-immudb-and-use-it-in-your-application" target="_blank">customer and transactions .csv files</a>


# Store customer data in immudb and use it in your application

Snakes like pythons are one of the worst enemies of gophers, never the less gophers should know how to handle them. In this blog, you will learn how to transform relational data into a key-value schema that will fit in immudb with python. Once the records are written into immudb they are immutable, auditable and secure. First we have to import ImmudbClient from  [immudb-py](https://pypi.org/project/immudb-py/) and pandas for processing the example .csv data. We can connect to immudb now using the IP address of immudb. If you don't have immudb installed check out [immudb](https://github.com/codenotary/immudb) and start it up in just some seconds. 


<img src="/images/blog/gopher_handling_python.jpg" width="420" alt="Gopher handling python"/>


```python
from immudb.client import ImmudbClient
import pandas as pd
import json
import os
client = ImmudbClient()
#ip and port of your immudb installation
client = ImmudbClient("ip:port")
#standard user is immudb password immudb
client.login("immudb", "yourpassword");
```


```python
#if this works you are logged in
client.listUsers()
#create a database
client.databaseCreate(b"db1");
```


```python
#read the .csv files into DataFrames 
df1 = pd.read_csv("customers.csv",sep=';')
df2 = pd.read_csv("transactions.csv",sep=';')
```


## Immutability for application data

Let's take a look at our example data. We have two tables with customer information and a transactionlog. Every customer has a unique accountid, a first and a last name, gender and date_of_birth. The transaction log is very minimalistic and contains the credit card information of the paying customer as well as the amount transfered in the transaction and the recipient. The tables can be matched by the accountid. Data like this can be easily managed in a RDBMS. We could easily get every transaction from a specific customer via SQL. Immudb, however, requires a key-value schema in order to reach the highest levels of performance.

<img src="/images/blog/erdiagram.png" width="900" />

The customer table has 18 rows and was stored in a data frame by the pandas package. The account ID (accountid) is used as the unique key for this table. We have to think about new keys because we can only store one value for every key into immudb.

|   |  gender | first_name  |  last_name | date_of_birth  | accountid |
|---|---|---|---|---|---|
| 0  | male | Rufus | Faust | 27/10/1991  | 274566  | 
| 1  | male | David | Humphrey | 16/03/1999 | 506214  | 
| 2  | male | Phillipp | Lion | 25/10/1935  | 375731  |
| ...| ... | ... | ...  | ...  | ...  | 
| 17  | female | Heike | Hoffmann | 05/05/1992  | 310829  |

Assumed we want to put every information of the table in a key-value schema we can create pairs like this: 

| key  |  value |
|---|---|
| customer:accountid:gender | gender | 
| customer:accountid:first_name | first_name |  
| customer:accountid:last_name | last_name| 
| customer:accountid:date_of_birth | date_of_birth  | 

Every information of an original table record is now split into key-value pairs and ready for immudb.
Now we can replace the variables with the actual data and set the key-value pairs in immudb.


```python
#example for | customer:accountid:gender | gender | 
client.set(b"customer:274566:gender", b"male");
customer = client.get(b"customer:274566:gender");
print(customer)
```

    GetResponse(value=b'male', timestamp=1606211775)


The transactionlog table has 36 rows and the credit card information are spread into separate columns. The account ID (accountid) is matching with customers from the customer table. Also, the recipient (equals accountid or recipient) is part of the customers’ table.

|   |  card | transid | issued  | bank  | accountid  | check  | expire  | recipient  | amount |  
|---|---|---|---|---|---|---|---|---|---|
|  0 | Visa  | 23032 | 1  | 51428  | 274566  | 1656  | Sep-21  | 484902  | 2,93 | 
|  1 | MasterCard  | 23033 | 1  | 51428  | 274566  | 1756  | Sep-21  | 484902  | 304,40  | 
|  2 | MasterCard  | 23034 | 2  | 51428  | 274566  | 6770  | Dec-19  | 381346  | 234,30 |  
| ...| ... | ... | ... | ...  | ...  | ...  | ...  | ...  | ... |  
|  35 | Visa  | 23032 | 1  | 51428  | 310829  | 3346  | Sep-21  | 484902  | 19,00 | 

There are multiple options to store data like this in immudb depending on which data needs to be immutable. For example, you could create a new key containing the customer accountid, the transactionlog accountid, the recipient, and the transaction ID: accountid.customer:accountid.transactiolog:recipient:transid:amount and the amount as value.


|key (accountid.customer:accountid.transactionlog:recipient:transid:amount) |value (amount)                  |
|-------------------------------|-----------------------------|
|274566:274566:484902:23032:amount            |2.93        |
|274566:274566:484902:23033:amount           |304.40        |

## How to store multiple values with just one key

Now let's try to save every transaction from a specific customer. Every key can just serve one value however, the value doesn’t have to be a single word. It is possible to store json objects as value. First, we create key with informations that are useful for indexing, sorting, or are needed for creating subsets. This will be helpful if you are planning to use secondary indexes later. 

|   |  key |     creditcardnr |   amount | recipient |
|---|---|---|---|---|
|0  |   274566:male:27.10.1991 | 1514282745661656  |   2,93  |   484902|
|1  |   274566:male:27.10.1991 | 1514282745661756  | 304,40  |   484902|
|2  |   274566:male:27.10.1991 | 2514282745666770  | 234,30  |   381346|
|3  |   506214:male:16.03.1999 | 2514285062142358  | 177,50  |   381346|

Now we have to convert and add the values for every unique key into a json object. The chart below is showing how the items will be stored in immudb. Every key produces a unique hash, which means you can set the same key again and update the value connected to it. The history function keeps track of those changes.  
<img src="/images/blog/keyvaluediagram.png" width="900" />

## Let's do it

The tables now have to be merged by using the account ID (accountid) of the customer. For simplicity, we also combine columns to a new single value column and drop unnecessary data. These operations can be easily done in SQL or as shown below by using pandas.


```python
#merge some rows to get a clean creditcardnumber
df2['creditcardnr'] =   df2['issued'].astype(str) +''+ \
                        df2['bank'].astype(str) + '' + \
                        df2['accountid'].astype(str) + ''+ \
                        df2['check'].map(str)
#match the dataframes by accountid
df_final = df1.merge(df2, left_on = 'accountid', right_on = 'accountid')
#build a key that is fit for purpose
df_final['key'] =       df_final['accountid'].astype(str) +':'+ \
                        df_final['gender'].astype(str) + ':' + \
                        df_final['date_of_birth'].map(str)
#drop unecessary data
df_final.drop(columns=['first_name', 'last_name','card','transid','issued','bank','accountid','gender','date_of_birth'])
df_final = df_final.reindex(columns=['key','creditcardnr','amount','recipient'])
```

Now we have a resulting table "df_final" that has multiple rows with some identical keys but various values. That's why we iterate over the unique subset of keys and add the values to a json object. We then set the key and the json object in immudb. Having done so we can print the value by requesting the keys in immudb.


```python
uniquekeylist = df_final['key'].unique()

for key in uniquekeylist:
    
    #convert values of creditcardnr, amount and recipient to json
    df_json=df_final.loc[df_final['key']==key,['creditcardnr','amount','recipient']]
    result = df_json.to_json(orient="split")
    parsed = json.loads(result)
    #insert key, values into immudb
    client.set(bytes(key, encoding= 'utf-8'), bytes(result, encoding= 'utf-8'));
    request = client.get(bytes(key, encoding= 'utf-8'));
    print(request)
    
#gophers always logout     
client.logout();
```

    GetResponse(value=b'{"columns":["creditcardnr","amount","recipient"],"index":[0,1,2],"data":[["1514282745661656","2,93$",484902],["1514282745661756","304,40$",484902],["2514282745666770","234,30$",381346]]}', timestamp=1606211829)
    GetResponse(value=b'{"columns":["creditcardnr","amount","recipient"],"index":[3,4],"data":[["2514285062142358","177,50$",381346],["2514285062148324","4,30$",381346]]}', timestamp=1606211829)
    GetResponse(value=b'{"columns":["creditcardnr","amount","recipient"],"index":[5],"data":[["2514283757312495","6599,99$",381346]]}', timestamp=1606211829)
    GetResponse(value=b'{"columns":["creditcardnr","amount","recipient"],"index":[6],"data":[["1514282380109467","4,60$",484902]]}', timestamp=1606211829)
    GetResponse(value=b'{"columns":["creditcardnr","amount","recipient"],"index":[7],"data":[["1514281951803212","12,30$",484902]]}', timestamp=1606211829)
    GetResponse(value=b'{"columns":["creditcardnr","amount","recipient"],"index":[8,9],"data":[["1514285703267395","19,70$",484902],["1514285703263782","21,50$",484902]]}', timestamp=1606211829)
    GetResponse(value=b'{"columns":["creditcardnr","amount","recipient"],"index":[10],"data":[["1514281001421483","75,90$",484902]]}', timestamp=1606211829)
    GetResponse(value=b'{"columns":["creditcardnr","amount","recipient"],"index":[11],"data":[["1514289592827327","35,00$",484902]]}', timestamp=1606211829)
    GetResponse(value=b'{"columns":["creditcardnr","amount","recipient"],"index":[12],"data":[["1514287210885249","16,50$",484902]]}', timestamp=1606211829)
    GetResponse(value=b'{"columns":["creditcardnr","amount","recipient"],"index":[13],"data":[["1514283458405123","25,60$",484902]]}', timestamp=1606211829)
    GetResponse(value=b'{"columns":["creditcardnr","amount","recipient"],"index":[14],"data":[["1514288089742948","30,50$",484902]]}', timestamp=1606211829)
    GetResponse(value=b'{"columns":["creditcardnr","amount","recipient"],"index":[15,16,17],"data":[["1514287604713566","39,99$",484902],["1514287604712258","19,00$",484902],["1514287604713121","2,93$",484902]]}', timestamp=1606211829)
    GetResponse(value=b'{"columns":["creditcardnr","amount","recipient"],"index":[18,19],"data":[["1514287032617983","304,40$",484902],["2514287032612835","234,30$",381346]]}', timestamp=1606211829)
    GetResponse(value=b'{"columns":["creditcardnr","amount","recipient"],"index":[20,21],"data":[["2514289734593245","177,50$",381346],["2514289734591324","4,30$",381346]]}', timestamp=1606211829)
    GetResponse(value=b'{"columns":["creditcardnr","amount","recipient"],"index":[22,23,24],"data":[["2514282317293404","6599,99$",381346],["2514282317298532","99,00$",381346],["1514282317292965","4,60$",484902]]}', timestamp=1606211829)
    GetResponse(value=b'{"columns":["creditcardnr","amount","recipient"],"index":[25,26],"data":[["1514287639143576","12,30$",484902],["1514287639141796","19,70$",484902]]}', timestamp=1606211829)
    GetResponse(value=b'{"columns":["creditcardnr","amount","recipient"],"index":[27,28],"data":[["1514289043051356","21,50$",484902],["1514289043053226","75,90$",484902]]}', timestamp=1606211829)
    GetResponse(value=b'{"columns":["creditcardnr","amount","recipient"],"index":[29,30,31,32,33,34],"data":[["1514283108291006","35,00$",484902],["1514283108293009","16,50$",484902],["1514283108291236","25,60$",484902],["1514283108291353","30,50$",484902],["1514283108292734","39,99$",484902],["1514283108293346","19,00$",484902]]}', timestamp=1606211829)


# Summary
Python is not without a reason very popular in data science. It is easy-to-use and has a great library support. With [immudb-py](https://github.com/codenotary/immudb-py) you are able to use [immudb](https://github.com/codenotary/immudb) with all its unparalleled benefits in your python environment without a hassle. Transforming data into a key-value schema using python and storing it in immudb is straight forward and fun. It is also very comprehensible and that's why a perfect tool for a proof of concept. Stay tuned for future blogs and press the star button on [github](https://github.com/codenotary/immudb) to hear about the latest features.
