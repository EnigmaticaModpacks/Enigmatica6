param(
	[PSObject]
$CLIENT_MODS = @(
	"AppleSkin", 
	"BetterAdvancements",
	"ClientTweaks",
	"CraftingTweaks", 
	"DefaultOptions", 
	"DefaultSettings",
	"EnchantmentDescriptions", 
	"EquipmentTooltips", 
	"FpsReducer", 
	"invtweaks",
	"JustEnoughResources",
	"LLOverlayReloaded", 
	"MouseTweaks",
	"nmdar_", 
	"Neat", 
	"overloadedarmorbar", 
	"ReAuth",
	"StepUp",
	"ToastControl", 
	"toughnessbar", 
	"Xaeros_Minimap", 
	"XaerosWorldMap")

$ModFolder = "$PSScriptRoot/mods"

Get-ChildItem $ModFolder -Name -Filter  "*.jar" | ForEach-Object {
	$Mod = $_.toLower()
	foreach ($ClientMod in $ClientMods) {
		if ($Mod.StartsWith($ClientMod.toLower())) {
			Remove-Item "$Modfolder/$Mod" -Force
		}
	}
}