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
