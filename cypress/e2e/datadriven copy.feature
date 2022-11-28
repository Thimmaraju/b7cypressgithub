
Feature: Verify Login functionality data driven

    Orange HRM Login functionality Automation

    Scenario Outline: Verify login with credentials different Users

        Given User launch client application
        When User enter username as '<username>'
        And  User enter password as '<Password>'
        And User click on Login Button
        Then User Should see Error Message
        Examples:
            | username | Password        |
            | Admin    | admin12fnken3   |
            | Admin    | adminfnbkjnf123 |
            | Adwefmin | adminfnbkjnf123 |