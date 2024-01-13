/// <reference types="cypress" />

describe('My Test Suite', () => {
    it('My First Test Case', () => {
        //expect(true).to.equal(true)ss
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function() {
            console.log('SF')
        })

        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
            const textVeg=$e1.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                cy.wrap($e1).find('button').click()
            }
        })

        cy.get('.brand').should('have.text','GREENKART')
        cy.get('.brand').then(function(logoElement){
            cy.log(logoElement.text())
        })
    })
});