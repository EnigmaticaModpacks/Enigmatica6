<#

The purpose of this script is to automate updating and launching of Enigmatica 5 servers. 
It's a bit advanced, I recommend going with the server-start script if you'd rather do things manually.

Requirements:
	* Established InstanceSync connection with Enigmatica 5 github repo. (See https://github.com/NillerMedDild/Enigmatica5 for details)
	* The server-start script is used, so the settings.cfg must be filled out.
	* This script has to be in the root of the modpack folder
#>

$ModFolder = "$PSScriptRoot/mods"
$WorldFolder = "$PSScriptRoot/world"
$BackupFolder = "$PSScriptRoot/backups"
$OverridesFolder = "$PSScriptRoot/overrides"
$ThirdPartyModsFolder = "$PSScriptRoot/thirdpartymods"
$BackupsToKeep = 10

git fetch
$CommitsBehind = git rev-list --left-only --count origin/master...master
if ($CommitsBehind -gt 0) {
	# Make a backup of the mods folder
	New-Item -ItemType Directory -Path $BackupFolder -ErrorAction SilentlyContinue
	if (Test-Path $ModFolder) {
		if ((Get-ChildItem -Path $ModFolder | Measure-Object).Count -gt 0) {
			Compress-Archive -Path $ModFolder "$BackupFolder/mods-$(Get-Date -Format "MM.dd.yyyy-HH.mm").zip"
			Remove-Item -Path $ModFolder -Recurse -ErrorAction SilentlyContinue
		}
	} 
	else {
		New-Item -ItemType Directory -Path $ModFolder -ErrorAction SilentlyContinue
	}
	
	$BackupFiles = Get-ChildItem -Path $BackupFolder 
	$BackupFileCount = ($BackupFiles | Measure-Object ).Count
	if ($BackupFileCount -gt $BackupsToKeep) {
		$BackupFiles | 
		Sort-Object -Property CreationTime -Descending | 
		Select-Object -Last ($BackupFileCount - $BackupsToKeep) | 
		Foreach-Object { Remove-Item "$BackupFolder/$_" }
	}
	
	# Make a backup of the world folder
	New-Item -ItemType Directory -Path $BackupFolder -ErrorAction SilentlyContinue
	if (Test-Path $WorldFolder) {
		if ((Get-ChildItem -Path $WorldFolder | Measure-Object).Count -gt 0) {
			Compress-Archive -Path $WorldFolder "$BackupFolder/world-$(Get-Date -Format "MM.dd.yyyy-HH.mm").zip"
		}
	} 
	else {
		New-Item -ItemType Directory -Path $WorldFolder -ErrorAction SilentlyContinue
	}
	
	$BackupFiles = Get-ChildItem -Path $BackupFolder 
	$BackupFileCount = ($BackupFiles | Measure-Object ).Count
	if ($BackupFileCount -gt $BackupsToKeep) {
		$BackupFiles | 
		Sort-Object -Property CreationTime -Descending | 
		Select-Object -Last ($BackupFileCount - $BackupsToKeep) | 
		Foreach-Object { Remove-Item "$BackupFolder/$_" }
	}
}

git stash
git reset --hard
git pull

. "./remove-client-mods.ps1"

Get-ChildItem -Path $OverridesFolder -Recurse | ForEach-Object {
    $CopyFrom = $_.FullName
    $CopyTo = $_.FullName.Replace("\overrides", "")
    Copy-Item -Path $CopyFrom -Destination $CopyTo -Force
}

$FromFolder = "\thirdpartymods"
$DestinationFolder = "\mods"
Get-ChildItem -Path $ThirdPartyModsFolder -Recurse | ForEach-Object {
    $CopyFrom = $_.FullName
    $CopyTo = $_.FullName.Replace($FromFolder, $DestinationFolder)
    Copy-Item -Path $CopyFrom -Destination $CopyTo -Force
}