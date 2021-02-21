. "$PSScriptRoot\settings.ps1"
. "$PSScriptRoot\secrets.ps1"
$CurlUrl = "https://discordapp.com/api/webhooks/$WEBHOOK_ID/$WEBHOOK_TOKEN"
$FilePath = "$CLIENT_FILENAME-$MODPACK_VERSION.zip"

curl.exe --url $CurlUrl -F ContentType="multipart/form-data" -F content=@$FilePath --progress-bar