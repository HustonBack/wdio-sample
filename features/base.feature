Feature: Base test
  Scenario: User journey to hotel
    Given I am a customer on Homepage
    Then I type "Kiev" in search field
    Then I set date in calendar
    Then I click Submit button
    Then Search results description should contain text "Kiev"
    Then I click on 1 item
    Then I switch to selected hotel tab
    Then No availability message not displayed
