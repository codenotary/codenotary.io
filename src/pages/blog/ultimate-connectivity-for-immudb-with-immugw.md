---
title: "Ultimate connectivity for immudb with immugw"
date: "2020-12-29"
image: "/images/blog/gopher.png"
tags: ["Go", "immudb", "immutability", "immugw"]

---

# Ultimate connectivity for immudb with immugw

<img style="float: right;" src="/images/blog/gopher.png">

API's play a crucial role to overcome the frontiers of niche programming languages and heterogeneous information systems. Luckily there is one protocol almost every system understands: HTTP. The SDKs, immuclient, and immuadmin are communicating over gRPC and mTLS Authentication directly with immudb. Immugw is a middleware that translates REST calls into gRPC for you. This way [immudb](https://github.com/codenotary/immudb) can be used anywhere.


| key  | gRPC  |  HTTP-API |
|---|---|---|
| Protocol | HTTP/2 | HTTP | 
| Payload | Protobuf(small,binary) | JSON (readable, huge) |  
| Specification | strict | every HTTP |  
| Performance | very fast and efficient | decent (7 - 10 times slower) |  
| Performance | TLS | TLS |  

REST APIs are widely used and popular APIs for app integrations, microservice integrations, and web services. 
If the goal is to build an internal or open system that exposes immudb as a resource to other parties, immugw is the right tool to use. 
REST is good enough for most use cases, universally supported, and easy to use.

# REST-Calls with immudb, fast and easy

Our hard-working gophers always do their best to help you get things done without a headache. [Immugw](https://docs.immudb.io/immugw/#use-immugw) is well documented and there is a [swagger file](https://github.com/codenotary/immugw/blob/master/pkg/api/gw.schema.swagger.json) for reference. However, sometimes things can't be fast enough. The open-source project [curl-converter](https://curl.trillworks.com/) is converting requests with curl syntax into to Python, Ansible URI, MATLAB, Node.js, R, PHP, Strest, Go, Dart, JSON, Elixir, and Rust. [Startup immudb](https://docs.immudb.io/quickstart.html#download-the-binaries) and [immugw](https://docs.immudb.io/immugw/#run-immugw) in seconds to try your first API Call. Loop up the [curl examples](https://docs.immudb.io/immugw/curl.html#login-you-can-either-create-another-user-with-immuadmin-or-user-the-built-in-immudb-user-default-pw-immudb) from the immugw docs. First, we are going to log in.

```curl
curl --location --request POST 'http://immugw:3323/v1/immurestproxy/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "user": "'$(echo -n immudb | base64)'",
    "password": "'$(echo -n TWdn4TK0ACq8amSeYBW!9E9h3S0am?G! | base64)'"
    }
}'
``` 
Paste the curl command into the [converter](https://curl.trillworks.com/) and select the output language. For this blog, we are selecting Python. 
Now the converter is giving us the Python code sniped and it is almost perfect. We just have to do the base64 conversion by our selves.

<img src="/images/blog/converter.jpg" width="2500" />

Add the correct IP of your immugw instance to the code as well as the user and password. Login credentials should never be passed in plaintext that’s why it is important to encode them. This can be easily done with a base64 encoder. By calling the login API with the correct credentials it will respond with a valid token. We will have to use that token for further requests.

 ```python
headers = {
'Content-Type': 'application/json',
}
user = base64.b64encode("immudb".encode("utf-8"))
password = base64.b64encode("immudb".encode("utf-8"))


url = 'http://127.0.0.1:3323/v1/immurestproxy/login'
data = '{ "user": "'+str(user, "utf-8")+'", "password": "'+str(password, "utf-8")+'"}'
response = requests.post(url, headers=headers, data=data)
#variable will be used in follow up calls providing the token json_response["token"]
json_response = response.json()
print(response.json())
```
The API will response with codes. It is important to understand what they mean. 
*Response code 200 is signaling that the request was successful. 
*Code 403 "forbidden" is saying that there are missing some authorizations. 
*The codes 500 stands for internal server error and 503 is saying that the service is unavailable. 

There are existing many more response codes that can be found on [wikipedia](https://de.wikipedia.org/wiki/HTTP-Statuscode). 

Our call should be responded by code 200 and with a token. The token can be displayed by printing "response.json()". 
Having that token enables us to do follow up calls.

## switching database
With immudb it is possible to create and use many databases. If you don't want to use an additional database other than the standard one, please skip this step. I created a database called "restapiblog" for this blog. We have to switch to that database to use it. This can be done with an API-call too. Things get more interesting now because every follow-up call using this database must use the new token, that came with the switch.
```python
headers = {
    'Content-Type': 'application/json',
    #token that came with the login response
    'Authorization': json_response["token"],
}
response = requests.get('http://127.0.0.1:3323/v1/immurestproxy/usedatabase/restapiblog', headers=headers)
print(response.json())
json_response = response.json()
#the token must be used for every call using database restapiblog
new_token=json_response["token"]
```

## add item and get item
Time to add some key-values. This is again from our curl-examples. 
Adding the client "client:Ms. Noelia Jaskolski" and the value "Visa 1514284849020756 09/21" to immudb. 
For this call, it is important to have the token from the login or the usedatabase call. 
If successful, this call will respond with the index of the item. 

```python
key = base64.b64encode("client:Ms. Noelia Jaskolski".encode("utf-8"))
value = base64.b64encode("Visa 1514284849020756 09/21".encode("utf-8"))

headers = {
    'Content-Type': 'application/json',
    'Authorization': json_response["token"],
}

data = '{"key": "'+str(key, "utf-8")+'", "value": "'+str(value, "utf-8")+'"}'
print(data)
response = requests.post('http://127.0.0.1:3323/v1/immurestproxy/item', headers=headers, data=data)
json_response=response.json()
print(response.json())
```

Use the index returned by the last call or any index you are interested in.
```python
response = requests.get('http://127.0.0.1:3323/v1/immurestproxy/item/index/'+str(json_response["index"]), headers=headers)
```


The goal of this blog was to show you how to use immudb with a REST-API provided by immugw. 
It enables you to translate curl statements into many programming languages and use most functionalities of immudb with API-calls. 
[immudb](https://github.com/codenotary/immudb) is extremely flexible and running on most kinds of hardware and operating systems. 
Sometimes there are restrictions or very niche systems that cannot run immudb, the API of immugw provides a simple workaround for that. 
It gives you the flexibility, portability and independence needed in modern service architectures. 

Get [immutability](https://codenotary.com/) for your services now!
