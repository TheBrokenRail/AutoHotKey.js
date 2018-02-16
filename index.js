const fs = require('fs');

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
  fs.appendFileSync(process.cwd() + '/' + nameStr, getPrefix() + str + '\n');
}

commands.on = function (key, callback) {
  write(key + '::');
  indentLevel++;
  callback();
  indentLevel--;
  write('Return');
}

commands.send = function (str) {
  write('Send, ' + str);
}

commands.sendMode = function (str) {
  write('SendMode ' + str);
}

commands.sendEvent = function (str) {
  write('SendEvent, ' + str);
}

commands.sendPlay = function (str) {
  write('SendPlay, ' + str);
}

commands.sendInput = function (str) {
  write('SendInput, ' + str);
}

commands.sendRaw = function (str) {
  write('SendRaw, ' + str);
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
  init: function (name, global) {
    nameStr = name + '.ahk';
    Object.assign(global, commands);
    fs.writeFileSync(process.cwd() + '/' + nameStr, '');
  }
};