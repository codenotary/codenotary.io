---
title: "Bug or digitally signed? The weird world of digital certificates!"
date: "2019-12-27"
---

When working with digital certificates and signing files or executables, its never a simple thing to do. After obtaining a digital certificate you typically need to install software or import .crt files to start signing files, like the DigiCert Certificate Utility.

![](/images/blog/code-signing-with-digicert-utility-4-768x497-1.png)

[https://www.sslsupportdesk.com/how-to-verify-a-digital-code-signing-signature-in-windows/](https://www.sslsupportdesk.com/how-to-verify-a-digital-code-signing-signature-in-windows/)

But it can be much easier - let's digitally sign a file fully automatic with a valid Microsoft digital certificate. ;-)

## Digitally Signing a file for Dummies

First create a simple text file - file name doesn't matter.

![](/images/blog/windowsfile.png)

Then, change the content by only adding a 0, nothing else and also no new line.

![](/images/blog/setcontent.png)

## Check the digital signature

You can also create the file with the 0 content using the PowerShell and then check the digital signature:

```
set-content -path testfile.txt "0" -NoNewline
Get-AuthenticodeSignature .\testfile.txt | fl
```

![](/images/blog/filesigned-1024x545.png)

Amazing! We signed the file with a Microsoft digital certificate. It's so simple nowadays.

Luckily if the file has any other content (at least that's what we're aware of), no signature is shown. Also the Windows File Explorer is not showing any signs of a timestamp or digital signature.

![](/images/blog/explorer.png)

## Summary

While a file containing a 0 is no risk to your operating system and can't contain any malicious code, it leaves a bad feeling. What if that bug is not just about "0" files and someone finds a way to leverage that bug for other malicious attempts?

If you simply rely on digital certificates for integrity, you might suffer a similar fraud yourself. Using CodeNotary.io gives you more than just additional protection and secured integrity - it can also be used for any digital asset without limitations.

[Start Signing for Free](https://dashboard.codenotary.io/auth/signup)
