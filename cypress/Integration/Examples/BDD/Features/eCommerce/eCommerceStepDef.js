import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CheckoutPage from "../../../../PageObjects/CheckoutPage"
import HomePage from "../../../../PageObjects/HomePage"
import ProductPage from "../../../../PageObjects/ProuctsPage"
import OrderPage from "../../../../PageObjects/OrderPage"

const homePage = new HomePage()
const productPage=new ProductPage()
const checkoutPage=new CheckoutPage()
const orderPage= new OrderPage()

Given('I open eCommerce Page', ()=>{
    cy.visit(Cypress.env('url')+'/angularpractice')
})

When('I add items to cart', function(){
    homePage.getShoptab().click()
        this.data.productName.forEach(e1 => {
            cy.selectProduct(e1)    
        });
        var sum=0
        productPage.getCheckout().click()
})

When('Validate the total prices', ()=>{
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
})

Then('Select the country submit and verify Success message', function(){
    checkoutPage.getCheckoutbutton().click()
    orderPage.getListBox().type(this.data.country)
        
    orderPage.getAutoSuggestion().click()
    orderPage.getCheckBoxChecked().click()
    orderPage.getPurchaseButton().click()

    orderPage.getAlert().then(function(e1){
        const text=e1.text()
        expect(text.includes("Success")).to.be.true
    })
})

//When I fill the forms details
When('I fill the forms details',function(){
    //Locating Web Elements in Test
    homePage.getName().type(this.data.name)
    homePage.getGender().select(this.data.gender)
})

//Then Validate the forms behaviour
Then('Validate the forms behaviour',function(){
    homePage.getTwoWayDatabinding().should('have.value',this.data.name)
    homePage.getName().should('have.attr','minlength','2')
    homePage.getEntreprenuer().should('be.disabled')
})

//And Select the shop Page
Then('Select the shop Page',()=>{
    homePage.getShoptab().click()
})