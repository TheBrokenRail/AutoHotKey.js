# General

## on
```js
on('Key', function () {
  ...
});
```

#### Which Outputs
```ahk
Key::
  ...
Return
```

## If
```js
If(condition, function () {
  ...
});
```

#### Which Outputs
```ahk
if (condition) {
  ...
}
```

## If/Else
```js
If(condition, function () {
  ...
}).Else(function () {
  ...
});
```

#### Which Outputs
```ahk
if (condition) {
  ...
}
else {
  ...
}
```

## set
```js
set('Key', Value);
```

#### Which Outputs
```ahk
Key := Value
```

## get
```js
get('Key');
get('Key').get('Property');
```

#### Which Outputs
```ahk
Key
Key.Property
```

## run
```js
get('Key').run(...);
```

#### Which Outputs
```ahk
Key(...)
```

## runInline
```js
method(get('Key').runInline(...));
```

#### Which Outputs
```ahk
method(Key(...))
```
# Commands/Functions

## send
```js
send(...);
```

#### Which Outputs
```ahk
Send, ...
```

## sendMode
```js
sendMode(...);
```

#### Which Outputs
```ahk
SendMode ...
```

## sendEvent
```js
sendEvent(...);
```

#### Which Outputs
```ahk
SendEvent, ...
```

## sendPlay
```js
sendPlay(...);
```

#### Which Outputs
```ahk
SendPlay, ...
```

## sendInput
```js
sendInput(...);
```

#### Which Outputs
```ahk
SendInput, ...
```

## sendRaw
```js
sendRaw(...);
```

#### Which Outputs
```ahk
SendRaw, ...
```

## msgBox
```js
msgBox(...);
```

#### Which Outputs
```ahk
MsgBox, ...
```

## click
```js
click(...);
```

#### Which Outputs
```ahk
Click, ...
```

## setCapsLockState
```js
setCapsLockState(...);
```

#### Which Outputs
```ahk
SetCapsLockState, ...
```

# Conditions

## winExist
```js
winExist(...);
```

#### Which Outputs
```ahk
WinExist(...)
```

