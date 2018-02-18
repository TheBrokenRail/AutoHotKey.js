#If (WinExist("Documents"))
^t::
  if (WinExist("Untitled - Notepad")) {
    Send, Notepad Open
  }
  else {
    Send, Notepad Not Open
  }
  TestVar := "Test"
  TestVar("Test")
  TestVar.Test(TestVar("Test"))
  if (WinExist(TestVar("Test"))) {
    Send, Test
  }
  Send, %TestVar%
Return
#If
