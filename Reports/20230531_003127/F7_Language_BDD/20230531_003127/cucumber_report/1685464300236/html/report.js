$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Aiman Hakim/Katalon Studio/PROJECT WEB_ASSESSMENT PROTEGE/Include/features/Add New Language_BDD.feature");
formatter.feature({
  "name": "Add New Language_BDD",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Successfully add new language",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is navigated to Language Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks on the Add Language button",
  "keyword": "When "
});
formatter.step({
  "name": "User enters preferred language \u003clanguage\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Save button at Language page",
  "keyword": "And "
});
formatter.step({
  "name": "User able to add and save Language successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "language"
      ]
    },
    {
      "cells": [
        "Malay"
      ]
    },
    {
      "cells": [
        "Tamil"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successfully add new language",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is navigated to Language Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepAddNewLanguage.UserNavigatedtoLangPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Add Language button",
  "keyword": "When "
});
formatter.match({
  "location": "stepAddNewLanguage.clicks_on_Add_Language_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters preferred language Malay",
  "keyword": "And "
});
formatter.match({
  "location": "stepAddNewLanguage.Enters_preferred_Language(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Save button at Language page",
  "keyword": "And "
});
formatter.match({
  "location": "stepAddNewLanguage.clicks_Savebutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to add and save Language successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepAddNewLanguage.AbletoSaveLanguage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully add new language",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is navigated to Language Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepAddNewLanguage.UserNavigatedtoLangPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Add Language button",
  "keyword": "When "
});
formatter.match({
  "location": "stepAddNewLanguage.clicks_on_Add_Language_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters preferred language Tamil",
  "keyword": "And "
});
formatter.match({
  "location": "stepAddNewLanguage.Enters_preferred_Language(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Save button at Language page",
  "keyword": "And "
});
formatter.match({
  "location": "stepAddNewLanguage.clicks_Savebutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to add and save Language successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepAddNewLanguage.AbletoSaveLanguage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Fail to add existing language",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is navigated to Language Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks on the Add Language button",
  "keyword": "When "
});
formatter.step({
  "name": "User enters exist language \u003clanguage\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Save button at Language page",
  "keyword": "And "
});
formatter.step({
  "name": "User is shown popup messages on already exist",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "language"
      ]
    },
    {
      "cells": [
        "Russian"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Fail to add existing language",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is navigated to Language Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepAddNewLanguage.UserNavigatedtoLangPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Add Language button",
  "keyword": "When "
});
formatter.match({
  "location": "stepAddNewLanguage.clicks_on_Add_Language_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters exist language Russian",
  "keyword": "And "
});
formatter.match({
  "location": "stepAddNewLanguage.Enters_existing_Language(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Save button at Language page",
  "keyword": "And "
});
formatter.match({
  "location": "stepAddNewLanguage.clicks_Savebutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is shown popup messages on already exist",
  "keyword": "Then "
});
formatter.match({
  "location": "stepAddNewLanguage.Popupmessagesalreadyexist()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Language leave blank",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is navigated to Language Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepAddNewLanguage.UserNavigatedtoLangPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Add Language button",
  "keyword": "When "
});
formatter.match({
  "location": "stepAddNewLanguage.clicks_on_Add_Language_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Save button at Language page",
  "keyword": "And "
});
formatter.match({
  "location": "stepAddNewLanguage.clicks_Savebutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is shown with messages on required",
  "keyword": "Then "
});
formatter.match({
  "location": "stepAddNewLanguage.Requiredmessages()"
});
formatter.result({
  "status": "passed"
});
});