const commands = require('./commands.json');
const fs = require('fs');

fs.writeFileSync('doc.md', '# Documentation\n\n');
for (let x in commands) {
  fs.appendFileSync('doc.md', '## ' + x + '\n');
  fs.appendFileSync('doc.md', '```js\n');
  fs.appendFileSync('doc.md', x + '( ... );\n');
  fs.appendFileSync('doc.md', '```\n\n');
  fs.appendFileSync('doc.md', '#### Which Outputs\n');
  fs.appendFileSync('doc.md', '```ahk\n');
  fs.appendFileSync('doc.md', commands[x].replace(new RegExp('%', 'g'), '...') + '\n');
  fs.appendFileSync('doc.md', '```\n\n');
}