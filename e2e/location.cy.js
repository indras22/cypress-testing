

describe('location demo', ()=>{

        
    it(' Title verification',()=>{

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.title().should('eq','GreenKart - veg and fruits kart')
       
    })

    it('url Verification',()=>{
        
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.url().should('eq','https://rahulshettyacademy.com/seleniumPractise/#/')
    })
    
    it('protocol', ()=>{
     
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/') 
        cy.location('protocol').should('contains','https')
    })

    it('hostname', ()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.location('hostname').should('eq','rahulshettyacademy.com')
    })

    it('pathname',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
        cy.location('pathname').should('eq','/web/index.php/dashboard/index')
    })
})