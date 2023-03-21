

describe("Dealing alias", function(){

    it('alias usage', function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
         cy.get('.search-keyword').type('ca')
         cy.wait(2000)
         cy.get('.product').should('have.length',5)
    
         cy.get('.product:visible').should('have.length',4)
         //parent child chaning
         cy.get('.products').as('productLocator') //Alias creation

         cy.get('@productLocator').find('.product').should('have.length',4)

         cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click().then(()=>{ //Resolving promise

            console.log('Indra');   
         })

         cy.get('@productLocator').find('.product').each(($el, index, $list)=>{

         const veg=$el.find('h4.product-name').text()
         if(veg.includes('Cashews'))
         {
           $el.find('button').click();
         }
         //Assert if logo text is corrrectly displayed
         cy.get('.brand').should('have.text','GREENKART')
         
        })

   })
})