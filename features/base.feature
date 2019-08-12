Feature: Base test
  Scenario: User journey to hotel
    Given I am a customer on Homepage
    Then I type "Kiev" in search field
    Then I click Submit button
