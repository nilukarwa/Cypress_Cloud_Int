/// <reference types="cypress" />

describe('Page Object Framework Test Suite', ()=>{

    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
    it('Third Framework Test Case', function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice')

        //Locating Web Elements in Test
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)

        //Assertions
        cy.get('input[name="name"]:nth-child(1)').should('have.value',this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        cy.get('#inlineRadio3').should('be.disabled')
    })
})