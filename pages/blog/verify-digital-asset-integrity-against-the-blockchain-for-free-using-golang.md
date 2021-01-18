---
title: "Verify Digital Asset Integrity Against the Blockchain For Free Using Golang"
image: /images/blog/Golang-logo-300x108.png
date: "2019-06-19"
---

 

![Golang-logo](/images/blog/Golang-logo-300x108.png)

 

CodeNotary’s `vcn` CLI tool with its immutable verification of any digital asset is a strong addition to any good developer’s DevOps toolkit. But did you know `vcn` can actually be utilized in a more customized way? It has been designed to allow a developer to import the `vcn` Golang code within his/her own project in order to directly verify digital asset integrity against the immutability of the blockchain.

 

For more information on how to sign digital assets, check out our help guide [here](https://www.codenotary.io/help/#vcn_command_line) or our onboarding video [here](https://youtu.be/GrlygvXF1XE?t=421) (it starts at the signing process). And for more on signing with Golang, see our blog [here](https://www.codenotary.io/blog/integrating-blockchain-based-code-signing-into-your-application-using-golang/).

## **Asset Verification**

Verifying the assets that your application draws on is in line with the DevSecOps best practice of Zero Trust. When running applications, it’s critical to know if an asset (code, image, container, file, application, etc.) has been modified and is truly safe to run in your environment. Knowing the digital asset integrity will help alert you to any potential runtime errors caused by unknown updates as well as any malicious tampering.

 

## **Using Verification in Your Go Code**

We created `vcn` so it can be utilized directly from within an individual application’s code structure. Extracting and placing a global verification checker like `vcn` directly into your project gives you the ability to configure it to run whenever you need or want it to do so.

 

Here’s a very basic example for including asset verification in your code:

 

```
package main
 
import (

   “fmt”

  “github.com/vchain-us/vcn/pkg/api”
  “github.com/vchain-us/vcn/pkg/meta”
)

func main()  {
      verification, err := api.BlockChainVerify(“<asset hash here>”)
      if err != nil {
            panic(err)
      {
      fmt.Println(“Asset status: “ + meta.StatusName(verification.Status))
}  
```

 

## **How It Works**

The github.com/vchain-us/vcn/pkg/api package pulls in the `vcn` API and makes it able to read directly from the blockchain. The `api.BlockChainVerify` function then calls the blockchain to see if it recognizes a hash of a specific asset, which is the input. Assuming it does, the function then prints the verification status i.e. TRUSTED, UNTRUSTED, UNSUPPORTED, UNKNOWN. If any error occurred (e.g. a connection error), the program will panic.

 

Once you have a printed verification status confirmed by the blockchain, the application possibilities begin to unfold.

 

We also provided another function, `BlockChainVerifyMatchingPublicKeys`, you can use if you have an asset you want to trust that needs to be verified against a list of signers. It behaves the same as `BlockChainVerify` with the difference being it checks against a list of signers instead of hashes. The function is a bit more behind the scenes and lower level but it is there so you can use it if you have a use case that requires it. You can read more about it on our GitHub page: [https://github.com/vchain-us/vcn#verify-by-a-list-of-signers](https://github.com/vchain-us/vcn#verify-by-a-list-of-signers)

 

For more information on `BlockChainVerify`, check out:

- Our API documentation [https://godoc.org/github.com/vchain-us/vcn/pkg/api#BlockChainVerify](https://godoc.org/github.com/vchain-us/vcn/pkg/api#BlockChainVerify)
- The source code on GitHub [https://github.com/vchain-us/vcn/blob/master/pkg/api/verify.go#L109](https://github.com/vchain-us/vcn/blob/master/pkg/api/verify.go#L109)

 

## **Testing**

We have built in a `make test` command in `vcn` so you can set up and run your own test prior to pushing any code live. You can find more documentation at [https://github.com/vchain-us/vcn#testing](https://github.com/vchain-us/vcn#testing)

 

In addition, we are constantly testing and maintaining the blockchain as a member and steward of its community.

 

Now, let’s look at some use cases and a current example of the `vcn` API being used today.

## **Use Case Examples**

For example, say your project relies on spinning up a container every time before it can perform its goal functionality. You can set `vcn` to run a verification check just prior to the container running to make sure it is the container you expect it to be and that it has not been tampered with.

 

Another example involves checking dependencies. Say you have dependencies that you have used before but need to make sure they are still legit and untampered before you connect to them again. You can use `vcn` in your project code to verify that the dependencies are 100% as intended.

 

For an example currently in use, check out how we used the API internally to implement the `vcn` verify command:

[https://github.com/vchain-us/vcn/blob/master/pkg/cmd/verify/verify.go#L99](https://github.com/vchain-us/vcn/blob/master/pkg/cmd/verify/verify.go#L99)

 

## **Conclusion**

Including a global verification check inside your code is a great way to add value to the users of your project. Applications that confirm digital asset integrity and all its various components and dependencies give users increased reliability, security, and peace of mind.

 

You can find the entire `vcn` project on our GitHub repository.

 

 

[Show Me to the Repo](https://github.com/vchain-us)
