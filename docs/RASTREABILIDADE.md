# Rastreabilidade de Testes

Este documento conecta os principais requisitos funcionais aos cenários, artefatos e evidências disponíveis no projeto.

## Visão geral

A matriz funcional consolidada contém:

```text
Total de cenários: 30
Web: 18
API: 12
P0: 10
P1: 16
P2: 4
```

## Rastreabilidade Web

| Requisito / risco | Cobertura | Prioridade | Artefato principal | Evidência / referência |
|---|---|---|---|---|
| Buscar produto existente | Fluxo positivo de busca | P0 | `features/Advantage_Functional_Gherkin.feature` | `docs/Matriz_Gherkin.csv` |
| Buscar produto inexistente | Resultado vazio/controlado | P1 | `features/Advantage_Functional_Gherkin.feature` | `docs/Matriz_Gherkin.csv` |
| Variar termo de busca | Maiúsculas, minúsculas e termos parciais | P1 | `docs/Matriz_Gherkin.csv` | `docs/Gherkin_Base.csv` |
| Adicionar produto ao carrinho | Inclusão e confirmação | P0 | `features/Advantage_Functional_Gherkin.feature` | `docs/Matriz_Gherkin.csv` |
| Remover produto | Atualização do carrinho | P1 | `features/Advantage_Functional_Gherkin.feature` | `docs/Matriz_Gherkin.csv` |
| Adicionar múltiplos produtos | Composição do carrinho | P1 | `features/Advantage_Functional_Gherkin.feature` | `docs/Matriz_Gherkin.csv` |
| Validar pagamento/checkout | Produto, preço, quantidade e total | P0 | `features/Advantage_Functional_Gherkin.feature` | `docs/Matriz_Gherkin.csv` |
| Smoke/regressão do fluxo crítico | Busca → carrinho → pagamento | P0 | `docs/Matriz_Gherkin.csv` | `docs/CHECKLIST_ENTREGA_FINAL.md` |

## Rastreabilidade API

Endpoint:

```text
https://www.advantageonlineshopping.com/catalog/api/v1/products/search
```

| Requisito / risco | Cobertura | Prioridade | Artefato principal | Evidência de execução |
|---|---|---|---|---|
| Busca válida | GET com termo `LAPTOP` | P0 | `postman/Advantage_Search_API_Postman_Collection_v2.json` | `docs/evidencias/evidencia-functional-test-newman-success.md` |
| Status code | HTTP 200 na busca válida | P0 | Collection Postman/Newman | Evidência Newman |
| Aderência dos resultados | Produtos relacionados ao termo pesquisado | P0 | Collection + Gherkin | Evidência Newman |
| Contrato mínimo | Resposta parseável e estrutura esperada | P1 | `features/Advantage_Functional_Gherkin.feature` | Collection Postman/Newman |
| Termo inexistente | Resposta controlada sem erro interno | P1 | Collection + Gherkin | Evidência Newman |
| Ausência de parâmetro | Comportamento observado do serviço | P1 | Collection + Gherkin | HTTP 500 registrado como cenário negativo observado |
| Variações de entrada | Termo parcial, case variation e inválido | P1/P2 | `docs/Matriz_Gherkin.csv` | `docs/Gherkin_Base.csv` |

## Evidência automatizada de API

A collection também pode ser executada por CI usando:

```bash
npm install
npm run ci
```

O pipeline gera relatório JUnit em:

```text
reports/newman-report.xml
```

O relatório é publicado como artefato da execução do GitHub Actions.

## Critério de cobertura

A priorização foi organizada por risco:

- **P0:** fluxo crítico e validações que bloqueiam a jornada principal;
- **P1:** regressão funcional relevante e comportamentos negativos;
- **P2:** cenários exploratórios, integração e referências não bloqueantes.

A rastreabilidade permite identificar rapidamente o que foi coberto, onde o cenário está documentado e qual evidência sustenta a validação realizada.
