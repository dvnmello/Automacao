/// <reference types="cypress" />

import homepage from '../../support/Steps'
const el = require('../../support/Steps/elements').ELEMENTS

Given(/^que eu acesso a página, adiciono um produto ao carrinho para finalizar compra$/, () => {
    homepage.accessPage()
    homepage.validLoginFillForm()
    homepage.submitLogin()
    homepage.verifySuccessfullLogin()
    homepage.verifyProductList()
    homepage.addingProductsToCar()

});

When(/^verifico meu carrinho com produtos$/, () => {
    homepage.checkingProductsInCar()
});

When(/^clico na opção para finalizar compra$/, () => {
    homepage.checkingOut()
});

Then(/^o sistema me pede informações para realizar a compra$/, () => {
    homepage.checkingOutPage()
});