class OrderPage{
    getListBox(){
        return cy.get('#country')
    }

    getAutoSuggestion(){
        return cy.get('.suggestions > ul > li > a')
    }

    getCheckBoxChecked(){
        return cy.get('.checkbox > label')
    }

    getPurchaseButton(){
        return cy.get('input[type="submit"]')
    }

    getAlert(){
        return cy.get('.alert')
    }
}
export default OrderPage