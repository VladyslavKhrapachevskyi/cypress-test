/// <reference types="cypress" />
it('test of Checkbox', () => {
    
    cy.visit('https://the-internet.herokuapp.com/');
    cy.get('ul').should('be.visible').as('list');
    cy.contains('Checkboxes').should('be.visible').click();
    cy.get('form').should('be.visible');
    cy.get('input[type="checkbox"]').first().check().wait(2000).first().uncheck();
    cy.get('input[type="checkbox"]').last().uncheck().wait(2000).last().check()


  })  