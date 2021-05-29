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


const el = require('./Steps/elements').ELEMENTS

Cypress.Commands.add('Visitar', () => {
    cy.visit('https://saucedemo.com');
    cy.url().should('include', 'saucedemo.com')
    cy.get('[data-test=username]').should('have.value', '').type(Cypress.config().validUser1.name);
    cy.get('[data-test=password]').should('have.value', '').type(Cypress.config().validUser1.password);
    cy.get('[data-test=login-button]').click()
    cy.get('.title').contains('Products')

   
})