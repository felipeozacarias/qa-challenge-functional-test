# Testes Funcionais Web e API | Advantage Online Shopping

[![QA Functional API CI](https://github.com/felipeozacarias/qa-challenge-functional-test/actions/workflows/qa-functional-api.yml/badge.svg)](https://github.com/felipeozacarias/qa-challenge-functional-test/actions/workflows/qa-functional-api.yml)

Projeto prático de Quality Engineering voltado à análise funcional de fluxos Web e API, com cenários em **Gherkin**, priorização por risco, matriz de cobertura, validações com **Postman/Newman**, rastreabilidade, quality gate, relatório HTML e CI/CD.

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
scripts/quality-gate.js
scripts/generate-html-report.js
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

## Quality Gate

O gate é executado por:

```bash
npm run quality:gate
```

Critérios atuais:

- o relatório JUnit deve existir;
- pelo menos 8 testes/assertions devem estar presentes;
- não pode haver `failures` ou `errors` no JUnit.

Qualquer violação encerra a execução com exit code diferente de zero.

## Relatório HTML

Após a geração do JUnit, execute:

```bash
npm run report:html
```

Arquivo gerado:

```text
reports/functional-api-report.html
```

O relatório HTML é produzido a partir de:

```text
reports/newman-report.xml
```

## Execução de CI local

```bash
npm run ci
```

Esse comando executa, em sequência:

1. criação da pasta de relatórios;
2. execução da collection Postman/Newman;
3. geração do JUnit XML;
4. quality gate;
5. geração do relatório HTML.

## Resultado consolidado da API

Última execução local validada antes da inclusão do novo quality gate:

```text
Iterations: 1 executada / 0 falhas
Requests: 3 executadas / 0 falhas
Test scripts: 3 executados / 0 falhas
Assertions: 8 executadas / 0 falhas
Exit code: 0
```

Requests validadas:

```text
GET Search Products - Valid Term: 200 OK
GET Search Products - Invalid Term: 200 OK
GET Search Products - Missing Query Parameter: 500 Internal Server Error observado e tratado como cenário negativo
```

## CI/CD

Workflow:

```text
.github/workflows/qa-functional-api.yml
```

Acionamentos:

- `push` na `main`;
- `pull_request` para `main`;
- execução manual com `workflow_dispatch`.

Etapas principais:

1. checkout;
2. configuração do Node.js;
3. instalação do Newman;
4. execução da collection + JUnit + quality gate + HTML;
5. publicação dos relatórios como artifacts do GitHub Actions.

## Rastreabilidade

A relação entre requisito, risco, cenário, prioridade, artefato e evidência está documentada em:

```text
docs/RASTREABILIDADE.md
```

## Evidências e documentação

- [Rastreabilidade](docs/RASTREABILIDADE.md)
- [Índice de evidências](docs/evidencias/INDICE.md)
- [Validação local do CI](docs/evidencias/ci-local-2026-08-19.md)
- [Execução Newman detalhada](docs/evidencias/evidencia-functional-test-newman-success.md)
- [Checklist de cobertura](docs/CHECKLIST_ENTREGA_FINAL.md)
- [Resumo quantitativo](docs/Resumo.csv)
- [Matriz Gherkin](docs/Matriz_Gherkin.csv)
- [Feature principal](features/Advantage_Functional_Gherkin.feature)
- [Collection Postman](postman/Advantage_Search_API_Postman_Collection_v2.json)

## Decisões técnicas

A cobertura foi organizada por risco para dar maior peso ao fluxo de negócio principal: busca, carrinho e pagamento. Depois foram adicionadas variações, cenários negativos e validações de contrato.

A chamada sem parâmetro retornou HTTP 500. O comportamento foi preservado como evidência de cenário negativo observado, sem transformar a resposta real do serviço em resultado artificialmente positivo.

O quality gate foi adicionado para impedir que uma execução parcial ou com assertions abaixo do mínimo esperado seja tratada como saudável apenas porque o processo técnico terminou.

## Competências demonstradas

- análise funcional Web e API;
- escrita BDD/Gherkin;
- desenho de cenários positivos, negativos e de borda;
- priorização baseada em risco;
- matriz de testes e cobertura;
- testes manuais de API com Postman;
- automação da collection com Newman;
- validação de status code e payload;
- contrato e consistência de API;
- rastreabilidade requisito → cenário → evidência;
- quality gates;
- relatório JUnit e HTML;
- CI/CD com GitHub Actions.

## Próximas evoluções

- validação automatizada de schema JSON;
- dashboard de cobertura;
- integração com ferramenta de gestão de testes;
- ampliação dos cenários de contrato e borda.
