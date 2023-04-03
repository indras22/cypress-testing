describe('DELETE Request',()=>{

   
    it('POST User request',()=>{

            //Create USER-POST
            cy.request({

                method: 'POST',
                 url: 'https://gorest.co.in/public/v1/users',
                 headers: {
    
                    'authorization' : "Bearer 90b129ea7c5525a7d1dbf44bceb344300161d5e0deb91ad4fa2bb67eceb2eaab"
                 },
    
                 body: {
                                     
                    "name":"Test Automation cypress user",
                    "gender":"Male",
                    "email": "indracypress6@gmail.com",
                    "status":"active"
                      
                        }
    
    
             }).then((res)=>{
               //cy.log(JSON.stringify(res))  Seeing Test failure with this command need to debug furthur
                expect(res.status).to.eq(201)
                expect(res.body.data).has.property('email','indracypress6@gmail.com')
                expect(res.body.data).has.property('gender','male')
                expect(res.body.data).has.property('name','Test Automation cypress user')
                expect(res.body.data).has.property('status','active')
                
                 }).then((resp)=>{
                   const userId = resp.body.data.id 
                cy.log("user id is: " + userId)
                 //Delete user-Delete
                cy.request({
                  method : 'DELETE',
                  url : 'https://gorest.co.in/public/v1/users/'+userId,
                  headers : {
     
                     'Authorization' : "Bearer 90b129ea7c5525a7d1dbf44bceb344300161d5e0deb91ad4fa2bb67eceb2eaab"
                  }

                       
              }).then((res)=>{
                  expect(res.status).to.eq(204)
                 //expect(res.body.data).has.property('id',userId)
                // expect(res.body.data).has.property('email','indracypressupdated3@gmail.com')
                 //expect(res.body.data).has.property('name','Test Automation cypress updated')
                 //expect(res.body.data).has.property('status','inactive')

              })

             })  
                   

    })
})