

describe('Differer View ports', () => {

    before(()=>{
        console.log('Running my tests')
    })
     
    beforeEach(()=>{

     cy.visit('https://www.google.com/')
     cy.get('#W0wltc > .QS5gu').click()
    })

    it('open in macbook-13', ()=> {
        cy.viewport('macbook-13')
        cy.screenshot()
        cy.wait(200)
    })

    it('open in macbook-15', ()=> {
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
    })

    it('open in iphone-x', ()=> {
        cy.viewport('iphone-x')
        cy.screenshot()
        cy.wait(200)
    })

    it('open in iphone-x', ()=> {
        cy.viewport(550, 750)
        cy.screenshot()
        cy.wait(200)
    })
})
