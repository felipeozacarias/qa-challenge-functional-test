# Checklist de Cobertura e Validação Funcional

Projeto: `qa-challenge-functional-test`

## Objetivo do projeto

Demonstrar análise funcional Web e API com cenários em Gherkin, priorização por risco, matriz de cobertura e execução de testes de API com Postman/Newman.

## Cobertura mapeada

| Item | Status | Observação |
|---|---|---|
| Escrita em Gherkin | Atendido | Cenários Web e API documentados em `.feature`. |
| Matriz funcional | Atendido | Cobertura consolidada em CSV versionável. |
| Busca de produto Web | Atendido | Cenário P0 criado para busca de produto existente. |
| Inclusão no carrinho Web | Atendido | Cenário P0 criado para adicionar produto pesquisado ao carrinho. |
| Validação no pagamento Web | Atendido | Cenário P0 criado para validar produto na tela de pagamento. |
| Documentação API considerada | Atendido | Endpoint de catalog search documentado no README e nos cenários. |
| Cenários API em Gherkin | Atendido | Busca válida, contrato, schema, termo inexistente, entradas variadas e ausência de parâmetro. |
| Execução de API | Atendido | Collection executada localmente via Newman. |
| Validação da lista conforme busca | Atendido | Validação incluída em Gherkin e na collection. |
| Validação de status code | Atendido | Status code 200 validado no cenário de busca válida. |

## Cobertura quantitativa da matriz

```text
Total de cenários: 30
Cenários Web: 18
Cenários API: 12
P0: 10
P1: 16
P2: 4
```

## Principais áreas cobertas

- fluxo positivo de busca, carrinho e pagamento;
- busca inexistente;
- variações de entrada;
- remoção de produto do carrinho;
- inclusão de múltiplos produtos;
- validação de total no carrinho/pagamento;
- smoke/regressão;
- API com termo válido;
- API com termo inválido;
- API sem parâmetro;
- status code;
- payload e aderência dos produtos ao termo pesquisado.

## Execução local da collection

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

## Evidências

- índice em `docs/evidencias/INDICE.md`;
- execução detalhada em `docs/evidencias/evidencia-functional-test-newman-success.md`;
- logs complementares em `docs/newman-results-functional-*.txt`.

## Decisões técnicas relevantes

- cobertura priorizada por risco em P0, P1 e P2;
- cenários negativos tratados como parte da análise funcional, não como falha automática da suíte;
- retorno HTTP 500 sem parâmetro registrado como comportamento observado da API;
- faixa de tempo de resposta ajustada para refletir a natureza pública do ambiente;
- matriz em CSV mantida para facilitar versionamento e leitura no GitHub.

## Conclusão

O projeto demonstra análise funcional estruturada, BDD/Gherkin, priorização por risco, testes de API, validação de contrato e documentação de evidências.
