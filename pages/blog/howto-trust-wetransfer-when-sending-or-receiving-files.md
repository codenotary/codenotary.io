---
title: "How to trust WeTransfer when sending or receiving files"
date: "2020-01-13"
---

Most of you have either send or received files and documents using the amazingly simple [WeTransfer](https://www.wetransfer.com) service. Whenever some digital object is too large for email or chat, people use either cloud storage service (like OneDrive or Dropbox) or services like WeTransfer. It's free, very convenient and only a browser is required.

## Sending files or documents using WeTransfer

![WeTransfer](/images/blog/wetransfer_send-1-1024x879.png)

You only need to provide a sender and a receiver email address, the file(s) and some optional text. When clicking transfer, the upload to the WeTransfer service starts and an email is triggered to the recipient.

![](/images/blog/transfer.png)

## Receiving the documents and files using WeTransfer

The recipient gets an email with the download link and the details about the sender (email) and the additional information. You can simply click on the link or the button within the email to download the files from the WeTransfer service. The files will be there for one week when using the free service.

![](/images/blog/email.png)

## Who did send the files?

Well, it's written in the email! Actually when you only received files so far and don't know WeTransfer or never send any files, that might be an obvious idea. **The bitter truth is - you have no idea!**

![](/images/blog/form.png)

The WeTransfer form inputs are simple text fields and there is no check if the sender is really the sender. You can easily send a file using customerservice@amazon.com or something like that.

![](/images/blog/fake.png)

the sender email is a simple text field

Some bad guy can simply use that service to send you malicious files using a sender email that is known to you or makes it more likely for you to download and click the files.

## Add trust to WeTransfer and other services

Luckily there is a free service you can use to add trust to WeTransfer: [CodeNotary.io](https://dashboard.codenotary.io/auth/signup)

**CodeNotary adds signer information to the globally unique identity of any digital asset - tamperproof and immutable.**

Before or right after sending files (no matter what size) to others, notarize them additionally and inform the recipient how to check if you know and trust these files. Using https://authenticate.codenotary.io, everyone can check the notarization status of files or documents.

**Important security information**: all CodeNotary services are processing the files on your computer or in your browser. Files are never uploaded or transferred to any service outside of your computer.

Not notarized (or trusted):

![](/images/blog/notarize-no.png)

## Notarize the file using Windows

You can download the Windows installer for CodeNotary here: [https://github.com/vchain-us/vcn/releases](https://github.com/vchain-us/vcn/releases)

or in your CodeNotary dashboard:

![CodeNotary Windows Setup](/images/blog/vcn-1024x447.png)

Then simply notarize the files using the context menu of Windows Explorer:

![Notarize a file](/images/blog/notarize.png)

When the file is notarized anyone can authenticate and check the trust level of the file:

![](/images/blog/trusted.png)

The next time you send a file using WeTransfer and you want to protect yourself and others from fraud and malicious behavior, simply use CodeNotary and add the following to the description text:

**Please verify the authenticity of this file and if it has been trusted by drag and dropping into your browser at https://authenticate.codenotary.io and check for the thumb's up logo.**

We definitely recommend to further limit the verification by adding your signer ID or organization:

### Different ways to further protect authenticate

There are three different ways to let people authenticate using https://authenticate.codenotary.io

1. simply check if someone notarized the files (good enough, if you produced the file) - [https://authenticate.codenotary.io](https://authenticate.codenotary.io)
2. check if a member of an organization (or company) notarized:  
    https://authenticate.codenotary.io/org/domain (example: [https://authenticate.codenotary.io/org/vchain.us](https://authenticate.codenotary.io/org/vchain.us))
3. check if an individual notarized (most secure) using the signer id:  
    https://authenticate.codenotary.io/signer/signerid (example: [https://authenticate.codenotary.io/signer/0xebe546f431bbc785b2cfc30e649d4f38f9a087bb](https://authenticate.codenotary.io/signer/0xebe546f431bbc785b2cfc30e649d4f38f9a087bb))
