import signin from '../pages/SignInPage.js';
import SigninFactory from '../factories/SigninFactory.js';
/// <reference types="cypress" />

describe('Login', () => {

    it('SUCESSO NO LOGIN - DADOS CORRETOS', () => {

        var user = SigninFactory.user();

        signin.go();
        signin.fillFormSuccess(user);
        signin.submit();
        signin.notificationLoginSucess();
    });

    it('FALHA NO LOGIN - SENHA VAZIA', () => {

        var user = SigninFactory.user();
        user.password = ''

        signin.go();
        signin.fillFormFail(user);
        signin.submit();
        signin.notificationIncorrectData();
    })

    it('FALHA NO LOGIN - SENHA ERRADA', () => {

        var user = SigninFactory.user();
        user.password = '12345678'

        signin.go();
        signin.fillFormSuccess(user);
        signin.submit();
        signin.notificationIncorrectData();
    })


})