---
title: "The Code Signing Certificates' Journey of Pain: The Saga Continues"
date: "2019-03-11"
---

![](/images/blog/img1-1.jpg)

Incredibly, after nearly 3 weeks of back and forth, we finally find a way to get the certificate approval process going, our CPA (to approve our phone number) has been called and our office has been called as well. You can’t choose what number they call, they check it online using DUNS or other services. And this is just the beginning of how the code signing certificates' journey of pain saga continues. 

If you haven't read part 1 in the Journey of Pain series, you can do so [here](https://codenotary.io/avoid-the-digital-and-code-signing-certificates-journey-of-pain/)

## Next steps for creating a certificate aka having your teeth pulled

During the automatic call, you need to write down a code, click on a link the CA provider sends via email and use the code to finalize the verification.

Then you receive an email with a link, to create the certificate. That process is as annoying and cumbersome as the process was to get the license link itself.

Now you need to use the same computer to generate the code signing certificate that you used to register with the CA. Unfortunately, I have several desktops and notebooks and the whole process started over 2 weeks ago. Luckily I used the Linux notebook I travel with (and not the one in the Houston office - as I wouldn’t have access to it for some weeks).

![](/images/blog/img2.jpg)

Btw when you try to generate with another system, you receive some warnings and errors as well.

Oh and when you use MS Windows, forget about Microsoft Edge or Google Chrome, you are forced to use either Firefox or Internet Explorer.

If it worked, there are some articles about how to export your key:

[https://support.comodo.com/index.php?/comodo/Knowledgebase/Article/View/1001/7/how-to-verify-your-code-signing-certificate-is-installed-windows](https://support.comodo.com/index.php?/comodo/Knowledgebase/Article/View/1001/7/how-to-verify-your-code-signing-certificate-is-installed-windows)

In my case I used Ubuntu, so I was forced to install Firefox, visit the Comodo page, accept the certificate and found my way to the certificate library of Firefox. I want to save you some time if you’re in the same situation and describe the steps it required.

![](/images/blog/img3-1.jpg)

1. Visit the page that Comodo (Sectigo) sends you with the exact same computer as you created the request and use Firefox (Linux) or Internet Explorer (Windows).
2. Open the Preferences page of Firefox, select Privacy and Security (URL: about:preferences#privacy), scroll down and click View Certificates:

![](/images/blog/img4.png)

 3. Select the certificate you want to export the pfx file:

![](/images/blog/img5.png)

 4. Click Backup to export the certificate:

![](/images/blog/img6.png)

It's highly recommended that you use a very strong password to protect your private key! It's very important to save the file in a safe location and make sure it's well protected!

 5. Never ever send that file to anybody!

![](/images/blog/img7.png)

 6. Choose a filename and you can use a file extension .pfx.

Now I have my private key as a pfx file secured by a strong password, but how to sign an executable?

## **Code Signing in Windows**

Here's the list of activities

####  **1. Import PFX File.**

![](/images/blog/img8.png)

Before you can start signing code you need to import the code signing certificates in your MS Windows Certificates Management.

Right-click the code signing pfx file and select install pfx. You need to use the private key password that has been used for the certificate export. I used the machine certificate store and select personal as the location, but that’s up to you.

####  **2. Download Signtool**

I found these links on google but the installation fails under Microsoft Windows 10 despite the fact that all the articles are dated 2018:

- [https://docs.microsoft.com/en-us/windows/desktop/seccrypto/signtool](https://docs.microsoft.com/en-us/windows/desktop/seccrypto/signtool)
- [https://www.microsoft.com/en-us/download/details.aspx?id=8279](https://www.microsoft.com/en-us/download/details.aspx?id=8279)

![](/images/blog/img9.png)

A bit more digging brought up the Windows 10 SDK, which worked fine:

[https://go.microsoft.com/fwlink/?LinkID=698771](https://go.microsoft.com/fwlink/?LinkID=698771)

![](/images/blog/img10.jpg)

![](/images/blog/img11.jpg)

You only need the Software Development Kit packages - roughly 2GB!

####  **3. Sign the executable using Signtool**

![](/images/blog/img12.jpg)

C:\\Program Files (x86)\\Windows Kits\\10\\bin\\x64>

You can find many examples to sign code here: [https://docs.microsoft.com/en-us/windows/desktop/seccrypto/using-signtool-to-sign-a-file](https://docs.microsoft.com/en-us/windows/desktop/seccrypto/using-signtool-to-sign-a-file)

####  **4. Sign using the pfx file**

If you don’t want to use the recommended way through an imported certificate, you can just use the pfx file and include the password. The following command is used to sign the Windows version of the vChain CodeNotary vcn command:

**signtool.exe sign /f "cert.pfx" /p "pass" vcn**

If the signing process went well you should receive the Successfully signed message.

You can doublecheck the properties of the file if the code signing went well:

#### ![](/images/blog/img13.jpg)

####  **5. Code signing using an imported certificate**

To use the imported cert, we need to know where to find the certificate. Type certmgr to open the certificate manager and right click the correct certificate listing.

![](/images/blog/img14.jpg)

I’m going to use the vChain, Inc. certificate to sign the vcn executable. Let's get the cert location first to be used and then list the certificates:

certutil -enumstore

Show all the certificates of the Personal certificate store:

certutil -store My 

![](/images/blog/img15.jpg)

That is the certificate I want to use, so I issue the signtool command and use the certificate Cert Hash.

cd C:\\Program Files (x86)\\Windows Kits\\10\\bin\\x64

signtool.exe sign /sha1 "5953c208a07beb5b59a1e142b1722b96ebfd6195" vcn.exe

If it happens that you only have one code signing certificate, you can just use /a signtool.exe sign /a vcn.exe

Luckily with [CodeNotary </>](https://codenotary.io), it is now possible to do all this in 1 simple step. Signing and verifying software have never been so easy and so secure. Start your free trial today.

 

[Start My Free Trial](https://dashboard.codenotary.io/auth/signup)

If you liked this post, be sure to read the 3rd part in the series and crescendo to highlighting the insanity 'Code Signing Certificates' Journey of Pain #3: When Even Signing Isn’t Enough'. Read it [here](https://www.codenotary.io/?p=2478&preview=true)
