require('./index.js').init('output', global);

If(WinExist('Documents'), function () {
  on('^t', function () {
    If(WinExist('Untitled - Notepad'), function () {
      send('Notepad Open');
    }).Else(function () {
      send('Notepad Not Open');
    });
  });
});
