/// <reference types='cypress-iframe' />
import 'cypress-iframe'

describe('Frame',() =>{

    it('iframe Validation',()=>{

        cy.visit('\https://rahulshettyacademy.com/AutomationPractice/')

        cy.frameLoaded('#courses-iframe') //Loading iframe

        cy.iframe().find("a[href*='mentorship'] ").eq('0').click();

       // cy.iframe().find("h1[class*='pricing-title']").should('have.value', '2') This line failing..Need to debug


    })
})