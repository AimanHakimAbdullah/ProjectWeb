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

WebUI.click(findTestObject('PROJECT WEB/Pay Grade/span_Admin'))

WebUI.navigateToUrl('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')

WebUI.click(findTestObject('PROJECT WEB/Pay Grade/span_Job'))

WebUI.click(findTestObject('PROJECT WEB/Pay Grade/a_Pay Grades'))

WebUI.click(findTestObject('PROJECT WEB/Pay Grade/button_DG 41'))

WebUI.navigateToUrl('https://opensource-demo.orangehrmlive.com/web/index.php/admin/payGrade/7')

WebUI.click(findTestObject('Object Repository/PROJECT WEB/Pay Grade/button_Add'))

WebUI.click(findTestObject('PROJECT WEB/Pay Grade/div_-- Select --'))

WebUI.setText(findTestObject('PROJECT WEB/Pay Grade/input_Minimum Salary'), '3000')

WebUI.setText(findTestObject('PROJECT WEB/Pay Grade/input_Maximum Salary'), '30')

WebUI.click(findTestObject('PROJECT WEB/Pay Grade/button_Save_AddCurrency'))

WebUI.verifyElementPresent(findTestObject('PROJECT WEB/Pay Grade/span_Should be higher than Minimum Salary'), 0)

