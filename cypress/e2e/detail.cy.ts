describe("Detail", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit("/login");
    cy.get("input[name='username']").type("admin");
    cy.get("input[name='password']").type("admin");
    cy.get("button[type='submit']").click();
  });

  it("When access the list, it contains pokemons data", () => {
    cy.get("input[placeholder='pokemon name or id']").type("metagross");
    cy.wait(1000);
    cy.get("a").first().click();
    cy.url().should("include", "/pokemon/metagross");
    cy.contains("metagross").should("exist");
    cy.contains("#376").should("exist");
    cy.contains("550 kg").should("exist");
    cy.contains("confusion").should("exist");
  });
});
