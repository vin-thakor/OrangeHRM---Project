package com.orangehrm.cucumber.stepdefs;

import com.orangehrm.pages.LoginPage;
import org.testng.Assert;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


/**
 * Created by Vinay
 */
public class LoginTest {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {
    }

    @When("^I enter username \"([^\"]*)\"$")
    public void iEnterUsername(String username) {
        new LoginPage().setUserNameField(username);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new LoginPage().setPasswordField(password);
    }

    @And("^Click on Login button$")
    public void clickOnLoginButton() {
        new LoginPage().setClickOnLoginButton();
    }

    @Then("^I should login successfully on Orange Hrm website$")
    public void iShouldLoginSuccessfullyOnOrangeHrmWebsite() {
      Assert.assertTrue(new LoginPage().getWelcomeAdminText().contains("Welcome"));
    }


    @When("^I enter \"([^\"]*)\"$")
    public void iEnter(String username) {
        new LoginPage().setUserNameField(username);
    }

    @And("^click on Login Btn$")
    public void clickOnLoginBtn() {
        new LoginPage().setClickOnLoginButton();
    }


    @Then("^I should see error message \"([^\"]*)\"$")
    public void iShouldSeeErrorMessage(String errorMessage) {
        Assert.assertEquals(new LoginPage().getErrorText(), errorMessage);

    }
}
