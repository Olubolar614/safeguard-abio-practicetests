import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage'

Given("A web browser is at the orangehrm login page", () => {
  cy.visit("/");
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  loginPage.submitLogin(username,password)
  
});

// When("I click Pim from the main menu", () => {
//   loginPage.clickMenu();
// });

/*When("A user provides incorrect credentials, and clicks on the login button", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    loginPage.submitLogin(row.username, row.password)

  });
});*/

Then("the url will contains the index subdirectory", () => {
  cy.url().should("contains", "/index");
});

When("I click pim from the main menu", () => {
  loginPage.clickMenu();
});

When("I click add employee button", () => {
  loginPage.clickAdd();
});

When("I fill the employee form, and clicks on the save button", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.firstname);
    cy.log(row.lastname);
    cy.log(row.employeeid)
    loginPage.submitEmployeeForm(row.firstname, row.lastname, row.employeeid)
  });
});


/*Then("I click Pim from the main menu", () => {
  cy.should("have.text", PIM);
});

Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessage().should("have.text", errorMessage);
});*/
