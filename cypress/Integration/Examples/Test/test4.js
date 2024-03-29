/// <reference types="cypress" />
describe('My Test Suite', () => {
    it('My Fourth Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Alert
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})