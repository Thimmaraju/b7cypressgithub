
Feature: Verify Login functionality

    Orange HRM Login functionality Automation
     
    @focus
    Scenario: Verify login with Valid credentials

        Given User launch client application
        When User enter username as "Admin"
        And  User enter password as "admin123"
        And User click on Login Button
        Then User Should be navigated to Dashboard

  
    Scenario: Verify login with InValid credentials

        Given User launch client application
        When User enter username as "Admin"
        And  User enter password as "admfwnhekfnhin123"
        And User click on Login Button
        Then User Should see Error Message