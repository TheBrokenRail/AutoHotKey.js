const fs = require('fs');
const path = require('path');

var nameStr = '';
const commands = {};
var prefixStr = '';
var indentLevel = 0;

function getPrefix() {
  var indentStr = '';
  for (i = 0; i < indentLevel; i++) {
    indentStr = indentStr + '  ';
  }
  return prefixStr + indentStr;
}

function write(str) {
  fs.appendFileSync(path.dirname(require.main.filename) + '/' + nameStr, getPrefix() + str + '\n');
}

commands.on = function (key, callback) {
  write(key + '::');
  indentLevel++;
  callback();
  indentLevel--;
  write('Return');
}

const commandsJson = JSON.parse(fs.readFileSync('commands.json', 'utf8'));
for (let x in commandsJson) {
  commands[x] = function (str) {
    write(commandsJson[x].replace(new RegExp('%', 'g'), str));
  };
}

commands.If = function (condition, callback) {
  if (indentLevel > 0) {
    write('if (' + condition + ') {');
    indentLevel++;
  } else {
    write('#If (' + condition + ')');
  }
  callback();
  if (indentLevel > 0) {
    indentLevel--;
    write('}');
    return {
      Else: function (callback) {
        write('else {');
        indentLevel++;
        callback();
        indentLevel--;
        write('}');
      }
    };
  } else {
    write('#If');
  }
}

commands.WinExist = function (str) {
  return 'WinExist("' + str + '")';
}

module.exports = {
  init: function (name) {
    nameStr = name + '.ahk';
    Object.assign(global, commands);
    fs.writeFileSync(path.dirname(require.main.filename) + '/' + nameStr, '');
  }
};
