---
title: "Top 10 GitHub project Home Assistant starts to secure code and deployments with CodeNotary"
date: "2021-03-29"
image: "https://www.home-assistant.io/images/hero_screenshot.png"
tags: ["Home Assistant", "GitHub", "securedevops", "codesigning"]
---

<img src="https://www.home-assistant.io/images/hero_screenshot.png">

A few weeks ago the developers of the famous [Home Assistant](https://www.home-assistant.io/) project reached out to us if we would work with them to secure their build and deployment process.

As an Open Source company ourselves, we immediately said yes, granted them a full license, activated the home-assistant.io organization, and supported the development team.

For Home Assistant *security* is enormously important and making sure that only origin and approved code and deployments are used is key. Eventually, hundred-thousands of deployments could be affected when a bad actor would tamper with home automation devices.

"Traditional digital certificates are some kind of ancient technology in a modern and agile development world. We don't want to restrict ourselves to approve or revoke a certificate, we want to be able to revoke a certain dependency, build version, or container image. We were looking for the full content trust! When reading about CodeNotary's service, it ticked all the right boxes and the integration was very smooth" said [Pascal Vizeli](https://twitter.com/pvizeli), one of the core Developer around Home Assistant.

Within a very short amount of time, the [Home Assistant team](https://twitter.com/hass_devs) created their own GitHub actions to notarize the source code, builds, and container images within the CI process.

Furthermore, they integrated a verification process in their [supervisor component](https://github.com/home-assistant/supervisor/pull/2735) that checks the origin and integrity of the running components.
The current beta release already contains this security enhancement.

Check out that great project https://github.com/home-assistant yourself and we'll monitor and inform you about the news when CodeNotary Trusted DevOps is part of the upcoming production release.

If you're running an Open Source project yourself and want to gain full content trust for your users as well, please ping us.
