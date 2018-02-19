const fs = require('fs');

module.exports.test = function (test) {
  const output = require('./test.js');
  test.strictEqual(output.getName(), 'output.ahk', 'Name Should Be output.ahk');
  test.strictEqual(output.getText(), fs.readFileSync(__dirname + '/expected.ahk', 'utf8'), 'Actual and Expected Scripts Should Be The Same');
  test.done();
};
