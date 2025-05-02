describe("List functionality", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit("/login");
    cy.get("input[name='username']").type("admin");
    cy.get("input[name='password']").type("admin");
    cy.get("button[type='submit']").click();
  });

  it("When access the list, it contains pokemons initially", () => {
    cy.wait(1000);
    cy.get("a").should("have.length.greaterThan", 10);
  });

  it("Must filter pokemon by name", () => {
    cy.get("input[placeholder='pokemon name or id']").type("metagross");
    cy.contains("metagross").should("exist");
  });
});
