///<reference types="cypress"/>

describe('Automation - Working With Iframe', function () {

    it('Cypress Test Case - Understanding Iframe and how to work with Iframe', function () {
  
      cy.visit('https://jqueryui.com/checkboxradio/');

      cy.get('label[for="radio-1"]').click()
     
    })

    it.only('Select Radio Button', () => {

        cy.visit("https://jqueryui.com/checkboxradio/")

        cy.get('iframe[class="demo-frame"]').then(($Raju) =>{

           let iframe = $Raju.contents().find('label[for="checkbox-1"]')

           cy.wrap(iframe).click()
        })

       cy.contains("Download").click()
   })


  })