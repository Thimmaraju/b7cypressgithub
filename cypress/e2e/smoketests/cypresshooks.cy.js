
describe('Understanding Cypress Hooks ', () => {

    before(function(){

        cy.log("This will run before all Tests")
    })

    beforeEach(function(){

        cy.log("This will run before each Test")
    })

    after(function(){

        cy.log("This will run After all Tests")
    })

    afterEach(function(){

        cy.log("This will run After each Test")
    })

    
    it.skip('Test case 1 ', () => {

        cy.log("This is first Test case")
    })


    it.only('Test case 2 ', () => {

        cy.log("This is second Test case")
    })

    it('Test case 3 ', () => {

        cy.log("This is Thrid Test case")
    })

    it.only('Test case 4 ', () => {

        cy.log("This is 4th Test case")
    })

  })



//   describe = context

//   it = Specify