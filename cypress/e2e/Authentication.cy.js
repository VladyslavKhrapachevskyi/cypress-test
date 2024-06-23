/// <reference types="cypress" />
it('test of Authentication', () => {

    cy.visit('https://the-internet.herokuapp.com/');
    cy.get('ul').should('be.visible').as('list');
    cy.contains('Form Authentication').should('be.visible').click();
    cy.get('html[class="no-js"]').should('be.visible');
    cy.get('h4[class="subheader"]').should('be.visible');
    cy.get('input[type="text"]').type('tomsmith').wait(2000)
    .get('input[type="password"]').type('SuperSecretPassword!').wait(2000)
    .get('button[class="radius"]').click().wait(2000)
    cy.contains('Logout').click()
  })  