describe('Handle tabs', ()=>{

    it('approach-1',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows') // Parent Window

        cy.get('.example >a').invoke('removeAttr', 'target').click(); //clicking on link removeAttr is Jquery function
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new') //child window

        cy.wait(5000);

        //operations

        cy.go('back') //go back to parent tag
    })


    it('approach-2',()=>{

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


        it.only('TC=3',()=>{

            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
            cy.get('#opentab').then((el)=>{
                      
                let url=el.prop('href');
                cy.visit(url)

            })
        })
  })







