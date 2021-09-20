---
title: "GitHub Actions go live Nov 13th and so do our Verify actions"
image: /images/blog/marketplace-1024x599.png
date: "2019-10-31"
---

GitHub Actions go live on November 13th and we're in the last 2 weeks of the beta.

Being part of the GitHub Actions beta program allowed us to create our CodeNotary commit authentication for the GitHub Actions marketplace. Now its ready and tested and everyone can use for free: [https://github.com/marketplace/actions/verify-commit](https://github.com/marketplace/actions/verify-commit)

## GitHub Actions GA free quantities

The following email reached us and informs about the free quantities and where to find pricing as well, if you go beyond these limits.

> We wanted to let you know that these services will still be free for open source and include free quantities, and that overages will become paid services on November 13. You can continue to use these services with no changes to your existing workflows. If you’d like to use Actions and Package Registry beyond the included limits, you will need to enable overages, since we will not charge you without your consent, even if you’ve been using similar levels of service quantities during the beta programs.
> 
> GitHub

The pricing page can be found here: [https://github.com/features/actions](https://github.com/features/actions)

## GitHub Actions marketplace

You can find the GitHub Action in the marketplace: [CodeNotary Verify Commit](https://github.com/marketplace/actions/verify-commit)

![GitHub Action to verify commits](/images/blog/marketplace-1024x599.png)

## Verify the authenticity of your commits with CodeNotary.io

Using the Verify commit action, you can sign your work locally using the [CodeNotary vcn](https://github.com/vchain-us/vcn) command line (ie. _vcn notarize git://_.). This action will verify these signatures so other people will know that your commits come from a trusted source.

Whenever you release a new commit, the verification check will be triggered and everyone can be sure its trusted by the maintainer. You can simply click on every checkmark of the commit to see the details.

![CodeNotary GitHub action](/images/blog/check.png)

## Usage

![verify commit action integration](/images/blog/latest.png)

Create a workflow `.yml` file in your repositories `.github/workflows` directory (eg. `.github/workflows/verify.yml`). In your workflow you first need to checkout your repository then use this action:

name: CodeNotary

on: \[push\]

jobs:
  check:

    runs-on: ubuntu-latest
    
    steps:
     - name: Checkout
       uses: actions/checkout@master
     
     - name: Verify
       uses: vchain-us/verify-action@master

For more details, see [Contexts and expression syntax for GitHub Actions](https://help.github.com/en/articles/contexts-and-expression-syntax-for-github-actions)

## Inputs

See [action.yml](https://github.com/vchain-us/verify-action/blob/master/action.yml).

Available inputs

- `signerID` - List of SignerID(s) (separated by space) to authenticate against. A SignerID is the signer's public address (represented as a 40 hex characters long string prefixed with `0x`).
- `org` - Organization's ID to authenticate against. Note that `org` takes precedence over `signerID`
- `path` - Path to git working directory. Default to the current directory.

Example:

     - name: Verify
       uses: vchain-us/verify-action@master
       with:
         signerID: <a trusted signer ID>
         org: <a trusted organization>
         path: <path to your repository, if not the current directory>

## Sign / Notarize your Git Commit

Please check the vcn repository to learn more about how you can notarize your commits, so the checks pass.

[https://github.com/vchain-us/vcn#usage](https://github.com/vchain-us/vcn#usage)

## Sources

You can find the sourcecode of the GitHub action in our GitHub repository: [https://github.com/vchain-us/verify-action](https://github.com/vchain-us/verify-action)
