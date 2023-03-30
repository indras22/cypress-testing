import HomePage from '../PageObjects/HomePage'
 //import Product from '../PageObjects/ProductPage'

describe('Validating attributes using POM',function(){

    before(function(){

   cy.fixture('users.json').then((data)=>{
    this.data=data

   })

    })


    it('attribute validation using POM', function(){
        
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    
    const homePage=new HomePage()
    //const Product=new Product()

    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    homePage.getTwoWayDataBinding().should('have.value',this.data.name)
    homePage.getEditBox().should('have.attr','minlength','2')
    // homePage.getEnterprener().should('be.disabled')
    Cypress.config('pageLoadTimeout',8000)
        homePage. getShoptab().click();

     this.data.productName.forEach((element)=>{

        cy.selectproduct(element)
     });
     cy.get('.nav-link.btn.btn-primary').click()
     var sum=0
     cy.get('tr>td:nth-child(4)>strong').each( ($el, index, $list)=>{
             const amount=$el.text()
             var res=amount.split(" ")
             res=res[1].trim()
             sum=Number(sum)+Number(res)
             
     }).then(()=>{

      cy.log(sum)
     })
     cy.get('h3>strong').then((element)=>{
      const amount=element.text()
      var res=amount.split(" ")
      var total=res[1].trim()
         expect(Number(total)).to.equal(sum)
     })
     cy.contains('Checkout').click()
     cy.get('#country').type('Germany').type('{enter}')
     //cy.get('.suggestions > ul > li > a').click({force:true})
     
     cy.get("label[for='checkbox2']").click()
     cy.get("input[type='submit']").click()
     //cy.get('.alert').should('includes','Success! Thank you! Your order will be delivered in next few weeks :-).')

     cy.get('.alert').then((element)=>{

        const actualtext=element.text()
        expect(actualtext.includes("Success")).to.be.true
     })
    
                  
    })

})