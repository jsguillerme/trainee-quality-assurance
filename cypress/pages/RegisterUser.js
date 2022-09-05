/// <reference types="cypress" />

class RegisterUser {

    goToPageRegister() {

        cy.get('.btn-cadastro').click()
        cy.url().should('eq', 'http://localhost:8080/cadastro');
        cy.get('.form-group .btn-create').should('be.visible');
    }
}

export default new RegisterUser;