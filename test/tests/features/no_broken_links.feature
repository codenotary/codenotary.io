Feature: No broken links in main page
  As a user
  I should be able to click on all links
  in a page and they should work

  @wip
  Scenario Outline: Scenario Outline name: No broken links codenotary website
    Given I open the url <url>
    When I click on all links
    Then all clicked links should work

    Examples: Site URL's
    |url|
    |"http://codenotary:8080/products/ci-cd"|
    |"http://codenotary:8080/products/ledger-compliance"|
    |"http://codenotary:8080/products/ledger-compliance-metrics-and-logs"|
    |"http://codenotary:8080/products/technologies/immudb"|
    |"http://codenotary:8080/blog"|
    |"http://codenotary:8080/contact"|