---
title: "Sneak Peek: Opvizor OpBot, Slack, VMware vSphere and Amazon Echo Dot"
tags: ["Ops", "opvizor"]
date: "2016-12-15"
---

Most people know Amazon Echo (Alexa), the device to voice control your home. I just couldn't resist to order an echo dot to connect it to our Slack channel. Telling echo dot to write messages into the chat is ok and fun. But to use it to send commands to our VMware vSphere environment was getting me excited. About a week ago we released our OpBot ChatOps for VMware vSphere product, that is not less than the beginning of the new way to operate your VMware vSphere and much more.

Using voice commands to check for the health of some virtual machines, your ESXi hosts and many other datacenter components is intriguing.

So let's start this project and welcome the players that share a room within [Slack](http://www.slack.com) Chat:

**Player 1** - [Amazon Echo Dot](https://www.amazon.com/All-New-Amazon-Echo-Dot-Add-Alexa-To-Any-Room/dp/B015TJD0Y4), hosts the Alexa voice control to publish commands within the Chat

[![Amazon Echo Dot](/images/blog/feature-simplesetup-v2.jpg)](https://www.amazon.com/All-New-Amazon-Echo-Dot-Add-Alexa-To-Any-Room/dp/B015TJD0Y4)

[](https://www.amazon.com/All-New-Amazon-Echo-Dot-Add-Alexa-To-Any-Room/dp/B015TJD0Y4)

[Photo courtesy of](https://www.amazon.com/All-New-Amazon-Echo-Dot-Add-Alexa-To-Any-Room/dp/B015TJD0Y4) [Amazon](https://www.amazon.com/All-New-Amazon-Echo-Dot-Add-Alexa-To-Any-Room/dp/B015TJD0Y4)

**Player 2** - [OpBot](http://try.opvizor.com/opbot), who lives in your chat room to make sure, you got VMware vSphere under control

[![OpBot ChatOps Bot for VMware vSphere](/images/blog/opBot.png)](http://try.opvizor.com)

**Player 3** - [myself](https://www.linkedin.com/in/denniszimmer), who just wants to have access to his virtual environment from anywhere

[![Dennis Zimmer CEO Opvizor](/images/blog/3d789b8f665847bd8f41476c9fe9e79a.jpg)](https://www.linkedin.com/in/denniszimmer)

My goal was to check for Snapshots of some common used VMs in our test environment just using voice control.

I want to start with the result and get into the details then.

![VMware Chatops in Slack using Amazon echo dot](/images/blog/opbot_echodot.png)

<iframe src="https://player.vimeo.com/video/195537120" width="640" height="341" frameborder="0" webkitallowfullscreen mozallowfullscreen="" allowfullscreen=""></iframe>

Of course I needed the obvious things, like a Slack account, an installed OpBot connected to Slack and the Amazon Echo Dot setup.

I created a Slack channel called #bottalk, where all action should happen and invited OpBot and myself.

![Bottalk Slack channel](/images/blog/channels.png)

To enable the communication between Web services as the one I'm going to create and Slack you need to create a incoming web hook and write down the Webhook URL.

![Create Slack Webhook](/images/blog/slack_incomingwh.png)

![Incoming Webhook URL](/images/blog/slack_incomingwh2.png)

Next thing was to create a [Amazon Lambda](https://aws.amazon.com/lambda/) service and to add an [Alexa Skill](https://developer.amazon.com/appsandservices/solutions/alexa/alexa-skills-kit/getting-started-guide). A very good starting point how to combine Slack and Alexa, is the following blog post: [Hands-Free Slack: AWS Lambda meets Amazon Echo](https://aws.amazon.com/blogs/compute/slack-dictation-an-amazon-echo-and-aws-lambda-demo/)

## Amazon Lambda

Within Amazon AWS Lambda, I created a new function to send messages to the Slack chat, using the webhook and the introductional text.

![AWS Lambda function Slack](/images/blog/lambda_service1.png)

![Amazon Lambda Welcome Message](/images/blog/lambda_service2.png)

The important thing here is to copy the ARN in the top right for later use with the Alexa Skill.

## Alexa Skill

Now we need to let [Alexa](https://developer.amazon.com/alexa-skills-kit) know of the new skill we just created the service for.

![Amazon Alexa Skill](/images/blog/alexaskill.png)

Create a new skill, using the copied ARN as an endpoint is pretty forward and simple. You just need to create the correct opening word (invocation) to start the skill using the Lambda service.

![Alexa Skill OpBot VMware](/images/blog/alexaskill2.png)

![Alexa Skill intent schema](/images/blog/alexaskill3.png)

You can start testing within the Alexa skill setup and if all works fine, the connection between Amazon Echo should already work.

Getting used to the OpBot commands is very helpful of course and it takes some training to say the commands in the right way, so they are interpreted correctly.

If all goes well, you should be able to give OpBot commands to show virtual machines, snapshots, events and much more.

- In my case, starting with the opening: Alexa open slack
- Now Alexa responds back to get the commands to send to slack
- I answer: send snapshots
- the Lambda service is pushing my response into the Slack channel #opbot

![Alexa Echo Dot to VMware vSphere](/images/blog/opbot_echodot-1.png)

Oh, I chose the ghost as an icon within slack to differentiate between my own chat commands and the ones coming in via the Lambda service and Alexa.

Stay tuned, as we're going to continue enhancing OpBot massively over the next weeks, months and years.

## Make sure to try is out: [OpBot Download](http://try.opvizor.com/opbot)
