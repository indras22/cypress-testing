describe('write and read files',()=>{

    it('write file',()=>{

        cy.writeFile('sampleFile.txt', 'Hello World\n')
        cy.writeFile('sampleFile.txt', 'I am Indra', {flag: 'a+'})
    })

    it('read file',()=>{

        cy.readFile('sampleFile.txt').should('contain',"I am Indra")
        
    })
})