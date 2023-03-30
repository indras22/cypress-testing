

describe('Validating attributes',function(){

    before(function(){

   cy.fixture('users.json').then((data)=>{
    this.data=data

   })

    })


    it('attribute validation', function(){

    cy.visit('https://rahulshettyacademy.com/angularpractice/')

    cy.get("input[name='name']:nth-child(2)").type(this.data.name)
    cy.get('select').select(this.data.gender)
    cy.get("input[name='name']:nth-child(1)").should('have.value',this.data.name)
    cy.get("input[name='name']:nth-child(2)").should('have.attr','minlength','2')
    //cy.get("label[for='inlineRadio3']").should('be.disabled')

    cy.get(':nth-child(2) > .nav-link').click();

     this.data.productName.forEach((element)=>{

        cy.selectproduct(element)
     });
    
                  
    })

})