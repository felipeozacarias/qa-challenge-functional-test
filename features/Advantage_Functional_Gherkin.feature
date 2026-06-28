# language: pt
@funcional @advantage
Funcionalidade: Busca, carrinho e checkout no Advantage Online Shopping
  Como cliente do ecommerce
  Quero buscar produtos, adiciona-los ao carrinho e validar os itens no pagamento
  Para garantir que o fluxo critico de compra funcione corretamente

  Contexto:
    Dado que acesso o site Advantage Online Shopping

  @web @p0 @busca
  Cenario: Realizar busca de produto existente
    Quando realizo a busca pelo produto "LAPTOP"
    Entao devo visualizar uma lista de produtos relacionados a busca "LAPTOP"
    E a lista nao deve exibir produtos incompativeis com a busca realizada

  @web @p0 @carrinho
  Cenario: Incluir produto pesquisado no carrinho
    Dado que realizei a busca pelo produto "LAPTOP"
    Quando adiciono o primeiro produto disponivel ao carrinho
    Entao devo visualizar a confirmacao de produto adicionado com sucesso
    E o contador do carrinho deve ser atualizado

  @web @p0 @checkout
  Cenario: Validar produto incluido na tela de pagamento
    Dado que adicionei um produto ao carrinho
    Quando acesso o carrinho de compras
    E avanço para a tela de pagamento
    Entao devo visualizar o produto incluido na tela de pagamento
    E o nome, preco, quantidade e total devem estar corretos

  @web @p0 @busca @negativo
  Cenario: Buscar produto inexistente
    Quando realizo a busca pelo produto "XYZINVALIDO123"
    Entao o sistema deve tratar a ausencia de resultados
    E nao deve exibir erro tecnico ou quebra de layout

  @web @p1 @busca
  Esquema do Cenario: Validar busca com diferentes entradas
    Quando realizo a busca pelo produto "<termo>"
    Entao o sistema deve exibir resultado ou mensagem compativel com a entrada "<termo>"
    E nao deve apresentar erro tecnico

    Exemplos:
      | termo          |
      | LAP            |
      | laptop         |
      | LAPTOP         |
      | termo-invalido |

  @web @p1 @carrinho
  Cenario: Remover produto do carrinho
    Dado que adicionei um produto ao carrinho
    Quando removo o produto do carrinho
    Entao o carrinho deve ser atualizado
    E o produto removido nao deve permanecer listado

  @web @p1 @carrinho
  Cenario: Adicionar dois produtos diferentes ao carrinho
    Dado que existem pelo menos dois produtos disponiveis
    Quando adiciono dois produtos diferentes ao carrinho
    Entao os dois produtos devem ser exibidos no carrinho
    E os valores individuais e total devem ser calculados corretamente

@api @advantage
Funcionalidade: Pesquisa de produtos via API do Advantage Online Shopping
  Como QA
  Quero validar a busca de produtos pela API
  Para garantir status code, contrato e aderencia dos resultados ao termo pesquisado

  Contexto:
    Dado que possuo o endpoint "/catalog/api/v1/products/search"

  @api @p0 @status-code
  Cenario: Executar pesquisa via API com termo valido
    Quando envio uma requisicao GET com o parametro de busca "name" igual a "LAPTOP"
    Entao o status code da resposta deve ser 200
    E o payload da resposta deve estar em formato valido

  @api @p0 @contrato
  Cenario: Validar que a lista exibe somente produtos conforme a busca
    Quando envio uma requisicao GET com o parametro de busca "name" igual a "LAPTOP"
    Entao todos os produtos retornados devem estar relacionados a busca "LAPTOP"
    E nenhum produto incompativel deve ser retornado na lista

  @api @p0 @schema
  Cenario: Validar schema minimo da resposta da API
    Quando envio uma requisicao GET com o parametro de busca "name" igual a "LAPTOP"
    Entao a resposta deve conter uma lista de produtos
    E cada produto deve possuir campos minimos de identificacao conforme contrato da API

  @api @p1 @negativo
  Cenario: Pesquisar termo inexistente via API
    Quando envio uma requisicao GET com o parametro de busca "name" igual a "XYZINVALIDO123"
    Entao a API deve retornar uma resposta controlada
    E nao deve retornar erro interno nao tratado

  @api @p1 @entrada
  Esquema do Cenario: Validar pesquisa via API com diferentes entradas
    Quando envio uma requisicao GET com o parametro de busca "name" igual a "<termo>"
    Entao a API deve retornar status e payload coerentes com a entrada "<termo>"
    E nao deve apresentar falha tecnica

    Exemplos:
      | termo          |
      | LAP            |
      | laptop         |
      | LAPTOP         |
      | termo-invalido |

  @api @p1 @contrato
  Cenario: Enviar requisicao sem parametro de busca
    Quando envio uma requisicao GET sem parametro de busca
    Entao a API deve retornar resposta documentada ou erro controlado
    E o comportamento deve ser registrado como regra funcional observada
