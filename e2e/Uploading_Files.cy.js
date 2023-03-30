
import 'cypress-file-upload'

describe('File Upload',()=>{

    it('Single File Upload',()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('text1.pdf')
        cy.get('#file-submit').click();
        cy.wait(5000)
        cy.get('h3').should('have.text','File Uploaded!')


    })


    it('Single File Upload-Rename',()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'text1.pdf',fileName:'myfile.pdf'})
        cy.get('#file-submit').click();
        cy.wait(5000)
        cy.get('h3').should('have.text','File Uploaded!')
        


    })

    it('Drag and Drop',()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile("text1.pdf", {subjectType:'drag-n-drop'});
      


    })

    it('Multiple Files upload',()=>{

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(["text1.pdf", "text2.pdf"]);
        cy.wait(5000)
        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:')
      


    })

    it.only('File Uplaod-shadow DOM',()=>{

        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile("text1.pdf")
        cy.wait(5000)

        cy.get('.smart-item-name',{includeShadowDom:true}).contains('text1.pdf')

    })




})