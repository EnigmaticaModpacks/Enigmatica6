[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

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

function Close-FixedIssues {
    $Base64Token = [System.Convert]::ToBase64String([char[]]$GITHUB_TOKEN);
    
    $Headers = @{
        Authorization = 'Basic {0}' -f $Base64Token
        Accept        = 'application/vnd.github.v3+json'
    }

    $Body = @{
        labels = 'Status: Fixed In Next Release'
        state  = 'open'
    }
    
    $Uri = "https://api.github.com/repos/$GITHUB_NAME/$GITHUB_REPOSITORY/issues"
    $issues = Invoke-RestMethod -Headers $Headers -Uri $Uri -Body $Body
  
    $Body = @{
        state = "closed"
    } | ConvertTo-Json

    $issues | ForEach-Object {
        $IssueNumber = $_.number
        Write-Host "Closing issue: " -NoNewline
        Write-Host "https://github.com/$GITHUB_NAME/$GITHUB_REPOSITORY/issues/$IssueNumber" -ForegroundColor Blue 
        $Uri = "https://api.github.com/repos/$GITHUB_NAME/$GITHUB_REPOSITORY/issues/$IssueNumber"

        Invoke-RestMethod -Headers $Headers -Uri $Uri -Body $Body -Method Patch | Out-Null
    }

}
function Merge-DevelopIntoMasterPrompt {
    Write-Host "Please Merge Develop into Master, and then Master into Develop"
}

Validate-SecretsFile
Close-FixedIssues
Merge-DevelopIntoMasterPrompt

# just closes all `Status: Fixed In Next Release` issues