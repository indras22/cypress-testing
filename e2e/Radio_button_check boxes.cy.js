describe('Check UI Elements', () => {

   /* it('checking Radio-buttons', ()=> {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

     //Visibility of Radio buttons
        cy.get('input#male').should('be.visible')
        cy.get('input#female').should('be.visible')

        //selecting of radio buttons
        cy.get('input#male').check().should('be.checked')
        cy.get('input#female').should('not.be.checked')

        cy.get('input#female').check().should('be.checked')
        cy.get('input#male').should('not.be.checked')

    })*/

    it('checking Check Boxes', ()=> {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

     cy.get('#monday').should('be.visible')

     //selecting check boxes
     cy.get('#monday').check().should('be.checked')

     //unselecting check boxes
     cy.get('#monday').uncheck().should('not.be.checked')

     //Selecting all check boxes

     cy.get(".form-check-input[type='checkbox']").check().should('be.checked')
     cy.get(".form-check-input[type='checkbox']").uncheck().should('not.be.checked')

     cy.get(".form-check-input[type='checkbox']").first().check()

     cy.get(".form-check-input[type='checkbox']").last().check()




    })

})
