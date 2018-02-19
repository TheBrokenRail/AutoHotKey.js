const commandsJson = require('./commands.json');
const conditionsJson = require('./conditions.json');
const fs = require('fs');

fs.writeFileSync('gh-pages/doc.md', '');
fs.appendFileSync('gh-pages/doc.md', '# General\n\n');
fs.appendFileSync('gh-pages/doc.md', fs.readFileSync('generalDoc.md', 'utf8'));

fs.appendFileSync('gh-pages/doc.md', '# Commands/Functions\n\n');
for (let x in commandsJson) {
  fs.appendFileSync('gh-pages/doc.md', '## ' + x + '\n' +
    '```js\n' +
    x + '(...);\n' +
    '```\n\n' +
    '#### Which Outputs\n' +
    '```ahk\n' +
    commandsJson[x].replace(new RegExp('%', 'g'), '...') + '\n' +
    '```\n\n');
}

fs.appendFileSync('gh-pages/doc.md', '# Conditions\n\n');
for (let x in conditionsJson) {
  fs.appendFileSync('gh-pages/doc.md', '## ' + x + '\n' +
    '```js\n' +
    x + '(...);\n' +
    '```\n\n' +
    '#### Which Outputs\n' +
    '```ahk\n' +
    conditionsJson[x].replace(new RegExp('%', 'g'), '...') + '\n' +
    '```\n\n');
}
