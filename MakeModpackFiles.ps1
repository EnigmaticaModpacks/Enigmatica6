. "$PSScriptRoot\settings.ps1"
. "$PSScriptRoot\secrets.ps1"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

function Clear-SleepHost {
    Start-Sleep 2
    Clear-Host
}

if (-not (test-path "$env:ProgramFiles\7-Zip\7z.exe")) { throw "$env:ProgramFiles\7-Zip\7z.exe needed to use the ModpackUploader." } 
Set-Alias sz "$env:ProgramFiles\7-Zip\7z.exe"

    # $TwitchExportBuilder = "TwitchExportBuilder.exe"
    # if (!(Test-Path $TwitchExportBuilder) -or $ENABLE_ALWAYS_UPDATE_JARS) {
        # Remove-Item $TwitchExportBuilder -Recurse -Force -ErrorAction SilentlyContinue
        # Download-GithubRelease -repo "Gaz492/twitch-export-builder" -file "twitch-export-builder_windows_amd64.exe"
        # Rename-Item -Path "twitch-export-builder_windows_amd64.exe" -NewName $TwitchExportBuilder -ErrorAction SilentlyContinue
    # }
    # .\TwitchExportBuilder.exe -n "$CLIENT_FILENAME" -p "$MODPACK_VERSION"

    Write-Host ""
    Write-Host "######################################" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Compressing Server files..." -ForegroundColor Green
    Write-Host ""
    Write-Host "######################################" -ForegroundColor Cyan
    Write-Host ""

    $CONTENTS_TO_MOVE | ForEach-Object {
        $FilePath = "$PSScriptRoot/development/include-in-server-files/$_"
        Copy-Item -Path $FilePath -Destination $PSScriptRoot
    }

    $SERVER_FILENAME = "$SERVER_FILENAME.zip"
    sz a -tzip $SERVER_FILENAME $CONTENTS_TO_ZIP

    $CONTENTS_TO_MOVE | ForEach-Object {
        $FilePath = "$PSScriptRoot/$_"
        Remove-Item -Path $FilePath -Force
    }

    Write-Host "Removing Client Mods from Server Files" -ForegroundColor Cyan
    foreach ($clientMod in $CLIENT_MODS) {
        Write-Host "Removing Client Mod $clientMod"
        sz d $SERVER_FILENAME "mods/$clientMod*" | Out-Null
    }


Write-Host "######################################" -ForegroundColor Cyan
Write-Host ""
Write-Host "The Modpack Uploader has completed." -ForegroundColor Green
Write-Host ""
Write-Host "######################################" -ForegroundColor Cyan

# $CurlUrl = "https://discordapp.com/api/webhooks/$WEBHOOK_ID/$WEBHOOK_TOKEN"
# $FilePath = "$CLIENT_FILENAME-$MODPACK_VERSION.zip"

# curl.exe --url $CurlUrl -F ContentType="multipart/form-data" -F content=@$FilePath --progress-bar

# Start-Sleep -Seconds 10