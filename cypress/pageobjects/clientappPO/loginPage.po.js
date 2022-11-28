class loginPage{

    loginwithcreds(username, password){


        cy.enterText(this.userNameInput(), username)
        cy.enterText(this.passwordInput(),password)
        //cy.xpath(this.userNameInput()).type(username)
       // cy.get(this.passwordInput()).type(password);

        cy.clickonelement(this.loginBtn())
        //cy.get(this.loginBtn()).click(); 

    }

    userNameInput(){

        return '//input[@name="username"]'
    }


    passwordInput(){

        return 'input[name="password"]'
    }

    loginBtn(){

        return 'button[type="submit"]'
    }

    errorMessage(){

        return "Invalid credentials"
    }

}

export default loginPage