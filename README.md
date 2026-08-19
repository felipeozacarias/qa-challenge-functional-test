# Testes Funcionais Web e API | Advantage Online Shopping

Projeto prático de QA voltado à análise funcional de fluxos Web e API, com cenários escritos em Gherkin, priorização por risco e validações de API com Postman/Newman. A proposta é demonstrar cobertura funcional, organização de cenários e registro de evidências de execução.

## Objetivo

Criar e organizar cenários funcionais em Gherkin para validar o fluxo crítico de compra no site Advantage Online Shopping e a busca de produtos via API.

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

Resumo da cobertura:

- busca de produto;
- inclusão no carrinho;
- validação na tela de pagamento;
- cenários positivos e negativos;
- variações de entrada;
- remoção e múltiplos produtos;
- smoke/regressão;
- contrato e schema de API;
- status code e payload;
- comportamento sem parâmetro de busca.

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

## Resultados da execução de API

Execução local da collection:

```bash
npx newman run postman/Advantage_Search_API_Postman_Collection_v2.json
```

Resultado consolidado:

```text
Iterations: 1 executada / 0 falhas
Requests: 3 executadas / 0 falhas
Test scripts: 3 executados / 0 falhas
Assertions: 8 executadas / 0 falhas
```

Evidências e documentação:

- [Índice de evidências](docs/evidencias/INDICE.md)
- [Execução Newman detalhada](docs/evidencias/evidencia-functional-test-newman-success.md)
- [Checklist de cobertura](docs/CHECKLIST_ENTREGA_FINAL.md)
- [Resumo quantitativo](docs/Resumo.csv)
- [Matriz Gherkin](docs/Matriz_Gherkin.csv)

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

- P0: fluxo crítico principal;
- P1: variações funcionais relevantes para regressão;
- P2: testes exploratórios, integração Web/API e performance de referência.

## Competências demonstradas

- análise funcional Web e API;
- escrita BDD/Gherkin;
- desenho de cenários positivos, negativos e de borda;
- priorização baseada em risco;
- estruturação de matriz de testes;
- validação de status code e payload;
- testes de contrato e consistência de API;
- uso de Postman/Newman;
- tratamento de comportamento observado em ambiente público;
- documentação e rastreabilidade de evidências.

## Execução da collection Postman

Importar o arquivo abaixo no Postman:

```text
postman/Advantage_Search_API_Postman_Collection_v2.json
```

Ou executar via Newman:

```bash
newman run postman/Advantage_Search_API_Postman_Collection_v2.json
```

## Observações e Decisões Técnicas

Durante a construção do projeto, priorizei primeiro os fluxos críticos para garantir uma base funcional clara e consistente. Depois, ampliei a cobertura com cenários negativos, variações de entrada, validações de API e registro de evidências.

No fluxo funcional, organizei os cenários priorizando busca, carrinho e pagamento. Em seguida, acrescentei cenários complementares para comportamento negativo, diferentes entradas e validações de contrato e consistência da API.

Também executei a collection de API e registrei as evidências. Como o endpoint público apresentou variação no tempo de resposta, ajustei a validação de performance para uma faixa mais realista, mantendo o foco em status code, payload e aderência dos produtos retornados ao termo pesquisado.

Como se trata de ambiente público, eventuais indisponibilidades, lentidão ou alterações de comportamento são tratadas como fatores externos e registradas nas evidências de execução.

## Evoluções possíveis

Em uma próxima evolução, eu adicionaria:

- relatório HTML consolidado;
- execução integrada em pipeline CI/CD;
- maior cobertura de cenários de contrato e borda;
- integração com ferramenta de gestão de testes;
- rastreabilidade entre cenários, execução e evidências.

A matriz original em Excel foi convertida em arquivos CSV versionáveis para preservar o conteúdo tabular no GitHub.
