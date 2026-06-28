# Desafio 2 - Teste Funcional | Advantage Online Shopping

## Objetivo

Criar cenários funcionais em Gherkin para validar o fluxo crítico de compra no site Advantage Online Shopping e a busca de produtos via API.

## Escopo Web

- Realizar busca de produto;
- Incluir produto no carrinho;
- Validar produto incluído no carrinho/tela de pagamento;
- Cobrir cenários positivos, negativos, regressivos e exploratórios.

## Escopo API

Endpoint base:

```text
https://www.advantageonlineshopping.com/catalog/api/v1/products/search
```

Cenários criados para:

- Executar pesquisa via API;
- Validar status code;
- Validar se a lista exibe somente produtos conforme a busca;
- Validar contrato mínimo da resposta;
- Validar comportamentos negativos e de entrada.

## Artefatos do repositório

```text
features/Advantage_Functional_Gherkin.feature
postman/Advantage_Search_API_Postman_Collection_v2.json
docs/Resumo.csv
docs/Matriz_Gherkin.csv
docs/Gherkin_Base.csv
docs/Postman_API.csv
docs/Evidencias.csv
```

## Estratégia de priorização

- P0: fluxo crítico solicitado no desafio;
- P1: variações funcionais relevantes para regressão;
- P2: testes exploratórios, integração Web/API e performance de referência.

## Execução da collection Postman

Importar o arquivo abaixo no Postman:

```text
postman/Advantage_Search_API_Postman_Collection_v2.json
```

Ou executar via Newman, caso instalado localmente:

```bash
newman run postman/Advantage_Search_API_Postman_Collection_v2.json
```

## Observação

Como se trata de ambiente público, eventuais indisponibilidades, lentidão ou alterações de comportamento devem ser registradas como evidência de execução.

A matriz original em Excel foi convertida em arquivos CSV versionáveis para preservar o conteúdo tabular no GitHub via conector de arquivos texto.
