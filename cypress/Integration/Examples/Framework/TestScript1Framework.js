/// <reference types="cypress" />

describe('Page Object Framework Test Suite', ()=>{
    it('First Framework Test Case', ()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice')

        //Locating Web Elements in Test
        cy.get('input[name="name"]:nth-child(2)').type('Bob')
        cy.get('select').select('Female')
    })
})