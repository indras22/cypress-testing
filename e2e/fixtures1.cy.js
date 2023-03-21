

describe('fixures demo', function(){

    beforeEach(function(){

        cy.visit('https://www.saucedemo.com/')
       cy.fixture('sauce.json').then(credentials=>{
                 this.cred= credentials;

       })
    })

    it('fixtures-1',function(){

        cy.get('#user-name').type(this.cred.standardUsername)
        cy.get('#password').type(this.cred.systemPassword)
        cy.get('#login-button').clcik()




    })
})