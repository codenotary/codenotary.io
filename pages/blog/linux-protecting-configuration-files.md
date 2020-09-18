---
title: "Linux: protecting configuration files"
image: /images/blog/vcn_notarize.png
date: "2019-12-03"
---

No matter if you're running a linux environment on premise or in a cloud instance using any distribution (i. e. Ubuntu, Centos, RHEL or something else), you want to know if something has been touched.

CodeNotary allows you exactly that in the most simple way and the verification counterpart is even stored safely outside of your environment.

The following blog post covers the notarization of the /etc directory where configuration files are typically stored and the automatic authentication whenever you log in.

We cover:

- Install vcn
- Notarize file or folder
- change your bash profile to authenticate whenever logging in
- some example

## Install vcn

There are plenty of different ways to install the vcn Command line tool. And of course you can build it yourself. The GitHub repository can be found here:

[https://github.com/vchain-us/vcn](https://github.com/vchain-us/vcn)

and the latest release:

[https://github.com/vchain-us/vcn/releases/latest](https://github.com/vchain-us/vcn/releases/latest)

If you want a quick installation (Linux, MacOS), you can also use our installation script:

```
bash <(curl http://getvcn.codenotary.io -L)
```

You can check our [manual](https://docs.codenotary.io/) or simply type **vcn help**

## Notarize file or folder

As vcn is installed and running we can notarize the folder or files we like to verify everytime we log in. These could be:

- configuration files (Apache, NGINX, Firewall services, Sudoers files and much more)
- folders containing configuration files
- file or folders that should never change unnoticed

Make sure you have a free [CodeNotary](https://dashboard.codenotary.io/auth/signup) account, so you can notarize and only check for your own digital objects.

### The notarization of the /etc folder

Tip: Depending on the installation, you might need to use **sudo**!

```
# first login with your CodeNotary account credentials
vcn login

# Notarize /etc - dir:// acts on the whole folder or directory
# type your password when requested
vcn n dir:///etc 
```

![Folder protection using CodeNotary](/images/blog/vcn_notarize.png)

Notarize /etc as a folder

That's already it and you can easily double check in your [dashboard](https://dashboard.codenotary.io/) or by simply typing **vcn a dir:///etc** if all worked.

![dashboard to check the notarization](/images/blog/dashboard.png)

check the notarization details

In case you simply want to check one or some files, you can use **vcn n /path/file** without the **dir://**.

## Change your bash profile to authenticate whenever logging in

Instead of authenticate or verify the configuration folder /etc everytime we log in, we want to do that in an automatic way. This example is simple but could be enhanced very easily to secure the environment even more.

Change your local profile: **nano ~/.profile** and add the following lines:

```

# calculate the SHA256 checksum of vcn (check the path vcn is installed
# /usr/bin/vcn or /usr/local/bin and change accordingly
CHECKSUM=$(sha256sum /usr/local/bin/vcn | cut -d " " -f 1)

# check if the vendor vchain.us notarized vcn
# of course you can notarize yourself and check against your identity as well
curl -s https://api.codenotary.io/authenticate/$CHECKSUM?org=vchain.us | grep -q :0

# error if the curl command failed and vcn could not be authenticated
test $? -eq 0 || echo "VCN Authenticate: FAILED"

# use vcn to authenticate /etc and check against the blockchain
# make sure to change 0x000000000 to your signer key (vcn info)
vcn a dir:///etc -s 0x000000000

# error if vcn could not authenticate /etc
test $? -eq 0 || echo "VCN Auth /etc: FAILED"
```

Save the file and the next login is already checking the /etc folder.

## Some example

Nothing changed since the notarization took place:

![](/images/blog/trusted.png)

no changed in /etc detected

After changing the /etc/sudoers file

![](/images/blog/unknown-1024x260.png)

the change is automatically being detected

## Summary

As you could see its so easy and straightforward to use CodeNotary to protect your directories or folders. That works for Linux, MacOS and of course Windows as well (we're covering Microsoft Windows another time).
