Set objShell = CreateObject("WScript.Shell")
objShell.Run "cmd /k python -m uvicorn src.main:app --reload", 1, True