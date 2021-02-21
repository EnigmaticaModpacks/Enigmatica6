$CLIENT_MODS = @(
	"AmbientSounds",
	"Ding", 
	"ReAuth", 
	"moreoverlays",
	"Neat", 
	"Toast-Control", 
	"PackMenu"
)

$modFolder = "$PSScriptRoot/mods"

Get-ChildItem $modFolder -Name -Filter  "*.jar" | ForEach-Object {
	foreach ($clientMod in $CLIENT_MODS) {
		if ($_.StartsWith($clientMod)) {
			Remove-Item "$modfolder/$_" -Force
		}
	}
}