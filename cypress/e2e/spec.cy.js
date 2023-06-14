/*
describe('Login Admin Portal', function() {
  it('Login', function() {
    cy.visit('https://billgo.oktapreview.com/login/login.htm?fromURI=%2Fhome%2Fbookmark%2F0oa1pk6fnzL2TIFtm1d7%2F2557');
    cy.get('#idp-discovery-username').type('UI.Development@billgo.com');
    cy.get('#idp-discovery-submit').click();
    cy.get('#form18').submit();
    cy.wait(5000);
    cy.get('#okta-signin-password').type('PX4wpZ&#&2wRMq0%xH25');
    cy.get('#okta-signin-submit').click();
    cy.get('#form53').submit();
    cy.wait(5000);
    cy.origin('https://a.billgo-sandbox.com', () => {
        cy.get('#okta-signin-username').type('UI.Development@billgo.com');
        cy.get('#form18').click();
        cy.get('#okta-signin-submit').click();
        cy.url().should('contains', 'https://a.billgo-sandbox.com/implicit/callback');
        cy.url().should('contains', 'https://a.billgo-sandbox.com/');
    });
  })
})

*/

describe("Admin portal login", function () {
  before(() => {
    Cypress.log({
      displayName: "APP URL",
      message: [`🔐 Authenticating | ${Cypress.env("app_url")}`],
      autoEnd: false,
    });

    // cy.login(Cypress.env("okta_username"), Cypress.env("okta_password"));
    // cy.wait(3000);

    cy.loginWithSession(
      Cypress.env("okta_login"),
      Cypress.env("okta_username"),
      Cypress.env("okta_password")
    );


    // let username = atob(Cypress.env("okta_username"));
   
  });

  // beforeEach(() => {
  //   // Visit the login page before each test
  //   // cy.visit('/');
  //   // cy.get('#okta-signin-username').type(atob(Cypress.env("okta_username")));
  //   // cy.get('#okta-signin-submit').click();

    
  // });


  // cy.wait(5000);

  // cy.origin(
  //   `${Cypress.env("app_url")}`,
  //   { args: { username } },
  //   ({ username }) => {
  //     cy.get('input[name="username"]', { timeout: 6000 }).type(username);
  //     cy.get('input[type="checkbox"]').check({ force: true });
  //     cy.get("#okta-signin-submit", { timeout: 2000 }).click({ force: true });
  //   }
  // );

  it("Visit Home page", function () {

    const username = atob(Cypress.env("okta_username"));
    const password = atob(Cypress.env("okta_password"));

    cy.visit('/');
    // cy.get('#okta-signin-username').type(atob(Cypress.env("okta_username")));
    // cy.get('#okta-signin-submit').click();
    
    cy.url().should("contain", Cypress.env("app_url"));
    // cy.pageLoadWait("signin");
    // cy.get('input[name="username"]').type(Cypress.env("okta_username"));
    // cy.get('[type="submit"]').click();
    // cy.wait(5000);
  });
});
