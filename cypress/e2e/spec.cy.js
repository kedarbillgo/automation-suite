describe('Create a Last Mile Record', function () {
  beforeEach(function () {
    // Login via username and password
    cy.pageLoadWait('login')
    cy.loginByOkta(Cypress.env('okta_username'), Cypress.env('okta_password'))
    cy.wait(5000)
    

    // Login via fake
    // cy.loginByFake(Cypress.env('fake_username'), Cypress.env('fake_password'))

    // Login via session/cookies management
    // cy.mockOktaLoggedState();
    // cy.wait(30000)
  })

  it('Set the internal client', function () {
    cy.pageLoadWait('billgo-settings')
    cy.wait(5000)
    cy.get('input[data-testid="Tenant to log into (internal, hnb, capone, etc.)"]').type('internal')
    cy.get('button[data-testid="Tenant to log into (internal, hnb, capone, etc.)-confirm"]').focused().click()
    cy.get('button.OKydcNOSomvwPhRS0XjJs').click()
    cy.wait(5000)
  })

  it('Visit Billers tab and click on add billers', function() {
    cy.pageLoadWait('dashboard/billers')
    cy.wait(5000)
    cy.get('button#blgo-add-bills').click()
  })

});


// need to create this
// https://auth0.com/blog/end-to-end-testing-with-cypress-and-auth0/

// https://ossoapp.com/docs/consume/osso-react/
