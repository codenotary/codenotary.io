---
title: "Protecting the Integrity of Your Downloads (Part #3)"
date: "2019-06-14"
---

 

![Lock in front of 2 comps and a globe in between](/images/blog/Lock-in-front-of-2-comps-and-a-globe-in-between-300x168.jpeg)

 

## **Intro**

In the first two installments of this series (**[here](https://www.codenotary.io/the-problem-with-using-a-download-link/)** and **[here](https://www.codenotary.io/what-are-checksums-and-how-to-calculate-them-for-downloads/)**), we discovered current best practices for ensuring file integrity when downloading from the web, the potential dangers they have, and traditional ways of verifying a downloaded file’s integrity using checksums. In this blog, we will dive deeper into the process of finding, using, and analyzing checksums as a method for proving integrity. Additionally, we look at the differences between traditional mutable database and immutable, blockchain-based methods for checksum generation and ensuring true download integrity.

 

Let’s get into it.

 

## **What Do You Compare Checksum Correctness Against?**

Unfortunately, there is no standard on where to place checksums so people can use them to compare their downloads. However, there are numerous options. Let's check some examples:

 

#### **Example Telegraf on Github:**

On Github, the hash is mostly on the same page as the release, which is not recommended as we mentioned in a previous blog in this series (**here**) and know by now:

 

[https://github.com/influxdata/telegraf/releases](https://github.com/influxdata/telegraf/releases)

 

![Telegraf on Github](/images/blog/1_Telegraf-on-Github-300x235.png)

 

#### **Example: PuTTY Download page**

Sometimes the checksums are completely separated from the download links, which makes them more secure, but harder to check e.g. greenend.org.

 

[https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

 

In this example, you need to scroll down to the bottom of the page, download the checksum file and compare the generated checksum of the download with the one in the file.

 

![PuTTY Download page](/images/blog/2_PuTTY-Download-page-300x162.png)

 

For simplicity reasons, I just downloaded the PuTTY binary and the SHA-256 file, and then used the online service [http://onlinemd5.com/](http://onlinemd5.com/) to verify the checksum.

 

However, for stronger security, it is best to copy the filename of the downloaded file and search within the checksum file as its pretty big as you can see below:

 

![Buried in the Checksum](/images/blog/3_Buried-in-the-Checksum-274x300.png)

 

Within the online calculator, you need to upload the “just downloaded” file, select the correct checksum type and copy/paste the checksum out of the checksum file into the ‘Compare with’ field.

 

![MD5 and SHA Hash Generator](/images/blog/4_MD5-and-SHA-Hash-Generator-300x138.png)

 

And here we go. The file integrity is ok.

 

**Let’s be honest though, how often do you do that, especially if you are a high volume downloader?**

 

Are you ready for another example?

#### **Example: Filezilla Download page**

 

![Filezilla Download page](/images/blog/5_Filezilla-Download-page-248x300.png)

 

In this case, the Checksums are in plain sight, but still kind of hidden. The last section after ‘Source Code’, is titled ‘Checksums’. But because of the same looking download link, it’s not so obvious to find.

 

But did you recognize the little ‘i’ icon behind each file? When clicking on that, the SHA-512 checksum will display:

 

![Filezilla Download page-2](/images/blog/6_Filezilla-Download-page-2-300x206.png)

 

Back to our online tool.

 

![MD5 and SHA Hash Generator-2](/images/blog/7_MD5-and-SHA-Hash-Generator-2-300x136.png)

 

Damn! There is no SHA-512, so I need to find another tool to compare it or use a local command.

 

I tried this service here: [https://www.fileformat.info/tool/hash.htm](https://www.fileformat.info/tool/hash.htm) but the file was too large (5MB max).

 

Then, I used [https://www.online-convert.com/](https://www.online-convert.com/) and uploaded the “just downloaded” file to the service.

 

![online-convert.com](/images/blog/8_online-convert.com_-300x40.png)

 

That looks pretty similar. To make sure though, I really want to have an automatic comparison. So I go ahead and try the poor man solution. I copy the SHA-512 checksum from the online converter and search for it on the FileZilla website:

 

![Filezilla Download page-3](/images/blog/9_Filezilla-Download-page-3-300x103.png)

 

As you can see, FileZilla was able to find the checksum but not before I had spent a lot of time and hassle making sure they matched.

 

These were just some examples, but you can already see that some effort is required if you want to make sure the file you download is really the file mentioned on the website. However, even if the two do match, it still is not entirely true that your file is safe as the download website might have been compromised and you just don’t know it. Thus, here your file downloading safety employs a bit of a hope-and-pray/fingers-crossed type strategy and hopefully, in the case of the downloader, the file mentioned on the website was not hacked.

 

## **How to Create the Checksum in a Secure Way!**

“Make sure the files are not being created by someone you don't trust or who might harbor malicious intent.”

 

While the statement is obvious, if you use online platforms like [http://onlinemd5.com/](http://onlinemd5.com/) to create your checksum, you don’t really know if the checksum the platform provides is actually correct. You should only use online tools to _compare_ a checksum, while the initial checksum should be created locally on your computer with tools where you can view the source code!

 

Using CodeNotary, you can check the source code and even build the binary yourself. With CodeNotary, the created checksum is automatically and immutably stored, including its file attributes, on an Ethereum-based, consortium blockchain.

 

In addition, CodeNotary’s free-to-use webpage tool for verification, which you can see **[here](https://verify.codenotary.io)**, also includes a hash calculator display with MD5, SHA1, and SHA256 hashes for any file that you drag and drop on to the page if you want to also manually check download integrity.

 

![CodeNotary - Drag & Drop - Verification - Verified](/images/blog/CodeNotary-Drag-Drop-Verification-Verified-186x300.png)

 

## **Conclusion**

Using a download manager doesn’t mean the file you downloaded was actually the file you intended to download. In fact, if someone gains access to a website where the download link, as well as the checksum, are both on the same page/website, there is no protection left. An attacker can simply replace both the download link and the checksum. Thus rendering comparisons utilizing robust hashing algorithms, a fool’s errand. Download locations and checksum locations should be on separate server systems and require different credentials in order to access them. The manual process for generating checksums and comparing them to their website listed checksum counter-parts is an error-prone, optional, and an unsafe alternative.

 

Having a robust, redundant, and fault-tolerant blockchain-based checksum authentication system is simply a better way. The benefit for site owners using a blockchain-based system like CodeNotary is that download integrity would be one less thing they would have to worry about. The checksums of their original files would be immutably stored and publicly readable. For downloaders, they can feel at ease knowing they are protected against Man-in-the-Middle attacks (MIM). And any change, malicious or otherwise, to the original download file will inevitably be flagged by the immutable truth of the blockchain network.

 

Try out CodeNotary’s one step verification for free and judge for yourself how easy it is.

 

 

**[Yes, Let Me Try It Out](https://dashboard.codenotary.io/auth/signup)**
