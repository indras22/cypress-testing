describe('handling tables', ()=>{

    beforeEach('Login',()=>{

       cy.visit('https://demo.opencart.com/admin/index.php');
       cy.get('#input-username').type("demo")
       cy.get('#input-password').type("demo")
       cy.get("button[type='submit']").click()
       cy.get('.btn-close').click()
       //navigating to customers menu

       cy.get("#menu-customer>a").click(); //Customers main Menu
       cy.get("#menu-customer>ul>li:first-child").click(); //Customers Sub Menu

     
    })

    it('check no.of rows and columns', ()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7')


    })


    it('check data from a specific Row and Column', ()=>{

       cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
       .contains("princytrainings4@gmail.com")

    })


   
    it('Read all the Rows and Columns data in the First page', ()=>{

      cy.get("table[class='table table-bordered table-hover']>tbody>tr")
      .each( ($row, index, $rows)=>{
        
        cy.wrap($row).within( ()=>{
         
            cy.get('td').each( ($col, index, $cols)=>{

                cy.log($col.text());
            })

        })

      })
 
     })

     it.only('Pagination', ()=>{

        //Find total number of pages

       /* let totalPages;
      cy.get("[class='col-sm-6 text-end']").then( (e)=>{

       let mytext=e.text(); //Showing 1 to 10 of 11449 (1145 Pages)
           totalPages=mytext.substring(mytext.indexOf("(")+1, mytext.indexOf("Pages")-1);
           cy.log("Total Number of pages in a Table====>"+ totalPages);
      })*/

      let totalPages=5;

      for(let p=1;p<=totalPages;p++)
      {
            if(totalPages>1)

            {
                 cy.log("Active Page is======>"+p);
                 cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                 cy.wait(3000);

                 cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                 .each(($row, index, $rows)=>{
                  
                    cy.wrap($row).within( ()=>{

                        cy.get('td:nth-child(3)').then( (e)=>{

                           cy.log(e.text()) ;    //Email               

                        })
                    })

                 })


            }

      }
 
     })



})