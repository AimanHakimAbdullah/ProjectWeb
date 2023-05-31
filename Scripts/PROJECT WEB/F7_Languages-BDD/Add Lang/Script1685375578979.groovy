import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.callTestCase(findTestCase('PROJECT WEB/Common/F1_LoginFeatures/LF1_TC1_SUCCESSFULY LOGIN (P)'), [('username') : 'Admin'
        , ('password') : 'hUKwJTbofgPU9eVlw/CnDQ=='], FailureHandling.STOP_ON_FAILURE)

WebUI.click(findTestObject('Object Repository/PROJECT WEB/AddNewLanguage/span_Admin'))

WebUI.navigateToUrl('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')

WebUI.click(findTestObject('Object Repository/PROJECT WEB/AddNewLanguage/span_Qualifications'))

WebUI.click(findTestObject('Object Repository/PROJECT WEB/AddNewLanguage/a_Languages'))

WebUI.click(findTestObject('Object Repository/PROJECT WEB/AddNewLanguage/button_AddLanguage'))

WebUI.setText(findTestObject('Object Repository/PROJECT WEB/AddNewLanguage/input_Name_oxd-input oxd-input--focus oxd-i_ad7396'), 
    'Russian')

WebUI.click(findTestObject('Object Repository/PROJECT WEB/AddNewLanguage/button_Save'))

WebUI.verifyElementPresent(findTestObject('Object Repository/PROJECT WEB/AddNewLanguage/span_Already exists'), 0)

WebUI.click(findTestObject('Object Repository/PROJECT WEB/AddNewLanguage/div_Add LanguageNameAlready exists  Require_364f55'))

WebUI.click(findTestObject('Object Repository/PROJECT WEB/AddNewLanguage/button_Save'))

WebUI.verifyElementPresent(findTestObject('Object Repository/PROJECT WEB/AddNewLanguage/span_Required'), 0)

