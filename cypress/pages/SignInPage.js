/// <reference types="cypress" />

class SigninPage {
    go() {
        cy.visit('http://localhost:8080');
        cy.get('.login .form-login .subtitle2').should('have.text', 'Controle de acesso de funcionários');
    }

    fillFormSuccess(user) {
        cy.get('#exampleInputEmail1').type(user.username);
        cy.get('#exampleInputEmail2').type(user.password);
    }

    fillFormFail(user) {
        cy.get('#exampleInputEmail1').type(user.username);
        // cy.get('#exampleInputEmail2').type();
    }

    submit() {
        cy.get('.form-login button[type]').click();
    }

    notificationLoginSucess() {
        cy.get('.Vue-Toastification__toast-body')
            .should('be.visible')
            .should('contain.text', 'Você está logado');
    }

    notificationIncorrectData() {
        cy.get('.Vue-Toastification__toast-body')
            .should('be.visible')
            .should('contain.text', 'Dados incorretos');
    }
}

export default new SigninPage;