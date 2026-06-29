# Evidência - Execução Newman - Desafio 2

Esta evidência registra a execução local da collection Postman/Newman do Desafio 2 - Teste Funcional.

## Comando executado

```bash
npx newman run postman/Advantage_Search_API_Postman_Collection_v2.json
```

## Collection

```text
Advantage Search API - Functional Challenge
```

## Resultado das requests

| Request | Método/Endpoint | Resultado HTTP | Validações |
|---|---|---|---|
| GET Search Products - Valid Term | `/catalog/api/v1/products/search?name=LAPTOP` | 200 OK | 4 validações aprovadas |
| GET Search Products - Invalid Term | `/catalog/api/v1/products/search?name=XYZINVALIDO123` | 200 OK | 2 validações aprovadas |
| GET Search Products - Missing Query Parameter | `/catalog/api/v1/products/search` | 500 Internal Server Error | 2 validações aprovadas como cenário negativo/de contrato observado |

## Validações aprovadas

```text
Status code deve ser 200
Tempo de resposta aceitável para ambiente público
Resposta deve ser JSON ou texto JSON parseável
Produtos retornados devem estar relacionados à busca quando houver lista
API deve responder de forma controlada
API não deve retornar erro interno para termo inexistente
Comportamento sem parâmetro deve ser registrado
Resposta não deve bloquear execução da collection
```

## Resumo final da execução

```text
iterations: 1 executada / 0 falhas
requests: 3 executadas / 0 falhas
test-scripts: 3 executados / 0 falhas
prerequest-scripts: 0 executados / 0 falhas
assertions: 8 executadas / 0 falhas
total run duration: 10.6s
total data received: 1.68kB aproximadamente
average response time: 3.3s
min response time: 210ms
max response time: 5.3s
```

## Parecer técnico

A execução local da collection foi concluída com sucesso. As 3 requests foram executadas sem falhas e as 8 assertions passaram. O cenário sem parâmetro retornou HTTP 500, mas foi tratado como cenário negativo/de contrato observado, sem quebrar a execução da collection.

## Observação sobre print

O print original da execução Newman foi salvo localmente para anexo na plataforma de entrega. Este arquivo consolida a mesma evidência em formato Markdown versionado no repositório.
