const commandsJson = require('./commands.json');
const conditionsJson = require('./conditions.json');
const json = Object.assign({}, commandsJson, conditionsJson);
const fs = require('fs');

fs.writeFileSync('gh-pages/doc.md', '# Documentation\n\n');
fs.appendFileSync('gh-pages/doc.md', fs.readFileSync('generalDoc.md', 'utf8'));
for (let x in json) {
  fs.appendFileSync('gh-pages/doc.md', '## ' + x + '\n');
  fs.appendFileSync('gh-pages/doc.md', '```js\n');
  fs.appendFileSync('gh-pages/doc.md', x + '(...);\n');
  fs.appendFileSync('gh-pages/doc.md', '```\n\n');
  fs.appendFileSync('gh-pages/doc.md', '#### Which Outputs\n');
  fs.appendFileSync('gh-pages/doc.md', '```ahk\n');
  fs.appendFileSync('gh-pages/doc.md', json[x].replace(new RegExp('%', 'g'), '...') + '\n');
  fs.appendFileSync('gh-pages/doc.md', '```\n\n');
}
