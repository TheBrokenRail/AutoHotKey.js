# AutoHotKey.js
Make AutoHotKey Scripts In JavaScript

[![Greenkeeper badge](https://badges.greenkeeper.io/TheBrokenRail/AutoHotKey.js.svg)](https://greenkeeper.io/) [![Travis](https://img.shields.io/travis/TheBrokenRail/AutoHotKey.js.svg?style=flat-square)](https://travis-ci.org/TheBrokenRail/AutoHotKey.js) [![Codecov](https://img.shields.io/codecov/c/github/TheBrokenRail/AutoHotKey.js.svg?style=flat-square)](https://codecov.io/gh/TheBrokenRail/AutoHotKey.js) [![npm](https://img.shields.io/npm/dt/autohotkey.js.svg?style=flat-square)](https://www.npmjs.com/package/autohotkey.js) [![npm](https://img.shields.io/npm/v/autohotkey.js.svg?style=flat-square)](https://www.npmjs.com/package/autohotkey.js) [![node](https://img.shields.io/node/v/autohotkey.js.svg?style=flat-square)](https://www.npmjs.com/package/autohotkey.js) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](https://github.com/TheBrokenRail/AutoHotKey.js/issues)
### [Documentation](https://TheBrokenRail.github.io/AutoHotKey.js/doc)
### [Test Results](https://TheBrokenRail.github.io/AutoHotKey.js/mochawesome-report/mochawesome.html)
### [Coverage Report](https://TheBrokenRail.github.io/AutoHotKey.js/coverage/lcov-report/index.html)
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

### Basic Script With Variables
```js
require('autohotkey.js').init('Name Of File');

on('^t', function () {
  set('Variable', '"Untitled - Notepad"');
  If(winExist(get('Variable')), function () {
    send('Notepad Open');
  }).Else(function () {
    send('Notepad Not Open');
  });
  send(get('Variable').contents());
});
```

#### Which Outputs
```ahk
^t::
  Variable := "Untitled - Notepad"
  if (WinExist(Variable)) {
    Send, Notepad Open
  }
  else {
    Send, Notepad Not Open
  }
  Send, %Variable%
Return
```

#### Runing Functions

```js
get('Variable').get('Function').run('"Argrument"');
winExist(get('Variable').get('Function').runInline('"Argrument"'));
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
  getText: function () {...},
  setText: function (text) {...},
  getName: function () {...},
  setName: function (name) {...}
}
```
