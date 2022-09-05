/// <reference types="cypress" />

describe('Página inicial da aplicação', () => {
    it('A aplicação deve estar online', () => {
        cy.visit('http://localhost:8080');
        cy.get('.login .form-login .subtitle2').should('have.text', 'Controle de acesso de funcionários');
    })
})