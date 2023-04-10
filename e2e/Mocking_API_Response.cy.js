describe('mocking API response',()=>{


    it.only('Mocking API reponse through Cypress',()=>{

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')


        cy.intercept({
                
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'


        },

        {
            statusCode: 200,
            body:[
                {
                  "book_name": "RobotFramework",
                     "isbn": "144353",
                     "aisle": "982053"
                 }
             ]
        }).as('books')
        cy.get('button.btn.btn-primary').click()
        cy.wait('@books').then(({request,response})=>{
            
            cy.get('tr').should('have.length',response.body.length+1)
            
        })
        cy.get('p').should('have.text','Oops only 1 Book available')

        //Length of the response array= rows of the table
    })


    it('handling un authorised access using intercept',()=>{

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=Indra',
        (req)=>
         {
         req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
         req.continue((res)=>{

            expect(res.statusCode).to.equal(403)
         })

         }).as('dummyurl')
         cy.get('button.btn.btn-primary').click()
         cy.wait('@dummyurl')

       
        })
})