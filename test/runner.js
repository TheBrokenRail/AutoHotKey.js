const fs = require('fs');
const child_process = require('child_process');

console.log('JavaScript Script:');
console.log(fs.readFileSync(__dirname + '/test.js', 'utf8'));
console.log('Expected AHK Script:');
console.log(fs.readFileSync(__dirname + '/expected.ahk', 'utf8'));
child_process.spawnSync('node', [__dirname + '/test.js'], {stdio: 'inherit'});
console.log('Output AHK Script:');
console.log(fs.readFileSync(__dirname + '/output.ahk', 'utf8'));
if (fs.readFileSync(__dirname + '/output.ahk', 'utf8') === fs.readFileSync(__dirname + '/expected.ahk', 'utf8')) {
  console.log('Success!');
} else {
  console.log('Failure! Output And Expected AHK Files Do Not Match!');
}
