/// <reference types="cypress" />

import homepage from '../../support/Steps'
const el = require('../../support/Steps/elements').ELEMENTS

Given(/^que eu acesso a página$/, () => {
    homepage.accessPage()  
});

When(/^eu insiro todos os meus dados corretamente$/, () => {
    homepage.validLoginFillForm()
});

When(/^clico no botão Logar$/, () => {
    homepage.submitLogin()
});

Then(/^meu Login é feito com sucesso$/, () => {
    homepage.verifySuccessfullLogin()
});

When(/^Realizo o login com credenciais válidas$/, () => {
    homepage.accessPage()
    homepage.validLoginFillForm()
    homepage.submitLogin()
    homepage.verifySuccessfullLogin()
});
Then(/posso visualizar a lista dos produtos$/, () => {
    homepage.verifyProductList()
});
When(/^Visualizo a lista de produtos$/, () => {
    homepage.accessPage()
    homepage.validLoginFillForm()
    homepage.submitLogin()
    homepage.verifySuccessfullLogin()
    homepage.verifyProductList()
});

When(/^filtro os produtos por nome ou preço$/, () => {
    homepage.filteringProductsName()
});

Then(/^vejo meus produtos ordenados$/, () => {
    homepage.filteringProductsNameVerify()
});

When(/^Visualizo a lista de produtos$/, () => {
    homepage.accessPage()
    homepage.validLoginFillForm()
    homepage.submitLogin()
    homepage.verifySuccessfullLogin()
    homepage.verifyProductList()
});
When(/^seleciono um produto$/, () => {
    homepage.productsDescribesOne()
});

Then(/^vejo os detalhes deste produto$/, () => {
    homepage.productsDescribesOneCheck()
});

When(/^Visualizo a lista de produtos$/, () => {
    homepage.accessPage()
    homepage.validLoginFillForm()
    homepage.submitLogin()
    homepage.verifySuccessfullLogin()
    homepage.verifyProductList()
});
When(/^seleciono um produto para adicionar ao carrinho$/, () => {
    homepage.addingProductsToCar()
});
Then(/^o produto é inserido ao carrinho$/, () => {
    homepage.checkingProductsInCar()
});