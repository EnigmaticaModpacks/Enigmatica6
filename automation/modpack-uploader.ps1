[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

. "$PSScriptRoot\settings.ps1"
. "$PSScriptRoot\secrets.ps1"

function Get-GitHubRelease {
    param(
        [parameter(Mandatory = $true)]
        [string]
        $repo,
        [parameter(Mandatory = $true)]
        [string]
        $file
    )
	
    $releases = "https://api.github.com/repos/$repo/releases"

    Write-Host "Determining latest release of $repo"
    $tag = (Invoke-WebRequest -Uri $releases -UseBasicParsing | ConvertFrom-Json)[0].tag_name

    $download = "https://github.com/$repo/releases/download/$tag/$file"

    Write-Host "Dowloading..."
    Invoke-WebRequest $download -Out $file
}

function Test-ForDependencies {
    $is7zAvailable = Get-Command 7z
    if (-not $is7zAvailable) {
        Clear-Host
        Write-Host 
        Write-Host "Install 7zip and add it's folder to the environment variable 'Path'`n" -ForegroundColor Red
        Write-Host "7zip can be downloaded here: " -NoNewline
        Write-Host "https://www.7-zip.org/download.html" -ForegroundColor Blue
        Write-Host 
        Write-Host "When you're done, rerun this script.`n"

        throw "7zip not command available. Please follow the instructions above." 
    }

    $isCurlAvailable = Get-Command curl.exe
    if (-not $isCurlAvailable) {
        Clear-Host
        Write-Host 
        Write-Host "Install Curl and add it's folder to the environment variable 'Path'`n" -ForegroundColor Red
        Write-Host "Curl can be downloaded here: " -NoNewline
        Write-Host "https://curl.se/download.html" -ForegroundColor Blue
        Write-Host "To install it, simply unzip the folder somewhere and point path to it."
        Write-Host 
        Write-Host "When you're done, rerun this script.`n"

        throw "curl.exe command not available. Please follow the instructions above." 
    }
}

function New-ClientFiles {
    if ($ENABLE_CURSE_CLIENT_MODULE) {
        if ((-not (Test-Path "$InstanceRoot/TwitchExportBuilder.exe") -and 
                -not (Test-Path "$InstanceRoot/TwitchExportBuilder")) -or 
            $ENABLE_ALWAYS_UPDATE_JARS) {

            Write-Host 
            Write-Host "Downloading Twitch Export Builder..." -ForegroundColor Cyan
            Write-Host 
    
            $TwitchExportBuilderDLDestination = "$InstanceRoot/TwitchExportBuilder"
            if ($IsLinux) {
                $TwitchExportBuilderDL = $TwitchExportBuilderDLLinux
            }                
            elseif ($IsMacOS) {
                $TwitchExportBuilderDL = $TwitchExportBuilderDLMac
            }
            elseif ($IsWindows) {
                $TwitchExportBuilderDL = $TwitchExportBuilderDLWindows
                $TwitchExportBuilderDLDestination = "$InstanceRoot/TwitchExportBuilder.exe"
            }
    
            Remove-Item "$InstanceRoot\TwitchExportBuilder.exe", "$InstanceRoot/TwitchExportBuilder" -Recurse -Force -ErrorAction SilentlyContinue
            Get-GitHubRelease -repo "Gaz492/twitch-export-builder" -file $TwitchExportBuilderDL
            Move-Item -Path "$TwitchExportBuilderDL" -Destination $TwitchExportBuilderDLDestination -ErrorAction SilentlyContinue
            if (-not $IsWindows) {
                chmod +x ./TwitchExportBuilder
            }
        }

        Write-Host 
        Write-Host "Creating Client Files..." -ForegroundColor Cyan
        Write-Host 

        Remove-Item "$CLIENT_ZIP_NAME.zip" -Recurse -Force -ErrorAction SilentlyContinue
        $StartLocation = Get-Location
        Set-Location $InstanceRoot
        if ($IsLinux -or $IsMacOS) {
            .\TwitchExportBuilder  -n "$CLIENT_NAME" -p "$MODPACK_VERSION" -c ("$PSScriptRoot/.build.json" | Resolve-Path)
        }
        elseif ($IsWindows) {
            .\TwitchExportBuilder.exe -n "$CLIENT_NAME" -p "$MODPACK_VERSION" -c ("$PSScriptRoot\.build.json" | Resolve-Path)
        }
        #Now lets rename it to the name you selected in the settings.ps1
        Rename-Item -Path "$CLIENT_NAME-$MODPACK_VERSION.zip" -NewName "$CLIENT_ZIP_NAME.zip" -ErrorAction SilentlyContinue
        Set-Location $StartLocation

        Remove-BlacklistedFiles
    }
}

function Remove-BlacklistedFiles {
    if ($ENABLE_CURSE_CLIENT_MODULE -or $ENABLE_SERVER_FILE_MODULE) {
        if (Test-Path "$CLIENT_ZIP_NAME.zip") {
            foreach ($config in $CONFIGS_TO_REMOVE_FROM_CLIENT_FILES) {
                Write-Host "Removing config $config from client files"
                7z d "$CLIENT_ZIP_NAME.zip" "overrides/config/$config*" | Out-Null
            }
        }
    }
}

function New-Changelog {
    if ($ENABLE_CHANGELOG_GENERATOR_MODULE `
            -and $null -ne $MODPACK_VERSION `
            -and $null -ne $LAST_MODPACK_VERSION `
            -and (Test-Path "$InstanceRoot/$LAST_MODPACK_ZIP_NAME.zip") `
            -and (Test-Path "$InstanceRoot/$CLIENT_ZIP_NAME.zip")
    ) {
        if (-not (Test-Path $ChangelogGeneratorDL) -or $ENABLE_ALWAYS_UPDATE_JARS) {
            Remove-Item $ChangelogGeneratorDL -Recurse -Force -ErrorAction SilentlyContinue
            Get-GitHubRelease -repo "TheRandomLabs/ChangelogGenerator" -file $ChangelogGeneratorDL
        }
        
        Remove-Item "changelog.md" -ErrorAction SilentlyContinue

        Write-Host 
        Write-Host "Generating changelog..." -ForegroundColor Green
        Write-Host 

        java -jar $ChangelogGeneratorDL `
            --markdown `
            --lines=50 `
            --entries=1 `
            --new="$InstanceRoot\$CLIENT_ZIP_NAME.zip" `
            --old="$InstanceRoot\$LAST_MODPACK_ZIP_NAME.zip"

        Remove-Item $ChangelogPath -ErrorAction SilentlyContinue
        Move-Item -Path "changelog.md" -Destination $ChangelogPath
    }
}


function Push-ClientFiles {
    if ($ENABLE_MODPACK_UPLOADER_MODULE) {
        $CLIENT_METADATA = 
        "{
        'changelog': `'$CLIENT_CHANGELOG`',
        'changelogType': `'$CLIENT_CHANGELOG_TYPE`',
        'displayName': `'$CLIENT_FILE_DISPLAY_NAME`',
        'gameVersions': [$GAME_VERSIONS],
        'releaseType': `'$CLIENT_RELEASE_TYPE`'
        }"
        
        Write-Host
        Write-Host "Uploading client files..." -ForegroundColor Green
        Write-Host

        $response = curl.exe `
            --url "https://minecraft.curseforge.com/api/projects/$CURSEFORGE_PROJECT_ID/upload-file" `
            --user "$CURSEFORGE_USER`:$CURSEFORGE_TOKEN" `
            -H "Accept: application/json" `
            -H X-Api-Token:$CURSEFORGE_TOKEN `
            -F metadata=$CLIENT_METADATA `
            -F file=@"$InstanceRoot\$CLIENT_ZIP_NAME.zip" `
            --progress-bar | ConvertFrom-Json
        $clientFileReturnId = $response.id

        if (-not $response.id) {
            throw "Failed to upload client files: $response"
        }
        else {
            Write-Host 
            Write-Host "Uploaded modpack!" -ForegroundColor Green
            Write-Host 

            Update-FileLinkInServerFiles -ClientFileId $clientFileReturnId
        }
    }
}




function Update-FileLinkInServerFiles {
    param(
        [int]$ClientFileId
    )
    if ($ClientFileId) {
        $clientFileIdString = $ClientFileId.toString()
        $idPart1 = $clientFileIdString.Substring(0, 4)
        $idPart2 = $clientFileIdString.Substring(4, $clientFileIdString.length - 4)
        $idPart2 = Remove-LeadingZero -text $idPart2
        $curseForgeCdnUrl = "https://media.forgecdn.net/files/$idPart1/$idPart2/$CLIENT_ZIP_NAME.zip"
        $content = (Get-Content -Path $ServerSetupConfigPath) -replace "https://media.forgecdn.net/files/\d+/\d+/.*.zip", $curseForgeCdnUrl 
        [IO.File]::WriteAllLines(($ServerSetupConfigPath | Resolve-Path), $content)

        if ($ENABLE_SERVER_FILE_MODULE) {
            New-ServerFiles -ClientFileId $ClientFileId
        }
    }
}

function New-ServerFiles {
    param(
        [int]$ClientFileId
    )
    if ($ENABLE_SERVER_FILE_MODULE) {
        Remove-Item "$SERVER_ZIP_NAME.zip", "$InstanceRoot\$SERVER_ZIP_NAME.zip" -Force -ErrorAction SilentlyContinue
        Write-Host 
        Write-Host "Creating server files..." -ForegroundColor Cyan
        Write-Host 
        7z a -tzip "$SERVER_ZIP_NAME.zip" "$ServerFilesFolder\*"
        Move-Item -Path "$InstanceRoot\automation\$SERVER_ZIP_NAME.zip" -Destination "$InstanceRoot\$SERVER_ZIP_NAME.zip" -ErrorAction SilentlyContinue

        if ($ENABLE_MODPACK_UPLOADER_MODULE) {
            Push-ServerFiles -ClientFileId $ClientFileId
        }
    }
}

function Push-ServerFiles {
    param(
        [int]$ClientFileId
    )
    if ($ENABLE_SERVER_FILE_MODULE -and $ENABLE_MODPACK_UPLOADER_MODULE) {
        $serverFilePath = "$InstanceRoot\$SERVER_ZIP_NAME.zip"
        $SERVER_METADATA = 
        "{
        'changelog': `'$SERVER_CHANGELOG`',
        'changelogType': `'$SERVER_CHANGELOG_TYPE`',
        'displayName': `'$SERVER_FILE_DISPLAY_NAME`',
        'parentFileId': $clientFileReturnId,
        'releaseType': `'$SERVER_RELEASE_TYPE`'
        }"

        Write-Host 
        Write-Host "Uploading server files..." -ForegroundColor Cyan
        Write-Host 

        $serverFileResponse = curl.exe `
            --url "https://minecraft.curseforge.com/api/projects/$CURSEFORGE_PROJECT_ID/upload-file" `
            --user "$CURSEFORGE_USER`:$CURSEFORGE_TOKEN" `
            -H "Accept: application/json" `
            -H X-Api-Token:$CURSEFORGE_TOKEN `
            -F metadata=$SERVER_METADATA `
            -F file=@$serverFilePath `
            --progress-bar | ConvertFrom-Json

        if ($serverFileResponse.errorCode) {
            throw "Failed to upload server files: $serverFileResponse"
        }

        if ($serverFileResponse.id) {
            Write-Host "Uploaded server files!" -ForegroundColor Green
        }
    }
}

function New-GitHubRelease {
    if ($ENABLE_GITHUB_CHANGELOG_GENERATOR_MODULE) {

        $BASE64TOKEN = [System.Convert]::ToBase64String([char[]]$GITHUB_TOKEN);
        $Uri = "https://api.github.com/repos/$GITHUB_NAME/$GITHUB_REPOSITORY/releases?access_token=$GITHUB_TOKEN"
    
        $Headers = @{
            Authorization = 'Basic {0}' -f $Base64Token;
        };
    
        $Body = @{
            tag_name         = $MODPACK_VERSION;
            target_commitish = 'master';
            name             = $MODPACK_VERSION;
            body             = '';
            draft            = $false;
            prerelease       = $false;
        } | ConvertTo-Json;

    
        Write-Host 
        Write-Host "Making GitHub Release..." -ForegroundColor Green
        Write-Host 
    
        Invoke-RestMethod -Headers $Headers -Uri $Uri -Body $Body -Method Post
    
        Start-Process Powershell.exe -Argument "-NoProfile -Command github_changelog_generator --since-tag $CHANGES_SINCE_VERSION"
    }
}

function Update-Modlist {
    if ($ENABLE_MODLIST_CREATOR_MODULE) {
        if (-not (Test-Path $ModlistCreatorJar) -or $ENABLE_ALWAYS_UPDATE_JARS) {
            Remove-Item $ModlistCreatorJar -Recurse -Force -ErrorAction SilentlyContinue
            Get-GitHubRelease -repo "MelanX/ModListCreator" -file $ModlistCreatorJar
        }

        Remove-Item $ModlistPath -ErrorAction SilentlyContinue
        java -jar $ModlistCreatorJar --markdown --output ".\" --detailed --manifest "$InstanceRoot\$CLIENT_ZIP_NAME.zip"
        Copy-Item -Path "$InstanceRoot\MODLIST.md" -Destination $ModlistPath -ErrorAction SilentlyContinue
        Move-Item -Path "$InstanceRoot\MODLIST.md" -Destination "$InstanceRoot\MODLIST.md" -ErrorAction SilentlyContinue -Force
        Copy-Item -Path "$InstanceRoot\automation\MODLIST.md" -Destination $ModlistPath -ErrorAction SilentlyContinue
        Move-Item -Path "$InstanceRoot\automation\MODLIST.md" -Destination "$InstanceRoot\MODLIST.md" -ErrorAction SilentlyContinue -Force
    }
}

function Remove-LeadingZero {
    param(
        [string]$text
    )
    if ($text[0] -eq "0") {
        return $text.Substring(1)
    }
    else {
        return $text
    }
}

Test-ForDependencies
New-ClientFiles
Push-ClientFiles
if ($ENABLE_SERVER_FILE_MODULE -and -not $ENABLE_MODPACK_UPLOADER_MODULE) {
    New-ServerFiles
}
New-GitHubRelease
New-Changelog
Update-Modlist