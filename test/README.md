
# Codenotary's site E2E Testing project

This is still a work in progress, however the main goal of this repository is to be able to run integration tests for codenotary.com builds to avoid breaking the site

# Running

The following instructions will allow you to run this test suite against a local instance

1. Create a .env file inside this directory and make sure the contents match or resemble this closely:

```bash
CURRENT_UID=0:0
SITE_URL=http://codenotary:8080/
BROWSER=chrome
SCREENSHOT_ON_FAIL=true
BEHAVE_OPTS=""
```

 2. Run the tests using the below commands

```bash
docker-compose build
docker-compose run integration-test
```

This will by default launch all tests against a Chrome browser, but you can also specify a  different browser using the below syntax or by updating the .env file

```bash
BROWSER=opera docker-compose run integration-test
```

The currently supported browsers are:

* chrome
* firefox
* opera

# Requirements

* All you need to run the tests is docker and docker-compose

# Development

Even though this site is relatively small, for specific pages it's advised to create a new class file inheriting from base_page. Page specific functionality shall also be delimited to page specific step files
and while maintaining a generic set of functions under pageobject/generics.py

## Steps
