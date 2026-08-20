# Validação de Quality Gate e Relatório HTML — 2026-08-19

Validação realizada no Windows com Git Bash após a evolução do projeto funcional com quality gate e relatório HTML.

## Pipeline local completo

Comando:

```bash
npm run ci
```

## Resultado Newman

```text
Iterations: 1 executada / 0 falhas
Requests: 3 executadas / 0 falhas
Test scripts: 3 executados / 0 falhas
Assertions: 8 executadas / 0 falhas
Total run duration: 3.8s
Average response time: 1007ms
Exit code: 0
```

Requests validadas:

```text
GET Search Products - Valid Term: 200 OK
GET Search Products - Invalid Term: 200 OK
GET Search Products - Missing Query Parameter: 500 Internal Server Error observado e tratado como cenário negativo
```

## Quality Gate

```text
[QUALITY GATE] Assertions/testes JUnit: 8
[QUALITY GATE] Mínimo esperado: 8
[QUALITY GATE] Falhas: 0
[QUALITY GATE] Erros: 0
[QUALITY GATE] Ignorados: 0
[QUALITY GATE] APROVADO — execução sem falhas e cobertura mínima atendida.
```

## Relatório HTML

```text
[HTML REPORT] Testes: 8 | Falhas: 0 | Erros: 0 | Ignorados: 0
```

Arquivos gerados:

```text
reports/newman-report.xml
reports/functional-api-report.html
```

## Conclusão

A execução confirmou que:

- a collection permanece funcional;
- as 3 requests foram executadas sem falhas de execução;
- as 8 assertions foram aprovadas;
- o cenário sem parâmetro preserva o comportamento HTTP 500 observado;
- o quality gate bloqueia falhas, erros ou cobertura abaixo do mínimo esperado;
- o relatório HTML é gerado a partir do resultado JUnit;
- o pipeline local termina com exit code `0`.
