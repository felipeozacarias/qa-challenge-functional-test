const fs = require('fs');
const path = require('path');

const junitPath = path.resolve('reports/newman-report.xml');
const outputDir = path.resolve('reports');
const outputPath = path.join(outputDir, 'functional-api-report.html');

if (!fs.existsSync(junitPath)) {
  console.error(`[HTML REPORT] Relatório JUnit não encontrado: ${junitPath}`);
  process.exit(1);
}

const xml = fs.readFileSync(junitPath, 'utf8');
const suites = [...xml.matchAll(/<testsuite\b[^>]*>/g)].map((match) => match[0]);
const cases = [...xml.matchAll(/<testcase\b[^>]*(?:\/>|>[\s\S]*?<\/testcase>)/g)].map((match) => match[0]);

const attr = (tag, name) => {
  const match = tag.match(new RegExp(`${name}="([^"]*)"`));
  return match?.[1] || '';
};

const sum = (name) => suites.reduce((total, tag) => total + Number(attr(tag, name) || 0), 0);
const tests = sum('tests');
const failures = sum('failures');
const errors = sum('errors');
const skipped = sum('skipped');

const rows = cases.map((testCase) => {
  const name = attr(testCase, 'name');
  const className = attr(testCase, 'classname');
  const time = attr(testCase, 'time');
  const failed = /<(failure|error)\b/.test(testCase);
  const skippedCase = /<skipped\b/.test(testCase);
  const status = failed ? 'FAIL' : skippedCase ? 'SKIPPED' : 'PASS';

  return `<tr><td>${escapeHtml(className)}</td><td>${escapeHtml(name)}</td><td>${escapeHtml(time)}</td><td>${status}</td></tr>`;
});

fs.mkdirSync(outputDir, { recursive: true });

const html = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>QA Functional API Report</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 1100px; margin: 40px auto; padding: 0 20px; line-height: 1.5; }
    .summary { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 24px 0; }
    .card { border: 1px solid #ddd; border-radius: 8px; padding: 16px; }
    table { width: 100%; border-collapse: collapse; }
    th, td { border-bottom: 1px solid #ddd; text-align: left; padding: 10px; vertical-align: top; }
    th { background: #f5f5f5; }
    code { background: #f5f5f5; padding: 2px 5px; border-radius: 4px; }
  </style>
</head>
<body>
  <h1>Relatório Funcional de API</h1>
  <p>Gerado a partir do relatório JUnit produzido pela execução Postman/Newman.</p>
  <div class="summary">
    <div class="card"><strong>Testes</strong><br>${tests}</div>
    <div class="card"><strong>Falhas</strong><br>${failures}</div>
    <div class="card"><strong>Erros</strong><br>${errors}</div>
    <div class="card"><strong>Ignorados</strong><br>${skipped}</div>
  </div>
  <table>
    <thead><tr><th>Suite</th><th>Teste</th><th>Tempo (s)</th><th>Status</th></tr></thead>
    <tbody>${rows.join('')}</tbody>
  </table>
  <p><small>Fonte: <code>reports/newman-report.xml</code></small></p>
</body>
</html>`;

fs.writeFileSync(outputPath, html, 'utf8');
console.log(`[HTML REPORT] Gerado: ${outputPath}`);
console.log(`[HTML REPORT] Testes: ${tests} | Falhas: ${failures} | Erros: ${errors} | Ignorados: ${skipped}`);

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
