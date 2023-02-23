Powershell.exe -ExecutionPolicy RemoteSigned -File %~dp0update-server.ps1
call %~dp0..\start-automated-server.bat