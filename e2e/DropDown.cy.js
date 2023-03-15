describe('handle dropdown', ()=>{


    it.skip('dropdown with select',()=>{
    
    cy.visit('https://www.zoho.com/commerce/free-demo.html')

    cy.get('#zcf_address_country').select('Germany').should('have.value','Germany')


    })

    it.skip('dropdown without select',()=>{
    
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        
        cy.get('#select2-billing_country-container').click()

        cy.get('.select2-search__field').type('Germany').type('{enter}')

        cy.get('#select2-billing_country-container').should('have.text','Germany')
    
    
        })

        it.skip('auto suggest Dropdown',()=>{
    
            cy.visit('https://www.wikipedia.org/')
            
            cy.get('#searchInput').type('Delhi')
            cy.get('.suggestion-title').contains('Delhi University').click()
    
                   
        
            })

            it('dynamic Dropdown',()=>{
    
                cy.visit('https://www.google.com/')
                cy.get('#W0wltc > .QS5gu').click()
                
                cy.get('.gLFyf').type('cypress automation')
                cy.wait(3000)
                cy.get('div.wM6W7d>span').should('have.length',12)

                cy.get('div.wM6W7d>span').each(($el, index, $list)=> {

                    if($el.text()=='cypress automation tutorial')
                    {
                        cy.wrap($el).click()
                    }
                
                })
                
                cy.get('input.gLFyf').should('have.value','cypress automation tutorial')
                           
            
             })
})