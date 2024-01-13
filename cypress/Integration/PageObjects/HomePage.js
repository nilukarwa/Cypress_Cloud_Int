class HomePage{
    getName(){
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getGender(){
        return cy.get('select')
    }

    getTwoWayDatabinding(){
        return cy.get('input[name="name"]:nth-child(1)')
    }

    getEntreprenuer(){
        return cy.get('#inlineRadio3')
    }

    getShoptab(){
        return cy.get(':nth-child(2) > .nav-link')
    }
}

export default HomePage