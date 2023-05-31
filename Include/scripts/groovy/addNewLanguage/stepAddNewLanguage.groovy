package addNewLanguage
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class stepAddNewLanguage {
	/**
	 * The step definitions below for Add New Language Features
	 */

	@Given("User is navigated to Language Page")
	def UserNavigatedtoLangPage() {
		WebUI.callTestCase(findTestCase('PROJECT WEB/Common/F1_LoginFeatures/LF1_TC1_SUCCESSFULY LOGIN (P)'), [('username') : 'Admin'
			, ('password') : 'hUKwJTbofgPU9eVlw/CnDQ=='], FailureHandling.STOP_ON_FAILURE)
		WebUI.click(findTestObject('Object Repository/PROJECT WEB/AddNewLanguage/span_Admin'))
		WebUI.navigateToUrl('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
		WebUI.click(findTestObject('Object Repository/PROJECT WEB/AddNewLanguage/span_Qualifications'))
		WebUI.click(findTestObject('Object Repository/PROJECT WEB/AddNewLanguage/a_Languages'))
	}

	@When("User clicks on the Add Language button")
	def clicks_on_Add_Language_button() {
		WebUI.click(findTestObject('Object Repository/PROJECT WEB/AddNewLanguage/button_AddLanguage'))
	}

	@And("User enters preferred language (.*)")
	def Enters_preferred_Language(String language) {
		WebUI.setText(findTestObject('Object Repository/PROJECT WEB/AddNewLanguage/input_NameLanguage'), language)
	}

	@And("User clicks on Save button at Language page")
	def clicks_Savebutton() {
		WebUI.click(findTestObject('Object Repository/PROJECT WEB/AddNewLanguage/button_Save'))
	}

	@Then("User able to add and save Language successfully")
	def AbletoSaveLanguage() {
		WebUI.click(findTestObject('Object Repository/PROJECT WEB/AddNewLanguage/p_Successfully Saved'))
		WebUI.closeBrowser()
	}

	@And("User enters exist language (.*)")
	def Enters_existing_Language(String language) {
		WebUI.setText(findTestObject('Object Repository/PROJECT WEB/AddNewLanguage/input_NameLanguage'), language)
	}

	@Then("User is shown popup messages on already exist")
	def Popupmessagesalreadyexist() {
		WebUI.verifyElementPresent(findTestObject('Object Repository/PROJECT WEB/AddNewLanguage/span_Already exists'), 0)
		WebUI.closeBrowser()
	}


	@Then("User is shown with messages on required")
	def Requiredmessages() {
		WebUI.verifyElementPresent(findTestObject('Object Repository/PROJECT WEB/AddNewLanguage/span_Required'), 0)
		WebUI.closeBrowser()
	}
}