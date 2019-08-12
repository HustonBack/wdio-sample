Feature: Base test
  Scenario: User journey to hotel
    Given I am a customer on Homepage
    Then I type "Kiev" in search field
    Then I click Submit button
    Then Search results description should contain text "Kiev"
    Then I click on 1 item
    Then No availability message displayed
