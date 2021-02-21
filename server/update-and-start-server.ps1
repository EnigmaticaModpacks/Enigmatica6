<#

This script simply runs the update script, followed by the start script.

#>

. "$PSScriptRoot/update-server.ps1"
Start-Process server-start.bat