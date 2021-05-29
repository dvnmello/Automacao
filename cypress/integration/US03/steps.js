/// <reference types="cypress" />

import homepage from '../../support/Steps'
const el = require('../../support/Steps/elements').ELEMENTS

Given(/^que eu finalizo a escolha dos produtos$/, () => {
    homepage.accessPage()
    homepage.validLoginFillForm()
    homepage.submitLogin()
    homepage.verifySuccessfullLogin()
    homepage.verifyProductList()
    homepage.addingProductsToCar()
    homepage.checkingProductsInCar()
    homepage.checkingOut()
      
});

When(/^o sistema me pede informações para realizar a compra$/, () => {
    homepage.checkingOutPage()
});

When(/^informo meus dados para compra$/, () => {
    homepage.vallidBuyFillForm()
});
When(/^clico no botão continue$/, () => {
    homepage.confirmCheckout()
});

Then(/^o sistema me dá um resumo das informações da compra com dados para entrega$/, () => {
    homepage.buyResume()
});

When(/^o sistema me informa o resumo da compra com dados para entrega$/, () => {
    homepage.vallidBuyFillForm()
    homepage.confirmCheckout()
    homepage.buyResume()
});

When(/^verifico as informações fornecidas$/, () => {
    homepage.buyingInfo()
});
Then(/^Finalizo a compra e vejo a mensagem de validação$/, () => {
    homepage.buyAgreementAndValidation()
});