require('../index.js').init('output');

If(WinExist('"Documents"'), function () {
  on('^t', function () {
    If(WinExist('"Untitled - Notepad"'), function () {
      send('Notepad Open');
    }).Else(function () {
      send('Notepad Not Open');
    });
    set('TestVar', '"Test"');
    get('TestVar').run('"Test"');
    get('TestVar').get('Test').run(get('TestVar').runInline('"Test"'));
  });
});
