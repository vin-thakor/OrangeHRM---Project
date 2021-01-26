$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/orangehrm/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "As a User\r\nI want to visit Orange Hrm website",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14022519400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should login with valid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should login successfully on Orange Hrm website",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 356339800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 317165500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 205784100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.clickOnLoginButton()"
});
formatter.result({
  "duration": 12473884100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iShouldLoginSuccessfullyOnOrangeHrmWebsite()"
});
formatter.result({
  "duration": 180021000,
  "status": "passed"
});
formatter.after({
  "duration": 1050169500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Verify user should not login with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Login Btn",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ],
      "line": 19,
      "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "Peter",
        "dh123",
        "Invalid credentials"
      ],
      "line": 20,
      "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "runner",
        "slow123",
        "Invalid credentials"
      ],
      "line": 21,
      "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10726862100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify user should not login with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"Peter\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"dh123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Login Btn",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 60900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Peter",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 252400200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dh123",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 183097700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.clickOnLoginBtn()"
});
formatter.result({
  "duration": 885873700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 28
    }
  ],
  "location": "LoginTest.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 109148000,
  "status": "passed"
});
formatter.after({
  "duration": 894442600,
  "status": "passed"
});
formatter.before({
  "duration": 10441151300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify user should not login with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"runner\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"slow123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Login Btn",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 64600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "runner",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 475125600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "slow123",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 183193300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.clickOnLoginBtn()"
});
formatter.result({
  "duration": 767080800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 28
    }
  ],
  "location": "LoginTest.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 92831200,
  "status": "passed"
});
formatter.after({
  "duration": 832028600,
  "status": "passed"
});
});