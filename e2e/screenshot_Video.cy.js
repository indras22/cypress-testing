describe('my suite',()=>{


    it('Capture screen shots',()=>{

        cy.visit('https://demo.opencart.com/')
        /*cy.screenshot("homepage")
        cy.wait(5000)
        cy.get("img[title='Your Store']").screenshot('logo'); */

        //Automatically capture Screenshots & Videos on Failure only excute through CLU prompt
        cy.get("li:nth-child(7) a:nth-child(1)").click() //Cameras
        cy.get("div[id='content'] h2").should('have.text',"Tablets")
    })

})
