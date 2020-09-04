---
title: "Free Docker Container Integrity Verification Sought and Found"
date: "2019-06-11"
---

 

![check mark (green)](/images/blog/check-mark-green-300x164.jpg)

 

One dev in his search to find a way to continuously verify his Docker container integrity recently notified us about his search and the answer he found. Below we share his story and a cool find he made as well with the community. 

## **The Search for Finding Docker Container Integrity Verification**

Got an interesting email yesterday from Rufus White, a dev, who mentioned he was trying to find out how he can ensure the integrity of his containers, especially after the recent Docker Hub attack. He wanted to know if his containers were still safe and how he could know they were continuously safe. He reasoned that checking them one time worked for that single instance, but he used containers everyday so once wasn’t enough. Hackers don’t stop because a file has been vetted. In fact,  vetted files would be one of the first places they would target as certified binaries often causes security to lower their defenses.

 

## **Words from a Happy Downloader**

Rufus mentioned he had found a solution by Googling and found a product called CodeNotary. His email is below:

 

_Just found this interesting little tool called CodeNotary today. Set it up and within about 8 minutes I could sign and verify my containers. It also had the continuous verification that I was looking for. The setup process was really straightforward._ _Of course, as I downloaded vcn from the internet (GitHub) on my Windows machine I got the usual annoying warnings during the install process as I forgot to unblock the file. I’ve seen those things pop a lot for legit software though and really don’t put too much stock into digital certificates these days._

 

_What was pretty cool was that once I had set up the Chrome extension and installed the tool on another machine to test it, I got a clean notification from CodeNotary assuring me that the file integrity of the CLI installer was trusted._

 

![CodeNotary Chrome Extension - Integrity Verified - Brave](/images/blog/CodeNotary-Chrome-Ext-Intergity-Verified-Brave-300x48.png)

 

_Verified right at download. The thing kind of made the point for itself from the git…_

_(Btw, I use the Brave browser, which the Chrome extension also works on. Y’all should check it out if you haven’t already.)_

 

## **Traditional Download Notification Nonsense**

The download notification Rufus was referring to that pops up during download only pops up because we weren’t ok with paying $1000 more for a different digital certificate that does the exact same thing as the basic version does but with one small difference. That difference is the removal of the warning that pops up at download. For a $1000? That's alright. We'll pass. It will eventually disappear once we reach a certain amount of downloads. In the meantime, it’s easy for users to unblock the downloaded file after the download has completed and bypass the nonsense.

 

## Simple Code to Ensure Container Integrity That Goes Beyond Tradition

It's actually really easy to ensure the integrity of your containers (or other code, /images/blog, files, backups, etc.). With the command line interface, it's one step to sign (`vcn sign`) and one step to verify (`vcn verify`). 

And there's actually one other way to quickly verify in addition to the Chrome app and the CLI command, which is by using CodeNotary's drag and drop webpage. You can check out its functionality [here](https://verify.codenotary.io/intro)  as well as see it in the screenshots below:

 

 

![](/images/blog/CodeNotary-Drag-and-Drop-Verify-Intro-Page-300x242.png)

 

After the verification check runs and shows you whether the asset is verified or not, it will also show you the MD5, SHA1, and SHA256 hashes for the file in case you ever want to double check and do a manual verification test yourself.

 

![CodeNotary - Drag & Drop - Verification - Verified](/images/blog/CodeNotary-Drag-Drop-Verification-Verified-186x300.png)

Also, you can get the Chrome extension [here](https://chrome.google.com/webstore/detail/vchain-codenotary-downloa/mnloemedehacppeggbipipjlphdjpjcb) .

 

## **Conclusion**

We were glad to receive the feedback. It’s cool to see the word getting out there that devs can ensure their Docker Container Integrity CodeNotary's vcn CLI tool and that when someone does happen to come across us, they find the tool useful and easy to use so much so that they write in to express their enjoyment. And what a bonus, finding out from a happy user that our browser extension works on the Brave browser as well! 

 

If you want to test it out and play around with the extension yourself, go for it. It’s free to test out. And bonus if you’re an OSS dev as it’s on the free forever plan for you.

 

[Test Out CodeNotary](https://dashboard.codenotary.io/auth/signup)

OR

[Check Out Its Integrations](https://www.codenotary.io/integrations/)
