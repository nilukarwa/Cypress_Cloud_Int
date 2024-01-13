/// <reference types="cypress" />

describe('Page Object Framework Test Suite', ()=>{

    before(function(){
        cy.fixture('example1').then(function(data){
            this.data=data
        })
    })
    it('Six Framework Test Case', function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice')

        //Locating Web Elements in Test
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)

        //Assertions
        cy.get('input[name="name"]:nth-child(1)').should('have.value',this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        cy.get('#inlineRadio3').should('be.disabled')

        //Cypress Customize Commands
        cy.get(':nth-child(2) > .nav-link').click()
        this.data.productName.forEach(e1 => {
            cy.selectProduct(e1)    
        });
    })
})