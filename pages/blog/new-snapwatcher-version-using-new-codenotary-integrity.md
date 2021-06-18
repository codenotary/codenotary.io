---
title: "new Snapwatcher version using new CodeNotary integrity"
image: /images/blog/build.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2019-04-05"
---

We recently received a message from a certificate authority to renew our code signing digital certificate for roughly $500 a year. When we don't renew, the certificate will expire and all of our customers might receive a Microsoft Windows warning.

Given the fact that Snapwatcher is a lightweight tool in a low price range, that's quite a number. Especially, when you think of the benefits of that certificate. Our customer can see that this software has been signed with our digital certificate and that your downloaded file on your disk is the same file we provide on our Google storage share.

In the meantime there are more modern ways to proof the identity of the file author and the guarantee integrity, we deliver the new Snapwatcher version without a digital certificate based signature, but allow the verification by [CodeNotary](https://www.codenotary.io).

We are in good company with out decision and more will follow: [https://notepad-plus-plus.org/news/notepad-7.6.4-released.html](https://notepad-plus-plus.org/news/notepad-7.6.4-released.html)

As our blog reader know, we always describe more than the marketing part - we explain the procedure step by step, from code to build, signature, upload and verification.

## Building your software

Nothing really changed for building your software, except that you don't need to point to any certificate to be used.

We use Visual Studio to build our .net Application [Snapwatcher](http://try.opvizor.com/snapwatcher).

![Build your application](/images/blog/build.png)

This application is an online Windows App by default without a setup that requires an internet connection. As we have customers that have isolated environments we also build it locally and create a installer using [Inno Setup](http://www.jrsoftware.org/isinfo.php).

![Innosetup Windows App to setup](/images/blog/innosetup.png)

The result is a setup file that installs the application on isolated systems (no internet access) or terminal services.

![test setup](/images/blog/setup_done.png)

When the installer build completed successfully, the setup is automatically started for testing purposes.

![Innosetup file output](/images/blog/output_files.png)

We deliver Snapwatcher compressed as a zip file. The compression is not great, but at least customers can download the file without a dozen warning messages.

Therefore, we need to sign both files using CodeNotary. As [CodeNotary](https://www.codenotary.io) integrates nicely into the Windows explorer, we can just right-click and sign the file. You can find the installer on the CodeNotary Github page: [vchain-us/vcn](https://github.com/vchain-us/vcn)

And the complete online help: [CodeNotary help](https://www.codenotary.io/help/)

![CodeNotary vcn sign](/images/blog/vcnsign.png)

![vcn sign file](/images/blog/vcnsign-2.png)

Now both files are signed and can be verified by anyone using vcn or the [Google Chrome browser extension](https://chrome.google.com/webstore/detail/vchain-codenotary-downloa/mnloemedehacppeggbipipjlphdjpjcb?hl=en).

## What means Sign

Sign means that the vcn command calculates a unique, military-grade hash of the selected file. Afterwards that file is directly written to a distributed ledger (Ethereum-based blockchain) using the private key of the CodeNotary user (opvizor.com in this case). There is no service in between that interferes.

By default files or code is signed private, not disclosing much information. If you want to sign public, you need to run the vcn command with the -public flag:

vcn.exe sign -public

You will directly notice the different output, when verifying the file.

Is the file changed when signing?

Using the CodeNotary approach the file and the integrity and identity proof are not stored together. The file doesn't get changed at all (in case of a certificate, the signature and the hash need to be added to the file) and the hash and signature are stored using the vChain CodeNotary distributed ledger technology (publicly accessible and verifiable).

## Verify the file

Now that the files have been signed, everyone can verify them using vcn. Here you can also see the difference between private

![vcn verify private](/images/blog/vcn_verifycheck.png)

and public signing, as more information are disclosed, like Filename or Signer.

![vcn verify public](/images/blog/vcnverifypub.png)

Of course you can also verify the file immediately using the Browser extension.

![CodeNotary Chrome extension check](/images/blog/chrome_check2.png)

or if you allow the system to check every download automatically:

![vcn Chrome](/images/blog/chrome_check.png)

As you can see, its extremely easy to check the integrity of the file. Using the vcn command you can also see the signer including email and filename. Many more attributes are currently in the making, so there will be a origin download url and many more features, that make downloads trustworthy.
