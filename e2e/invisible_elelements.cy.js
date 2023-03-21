

describe("Dealing invisible elements errors", function(){

    it('invisble elements', function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
         cy.get('.search-keyword').type('ca')
         cy.wait(2000)
         cy.get('.product').should('have.length',5)
    
         cy.get('.product:visible').should('have.length',4)
         //parent child chaning

         cy.get('.products').find('.product').should('have.length',4)

         cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

         cy.get('.products').find('.product').each(($el, index, $list)=>{

         const veg=$el.find('h4.product-name').text()
         if(veg.includes('Cashews'))
         {
           $el.find('button').click()
         }
         
        })

   })
})