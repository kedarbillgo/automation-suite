Cypress.Commands.add("login", (usr, pwd) => {
  const username = atob(usr);
  const password = atob(pwd);

  Cypress.log({
    displayName: "OKTA LOGIN",
    message: [`🔐 Authenticating | ${username}`],
    autoEnd: false,
  });

  // cy.visit("/");
  // cy.session(username, () => {
  /*
  cy.origin(
    Cypress.env("okta_login"),
    { args: { username, password } },
    ({ username, password }) => {
      cy.visit("/login/login.htm?fromURI=%2Fhome%2Fbookmark%2F0oa1pk6fnzL2TIFtm1d7%2F2557");
      cy.get('input[name="username"]').type(username);
      cy.get('input[type="checkbox"]').check({ force: true });
      cy.get('[type="submit"]').click();
      cy.wait(5000);
      cy.get('input[name="password"]').type(password);
      cy.get('[type="submit"]').click();
      cy.wait(5000);
      expect(true).to.equal(true);
    }
  );
*/

  cy.visit(
    "https://billgo.oktapreview.com/login/login.htm?fromURI=%2Fhome%2Fbookmark%2F0oa1pk6fnzL2TIFtm1d7%2F2557"
  );
  cy.get("#idp-discovery-username").type("UI.Development@billgo.com");
  cy.get("#idp-discovery-submit").click();
  cy.get("#form18").submit();
  cy.wait(5000);
  cy.get("#okta-signin-password").type("PX4wpZ&#&2wRMq0%xH25");
  cy.get("#okta-signin-submit").click();
  cy.get("#form53").submit();
  // cy.wait(5000);
  // cy.origin('https://a.billgo-sandbox.com', () => {
  //     cy.get('#okta-signin-username').type('UI.Development@billgo.com');
  //     cy.get('#form18').click();
  //     cy.get('#okta-signin-submit').click();
  //     cy.url().should('contains', 'https://a.billgo-sandbox.com/implicit/callback');
  //     cy.url().should('contains', 'https://a.billgo-sandbox.com/');
  // });

  // cy.origin(
  //   `${Cypress.env("app_url")}`,
  //   { args: { username } },
  //   ({ username }) => {
  //     cy.get('input[name="username"]', { timeout: 6000 }).type(username);
  //     cy.get('input[type="checkbox"]').check({ force: true });
  //     cy.get("#okta-signin-submit", { timeout: 2000 }).click({ force: true });
  //   }
  // );

  // cy.origin(
  //   `${Cypress.env("okta_login")}/login`,
  //   { args: { password } },
  //   ({ password }) => {
  //     cy.get('input[name="password"]').type(password);
  //     cy.get('[type="submit"]').click();
  //   }
  // );

  // cy.visit("/");
  // cy.wait(5000);
});

// });

// Custom command to login and preserve session
Cypress.Commands.add("loginWithSession", (url, usr, pwd) => {
  const username = atob(usr);
  const password = atob(pwd);

  // Check if a session cookie exists
  // if (Cypress.Cookies.preserveOnce) {
  //   // Restore the session cookie
  //   Cypress.Cookies.preserveOnce('okta-session-id', 'okta-session-store')
  // }

  // Visit the login page

  // // Check if already logged in
  // cy.get("#okta-signout").then(($signoutBtn) => {
  //   if ($signoutBtn.length) {
  //     // Already logged in, no need to login again
  //     return;
  //   } else {
  //     // Fill in the login form and submit
  //     cy.get('input[name="username"]', { timeout: 6000 }).type(username);
  //     cy.get('input[type="checkbox"]').check({ force: true });
  //     cy.get("#okta-signin-submit", { timeout: 2000 }).click({ force: true });
  //   }
  // });

  cy.get("#okta-signout")
    .should("not.exist")
    .then(() => {
      // cy.session([username, password], () => {
      cy.visit(
        `${url}/login/login.htm?fromURI=%2Fhome%2Fbookmark%2F0oa1pk6fnzL2TIFtm1d7%2F2557`
      );
      cy.get('input[name="username"]', { timeout: 6000 }).type(username);
      cy.get('input[type="checkbox"]').check({ force: true });
      cy.get("#idp-discovery-submit", { timeout: 2000 }).click({
        force: true,
      });
      cy.url().should("contain", "signin");
      cy.get('input[name="password"]').type(password);
      cy.get("#okta-signin-submit", { timeout: 2000 }).click({
        force: true,
      });
      // cy.visit("/");
      // cy.get('input[name="username"]', { timeout: 6000 }).type(username);
      // cy.get('input[type="checkbox"]').check({ force: true });
      // cy.get("#okta-signin-submit", { timeout: 2000 }).click({
      //   force: true,
      // });

      /**/
      cy.wait(8000)

      // cy.visit(`${Cypress.env("app_url")}`);
      // cy.get('#okta-signin-username"]', { timeout: 6000 }).type(username);
      // cy.get('input[type="checkbox"]').check({ force: true });
      // cy.get("#okta-signin-submit", { timeout: 2000 }).click({
      //   force: true,
      // });
      /**/
        cy.origin(
          `${Cypress.env("app_url")}`,
          { args: { username } },
          ({ username }) => {
            cy.get('input[name="username"]', { timeout: 6000 }).type(username);
            cy.get('input[type="checkbox"]').check({ force: true });
            cy.get("#okta-signin-submit", { timeout: 2000 }).click({
              force: true,
            });
          }
        );
        
    });

  // });
});
