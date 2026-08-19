# Evidências de Execução

Esta pasta centraliza evidências da execução local dos testes de API do projeto funcional.

## Execução validada

Comando executado localmente:

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

## Arquivo de evidência

```text
evidencia-functional-test-newman-success.md
```

O arquivo registra requests, status HTTP, validações aprovadas, tempos de resposta e resumo final da execução Newman.

## Cobertura comprovada

- busca válida de produtos;
- busca com termo inexistente;
- comportamento sem parâmetro de busca;
- validação de status code;
- validação de payload;
- validação de aderência dos resultados ao termo pesquisado.
