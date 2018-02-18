require('../index.js').init('output');

If(winExist('"Documents"'), function () {
  on('^t', function () {
    If(winExist('"Untitled - Notepad"'), function () {
      send('Notepad Open');
    }).Else(function () {
      send('Notepad Not Open');
    });
    set('TestVar', '"Test"');
    get('TestVar').run('"Test"');
    get('TestVar').get('Test').run(get('TestVar').runInline('"Test"'));
    If(winExist(get('TestVar').runInline('"Test"')), function () {
      send('Test');
    });
  });
});
