

describe('Understanding Fixtures - Cypress', function() {

    before(function () {
        cy.fixture('register/registration').then(function (data) {
          this.data = data;
        })
      })

    it('Validate Registration', function() {
      cy.visit('https://shop.demoqa.com/my-account/');

      cy.get("#reg_username").type(this.data.username)

      cy.wait(20000)
      cy.get('#reg_email').type(this.data.email);


      cy.wait(5000)

      cy.get('#reg_password').type(this.data.weakPassword)
      cy.wait(5000)
  
      //Checking whether the Register button is disabled or not either by grabbing the property or by checking its UI behavior
     cy.get('.woocommerce-Button').should('have.attr', 'disabled', 'disabled');

     // cy.get('.woocommerce-Button').should('be.disabled');

  
       cy.wait(5000)
      // Clicking on to register on the Website by entering new password 

      cy.get('#reg_password').clear();
      cy.wait(5000)

      cy.get('#reg_password').type(this.data.strongPassword)
      cy.wait(10000)
      cy.get('.woocommerce-Button').click();

    
  
      //Checking whether the Registration is successful and whether UserName is populated under login section
      cy.get('#username').should('have.value', this.data.username);

      //or

    cy.get('#username').should('have.attr', 'value', this.data.username);
    
    cy.contains("An account is already registered with that username. Please choose another").should("be.visible")
   
    })


  })