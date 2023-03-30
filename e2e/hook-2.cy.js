describe('hook concepts',()=>{

    before( ()=>{

        cy.log(" *****  Launch APP *****")
    })

    after( ()=>{

        cy.log(" *****  Close APP *****")
    })

    beforeEach( ()=>{

        cy.log(" *****  Login *****")
    })

    afterEach( ()=>{

        cy.log(" *****  Logout *****")
    })


    it('search',()=>{

   cy.log(" *****  Searching  *****")
    })

    it('Advance search',()=>{

        cy.log(" *****   Advance Searching  *****")
    })

    it('listing products',()=>{

        cy.log(" *****  Listing prodcuts  *****")
    })

    

})