

describe('Flipcart', () => {
    it.only('Select search Suggetions', () => {

        Cypress.on("uncaught:exception", (err, runnable) => {
  
            return false;
          });
        

         cy.visit("https://www.flipkart.com/")

         cy.get('input[name="q"]').type("Iphone")

         cy.contains('iphone 13').click()


    })


    it.only('Select Radio Button', () => {

         cy.visit("https://jqueryui.com/checkboxradio/")

         cy.get('iframe[class="demo-frame"]').then(($iframe) =>{

            let element = $iframe.contents().find('label[for="radio-1"]')

            cy.wrap(element).click()
         })


    })

})