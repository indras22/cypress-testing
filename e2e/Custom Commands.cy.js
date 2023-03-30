describe('Custom commands demo',()=>{


    it('custom commands-Handling links',()=>{
     
        cy.visit('https://demo.nopcommerce.com/')

        //Direct -Without using custom Command
       // cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()

       //Using custom Command
        
       cy.clickLink("Apple MacBook Pro 13-inch")
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch')

    })


    it.only('login command',()=>{

        cy.visit('https://demo.nopcommerce.com/')

        //Login
        cy.clickLink("Log in") //Custom Command
        cy.wait(3000)
        cy.LoginApp("reddyindrasena080@gmail.com","sai22nath")
        cy.get('.ico-account').should('have.text','My account');

     })
})