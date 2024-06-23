/// <reference types="cypress" />
it('test of Hovers', () => {
    cy.visit('https://the-internet.herokuapp.com/');
     cy.get('ul').should('be.visible').as('list');
     cy.contains('Hovers').should('be.visible').click();
     cy.get('img[src="/img/avatar-blank.jpg"]').first().trigger('mouseover').wait(2000)
     cy.get('a[href="/users/1"]').invoke('show').click({ force: true })
 
 
 
 
   })  