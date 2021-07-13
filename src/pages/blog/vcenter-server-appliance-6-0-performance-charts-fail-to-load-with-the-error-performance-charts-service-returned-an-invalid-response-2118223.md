---
title: "vCenter Server Appliance 6.0 performance charts fail to load with the error: Performance Charts service returned an invalid response (2118223)"
tags: ["Ops", "opvizor"]
date: "2016-02-16"
---

# vCenter Server Appliance 6.0 performance charts fail to load with the error: Performance Charts service returned an invalid response (2118223)

If you encounter an error as mentioned in the blog title you´ll be surprised what the reason is. Warning Spoiler! IPv6 is disabled and the performance charts service needs IPv6 to run with the default configuration.

Within the log files you can find the following messages:

_Performance Charts Service returns an invalid response._ 

and in the /var/log/vmware/perfcharts/wrapper.log file you can see entries similar to here:

- jvm 1 | SEVERE: Failed to initialize end point associated with ProtocolHandler \["http-bio-0:0:0:0:0:0:0:1-13080"\]
- jvm 1 | java.net.SocketException: Protocol family unavailable
- jvm 1 | at java.net.PlainSocketImpl.socketBind(Native Method)
- jvm 1 | at java.net.AbstractPlainSocketImpl.bind(Unknown Source)
- jvm 1 | at java.net.ServerSocket.bind(Unknown Source)jvm 1 | at java.net.ServerSocket.< init >(Unknown Source)

That happens because the IPv6 socket is not available. The performance charts by default use IPv6 for communication and will not use IPv4 unless configured to do so.

The solution is described in the VMware knowledge base article [2118223](http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2118223).

- Disable IPv6 for the performance charts from the _/usr/lib/vmware-perfcharts/wrapper/conf/wrapper.conf_ file.

1. Open the vCenter Server console and log in as root.
2. Type _shell.set --enabled true_ and press **Enter**.
3. Type shell and press **Enter**.
4. Make a backup of the _wrapper.conf_ file:_cp /usr/lib/vmware-perfcharts/wrapper/conf/wrapper.conf /usr/lib/vmware-perfcharts/wrapper/conf/wrapper.conf.old_
5. Open _/usr/lib/vmware-perfcharts/wrapper/conf/wrapper.conf_ with a text editor:_vi /usr/lib/vmware-perfcharts/wrapper/conf/wrapper.conf_
6. Edit the line _wrapper.java.additional.12=-Djava.net.preferIPv6Stack=_ to be false:For example:# Next three parameters are setting the garbage collBackector to ConcMarkSweep and are# enabling it to collect unused classes.wrapper.java.additional.9=-XX:+UseConcMarkSweepGC_wrapper.java.additional.10=-XX:+CMSClassUnloadingEnabledwrapper.java.additional.11=-XX:+CMSPermGenSweepingEnabledwrapper.java.additional.12=-Djava.net.preferIPv6Stack=false_
7. Save the changes and close the file.
8. Restart the performance chart service with these commands:_service-control --stop vmware-perfcharts_Then:_service-control --start vmware-perfcharts_
9. Verify the service is running with this command:_service-control --status vmware-perfcharts_

- Disable IPv6 for the performance charts from the _/usr/lib/vmware-perfcharts//tc-instance/conf/server.xml_ file.

1. Open the vCenter Server console and log in as root.
2. Type _shell.set --enabled true_ and press **Enter**.
3. Type shell and press **Enter**.
4. Make a backup of the server.xml file:_cp /usr/lib/vmware-perfcharts//tc-instance/conf/server.xml /usr/lib/vmware-perfcharts//tc-instance/conf/server.xml.old_
5. Open _/usr/lib/vmware-perfcharts//tc-instance/conf/server.xml_ file with a text editor:_vi /usr/lib/vmware-perfcharts//tc-instance/conf/server.xml_
6. Remove the _<!-- IPv6 configuration -->_ section::_<!-- IPv6 configuration --><Connector address="::1"                   acceptCount="300"   maxThreads="300"                    connectionTimeout="20000"                      executor="tomcatThreadPool"                      maxKeepAliveRequests="15"                      port="${bio.http.port}"                      protocol="org.apache.coyote.http11.Http11Protocol"/>_
7. Save the changes and close the file.
8. Restart the performance chart service with these commands:_service-control --stop vmware-perfcharts_Then:_service-control --start vmware-perfcharts_
9. Verify the service is running with this command:_service-control --status vmware-perfcharts_
