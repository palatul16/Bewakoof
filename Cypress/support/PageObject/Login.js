class Login {

    login(){
        cy.get('#user').click();
        cy.get('.login-link').click();
        cy.get('.login-username').type('pal16');
        cy.get('.login-password').type('123456');
        cy.get('.login-btn').click();
        cy.on("window:alert", (msg) => {
            expect(msg).to.include("Logged In");
        });
    }

    navigates(){
        cy.get('#user').click()
        cy.get('.login-link').click();
        cy.get(".login-container h1").invoke('text').should('include', 'Log in').then((text) => {
            cy.log('Test case is failed');
        });
    }

    missedUsername(){
        cy.get('#user').click()
        cy.get('.login-link').click()
        cy.get('.login-password').type('123456')
        cy.get('.login-btn').click()
        const alertMessages = [];
    }

    missedPassword(){
        cy.get('#user').click();
        cy.get('.login-link').click();
        cy.get('.login-username').type('pal16');
        cy.get('.login-btn').click();
    }

    incorrectUsername(){
        cy.get('#user').click();
        cy.get('.login-link').click();
        cy.get('.login-username').type('pal61');
        cy.get('.login-password').type('123456');
        cy.get('.login-btn').click();
    }

    incorrectPassword(){
        cy.get('#user').click();
        cy.get('.login-link').click();
        cy.get('.login-username').type('pal16');
        cy.get('.login-password').type('654321');
        cy.get('.login-btn').click();
    }

    successLogin(){
        cy.get('#user').click();
        cy.get('.login-link').click();
        cy.get('.login-username').type('pal16');
        cy.get('.login-password').type('123456');
        cy.get('.login-btn').click();
        cy.on("window:alert", (msg) => {
            expect(msg).to.include("Logged In");
        });
    }

    urlRedirection(){
        cy.get('#user').click();
        cy.get('.login-link').click();
        cy.get('.login-username').type('pal16');
        cy.get('.login-password').type('123456');
        cy.get('.login-btn').click();
        cy.on("window:alert", (msg) => {
            expect(msg).to.include("Logged In");
        });
        cy.url().should('contain', 'https://bewakoooff.netlify.app/html/index.html');
    }

    correctDisplayName(){
        cy.get('#user').click();
        cy.get('.login-link').click();
        cy.get('.login-username').type('pal16');
        cy.get('.login-password').type('123456');
        cy.get('.login-btn').click();
        // cy.on("window:alert", (msg) => {
        //     expect(msg).to.include("Logged In");
        // });
        cy.wait(4000).get('#user').should('have.text', 'Atul');

    }

}

export default Login;