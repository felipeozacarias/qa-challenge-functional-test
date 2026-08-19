const fs = require('fs');
const path = require('path');

const reportPath = path.resolve('reports/newman-report.xml');
const minimumTests = Number(process.argv[2] || 8);

if (!fs.existsSync(reportPath)) {
  console.error(`[QUALITY GATE] Falha: relatório JUnit não encontrado em ${reportPath}`);
  process.exit(1);
}

const xml = fs.readFileSync(reportPath, 'utf8');
const suiteMatches = [...xml.matchAll(/<testsuite\b[^>]*>/g)].map((match) => match[0]);

if (suiteMatches.length === 0) {
  console.error('[QUALITY GATE] Falha: nenhuma testsuite encontrada no relatório JUnit.');
  process.exit(1);
}

const sumAttribute = (attribute) => suiteMatches.reduce((total, tag) => {
  const match = tag.match(new RegExp(`${attribute}="(\\d+)"`));
  return total + Number(match?.[1] || 0);
}, 0);

const tests = sumAttribute('tests');
const failures = sumAttribute('failures');
const errors = sumAttribute('errors');
const skipped = sumAttribute('skipped');

console.log('[QUALITY GATE] Assertions/testes JUnit:', tests);
console.log('[QUALITY GATE] Mínimo esperado:', minimumTests);
console.log('[QUALITY GATE] Falhas:', failures);
console.log('[QUALITY GATE] Erros:', errors);
console.log('[QUALITY GATE] Ignorados:', skipped);

if (tests < minimumTests) {
  console.error(`[QUALITY GATE] Falha: cobertura executada abaixo do mínimo (${tests}/${minimumTests}).`);
  process.exit(1);
}

if (failures > 0 || errors > 0) {
  console.error('[QUALITY GATE] Falha: existem testes com falha ou erro no relatório JUnit.');
  process.exit(1);
}

console.log('[QUALITY GATE] APROVADO — execução sem falhas e cobertura mínima atendida.');
