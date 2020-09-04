---
title: "Developers unite against the expensive and cumbersome code signing certificates!"
date: "2019-03-12"
---

We could write this blog post in my favorite Windows text editor, Notepad++.  And I bet millions of other users would agree with me when I say: this Notepad++ project is simply amazing.

The open source project Notepad++ has been used for over a decade by developers, system administrators, support engineers and many more people who want to edit all kinds of text knowing that Notepad++ will support all their formats and file types.

Github shows more than 7000 stars and over 2100 forks for this great project.

However, a few days ago the following message hit our twitter stream:

Then the following news made it clear:

**[https://notepad-plus-plus.org/news/notepad-7.6.4-released.html](https://notepad-plus-plus.org/news/notepad-7.6.4-released.html)**

_“When you install Notepad++ version 7.6.4, You might notice there's no more blue-trusted UAC popup. Here's the explanation for the reason that we remove code signing from Notepad++ : 3 years ago DigiCert donated a 3 years code signing certificate to the project, and every good thing has its end, the certificate has been expired since the beginning of this year._

_![NotePad-plus-plus code-signing digital-certiticates](/images/blog/Don-Ho-post.png)_

_I was trying to purchase another certificate with reasonable price. However, I cannot use "Notepad++" as CN to sign because Notepad++ doesn’t exist as a company or organization. I wasted hours and hours for getting one suitable certificate instead of working on essential thing - Notepad++ project. I realize that code signing certificate is just an overpriced masturbating toy for FOSS authors -_ 

_Notepad++ has done without a certificate for more than 10 years, I don’t see why I should add the dependency now (and be an accomplice of this overpricing industry). I decide to do without it._

_It doesn’t mean there’s no more security in Notepad++, but it will be less flexible for sure:_ _SHA256 hash of Installer and other packages will be provided for every release as usual. Too bad for ugly yellow-orange UAC popup while installation._

_Notepad++ will check the SHA256 of all the components (SciLexer.dll, GUP.exe, and nppPluginList.dll) used by the program.”_

Actually, we at CodeNotary.io are in total agreement! That is exactly the reason why **[vChain](http://www.vchain.us)** created and released **CodeNotary**. To provide a valid alternative to the old-fashioned and cumbersome code signing certificates!

Digital Certificates and Certificate Authorities were never meant for code signing. While they might be a nice add-on feature for a large software vendor like Microsoft, smaller software companies need to pay a Digital Certificate tax, just to avoid the MS Windows message popping up. That’s not fair to the smaller software publishers, but more importantly, digital certificates don't’ make the software more secure, while wrongly giving to users the impression that they do.

As an alternative to code signing certificates, some developers create their own verification pages for MD5, SHA-1, and SHA-256. Others use GnuPG (GPG) scheme for signing. However, that is just a check-the-box thing, because users downloading the software, still need to manually check and compare the hashes or signatures. Most users never even bother doing that or have any idea how that works.

We at CodeNotary.io believe that developers and publishers work hard,  create hugely popular software for free, in their spare time. It’s a shame that they get charged a lot of money by digital certificate authorities, only because there are no better alternatives to code signing certificates.

Every software developer who offers free software should get an autonomously sign their own builds and binaries... for free!  Codenotary.io allows software developers to sign their open source software for free and independently of any authority, due to our use of our blockchain-protected, code-signing product, and best of all, with CodeNotary it’s a simple 1 step process.

Sign up for a free Open Source and Freeware developer and publisher:

- **[CodeNotary Solution](https://dashboard.codenotary.io/auth/signup?license=NON_COMMERCIAL)**
- **[CodeNotary - Download Verification](https://chrome.google.com/webstore/detail/vchain-codenotary-downloa/mnloemedehacppeggbipipjlphdjpjcb)** extension for Chrome

Let's see how simple it is:

\# vcn login

\# vcn sign notepad\_binary.exe

Boom, done! Check your signed assets in a nice and elegant dashboard.

Want to verify?

\# vcn verify notepad\_binary.exe

Or just download and your chrome extension checks the integrity automatically.

Did we mention, that we have some amazing features coming?

Granular revocation and recall of your binaries and applications in 1 simple step! No need to ask a digital Certificate Authority to revoke for you: a process that can take up to a week! With CodeNotary you can revoke the single software file, leaving any other signed software valid. With digital certificates, you revoke the certificate itself, invalidating all the software that you signed with it.

Moreover, with CodeNotary the integrity file signature is not attached to the file, like certificates do, but stored in a tamper-proof blockchain. This way you can always checked what assets were signed. Try that with a code signing certificate...

Gone are the times of cumbersome process of acquiring a code signing certificate, signing the code and managing the certificate renewal, revoking, etc.

CodeNotary is the first solution that offers a valid alternative to code signing certificates and makes the whole process intuitive and fast (just 1 step). Developers unite against code signing certificate and start using CodeNotary to make sure that none of your users uses fake or tampered software!

Get started today.

[Get Your Free CodeNotary Trial Account Here](https://dashboard.codenotary.io/auth/signup)
