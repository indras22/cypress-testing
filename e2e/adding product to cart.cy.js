describe("adding product to cart", function(){

it('Product adding to cart and checkout', function(){

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
     cy.get('.search-keyword').type('ca')
     cy.wait(2000)
    

     //parent child chaning
     cy.get('.products').as('productLocator') //Alias creation

     cy.get('@productLocator').find('.product').each(($el, index, $list)=>{

     const veg=$el.find('h4.product-name').text()
     if(veg.includes('Cashews'))
     {
       $el.find('button').click();
     }
    
    })

    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.get(':nth-child(14)').click()


  })
})