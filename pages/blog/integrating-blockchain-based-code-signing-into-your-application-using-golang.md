---
title: "Integrating Blockchain-based Code Signing into Your Application Using Golang"
image: /images/blog/Code-Signing-300x261.png
date: "2019-06-26"
---

 

![Code Signing - CodeNotary - Code Notary](/images/blog/Code-Signing-300x261.png)

 

### **Intro**

Knowing if your digital assets are safe to use will help you avoid complications from compromised or erroneous code running within your development, test, and production environments. This blog will walk you through the process of integrating blockchain-based code signing into your application using Golang.

For more on verifying with Golang, see our previous blog **[here](https://www.codenotary.io/verify-digital-asset-integrity-against-the-blockchain-for-free-using-golang/)**.

### **Signing Assets**

In order to have your application verify the assets you want to use, those assets will need to be signed and have their signatures stored on the blockchain. This way they can they can be referenced globally regardless of hosting service or storage location. However, before you can start signing assets, there are a few things you need to have in place.

### **Prerequisites**

First, you will need to create your CodeNotary account, which you can do **[here](https://dashboard.codenotary.io/auth/signup?utm_source=medium&utm_medium=post&utm_campaign=integrating-blockchain-based-code-signing-into-your-application-using-golang)** and see a video on how to do **[here](https://www.youtube.com/watch?v=GrlygvXF1XE)**. Once you have an account set up, you will have the ability to start signing assets with the CodeNotary `vcn` CLI tool. The next step is then to prepare your `vcn` configuration, which you can do simply by running `vcn login`. The first time the command is executed, a `$HOME/.vcn` folder will be created with the configuration and generate a user key for you. For more details, check out our GitHub user guide on configuration **[here](https://github.com/vchain-us/vcn/blob/master/docs/user-guide/configuration.md)**. Also, you’ll want to be sure that the `$HOME~/.vcn` folder is accessible by the program you are coding.

 

### **Using Asset Signing in Your Go Code**

We created `vcn` to be able to be utilized directly from within an individual application’s code structure. Extracting and placing a global verification checker like `vcn` directly into your project gives you the ability to configure it to run whenever you need or want it to do so.

 

To include asset signing in your code, use the snippet below:

 

package main

import (
 "fmt"
 
 [github.com/vchain-us/vcn/pkg/api](http://github.com/vchain-us/vcn/pkg/api)"
 [github.com/vchain-us/vcn/pkg/meta](http://github.com/vchain-us/vcn/pkg/meta)"
 [github.com/vchain-us/vcn/pkg/store](http://github.com/vchain-us/vcn/pkg/store)"
)

func init() {
 // Set ~/.vcn directory
 if err := store.SetDefaultDir(); err != nil {
 panic(err)  
 // Load the configuration
 if err := store.LoadConfig(); err != nil {
 panic(err) 
}

// currentUser returns the current authenticated vcn user, if any, 
otherwise an error is returned
func currentUser() (\*api.User, error) {
 email := store.Config().CurrentContext
 if email == "" {
 return nil, fmt.Errorf("no user has been set for current context")
}
    u := api.NewUser(email)
 return u, nil
}

func main() {
 passphrase := "<passphrase here>"
 // Get the current user
 user, err := currentUser()
 if err != nil {
 panic(err) 
  // Create a fake asset
 asset := api.Artifact{
 Name: "<asset name here>",
 Hash: "<my hash here>",
 Size: 11, // a size > 0 is required 
  verification, err := user.Sign(
 asset,
 user.DefaultKey(), // get and use the default key, optionally another key can be used
 passphrase,
 meta.StatusTrusted,     // other status (meta.StatusUntrusted, meta.StatusUnsupported) can be used too
 meta.VisibilityPrivate, // or meta.VisibilityPublic 
 if err != nil {
 panic(err) 
}
  fmt.Println("Asset has been successfully signed with Status: ", meta.StatusName(verification.Status))
}

 

### **How It Works**

 

![](/images/blog/0*UgN2KIlx0_2gNqSC.png)

 

The `github.com/vchain-us/vcn/pkg/api` package gives you access to all the low-level functions.

 

The `github.com/vchain-us/vcn/pkg/storepackage` pulls in the `vcn` API and allows you to write directly to the blockchain.

 

The `store.SetDefaultDir` then sets your default directory for where you will store your asset signatures locally. Then the `store.LoadConfig` will set up the configuration locally and enable you to write to the blockchain.

 

![](/images/blog/0*rDVD9-d9kkdm8Kk3.png)

 

Next, you will need to create the function `currentUser` to validate the current `vcn` user exists in the system. If the information entered is correct, then the user is allowed to proceed, otherwise, an error is returned.

 

![](/images/blog/0*p2HtUqRlI54_3Rj0.png)

 

After setting up a path to check your user information is stored within the system, you need to create a function for allowing you to enter your passphrase, which will enable you to sign assets and have their hashes written to the blockchain. The `vcn` application will then match the previously entered `currentUser` to the entered passphrase. If successful, the system will allow you to proceed. If not, an error will be returned.

 

The next step is to choose an asset you want to load for signing later. (You can also create a fake asset if you are just testing out the functionality.) But first, you need to set up output fields for correctly storing the name, hash, and size of a newly signed asset for the `api.Artifact` function to slot created data into.

 

You can read more about all the fields in our Go doc at [https://godoc.org/github.com/vchain-us/vcn/pkg/api#Artifact.](https://godoc.org/github.com/vchain-us/vcn/pkg/api#Artifact.)

 

![](/images/blog/0*ts5UUJn7fO4w6oNi.png)

 

Once your fields have been set up to store your signing artifacts, you need to get the key the system generated for you the first time you signed in using `vcn login` and which is stored, by default, in the `~/.vcn` folder. (Optionally, you can choose to use another key for signing if you wish, though you will have to designate it specifically.) After you have told the system which key to use in the signing process, you need to specify the passphrase that will allow your key to be used to sign an asset.

 

If everything is successful, the system will append the designated `meta.Status` and `meta.Visibility` to your signature. The output you should see is the printed line as seen in the example below:

 

`Asset has been successfully signed with Status: TRUSTED`

 

### **Conclusion**

Inserting the ability for your application to sign the digital assets you create or use allows you to benefit from the immutability of the blockchain and rest assured your code, components, applications, and more are just as safe as the way you left them.

 

Information on our entire `vcn` project can be found in our GitHub repository, which you can check out by following the link below.

 

 

**[Take Me to GitHub Repo](https://github.com/vchain-us)**

or

**[Learn More at CodeNotary.io](https://www.codenotary.io/)**
