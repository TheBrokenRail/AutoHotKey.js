# AutoHotKey.js [![Build Status](https://travis-ci.org/TheBrokenRail/AutoHotKey.js.svg?branch=master)](https://travis-ci.org/TheBrokenRail/AutoHotKey.js) [![npm version](https://badge.fury.io/js/autohotkey.js.svg)](https://badge.fury.io/js/autohotkey.js)
Make AutoHotKey Scripts In JavaScript

## Examples

### Basic Script
```js
require('autohotkey.js').init('Name Of File');

on('^t', function () {
  send('Hi');
});
```

#### Which Outputs
```ahk
^t::
  Send, Hi
Return
```

### Basic Script With If Statement
```js
require('autohotkey.js').init('Name Of File');

on('^t', function () {
  If(winExist('"Untitled - Notepad"'), function () {
    send('Notepad Open');
  })
});
```

#### Which Outputs
```ahk
^t::
  if (winExist("Untitled - Notepad")) {
    Send, Notepad Open
  }
Return
```

### Basic Script With If/Else Statement
```js
require('autohotkey.js').init('Name Of File');

on('^t', function () {
  If(winExist('"Untitled - Notepad"'), function () {
    send('Notepad Open');
  }).Else(function () {
    send('Notepad Not Open');
  });
});
```

#### Which Outputs
```ahk
^t::
  if (winExist("Untitled - Notepad")) {
    Send, Notepad Open
  }
  else {
    Send, Notepad Not Open
  }
Return
```

### Store Output Script In Variable
```js
const autohotkey = require('autohotkey.js');
var script = new autohotkey.Script();
autohotkey.init('Name Of File', script);

on('^t', function () {
  send('Hi');
});
```

#### Script Object
```js
Script {
  text: '^t::\n  Send, Hi\nReturn\n',
  name: 'Name Of File.ahk',
  getText: function () { ... },
  setText: function (text) { ... },
  getName: function () { ... },
  setName: function (name) { ... }
}
```
