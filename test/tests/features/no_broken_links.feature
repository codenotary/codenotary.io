Feature: No broken links in main page
  As a user
  I should be able to click on all links
  in a page and they should work

  @wip
  Scenario Outline: Scenario Outline name: No broken links codenotary website
    Given I am in the main page
    When I click on all links
    Then all clicked links should work

    Examples: Site URL's
    |url|
    |"/products/ci-cd"|
    |"/ledger-compliance"|
    |"/products/ledger-compliance-metrics-and-logs"|
    |"/products/technologies/immudb"|
    |"/blog"|
    |"/contact"|