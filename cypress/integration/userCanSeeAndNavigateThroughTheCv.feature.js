describe("User can navigate through the app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

describe("to Cv and it", () => {
  beforeEach(() => {
    cy.get("#cv-tab").click();
  });

  it("displays cv header", () => {
  cy.get("#cv-header").should("contain", "Cv");
  });

  it("displays component name in url", () => {
    cy.url().should("contain","cv");
  });

  it("does not display My Projects header ", () => {
    cy.get("#projects-header").should("not.exist");
  });

  it("does not display Hello World ", () => {
    cy.get("#hello").should("not.exist");
  }); 
});

});