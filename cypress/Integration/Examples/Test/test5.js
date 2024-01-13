/// <reference types="cypress" />
describe('My Test Suite', () => {
    it('My Fifth Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.origin("https://www.qaclickacademy.com",()=>{
            cy.get('#navbarSupportedContent a[href*="about"]').click()
        })
    })
})