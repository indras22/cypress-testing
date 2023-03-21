describe("Dealing invisible elements errors", function(){

    it('then function', function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.brand.greenLogo').then((logo)=>{
          cy.log(logo.text())

        })
       

   })
})