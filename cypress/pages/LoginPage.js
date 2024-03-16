class LoginPage {
  elements = {
    usernameInput: () => cy.get("input[placeholder='Username']"),
    passwordInput: () => cy.get("input[placeholder='Password']"),
    addemployeeformfirstnameInput: () => cy.get("input[placeholder='First Name']"),
    addemployeeformlastnameInput: () => cy.get("input[placeholder='Last Name']"),
    addemployeeformemployeeidInput: () => cy.get(".oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input"),
    loginBtn: () => cy.get("button.oxd-button.orangehrm-login-button"),
    saveBtn: () => cy.get("button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space"),
    addemployeeButton: () => cy.get("button.oxd-button.oxd-button--medium.oxd-button--secondary"),
    //pimMenu: () => cy.get("span.oxd-text.oxd-main-menu-item--name"), 
    pimMenu: () => cy.get(":nth-child(2) > .oxd-main-menu-item > .oxd-text"),
    errorMessage: () => cy.get("p.oxd-text.oxd-alert-content-text"),
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  typeEmployeeFormFirstname(firstname) {
    this.elements.addemployeeformfirstnameInput().type(firstname);
  }

  typeEmployeeFormLastname(lastname) {
    this.elements.addemployeeformlastnameInput().type(lastname);
  }

  typeEmployeeFormEmployeeid(employeeid) {
    this.elements.addemployeeformemployeeidInput().type(employeeid);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  clickSave() {
    this.elements.saveBtn().click();
  }

  clickAddEmployee() {
    this.elements.addemployeeButton().contains('Add').click();
  }

  clickMenu() {
    this.elements.pimMenu().click();
  }

  /*clickMenu() {
    this.elements.pimMenu().click();
  }*/

  submitLogin(username,password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
    //this.elements.pimMenu().click();
  }

  submitEmployeeForm(firstname,lastname,employeeid){
    this.elements.addemployeeformfirstnameInput().type(firstname);
    this.elements.addemployeeformlastnameInput().type(lastname);
    this.elements.addemployeeformemployeeidInput().type(employeeid);
    this.elements.saveBtn().click();
    //this.elements.pimMenu().click();
  }
}

export const loginPage = new LoginPage();
