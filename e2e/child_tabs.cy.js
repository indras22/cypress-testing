describe('Handle tabs', ()=>{

    it('approach-1',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows') // Parent Window

        cy.get('.example >a').invoke('removeAttr', 'target').click(); //clicking on link
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new') //child window

        cy.wait(5000);

        //operations

        cy.go('back') //go back to parent tag
    })


    it.only('approach-2',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows') // Parent Window

        cy.get('.example >a').then((e)=>{

                let url=e.prop('href');
                cy.visit(url)

        })

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new') //child window

        cy.wait(5000);

        //operations

        cy.go('back') //go back to parent tag
    })



})