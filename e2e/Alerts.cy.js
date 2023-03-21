

describe('Alerts', ()=>{

    //1.JAVA Script Alert:It will have some text and an 'ok' Button

    it('Java alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert',(t)=>{
            expect(t).to.contains("I am a JS Alert");

            //alert window automatically closed by cypress
          

        })
        cy.get('#result').should('have.text','You successfully clicked an alert')

    })
       
        //JAVA Script Confirm Alert:It will have some text with  "OK" and "Cancel" Button

        it('JS Confirm Alert-OK Button',()=>{

            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

            cy.get("button[onclick='jsConfirm()']").click()

            cy.on('window:confirm',(t)=>{
                expect(t).to.contains("I am a JS Confirm");

    
            })
             //alert window automatically closed by cypress using 'ok' Button
            cy.get('#result').should('have.text','You clicked: Ok')
    


    })

    it('JS Confirm Alert-Cancel Button',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains("I am a JS Confirm");


        })
        
        cy.on('window:confirm',()=>false); //cypress closes alert window using 'cancel' button
        cy.get('#result').should('have.text','You clicked: Cancel')

})

//3.JAVA Prompted Alert: It will have some text with text box for user input along with "ok" and 'cancel' button
it('Prompt Alert',()=>{

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.window().then((win)=>{

        cy.stub(win,'prompt').returns('welcome');
    })

    cy.get("button[onclick='jsPrompt()']").click()

    //Cypress will automatically close prompted alert-It will use OK button by default

    
    //cy.on('window:prompt',()=>false); not working
    cy.get('#result').should('have.text','You entered: welcome')

})

 //4.Authenticated Alert

  //Approch-1

 it.only('Authenticated Alert',()=>{

    /*cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth: {username: "admin", password: "admin"}} );

    cy.get("div[class='example'] p").should('contain', 'Congratulations')

    */


   //Approch-2

   cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")

   cy.get("div[class='example'] p").should('contain', 'Congratulations')

})


 })