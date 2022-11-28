import loginPage from '../../pageobjects/clientappPO/loginPage.po'

const login = new loginPage()

describe('Validate Orange HRM Login functionality', function() {


  beforeEach(function(){   

   cy.session( "login", () =>{
        cy.visit("/web/index.php/auth/login")
         cy.xpath(login.userNameInput()).type("Admin")
        cy.get(login.passwordInput()).type("admin123")
        cy.get(login.loginBtn()).click()
  })

  })

  it('Validate login with Valid credentials ', function () {


   cy.visit("/web/index.php/pim/viewEmployeeList");
   
    // cy.url().should('include',"/web/index.php/dashboard/index" )
    // //or
    // //cy.location().its('href').should('include',"/web/index.php/pim/viewEmployeeList" )
   
  })

  it('Validate timesheet page ', function () {


    cy.visit("/web/index.php/time/viewEmployeeTimesheet")

    //cy.contains("Time").click()


  })

  it('Validate Myinfo page ', function () {


    cy.visit("/web/index.php/pim/viewMyDetails")

    
  })

  it('Validate Employee report ', function () {


    cy.visit("/web/index.php/time/displayEmployeeReportCriteria")

    cy.xpath('(//input[@placeholder="Type for hints..."])[2]').type("Raju")
    
  })

  
  it('Attendance Total Summary Report', function () {


    cy.visit("web/index.php/time/displayAttendanceSummaryReportCriteria")

    //cy.xpath('(//input[@placeholder="Type for hints..."])[2]').type("Raju")
    
  })

  
})


