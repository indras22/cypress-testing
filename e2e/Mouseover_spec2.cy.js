describe('mouseover',()=>{

    it('Mouseover operation',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Approach:1
       // cy.get('.mouse-hover-content').invoke('show')

       //Approach-2
       
       cy.get('#mousehover').trigger('mouseover').click();
        cy.contains('Top').click({force:true});
        cy.url().should('include', 'top')
    })
})