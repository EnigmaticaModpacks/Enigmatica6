param(
	$InstanceRoot = ("$PSScriptRoot/.." | Resolve-Path),

	[Parameter(Position = 0)]
	[string]$targetBranch = "master",

	[Parameter(Position = 1)]
	[string]$worldFolder = "$InstanceRoot/world",

	[Parameter(Position = 2)]
	[string]$backupFolder = "$InstanceRoot/backups",

	[Parameter(Position = 3)]
	[bool]$backupWorld = $true,

	[Parameter(Position = 4)]
	[int]$backupsToKeep = 12,

	[Parameter(Position = 5)]
	[string]$serverFileFolder = "$InstanceRoot/server_files"
)

$modFolder = "$InstanceRoot/mods"
$overridesFolder = "$InstanceRoot/overrides"

function Update-IsAvailable {
	Write-Host
	Write-Host "Checking if there are any updates available..." -ForegroundColor Cyan
	git fetch
	$commitsBehind = git rev-list --left-only --count "origin/$targetBranch...$targetBranch" 

	if ($commitsBehind -gt 0) {
		Write-Host "********************************************************************" -ForegroundColor Red
		Write-Host
		Write-Host "An update is available." -ForegroundColor Green
		Write-Host
		Write-Host "Please make sure the Minecraft Server is offline before you continue." -ForegroundColor Red
		Write-Host
		Write-Host "********************************************************************" -ForegroundColor Red
		Read-Host -Prompt "Press any key to continue or CTRL+C to quit" 
	}

	return $commitsBehind -ne 0
}

function Backup-ModsFolder {
	Write-Host
	Write-Host "Backing up the mods folder..." -ForegroundColor Cyan
	New-Item -ItemType Directory -Path $backupFolder -ErrorAction SilentlyContinue
	New-Item -ItemType Directory -Path "$backupFolder/mods" -ErrorAction SilentlyContinue
	if (Test-Path $modFolder) {
		if ((Get-ChildItem -Path $modFolder | Measure-Object).Count -gt 0) {
			Compress-Archive -Path $modFolder "$backupFolder/mods/$(Get-Date -Format "MM.dd.yyyy-HH.mm").zip"
			Remove-Item -Path $modFolder -Recurse -ErrorAction SilentlyContinue
		}
	} 
	else {
		New-Item -ItemType Directory -Path $modFolder -ErrorAction SilentlyContinue
	}
}

function Prune-Backups {
	Write-Host
	Write-Host "Pruning backups folder contents..." -ForegroundColor Cyan
	Write-Host "The current limit for backups to keep is $backupsToKeep"
	$backupFiles = Get-ChildItem -Path $backupFolder 
	$backupFileCount = ($backupFiles | Measure-Object ).Count
	if ($backupFileCount -gt $backupsToKeep) {
		$backupFiles | 
		Sort-Object -Property CreationTime -Descending | 
		Select-Object -Last ($backupFileCount - $backupsToKeep) | 
		Foreach-Object { Remove-Item "$backupFolder/$_" }
	}
}

function Backup-WorldFolder {
	Write-Host
	Write-Host "Backing up the world folder..." -ForegroundColor Cyan
	New-Item -ItemType Directory -Path $backupFolder -ErrorAction SilentlyContinue
	if (Test-Path $worldFolder) {
		if ((Get-ChildItem -Path $worldFolder | Measure-Object).Count -gt 0) {
			Compress-Archive -Path $worldFolder "$backupFolder/world-$(Get-Date -Format "MM.dd.yyyy-HH.mm").zip"
		}
	} 
	else {
		New-Item -ItemType Directory -Path $worldFolder -ErrorAction SilentlyContinue
	}
}

function Pull-Changes {
	Write-Host
	Write-Host "Pulling changes from Git..." -ForegroundColor Cyan
	git stash
	git reset --hard
	git pull origin $targetBranch
}

function Move-ServerFiles {
	Write-Host
	Write-Host "Copying server files to base folder..." -ForegroundColor Cyan
	Write-Host "This will not overwrite existing files." -ForegroundColor Gray
	@(
		"$InstanceRoot/automation/settings.cfg", 
		"$InstanceRoot/automation/start-automated-server.bat", 
		"$InstanceRoot/automation/start-automated-server.sh"
	) | ForEach-Object {
		$splitFileName = $_ -split "/"
		$fileName = $splitFileName[$splitFileName.length - 1]
		$destination = "$InstanceRoot/$fileName" 
		if (-not (Test-Path $destination)) {
			Copy-Item -Path $_ -Destination $destination
		}
	}
}

function Remove-ClientOnlyMods {
	. "$InstanceRoot/automation/remove-client-mods.ps1"
}


function Copy-Overrides {
	Write-Host
	Write-Host "Copying contents of the overrides folder..." -ForegroundColor Cyan
	Write-Host "This will overwrite existing files." -ForegroundColor Yellow
	Get-ChildItem -Path $overridesFolder -Recurse | ForEach-Object {
		$CopyFrom = $_.FullName
		$CopyTo = $_.FullName.Replace("\overrides", "").Replace("/overrides", "")
		Copy-Item -Path $CopyFrom -Destination $CopyTo -Force
	}
}


if (Update-IsAvailable) {	
	Prune-Backups
	Backup-ModsFolder
	Backup-WorldFolder
	Pull-Changes
	Move-ServerFiles
	Remove-ClientOnlyMods
	Copy-Overrides
}