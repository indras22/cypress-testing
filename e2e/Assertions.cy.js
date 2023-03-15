

describe('Assertions', () => {
    it('implicit Assertions', ()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
        cy.title().should('contain','HRM')
        cy.get('.orangehrm-login-branding > img').should('be.visible')
        cy.get("[placeholder='Username']").type('Admin')
        cy.get("[placeholder='Username']").should('have.value','Admin')
        
    })

    it('Explicit Assertions', ()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("[placeholder='Username']").type('Admin')
        cy.get("[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()

        let expName="Duyen Nguyen";
        cy.get('.oxd-userdropdown-name').then( (x) => {
            let actName=x.text()
            expect(actName).to.equal(expName)
            //expect(actName).to.not.equal(expName)
        })
    })   
      

})  