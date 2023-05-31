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

WebUI.click(findTestObject('PROJECT WEB/Job Titles/span_Admin_JT'))

WebUI.navigateToUrl('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')

WebUI.click(findTestObject('PROJECT WEB/Job Titles/span_Job_JT'))

WebUI.click(findTestObject('PROJECT WEB/Job Titles/a_Job Titles'))

WebUI.click(findTestObject('PROJECT WEB/Job Titles/button_Add_JT'))

WebUI.setText(findTestObject('PROJECT WEB/Job Titles/input_Job Title'), jobtitles)

WebUI.setText(findTestObject('PROJECT WEB/Job Titles/textarea_Job Description_JT'), description)

WebUI.uploadFile(findTestObject('PROJECT WEB/Job Titles/div_InputFile'), uploadfile)

WebUI.setText(findTestObject('PROJECT WEB/Job Titles/textarea_For Note_JT'), textnote)

WebUI.click(findTestObject('Object Repository/PROJECT WEB/Job Titles/button_Save'))

WebUI.click(findTestObject('Object Repository/PROJECT WEB/Job Titles/p_Successfully Saved'))

