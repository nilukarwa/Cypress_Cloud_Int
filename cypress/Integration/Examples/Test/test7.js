/// <reference types="cypress" />
describe('My Test Suite', () => {
    it('My Seventh Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
    })
})