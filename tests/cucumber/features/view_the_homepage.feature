Feature: View the homepage

  As a guest
  I want to see the homepage
  So that I can understand what this app is all about

  @dev
  Scenario: Guest visiting the homepage
    When I navigate to "/"
    Then I should see the heading "Study Snap"
    And  I should see the title "Study Snap"
