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
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Call Test Case \u0027Test Cases/PROJECT WEB/Common/F1_LoginFeatures/LF1_TC1_SUCCESSFULY LOGIN (P)\u0027 failed\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:63)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat addNewLanguage.stepAddNewLanguage.UserNavigatedtoLangPage(stepAddNewLanguage.groovy:54)\r\n\tat ✽.User is navigated to Language Page(C:/Users/Aiman Hakim/Katalon Studio/PROJECT WEB_ASSESSMENT PROTEGE/Include/features/Add New Language_BDD.feature:35)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Unable to verify object \u0027Object Repository/PROJECT WEB/Common/Page_OrangeHRM/h6_Dashboard\u0027 is present\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.verifyElementPresent(VerifyElementPresentKeyword.groovy:92)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.execute(VerifyElementPresentKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementPresent(WebUiBuiltInKeywords.groovy:1464)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementPresent$5.call(Unknown Source)\r\n\tat LF1_TC1_SUCCESSFULY LOGIN (P).run(LF1_TC1_SUCCESSFULY LOGIN (P):32)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:59)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat addNewLanguage.stepAddNewLanguage.UserNavigatedtoLangPage(stepAddNewLanguage.groovy:54)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:108)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:75)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:248)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat AddNewLanguage.run(AddNewLanguage:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:148)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:187)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1685529916380.run(TempTestSuite1685529916380.groovy:36)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027Object Repository/PROJECT WEB/Common/Page_OrangeHRM/h6_Dashboard\u0027 located by \u0027//div[@id\u003d\u0027app\u0027]/div/div/header/div/div/span/h6\u0027 not found\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword$_verifyElementPresent_closure1.doCall(VerifyElementPresentKeyword.groovy:85)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword$_verifyElementPresent_closure1.call(VerifyElementPresentKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\t... 59 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on the Add Language button",
  "keyword": "When "
});
formatter.match({
  "location": "stepAddNewLanguage.clicks_on_Add_Language_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Save button at Language page",
  "keyword": "And "
});
formatter.match({
  "location": "stepAddNewLanguage.clicks_Savebutton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is shown with messages on required",
  "keyword": "Then "
});
formatter.match({
  "location": "stepAddNewLanguage.Requiredmessages()"
});
formatter.result({
  "status": "skipped"
});
});