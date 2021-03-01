# Enigmatica6 0.4.0⟶Enigmatica6 0.4.1

## Added

* [Mantle](https://www.curseforge.com/minecraft/mc-mods/mantle)

## Updated

### [Architectury API (Forge)](https://www.curseforge.com/minecraft/mc-mods/architectury-forge) ([[Forge 1.16.4/5] v1.7.117](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3208686)⟶[[Forge 1.16.4/5] v1.8.126](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3217852))

#### [[Forge 1.16.4/5] v1.8.126](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3217852)

Architectury v1.8.126 for 1.16.4/5

Updated at 2021-02-26 12:38.

[Click here for changelog](https://www.github.com/architectury/architectury/commits/568f624)

* Update architectury-plugin to 3.0.89 and fix #51
* Revert "Remove locals requirements from BlockLandingInvoker"
* Remove local testing build of transformer
* Remove locals requirements from BlockLandingInvoker
* Update architectury-plugin to 3.0.88
* Implement onDataPacket (#48)
* Add null checks to networking for better errors.
* Remove jcenter from settings.gradle
* Bump to 1.8
* Fix block entity without position
* Implement Tag#equals and Tag#hashCode on forge because forge is nice
* Add license
* Add test mod and fix game rules on forge
* Add licenses and implement optional tags, requires some testing.
* Fix forge publishing as fabric
* Migrate to Arch Plugin 3
* Update README.md
* Publish the platform specific jars on a different artifact id to resolve issues with transitive dependencies.
* (Retroactively) bump version to 1.6
* Fix falling block land event to handle all (vanilla) blocks correctly (Modded blocks need to have super.onLand(...) and then they'll be fine too)
* Delay the breakage of ALL THE THINGS™ until 1.17 You're safe, NetworkChannel... for now
* Add LightningEvent, FallingBlock land, move break/place to BlockEvent
* [ci skip] Migrate to shedmaven
* Remove collisions from packet ids
* Mark old @ExpectPlatform for removal (2.0)
* Mark old sided register methods for removal (1.6)
* Fix NetworkChannel client-server desync
* Log unknown message IDs
* Migrate to my maven + make NetworkChannel side-agnostic
* Add some null checks
* Remove (probably incorrect) client annotation from some hooks
* Fix ColorHandlers on Forge being on the wrong event bus
* Make DeferredRegister cast better
* Fix AbstractRecipeSerializer's signature
* Remove call to target interfaces in mixin plugin
* Add javadocs
* Add game rule API
* [ci skip] This is beautiful
* Bump base version to 1.5
* Fix mojank stripping containsKey from Registries on Server
* [ci skip] Add SET_SCREEN test to testmod
* Remove unused import
* Attempted fix for #25 (#28)
* Update GitHub workflows to support [ci skip] tag
* Update architectury-plugin
* Update architectury-plugin
* Fix crash registering reload listeners

[(121 more lines)](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3217852)

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/all)

### [Artifacts](https://www.curseforge.com/minecraft/mc-mods/artifacts) ([Artifacts-1.16.5-2.8.1.jar](https://www.curseforge.com/minecraft/mc-mods/artifacts/files/3208854)⟶[Artifacts-1.16.5-2.8.2.jar](https://www.curseforge.com/minecraft/mc-mods/artifacts/files/3214070))

#### [Artifacts-1.16.5-2.8.2.jar](https://www.curseforge.com/minecraft/mc-mods/artifacts/files/3214070)

* crashnebula240: Update Spanish translation
* [Mikeliro](https://github.com/ochotonida/artifacts/issues?q=is:pr author:Mikeliro): Update Brazilian Portuguese translation
* Fixed Golden Hook log spam

### [Dark Utilities](https://www.curseforge.com/minecraft/mc-mods/dark-utilities) ([DarkUtilities-1.16.5-8.0.3.jar](https://www.curseforge.com/minecraft/mc-mods/dark-utilities/files/3198877)⟶[DarkUtilities-1.16.5-8.0.4.jar](https://www.curseforge.com/minecraft/mc-mods/dark-utilities/files/3215025))

#### [DarkUtilities-1.16.5-8.0.4.jar](https://www.curseforge.com/minecraft/mc-mods/dark-utilities/files/3215025)

* Added Localization for zh_cn (#247) - DuckSoft

Huge thanks to my supporters on [Patreon](https://www.patreon.com/Darkhax?MCChangelog?DarkUtilities)

* Diablo Crasher
* BigAl607
* Edward
* Pongo Sapiens
* Darkosto

### [FTB GUI Library](https://www.curseforge.com/minecraft/mc-mods/ftb-gui-library) ([ftb-gui-library-1605.2.1.39-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-gui-library/files/3194623)⟶[ftb-gui-library-1605.2.1.40-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-gui-library/files/3214262))

#### [ftb-gui-library-1605.2.1.40-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-gui-library/files/3214262)

* Improved error message for & codes - LatvianModder

### [FTB Quests](https://www.curseforge.com/minecraft/mc-mods/ftb-quests) ([ftb-quests-1605.2.0-build.30-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-quests/files/3213290)⟶[ftb-quests-1605.2.0-build.32-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-quests/files/3217206))

#### [ftb-quests-1605.2.0-build.32-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-quests/files/3217206)

* Fix Kill tasks completing instantly (closes #548) - Max

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/ftb-quests/files/all)

### [FTB Ultimine](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine) ([ftb-ultimine-1605.2.0-build.21-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine/files/3213282)⟶[ftb-ultimine-1605.2.0-build.22-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine/files/3216601))

#### [ftb-ultimine-1605.2.0-build.22-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine/files/3216601)

* Updated arch, fixed crash in main menu - LatvianModder

### [FerriteCore](https://www.curseforge.com/minecraft/mc-mods/ferritecore) ([ferritecore-1.1.1.jar](https://www.curseforge.com/minecraft/mc-mods/ferritecore/files/3165037)⟶[ferritecore-2.0.2-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ferritecore/files/3218090))

#### [ferritecore-2.0.2-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ferritecore/files/3218090)

* Fix snow culling faces incorrectly due to incorrect render shapes
* Do not warn when only installed on one side (server/client)
* Fix classes injected into Google's packages referencing MC code

#### [4 more entries](https://www.curseforge.com/minecraft/mc-mods/ferritecore/files/all)

### [Glassential](https://www.curseforge.com/minecraft/mc-mods/glassential) ([glassential-forge-1.16.4-1.1.5.jar](https://www.curseforge.com/minecraft/mc-mods/glassential/files/3100982)⟶[glassential-forge-1.16.5-1.1.6.jar](https://www.curseforge.com/minecraft/mc-mods/glassential/files/3216634))

#### [glassential-forge-1.16.5-1.1.6.jar](https://www.curseforge.com/minecraft/mc-mods/glassential/files/3216634)

* ADDED: Russian translation (by Gregorius-MC)

### [Guns Without Roses](https://www.curseforge.com/minecraft/mc-mods/guns-without-roses) ([gunswithoutroses-1.16.5-1.0.7.jar](https://www.curseforge.com/minecraft/mc-mods/guns-without-roses/files/3185670)⟶[gunswithoutroses-1.16.5-1.0.8.jar](https://www.curseforge.com/minecraft/mc-mods/guns-without-roses/files/3216676))

#### [gunswithoutroses-1.16.5-1.0.8.jar](https://www.curseforge.com/minecraft/mc-mods/guns-without-roses/files/3216676)

* CHANGED: Diamond Shotgun now fires less projectiles per shot but deals more damage (overall higher damage than before to make it more in line with the Diamond Sniper)

### [LibX](https://www.curseforge.com/minecraft/mc-mods/libx) ([LibX-1.16.3-1.0.15.jar](https://www.curseforge.com/minecraft/mc-mods/libx/files/3201483)⟶[LibX-1.16.3-1.0.17.jar](https://www.curseforge.com/minecraft/mc-mods/libx/files/3214414))

#### [LibX-1.16.3-1.0.17.jar](https://www.curseforge.com/minecraft/mc-mods/libx/files/3214414)

* Fix the config system on the server - noeppi_noeppi

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/libx/files/all)

### [Meet Your Fight](https://www.curseforge.com/minecraft/mc-mods/meet-your-fight) ([meetyourfight-1.16.5-1.1.1.jar](https://www.curseforge.com/minecraft/mc-mods/meet-your-fight/files/3193977)⟶[meetyourfight-1.16.5-1.1.2.jar](https://www.curseforge.com/minecraft/mc-mods/meet-your-fight/files/3217067))

#### [meetyourfight-1.16.5-1.1.2.jar](https://www.curseforge.com/minecraft/mc-mods/meet-your-fight/files/3217067)

* CHANGED: All boss drops and items made from them now have names the same color as Nether Stars
* CHANGED: Jägershot adjusted to match the balance the Diamond Shotgun from Guns Without Roses received (less projectiles but more overall damage)

### [Morpheus](https://www.curseforge.com/minecraft/mc-mods/morpheus) ([Morpheus-1.16.4-4.2.68.jar](https://www.curseforge.com/minecraft/mc-mods/morpheus/files/3114135)⟶[Morpheus-1.16.5-4.2.70.jar](https://www.curseforge.com/minecraft/mc-mods/morpheus/files/3215383))

#### [Morpheus-1.16.5-4.2.70.jar](https://www.curseforge.com/minecraft/mc-mods/morpheus/files/3215383)

* Update to 1.16.5
* Fix Miners logic

### [PneumaticCraft: Repressurized](https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized) ([pneumaticcraft-repressurized-1.16.5-2.10.0-134.jar](https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized/files/3194882)⟶[pneumaticcraft-repressurized-1.16.5-2.10.1-140.jar](https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized/files/3214375))

#### [pneumaticcraft-repressurized-1.16.5-2.10.1-140.jar](https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized/files/3214375)

2.10.1-140 (23 Feb 2021)

Updates

* Pressure Chamber disenchanting now works for enchanted book too
* - The Enchanted Book to remove enchantments from must have more than one enchantment
* - A random enchantment will be removed and added to a regular Book
* - Thanks to @BlueAgent for this
* COFH/Thermal fuels (Refined Fuel, Tree Oil & Creosote) are now supported in the Liquid Compressor & Advanced Liquid Compressor
* - Note that COFH Crude Oil is still not accepted by the Refinery by default, because it is not added to the forge:crude_oil fluid tag
* Pneumatic Door Base now has a GUI option to open its attached Pneumatic Door when it (the base) receives a redstone signal
* - Previously the Pneumatic Door itself required a redstone signal to open
* - Only applies in Wooden Door or Iron Door mode, of course
* Notify players who are holding an Amadron Tablet when new offers become available
* - Can be disabled by clientside config setting: notify_amadron_offer_updates in pneumaticcraft-client.toml
* The Seismic Sensor can now be configured to search for underground fluids other than PneumaticCraft Crude Oil
* - By default it will now find any fluid tagged as forge:crude_oil (which includes PneumaticCraft Crude Oil)
* - See the seismic_sensor_fluid_tags and seismic_sensor_fluids config settings in pneumaticcraft-common.toml; these take a list of fluid tags and a list of fluid ID's, respectively
* - Prefer seismic_sensor_fluid_tags where possible to add fluids by tag (e.g. minecraft:water or minecraft:lava); use seismic_sensor_fluids when you don't have a fluid tag: this takes a direct fluid ID
* - Both config settings can be used together; the permitted fluids will be combined as a set union
* Vacuum Trap GUI now has a 'R' range preview button to show mob absorption range

Fixes

* Fixed heat handling tile entities losing their heat information when moved by Quark (and possibly other mods like Create)
* Fixed a problem with Drones not always being able to place fluids in-world (in particular where waterlogged replaceable blocks like Sea Grass existed)
* Fixed Pneumatic Armor GUI being able to move stat panels completely off-screen (by switching opening direction when panel is on the edge)
* Fixed Security Station failing to prevent block breaking by certain fake players (not including Drones)
* Fixed problem where Drones wouldn't always move into fluids even with a Security Upgrade equipped
* Drones will now move into any cool fluid, but not fluids with a temperature of over 373K (100C)
* - Note the Programmable Controller fake drone doesn't care about temperatures and will happily move through anything
* Clarified docs for Right Click Widget when in Item Mode: the filter applies to the held item, not the clicked block
* - Note that this widget can't filter by clicked block when in Item Mode; this is likely to be remedied in a later release, but will probably require a separate progwidget
* Pneumatic Chestplate Security Upgrade will no longer attempt to extinguish fires or solidify lava when player is in creative or spectator mode

### [Quark](https://www.curseforge.com/minecraft/mc-mods/quark) ([Quark-r2.4-306.jar](https://www.curseforge.com/minecraft/mc-mods/quark/files/3212156)⟶[Quark-r2.4-307.jar](https://www.curseforge.com/minecraft/mc-mods/quark/files/3216263))

#### [Quark-r2.4-307.jar](https://www.curseforge.com/minecraft/mc-mods/quark/files/3216263)

* Probably fixed issues with config chat spamming.

### [Sophisticated Backpacks](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks) ([sophisticatedbackpacks-1.16.4-2.2.0.171.jar](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks/files/3208899)⟶[sophisticatedbackpacks-1.16.4-2.2.1.183.jar](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks/files/3217394))

#### [sophisticatedbackpacks-1.16.4-2.2.1.183.jar](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks/files/3217394)

A few changes that prevent contents UUID creation until the backpack is open for the first time. So neither of crafting the backpack / upgrading it / dyeing it creates the UUID.

Added missing back curios tag for netherite backpack so that it can be put in back slot as well.

Simplified recipes - no need to copy contents to new uuid anymore and because of that no need to do anything special when the item is pickup from crafting slot also no need of sending special nbt to client the same nbt is now used on both sides.

Fixed regex that verifies values in entity to loot table mapping list in config to prevent log spam.

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks/files/all)

### [Supplementaries](https://www.curseforge.com/minecraft/mc-mods/supplementaries) ([supplementaries-1.16.5-0.9.27.jar](https://www.curseforge.com/minecraft/mc-mods/supplementaries/files/3206315)⟶[supplementaries-1.16.5-0.10.0a.jar](https://www.curseforge.com/minecraft/mc-mods/supplementaries/files/3218015))

#### [supplementaries-1.16.5-0.10.0a.jar](https://www.curseforge.com/minecraft/mc-mods/supplementaries/files/3218015)

Fixed mod loading issue from 0.10.0.

Reworked the whole jar fluid system.

They now use their own custom virtual fluid system which allows them to accept any forge fluids as well as properly interact and support modded bottles and soup (as long as they have been added of course. you can check out my discord for details). Some have already been added

They will also convert between different fluids types of the same type like honey for example.

Faucets and jars will not properly interact with external fluid sources and fluid tanks and will retain their old behavior of course.

Improved faucets and jar rendering.

Faucets will not emit colored dripping particles when they are off but have a fluid behind

Added pancakes!

They can be placed and stacked up to 8. If you put honey on them they will give you a short speed buff.

You can also put on them syrup from autumnity or chocolate from create.

Added Netherite doors, and trapdoors.

They will function sort of like the safe block meaning you can assign them and only open them with a key.

Added a Lock Block which will emit a redstone signal when activated with its key.

Keys can now go and work in curios slots. Added checker block Changed and improved a lot of textures

Fixed a bamboo spike related bug and probably some other bugs too

Finally remember to enable gold doors though configs. They were added last update but I forgot to change the default config so if you have already downloaded the mod they most likely are disabled.

### [TerraForged](https://www.curseforge.com/minecraft/mc-mods/terraforged) ([0.2.5](https://www.curseforge.com/minecraft/mc-mods/terraforged/files/3195631)⟶[0.2.8](https://www.curseforge.com/minecraft/mc-mods/terraforged/files/3215379))

#### [0.2.8](https://www.curseforge.com/minecraft/mc-mods/terraforged/files/3215379)

0.2.8 Changes

* - Added a handful of small performance optimisations
* - Implemented a custom structure locator algorithm that can run multi-threaded to help find structures faster
* - Added options to enable/disable the async structure search and set the timeout limit in the 'general' config
* - Fixed an issue where the old structure locate command didn't always point you to the nearest structure instance
* - Fixed shrubs being able to place on village buildings etc
* - Fixed an issue that sometimes prevents the dedicated server process from fully exiting after shutdown
* - Added compatibility patch for an issue where an erroring mod codec could prevent features being able to generate

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/terraforged/files/all)

### [Travel Anchors](https://www.curseforge.com/minecraft/mc-mods/travel-anchors) ([TravelAnchors-2.2.jar](https://www.curseforge.com/minecraft/mc-mods/travel-anchors/files/3150292)⟶[TravelAnchors-2.3.jar](https://www.curseforge.com/minecraft/mc-mods/travel-anchors/files/3215753))

#### [TravelAnchors-2.3.jar](https://www.curseforge.com/minecraft/mc-mods/travel-anchors/files/3215753)

Bugfixes

## Removed

* [Screenshot to Clipboard (Forge)](https://www.curseforge.com/minecraft/mc-mods/screenshot-to-clipboard)

Generated using [ChangelogGenerator 2.0.0-pre9](https://github.com/TheRandomLabs/ChangelogGenerator).
