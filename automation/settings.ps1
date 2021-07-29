# Settings for the ModpackUploader
# For details/help see: https://github.com/NillerMedDild/ModpackUploader

# The main modpack folder
# Do not change or move
$InstanceRoot = ("$PSScriptRoot/.." | Resolve-Path)

# =====================================================================//
#  CURSEFORGE ACCOUNT SETTINGS
# =====================================================================//

$CURSEFORGE_USER = "NillerMedDild"

# For details see: https://www.curseforge.com/account/api-tokens
# Defined in secrets.ps1 
# $CURSEFORGE_TOKEN = 

# ProjectID can be found on the modpack's Curseforge Projects page, under "About This Project"
$CURSEFORGE_PROJECT_ID = 389471

# =====================================================================//
#  MAIN MODPACK SETTINGS
# =====================================================================//

# This is the modpack name as seen in it's CurseForge url: https://www.curseforge.com/minecraft/modpacks/[enigmatica6]
$MODPACK_NAME = "Enigmatica6"

# Name of the Modpack in the ZIP File
$CLIENT_NAME = "Enigmatica6"

# Version Of The Modpack
$MODPACK_VERSION = "0.5.8"

# Last Version Of The Modpack
# Needed For Changelog Parsing
$LAST_MODPACK_VERSION = "0.5.7"

# =====================================================================//
#  CHANGELOG SETTINGS
# =====================================================================//

# Changelog Type
# Can be "markdown", "text" or "html"
$CLIENT_CHANGELOG_TYPE = "markdown"

# Changelog
# Must be a single string.
$CLIENT_CHANGELOG = "The Changelog is currently being written, it should be done soon."

# =====================================================================//
#  CURSEFORGE PROJECT SETTINGS
# =====================================================================//

# Modpack's Minecraft Version
# @(6756) - is Minecraft 1.12.2
# @(7722) - is Minecraft 1.15.2
# @(8134) - is Minecraft 1.16.4
# More can be found by running GetGameVersions
$GAME_VERSIONS = @(8203)

# Can be "alpha", "beta" or "release"
$CLIENT_RELEASE_TYPE = "beta"

#=====================================================================//
#  DEPENDENCIES URL
#=====================================================================//

# File name of the latest https://github.com/Gaz492/twitch-export-builder/releases
$TwitchExportBuilderDLWindows = "twitch-export-builder_windows_amd64.exe"
$TwitchExportBuilderDLLinux = "twitch-export-builder_linux_amd64"
$TwitchExportBuilderDLMac = "twitch-export-builder_darwin_amd64"

# File name of the latest https://github.com/TheRandomLabs/ChangelogGenerator/releases
$ChangelogGeneratorDL = "ChangelogGenerator-2.0.0-pre10.jar"

# File name of the latest https://github.com/MelanX/ModListCreator/releases
$ModlistCreatorJar = "ModListCreator-1.2.1.jar"

#=====================================================================//
#  CLIENT FILE SETTINGS
#=====================================================================//

# Most of these are defined in .build.json.

# Configs to remove from the client files
$CONFIGS_TO_REMOVE_FROM_CLIENT_FILES = @(
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
	"cucumber-client.toml",
	"eidolon-client.toml",
	"emojiful-client.toml",
	"entity_culling-client.toml",
	"extremesoundmuffler-client.toml", 
	"farmersdelight-client.toml",
	"ftbchunks-client.toml",
	"immersivepetroleum-client.toml",
	"inventory_hud-client.toml",
	"itemzoom-client.toml",
	"ironjetpacks-client.toml",
	"jei-client.toml",
	"mcjtylib-client.toml",
	"mining_helmet-client.toml",
	"morered-client.toml",
	"mythicbotany-client.toml",
	"neat-client.toml",
	"occultism-client.toml",
	"refinedstorage-client.toml",
	"rftoolsbuilder-client.toml",
	"rftoolspower-client.toml",
	"rftoolscontrol-client.toml",
	"rftoolsstorage-client.toml",
	"rftoolsutility-client.toml",
	"sophisticatedbackpacks-client.toml",
	"supplementaries-client.toml",
	"tconstruct-client.toml",
	"thermal-client.toml",
	"travel_anchors-client.toml",
	"upgrade_aquatic-client.toml",
	"xnet-client.toml",
	"findme-client.toml",
	"PregenConfig.toml",
	"sounddeviceoptions-client.toml",
	"personality-client.toml",
	"miniutilities-client.toml",
	"twilightforest-client.toml",
	"framedblocks-client.toml",
	"cfm-client.toml",
	"entity_culling-client.toml",
	"terraforged/performance_internal.conf",
	"gravestone-client.toml",
	"jecalculation/record.json",
	"topaddons-client.toml",
	"diet-client.toml",
	"contentcreatorintegration/contentcreatorintegration.toml",
	"contentcreatorintegration/contentcreatorintegration-common.toml",
	"contentcreatorintegration/default/constants.json",
	"storagedrawers-client.toml"
)

$FOLDERS_TO_REMOVE_FROM_CLIENT_FILES = @("local/ftbutilities", "local/ftbchunks/data", "local/ftbultimine")

#=====================================================================//
#  SERVER FILE SETTINGS
#=====================================================================//

# $CLIENT_MODS_TO_REMOVE_FROM_SERVER_FILES has been moved to remove-client-mods.ps1 

$ServerFilesFolder = "$InstanceRoot/server_files"

$ServerSetupConfigPath = "$InstanceRoot/server_files/server-setup-config.yaml"

# A continuous line of the folders and files (with extensions) to zip into Server Files.
# Default: @("mods", "config")
# Deprecated, everything in the server_files folder is zipped
$CONTENTS_TO_ZIP = @()

# =====================================================================//
#  Operating System
# =====================================================================//

$IsLinux = $false

$IsMacOS = $false

$IsWindows = $true

# =====================================================================//
#  MODULES
# =====================================================================//

# Toggle twitch-export-builder (automatic building of the manifest zip) on/off
# Default: $true
$ENABLE_CURSE_CLIENT_MODULE = $false

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

# Toggle creation of a modlist file on/off
# Default: $true
$ENABLE_MODLIST_CREATOR_MODULE = $true

# Toggle removal and re-download of jars on/off.
# Setting this to true will ensure that you always have the latest 
# Twitch Export Builder and ChangelogGenerator, but increases the
# amount of time this script takes to execute.
# Default: $false
$ENABLE_ALWAYS_UPDATE_JARS = $false

# Toggles github changelog generator integration on/off.
# Requires extensive setup, this is an advanced step.
# See below link for info:
# https://github.com/github-changelog-generator/github-changelog-generator
# Default: $false
$ENABLE_GITHUB_CHANGELOG_GENERATOR_MODULE = $true	



# =====================================================================//
#  ADVANCED
#  Do not change anything unless you
#  know what you are doing!
# =====================================================================//

# Syntax of the Client ZIP File
$CLIENT_ZIP_NAME = "$CLIENT_NAME-$MODPACK_VERSION"

# Syntax of the Previous Versions Client ZIP File
$LAST_MODPACK_ZIP_NAME = "$CLIENT_NAME-$LAST_MODPACK_VERSION"

# Default: "$CLIENT_NAME $MODPACK_VERSION"
$CLIENT_FILE_DISPLAY_NAME = "Enigmatica 6 $MODPACK_VERSION"

# Can be "markdown", "text" or "html"
# Default: $CLIENT_CHANGELOG_TYPE
$SERVER_CHANGELOG_TYPE = $CLIENT_CHANGELOG_TYPE

# Must be a single string. Use Powershell escaping for new lines etc. New line is `n and indent is `t
# Default: $CLIENT_CHANGELOG
$SERVER_CHANGELOG = $CLIENT_CHANGELOG

# Can be "alpha", "beta" or "release"
# Default: $CLIENT_RELEASE_TYPE
$SERVER_RELEASE_TYPE = $CLIENT_RELEASE_TYPE

# Default: "$CLIENT_NAME Server $MODPACK_VERSION"
$SERVER_ZIP_NAME = "$CLIENT_NAME`Server-$MODPACK_VERSION"

# Default: $SERVER_FILENAME
$SERVER_FILE_DISPLAY_NAME = "Enigmatica 6 Server $MODPACK_VERSION"

# Path to the ModListCreators output file
$ModlistPath = "$InstanceRoot/changelogs/modlist_$MODPACK_VERSION.md"
$ChangelogPath = "$InstanceRoot/changelogs/changelog_mods_$MODPACK_VERSION.md"