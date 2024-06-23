/// <reference types="cypress" />
it('test of Dropdown', () => {

    cy.visit('https://the-internet.herokuapp.com/');
    cy.get('ul').should('be.visible').as('list');
    cy.contains('Dropdown').should('be.visible').click()
    .get('select').should('be.visible').select(1).wait(3000)
    .get('select').should('be.visible').select(2);

  })   