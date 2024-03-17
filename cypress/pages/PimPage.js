class PimPage {
  elements = {
    usernameInput: () => cy.get("input[placeholder='Username']"),
    passwordInput: () => cy.get("input[placeholder='Password']"),
    firstnameInput: () => cy.get("input[placeholder='First Name']"),
    editEmployeeFirstnameInput: () => cy.get("input[placeholder='First Name']"),
    lastnameInput: () => cy.get("input[placeholder='Last Name']"),
    employeeidInput: () => cy.get(".orangehrm-full-width-grid > div > div > div:nth-child(2) > input"),
    loginBtn: () => cy.get("button.oxd-button.orangehrm-login-button"),
    saveBtn: () => cy.get("button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space").first(),
    formEmployeeNameInput: () => cy.get("div.oxd-autocomplete-text-input.oxd-autocomplete-text-input--active").first(),
    formSearchBtn: () => cy.get("button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space"),
    searchResultsTableEditBtn: () => cy.get("i.oxd-icon.bi-pencil-fill").first(),
    pimAddEmployeeBtn: () => cy.get ("button.oxd-button.oxd-button--medium.oxd-button--secondary"),
    pimMenu: () => cy.get("span.oxd-text.oxd-main-menu-item--name"),
    errorMessage: () => cy.get("p.oxd-text.oxd-alert-content-text"),
    successMessage: () => cy.get("div"),
    deleteButton: ()=> cy.get("button.oxd-icon-button .oxd-icon.bi-trash").first(),
    confirmDeleteButton: ()=> cy.get(".oxd-button--label-danger"),
  };

  clickDeleteButton(){
    this.elements.deleteButton().click();
    this.elements.confirmDeleteButton().click();
  }
  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  typeEmployeeFormFirstname(firstname) {
    this.elements.firstnameInput().type(firstname);
  }

  typeEmployeeFormLastname(lastname) {
    this.elements.lastnameInput().type(lastname);
  }

  typeEmployeeFormEmployeeid(employeeid) {
    this.elements.employeeidInput().clear().type(employeeid);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  clickSave() {
    this.elements.saveBtn().click();
  }

  searchResultsEdit() {
    this.elements.searchResultsTableEditBtn().click();
  }

  clearEmployeeEditFirstname() {
    this.elements.editEmployeeFirstnameInput().clear();
  }

  enterEmployeeEditFirstname(firstname) {
    this.elements.editEmployeeFirstnameInput().type(firstname);
    this.elements.saveBtn().click();
  }

  enterEmployeeName(firstname) {
    this.elements.formEmployeeNameInput().type(firstname).wait(2000);
  }

  searchEmployeeName() {
    this.elements.formSearchBtn().contains('Search').click();
  }

  clickAdd() {
    this.elements.pimAddEmployeeBtn().contains('Add').click();
  }

  clickMenu() {
    this.elements.pimMenu().contains('PIM').click();
  }

  submitLogin(username,password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
    //this.elements.pimMenu().click();
  }

  saveEmployeeForm(firstname,lastname,employeeid){
    this.elements.firstnameInput().type(firstname);
    this.elements.lastnameInput().type(lastname);
    this.elements.employeeidInput().type(employeeid);
    this.elements.saveBtn().click();
    //this.elements.pimMenu().click();
  }
}

export const pimPage = new PimPage();
