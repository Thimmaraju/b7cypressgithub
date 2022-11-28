describe('Validate Search Functionality', () => {

    
    it('Validate Search ', () => {

        Cypress.on("uncaught:exception", (err, runnable) => {
  
            return false;
          });
        

      cy.visit('https://www.flipkart.com/')

      cy.enterText('input[name="q"]', "Iphone" )

      //cy.get('input[name="qrere"]',{timeout :40000}).type("Iphone")

      cy.contains("iphone 13").click();


    })

  })