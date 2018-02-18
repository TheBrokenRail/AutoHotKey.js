const fs = require('fs');
const child_process = require('child_process');

module.exports.test = function (test) {
  console.log('JavaScript Script:');
  console.log(fs.readFileSync(__dirname + '/test.js', 'utf8'));
  console.log('Expected AHK Script:');
  console.log(fs.readFileSync(__dirname + '/expected.ahk', 'utf8'));
  const output = require('./test.js');
  console.log('Output AHK Script:');
  console.log(output);
  test.strictEqual(output, fs.readFileSync(__dirname + '/expected.ahk', 'utf8'), 'Actual and Expected Scripts Should Be The Same');
  test.done();
};
