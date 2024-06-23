/// <reference types="cypress" />

it('working with slider component', () => {
    cy.visit('https://the-internet.herokuapp.com/');
    cy.get('ul').should('be.visible').as('list');
    cy.contains('Horizontal Slider').click();
    cy.get('h3').should('have.text', 'Horizontal Slider');
    cy.get('input[type=range]').as('range').invoke('val', 2.5).trigger('change')
    cy.get('#range').should('have.text', '2.5');
    
    })