export const oktaConfig = {
  clientId: "0oabrxw1difHhNlXv5d7",
  issuer: "https://dev-99759132.okta.com/oauth2/default",
  redirectUri: "https://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
