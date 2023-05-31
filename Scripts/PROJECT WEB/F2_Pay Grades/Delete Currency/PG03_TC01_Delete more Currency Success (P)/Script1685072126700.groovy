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

WebUI.click(findTestObject('PROJECT WEB/Pay Grade/button_Grade 1'))

WebUI.navigateToUrl('https://opensource-demo.orangehrmlive.com/web/index.php/admin/payGrade/1')

WebUI.click(findTestObject('PROJECT WEB/Pay Grade/button_Utd. Arab Emir. Dirham'))

WebUI.click(findTestObject('PROJECT WEB/Pay Grade/button_Yes, DeleteCurrency'))

WebUI.verifyElementPresent(findTestObject('PROJECT WEB/Pay Grade/p_Successfully Deleted'), 0)

WebUI.click(findTestObject('PROJECT WEB/Pay Grade/button_Argentina Pesos_'))

WebUI.click(findTestObject('PROJECT WEB/Pay Grade/button_Yes, DeleteCurrency'))

WebUI.verifyElementPresent(findTestObject('PROJECT WEB/Pay Grade/p_Successfully Deleted'), 0)

