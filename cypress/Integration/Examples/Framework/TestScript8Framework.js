/// <reference types="cypress" />
import CheckoutPage from "../../PageObjects/CheckoutPage,js"
import HomePage from "../../PageObjects/HomePage"
import ProductPage from "../../PageObjects/ProuctsPage"

describe('Page Object Framework Test Suite', ()=>{

    before(function(){
        cy.fixture('example1').then(function(data){
            this.data=data
        })
    })
    it('Eighth Framework Test Case', function(){
        const homePage = new HomePage()
        const productPage=new ProductPage()
        const checkoutPage=new CheckoutPage()
        cy.visit('https://rahulshettyacademy.com/angularpractice')

        //Locating Web Elements in Test
        homePage.getName().type(this.data.name)
        homePage.getGender().select(this.data.gender)

        //Assertions
        homePage.getTwoWayDatabinding().should('have.value',this.data.name)
        homePage.getName().should('have.attr','minlength','2')
        homePage.getEntreprenuer().should('be.disabled')
        

        //Cypress Customize Commands
        homePage.getShoptab().click()
        this.data.productName.forEach(e1 => {
            cy.selectProduct(e1)    
        });

        productPage.getCheckout().click()
        checkoutPage.getCheckoutbutton().click()
    })
})