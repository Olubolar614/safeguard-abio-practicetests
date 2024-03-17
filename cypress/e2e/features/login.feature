Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the orangehrm login page
    
    Scenario: Success Login
        When A user enters the username "Admin", the password "admin123", and clicks on the login button
        Then the url will contains the index subdirectory

    # Scenario: Incorrect Username Login
    #     When A user provides incorrect credentials, and clicks on the login button
    #         | username | password |
    #         | Geky234  | admin123 |
    #     Then The error message "Invalid credentials" is displayed

    # Scenario: Incorrect Password Login
    #     When A user provides incorrect credentials, and clicks on the login button
    #         | username | password |
    #         | Admin    | good517  |
    #     Then The error message "Invalid credentials" is displayed