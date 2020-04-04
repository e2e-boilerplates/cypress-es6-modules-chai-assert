describe("Sandbox", () => {
  before(() => {
    cy.visit("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", () => {
    cy.title().then(($title) => {
      assert.strictEqual($title, "Sandbox");
    });

    cy.get("h1").then(($header) => {
      const text = $header.text();
      assert.strictEqual(text, "Sandbox");
    });
  });
});
