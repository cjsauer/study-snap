Feature: Course creation

  As a user
  I want to create courses
  So that I can organize flashcards

  @dev
  Scenario: Guest tries to create course
    Given I am logged out
    When I navigate to "/courses/new"
    Then I should see the element "p.text-danger" with value "You must be logged in to do that!"

  
  @dev
  Scenario: User creates course
    Given I am logged in
    When I navigate to "/courses/new"
    And I fill in "university" with "Purdue University"
    And I fill in "title" with "CS 490"
    And I submit "#insertCourseForm"
    Then I should see the element "h1" with value "CS 490 - Purdue University"
