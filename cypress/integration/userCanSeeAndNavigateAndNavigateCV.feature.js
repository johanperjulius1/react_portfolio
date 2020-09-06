describe ('User can visit the website', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
   });

    describe('To my CV', () => {
      it('user can visit the CV tab', () => {
        cy.get('#cv-tab').click();
          });
      });





});
