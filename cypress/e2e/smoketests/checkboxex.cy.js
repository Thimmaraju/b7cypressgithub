describe('checkbox Test', function () {
    // test case
    it('Working with Check boxes', function (){

      
      Cypress.on("uncaught:exception", (err, runnable) => {
  
         return false;
       });
     
       cy.visit("https://demoqa.com/checkbox");

       cy.get("button[title='Toggle']").click();
       // checking by values
       //cy.get('input[type="checkbox"]').check({force: true});
      //  cy.get('input[type="checkbox"]').last().check();
     // cy.get('input[type="checkbox"]').first().check();
      //  cy.get('input[type="checkbox"]').eq(1).check();

        //cy.get('input[type="checkbox"]').last().uncheck({force: true});

      //  //first(),last(),eq(0 to 20)
      //  cy.wait(5000)


      //  // unchecking all values
      //  cy.get('input[type="checkbox"]').uncheck({timeout: 30000});
      //  cy.wait(5000)

    
      //   cy.get('input[type="checkbox"]').check(["Automation Tester","RC","Selenium Webdriver"]);

      //   cy.get('input[type="checkbox"]').uncheck(["Automation Tester","RC","Selenium Webdriver"]);

      //   cy.get('input[type="checkbox"]').check("Automation Tester", {forrce: true});
      //  cy.wait(8000)
      //  // checking and assertion combined with and()

       cy.get('#tree-node-documents')
       .check({force: true}).should('be.checked');

       cy.get('#tree-node-documents')
       .uncheck({force: true}).should('not.be.checked');



      // //  // unchecking and assertion combined with and()
      //   cy.get('input[value="Automation Tester"]')
      //  .uncheck().should('not.be.checked');

      
    });
 });