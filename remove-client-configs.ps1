. "$PSScriptRoot\settings.ps1"

$CONFIGS_TO_REMOVE | ForEach-Object {
    $configPath = "$PSScriptRoot/config/$_"
    Write-Host "Removing config " -NoNewline
    Write-Host $configPath -ForegroundColor Yellow
    Remove-Item -Path $configPath -ErrorAction SilentlyContinue -Recurse
}
