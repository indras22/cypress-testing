/// <refernce types="Cypress" />
describe('POST Request',()=>{

    let randomtext= ""
    let testEmail=""

    it('POST User request',()=>{

           var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgzijklmnopqrstuvwxyz"
        for(var i = 0; i < 10; i++)
           randomtext+=pattern.charAt(Math.floor(Math.random() * pattern.length))
           testEmail=randomtext + '@gmail.com'

           cy.fixture('newuser.json').then((data)=>{
            //Create USER-POSR
            cy.request({

                method: 'POST',
                 url: 'https://gorest.co.in/public/v1/users',
                 headers: {
    
                    'authorization' : "Bearer 90b129ea7c5525a7d1dbf44bceb344300161d5e0deb91ad4fa2bb67eceb2eaab"
                 },
    
                 body: {
                                     
                        "name":data.name,
                        "gender":data.gender,
                        "email": testEmail,
                        "status":data.status
                      
                        }
 
    
             }).then((res)=>{
                expect(res.status).to.eq(201)
                expect(res.body.data).has.property('email',testEmail)
                expect(res.body.data).has.property('gender',data.gender)
                expect(res.body.data).has.property('name',data.name)
                expect(res.body.data).has.property('status',data.status)
                cy.log(JSON.stringify(res))
                })

                  
           })        

    })
})