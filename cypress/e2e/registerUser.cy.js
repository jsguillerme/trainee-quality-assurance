import signin from '../pages/SignInPage.js';
import SigninFactory from '../factories/SigninFactory.js';
import register from '../pages/RegisterUser.js';
/// <reference types="cypress" />

describe('Cadastrar', () => {

    beforeEach(function(){

        var user = SigninFactory.user();
        signin.go();
        signin.fillFormSuccess(user);
        signin.submit();

    })

    it('SUCESSO CADASTRO | DADOS CORRETOS', () => {
        register.goToPageRegister();
    })
})