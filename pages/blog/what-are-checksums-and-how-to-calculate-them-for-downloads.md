---
title: "What are Checksums and How to Calculate Them for Downloads?"
date: "2019-06-05"
---

 

![File fingerprint](/images/blog/File-fingerprint-300x211.png)

 

Checksums are a traditional way of verifying a download’s file integrity. In this blog, we look at what checksums are and how to use them. Specifically, we walk through how the Webmaster uploader and the user downloader can generate checksums on Microsoft Windows, macOS, and Linux based machines.

## **What is a checksum?**

A checksum is a value used to verify the integrity of a data transfer or a file. Typically, checksums appear as a long, alphanumeric string of characters that acts as a digital fingerprint of sorts. They are used as a way to compare an original file to a copied version of that file in order to ensure they are the same. If the checksums calculated don’t match, even if they are just slightly different, the data has either been corrupted or (maliciously) tampered with.

 

## **How to Use Checksums**

Now let’s see how to use a checksum from both the uploader and downloader’s perspective. Here we cover SHA256 as its considered a best practice.

 

### **As a Webmaster or “Uploader”**

Create or obtain the file from your trusted source and use a checksum tool that fits your operating system:

 

**On Microsoft Windows**

SHA256 checksum can be generated in the console using the following command:

 

`certutil -hashfile C:\Users\YOUR_USERNAME\Upload\file.exe SHA256`

 

Instead of typing the path to the file, you can just drag and drop:

 

1. Press Windows Start Menu
2. Type cmd
3. You should see command (cmd) execute (.exe) option in the list of results. Click on it to launch.
4. Type or paste: `certutil -hashfile`
5. Press space
6. Drag and drop the file from Explorer to Terminal
7. Press space
8. Type or paste: `SHA256`
9. Press enter key
10. You should see the resulting string output on the second line is the SHA256 checksum

 

**macOS**

SHA256 checksum can be generated using the following command:

 

`$ shasum -a 256 ~/Upload/file`

 

Instead of typing the path to the file, you can just drag and drop:

 

1. Open Terminal
2. Type or paste: `shasum -a 256`
3. Press space key
4. Drag and drop file from the Finder to Terminal
5. Press enter key

 

**Linux**

Generate the SHA256 hash by entering:

 

`$ sha256sum ~/Upload/file`

 

#### Upload the file and the Checksum

After uploading the files to the intended location, you need to create a website with the download links. Also, you should include a file link to the created checksums or have them integrated it into the website.

 

One issue to be aware of here is the download location and the checksum location should be on separate server systems. Additionally, a best practice is to require different credentials for accessing either location. However, doing so makes the Webmaster’s life pretty tough, especially when they have a significant amount of files available for download.

 

### **As a “Downloader”**

When you download a file from any website on the web, you need to generate the checksum using the same hashing algorithm as the “Uploader” and compare your result to the result posted on the download website. Though the process is essentially the same for calculating the checksums, we re-illustrated it below for clarity.

 

**On Microsoft Windows**

SHA256 checksum can be verified using the following command:

 

`certutil -hashfile C:\Users\YOUR_USERNAME\downloads\file.exe SHA256`

 

Instead of typing the path to the file, you can just drag and drop:

 

1. Press Windows Start Menu
2. Type cmd
3. You should see command (cmd) execute (.exe) option in the list of results. Click on it to launch.
4. Type or paste: `certutil -hashfile`
5. Press space
6. Drag and drop the file from Explorer to Terminal
7. Press space
8. Type or paste: `SHA256`
9. Press enter key
10. You should see the resulting string output on the second line is the SHA256 checksum

 

**macOS**

SHA256 checksum can be verified using the following command:

 

`$ shasum -a 256 ~/downloads/file`

 

Instead of typing the path to the file use drag and drop:

 

1. Open Terminal
2. Type or paste: `shasum -a 256`
3. Press space key
4. Drag and drop the file from the Finder to Terminal
5. Press enter key

 

**Linux**

Verify the SHA256 hash:

 

`$ sha256sum ~/downloads/file`

 

## Check Checksums Easy With CodeNotary Drag & Drop

CodeNotary's drag and drop verification page is used to verify a digital asset's integrity. It checks to see if the asset has been signed by CodeNotary and has had it's unique 'fingerprint', its hash, immutably added to the blockchain. 

 

A bonus is that the page has the added benefit of being a hash calculator. For any asset, signed or unsigned, that is drag and dropped onto the page [here](https://verify.codenotary.io/), it will display and automatically calculate the MD5, SHA1, and SHA256 hashes for that asset.

 

![CodeNotary - Drag & Drop - Verification - Verified](/images/blog/CodeNotary-Drag-Drop-Verification-Verified-186x300.png)

 

One of the nice aspects of the calculator in comparison to online checksum tools is that you don't have to upload the file you want to check.  You just drop it. 

## **Final Thoughts**

Calculating checksums is not a difficult process and is mathematically sound, but it does take time away from what you would rather be doing. If you are constantly downloading or uploading files, calculating and comparing checksums can become a cumbersome annoyance.

 

For more on the truth about checksums and what current best practices are for ensuring file integrity when downloading from the web as well as what potential dangers they have, check out our blog on ‘The Problem with Using Download Links.’

 

 

[Yes, I’d Like to Read That](https://www.codenotary.io/the-problem-with-using-a-download-link/)
