
Feature: Add New Language_BDD
    
  Scenario Outline: Successfully add new language
  
    Given User is navigated to Language Page
    When User clicks on the Add Language button 
    And User enters preferred language <language>
    And User clicks on Save button at Language page 
    Then User able to add and save Language successfully

Examples: 

      | language  |
      |	Malay			|
      |	Tamil			| 
      

    
	Scenario Outline: Fail to add existing language
  
    Given User is navigated to Language Page
    When User clicks on the Add Language button 
    And User enters exist language <language>
    And User clicks on Save button at Language page 
    Then User is shown popup messages on already exist

Examples: 

      | language  |
      |	Russian		|
	
  Scenario: Language leave blank
  
    Given User is navigated to Language Page
    When User clicks on the Add Language button 
    And User clicks on Save button at Language page 
    Then User is shown with messages on required