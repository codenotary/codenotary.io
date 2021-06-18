
# CNLC integration testsuite

# Running

```bash
LC_URL=https://foo LC_USER=user LC_PASSWORD=pass behave
```

# Requirements

* https://github.com/mozilla/geckodriver

# Development

## Steps

The design principle is to avoid using Xpath or implementation details in the features description.

To achieve this, design the steps to follow a visual approach.

Supported steps:

* I open the url "https://foo.bar.com"
* I fill in "Username" with "demo"
* I click button "Sign In"
* I should see the text "Home"

