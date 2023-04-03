describe('PUT Request',()=>{

    let randomtext= ""
    let testEmail=""

    it('POST User request',()=>{

        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgzijklmnopqrstuvwxyz"
        for(var i = 0; i < 10; i++)
           randomtext+=pattern.charAt(Math.floor(Math.random() * pattern.length))
           testEmail=randomtext + '@gmail.com'

            //Create USER-POST
            cy.request({

                method: 'POST',
                 url: 'https://gorest.co.in/public/v1/users',
                 headers: {
    
                    'authorization' : "Bearer 90b129ea7c5525a7d1dbf44bceb344300161d5e0deb91ad4fa2bb67eceb2eaab"
                 },
    
                 body: {
                                     
                    "name":"Test Automation cypress",
                    "gender":"Male",
                    "email": "indracypress2@gmail.com",
                    "status":"active"
                      
                        }
    
    
             }).then((res)=>{
               //cy.log(JSON.stringify(res))  Seeing Test failure with this command need to debug furthur
                expect(res.status).to.eq(201)
                expect(res.body.data).has.property('email','indracypress2@gmail.com')
                expect(res.body.data).has.property('gender','male')
                expect(res.body.data).has.property('name','Test Automation cypress')
                expect(res.body.data).has.property('status','active')
                
                 }).then((resp)=>{
                   const userId = resp.body.data.id 
                cy.log("user id is: " + userId)
                 //Update user-PUT
                cy.request({
                  method : 'PUT',
                  url : 'https://gorest.co.in/public/v1/users/'+userId,
                  headers : {
     
                     'Authorization' : "Bearer 90b129ea7c5525a7d1dbf44bceb344300161d5e0deb91ad4fa2bb67eceb2eaab"
                  },

                  body: {
                                     
                    "name":"Test Automation cypress updated",
                    "gender":"Male",
                    "email": "indracypressupdated3@gmail.com",
                    "status":"inactive"
                      
                        }


     
              }).then((res)=>{
                  expect(res.status).to.eq(200)
                 //expect(res.body.data).has.property('id',userId)
                 expect(res.body.data).has.property('email','indracypressupdated3@gmail.com')
                 expect(res.body.data).has.property('name','Test Automation cypress updated')
                 expect(res.body.data).has.property('status','inactive')

              })

             })  
                   

    })
})