#If (WinExist("Documents"))
^t::
  if (WinExist("Untitled - Notepad")) {
    Send, Notepad Open
  }
  else {
    Send, Notepad Not Open
  }
Return
#If
