describe("Login functionality", () => {
  it("Redirect login if not logged in", () => {
    cy.clearCookies();
    cy.visit("/");
    cy.url().should("include", "/login");
  });

  it("Displays error message if credentials are wrong", () => {
    cy.visit("/login");
    cy.get("input[name='username']").type("Impostor");
    cy.get("input[name='password']").type("hacking");
    cy.get("button[type='submit']").click();
    cy.contains("Invalid user or password").should("exist");
  });

  it("Valid credentials and redirects to /", () => {
    cy.visit("/login");
    cy.get("input[name='username']").type("admin");
    cy.get("input[name='password']").type("admin");
    cy.get("button[type='submit']").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
    cy.contains("Log out").should("exist");
  });

  it("When click on the logout button go to login", () => {
    cy.visit("/");
    cy.get("input[name='username']").type("admin");
    cy.get("input[name='password']").type("admin");
    cy.get("button[type='submit']").click();
    cy.get("button").contains("Log out").click();
    cy.url().should("include", "/login");
    cy.contains("Submit").should("exist");
  });
});
