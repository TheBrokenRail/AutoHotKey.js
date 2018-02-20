const assert = require('assert');
const autohotkey = require('../index.js');
const fs = require('fs');

describe('AutoHotKey.js', function () {
  it('The Output And Expected AHKs Should Be Equal', function () {
    const output = require('./test.js');
    assert.strictEqual(output.getText(), fs.readFileSync(__dirname + '/expected.ahk', 'utf8'));
  });
  describe('Script.getName()', function () {
    it('The Name Should be Correct', function () {
      var script = new autohotkey.Script();
      autohotkey.init('Name', script);
      assert.strictEqual(script.getName(), 'Name.ahk');
    });
  });
});
