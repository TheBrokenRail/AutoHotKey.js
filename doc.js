const commandsJson = require('./commands.json');
const conditionsJson = require('./conditions.json');
const fs = require('fs');

fs.writeFileSync('gh-pages/doc.md', '');
fs.appendFileSync('gh-pages/doc.md', '# General\n\n');
fs.appendFileSync('gh-pages/doc.md', fs.readFileSync('generalDoc.md', 'utf8'));

fs.appendFileSync('gh-pages/doc.md', '# Commands/Functions\n\n');
for (let x in commandsJson) {
  fs.appendFileSync('gh-pages/doc.md', '## ' + x + '\n' +
    'gh-pages/doc.md', '```js\n' +
    'gh-pages/doc.md', x + '(...);\n' +
    'gh-pages/doc.md', '```\n\n' +
    'gh-pages/doc.md', '#### Which Outputs\n' +
    'gh-pages/doc.md', '```ahk\n' +
    'gh-pages/doc.md', commandsJson[x].replace(new RegExp('%', 'g'), '...') + '\n' +
    'gh-pages/doc.md', '```\n\n');
}

fs.appendFileSync('gh-pages/doc.md', '# Conditions\n\n');
for (let x in conditionsJson) {
  fs.appendFileSync('gh-pages/doc.md', '## ' + x + '\n' +
    'gh-pages/doc.md', '```js\n' +
    'gh-pages/doc.md', x + '(...);\n' +
    'gh-pages/doc.md', '```\n\n' +
    'gh-pages/doc.md', '#### Which Outputs\n' +
    'gh-pages/doc.md', '```ahk\n' +
    'gh-pages/doc.md', conditionsJson[x].replace(new RegExp('%', 'g'), '...') + '\n' +
    'gh-pages/doc.md', '```\n\n');
}
