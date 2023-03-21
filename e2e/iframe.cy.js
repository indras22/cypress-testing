
import 'cypress-iframe'

describe('handling frame',()=>{

    it('Approach-1',()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')

        const iframe=cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.clear().type("INDRA  {ctrl+a}");
        cy.get("[aria-label='Bold']").click();
    })

    
    it('Approach:2-Using Custom Commands',()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')
        
        cy.getIframe('#mce_0_ifr').clear().type("INDRA  {ctrl+a}");
        
        cy.get("[aria-label='Bold']").click();
    })

      
    it.only('Approach:3-Using Iframe Plugin',()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')
        
        cy.frameLoaded('#mce_0_ifr'); //Load the frame
        cy.iframe('#mce_0_ifr').clear().type("DHAANVI  {ctrl+a}");
        cy.get("[aria-label='Bold']").click();
    })


})