#language: pt

Funcionalidade: US02
Eu como usuário padrão, gostaria de poder visualizar meu carrinho de compras, 
Para que eu possa finalizar uma compra

Contexto:
    Dado que eu acesso a página, adiciono um produto ao carrinho para finalizar compra

    Cenário: Verifico produtos no carrinho
    Quando verifico meu carrinho com produtos
    E clico na opção para finalizar compra
    Então o sistema me pede informações para realizar a compra
    