param(
	[PSObject]
$CLIENT_MODS = @("nopotionshift", "ding", "reauth", "neat", "xaeros_minimap", "xaerosworldmap", "toastcontrol", "packmenu", "servertabinfo")
)

$ModFolder = "$PSScriptRoot/mods"

Get-ChildItem $ModFolder -Name -Filter  "*.jar" | ForEach-Object {
	$Mod = $_.toLower()
	foreach ($ClientMod in $ClientMods) {
		if ($Mod.StartsWith($ClientMod.toLower())) {
			Remove-Item "$Modfolder/$Mod" -Force
		}
	}
}