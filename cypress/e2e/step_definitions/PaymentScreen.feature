Feature: Tela de Pagamento

Scenario: 1 - Validar produtos do carrinho na tela de pagamento
    Given que eu tenha acesso ao site
    When eu clicar no campo de busca  
    And preencher o nome de um produto
    And clicar no produto pesquisado   
    And adicionar o produto ao carrinho  
    And acessar a tela de pagamento  
    Then devo visualizar os produtos adicionados