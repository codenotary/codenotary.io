---
title: "Is immutable infrastructure secure?"
author: "Duncan Mac-Vicar P."
date: "2021-05-17"
image: "/images/blog/trustedcicd.jpg"
tags: ["devops", "ci", "cd", "infrastructure", "immutable"]
---

# What is immutable infrastructure?

Immutable infrastructure is a paradigm in which IT services, servers and deployments are never modified after they’re deployed, but rather replaced.

This approach mitigates risks like the half-failure scenario, where a change step fails, leaving unusable infrastructure.

This approach plays well with declarative approaches like Infrastructure-as-Code, where Infrastructure is created from declarative descriptions managed as source code and built in a typical CI pipeline.

For example, a pipeline could consist of taking some Go code, build it into a container image, and a terraform deployment that combines this application with some off-the-shelf components.

As long as we don't change our source repository, builds will produce the same application, as Go applications pin their dependencies using checksums. Off-the-self referenced dependencies like databases have their own checksums and unless we refer to a newer one, the same image will be used.

# Does immutable infrastructure mean secure?

The term "immutable infrastructure", as normally defined, only guarantees integrity during the process. It does not protect you when:

- The input assets have been compromised. Worse, you will using those assets and signing the result.
- You discover later that the released assets are compromised. You would need to revoke your certificate.

## How pipelines are compromised

Even in the immutable infrastructure paradigm, assets are pinned but retrieved from sources including the Internet. If those sources are compromised, your pipeline will too.

Go code has `go.mod` declaring the dependencies. The `go.sum` file that is checked into source control will effectively pin version by checksum. Go also checks those against a [crowdsourced database](https://sum.golang.org/).

Let now take a Rails application. You would define your dependencies in source control in a `Gemfile`. This file looks like this:

```ruby
source 'http://rubygems.org'

ruby '2.1.8'

gem 'rails', '4.1.8'
gem 'sass-rails', '~> 4.0.3'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.0.0'
# ...
```

`Gemfile` says it needs at least `uglifier` 1.3.0, but it does not care if it is 1.3.0 or 1.3.1. We don't want versions to change on every deploy. Thanksfully, there is a second file called `Gemfile.lock`, which pins the resolved dependencies to specific versions. It looks like this:

```ruby
GEM
  remote: https://rails-assets.org/
  remote: https://rubygems.org/
  specs:
    actionmailer (4.2.1)
      actionpack (= 4.2.1)
      actionview (= 4.2.1)
      activejob (= 4.2.1)
      mail (~> 2.5, >= 2.5.4)
      rails-dom-testing (~> 1.0, >= 1.0.5)
    actionpack (4.2.1)
      actionview (= 4.2.1)
      activesupport (= 4.2.1)
      rack (~> 1.6)
      rack-test (~> 0.6.2)
      rails-dom-testing (~> 1.0, >= 1.0.5)
      rails-html-sanitizer (~> 1.0, >= 1.0.1)
...
```

Once you install the dependencies, a lock file is committed to source control, this states not what our application requires, but what was resolved as a consistent set of dependencies. The same resolved versions would be used from now.

What happens if someone breaks into the `rubygems.org` server (or your mirror) and replaces a gem with a different artifact. You will likely not notice.

If you use `bundle --trust-policy MediumSecurity` there is a [caveat](https://guides.rubygems.org/security/):

>Gem certificates are trusted globally, such that adding a cert.pem for one gem automatically trusts all gems signed by that cert. Trusting a good gem will not protect you against malicious code introduced into another gem signed with the same certificate.

You can see how easy is to introduce code in such a pipeline by watching [this talk](https://www.youtube.com/watch?v=zEBReauO-vg).

The story with Java is not very different. Maven dependencies are declared by specifying the artifact Id and version:

```xml
<dependency>
  <groupId>group-a</groupId>
  <artifactId>artifact-b</artifactId>
  <version>1.0</version>
  <type>bar</type>
  <scope>runtime</scope>
</dependency>
````

There is no way to verify that you are not injecting into your application malicious code unless you setup some protections based, [again, on digital certificates](https://stackoverflow.com/questions/6565084/maven-verify-signatures-of-downloaded-pom-jar-files). The same "all-or-nothing" approach. Blog post have been written about how you can take over the [computer of a Java developer](https://max.computer/blog/how-to-take-over-the-computer-of-any-java-or-clojure-or-scala-developer/) by injecting malicious dependencies.

## What is the solution?

The solution is to detach identities and trust and to make it asynchronous and distributed.

At any moment, your trust providers should be able to stop trusting a single artifact. If you look at the [SolarWinds](https://www.solarwinds.com/sa-overview/new-digital-certificate) or [HashiCorp](https://venturebeat.com/2021/04/26/hashicorp-revoked-private-key-exposed-in-codecov-security-breach/) incidents, both required to revoke a certificate that was used to sign good software. Find one bad tree, burn the forest.

Making it distributed means your organization different actors can assess the trust of any artifact at any point of the chain without complex coordination. You define the rules in your process: which actor's opinion on the trust of an asset is relevant in a given point of the process ie. QA teams, Security teams, Developers, etc. Your pipeline then encodes this and let the actors work without coordination.

This is what CodeNotary does. `vcn` allows to trust, distrust and unsupport any asset at any given time and record its trust level by an actor at any point in time. The [immudb technology](https://immudb.io) makes this record tamper-proof.

Did the Security team found a compromised dependency? Just do a `vcn` call to stop trusting it, and the pipeline will stop. No digital certificates to revoke. Even the end-user installation can verify the runtime artifacts in production against your Release Team identity.

This is what the HomeAssistant team, the most popular home-automation system is doing. Every user installation will check the components at runtime. Stopping a malicious component from running on the user's side is a simple switch from the Release-team. The question is no longer "Did the HomeAssistant team signed this?" (because that would be true even if compromised) but "Does the HomeAssistant team still trust this asset?".

## About Codenotary

To learn more how you can implement end-to-end tamper-proof protection for your CI pipeline, visit [CodeNotary](https://www.codenotary.com) and [signup for the Cloud version](https://www.codenotary.com/products/ci-cd) or [download the Self-Hosted edition](https://www.codenotary.com/products/ledger-compliance).



