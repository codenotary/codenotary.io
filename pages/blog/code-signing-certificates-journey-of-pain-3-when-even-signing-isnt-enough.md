---
title: "Code Signing Certificates' Journey of Pain #3: When Even Signing Isn’t Enough"
image: /images/blog/Picture1-300x64.png
date: "2019-05-10"
---

This is the third blog of the series and hopefully the last one as I am confident to have gone through all the requirements, issues and limitations of the current code signing process. 'Code Signing Certificates' Journey of Pain #3: When Even Signing Isn’t Enough' shines a light on the **extortion by the certificate authority industry** of software publishers. Thankfully for developers and publishers alike, blockchain and smart contract technology offer substantial pain relief to this intolerable situation. 

 

Check out [part 1](https://codenotary.io/avoid-the-digital-and-code-signing-certificates-journey-of-pain/) and [part 2](https://codenotary.io/the-code-signing-certificates-journey-of-pain-the-saga-continues/) in the series if you haven’t already.

 

 

## **The Certificate Authority’s Road of Nonsense**

What started as a painful and time-consuming journey has now blossomed into a full-fledged drama. We thought we had everything sorted for our executable to be installed without any OS complaining about security risks. As it turns out, we discovered that we were not there yet.

 

After weeks of calls, numerous official papers sent to the certificate authority and a number of checks to prove we were who we claimed to be, we finally received the digital certificate to sign the [CodeNotary </>](https://www.codenotary.io/) application and the Windows installer. It was now time to test the freshly signed installer and see whether everything worked as expected. However, the drama was just beginning.

 

In fact, the first surprise arrived immediately during the download of the CodeNotary </> installer for Windows from [https://github.com/vchain-us/vcn/releases](https://github.com/vchain-us/vcn/releases) and triggered the following alert.

![Google's ‘Unwanted Software Policy’ Alert](/images/blog/Picture1-300x64.png)

## **Code Signing and Google's ‘Unwanted Software Policy’**

 

We reviewed Google's ‘[Unwanted Software Policy](https://www.google.com/about/unwanted-software-policy.html)’ to make sure our software did not breach any of the set policy guidelines. Good faith is the foundation of most of these types of policies. This policy was no different. The very first claim it makes is that software is blocked if "It is deceptive, promising a value proposition it does not meet."

 

As much as I am a strong believer in the power of AI, I struggle to see how Google can reconcile this policy with a value proposition based on an executable file. Unless someone reports that a software application does not comply with this policy, there are no indicative reasons for any software to not be compliant with this policy.

 

The one policy in the list that can be empirically verified by Google is the requirement for software to be signed by an official digital certificate. We had taken care of that.

![Google's ‘Unwanted Software Policy’ Snippet](/images/blog/Picture2-300x35.png)

Clearly, for Google, an application signed with an official digital certificate issued by a leading CA with an industry market share of 67% is still not enough for trust. There was no way around this fact. We had to get it fixed. So we started a separate Google approval process that ended up having another set of issues all of its own. More on that later. 

 

Back to the current task at hand. We manually confirmed we wanted to keep the download and clicked the appropriate button in the pop-up notification to start the install process. At this point, I was 100% sure code signing certificates would make the magic happen and the rest of the installation would be straightforward. Alas, it was not meant to be as this was when the second surprised arrived.

 

## **Yet Another Hurdle in the Code Signing Process**

![Yet Another Hurdle in the Code Signing Process](/images/blog/Picture3-300x281.png)

I was completely baffled. What happened to my signing certificate? Maybe something went wrong and there was no signature on the .exe file. So I checked the installer properties again. Everything was in order as shown in the image below.

![Digital certificate installer properties check](/images/blog/Picture4-300x196.png)

## **The Extended Validation Certificate Scam**

 

I started looking for an explanation for this alert and on a [forum on Microsoft's website](https://answers.microsoft.com/en-us/protect/forum/all/windows-defender-is-giving-a-warning-when/ee48147e-8fe2-46d5-bfba-c5d38b332360?auth=1). I found that by using an Extended Validation (EV) Certificate you could make the defender alerts disappear. However, that is only after 3,000+ downloads. Getting 3,000 downloads for a new application is not something you get overnight, and certainly having all these types of alerts from Chrome and Windows doesn't help on reaching that goal either.

 

So we considered an EV certificate instead. To get the certificate we had to comply with other manual and time-consuming CA checks, add more weeks of delays to our schedule and spend another $1,000. Altogether, with the already spent $500 between the certificate and the officially registered papers, our total code signing certificate costs amounted to a whopping $1,500. So on general principle, we refused to continue to oil this broken engine.

 

## **Certificate Authorities' True Intent**

 

The industry’s only goal is to milk money from publishers without adding any true value other than allowing software into the game they created. Unfortunately for them, that game is now technologically outdated, dusty, and ultimately ridiculous. This is further proven by a TechTarget [report](https://searchsecurity.techtarget.com/news/252460108/Study-reveals-sale-of-SSL-TLS-certificates-on-dark-web) that anyone can buy a counterfeit EV certificate for the same amount or less that passes the CA’s own authenticity test. And they can do so without spending the same amount of time to get it issued.

 

## **A Better, Technologically Upgraded Way to Sign Code**

 

Luckily, there is a better way with **CodeNotary** </>. It proves the authenticity of software assets in one single step of signing.

 

Check how much money you can save on digital certificates using [CodeNotary </>](http://www.codenotary.io/pricing/) and join the community that will change code signing forever. The certificate authority industry is yet one more industry that is being disrupted by blockchain and smart contract technology.

 

Start your free trial of CodeNotary now and leave the pain behind.

 

[Sign Me Up!](https://dashboard.codenotary.io/auth/signup)

 

If you have missed our first two blogs on the topic, you can find them [here](https://www.codenotary.io/avoid-the-digital-and-code-signing-certificates-journey-of-pain/) and [here](https://www.codenotary.io/the-code-signing-certificates-journey-of-pain-the-saga-continues/).
