describe("Admin portal login", function () {

  this.beforeEach(() => {
    cy.loginWithSession(
      Cypress.env("okta_login"),
      Cypress.env("okta_username"),
      Cypress.env("okta_password")
    );
  })


  it("Visit Home page", function () {
    cy.visit("/")
    cy.url().should("contain", Cypress.env("app_url"));
  });


});