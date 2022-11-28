import { Given,Then, When } from "cypress-cucumber-preprocessor/steps";

import loginPage from "../../pageobjects/clientappPO/loginPage.po"

const login = new loginPage()

Given('User launch client application', () => {
    cy.visit("/")
  })

  When(`User enter username as {string}`, (username) => {
   
    cy.xpath(login.userNameInput()).type(username)

 })


 When(`User enter password as {string}`, (password) => {
   
    cy.get(login.passwordInput()).type(password)

 })


 When(`User click on Login Button`, () => {
   
    
    cy.get(login.loginBtn()).click()
 })


 Then(`User Should be navigated to Dashboard`, () => {
   
    
    cy.url().should("includes", "/web/index.php/dashboard/index")
 })


 Then(`User Should see Error Message`, () => {
   
    
      cy.contains(login.errorMessage()).should("be.visible")
 })
 