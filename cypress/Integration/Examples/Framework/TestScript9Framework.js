/// <reference types="cypress" />
import CheckoutPage from "../../PageObjects/CheckoutPage"
import HomePage from "../../PageObjects/HomePage"
import ProductPage from "../../PageObjects/ProuctsPage"
import OrderPage from "../../PageObjects/OrderPage"

describe('Page Object Framework Test Suite', ()=>{

    before(function(){
        cy.fixture('example1').then(function(data){
            this.data=data
        })
    })
    it('Nineth Framework Test Case', function(){
        const homePage = new HomePage()
        const productPage=new ProductPage()
        const checkoutPage=new CheckoutPage()
        const orderPage= new OrderPage()

        cy.visit(Cypress.env('url')+'/angularpractice')

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

        var sum=0

        productPage.getCheckout().click()
        productPage.getProductsinCart().each(($e1,index,$list) => {
            const res = $e1.text()
            var amount = res.split(" ")
            amount = amount[1].trim()
            sum=sum+Number(amount)
        })

        productPage.getTotal().then(function(e1){
            const prc=e1.text()
            var total=prc.split(" ")
            total=total[1].trim()
            expect(Number(total)).to.equal(sum)
        })

        checkoutPage.getCheckoutbutton().click()

        orderPage.getListBox().type(this.data.country)
        
        orderPage.getAutoSuggestion().click()
        orderPage.getCheckBoxChecked().click()
        orderPage.getPurchaseButton().click()
        //orderPage.getAlert().should('have.text',"Success! Thank you! Your order will be delivered in next few weeks :-).        ")

        orderPage.getAlert().then(function(e1){
            const text=e1.text()
            expect(text.includes("Success")).to.be.true
        })
    })
})