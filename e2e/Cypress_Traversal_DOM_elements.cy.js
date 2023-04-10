describe('Traversal DOM Elements ',()=>{

    beforeEach(()=>{

        cy.visit('https://example.cypress.io/commands/traversal');
    })

    it('childern DOM Element',()=>{
        cy.get('.traversal-breadcrumb')
        .children('.active')
        .should('contain', 'Data')
 


    })

    it('closest DOM Element',()=>{

     cy.get('.traversal-badge')
    .closest('ul')
   .should('have.class', 'list-group')

    })

    it('eq DOM Element',()=>{

        cy.get('.traversal-list>li')
     .eq(1).should('contain', 'siamese')
      
       })

       it('filter DOM Element',()=>{

        cy.get('.traversal-nav>li')
       .filter('.active').should('contain', 'About')
      
       })

       it('find DOM Element',()=>{

        cy.get('.traversal-pagination').find('li').find('a').should('have.length', 7)

      
       })

       it('first DOM Element',()=>{

        cy.get('.traversal-table td')
        .first().should('contain', '1')
      
       })

       it('last DOM Element',()=>{

        cy.get('.traversal-buttons .btn')
        .last().should('contain', 'Submit')
      
       })

       it('next DOM Element',()=>{

        cy.get('.traversal-ul')
      .contains('apples').next().should('contain', 'oranges')
      
       })

       it('nextall DOM Element',()=>{

        cy.get('.traversal-next-all')
       .contains('oranges')
        .nextAll().should('have.length', 3)
        })

        it('nextuntill DOM Element',()=>{

            cy.get('#veggies')
           .nextUntil('#nuts').should('have.length', 3)
            })


            it('not DOM Element',()=>{

                cy.get('.traversal-disabled .btn')
                .not('[disabled]').should('not.contain', 'Disabled')
              })

              it('parent DOM Element',()=>{

                cy.get('.traversal-mark')
               .parent().should('contain', 'Morbi leo risus')
              })

              it('parents DOM Element',()=>{

                cy.get('.traversal-cite')
               .parents().should('match', 'blockquote')
              })

              it('parentsUntil',()=>{

                cy.get('.clothes-nav')
                .find('.active')
                .parentsUntil('.clothes-nav')
                .should('have.length', 2)
              })

              it('Prev DOM Element',()=>{

                cy.get('.birds').find('.active')
               .prev().should('contain', 'Lorikeets')
              })

              it('PrevAll DOM Element',()=>{

                cy.get('.fruits-list').find('.third')
                .prevAll().should('have.length', 2)
              })

              it('PrevUntill DOM Element',()=>{

                cy.get('.foods-list').find('#nuts')
              .prevUntil('#veggies').should('have.length', 3)
              })

              it('siblings DOM Element',()=>{

                cy.get('.traversal-pills .active')
                .siblings().should('have.length', 2)
              })




})