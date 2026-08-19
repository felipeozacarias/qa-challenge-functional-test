# Testes Funcionais Web e API | Advantage Online Shopping

Projeto prático de Quality Engineering voltado à análise funcional de fluxos Web e API, com cenários em **Gherkin**, priorização por risco, matriz de cobertura, validações com **Postman/Newman**, rastreabilidade e CI/CD.

## Cobertura funcional

A matriz consolidada contém:

```text
Total de cenários: 30
Cenários Web: 18
Cenários API: 12
P0: 10
P1: 16
P2: 4
```

A cobertura contempla fluxo positivo, cenários negativos, variações de entrada, smoke/regressão, contrato de API e comportamentos observados em ambiente público.

## Escopo Web

- busca de produto;
- inclusão de produto no carrinho;
- validação do produto no checkout/pagamento;
- busca inexistente;
- remoção de produto;
- múltiplos produtos;
- validação de total;
- cenários de regressão e exploração.

## Escopo API

Endpoint principal:

```text
https://www.advantageonlineshopping.com/catalog/api/v1/products/search
```

Cobertura:

- busca válida;
- status code;
- aderência dos produtos ao termo pesquisado;
- resposta parseável;
- contrato mínimo;
- termo inexistente;
- ausência de parâmetro;
- variações de entrada.

## Artefatos

```text
features/Advantage_Functional_Gherkin.feature
postman/Advantage_Search_API_Postman_Collection_v2.json
package.json
docs/Resumo.csv
docs/Matriz_Gherkin.csv
docs/Gherkin_Base.csv
docs/Postman_API.csv
docs/Evidencias.csv
docs/RASTREABILIDADE.md
docs/evidencias/
.github/workflows/qa-functional-api.yml
```

## Estratégia de priorização

- **P0:** fluxo crítico e validações bloqueantes;
- **P1:** regressão funcional relevante e comportamentos negativos;
- **P2:** cenários exploratórios, integração e referências não bloqueantes.

## Execução Postman/Newman

Instale as dependências:

```bash
npm install
```

Execute a collection:

```bash
npm run test:api
```

Execute com geração de relatório JUnit:

```bash
npm run ci
```

O comando de CI gera:

```text
reports/newman-report.xml
```

## Resultado consolidado da API

Última execução local registrada:

```text
Iterations: 1 executada / 0 falhas
Requests: 3 executadas / 0 falhas
Test scripts: 3 executados / 0 falhas
Assertions: 8 executadas / 0 falhas
```

Requests validadas:

```text
GET Search Products - Valid Term: 200 OK
GET Search Products - Invalid Term: 200 OK
GET Search Products - Missing Query Parameter: 500 Internal Server Error observado e tratado como cenário negativo
```

## CI/CD

O workflow está versionado em:

```text
.github/workflows/qa-functional-api.yml
```

O pipeline é acionado em `push`, `pull_request` para `main` e também manualmente por `workflow_dispatch`.

Etapas principais:

1. checkout do repositório;
2. configuração do Node.js;
3. instalação do Newman como dependência do projeto;
4. execução da collection;
5. geração de relatório JUnit;
6. publicação do relatório como artefato do GitHub Actions.

## Rastreabilidade

A relação entre requisito, risco, cenário, prioridade, artefato e evidência está documentada em:

```text
docs/RASTREABILIDADE.md
```

Esse documento conecta os fluxos Web e API às matrizes, features, collection e evidências de execução.

## Evidências e documentação

- [Rastreabilidade](docs/RASTREABILIDADE.md)
- [Índice de evidências](docs/evidencias/INDICE.md)
- [Execução Newman detalhada](docs/evidencias/evidencia-functional-test-newman-success.md)
- [Checklist de cobertura](docs/CHECKLIST_ENTREGA_FINAL.md)
- [Resumo quantitativo](docs/Resumo.csv)
- [Matriz Gherkin](docs/Matriz_Gherkin.csv)
- [Feature principal](features/Advantage_Functional_Gherkin.feature)
- [Collection Postman](postman/Advantage_Search_API_Postman_Collection_v2.json)

## Decisões técnicas

A cobertura foi organizada por risco para dar maior peso ao fluxo de negócio principal: busca, carrinho e pagamento. Depois foram adicionadas variações, cenários negativos e validações de contrato.

O endpoint público apresentou variação no tempo de resposta; por isso a performance foi tratada como referência, mantendo como critérios principais o status code, payload e aderência dos resultados ao termo pesquisado.

A chamada sem parâmetro retornou HTTP 500. Esse comportamento foi preservado como evidência de cenário negativo observado, sem transformar a resposta real do serviço em um resultado artificialmente positivo.

## Competências demonstradas

- análise funcional Web e API;
- escrita BDD/Gherkin;
- desenho de cenários positivos, negativos e de borda;
- priorização baseada em risco;
- matriz de testes e cobertura;
- testes manuais de API com Postman;
- automação de collection com Newman;
- validação de status code e payload;
- contrato e consistência de API;
- rastreabilidade requisito → cenário → evidência;
- CI/CD com GitHub Actions;
- geração de relatório JUnit.

## Próximas evoluções

- relatório executivo HTML;
- validação automatizada de schema JSON;
- quality gate baseado em criticidade;
- dashboard de cobertura;
- integração com ferramenta de gestão de testes;
- ampliação dos cenários de contrato e borda.
