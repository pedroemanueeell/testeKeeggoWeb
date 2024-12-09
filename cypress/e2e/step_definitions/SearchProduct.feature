Feature: Buscar Produto

Scenario: 1 - Validar busca do produto
    Given que eu tenha acesso ao site  
    When eu clicar no campo de busca  
    And preencher o nome de um produto  
    And clicar no produto pesquisado 
    Then devo visualizar o produto pesquisado
