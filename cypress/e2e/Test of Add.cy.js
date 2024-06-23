/// <reference types="cypress" />

it('test of Add', () => {
    
    cy.visit('https://the-internet.herokuapp.com/');
    cy.get('ul').should('be.visible').as('list');
    cy.contains('Add/Remove Elements').should('be.visible').click();
    cy.contains('button','Add Element').should('be.visible').click();
    cy.contains('button','Delete').should('be.visible').click();
    cy.contains('button','Add Element').click().click().click().wait(2000);
    cy.contains('button','Delete').click().wait(2000);
    cy.contains('button','Delete').click().wait(2000);
    cy.contains('button','Delete').click();
  })






 




 







