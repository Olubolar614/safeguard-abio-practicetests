Feature: Pim page

    Test pim feature with valid credentials

    Background:
        Given A web browser is at the orangehrm login page
        Given A user enters the username "Admin", the password "admin123", and clicks on the login button
        
    Scenario: Add a new employee under pim
        Then the url will contain the index subdirectory
        Then I click Pim from the main menu
        When I click add employee button
        When I fill the employee form, and clicks on the save button
            | firstname | lastname | employeeid |
            | good31545   | feyi418  | 7138       |
        Then I should see a success message

    Scenario: Edit a new employee record
        When I click pim from the main menu
        When I enter name "good31545" in the employee name field
        When I click the search button
        When I click the edit button in the search results table row
        When I clear the firstname field
        When I enter new firstname "tester16", and clicks on the save button
        Then I should see a success message

    Scenario: Delete a new employee record
        When I click pim from the main menu
        When I enter name "tester16" in the employee name field
        When I click the search button
        When I click the delete button in the search results table row
        Then I should see a success message
