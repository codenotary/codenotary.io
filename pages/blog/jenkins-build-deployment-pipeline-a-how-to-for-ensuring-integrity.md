---
title: "Jenkins Build Deployment Pipeline: A How To for Ensuring Integrity"
date: "2019-04-24"
---

 

![Jenkins Automation.2](/images/blog/Jenkins-Automation.2-300x96.png)

 

In this blog, we will briefly touch on the importance of DevOps having strong security, current hole in DevOps security aka DevSecOps, Jenkins Automation’s role in the build process, and with a technical walkthrough on how to integrate the vChain CodeNotary tool with your Jenkins build deployment pipeline to ensure its integrity.

 

## The Weak Link in DevOps Pipelines

DevOps has been widely adopted for many years for its benefits including speeding up the software development process. However, in the CICD process, there is one significant weak link when it comes to ensuring the integrity of code from development to production. That is, when the build is created, stored on a repository and then picked up to be deployed into production, no-one knows if it has been maliciously edited. No integrity check was performed on the containers, scripts, clusters, or any of the other build components. It is completely possible that someone could have tampered with the build code and injected it with malware. Unfortunately, if the code’s integrity was never verified, there is no way to be completely sure what you are deploying is what you built. (And that is before we even get to the problems from after code has been discovered to be compromised as we posted about **[here](https://www.codenotary.io/the-failure-of-the-certificate-revocation-list-crl/)**.)

 

## Securing DevOps Builds with CodeNotary

With CodeNotary, the solution is an **easy, single step** where you can be 100% sure your code is exactly how you left it. **Code integrity is no longer a question** with today’s technology. It is now possible to **verify** the **integrity** of all of your code **at every stage of the build process** before you ever deploy anything into production.

 

Additionally, one of the best things with CodeNotary’s **robust, multi-layered, security solution** is its seamless integration prevents problems from arising and scaling in size later on down the pipeline, creating **significant savings** in terms of potential patch costs and other associated damages.

 

By integrating CodeNotary’s **distributed ledger technology** into your DevOps and Jenkins builds, you now have the ability to keep a **30,000-foot view** of all shipped components sent to any customer **that scopes down to an infinitely granular level**.

 

Here’s how simple it is to setup Jenkins code build notarization.

 

## **Integrating vChain CodeNotary into Jenkins Build Deployment Pipeline**

In order to maintain an optimal DevSecOps pipeline with your CI/CD build, we have developed an application that can verify the integrity of all your code continuously. The details of how to configure CodeNotary to automatically sign Jenkins' builds is below. The integration has 3 main steps in what otherwise can be labeled a 10 step process. The 3 main steps are:

 

## **Steps**

1. Configuration System level
    1. Configure vcn credentials system-wide in Jenkins
2. Per build job
    1. Tie vcn credentials in from system configuration to local environment variables
    2. Sign asset
3. Before deployment
    1. Run vcn verify with asset parameters

### **Step 1: System-level configuration**

On the Home Screen, locate and click the Credentials link in the sidebar menu to expand the submenu beneath it.

 

![001 Home Screen](/images/blog/001-Home-Screen-174x300.png)

#### **Step 1.1**

With the submenu opened up, go ahead and select the credentials type, in this case, select System.

 

![001a Select Credentials - Jenkins Automation](/images/blog/001a-Select-Credentials-159x300.png)

#### **Step 1.2**

After selecting System, click Add Domain and notice the right-hand display shows ‘Global credentials (unrestricted)’. Click the link.

 

![001b System Credentials - Jenkins Automation](/images/blog/001b-System-Credentials-300x91.png)

 

#### **Step 1.3**

Create new credentials by selecting the Add Credentials option.

![001c Create Credentials - Jenkins Automation](/images/blog/001c-Create-Credentials-300x136.png)

### **Step 2: Per build job**

Now that you have the credential creation display opened, you will need to create your credential entries for your vcn keystore password, vcn user account, and vcn password.

 

![002 Create Credential Entries - Jenkins Automation](/images/blog/002-Create-Credential-Entries-300x48.png)

 

Once you have all 3, your list of credentials should look something similar to the below.

 

![003 List Credentials - Jenkins Automation](/images/blog/003-List-Credentials-300x20.png)

#### **Step 2.1**

Next, you will need to configure the build job environment for each build job you have. This is relatively simple. All you need to do is to tie the vcn credentials in from the system configuration to the local environment variables by setting the appropriate bindings.

 

![004 Configure Build Job Environment - Jenkins Automation](/images/blog/004-Configure-Build-Job-Environment-300x147.png)

 

After successfully setting your bindings, you will need to add a build job build step for signing your code with the vcn application. Click on the ‘Add build step’ drop down and select ‘Execute shell.’

 

![005 Add build job build step for signing - Jenkins Automation](/images/blog/005-Add-build-job-build-step-for-signing-294x300.png)

 

#### **Step 2.2**

Next, after `vcn login` and entering your credentials in the CLI, you will need to configure your build step for vcn signing by typing in the command:

 

vcn s docker://gcr.io/vchain-ops/vcn:stable

 

![006 Configure build step for vcn signing_190703](/images/blog/006-Configure-build-step-for-vcn-signing_190703-300x53.png)

### **Step 3: Before deployment**

Lastly, you will need to execute this snippet in the deployment process:

 

~> vcn verify docker:[gcr.io/vchain-ops/vcn:stable](http://gcr.io/vchain-ops/vcn:stable) && your\_deploy\_script.sh

 

And that’s it. You’re now ready to have vChain CodeNotary provide a perpetually running integrity check into all of your Jenkins build deployment pipeline, as well as ensure you are participating in the latest DevSecOps best practices.

 

Secure your Jenkins build deployment pipeline integrity today by signing up for a free CodeNotary non-commercial license by clicking below.

 

**[Get Your CodeNotary Free License](https://dashboard.codenotary.io/auth/signup?license=NON_COMMERCIAL)**

 

Please note, it can take up to 24 hours for us to activate your license after you have successfully completed registration, though it’s generally much faster. If you have any feedback, questions, or concerns, drop us a line through our contact page **[here](https://www.codenotary.io/contact/)** or our contact us through the CodeNotary.io chat.
