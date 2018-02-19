const fs = require('fs');

module.exports.test = function (test) {
  console.log('JavaScript Script:');
  console.log(fs.readFileSync(__dirname + '/test.js', 'utf8'));
  console.log('Expected AHK Script:');
  console.log(fs.readFileSync(__dirname + '/expected.ahk', 'utf8'));
  const output = require('./test.js');
  console.log('Output AHK Script:');
  console.log(output.getText());
  test.strictEqual(output.getName(), 'output.ahk', 'Name Should Be output.ahk');
  test.strictEqual(output.getText(), fs.readFileSync(__dirname + '/expected.ahk', 'utf8'), 'Actual and Expected Scripts Should Be The Same');
  test.done();
};
