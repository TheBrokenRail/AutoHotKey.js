const fs = require('fs');
const child_process = require('child_process');

module.exports.test = function (test) {
  console.log('JavaScript Script:');
  console.log(fs.readFileSync(__dirname + '/test.js', 'utf8'));
  console.log('Expected AHK Script:');
  console.log(fs.readFileSync(__dirname + '/expected.ahk', 'utf8'));
  child_process.spawnSync('node', [__dirname + '/test.js'], {stdio: 'inherit'});
  console.log('Output AHK Script:');
  console.log(fs.readFileSync(__dirname + '/output.ahk', 'utf8'));
  test.strictEqual(fs.readFileSync(__dirname + '/output.ahk', 'utf8'), fs.readFileSync(__dirname + '/expected.ahk', 'utf8'), 'Actual and Expected Scripts Should Be The Same');
  test.done();
};
