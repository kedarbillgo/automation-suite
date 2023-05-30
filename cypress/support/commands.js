// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import './ockta'

// cypress 12.0 and above
// https://docs.cypress.io/api/commands/wait
Cypress.Commands.add('pageLoadWait', (page) => {
  cy.intercept(`/${page}`).as(page)
  cy.visit(`/${page}`)
  cy.wait(`@${page}`)
});
