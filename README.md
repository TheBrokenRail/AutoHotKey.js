# AutoHotKey.js
Make AutoHotKey Scripts In JavaScript

## Examples

### Basic Script
```js
require('autohotkey.js').init('Name Of File', global);

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
require('autohotkey.js').init('Name Of File', global);

on('^t', function () {
  If(WinExist('Untitled - Notepad'), function () {
    send('Notepad Open');
  })
});
```

#### Which Outputs
```ahk
^t::
  if (WinExist("Untitled - Notepad")) {
    Send, Notepad Open
  }
Return
```

### Basic Script With If/Else Statement
```js
require('autohotkey.js').init('Name Of File', global);

on('^t', function () {
  If(WinExist('Untitled - Notepad'), function () {
    send('Notepad Open');
  }).Else(function () {
    send('Notepad Not Open');
  });
});
```

#### Which Outputs
```ahk
^t::
  if (WinExist("Untitled - Notepad")) {
    Send, Notepad Open
  }
  else {
    Send, Notepad Not Open
  }
Return
```
