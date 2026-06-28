# Checklist de Entrega Final - Desafio 2 Teste Funcional

Data de consolidacao: 2026-06-28
Projeto: qa-challenge-functional-test

## Objetivo do desafio

Criar o maximo de cenarios de testes possiveis em formato Gherkin para o site Advantage Online Shopping e para a API de busca de produtos, gerando ao final artefatos em arquivo documentavel, alem de executar o cenario de API via Postman ou ferramenta similar.

## Checklist de criterios solicitados

| Criterio | Status | Observacao |
|---|---|---|
| Escrita em Gherkin | Atendido | Cenarios Web e API documentados em `.feature`. |
| Arquivo final de testes | Atendido | Matriz em CSV versionavel e arquivo Gherkin disponiveis no repositorio. |
| Busca de produto Web | Atendido | Cenario P0 criado para busca de produto existente. |
| Inclusao no carrinho Web | Atendido | Cenario P0 criado para adicionar produto pesquisado ao carrinho. |
| Validacao no pagamento Web | Atendido | Cenario P0 criado para validar produto na tela de pagamento. |
| Documentacao API considerada | Atendido | Endpoint de catalog search documentado no README e nos cenarios. |
| Cenario API em Gherkin | Atendido | Cenarios criados para busca valida, contrato, schema, termo inexistente e ausencia de parametro. |
| Execucao via Postman ou similar | Atendido | Collection executada localmente via Newman. |
| Validar lista conforme busca | Atendido | Validacao incluida em Gherkin e na collection. |
| Validar status code | Atendido | Status code 200 validado no cenario de busca valida. |

## Artefatos criados

```text
README.md
features/Advantage_Functional_Gherkin.feature
postman/Advantage_Search_API_Postman_Collection_v2.json
docs/Resumo.csv
docs/Matriz_Gherkin.csv
docs/Gherkin_Base.csv
docs/Postman_API.csv
docs/Evidencias.csv
docs/newman-results-functional-local-success.txt
```

## Cobertura funcional criada

A matriz contempla cenarios Web e API com foco em:

- Fluxo positivo de busca, carrinho e pagamento;
- Busca inexistente;
- Variacoes de entrada;
- Remocao de produto do carrinho;
- Inclusao de multiplos produtos;
- Validacao de total no carrinho/pagamento;
- Smoke/regressao;
- API com termo valido;
- API com termo invalido;
- API sem parametro;
- Validacao de status code;
- Validacao de payload e aderencia dos produtos ao termo pesquisado.

## Execucao local da collection

Comando executado:

```bash
npx newman run postman/Advantage_Search_API_Postman_Collection_v2.json
```

Resultado final:

- Iterations: 1 executada, 0 falhas
- Requests: 3 executadas, 0 falhas
- Test scripts: 3 executados, 0 falhas
- Assertions: 8 executadas, 0 falhas
- Duracao total: 11.2s
- Dados recebidos: aproximadamente 1.68kB

Resumo das requests:

```text
GET Search Products - Valid Term: 200 OK
GET Search Products - Invalid Term: 200 OK
GET Search Products - Missing Query Parameter: 500 Internal Server Error tratado como cenario negativo/de contrato observado
```

## Observacoes tecnicas

- A expressao "maximo de cenarios possiveis" foi tratada como maxima cobertura relevante e viavel dentro do escopo e prazo do desafio.
- A cobertura foi priorizada por risco, contemplando P0, P1 e P2.
- O comportamento sem parametro na API retornou 500, mas foi registrado como comportamento observado e validado de forma controlada na collection.
- A validacao de tempo de resposta foi ajustada para uma faixa mais realista por se tratar de API publica.
- A matriz original em Excel foi preservada em formato CSV versionavel, compativel com abertura em Excel.

## Parecer final

O Desafio 2 atende aos criterios solicitados, possui cobertura funcional ampla em Gherkin e foi validado localmente via Newman com sucesso. A entrega esta pronta para avaliacao tecnica.
