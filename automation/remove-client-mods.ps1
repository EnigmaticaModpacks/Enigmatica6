# List of Mods to remove for the Server
# In the format @("filename", "filename")
$CLIENT_MODS_TO_REMOVE_FROM_SERVER_FILES = @(
	"Ding", 
	"ReAuth", 
	"moreoverlays",
	"Neat", 
	"Toast-Control", 
	"PackMenu"
)

if (Test-Path "mods" -PathType Container) {
	$modFolder = "mods"
}
elseif (Test-Path "$PSScriptRoot/mods" -PathType Container) {
	$modFolder = "$PSScriptRoot/mods"	
}
else {
	Write-Host "Unable to find the mods folder, no client mods will be removed." -ForegroundColor Red
}

Write-Host
Write-Host "Removing client only mods..." -ForegroundColor Cyan
Get-ChildItem $modFolder -Name -Filter  "*.jar" | ForEach-Object {
	foreach ($clientOnlyMod in $CLIENT_MODS_TO_REMOVE_FROM_SERVER_FILES) {
		if ($_.StartsWith($clientOnlyMod)) {
			Remove-Item "$modfolder/$_" -Force
			Write-Host "Removed the client mod $clientOnlyMod"
		}
	}
}