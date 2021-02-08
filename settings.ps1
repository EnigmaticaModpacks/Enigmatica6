# Settings for the ModpackUploader
# For details/help see: https://github.com/NillerMedDild/ModpackUploader

$CLIENT_MODS = @(
	"AmbientSounds",
	"Ding", 
	"ReAuth", 
	"moreoverlays",
	"Neat", 
	"Toast-Control", 
	"PackMenu"
)

$CONFIGS_TO_REMOVE = @(
	"betterendforge/client-config.toml",
	"jei/bookmarks.ini",
	"pneumaticcraft/ArmorFeatureStatus.cfg",
	"pneumaticcraft/PneumaticArmorHUDLayout.cfg",
	"artifacts-client.toml",
	"abnormals_core-client.toml",
	"ambientsounds-client.json",	
	"astralsorcery-client.toml",
	"betteradvancements-client.toml",
	"cagedmobs-client.toml",
	"chiselsandbits-client.toml",
	"computercraft-client.toml",
	"craftingtweaks-client.toml",
	"create-client.toml",
	"eidolon-client.toml",
	"emojiful-client.toml",
	"extremesoundmuffler-client.toml", 
	"farmersdelight-client.toml",
	"jei-client.toml",
	"mcjtylib-client.toml",
	"mining_helmet-client.toml",
	"mythicbotany-client.toml",
	"occultism-client.toml",
	"refinedstorage-client.toml",
	"rftoolsbuilder-client.toml",
	"rftoolspower-client.toml",
	"rftoolscontrol-client.toml",
	"rftoolsstorage-client.toml",
	"rftoolsutility-client.toml",
	"sophisticatedbackpacks-client.toml",
	"supplementaries-client.toml",
	"thermal-client.toml",
	"xnet-client.toml"
)
	
# =====================================================================//
#  CURSEFORGE SETTINGS
# =====================================================================//

$CURSEFORGE_USER = "NillerMedDild"

# ProjectID can be found on the modpack's Curseforge Projects page, under "About This Project"
$CURSEFORGE_PROJECT_ID = 389471

# =====================================================================//
#  MODPACK & CLIENT FILE SETTINGS
# =====================================================================//

# Default: "1.0.0"
$MODPACK_VERSION = "0.4.0"

# Only used by the Changelog Generator
$LAST_MODPACK_VERSION = "0.3.13"

$FORGE_VERSION = 36.0.14

$CLIENT_FILENAME = "Enigmatica6"

# Default: "$CLIENT_FILENAME $MODPACK_VERSION"
$CLIENT_FILE_DISPLAY_NAME = "Enigmatica 6 - $MODPACK_VERSION"

# An array of compatible game versions of Minecraft.
# See GameVersions.json for possible versions.
# Default: @(6756) - which is Minecraft 1.12.2
$GAME_VERSIONS = @(8203) # 7675 is 1.15.1, 7722 is 1.15.2, 7892 is 1.16.1, 8056 is 1.16.3, 8134 is 1.16.4, 8203 is 1.16.5

# Can be "markdown", "text" or "html"
$CLIENT_CHANGELOG_TYPE = "markdown"

$CLIENT_CHANGELOG = "### Enigmatica 6 v$MODPACK_VERSION <br /> <br />" +
"Using Forge-1.16.5-36.0.14 <br /> <br /> " +
"The Changelog is currently being written, it should be done within 10 minutes. "


# Can be "alpha", "beta" or "release"
$CLIENT_RELEASE_TYPE = "beta"

#=====================================================================//
#  SERVER FILE SETTINGS
#=====================================================================//

# Default: "$CLIENT_FILENAME Server $MODPACK_VERSION"
$SERVER_FILENAME = "$CLIENT_FILENAME`Server-$MODPACK_VERSION"

# Default: $SERVER_FILENAME
$SERVER_FILE_DISPLAY_NAME = "Enigmatica 6 Server - $MODPACK_VERSION"

# A continuous line of the folders and files (with extensions) to zip into Server Files.
# Default: @("mods", "config")
$CONTENTS_TO_ZIP = @(
	"mods", 
	"config", 
	"defaultconfigs", 
	"kubejs",
	"packmenu",
	"patchouli_books",
	"server-start-license.md", 
	"server-start-readme.md", 
	"server-start.bat", 
	"server-start.sh", 
	"settings.cfg", 
	"server.properties", 
	"server-guide.txt")

$CONTENTS_TO_MOVE = @(
	"server-start-license.md", 
	"server-start-readme.md", 
	"server-start.bat", 
	"server-start.sh", 
	"settings.cfg",  
	"server.properties", 
	"server-guide.txt")

# Can be "markdown", "text" or "html"
# Default: $CLIENT_CHANGELOG_TYPE
$SERVER_CHANGELOG_TYPE = $CLIENT_CHANGELOG_TYPE

# Must be a single string. Use Powershell escaping for new lines etc. New line is `n and indent is `t
# Default: $CLIENT_CHANGELOG
$SERVER_CHANGELOG = $CLIENT_CHANGELOG

# Can be "alpha", "beta" or "release"
# Default: $CLIENT_RELEASE_TYPE
$SERVER_RELEASE_TYPE = $CLIENT_RELEASE_TYPE

# =====================================================================//
#  MODULES
# =====================================================================//

# Toggle twitch-export-builder (automatic building of the manifest zip) on/off
# Default: $true
$ENABLE_MANIFEST_BUILDER_MODULE = $false

# Toggle the modpack uploader on/off
# Setting this to $false will also disable the Server File and Changelog Generator Modules.
# Default: $true
$ENABLE_MODPACK_UPLOADER_MODULE = $true

# Toggle server file feature on/off
# Default: $true
$ENABLE_SERVER_FILE_MODULE = $true

# Toggle automatic changelog generator on/off
# This module requires an older modpack manifest zip to be present, 
# $LAST_MODPACK_VERSION must be set, and the manifest naming must be consistent.
# Default: $false
$ENABLE_CHANGELOG_GENERATOR_MODULE = $true

# Toggle removal and re-download of jars on/off.
# Setting this to true will ensure that you always have the latest 
# Twitch Export Builder and ChangelogGenerator, but increases the
# amount of time this script takes to execute.
# Default: $false
$ENABLE_ALWAYS_UPDATE_JARS = $false

# Toggles extra logging on/off.
# Recommended if you're having trouble making the Modpack Uploader
# work.
# Default: $false
$ENABLE_EXTRA_LOGGING = $false

# Toggles github changelog generator integration on/off.
# Requires extensive setup, this is an advanced step.
# See below link for info:
# https://github.com/github-changelog-generator/github-changelog-generator
# Default: $false
$ENABLE_GITHUB_CHANGELOG_GENERATOR_MODULE = $true	