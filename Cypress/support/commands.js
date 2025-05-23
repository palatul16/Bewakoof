// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('newLogin', () => {
    cy.visit('https://bewakoooff.netlify.app/html/login');
    
    cy.get('.login-link').should('be.visible').click();
    cy.get('.login-username').should('be.visible').type('pal16');
    cy.get('.login-password').should('be.visible').type('123456');
    cy.get('.login-btn').should('be.visible').click();

    // Handling Alert Properly
    cy.on('window:alert', (msg) => {
        expect(msg).to.include("Logged In"); // Assertion inside the callback
    });
});


Cypress.Commands.add('address', ()=>{

    cy.xpath('//input[@placeholder="Full Name"]').type('Atul')
    cy.xpath('//input[@placeholder="Mobile Number"]').type('9876543210')

    cy.xpath('//input[@placeholder="Pincode/Postal Code/Zipcode"]').type('110003')
    cy.xpath('//input[@placeholder="City"]').type('Delhi')
    cy.xpath('//input[@placeholder="State"]').type('South Extension part-1')
    cy.xpath('//input[@placeholder="Flat no/Building, Street Name"]').type('block 2')
    cy.xpath('//input[@placeholder="Area/Localtity"]').type('South Ex')


})

