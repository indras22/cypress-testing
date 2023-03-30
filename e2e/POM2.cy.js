
import Login from "../PageObjects/LoginPage2.js";
describe('POM',()=>{

    //General Approach
    it('Page Object model',()=>{
    
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       cy.get("[placeholder='Username']").type('Admin')
        cy.get("[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
        cy.get('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')

    })


      //Using POM
      it('Page Object model',()=>{
    
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        const ln= new Login();
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit();
        ln.VerifyLogin();
       

    })


    //Using POM with Fixtures
    it.only('Page Object model',()=>{
    
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture('orangeHRM.json').then( (data)=>{

            const ln= new Login();
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit();
            ln.VerifyLogin();
           


        })

               

    })

})
