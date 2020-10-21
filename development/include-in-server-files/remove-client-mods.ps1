$CLIENT_MODS = @(
	"AmbientSounds",
	"ding", 
	"reauth", 
	"moreoverlays",
	"neat", 
	"toastcontrol", 
	"packmenu"
)

$ModFolder = "$PSScriptRoot/mods"

Get-ChildItem $ModFolder -Name -Filter  "*.jar" | ForEach-Object {
	$Mod = $_.toLower()
	foreach ($ClientMod in $CLIENT_MODS) {
		if ($Mod.StartsWith($ClientMod.toLower())) {
			Remove-Item "$Modfolder/$Mod" -Force
		}
	}
}