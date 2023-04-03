describe('API testing with alias',()=>{
 
    beforeEach(()=>{

        cy.request('https://reqres.in/api/users?page=2').as('users')
    })

    it('Validate the Header info',()=>{

        cy.get('@users')
        .its('headers')
        .its('content-type')
        .should('include','application/json; charset=utf-8')
    })
   
    it('Validate the Status code',()=>{

        cy.get('@users')
        .its('status')
        .should('eq',200)
    })


    it('Validate the Total pages in Body',()=>{

        cy.get('@users')
        .its('body')
        .should('contain',{"total_pages": 2})
    })


    it('Verify user info in JSON ARRAY',()=>{

        cy.get('@users')
        .its('body').then((res)=>{
          expect(res.data[0]).has.property('first_name','Michael')

        })
        
    })


})