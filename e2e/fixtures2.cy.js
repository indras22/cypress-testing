describe('Fixtures',function(){

    before(function(){

   cy.fixture('users.json').then((data)=>{
    this.data=data

   })

    })


    it('fixures validation', function(){

    cy.visit('https://rahulshettyacademy.com/angularpractice/')

    cy.get("input[name='name']:nth-child(2)").type(this.data.name)
    cy.get('select').select(this.data.gender)

        
    })

})