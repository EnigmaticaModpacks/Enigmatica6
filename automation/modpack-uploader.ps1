[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$manifest = "manifest.json"
$minecraftInstanceFile = "minecraftinstance.json"
$overridesFolder = "overrides"
$secretsFile = "secrets.ps1"

function Validate-SecretsFile {
    if (!(Test-Path "$PSScriptRoot\$secretsFile")) {
        Write-Host "You need a valid CurseForge API Token in a $secretsFile file" -ForegroundColor Red
        Write-Host "Creating $secretsFile" -ForegroundColor Cyan
        New-Item -Path $PSScriptRoot -ItemType File -Name $secretsFile -Value "# To generate an API token go to: https://authors.curseforge.com/account/api-tokens `n $CURSEFORGE_TOKEN = `"your-curseforge-token-here`""
    }
}

. "$PSScriptRoot\settings.ps1"
. "$PSScriptRoot\$secretsFile"


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
        Write-Host 
        Write-Host "Creating Client Files..." -ForegroundColor Cyan
        Write-Host 

        $clientZip = "$CLIENT_ZIP_NAME.zip"

        Remove-Item $clientZip -Recurse -Force -ErrorAction SilentlyContinue
        
        
        New-ManifestJson

        if (Test-Path -PathType Container $overridesFolder) {
            Write-Host "The folder 'overrides' will be removed by manifest generation." -ForegroundColor Red
            Write-Host "Press any key to proceed, CTRL + C To cancel."
            pause
        }

        Remove-Item $overridesFolder -Force -Recurse -ErrorAction SilentlyContinue
        New-Item -ItemType Directory $overridesFolder
        
        $FOLDERS_TO_INCLUDE_IN_CLIENT_FILES | ForEach-Object {
            Write-Host "Adding " -ForegroundColor Cyan -NoNewline
            Write-Host $_ -ForegroundColor Blue -NoNewline
            Write-Host " to client files." -ForegroundColor Cyan
            Copy-Item -Path $_ -Destination "$overridesFolder/$_" -Recurse
        }

        Remove-BlacklistedFiles

        # Zipping up the newly created overrides folder and $manifest
        7z a $clientZip ($overridesFolder, $manifest) -r -sdel

        Remove-Item $manifest -Force -Recurse -ErrorAction SilentlyContinue
        Write-Host "Client files $clientZip created!" -ForegroundColor Green

    }
}

function New-ManifestJson {
    if (!(Test-Path $minecraftInstanceFile)) {
        Write-Host "Generating a $manifest requires a $minecraftInstanceFile file." -ForegroundColor Red
    }

    $minecraftInstanceJson = Get-Content $minecraftInstanceFile | ConvertFrom-Json

    $mods = [System.Collections.ArrayList]@()
    foreach ($addon in $minecraftInstanceJson.installedAddons) {
        $mods.Add(@{
                required  = $true
                projectID = $addon.addonID
                fileID    = $addon.installedFile.id
            }) > $null
    }

    $jsonOutput = @{
        minecraft       = @{
            version    = $minecraftInstanceJson.baseModLoader.minecraftVersion
            modLoaders = @(@{
                    id      = $minecraftInstanceJson.baseModLoader.name
                    primary = $true
                })
        }
        manifestType    = "minecraftModpack"
        manifestVersion = 1
        name            = $MODPACK_NAME
        version         = $MODPACK_VERSION
        author          = $CLIENT_FILE_AUTHOR
        files           = $mods
        overrides       = "overrides"
    } 

    Remove-Item $manifest -Force -Recurse -ErrorAction SilentlyContinue
    $jsonString = $jsonOutput | ConvertTo-Json -Depth 3
    $outfile = "$INSTANCE_ROOT/$manifest"
    [System.IO.File]::WriteAllLines($outfile, $jsonString)
    Write-Host "$manifest created!" -ForegroundColor Green
}

function Remove-BlacklistedFiles {
    if ($ENABLE_CURSE_CLIENT_MODULE -or $ENABLE_SERVER_FILE_MODULE) {    
        $FOLDERS_TO_REMOVE_FROM_CLIENT_FILES | ForEach-Object {
            Write-Host "Removing overrides/$_"
            Remove-Item -Path "overrides/$_" -Recurse -ErrorAction SilentlyContinue
        }
    
        $CONFIGS_TO_REMOVE_FROM_CLIENT_FILES | ForEach-Object {
            Write-Host "Removing overrides/config/$_"
            Remove-Item -Path "overrides/config/$_" -Recurse -ErrorAction SilentlyContinue
        }
    
        Write-Host "Removing all .bak files from overrides" -ForegroundColor Cyan
        Get-ChildItem "overrides/*.bak" | ForEach-Object { 
            Write-Host "Removing $($_.FullName)"
            Remove-Item -Path $_.FullName -Force -ErrorAction SilentlyContinue
        }    
    }
}

function New-Changelog {
    if ($ENABLE_CHANGELOG_GENERATOR_MODULE `
            -and $null -ne $MODPACK_VERSION `
            -and $null -ne $LAST_MODPACK_VERSION `
            -and (Test-Path "$INSTANCE_ROOT/$LAST_MODPACK_ZIP_NAME.zip") `
            -and (Test-Path "$INSTANCE_ROOT/$CLIENT_ZIP_NAME.zip")
    ) {
        if (-not (Test-Path $CHANGELOG_GENERATOR_JAR) -or $ENABLE_ALWAYS_UPDATE_JARS) {
            Remove-Item $CHANGELOG_GENERATOR_JAR -Recurse -Force -ErrorAction SilentlyContinue
            Get-GitHubRelease -repo "TheRandomLabs/ChangelogGenerator" -file $CHANGELOG_GENERATOR_JAR
        }
        $changelogFile = "changelog.md"
        Remove-Item $changelogFile -ErrorAction SilentlyContinue

        Write-Host 
        Write-Host "Generating mod changelog..." -ForegroundColor Cyan
        Write-Host 

        java -jar $CHANGELOG_GENERATOR_JAR `
            --markdown `
            --lines=50 `
            --entries=1 `
            --new="$CLIENT_ZIP_NAME.zip" `
            --old="$LAST_MODPACK_ZIP_NAME.zip"

        Remove-Item $CHANGELOG_PATH -ErrorAction SilentlyContinue
        Move-Item -Path $changelogFile -Destination $CHANGELOG_PATH

        Write-Host "Mod changelog generated!" -ForegroundColor Green
    }
}

function Push-ClientFiles {
    if ($ENABLE_MODPACK_UPLOADER_MODULE) {

        if ($ENABLE_CURSE_CLIENT_MODULE -eq $false) {
            Remove-BlacklistedFiles
        }

        #$CLIENT_CHANGELOG = Get-Content -Path "$PSScriptRoot\..\changelogs\changelog.md"

        $CLIENT_METADATA = 
        "{
            changelog: `'$CLIENT_CHANGELOG`',
            changelogType: `'$CLIENT_CHANGELOG_TYPE`',
            displayName: `'$CLIENT_FILE_DISPLAY_NAME`',
            gameVersions: [$GAME_VERSIONS],
            releaseType: `'$CLIENT_RELEASE_TYPE`'
        }"

        Write-Host
        Write-Host "Client Metadata:" -ForegroundColor Cyan
        Write-Host
        Write-Host $CLIENT_METADATA -ForegroundColor Blue
        
        Write-Host
        Write-Host "Uploading client files to https://minecraft.curseforge.com/api/projects/$CURSEFORGE_PROJECT_ID/upload-file" -ForegroundColor Green
        Write-Host

        $response = curl.exe `
            --url "https://minecraft.curseforge.com/api/projects/$CURSEFORGE_PROJECT_ID/upload-file" `
            --user "$CURSEFORGE_USER`:$CURSEFORGE_TOKEN" `
            -H "Accept: application/json" `
            -H X-Api-Token:$CURSEFORGE_TOKEN `
            -F metadata=$CLIENT_METADATA `
            -F file=@"$CLIENT_ZIP_NAME.zip" `
            --progress-bar | ConvertFrom-Json
        $clientFileReturnId = $response.id

        if (-not $response.id) {
            Write-Host "Failed to upload client files: $response" -ForegroundColor Red
            throw "Failed to upload client files: $response"
        }
        else {
            Write-Host 
            Write-Host "Uploaded modpack!" -ForegroundColor Green
            Write-Host 
            Write-Host "Return Id: $clientFileReturnId" -ForegroundColor Cyan
            Write-Host

            Update-FileLinkInServerFiles -ClientFileReturnId $clientFileReturnId
        }
    }
}

function Update-FileLinkInServerFiles {
    param(
        [int]$ClientFileReturnId
    )
    if ($clientFileReturnId) {
        $clientFileIdString = $clientFileReturnId.toString()
        $idPart1 = $clientFileIdString.Substring(0, 4)
        $idPart1 = Remove-LeadingZero -text $idPart1
        $idPart2 = $clientFileIdString.Substring(4, $clientFileIdString.length - 4)
        $idPart2 = Remove-LeadingZero -text $idPart2
        $curseForgeCdnUrl = "https://media.forgecdn.net/files/$idPart1/$idPart2/$CLIENT_ZIP_NAME.zip"
        $content = (Get-Content -Path $SERVER_SETUP_CONFIG_PATH) -replace "https://media.forgecdn.net/files/\d+/\d+/.*.zip", $curseForgeCdnUrl 
        [System.IO.File]::WriteAllLines(($SERVER_SETUP_CONFIG_PATH | Resolve-Path), $content)

        if ($ENABLE_SERVER_FILE_MODULE) {
            New-ServerFiles -ClientFileReturnId $clientFileReturnId
        }
    }
}

function New-ServerFiles {
    param(
        [int]$ClientFileReturnId
    )
    if ($ENABLE_SERVER_FILE_MODULE) {
        $serverZip = "$SERVER_ZIP_NAME.zip"
        Remove-Item $serverZip -Force -ErrorAction SilentlyContinue
        Write-Host 
        Write-Host "Creating server files..." -ForegroundColor Cyan
        Write-Host 
        7z a -tzip $serverZip "$SERVER_FILES_FOLDER\*"
        Move-Item -Path "automation\$serverZip" -Destination $serverZip -ErrorAction SilentlyContinue
        Write-Host "Server files created!" -ForegroundColor Green

        if ($ENABLE_MODPACK_UPLOADER_MODULE) {
            Push-ServerFiles -clientFileReturnId $clientFileReturnId
        }
    }
}

function Push-ServerFiles {
    param(
        [int]$clientFileReturnId
    )
    if ($ENABLE_SERVER_FILE_MODULE -and $ENABLE_MODPACK_UPLOADER_MODULE) {
        $serverFilePath = "$SERVER_ZIP_NAME.zip"

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

        $Base64Token = [System.Convert]::ToBase64String([char[]]$GITHUB_TOKEN);
        $Uri = "https://api.github.com/repos/$GITHUB_NAME/$GITHUB_REPOSITORY/releases?access_token=$GITHUB_TOKEN"
    
        $Headers = @{
            Authorization = 'Basic {0}' -f $Base64Token;
        };
    
        $Body = @{
            tag_name         = $MODPACK_VERSION
            target_commitish = 'master'
            name             = $MODPACK_VERSION
            body             = ''
            draft            = $false
            prerelease       = $false
        } | ConvertTo-Json

    
        Write-Host 
        Write-Host "Making GitHub Release..." -ForegroundColor Green
        Write-Host 
    
        Invoke-RestMethod -Headers $Headers -Uri $Uri -Body $Body -Method Post
        Start-Process Powershell.exe -Argument "-NoProfile -Command github_changelog_generator --since-tag $CHANGES_SINCE_VERSION --token $GITHUB_TOKEN"
    }
}

function Update-Modlist {
    if ($ENABLE_MODLIST_CREATOR_MODULE) {
        if (-not (Test-Path $MODLIST_CREATOR_JAR) -or $ENABLE_ALWAYS_UPDATE_JARS) {
            Remove-Item $MODLIST_CREATOR_JAR -Recurse -Force -ErrorAction SilentlyContinue
            Get-GitHubRelease -repo "MelanX/ModListCreator" -file $MODLIST_CREATOR_JAR
        }

        Remove-Item $MODLIST_PATH -ErrorAction SilentlyContinue
        java -jar $MODLIST_CREATOR_JAR --markdown --output ".\" --detailed --manifest "$CLIENT_ZIP_NAME.zip"
        Copy-Item -Path "MODLIST.md" -Destination $MODLIST_PATH -ErrorAction SilentlyContinue
        Move-Item -Path "MODLIST.md" -Destination "MODLIST.md" -ErrorAction SilentlyContinue -Force
        Copy-Item -Path "automation\MODLIST.md" -Destination $MODLIST_PATH -ErrorAction SilentlyContinue
        Move-Item -Path "automation\MODLIST.md" -Destination "MODLIST.md" -ErrorAction SilentlyContinue -Force
    }
}

function Remove-LeadingZero {
    param(
        [string]$text
    )
    return [int]$text
}

$startLocation = Get-Location
Set-Location $INSTANCE_ROOT

Test-ForDependencies
Validate-SecretsFile
New-ClientFiles
Push-ClientFiles
if ($ENABLE_SERVER_FILE_MODULE -and -not $ENABLE_MODPACK_UPLOADER_MODULE) {
    New-ServerFiles
}
New-GitHubRelease
New-Changelog
Update-Modlist

Write-Host "Modpack Upload Complete!" -ForegroundColor Green
Set-Location $startLocation

pause