/*import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage'
import {pimPage} from '@pages/PimPage'

Given("A web browser is at the orangehrm login page", () => {
  cy.visit("/");
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  loginPage.submitLogin(username,password) 
});

When("I enter name {string} in the employee name field", () => {
  pimPage.enterEmployeeName();
});

When("I enter new firstname {string}, and clicks on the save button", () => {
  pimPage.enterEmployeeEditFirstname
});

When("A user provides incorrect credentials, and clicks on the login button", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    loginPage.submitLogin(row.username, row.password)
  });
});

When("I fill the employee form, and clicks on the save button", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.firstname);
    cy.log(row.lastname);
    cy.log(row.employeeid)
    pimPage.saveEmployeeForm(row.firstname, row.lastname, row.employeeid)
  });
});

Then("the url will contains the index subdirectory", () => {
  cy.url().should("contains", "/index");
});

When("I click Pim from the main menu", () => {
  pimPage.clickMenu();
});

When("I click add employee button", () => {
  pimPage.clickAdd();
});

When("I click the search button", () => {
  pimPage.searchEmployeeName();
});

When("I click the edit button in the search results table row", () => {
  pimPage.searchResultsEdit();
});

When("And I clear the firstname field", () => {
  pimPage.clearEmployeeEditFirstname
});

Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessage().should("have.text", errorMessage);
});

Then("I should see a success message", (successMessage) => {
  pimPage.elements.successMessage().should("have.text", successMessage);
});*/
