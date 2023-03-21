

describe('element concepts', ()=>{

    it('check diifferent elements with cypress',()=>{
    cy.visit('https://www.freshworks.com/')
    cy.contains('Platform').click({force: true})
    //cy.url().should('include', 'Platform')
    cy.get('.sc-4555ca6a-0.hZEuqN').should('be.visible')
    .and('contain','Goodbye software bloat')

    cy.get('.sc-6293d692-0 li').should('length',72)
    cy.get('.sc-6293d692-0 li').find("a[href*='company']").should('have.length',8)

    })


    it.only('within method with amazon',()=>{

        cy.visit('https://www.amazon.de/')
        cy.get('body').click({force: true})
        cy.get('.nav-search-field ').within(()=>{

            cy.get('#twotabsearchtextbox').type('Apple Mac Book')
            cy.get('#twotabsearchtextbox').type('{enter}')
            
        })
    })

})