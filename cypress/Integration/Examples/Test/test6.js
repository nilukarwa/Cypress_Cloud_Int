/// <reference types="cypress" />
describe('My Test Suite', () => {
    it('My Sixth Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('tr td:nth-child(2)').each(($e1,index,$list) => {
            const courseName = $e1.text()
            if(courseName.includes("Python")){
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const cost=price.text()
                    expect(cost).to.equal('25')
                })
            }
        })
    })
})