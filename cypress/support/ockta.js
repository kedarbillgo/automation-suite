var oktaCacheStorage = `{"https://dev-486191.okta.com/oauth2/default/.well-known/openid-configuration":{"expiresAt":1684234949,"response":{"issuer":"https://dev-486191.okta.com/oauth2/default","authorization_endpoint":"https://dev-486191.okta.com/oauth2/default/v1/authorize","token_endpoint":"https://dev-486191.okta.com/oauth2/default/v1/token","userinfo_endpoint":"https://dev-486191.okta.com/oauth2/default/v1/userinfo","registration_endpoint":"https://dev-486191.okta.com/oauth2/v1/clients","jwks_uri":"https://dev-486191.okta.com/oauth2/default/v1/keys","response_types_supported":["code","id_token","code id_token","code token","id_token token","code id_token token"],"response_modes_supported":["query","fragment","form_post","okta_post_message"],"grant_types_supported":["authorization_code","implicit","refresh_token","password","urn:ietf:params:oauth:grant-type:device_code"],"subject_types_supported":["public"],"id_token_signing_alg_values_supported":["RS256"],"scopes_supported":["openid","profile","email","address","phone","offline_access","device_sso"],"token_endpoint_auth_methods_supported":["client_secret_basic","client_secret_post","client_secret_jwt","private_key_jwt","none"],"claims_supported":["iss","ver","sub","aud","iat","exp","jti","auth_time","amr","idp","nonce","name","nickname","preferred_username","given_name","middle_name","family_name","email","email_verified","profile","zoneinfo","locale","address","phone_number","picture","website","gender","birthdate","updated_at","at_hash","c_hash"],"code_challenge_methods_supported":["S256"],"introspection_endpoint":"https://dev-486191.okta.com/oauth2/default/v1/introspect","introspection_endpoint_auth_methods_supported":["client_secret_basic","client_secret_post","client_secret_jwt","private_key_jwt","none"],"revocation_endpoint":"https://dev-486191.okta.com/oauth2/default/v1/revoke","revocation_endpoint_auth_methods_supported":["client_secret_basic","client_secret_post","client_secret_jwt","private_key_jwt","none"],"end_session_endpoint":"https://dev-486191.okta.com/oauth2/default/v1/logout","request_parameter_supported":true,"request_object_signing_alg_values_supported":["HS256","HS384","HS512","RS256","RS384","RS512","ES256","ES384","ES512"],"device_authorization_endpoint":"https://dev-486191.okta.com/oauth2/default/v1/device/authorize"}},"https://dev-486191.okta.com/oauth2/default/v1/keys":{"expiresAt":1684234965,"response":{"keys":[{"kty":"RSA","alg":"RS256","kid":"ovKMh8cvWwJkAZaGixjQuBa39en8oQd12zHMJZYTSiM","use":"sig","e":"AQAB","n":"kajN0U7Isfjb_Jd2sGd2PUxjB2ax39AiIJJQtMcFMGtAiLV37GrkbGDEHlyUnu-TfW2Xy5xgj4cmiOmxqBT1rff6_780_B1F3GcE2UVbSWSVKCBI7kg6H7296hCoRvct-cMdiCdzMdjxVe4KHhgv9BTk2muCjFm4XVZTdUv0Ii1qGmh2t6OCe4c4oRvVFGYeTi3LREoC_lf4o34NCWxISyg1xZjcV7uR4o9eoYWqLzaab3A5llqhGfZ8CSGR4TZQO3kqUPDyV6WCIBIzK2hwBcECReTmTz7pcIkZ3yoUHpHhuYWrWTmsMkf4ehiaH6V6dXX544OvxWFJZioR_vPhqQ"},{"kty":"RSA","alg":"RS256","kid":"MDma6zpo46quF3qYJZ18gv6VNKwBGB1w74k1Wn4wMyk","use":"sig","e":"AQAB","n":"n3hWt7O-EEtv7FMtIc3eg-d0cAtlu2ZIvEo73XTGl4-uRYE2HVXxEXXiyG-7VrH4fzptZS6drbroz6iuUms6Srrno0FEMXywvDhxfahYhwLVfjm2ER5VidCVG7yKZ1dmo0pMo60ypD-1aP5E7H_DuSQTZqzPF8JvsG0nMI6loHfzmfkXL77ZpTgmyNcvwe7Zt4hQOyqEUeODweWqQbxhTWxxIyHg8fOWOoderS6YDc9prHAZTPOTwRcYB0gJyJO5k3fdwzAx-pZnriq_9K5ClUic1LlOSZ6AHc4PWtcJEKQIQmNf7-4W0iohWBLFp1Hlu-SZkheflVrWkui3SMh8Xw"}]}}}`;
var oktaTokenStorage = `{"idToken":{"value":"eyJraWQiOiJvdktNaDhjdld3SmtBWmFHaXhqUXVCYTM5ZW44b1FkMTJ6SE1KWllUU2lNIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHVhb2V5YXVyTkJVaXhCSTR4NyIsIm5hbWUiOiJLZWRhciBLdWxrYXJuaSIsImVtYWlsIjoia2VkYXIua3Vsa2FybmlAYmlsbGdvLmNvbSIsInZlciI6MSwiaXNzIjoiaHR0cHM6Ly9kZXYtNDg2MTkxLm9rdGEuY29tL29hdXRoMi9kZWZhdWx0IiwiYXVkIjoiMG9hZzIydXJzR1ZOUmNmUVk0eDYiLCJpYXQiOjE2ODQyMzMxMzgsImV4cCI6MTY4NDIzNjczOCwianRpIjoiSUQuYmc3Ty1qaE5oR2t6YkVwUUZjUWFfRGR6WWhCZDRQcHlzbHpyTnRqYnluMCIsImFtciI6WyJwd2QiXSwiaWRwIjoiMG9hM29zZDg2c0x4dHV5aFk0eDciLCJub25jZSI6IjhPd0xVZ2lpcExvS1g4NDlyVGVIUEZmeWF5M295WWZmd1g4bE5rTE1IZDBmWnN3bDAzQVFTdElPMFIyNXREYkciLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJrZWRhci5rdWxrYXJuaUBiaWxsZ28uY29tIiwiYXV0aF90aW1lIjoxNjg0MjI1OTkwLCJhdF9oYXNoIjoiOVNnQnRmNEhtcTBFY0s0LWFrVV9WQSJ9.AlwB0iRQg6TUkH0VVQ1ayjupVJpIpPA11SQWZdTiNeLKa1qGHWTKMth6_tCsF9tO0QE_9556pJf2sXs5PP9tNvdmo7eCZPRujsq8bZGpU-PW5wXrIknYg4norbFKZ1AljnIQBaGnvoSV5Cne5pem8o8c-Q9erRmxrxqys43faI2fOdXYsqgELfQVbq9AJeW69m42rVNMZnHUBKCp9NKnvAroLSL2NonpwrswzlIvOLbR_qElnjETLWa0FJck1PpwygkfH31gR3SaA8CrNGdx8swSjlvYz_tYuaaJDIy-Ci8BQnOEWJs7JKMk-Q_TKr1uItAlKiPfxpqcJtSv0hLAMw","idToken":"eyJraWQiOiJvdktNaDhjdld3SmtBWmFHaXhqUXVCYTM5ZW44b1FkMTJ6SE1KWllUU2lNIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHVhb2V5YXVyTkJVaXhCSTR4NyIsIm5hbWUiOiJLZWRhciBLdWxrYXJuaSIsImVtYWlsIjoia2VkYXIua3Vsa2FybmlAYmlsbGdvLmNvbSIsInZlciI6MSwiaXNzIjoiaHR0cHM6Ly9kZXYtNDg2MTkxLm9rdGEuY29tL29hdXRoMi9kZWZhdWx0IiwiYXVkIjoiMG9hZzIydXJzR1ZOUmNmUVk0eDYiLCJpYXQiOjE2ODQyMzMxMzgsImV4cCI6MTY4NDIzNjczOCwianRpIjoiSUQuYmc3Ty1qaE5oR2t6YkVwUUZjUWFfRGR6WWhCZDRQcHlzbHpyTnRqYnluMCIsImFtciI6WyJwd2QiXSwiaWRwIjoiMG9hM29zZDg2c0x4dHV5aFk0eDciLCJub25jZSI6IjhPd0xVZ2lpcExvS1g4NDlyVGVIUEZmeWF5M295WWZmd1g4bE5rTE1IZDBmWnN3bDAzQVFTdElPMFIyNXREYkciLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJrZWRhci5rdWxrYXJuaUBiaWxsZ28uY29tIiwiYXV0aF90aW1lIjoxNjg0MjI1OTkwLCJhdF9oYXNoIjoiOVNnQnRmNEhtcTBFY0s0LWFrVV9WQSJ9.AlwB0iRQg6TUkH0VVQ1ayjupVJpIpPA11SQWZdTiNeLKa1qGHWTKMth6_tCsF9tO0QE_9556pJf2sXs5PP9tNvdmo7eCZPRujsq8bZGpU-PW5wXrIknYg4norbFKZ1AljnIQBaGnvoSV5Cne5pem8o8c-Q9erRmxrxqys43faI2fOdXYsqgELfQVbq9AJeW69m42rVNMZnHUBKCp9NKnvAroLSL2NonpwrswzlIvOLbR_qElnjETLWa0FJck1PpwygkfH31gR3SaA8CrNGdx8swSjlvYz_tYuaaJDIy-Ci8BQnOEWJs7JKMk-Q_TKr1uItAlKiPfxpqcJtSv0hLAMw","claims":{"sub":"00uaoeyaurNBUixBI4x7","name":"Kedar Kulkarni","email":"kedar.kulkarni@billgo.com","ver":1,"iss":"https://dev-486191.okta.com/oauth2/default","aud":"0oag22ursGVNRcfQY4x6","iat":1684233138,"exp":1684236738,"jti":"ID.bg7O-jhNhGkzbEpQFcQa_DdzYhBd4PpyslzrNtjbyn0","amr":["pwd"],"idp":"0oa3osd86sLxtuyhY4x7","nonce":"8OwLUgiipLoKX849rTeHPFfyay3oyYffwX8lNkLMHd0fZswl03AQStIO0R25tDbG","preferred_username":"kedar.kulkarni@billgo.com","auth_time":1684225990,"at_hash":"9SgBtf4Hmq0EcK4-akU_VA"},"expiresAt":1684236738,"scopes":["openid","profile","email"],"authorizeUrl":"https://dev-486191.okta.com/oauth2/default/v1/authorize","issuer":"https://dev-486191.okta.com/oauth2/default","clientId":"0oag22ursGVNRcfQY4x6"},"accessToken":{"value":"eyJraWQiOiJvdktNaDhjdld3SmtBWmFHaXhqUXVCYTM5ZW44b1FkMTJ6SE1KWllUU2lNIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULlVVamxvTS1kV1d6X285cGhsUXpkYlFldC1qcDFjVHV3V292cWN1Yld5YlkiLCJpc3MiOiJodHRwczovL2Rldi00ODYxOTEub2t0YS5jb20vb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNjg0MjMzMTM3LCJleHAiOjE2ODQyMzY3MzcsImNpZCI6IjBvYWcyMnVyc0dWTlJjZlFZNHg2IiwidWlkIjoiMDB1YW9leWF1ck5CVWl4Qkk0eDciLCJzY3AiOlsib3BlbmlkIiwicHJvZmlsZSIsImVtYWlsIl0sImF1dGhfdGltZSI6MTY4NDIyNTk5MCwic3ViIjoia2VkYXIua3Vsa2FybmlAYmlsbGdvLmNvbSIsImZpcnN0TmFtZSI6IktlZGFyIiwiYWNjZXNzVG9GcmF1ZExvY2tEYXRhIjp0cnVlLCJmYW1pbHlOYW1lIjoiS3Vsa2FybmkiLCJncm91cHMiOlsiQURNSU5fUE9SVEFMX1VTRVJTIiwiRXZlcnlvbmUiLCJHTFVPTl9CSUxMR09fQURNSU4iLCJCaWxsR09fVVNFUlMiLCJHTFVPTl9GUkFVRF9MT0NLX0RBVEFfQUNDRVNTIl19.aC_WfGtDf5mxyjq0CnAdQsagEDFEQcA1RlZHo9y2d7yG5dsAo6YzwqKrySc2eN2l-SMikk3cGfGbfZMcuQz-PLZi5Wkm1JgeEGxnuutnfGyGzYMA7LT5oLCxTATxZsJqIAys5zaHdIMDhgqPmpLX6d0tscq1ntFfFIk30lK7EoKkbYogmz0T-IMxtUZ-BDaD9p8EqEC4SYUYd2jeX_b3youYp429Kd-vFuW7hqyDF7v04ZYoITlo6rolulFxV9M0lU-m_tOZ42mD8CKwRnvPFJaF-AlpTcZwokBZvKAE4IZI0iCFR0VwJiR0iQ-nQPZIaWuRJZcnjry8J_IQV2lmQw","accessToken":"eyJraWQiOiJvdktNaDhjdld3SmtBWmFHaXhqUXVCYTM5ZW44b1FkMTJ6SE1KWllUU2lNIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULlVVamxvTS1kV1d6X285cGhsUXpkYlFldC1qcDFjVHV3V292cWN1Yld5YlkiLCJpc3MiOiJodHRwczovL2Rldi00ODYxOTEub2t0YS5jb20vb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNjg0MjMzMTM3LCJleHAiOjE2ODQyMzY3MzcsImNpZCI6IjBvYWcyMnVyc0dWTlJjZlFZNHg2IiwidWlkIjoiMDB1YW9leWF1ck5CVWl4Qkk0eDciLCJzY3AiOlsib3BlbmlkIiwicHJvZmlsZSIsImVtYWlsIl0sImF1dGhfdGltZSI6MTY4NDIyNTk5MCwic3ViIjoia2VkYXIua3Vsa2FybmlAYmlsbGdvLmNvbSIsImZpcnN0TmFtZSI6IktlZGFyIiwiYWNjZXNzVG9GcmF1ZExvY2tEYXRhIjp0cnVlLCJmYW1pbHlOYW1lIjoiS3Vsa2FybmkiLCJncm91cHMiOlsiQURNSU5fUE9SVEFMX1VTRVJTIiwiRXZlcnlvbmUiLCJHTFVPTl9CSUxMR09fQURNSU4iLCJCaWxsR09fVVNFUlMiLCJHTFVPTl9GUkFVRF9MT0NLX0RBVEFfQUNDRVNTIl19.aC_WfGtDf5mxyjq0CnAdQsagEDFEQcA1RlZHo9y2d7yG5dsAo6YzwqKrySc2eN2l-SMikk3cGfGbfZMcuQz-PLZi5Wkm1JgeEGxnuutnfGyGzYMA7LT5oLCxTATxZsJqIAys5zaHdIMDhgqPmpLX6d0tscq1ntFfFIk30lK7EoKkbYogmz0T-IMxtUZ-BDaD9p8EqEC4SYUYd2jeX_b3youYp429Kd-vFuW7hqyDF7v04ZYoITlo6rolulFxV9M0lU-m_tOZ42mD8CKwRnvPFJaF-AlpTcZwokBZvKAE4IZI0iCFR0VwJiR0iQ-nQPZIaWuRJZcnjry8J_IQV2lmQw","expiresAt":1684236737,"tokenType":"Bearer","scopes":["openid","profile","email"],"authorizeUrl":"https://dev-486191.okta.com/oauth2/default/v1/authorize","userinfoUrl":"https://dev-486191.okta.com/oauth2/default/v1/userinfo"}}`;
var oktaOauthNonce = `WFqHsaVTaSqUejuyYApCpptCBZLZLzxFhtugTRMoWFAjHzLcYz8RiUyaVhlhDpBf`;
var oktaOauthState = `ewJFJ5d9C3nqQbE3xYBYYYlARCAEUgyuSpJc4njPIMO4vcoYoGf3PlOAqIrLVGrT`;

Cypress.Commands.add("loginByOkta", (username, password) => {
  Cypress.log({
    displayName: "OKTA LOGIN",
    message: [`🔐 Authenticating | ${username}`],
    autoEnd: false,
  });

  //SSO Login
  cy.pageLoadWait("login");
  cy.get("input[name=username]").type(username);
  cy.get('[type="submit"]').click();
  cy.wait(2000);

  cy.origin(
    "https://ssobillgo.okta.com/app/okta_org2org/exk3os61yz12x4RrD4x7/sso/saml",
    { args: { username, password } },
    ({ username, password }) => {
      cy.get('input[name="identifier"]').type(username);
      cy.get('input[name="credentials.passcode"]').type(password, {
        log: false,
      });
      cy.get('[type="submit"]').click();
      cy.wait(2000);
    }
  );
});

Cypress.Commands.add("loginByFake", (username, password) => {
  Cypress.log({
    displayName: "FAKE LOGIN",
    message: [`🔐 Authenticating | ${username}`],
    autoEnd: false,
  });

  //Fake Login
  cy.pageLoadWait("login");
  cy.get("input[name=username]").type(username);
  cy.get('[type="submit"]').click();
  cy.wait(2000);
  cy.get('input[name="password"]').type(password);
  cy.get('[type="submit"]').click();
});

Cypress.Commands.add("mockOktaLoggedState", () => {
  // Set cookies
  cy.setCookie("okta-oauth-nonce", oktaOauthNonce);
  cy.setCookie("okta-oauth-state", oktaOauthState);

  // To avoid token expiration, we create a new timestamp every time
  const oneDayFromNow = Date.now() + 1000 * 60 * 60 * 24;

  // Remember to replace all instances of
  // expiresAt:{someTimeStampHere},
  // with expiresAt:${oneDayFromNow}
  // use backticks `` for string interpolation

  localStorage.setItem("okta-token-storage", oktaTokenStorage);
  localStorage.setItem("okta-cache-storage", oktaCacheStorage);

  // In order to start intercepting requests, we need to start the server
  cy.intercept(`billpay.billgo-dev.com`).as("page");
  cy.visit(`http://billpay.billgo-dev.com`);
  cy.wait(`@page`);

  // Intercept requests for Okta user profile and return our own response.
  // We can just save a real response once and use it
  cy.intercept(
    "GET",
    "https://dev-486191.okta.com/oauth2/default/v1/userinfo",
    "fixture:okta-user-mock.json"
  ).as("okta");
});

// TBD
Cypress.Commands.add("mockAutoOktaLoggedState", () => {
  /*
    var allcookies  =  document.cookie;  
    // Get all the cookies pairs in an array  
    var cookiearray = allcookies.split(';');

    var readCookie = (key) => cookiearray.filter((text) => text.includes(key))?.[0]?.split("=")?.[1];

    let oktaOauthNonce = readCookie('okta-oauth-nonce');
    let oktaOauthState = readCookie('okta-oauth-state');
  */

  // Set cookies
  cy.setCookie("okta-oauth-nonce", oktaOauthNonce);
  cy.setCookie("okta-oauth-state", oktaOauthState);

  localStorage.setItem(
    "okta-token-storage",
    localStorage.getItem("okta-token-storage")
  );
  localStorage.setItem(
    "okta-cache-storage",
    localStorage.getItem("okta-cache-storage")
  );

  // In order to start intercepting requests, we need to start the server
  cy.intercept(`billpay.billgo-dev.com`).as("page");
  cy.visit(`http://billpay.billgo-dev.com`);
  cy.wait(`@page`);

  // Intercept requests for Okta user profile and return our own response.
  // We can just save a real response once and use it
  cy.intercept(
    "GET",
    "https://dev-382196.okta.com/oauth2/default/v1/userinfo",
    "fixture:okta-user-mock.json"
  ).as("okta");
});
