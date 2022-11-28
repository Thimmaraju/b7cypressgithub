///<reference types="cypress"/>

describe('Automation - API Automation - GET. PUT, POST and Delete Methods', function () {

    it.only('Cypress Test Case - Understanding GET Method', function () {
  
      cy.request('GET', 'https://reqres.in/api/users?page=2').then((response)=>{

        expect(response.status).equal(200);
         //comment for demo
        expect(response.body.data[2].email).equal("tobias.funke@reqres.in");

        expect(response.body.data[5].id).equal(12);

        expect(response.body).to.have.property('total_pages');
        expect(response.body).to.have.property('total_pages', 2);

        expect(response.body).to.have.property("page", 2)

        expect(response.body).to.have.property("total", 12)
      })
      
    })

    // it('Cypress Test Case - Understanding POST Method', function () {
  

    //     const payload ={
    //         "name": "Raju",
    //         "job": "Trainer"
    //     }
    //     cy.request('POST', 'https://reqres.in/api/users', payload).then((response)=>{
  
    //       expect(response.status).equal(201);
    //       expect(response.body).to.have.property("name", "Raju")
        
    //       expect(response.body).to.have.property("job", "Trainer")
    //     })
        
    //   })

    it.only('Cypress Test Case - Understanding POST Method', function () {

      
      
        const payload ={
            "name": "Raju",
            "job": "Trainer"
        }

        cy.request('POST', 'https://reqres.in/api/users', payload).then((response)=>{
  
          expect(response.status).equal(201);  
          expect(response.body).to.have.property("name", "Raju")
        
          expect(response.body).to.have.property("job", "Trainer")

          let time = JSON.stringify(response.body.createdAt)
          let idvalue = JSON.stringify(response.body.id)

          cy.writeFile('cypress/fixtures/module1/test6.txt', idvalue);

          cy.log(time)
          cy.log(idvalue)
        })
        
      })

      it.only('Cypress Test Case - Understanding PUT Method', function () {
  


        cy.request('PUT', 'https://reqres.in/api/users/2', {
            "name": "Raju",
            "job": "Consultant"
        }).then((response)=>{
  
          expect(response.status).equal(200);
          expect(response.body).to.have.property("name", "Raju")
        
          expect(response.body).to.have.property("job", "Consultant")

          let updatedtime = JSON.stringify(response.body.updatedAt)

          cy.log(updatedtime)
        })
        
      })


      it.only('Cypress Test Case - Understanding DELETE Method', function () {
  

        cy.request('DELETE', 'https://reqres.in/api/users/2').then((response)=>{
  
          expect(response.status).equal(404);
         
        })
        
      })
       

  })