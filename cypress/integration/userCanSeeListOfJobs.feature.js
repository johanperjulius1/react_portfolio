describe("User can see list of jobs", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#cv-tab").click();
  });

  it("displays first experience", () => {
    cy.get("#job-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".ui.header").should("contain", "My First Job");
      cy.get(".description").should(
        "contain", "first job.");
    });
  });

  it("displays second job", () => {
    cy.get("#job-2").within(() => {
      cy.get(".image").should("exist");
      cy.get(".ui.header").should("contain", "Equity Research");
      cy.get(".description").should(
        "contain", "equity");
    });
  });

  it("displays third project", () => {
    cy.get("#job-3").within(() => {
      cy.get(".image").should("exist");
      cy.get(".ui.header").should("contain", "Sales Analyst Team Leader");
      cy.get(".description").should(
        "contain", "sales"
      );
    });
  });
});
