class ProductPage{
    getProducts(){
        return cy.get('h4.card-title')
    }

    getAddtoCart(){
        return cy.get('button.btn.btn-info')
    }

    getCheckout(){
        return cy.contains('Checkout')
    }

    getProductsinCart(){
        return cy.get('tr td:nth-child(4) strong')
    }

    getTotal(){
        return cy.get('h3 strong')
    }
}

export default ProductPage