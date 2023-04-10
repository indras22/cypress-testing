describe('GET API Test for Rest', ()=>{


    it('GET API Test',()=>{
        
      
        cy.request('GET','https://reqres.in/api/users?page=2').then((res)=>{

         expect(res.status).equal(200)
         expect(res.body.data[0]).has.property('first_name','Michael')
         expect(res.body.data[1]).has.property('email','lindsay.ferguson@reqres.in')  
         expect(res.body.data).has.length(6) 
         //expect(res.body.users[0]).not.has.property('price')


      })

    })
})