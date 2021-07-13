---
title: "immudb release 0.6.2"
date: "2020-06-16"
tags: ["release", "0.6.2"]
---

Dear community. immudb has just been released as v0.6.2

Release v0.6.2 fixes some important bugs and has many improvements - we recommend updating to it

### Bug Fixes

- require auth for admin commands even if auth is disabled on server, do not allow admin user to be deactivated
- base64 decoding of passwords: now it requires the "enc:" prefix as base64 can not be differentiated from plain-text at runtime (e.g. "immu" is a valid base64 encode string)
- only require admin password to be changed if it is "immu"
- fix ldflags on dist binaries and add static compilation infos
- **cmd/immuclient/audit:** fix base64 encoded password not working with immuclient audit-mode
- **immuadmin:** repair password change flow right after first admin login
- **pkg/auth:** make ListUsers require admin permissions
- **pkg/ring:** fixes cache corruption due to a ring buffer elements overwrite on same internal index
- **pkg/store:** remove useless ringbuffer array
- **pkg/store:** fix uniform cache layers size allocation with small values

### Changes

- add bug and feature request report github template
- fix golint errors
- githubactions add windows and build step
- remove plain-test admin password from log outputs
- add message (cli help and swagger description) about base64-encoded inputs and outputs of get and set commands
- FreeBSD section in the readme
- fix changelog auto generation repo and releasing template
- **pkg/server:** reduce corruption-checker resource usage

### Features

- expose through REST the following user-related actions: create, get, list, change password, set permission and deactivate
- immuclient freebsd daemon installation
- freebsd service install
- read immudb default admin password from flag, config or env var
- use immu as default admin password instead of randomly generated one
- **immudb:** accept base64 string for admin password in flag/config/env var

# Downloads

**Docker image** [https://hub.docker.com/r/codenotary/immudb](https://hub.docker.com/r/codenotary/immudb)

**Immudb Binaries**

[v0.6.2. download](https://github.com/codenotary/immudb/releases/tag/v0.6.2)
