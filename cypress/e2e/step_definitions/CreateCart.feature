Feature: Criar Carrinho
   
Scenario: 1 - Validar carrinho com produto adicionado
    Given que eu tenha acesso ao site  
    When eu clicar no campo de busca 
    And preencher o nome de um produto
    And clicar no produto pesquisado  
    And adicionar o produto ao carrinho  
    Then devo visualizar o produto adicionado no carrinho