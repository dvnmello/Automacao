#language: pt

Funcionalidade: US03
US03 - Eu como usuário padrão, gostaria de poder cadastrar minhas informações de nome e endereço 
Para que eu possa receber uma compra corretamente


Contexto:
    Dado que eu finalizo a escolha dos produtos

    Cenário: Fornecer informações para compra dos produtos
    Quando o sistema me pede informações para realizar a compra
    E informo meus dados para compra
    E clico no botão continue
    Então o sistema me dá um resumo das informações da compra com dados para entrega

    Cenário: Verificar o resumo e finalizar a compra
    Quando o sistema me informa o resumo da compra com dados para entrega
    E verifico as informações fornecidas
    Então Finalizo a compra e vejo a mensagem de validação
    