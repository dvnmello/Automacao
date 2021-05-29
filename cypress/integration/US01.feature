#language: pt

Funcionalidade: US01
Eu como usuário padrão, gostaria de poder de comprar produtos na loja online
Para que eu possa utilizá-los como eu queira

Contexto:
    Dado que eu acesso a página

    Cenário: Realizar login com credenciais válidas
    Quando eu insiro todos os meus dados corretamente
    E clico no botão Logar
    Então meu Login é feito com sucesso

    Cenário: Visualizar lista dos produtos disponíveis
    Quando Realizo o login com credenciais válidas
    Então posso visualizar a lista dos produtos

    Cenário: Filtrar os produtos em ordem alfabética ou por preço
    Quando Visualizo a lista de produtos
    E filtro os produtos por nome ou preço
    Então vejo meus produtos ordenados

    Cenário: Ver os detalhes de um produto
    Quando Visualizo a lista de produtos
    E seleciono um produto
    Então vejo os detalhes deste produto

    Cenário: Adicionar o produto no carrinho
    Quando Visualizo a lista de produtos
    E seleciono um produto para adicionar ao carrinho
    Então o produto é inserido ao carrinho


