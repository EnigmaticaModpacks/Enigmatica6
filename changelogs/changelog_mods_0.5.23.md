# Enigmatica6 0.5.22⟶Enigmatica6 0.5.23

## Added

* [Ars Arsenal](https://www.curseforge.com/minecraft/mc-mods/ars-arsenal)
* [Ars Elemental - Elemental Spell Foci](https://www.curseforge.com/minecraft/mc-mods/ars-elemental-elemental-spell-foci)
* [Ars EnderStorage](https://www.curseforge.com/minecraft/mc-mods/ars-enderstorage)
* [Masterful Machinery](https://www.curseforge.com/minecraft/mc-mods/masterful-machinery)
* [Too Many Glyphs](https://www.curseforge.com/minecraft/mc-mods/too-many-glyphs)

## Updated

### [Ars Nouveau](https://www.curseforge.com/minecraft/mc-mods/ars-nouveau) ([ars_nouveau-1.16.5-1.24.12.jar](https://www.curseforge.com/minecraft/mc-mods/ars-nouveau/files/3586196)⟶[ars_nouveau-1.16.5-1.24.14.jar](https://www.curseforge.com/minecraft/mc-mods/ars-nouveau/files/3598702))

#### [ars_nouveau-1.16.5-1.24.14.jar](https://www.curseforge.com/minecraft/mc-mods/ars-nouveau/files/3598702)

Fixes vexes and summoning focus

Fixes lag with AN fake players

Fixes cost reduction on enchanters sword

### [CodeChicken Lib 1.8.+](https://www.curseforge.com/minecraft/mc-mods/codechicken-lib-1-8) ([CodeChicken Lib 1.16.5-4.0.5.438-universal](https://www.curseforge.com/minecraft/mc-mods/codechicken-lib-1-8/files/3553742)⟶[CodeChicken Lib 1.16.5-4.0.6.443-universal](https://www.curseforge.com/minecraft/mc-mods/codechicken-lib-1-8/files/3596092))

#### [CodeChicken Lib 1.16.5-4.0.6.443-universal](https://www.curseforge.com/minecraft/mc-mods/codechicken-lib-1-8/files/3596092)

* Add useful dev commands.
* Add 'usesBlockLight' to ModelProperties.
* Fix issues with BakedVertexSource not properly expanding.
* Fix crash when using ModelProperties from a ModelLoader.
* Fix issues with transparency and RenderWorldLast.

### [Config Swapper](https://www.curseforge.com/minecraft/mc-mods/config-swapper) ([configswapper-2.4.jar](https://www.curseforge.com/minecraft/mc-mods/config-swapper/files/3581751)⟶[configswapper-2.5.jar](https://www.curseforge.com/minecraft/mc-mods/config-swapper/files/3598871))

#### [configswapper-2.5.jar](https://www.curseforge.com/minecraft/mc-mods/config-swapper/files/3598871)

* lots of bugfixing
* fixed detection for whether a config needs to be changed
* all configs now get reapplied (if necessary) on world load, not just serverconfigs #blamemekanism

### [Curios API (Forge)](https://www.curseforge.com/minecraft/mc-mods/curios) ([curios-forge-1.16.5-4.0.6.8.jar](https://www.curseforge.com/minecraft/mc-mods/curios/files/3581708)⟶[curios-forge-1.16.5-4.0.7.0.jar](https://www.curseforge.com/minecraft/mc-mods/curios/files/3598943))

#### [curios-forge-1.16.5-4.0.7.0.jar](https://www.curseforge.com/minecraft/mc-mods/curios/files/3598943)

Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Forge Recommended Versioning](https://mcforge.readthedocs.io/en/latest/conventions/versioning/).

[1.16.5-4.0.7.0] - 2021.01.08

Added

* [API] Added findFirstCurio and findCurios methods to ICuriosHelper

Changed

* Updated ko_kr localization (thanks mindy15963!) [#200](https://github.com/TheIllusiveC4/Curios/pull/200)

Deprecated

* [API] Deprecated findEquippedCurio methods in ICuriosHelper

Fixed

* Fixed knockback resistance tooltips not being formatted correctly
* Fixed clearing inventory via Creative 'x' button resulting in lingering attribute modifiers when equipped

[1.16.5-4.0.6.8] - 2021.12.27

Fixed

* Fixed client-side syncing errors when applying slot modifiers to slots with base size 0
* Fixed slot amount changes persistent when not applicable

[1.16.5-4.0.6.7] - 2021.12.19

Fixed

* Fixed slot amount changes not persisting when applicable
* Fixed slot amount changes causing loading errors [#195](https://github.com/TheIllusiveC4/Curios/issues/195)

[1.16.5-4.0.6.6] - 2021.12.15

Changed

* [API] ICurio#canEquipFromUse and ICurio#onEquipFromUse methods are now called both client-side and server-side (previously server-side only)

Fixed

* Fixed curio items not calling their use logic client-side [#192](https://github.com/TheIllusiveC4/Curios/issues/192)

[1.16.5-4.0.6.5] - 2021.12.05

Fixed

* Fixed crash with client-side player entities [#189](https://github.com/TheIllusiveC4/Curios/issues/189)

[1.16.5-4.0.6.4] - 2021.12.02

Fixed

* Fixed crash when running data generation in development environments [#188](https://github.com/TheIllusiveC4/Curios/issues/188)

[1.16.5-4.0.6.3] - 2021.12.01

Fixed

* Fixed slots not being loaded correctly in some situations
* Fixed slot size desyncs when players have more than one of any slot type [#185](https://github.com/TheIllusiveC4/Curios/issues/185)
* Fixed potential crash on dedicated servers [#184](https://github.com/TheIllusiveC4/Curios/issues/184)

[1.16.5-4.0.6.2] - 2021.11.30

Fixed

* Fixed resource loading crashing when invalid texture files are found [#183](https://github.com/TheIllusiveC4/Curios/issues/183)

[1.16.5-4.0.6.1] - 2021.11.30

Fixed

* Fixed syncing slot shrinking client-side, actually this time

[1.16.5-4.0.6.0] - 2021.11.30

Please note that this update is more experimental than most and is marked as a beta. Be cautious about adding this to stable worlds.

Added

* [API] Added slot modifier system, see [the wiki page](https://github.com/TheIllusiveC4/Curios/wiki/Slot-Modifiers) for more info. This is the main reason the update is experimental. Although this system was designed to be backwards compatible, be wary of issues with older slot modification methods. [#178](https://github.com/TheIllusiveC4/Curios/issues/178)
* [API] Added CurioEquipEvent and CurioUnequipEvent to allow modders the ability to intercept and change equip/unequip results [#174](https://github.com/TheIllusiveC4/Curios/issues/174)
* [API] Added new slot texture registration method: textures located in the assets/curios/textures/slot directory in any mod or resource pack will be automatically stitched to the texture atlas and usable by slots [#145](https://github.com/TheIllusiveC4/Curios/issues/145)
* [API] Added ICuriosItemHandler#saveInventory and ICuriosItemHandler#loadInventory for saving/loading the Curios inventory more conveniently [#164](https://github.com/TheIllusiveC4/Curios/issues/164)

[(187 more lines)](https://www.curseforge.com/minecraft/mc-mods/curios/files/3598943)

### [Enigmatic Graves](https://www.curseforge.com/minecraft/mc-mods/enigmatic-graves) ([EnigmaticGraves-1.7.1.jar](https://www.curseforge.com/minecraft/mc-mods/enigmatic-graves/files/3517235)⟶[EnigmaticGraves-1.7.2.jar](https://www.curseforge.com/minecraft/mc-mods/enigmatic-graves/files/3599762))

#### [EnigmaticGraves-1.7.2.jar](https://www.curseforge.com/minecraft/mc-mods/enigmatic-graves/files/3599762)

Changed the way that dropped items get added into the grave.

Should fix a few issues.

### [FTB Chunks (Forge)](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge) ([ftb-chunks-forge-1605.3.2-build.91.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge/files/3590598)⟶[ftb-chunks-forge-1605.3.2-build.95.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge/files/3594878))

#### [ftb-chunks-forge-1605.3.2-build.95.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge/files/3594878)

* Added in-world icons for waypoints, fixed waypoint colors - LatvianModder

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge/files/all)

### [Flux Networks](https://www.curseforge.com/minecraft/mc-mods/flux-networks) ([Flux-Networks-1.16.5-6.1.7](https://www.curseforge.com/minecraft/mc-mods/flux-networks/files/3285556)⟶[Flux-Networks-1.16.5-6.2.0](https://www.curseforge.com/minecraft/mc-mods/flux-networks/files/3601194))

#### [Flux-Networks-1.16.5-6.2.0](https://www.curseforge.com/minecraft/mc-mods/flux-networks/files/3601194)

Changelog 1.16.5-6.2.0.13 (2022-01-11)

* Rewrite network handler, update network protocol
* Slightly adjust the behavior of creating flux in world
* Add it_it (Hav3funDJ)

Changelog 1.16.5-6.1.7.12 (2021-04-22)

* Fix network packet security leaks
* Fix super admin can't transfer ownership to self

Changelog 1.16.5-6.1.6.11 (2021-01-20)

* Make flux plugs and points waterlogged
* Fix server config not synced to client
* Fix possible crash with some blocks

Changelog 1.16.4-6.1.5.10 (2020-11-14)

* Add feedback text animation
* Move super admin text from action bar into GUI
* Disable players to be charged by multiple networks
* Fix GUI not closed when block removed
* Fix possible strong reference bug
* Make devices able to disconnect in any case

Changelog 1.16.4-6.1.3.8 (2020-11-10)

* Fix chunk loading flag not updated when re-entering world

Changelog 1.16.4-6.1.2.7 (2020-11-10)

* Update localization
* Improve GUI
* Remove debug logs

Changelog 1.16.4-6.1.1.6 (2020-11-08)

* Fix various GUI bugs
* Optimize GUI code

Changelog 1.16.4-6.1.0.5 (2020-11-06)

* Update to 1.16.4 (1.16.3 works as well)
* Add energy capacity tooltip for storages
* Improve text display
* Optimize GUI code
* Fix possible crash
* Fix diffuse lighting in GUI
* Fix flux storage rendering
* Fix network buffer limiter

Changelog 1.16.3-6.0.1.4 (2020-10-26)

* Improve controller transfer logic
* Fix crash caused by bad API implementations of other mods
* Fix client only method crash

Changelog 1.16.3-6.0.0.3 (2020-10-25)

* Fix some packets without security check
* Fix chunk loading system
* Fix blacklist system
* Fix many other bugs
* Add support for Curios API
* Enhance flux storage capacity limit to Long.MAX_VALUE
* Optimize data synchronization and client cache
* Optimize network transfer
* More code standardizing and optimization

### [GeckoLib](https://www.curseforge.com/minecraft/mc-mods/geckolib) ([geckolib-forge-1.16.5-3.0.57.jar](https://www.curseforge.com/minecraft/mc-mods/geckolib/files/3548338)⟶[geckolib-forge-1.16.5-3.0.58.jar](https://www.curseforge.com/minecraft/mc-mods/geckolib/files/3601135))

#### [geckolib-forge-1.16.5-3.0.58.jar](https://www.curseforge.com/minecraft/mc-mods/geckolib/files/3601135)

v3.0.58

* Updates Core
* Makes Entity, Projectiles and Geo Replaced main methods public.

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/geckolib/files/all)

### [JourneyMap](https://www.curseforge.com/minecraft/mc-mods/journeymap) ([journeymap-1.16.5-5.8.0beta5](https://www.curseforge.com/minecraft/mc-mods/journeymap/files/3587044)⟶[journeymap-1.16.5-5.8.0beta7](https://www.curseforge.com/minecraft/mc-mods/journeymap/files/3599156))

#### [journeymap-1.16.5-5.8.0beta7](https://www.curseforge.com/minecraft/mc-mods/journeymap/files/3599156)

JourneyMap 1.16.5-5.8.0beta7 for Minecraft 1.16.5

Requirements:

* Java 8
* Minecraft 1.16.5
* Forge 1.16.5-36.2.22

General Information:

* See [http://journeymap.info/](http://journeymap.info/) for information about how to install and use this mod, rules about inclusion in modpacks, translation, etc.
* See [http://journeymap.info/Support](http://journeymap.info/Support) for information on getting technical support.
* Implements [JourneyMap API v1.16.5-1.8-SNAPSHOT](https://github.com/TeamJM/journeymap-api)

CHANGELOG (2022-01-08-18:51:18):

New in 1.16.5-5.8.0beta7

* Added: Api labels can also be i18n keys.
* Fixed: Dropdown loading for addons.
* Fixed: Minimap position option window sizing.
* Fixed: Too much metadata saved for addon properties.

Beta 1-6

* IMPORTANT: Minimum forge version 36.2.20 required for log4j security issues.
* Added: Hooks for API addons to add items to the Options screen.
* Added: Hooks for API to add buttons and toolbars to fullscreen map.
* Added: Right Click menu on fullscreen map with full API(1.8) support!
* Added: New Api events for fullscreen mouse_click, mouse_drag, and mouse_move.
* Added: New Biome Map Type
* Added: Position Button in Minimap Bottom Bar for minimap and effects moving.
* Added: Cartography option to map water colors based on biome. Default: False
* Added: Version packet for use by bukkit/spigot/sponge servers. See our discord for details.
* Added: Info Slot Background opacity option.
* Updated: Radar can handle not specific mob types from mods.
* Updated: Journeymap API 1.8 Snapshot
* Updated: Polygon triangulation logic, MUCH better now, holes work! Thanks to Mirality(uecasm)
* Removed: Old entity icon lookup code to clean up init error logs.
* Removed: ModInfo tracking since MC removed the snooper settings.
* Changed: Cartography render distances default to video setting render distance.
* Changed: CustomNamed Entity labels renders a better when display is set to dots.
* Changed: Entity icons are now much shaper when upscaled.
* Changed: Potion effects have a zone where they will also shift when in custom option now.
* Changed: Entity icons are now much shaper when upscaled.
* Changed: Click through buttons are now dropdowns.
* Changed: InfoSlot data update time lowered.
* Changed: Textbox logic to be smoother and cleaner when clicking and highlighting
* Mod Compat: TFC: Better mapping in TerraFirmaCraft world.
* Fixed: Waypoint teleporting in the nether.
* Fixed: Issue when clicking outside of the dropdown.
* Fixed: Jetty META-INF maven trash removed to avoid module conflicts with dynmap.
* Fixed: Cave slider click issues.
* Fixed: Empty scaled entity texture
* Fixed: Waypoint teleporting in the nether.
* Fixed: nether and end automapping
* Fixed: Scaling and mod interaction issues with moving potion effects.
* Fixed: getting correct Level ambient sky color(fixes end darkness)
* Fixed: Waypoint manager Russian language issues.

[(8 more lines)](https://www.curseforge.com/minecraft/mc-mods/journeymap/files/3599156)

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/journeymap/files/all)

### [Lootr](https://www.curseforge.com/minecraft/mc-mods/lootr) ([lootr-1.16.5-0.0.10.34.jar](https://www.curseforge.com/minecraft/mc-mods/lootr/files/3582870)⟶[lootr-1.16.5-0.1.11.35.jar](https://www.curseforge.com/minecraft/mc-mods/lootr/files/3597828))

#### [lootr-1.16.5-0.1.11.35.jar](https://www.curseforge.com/minecraft/mc-mods/lootr/files/3597828)

* Tentative bump. [(5b3b5aa)](https://github.com/noobanidus/lootr/commit/5b3b5aa)
* Clear everything, not just the player who opened. [(ac446f7)](https://github.com/noobanidus/lootr/commit/ac446f7)
* Tag providers. [(8cf96ed)](https://github.com/noobanidus/lootr/commit/8cf96ed)
* Optimize code again. [(c4e5800)](https://github.com/noobanidus/lootr/commit/c4e5800)
* Event parameter is never used. [(19df988)](https://github.com/noobanidus/lootr/commit/19df988)
* Fix up registration mishaps. Refreshing containers. [(16b4f9a)](https://github.com/noobanidus/lootr/commit/16b4f9a)
* Reinstate Minecarts. [(2c648a6)](https://github.com/noobanidus/lootr/commit/2c648a6)
* Code cleanup. [(4f675f6)](https://github.com/noobanidus/lootr/commit/4f675f6)
* More refactoring. [(f6c08ea)](https://github.com/noobanidus/lootr/commit/f6c08ea)
* Improve clear inventories. Shuffle some things around. [(deb0307)](https://github.com/noobanidus/lootr/commit/deb0307)
* More code cleanup. [(f6b18f6)](https://github.com/noobanidus/lootr/commit/f6b18f6)
* Add modid blacklist. Remove destroy. [(e3d4f0d)](https://github.com/noobanidus/lootr/commit/e3d4f0d)
* Exclude ender chests. [(c705eb0)](https://github.com/noobanidus/lootr/commit/c705eb0)
* Bump for experimental release. [(5a2a36e)](https://github.com/noobanidus/lootr/commit/5a2a36e)
* Code clean-up. [(987e359)](https://github.com/noobanidus/lootr/commit/987e359)
* Switch to new "experimental" method of handling chests. [(0696763)](https://github.com/noobanidus/lootr/commit/0696763)
* Move hard-coded values into config. [(4154b3c)](https://github.com/noobanidus/lootr/commit/4154b3c)

This mod was made possible by Patreon support from players like you. Thank you!

* sirdizarm
* Graham Hughes
* fowltief
* LyrenF
* Vallen
* CosmicParticl
* Aranai Ra
* Katu Matson
* SeriousCreeper
* clefal

### [McJtyLib](https://www.curseforge.com/minecraft/mc-mods/mcjtylib) ([McJtyLib - 1.16-5.1.2](https://www.curseforge.com/minecraft/mc-mods/mcjtylib/files/3556983)⟶[McJtyLib - 1.16-5.1.3](https://www.curseforge.com/minecraft/mc-mods/mcjtylib/files/3598199))

#### [McJtyLib - 1.16-5.1.3](https://www.curseforge.com/minecraft/mc-mods/mcjtylib/files/3598199)

McJtyLib 1.16-5.1.3

* Backported better container system from 1.18

### [PneumaticCraft: Repressurized](https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized) ([pneumaticcraft-repressurized-1.16.5-2.14.7-283.jar](https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized/files/3587851)⟶[pneumaticcraft-repressurized-1.16.5-2.15.0-289.jar](https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized/files/3601036))

#### [pneumaticcraft-repressurized-1.16.5-2.15.0-289.jar](https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized/files/3601036)

2.15.0-289 (10th Jan 2022)

New

* A complete retexture of the entire mod, courtesy of Ridanisaurus
* No functional (gameplay) changes in this release, just a whole lot prettier all round!
* The CTM mod is now an optional dependency, and needed if you want texture-connected Pressure Chamber Glass
* The texture of the various Reinforced Stone blocks has changed; if you want to use the old textures, look at the new Compressed Stone blocks

### [RFTools Base](https://www.curseforge.com/minecraft/mc-mods/rftools-base) ([RFToolsBase - 1.16-2.1.1](https://www.curseforge.com/minecraft/mc-mods/rftools-base/files/3556984)⟶[RFToolsBase - 1.16-2.1.2](https://www.curseforge.com/minecraft/mc-mods/rftools-base/files/3598201))

#### [RFToolsBase - 1.16-2.1.2](https://www.curseforge.com/minecraft/mc-mods/rftools-base/files/3598201)

RFToolsBase 1.16-2.1.2

### [RFTools Builder](https://www.curseforge.com/minecraft/mc-mods/rftools-builder) ([RFToolsBuilder - 1.16-3.1.4](https://www.curseforge.com/minecraft/mc-mods/rftools-builder/files/3556993)⟶[RFToolsBuilder - 1.16-3.1.5](https://www.curseforge.com/minecraft/mc-mods/rftools-builder/files/3598209))

#### [RFToolsBuilder - 1.16-3.1.5](https://www.curseforge.com/minecraft/mc-mods/rftools-builder/files/3598209)

RFToolsBuilder 1.16-3.1.5

### [RFTools Control](https://www.curseforge.com/minecraft/mc-mods/rftools-control) ([RFToolsControl - 1.16-4.0.13](https://www.curseforge.com/minecraft/mc-mods/rftools-control/files/3556999)⟶[RFToolsControl - 1.16-4.0.14](https://www.curseforge.com/minecraft/mc-mods/rftools-control/files/3598212))

#### [RFToolsControl - 1.16-4.0.14](https://www.curseforge.com/minecraft/mc-mods/rftools-control/files/3598212)

RFToolsControl 1.16-4.0.14

### [RFTools Power](https://www.curseforge.com/minecraft/mc-mods/rftools-power) ([RFToolsPower - 1.16-3.0.11](https://www.curseforge.com/minecraft/mc-mods/rftools-power/files/3556991)⟶[RFToolsPower - 1.16-3.0.12](https://www.curseforge.com/minecraft/mc-mods/rftools-power/files/3598208))

#### [RFToolsPower - 1.16-3.0.12](https://www.curseforge.com/minecraft/mc-mods/rftools-power/files/3598208)

RFToolsPower 1.16-3.0.12

### [RFTools Storage](https://www.curseforge.com/minecraft/mc-mods/rftools-storage) ([RFToolsStorage - 1.16-2.0.15](https://www.curseforge.com/minecraft/mc-mods/rftools-storage/files/3556995)⟶[RFToolsStorage - 1.16-2.0.16](https://www.curseforge.com/minecraft/mc-mods/rftools-storage/files/3598210))

#### [RFToolsStorage - 1.16-2.0.16](https://www.curseforge.com/minecraft/mc-mods/rftools-storage/files/3598210)

RFToolsStorage 1.16-2.0.16

* Small fix with sorting mode for the storage scanner
* Lag reduction when opening the modular storage user interface

### [RFTools Utility](https://www.curseforge.com/minecraft/mc-mods/rftools-utility) ([RFToolsUtility - 1.16-3.1.7](https://www.curseforge.com/minecraft/mc-mods/rftools-utility/files/3582791)⟶[RFToolsUtility - 1.16-3.1.8](https://www.curseforge.com/minecraft/mc-mods/rftools-utility/files/3598207))

#### [RFToolsUtility - 1.16-3.1.8](https://www.curseforge.com/minecraft/mc-mods/rftools-utility/files/3598207)

RFToolsUtility 1.16-3.1.8

* Made the dialer more performant by also putting the access information in the teleportation data so that we don't need to get the matter receiver(s)

### [Refined Storage: Requestify](https://www.curseforge.com/minecraft/mc-mods/rs-requestify) ([rsrequestify-1.16.5-2.1.4.jar](https://www.curseforge.com/minecraft/mc-mods/rs-requestify/files/3501351)⟶[rsrequestify-1.16.5-2.1.6.jar](https://www.curseforge.com/minecraft/mc-mods/rs-requestify/files/3597580))

#### [rsrequestify-1.16.5-2.1.6.jar](https://www.curseforge.com/minecraft/mc-mods/rs-requestify/files/3597580)

Really fixed crafting emitter drop

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/rs-requestify/files/all)

### [Resourceful Bees](https://www.curseforge.com/minecraft/mc-mods/resourceful-bees) ([ResourcefulBees-1.16.5-0.10.1](https://www.curseforge.com/minecraft/mc-mods/resourceful-bees/files/3587639)⟶[ResourcefulBees-1.16.5-0.10.3](https://www.curseforge.com/minecraft/mc-mods/resourceful-bees/files/3599409))

#### [ResourcefulBees-1.16.5-0.10.3](https://www.curseforge.com/minecraft/mc-mods/resourceful-bees/files/3599409)

please continue to report any bugs/issues to [https://issues.resourcefullbees.com/](https://issues.resourcefullbees.com/)

----- [0.10.3] -----

* Fixed a Crash if you attempt to have a bee follow you with traitData missing in the json
* Fixed Lost Bee Boxes not disintegrating if they were emptied using a basic right click

----- [0.10.2] -----

WARNING IF YOU HAVE PLACED ANY STARRY HONEY DOWN PRIOR TO THIS BUILD IT WILL DISAPPEAR DUE TO A REQUIRED REGISTRY ID CHANGE

* Setting enableEasterEggBees to false will now remove registries relating to starry honey and starry honeycombs
* Added honeycombRarity to bees and honeyRarity to honey jsons
* Fixed a bug relating customCombBlockDrop falling to properly register the custom comb drops
* Removed unused fertiliser recipe

----- [0.10.1] -----

* Fixed Bees being able to be picked up while angry
* Fixed a crash relating to the calming potion's recipe registry
* removed unused Pollen and Fertiliser Items

----- [0.10.0] -----

WARNING IF YOU HAVE ANY BEES USING THE KITTEN BASE BEE MODEL YOUR TEXTURES WILL NEED TO BE UPDATED, AND THE MODEL TYPE KITTEN WILL NEED TO BE ADDED.

New Additions

* Added KITTEN, BUNNY, ASTRONAUT model types
* Added Waxed Planks, Trimmed Waxed Planks, Waxed variants of wooden blocks (i.e. signs, fences, doors)
* Beepedia Command, which allows you to lock or unlock bee entries in the beepedia.
* Added Rainbow Glass Bee to default bees
* Added Dev Bee: Starry Bee
* Added Patreon Bee: AbBee
* Added Starry Honey
* Added StrawBeerry Milkshake
* Added Auras
* Aura Types: EXPERIENCE, EXPERIENCE_DRAIN, DAMAGING, HEALING, POTION, BURNING
* Added the ability for the usage of custom models of your own through GeckoLib
* You can now rename bees by renaming a bee jar
* You can now steal bees from beehives and apiaries using a bee box (make sure you smoke the hive first)
* Added Rbees version number to beepedia home page
* Added template textures for new model system
* Added Trait Clingy: causes bees to follow players without the need for breed items
* Added Trait Healer: using the new aura system will heal any player within range every 8 seconds

Removals

* Due to now using GeckoLib for models BaseModelType is now no longer used.

Changes

* Reworked the Fifty Shades of Bees
* Bee Rendering now uses GeckoLib which should hopefully allow for better performance
* The Beepedia now saves your progress to your player rather than the item meaning you can't lose your progress if you lose the ite.
* Reworked the beepedia Interface and removed reliance on effects for beecon range.
* Generate Defaults will now set itself to false when it runs itself for the first time
* You can now release a single bee at a time from the bee box by simply right clicking
* You can now see the name of the honey inside most tile entities within their interface

Bug fixes

* Resourceful Honey now makes honey sounds
* Resourceful Honey now has some fluid physics
* Beepedia now lists Bee jars and Item mutations in a bee's breeding tab if the mutation results in a jar or egg that spawns that bee.
* Honey pages in the beepedia now correctly lists all bees that output that honey even if the honey was added through custom centrifuge recipes.
* Custom Honeys now display the correct amount of saturation added when eaten

[(149 more lines)](https://www.curseforge.com/minecraft/mc-mods/resourceful-bees/files/3599409)

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/resourceful-bees/files/all)

### [Sophisticated Backpacks](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks) ([sophisticatedbackpacks-1.16.5-3.15.0.493.jar](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks/files/3587263)⟶[sophisticatedbackpacks-1.16.5-3.15.1.503.jar](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks/files/3597548))

#### [sophisticatedbackpacks-1.16.5-3.15.1.503.jar](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks/files/3597548)

Updated Russian translation (Thanks Fr0stmatic)

Updated Brazilian Portuguese translation (Thanks faelBrunnoS)

Fixes automated smelting / blasting / smoking upgrade to properly save (wouldn't before under certain condition which caused issues)

Fixes both automated and manual smelting / blasting / smoking upgrades to stop showing particles when they are disabled / removed from upgrade slot.

### [SuperMartijn642's Core Lib](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib) ([supermartijn642corelib-1.0.15-mc1.16.5](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib/files/3543827)⟶[supermartijn642corelib-1.0.16-mc1.16.5](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib/files/3596490))

#### [supermartijn642corelib-1.0.16-mc1.16.5](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib/files/3596490)

* Translate mouse position when calling BaseContainerScreen#renderTooltips

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib/files/all)

### [Trash Cans](https://www.curseforge.com/minecraft/mc-mods/trash-cans) ([trashcans-1.0.11-mc1.16](https://www.curseforge.com/minecraft/mc-mods/trash-cans/files/3565581)⟶[trashcans-1.0.12-mc1.16](https://www.curseforge.com/minecraft/mc-mods/trash-cans/files/3597652))

#### [trashcans-1.0.12-mc1.16](https://www.curseforge.com/minecraft/mc-mods/trash-cans/files/3597652)

* Added German translations (thanks to Wizqok!)

### [XNet](https://www.curseforge.com/minecraft/mc-mods/xnet) ([XNet - 1.16-3.0.15](https://www.curseforge.com/minecraft/mc-mods/xnet/files/3557001)⟶[XNet - 1.16-3.0.16](https://www.curseforge.com/minecraft/mc-mods/xnet/files/3598214))

#### [XNet - 1.16-3.0.16](https://www.curseforge.com/minecraft/mc-mods/xnet/files/3598214)

XNet 1.16-3.0.16

Generated using [ChangelogGenerator 2.0.0-pre10](https://github.com/TheRandomLabs/ChangelogGenerator).
