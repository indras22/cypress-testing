describe('alerts handling',function(){


    it('Alerts',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get("input[value='Confirm']").click()

        //Window Alert

        cy.on('window:alert', (str)=>{

          expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
       
        cy.on('window:confirm', (str)=>{

            expect(str).to.equal('Hello , Are you sure you want to confirm?')
          })
  

    
    })
})