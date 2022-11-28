import loginPage from '../../pageobjects/clientappPO/loginPage.po'

import logindata from '../../fixtures/logincreds.json'

const login = new loginPage()

describe('Login Orange HRM', () => {

 beforeEach(function(){

  //cy.viewport("iphone-6",'landscape');

  cy.visit('/');
 })

   
    it('Login with Valid Creds', () => {

      
      cy.login(logindata.Username,logindata.Password)
      //login.loginwithcreds(logindata.Username,logindata.Password)
      cy.url().should("eq", logindata.dashboardurl )
      
      //or

      cy.url().should("includes", "/web/index.php/dashboard/index")
      
    })

    it('Login with Invalid Creds', () => {

      cy.login(logindata.Username, logindata.wrongpasswrod)
        //login.loginwithcreds(logindata.Username, logindata.wrongpasswrod)
       cy.contains(login.errorMessage()).should("be.visible")
        
      })


  })