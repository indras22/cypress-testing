describe('intercept with Cypress',()=>{

    it('test API with Intercept',()=>{

        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept({

            path: '/posts'
        }).as('posts')

        cy.get("tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)").click()
        cy.wait('@posts').then((inter)=>{

            cy.log(json.stringify(inter))
            console.log(JSON.stringify(inter))
            expect(inter.response.body).to.have.length(100)
        })
    })

    it.only('mocking with intercept',()=>{

        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET','https://jsonplaceholder.typicode.com/posts', {totalpost:2, name:'indra'}).as('post')
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@post', {force:true})
        
        


    })


    it('mocking with intercept',()=>{

        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET','/posts', {fixture: 'newuser.json'}).as('posts')
        cy.get("tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)").click()
        cy.wait('@posts')
        


    })

})