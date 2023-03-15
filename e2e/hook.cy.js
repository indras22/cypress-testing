

describe('Hook Demo',function(){

    before(function(){

        cy.log('Before')
    })

    beforeEach(function(){

        cy.log('Before Each')
    })


    it('TC#1',function(){
        cy.log('TC#1')

    })

    it('TC#2',function(){

        cy.log('TC#2')
    })

    it('TC#3',function(){
        cy.log('TC#3')
        
    })

   afterEach(function(){

        cy.log('After Each')
    })

    after(function(){

        cy.log('After')
    })

})