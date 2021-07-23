---
title: "Installing CodeNotary Immutable Ledger in AlmaLinux"
image: /images/blog/almalinux-logo.png
date: "2021-07-22"
tags: ["CodeNotary", "AlmaLinux"]
---

 

## **What is AlmaLinux OS**

AlmaLinux OS is an up and coming enterprise Linux distribution that's not just open source but also 1:1 binary compatible with RHEL® and CentOS (prior to Stream). It is because of this that we conisder AlmaLinux OS to be a great choice for hosting CodeNotary Immutable Ledger.

If you'd like to learn more about AlmaLinux OS, make sure to visit [their site](https://almalinux.org/)

## **Getting your system ready for the installation**

Before installing your CodeNotary Immutable Ledger, we have to do a couple of things to ensure that the system is prepared to run the service automatically which is the preferred way so we'll list out the steps and guide you through them to make this as easy as possible:

(Assuming a fresh AlmaLinux OS Install):

1. Ensure docker and docker-compose are installed in your system
2. Make sure SELinux policies allow systemd to execute docker and docker-compose
3. Download and run your installer
4. Start enjoying your Immutable Ledger

## **First steps**

On a fresh AlmaLinux OS Install we'll see that there is no docker or docker-compose binaries available, but instead podman is available
![No docker binaries](/images/blog/almalinux-no-docker.png)

The first thing we'll do is perform a system-wide update just for sanity's sake

```bash
sudo dnf -y update
```

This will take a few minutes (more or less depending on your download speed and a few other things). In this case there was a pending kernel update so I went ahead and rebooted the system. This might or might not be your case so pay close attention to the dnf output and be on the lookout for lines such as these ones

```bash
$ sudo dnf -y update
[sudo] password for codenotary:
Waiting for process with pid 7739 to finish.
Last metadata expiration check: 0:00:01 ago on Thu Jul 22 17:35:04 2021.
Dependencies resolved.
=====================================================================================================================================================================================================================================
 Package                                                        Architecture                            Version                                                                     Repository                                  Size
=====================================================================================================================================================================================================================================
Installing:
 kernel                                                         x86_64                                  4.18.0-305.10.2.el8_4                                                       baseos                                     5.9 M
 kernel-core                                                    x86_64                                  4.18.0-305.10.2.el8_4                                                       baseos                                      36 M
 kernel-modules                                                 x86_64                                  4.18.0-305.10.2.el8_4                                                       baseos                                      28 M
```

Next, we'll enable the **docker-ce** repository which all the binaries we'll  need by using this command

```bash
sudo dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo
```

And verify it was successfully enabled

```bash
$ sudo dnf repolist
repo id                  repo name
appstream                AlmaLinux 8 - AppStream
baseos                   AlmaLinux 8 - BaseOS
docker-ce-stable         Docker CE Stable - x86_64
extras                   AlmaLinux 8 - Extras

```

## **Installing docker and docker-compose**

Now that the repository is enabled we can just install docker and docker-compose by running the following command:

```bash
sudo dnf install docker-ce docker-ce-cli containerd.io
```

**Note:** Since AlmaLinux now comes with podman, there might be an error that resembles this:

```bash
sudo dnf install docker-ce docker-ce-cli containerd.io
Last metadata expiration check: 0:02:54 ago on Thu Jul 22 17:49:05 2021.
Error:
-package podman-3.0.1-7.module_el8.4.0+2481+9da8acfb.x86_64 requires runc >= 1.0.0-57, but none of the providers can be installed
- package podman-3.0.1-6.module_el8.4.0+2332+f4da7515.x86_64 requires runc >= 1.0.0-57, but none of the providers can be installed
- package containerd.io-1.4.8-3.1.el8.x86_64 conflicts with runc provided by runc-1.0.0-73.rc93.module_el8.4.0+2481+9da8acfb.x86_64
- package containerd.io-1.4.8-3.1.el8.x86_64 obsoletes runc provided by runc-1.0.0-73.rc93.module_el8.4.0+2481+9da8acfb.x86_64
- package containerd.io-1.4.8-3.1.el8.
conflicts with runc provided by runc-1.0.0-70.rc92.module_el8.4.0+2332+f4da7515.x86_64
- package containerd.io-1.4.8-3.1.el8.x86_64 obsoletes runc provided by runc-1.0.0-70.rc92.module_el8.4.0+2332+f4da7515.x86_64
```

If you come across this, re-try the previous command but this time add the **--allowerasing** flag as follows:

```bash
sudo dnf install docker-ce docker-ce-cli containerd.io --allowerasing
```

One that's done, the docker binary will be installed and ready for using. Verify this by running the following commands:

```bash
$ which docker
/usr/bin/docker
$ docker --version
Docker version 20.10.7, build f0df350
```

**On installing docker-compose:** The docker installation does not come with a docker-compose binary, we'll quickly install it by running the following command:

```bash
$ sudo curl -L https://github.com/docker/compose/releases/download/1.29.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   633  100   633    0     0   3028      0 --:--:-- --:--:-- --:--:--  3028
100 12.1M  100 12.1M    0     0  8974k      0  0:00:01  0:00:01 --:--:-- 17.6M
# Make docker-compose executable
$ sudo chmod +x /usr/local/bin/docker-compose
```

Your system is now ready to install the CodeNotary Immutable Ledger service!

## **Install CodeNotary Immutable Ledger**

The next step is to run the installer script, so [download it](https://codenotary-lc.s3.eu-west-1.amazonaws.com/cnil_install-2.2.2.sh) to your box and run it using the following command:

```bash
# Make sure you have write permissions otherwise change to your home directory
$ cd
# Ensure docker is enabled as a systemd service and running
$ sudo systemctl enable docker && sudo systemctl start docker
# Add your user to the docker group
$ sudo usermod -aG docker $USER
# Download the installer script
$ wget https://codenotary-lc.s3.eu-west-1.amazonaws.com/cnil_install-2.2.2.sh
# Give installer execute permissions
$ chmod +x ./cnil_install-2.2.2.sh
# Run the installer
$ sudo ./cnil_install-2.2.2.sh

```

## **Errors during install**

* If you get an error message saying docker is not running, make sure to take a step back and make sure you're prefixing the script install with **sudo**, the installer currently only supports running with elevated permissions.

* If you get an error saying docker-compose is not found, this means the root user can't see the binary in his path, you can fix this in a handful of different ways, we suggest just adding a symlink like this:

    ```bash
    sudo ln -s $(which docker-compose) /usr/bin
    ```

## Wrapping up

Upon a successful installation you should see something similar to this:

```bash
Created symlink /etc/systemd/system/multi-user.target.wants/cnlc.service → /etc/systemd/system/cnlc.service

Installation completed
```

Once that's done you can almost start using your CodeNotary Immutable Ledger, there's only one thing left to do: **Enable systemd execution of docker-compose**

SELinux enforces policies in which the docker-commpose binary is not allowed to be executed via systemd, so we just need to make sure we allow that and we'll be done; while theres's a chance this might not be your case depending on your installation security policies, it's worth making sure.

Verify that your CodeNotary Immutable Ledger service is running using:

```bash
$ sudo systemctl status cnlc.service
[sudo] password for codenotary:
● cnlc.service - Code Notary Ledger Compliance
   Loaded: loaded (/etc/systemd/system/cnlc.service; enabled; vendor preset: disabled)
   Active: active (exited) since Thu 2021-07-22 18:26:16 EDT; 5min ago
  Process: 104755 ExecStart=/bin/docker-compose up -d --remove-orphans (code=exited, status=0/SUCCESS)
 Main PID: 104755 (code=exited, status=0/SUCCESS)
```

If you see both "success" and "active", then your work is done, otherwise make sure to enable the SELinux policies to allow systemd to execute docker-compose.

If you don't see a success message, this more likely means that instead of creating the symolic link to docker-compose you chose some other method of adding it to the PATH, which is fine but the default SELinux policy only allows for binaries in the following directories to be executed:

```bash
/usr/bin /usr/sbin /usr/libexec /usr/local/bin
```

At this point, you can either go back and create the symlink as suggested earlier or alternatively, you can allow the binaries in whatever directory you added to your path to be executed from systemd

```bash
 # Pay special attention to the directory
 $ sudo chcon -R -t bin_t /usr/local/bin/
```

And now you can start your CodeNotary Immutable Ledger service by running:

```bash
sudo systemctl start cnlc.service
```

And open up the application at [https://localhost](https://localhost) or your network address using https://\<dnsname-or-ip\>

![CNIL Running in AlmaLinux OS](/images/blog/almalinux-cnil.png)
**Summary**

To recap, we have:

* Installed docker and docker-compose on AlmaLinux
* Installed CodeNotary Immutable Ledger as a service
* Allowed systemd to execute docker-compose either via the symbolic link or by putting the binary in one of the allowed directories

By following the above outlined instructions you'll be able to get CodeNotary Immutable Ledger running in AlmaLinux OS in no time

**References:**

[https://almalinux.org/](https://almalinux.org/)

[https://techviewleo.com/how-to-install-docker-ce-on-almalinux/](https://techviewleo.com/how-to-install-docker-ce-on-almalinux/)
