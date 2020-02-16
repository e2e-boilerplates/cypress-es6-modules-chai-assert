describe("Sandbox", () => {
  before(() => {
    cy.visit("https://e2e-boilerplates.github.io/sandbox/");
  });

  it("should be on Sandbox", () => {
    cy.title(title => {
      expect(title).to.equal("Sandboxx");
    });

    cy.get("h1").then($header => {
      const text = $header.text();
      expect(text).to.equal("Sandbox");
    });
  });
});
