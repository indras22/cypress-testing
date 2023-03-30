describe("browser Navigation", ()=>{

    it("browser Navigation", ()=>{

        cy.visit('https://demo.opencart.com/')  //Home page
        cy.title().should('eq','Your Store')

        cy.get("li:nth-child(7) a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should('have.text',"Cameras");  //Camera

        cy.go('back') //go back to the home page

        cy.title().should('eq','Your Store')

        cy.go('forward') //Cameras page

        cy.get("div[id='content'] h2").should('have.text',"Cameras"); 

        cy.go(-1) //home
        cy.title().should('eq','Your Store')

        cy.go(1) //Cameras

        cy.get("div[id='content'] h2").should('have.text',"Cameras"); 



        cy.reload()
    })
}) 