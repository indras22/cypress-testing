describe('custom commands usage',()=>{

    before(function(){
        
        cy.fixture('products.json').then((data)=>{
         this.data=data
     
        })
     
         })


    it('Adding products to cart using witout custom commands',()=>{


        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.get(':nth-child(2) > .nav-link').click();

        cy.get('.card.h-100').each( ($el, index, $list)=>{

           if($el.text().includes('Blackberry'))
           {
              cy.get('button.btn.btn-info').eq(index).click();

           }

        })


    })

    it('Adding products to cart using custom commands',()=>{


        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.get(':nth-child(2) > .nav-link').click();

       cy.selectproduct('Blackberry')
       cy.selectproduct('Nokia Edge')


    })

    it.only('adding product through fixtures',()=>{

             
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.fixture('products.json').then((data)=>{
            this.data=data
        
           })
        

        this.data.productname.forEach( (element)=>{
            cy.selectProduct(element)
        })
            
         
       
    })
    


})