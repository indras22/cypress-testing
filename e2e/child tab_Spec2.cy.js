describe('child tab', function(){

    it('Handling Child Tabs',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
         cy.get('#opentab').invoke('removeAttr','target').click();


         cy.url().should('include',"https://www.rahulshettyacademy.com/")

         cy.wait(3000);

         cy.go('back')
    })
})