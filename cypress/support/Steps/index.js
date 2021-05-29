const el = require('./elements').ELEMENTS

class HomePage {
    accessPage() {
        cy.visit('https://saucedemo.com');

    }

    validLoginFillForm() {
        cy.get(el.inputName).type(Cypress.config().validUser1.name);
        cy.get(el.inputPassword).type(Cypress.config().validUser1.password);
    }

    submitLogin() {
        cy.get(el.buttonLogin).click();
    }

    verifySuccessfullLogin() {
        cy.get('.title').contains('Products');
    }

    verifyProductList() {
        //Verificação se na lista possui 6 itens
        cy.get('.inventory_list')
        cy.get('.inventory_item').should('have.length', 6)
        //Verificação se na lista tem os dois produtos
        cy.get('#item_4_title_link > .inventory_item_name').contains('Sauce Labs Backpack')
        cy.get('#item_3_title_link > .inventory_item_name').contains('Test.allTheThings')
    }

    filteringProductsName() {
        //Selecionando a opção para filtrar por alfabeticamente decrescente
        cy.get('[data-test=product_sort_container]').select('Name (Z to A)')
    }
    filteringProductsNameVerify() {
        //Validando ordem verificando primeiro e último item
        cy.get('.inventory_list').first().contains('Test.allTheThings')
        cy.get('.inventory_list').last().contains('Sauce Labs Backpack')

    }
    filteringProductsPrice() {
        //Selecionando a opção para filtrar por ordem de preço crescente
        cy.get('[data-test=product_sort_container]').select('Price (low to high)')
    }

    filteringProductsPriceVerify() {
        //Validando ordem verificando primeiro e último item   
        cy.get('.inventory_list').first().contains(7.99)
        cy.get('.inventory_list').last().contains(49.99)
    }
    filteringProductsPrice2() {
        //Selecionando a opção para filtrar por ordem de preço decrescente
        cy.get('[data-test=product_sort_container]').select('Price (high to low)')
    }
    filteringProductsPriceVerify2() {
        //Validando ordem verificando primeiro e último item
        cy.get('.inventory_list').first().contains(49.99)
        cy.get('.inventory_list').last().contains(7.99)
    }

    productsDescribesOne() {
        //Verificando a descrição do primeiro item checando nome e preço
        cy.get('#item_4_img_link > .inventory_item_img').click()
    }
    productsDescribesOneCheck() {
        cy.get('.inventory_details_desc_container')
        cy.get('.inventory_details_name').contains('Sauce Labs Backpack')
        cy.get('.inventory_details_price').contains(29.99)
        cy.get('[data-test=back-to-products]').click()
    }
    productsDescribesAll() {
        //Verificando a descrição do segundo item checando nome e preço
        cy.get('#item_0_img_link > .inventory_item_img').click()
        cy.get('.inventory_details_desc_container')
        cy.get('.inventory_details_name').contains('Sauce Labs Bike Light')
        cy.get('.inventory_details_price').contains('9.99')
        cy.get('[data-test=back-to-products]').click()
        //Verificando a descrição do terceiro item checando nome e preço
        cy.get('#item_1_img_link > .inventory_item_img').click()
        cy.get('.inventory_details_desc_container')
        cy.get('.inventory_details_name').contains('Sauce Labs Bolt T-Shirt')
        cy.get('.inventory_details_price').contains(15.99)
        cy.get('[data-test=back-to-products]').click()
        //Verificando a descrição do quarto item checando nome e preço
        cy.get('#item_5_img_link > .inventory_item_img').click()
        cy.get('.inventory_details_desc_container')
        cy.get('.inventory_details_name').contains('Sauce Labs Fleece Jacket')
        cy.get('.inventory_details_price').contains(49.99)
        cy.get('[data-test=back-to-products]').click()
        //Verificando a descrição do quinto item checando nome e preço
        cy.get('#item_2_img_link > .inventory_item_img').click()
        cy.get('.inventory_details_desc_container')
        cy.get('.inventory_details_name').contains('Sauce Labs Onesie')
        cy.get('.inventory_details_price').contains(7.99)
        cy.get('[data-test=back-to-products]').click()
        //Verificando a descrição do sexto item checando nome e preço
        cy.get('#item_3_img_link > .inventory_item_img').click()
        cy.get('.inventory_details_desc_container')
        cy.get('.inventory_details_name').contains('Test.allTheThings')
        cy.get('.inventory_details_price').contains(15.99)
        cy.get('[data-test=back-to-products]').click()
    }

    addingProductsToCar() {
        //Adicionando todos os produtos ao carrinho
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
        cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click()
        cy.get('[data-test=add-to-cart-sauce-labs-bolt-t-shirt]').click()
        cy.get('[data-test=add-to-cart-sauce-labs-fleece-jacket]').click()
        cy.get('[data-test=add-to-cart-sauce-labs-onesie]').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    }

    checkingProductsInCar() {
        cy.get('.shopping_cart_badge').contains(6)
        cy.get('.shopping_cart_link').click()
        cy.get(':nth-child(3) > .cart_quantity').contains(1)
        cy.get(':nth-child(4) > .cart_quantity').contains(1)
        cy.get(':nth-child(5) > .cart_quantity').contains(1)
        cy.get(':nth-child(6) > .cart_quantity').contains(1)
        cy.get(':nth-child(7) > .cart_quantity').contains(1)
        cy.get(':nth-child(8) > .cart_quantity').contains(1)
    }
    checkingOut() {
        cy.get('[data-test=checkout]').click()
    }
    checkingOutPage(){
        cy.get('.title').contains('Checkout: Your Information')
    }
    vallidBuyFillForm(){
        cy.get('[data-test=firstName]').type('Diego')
        cy.get('[data-test=lastName]').type('Mello')
        cy.get('[data-test=postalCode]').type('73507520')
    }
    confirmCheckout(){
        cy.get('[data-test=continue]').click()
    }
    buyResume(){
        cy.get('.cart_list')
        cy.get('.cart_item').should('have.length', 6)
    }
    buyingInfo(){
        cy.get('.summary_info > :nth-child(1)')
        cy.get('.summary_info > :nth-child(2)').contains('SauceCard')
        cy.get('.summary_subtotal_label').contains(129.94)
        cy.get('.summary_tax_label').contains(10.40)
        cy.get('.summary_total_label').contains(140.34)
    }
    buyAgreementAndValidation(){
        cy.get('[data-test=finish]').click()
        cy.get('.complete-header').should('have.class', 'complete-header')
        cy.get('.complete-header').contains('THANK YOU FOR YOUR ORDER')
        cy.get('.complete-text').should('have.class', 'complete-text')
        cy.get('.complete-text').contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    }
}

export default new HomePage();