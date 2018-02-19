const commandsJson = require('./commands.json');
const conditionsJson = require('./conditions.json');
const fs = require('fs');

fs.writeFileSync('gh-pages/doc.md', '# Documentation\n\n');
fs.writeFileSync('gh-pages/doc.md', '# General\n\n');
fs.appendFileSync('gh-pages/doc.md', fs.readFileSync('generalDoc.md', 'utf8'));

fs.writeFileSync('gh-pages/doc.md', '# Commands/Functions\n\n');
for (let x in commandsJson) {
  fs.appendFileSync('gh-pages/doc.md', '## ' + x + '\n');
  fs.appendFileSync('gh-pages/doc.md', '```js\n');
  fs.appendFileSync('gh-pages/doc.md', x + '(...);\n');
  fs.appendFileSync('gh-pages/doc.md', '```\n\n');
  fs.appendFileSync('gh-pages/doc.md', '#### Which Outputs\n');
  fs.appendFileSync('gh-pages/doc.md', '```ahk\n');
  fs.appendFileSync('gh-pages/doc.md', commandsJson[x].replace(new RegExp('%', 'g'), '...') + '\n');
  fs.appendFileSync('gh-pages/doc.md', '```\n\n');
}

fs.writeFileSync('gh-pages/doc.md', '# Conditions\n\n');
for (let x in conditionsJson) {
  fs.appendFileSync('gh-pages/doc.md', '## ' + x + '\n');
  fs.appendFileSync('gh-pages/doc.md', '```js\n');
  fs.appendFileSync('gh-pages/doc.md', x + '(...);\n');
  fs.appendFileSync('gh-pages/doc.md', '```\n\n');
  fs.appendFileSync('gh-pages/doc.md', '#### Which Outputs\n');
  fs.appendFileSync('gh-pages/doc.md', '```ahk\n');
  fs.appendFileSync('gh-pages/doc.md', conditionsJson[x].replace(new RegExp('%', 'g'), '...') + '\n');
  fs.appendFileSync('gh-pages/doc.md', '```\n\n');
}
