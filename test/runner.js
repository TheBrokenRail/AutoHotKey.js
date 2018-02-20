const assert = require('assert');
const fs = require('fs');

describe('AutoHotKey.js', function () {
  it('The Output And Expected AHKs Should Be Equal', function () {
    const output = require('./test.js');
    assert.strictEqual(output.getName(), 'output.ahk', 'Name Should Be output.ahk');
    assert.strictEqual(output.getText(), fs.readFileSync(__dirname + '/expected.ahk', 'utf8'), 'Actual and Expected Scripts Should Be The Same');
  });
});
