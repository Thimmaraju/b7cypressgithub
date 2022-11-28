///<reference types="cypress"/>


describe('Automation - File Upload Example - 2', function () {

    it.only('Cypress Test Case - Understanding upload file - 2', function () {
  
      cy.visit('https://the-internet.herokuapp.com/upload');

      //cy.get('#file-upload').attachFile('module1/test4.txt');
      cy.fileupload('//*[@id="file-upload"]','module1/test4.txt')
      cy.get('#file-submit').click();

      cy.get('#uploaded-files').contains('test4.txt')
    
    })

    // Import 

    it.only('Cypress Test Case - Understanding Download file', function () {
  
        cy.downloadFile("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Taj_Mahal_in_March_2004.jpg/800px-Taj_Mahal_in_March_2004.jpg", "cypress/downloads" , "tajmahl.jpg" )
        cy.readFile('cypress/downloads/tajmahl.jpg').should('exist')
      
      })

      // Export 

  })