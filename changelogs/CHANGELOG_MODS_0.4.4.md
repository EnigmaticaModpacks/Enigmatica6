# Enigmatica6 0.4.3⟶Enigmatica6 0.4.4

## Added

* [Bad Wither No Cookie - Reloaded](https://www.curseforge.com/minecraft/mc-mods/bad-wither-no-cookie-reloaded)
* [Macaw's Fences and Walls](https://www.curseforge.com/minecraft/mc-mods/macaws-fences-and-walls)
* [Project: Vibrant Journeys](https://www.curseforge.com/minecraft/mc-mods/project-vibrant-journeys)
* [RSInfinityBooster](https://www.curseforge.com/minecraft/mc-mods/rsinfinitybooster)
* [Repurposed Structures (Forge)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures)

## Updated

### [AIOT Botania](https://www.curseforge.com/minecraft/mc-mods/aiot-botania) ([aiotbotania-1.16.4-1.7.2.jar](https://www.curseforge.com/minecraft/mc-mods/aiot-botania/files/3224181)⟶[aiotbotania-1.16.4-1.7.3.jar](https://www.curseforge.com/minecraft/mc-mods/aiot-botania/files/3245616))

#### [aiotbotania-1.16.4-1.7.3.jar](https://www.curseforge.com/minecraft/mc-mods/aiot-botania/files/3245616)

* re-add AIOT Botania functionality to new Botania hoes - MelanX
* remove manasteel and elementium hoe - MelanX

### [Abnormals Core](https://www.curseforge.com/minecraft/mc-mods/abnormals-core) ([Abnormals Core 1.16.5 - 3.1.0](https://www.curseforge.com/minecraft/mc-mods/abnormals-core/files/3218058)⟶[Abnormals Core 1.16.5 - 3.1.1](https://www.curseforge.com/minecraft/mc-mods/abnormals-core/files/3233486))

#### [Abnormals Core 1.16.5 - 3.1.1](https://www.curseforge.com/minecraft/mc-mods/abnormals-core/files/3233486)

* Updated Chest System
* Fixed chests being invisible at certain angles when waterlogged
* Added CatmullRomSpline
* Fixed misaligned biome IDs causing incorrect biomes to generate in the end
* Fixed conflict with Pillagers Plus
* Updated Spanish translations
* Added a Config Condition System

### [Alex's Mobs](https://www.curseforge.com/minecraft/mc-mods/alexs-mobs) ([alexsmobs-1.7.0](https://www.curseforge.com/minecraft/mc-mods/alexs-mobs/files/3224639)⟶[alexsmobs-1.8.0](https://www.curseforge.com/minecraft/mc-mods/alexs-mobs/files/3245951))

#### [alexsmobs-1.8.0](https://www.curseforge.com/minecraft/mc-mods/alexs-mobs/files/3245951)

-Added Emu

-Added Platypus

-Added Dropbear

-Added Tasmanian Devil

-Added Kangaroo

-Added banana peel block

-Added Australia-themed banner patterns

-Added clinging potion

-Added config for disabling straddleboard enchants

-Allowed crocodile attacks to be blocked with shield

-Lowered default crocodile health and aggro range

-Lowered default roadrunner spawns

-Lowered default moose spawns

-Fixed crash on startup related to item properties

-Fixed baby alligator snapping turtles being strong

-Fixed crows picking items up while sitting

-Fixed advancements for grizzly bears and gorilla taming not working

-Fixed raccoons drawn to water after eating

-Fixed tameable mobs taking half damage when not tamed

-Fixed gusters not spawning in desert sub biomes by default

-Updated Simplified Chinese translations

-Updated Brazilian Portuguese translations

-Updated Swedish translations

-Updated Spanish translations by Nebula

-Updated Mexican Spanish translations

-Updated Chilean Spanish translations

-Updated Argentinian Spanish translations

-Updated Ecuadorian Spanish translations

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/alexs-mobs/files/all)

### [Architectury API (Forge)](https://www.curseforge.com/minecraft/mc-mods/architectury-forge) ([[Forge 1.16.4/5] v1.8.130](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3222916)⟶[[Forge 1.16.4/5] v1.9.136](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3245487))

#### [[Forge 1.16.4/5] v1.9.136](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3245487)

Architectury v1.9.136 for 1.16.4/5

Updated at 2021-03-20 07:44.

[Click here for changelog](https://www.github.com/architectury/architectury/commits/f904c1d)

* Add @SubscribeEvent to ColorHandlersImpl
* Remove addListener from ColorHandlersImpl
* Fix Forge Screen Events to be consistent with the fabric implementation: InteractionResult.SUCCESS should also indicate that the event should be cancelled.
* More annotation event migration
* Migrate Forge ReloadListeners events to annotations
* Fix CLIENT_WORLD_LOAD on Forge
* Bump to 1.9
* Change at
* Rewrite the GuiEvent.SET_SCREEN mixin to fix #35
* Update plugins
* Add lightning strikes to the debug mod
* Update plugin
* Update plugins
* Add EntityRenderers (#52)
* Fix BlockEntityExtension @Shadow remapping
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

[(131 more lines)](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3245487)

#### [5 more entries](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/all)

### [AttributeFix](https://www.curseforge.com/minecraft/mc-mods/attributefix) ([AttributeFix-1.16.5-10.0.1.jar](https://www.curseforge.com/minecraft/mc-mods/attributefix/files/3170246)⟶[AttributeFix-1.16.5-10.1.2.jar](https://www.curseforge.com/minecraft/mc-mods/attributefix/files/3232225))

#### [AttributeFix-1.16.5-10.1.2.jar](https://www.curseforge.com/minecraft/mc-mods/attributefix/files/3232225)

* Compiled against newer forge. - Tyler Hancock
* Fixed luck attribute min being raised from -1024 to 0, breaking negative luck. - Tyler Hancock
* Updated Config to only load when Forge wants us to load. - Tyler Hancock

Like the mod? Consider following me on [Twitter](https://twitter.com/darkhaxdev) and joining the [Discord](https://discord.darkhax.net/)

Huge thanks to my supporters on [Patreon](https://www.patreon.com/Darkhax?MCChangelog?AttributeFix)

* Diablo Crasher
* BigAl607
* arcanearchivesmod
* Pongo Sapiens
* Darkosto

### [Autumnity](https://www.curseforge.com/minecraft/mc-mods/autumnity) ([Autumnity 1.16.4 - 2.0.1](https://www.curseforge.com/minecraft/mc-mods/autumnity/files/3158874)⟶[Autumnity 1.16.5 - 2.1.0](https://www.curseforge.com/minecraft/mc-mods/autumnity/files/3239164))

#### [Autumnity 1.16.5 - 2.1.0](https://www.curseforge.com/minecraft/mc-mods/autumnity/files/3239164)

* Now requires Abnormals Core 3.1.0+
* Now requires Forge 36.0.4+

Additions:

* Changed the way Extension works: Instead of being an instant effect, Extension now works like a regular effect. When the effect is active all new effects the player gains will be 30 seconds longer. This way you can no longer get your effects to last an extremely long time by just drinking a lot of Extension potions, but the effect should still be useful.
* Added three new sub-biomes for Vanilla biomes: the Yellow Spotted Forest, the Orange Spotted Dark Forest and the Red Spotted Taiga
* Added Maple Witch Huts
* Added Foul Soup
* Added Cursed Jack o'Lanterns for compat with Caverns and Chasms, an upcoming mod
* Added Maple Posts and Hedges for Quark compat

Changes:

* Made Turkey Pieces fast to eat
* Made Turkey blocks cuttable with Farmer's Delight knives
* Made Large Pumpkins carvable with Farmer's Delight knives
* Made the Pumpkin Bread recipe give the player two pieces of Pumpkin Bread instead of one
* Made mobs avoid Foul Berries
* Made Turkey spawn biomes configurable
* Made Sap Bottles only stackable to 16
* Stripped Maple Logs now have a higher chance of having Sap when stripped with an Axe enchanted with Fortune

Fixes:

* Fixed Snails consuming all Mushroom Stew in a stack
* Fixed Pumpkin Fields being considered Forests
* Fixed mobs not spawning with Pumpkins in Pumpkin Fields
* Fixed Grass not generating in Pumpkin Fields
* Fixed a bug in which falling Turkey blocks always drop a full Turkey
* Fixed Autumnity Pumpkins attaching to Fences

### [Bookshelf](https://www.curseforge.com/minecraft/mc-mods/bookshelf) ([Bookshelf-1.16.5-10.0.1.jar](https://www.curseforge.com/minecraft/mc-mods/bookshelf/files/3170154)⟶[Bookshelf-1.16.5-10.0.7.jar](https://www.curseforge.com/minecraft/mc-mods/bookshelf/files/3241077))

#### [Bookshelf-1.16.5-10.0.7.jar](https://www.curseforge.com/minecraft/mc-mods/bookshelf/files/3241077)

* Fix main build artifact not being deployed to maven.
* Migrated from ForgeGradle 3.1.x to 4.1.x.
* Modernized Maven pom.xml generation.

Huge thanks to my supporters on [Patreon](https://www.patreon.com/Darkhax?MCChangelog?Bookshelf)

* Diablo Crasher
* BigAl607
* arcanearchivesmod
* Pongo Sapiens
* Darkosto

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/bookshelf/files/all)

### [Botania](https://www.curseforge.com/minecraft/mc-mods/botania) ([Botania-1.16.4-411.jar](https://www.curseforge.com/minecraft/mc-mods/botania/files/3175663)⟶[Botania-1.16.4-414.jar](https://www.curseforge.com/minecraft/mc-mods/botania/files/3233810))

#### [Botania-1.16.4-414.jar](https://www.curseforge.com/minecraft/mc-mods/botania/files/3233810)

[https://botaniamod.net/changelog.php](https://botaniamod.net/changelog.php)

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/botania/files/all)

### [Botany Pots](https://www.curseforge.com/minecraft/mc-mods/botany-pots) ([BotanyPots-1.16.5-7.0.8.jar](https://www.curseforge.com/minecraft/mc-mods/botany-pots/files/3198920)⟶[BotanyPots-1.16.5-7.0.9.jar](https://www.curseforge.com/minecraft/mc-mods/botany-pots/files/3232394))

#### [BotanyPots-1.16.5-7.0.9.jar](https://www.curseforge.com/minecraft/mc-mods/botany-pots/files/3232394)

* Added support for Supplementaries Flax. Thanks to AlleCraft. Closes #151 - Tyler Hancock
* Added support for SilentGear's Fluffy Puff seeds. Thanks to AlleCraft. Closes #150 - Tyler Hancock
* Added support for Neapolitan's Strawberry and Vanilla plants. Thanks to AlleCraft. Closes #155 - Tyler Hancock
* Restructured CraftTweaker recipe manager classes. - Tyler Hancock
* Compile against newer CrT and Forge. - Tyler Hancock
* Formatted files. - Tyler Hancock
* Fix rounding errors in JEI support. Closes #145 - Tyler Hancock

Like the mod? Consider following me on [Twitter](https://twitter.com/darkhaxdev) and joining the [Discord](https://discord.darkhax.net/)

Huge thanks to my supporters on [Patreon](https://www.patreon.com/Darkhax?MCChangelog?BotanyPots)

* Diablo Crasher
* BigAl607
* arcanearchivesmod
* Pongo Sapiens
* Darkosto

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/botany-pots/files/all)

### [Bountiful](https://www.curseforge.com/minecraft/mc-mods/bountiful) ([Bountiful-1.16.4-3.3.0.jar](https://www.curseforge.com/minecraft/mc-mods/bountiful/files/3183049)⟶[Bountiful-1.16.4-3.3.1.jar](https://www.curseforge.com/minecraft/mc-mods/bountiful/files/3239647))

#### [Bountiful-1.16.4-3.3.1.jar](https://www.curseforge.com/minecraft/mc-mods/bountiful/files/3239647)

[3.3.1] - 2021-03-14

Compat

* Added compatibility with Repurposed Structures villages (#113)

Added

* Full Spanish language support, thanks to FrannDzs

Changes

* Moved items to the Miscellaneous itemgroup

Fixes

* Fixed the occasional 'air' bounty when using Bountiful with Quark. (#110)
* Fixed a rare crash having to do with Decrees (#97, #120)
* Cleaned up output log (#99, #111)

### [CC: Tweaked](https://www.curseforge.com/minecraft/mc-mods/cc-tweaked) ([cc-tweaked-1.16.4-1.95.2.jar](https://www.curseforge.com/minecraft/mc-mods/cc-tweaked/files/3170424)⟶[cc-tweaked-1.16.4-1.95.3.jar](https://www.curseforge.com/minecraft/mc-mods/cc-tweaked/files/3236650))

#### [cc-tweaked-1.16.4-1.95.3.jar](https://www.curseforge.com/minecraft/mc-mods/cc-tweaked/files/3236650)

Release notes can be found on the GitHub repository ([https://github.com/SquidDev-CC/CC-Tweaked/releases/tag/v1.16.4-1.95.3](https://github.com/SquidDev-CC/CC-Tweaked/releases/tag/v1.16.4-1.95.3)).

### [Chisels & Bits](https://www.curseforge.com/minecraft/mc-mods/chisels-bits) ([C&B 0.2.10](https://www.curseforge.com/minecraft/mc-mods/chisels-bits/files/3176033)⟶[C&B 0.3.4](https://www.curseforge.com/minecraft/mc-mods/chisels-bits/files/3234842))

#### [C&B 0.3.4](https://www.curseforge.com/minecraft/mc-mods/chisels-bits/files/3234842)

Changelog:

* Fix the item models for droppen and picked up chiseled blocks of type grass or wood.

#### [4 more entries](https://www.curseforge.com/minecraft/mc-mods/chisels-bits/files/all)

### [Cloth Config API (Forge)](https://www.curseforge.com/minecraft/mc-mods/cloth-config-forge) ([[Forge 1.16.4/5] v4.11.14](https://www.curseforge.com/minecraft/mc-mods/cloth-config-forge/files/3210411)⟶[[Forge 1.16.4/5] v4.11.15](https://www.curseforge.com/minecraft/mc-mods/cloth-config-forge/files/3235778))

#### [[Forge 1.16.4/5] v4.11.15](https://www.curseforge.com/minecraft/mc-mods/cloth-config-forge/files/3235778)

No changelog available.

### [Common Capabilities](https://www.curseforge.com/minecraft/mc-mods/common-capabilities) ([CommonCapabilities-1.16.5-2.5.6.jar](https://www.curseforge.com/minecraft/mc-mods/common-capabilities/files/3206369)⟶[CommonCapabilities-1.16.5-2.5.7.jar](https://www.curseforge.com/minecraft/mc-mods/common-capabilities/files/3226478))

#### [CommonCapabilities-1.16.5-2.5.7.jar](https://www.curseforge.com/minecraft/mc-mods/common-capabilities/files/3226478)

As always, don't forget to backup your world before updating!

Requires CyclopsCore version 1.11.1 or higher.

Fixes:

* Fix incorrect version checker URL, Closes #29

### [Compact Machines](https://www.curseforge.com/minecraft/mc-mods/compact-machines) ([compactmachines-4.0.0-alpha.8.jar](https://www.curseforge.com/minecraft/mc-mods/compact-machines/files/3200092)⟶[compactmachines-4.0.0-beta.2.jar](https://www.curseforge.com/minecraft/mc-mods/compact-machines/files/3229196))

#### [compactmachines-4.0.0-beta.2.jar](https://www.curseforge.com/minecraft/mc-mods/compact-machines/files/3229196)

v4.0.0-beta.2

Fixes

* Fix groupid in build file (remove dupe modid) [[eb0fed75e9](https://github.com/CompactMods/CompactMachines/commit/eb0fed75e96fe6e832adfedb83d606b2dd56b5af)]
* Fix bug where large machines would be disallowed by CM tile entity type [[75a3fe6893](https://github.com/CompactMods/CompactMachines/commit/75a3fe68932329055ec376450752cfc3dc11877a)]
* Fix shenanigans with wall blocks; closes #455 ([contributed](https://github.com/CompactMods/CompactMachines/pull/45) by [robotgryphon](https://github.com/robotgryphon)) [[8f8300dcf4](https://github.com/CompactMods/CompactMachines/commit/8f8300dcf4d21893f6934edbb32bef6de3c7db2a)]
* Fix weird lighting issue [[811f01669c](https://github.com/CompactMods/CompactMachines/commit/811f01669cbb516d3a84925c9364546122e0e27a)]
* Fix breakable tunnels, update Tunnel Wall en_us lang [[acdf98bc92](https://github.com/CompactMods/CompactMachines/commit/acdf98bc92ec8202995a26dad07838b60b3d6d00)]

Other

* actions: Split maven publish in tagged release [[9f512cd792](https://github.com/CompactMods/CompactMachines/commit/9f512cd792e39df4bcb4dea5fa4fa422cd5ba299)]
* Add manual GH packages action [[7b29667d4e](https://github.com/CompactMods/CompactMachines/commit/7b29667d4ecc7f021bf614a2150daf14c736ba1e)]
* actions: Manual package, environment wasn't set up [[32814e1aef](https://github.com/CompactMods/CompactMachines/commit/32814e1aeffe07d692edc08d58aed31cef513c60)]
* actions: Manual package, environment wasn't set up [[638e706031](https://github.com/CompactMods/CompactMachines/commit/638e706031dc8942f4105909b830ab134b1c1bd9)]
* Casing is important on Linux systems [[86b588ed64](https://github.com/CompactMods/CompactMachines/commit/86b588ed64c21bc4fd6d284be9a68cd270cc49d4)]
* One more try for the actors in the back (missing GH_ACTOR in publish) [[ac3ff98b20](https://github.com/CompactMods/CompactMachines/commit/ac3ff98b2031adf96f94336b83aae9408906ea7b)]
* Publish: Shuffle some build properties around for publishing [[00d266716a](https://github.com/CompactMods/CompactMachines/commit/00d266716a3e68118b8bc8804b19352cfd876b66)]
* Add first pass of configurable floor Y level. [[d9562327fc](https://github.com/CompactMods/CompactMachines/commit/d9562327fcc2d2e1ea83287c950abb30d1869779)]
* Update JEI api, update forge to latest 1.16.5 [[abca19ef2d](https://github.com/CompactMods/CompactMachines/commit/abca19ef2dc2503022b5d8fad4b5c6f0116099ae)]
* Remove unnecessary build files, disable harvesting of solid walls, cleanup [[6163df901c](https://github.com/CompactMods/CompactMachines/commit/6163df901c9f6f1aa9f55f958cd6147e44554941)]
* Update TOP; final prep for beta-1 build [[9f985dc7c8](https://github.com/CompactMods/CompactMachines/commit/9f985dc7c864aa267cd9de4b92b3dc234b926dbe)]
* Version bump to 4.0.0 beta 2 (bugfixes) [[1f3e21dcde](https://github.com/CompactMods/CompactMachines/commit/1f3e21dcde339a2458af8eee07346e888cd5bcad)]

For more details, see [v4.0.0-alpha.8..v4.0.0-beta.2](https://github.com/CompactMods/CompactMachines/compare/v4.0.0-alpha.8...v4.0.0-beta.2)

### [Connected Glass](https://www.curseforge.com/minecraft/mc-mods/connected-glass) ([connectedglass-1.0.6a-mc1.16.5](https://www.curseforge.com/minecraft/mc-mods/connected-glass/files/3207412)⟶[connectedglass-1.0.7-mc1.16.5](https://www.curseforge.com/minecraft/mc-mods/connected-glass/files/3232983))

#### [connectedglass-1.0.7-mc1.16.5](https://www.curseforge.com/minecraft/mc-mods/connected-glass/files/3232983)

* Added Russian translations (thanks to Gregorius_MC!)

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/connected-glass/files/all)

### [Cooking for Blockheads](https://www.curseforge.com/minecraft/mc-mods/cooking-for-blockheads) ([CookingForBlockheads 1.16.x 9.2.2](https://www.curseforge.com/minecraft/mc-mods/cooking-for-blockheads/files/3098223)⟶[CookingForBlockheads_1.16.5-9.3.1.jar](https://www.curseforge.com/minecraft/mc-mods/cooking-for-blockheads/files/3238962))

#### [CookingForBlockheads_1.16.5-9.3.1.jar](https://www.curseforge.com/minecraft/mc-mods/cooking-for-blockheads/files/3238962)

Fixed crash on server startup

Added ability to name all container blocks in an anvil, similar to how chests can be named

Added dispenser support for picking up milk from the milk jar with buckets

Added support for Compressed Cows from Ex Compressum, which can be turned into a Compressed Cow in a Jar

Added custom names for Cow in a Jar - will now use the name of the cow if the cow was named with a name tag

Added support for MrCrayfish's Furniture Mod kitchen blocks ([by Myares](https://github.com/blay09/CookingForBlockheads/pull/501))

Re-added the ability to place the Cutting Board from Pam's in the world

Re-added Waila support

Re-added The One Probe support

Re-added support for milk to be pulled or pushed into the milk jar through pipes

Updated Pam's Harvestcraft support to include some new ingredient items

Updated VanillaFoodPantry support to include some new tools

Fixed water in the sink not syncing ("sinking" haha) if sinkRequiresWater is enabled

Fixed water being infinite if sinkRequiresWater is enabled and exactly one bucket was present

Fixed crash on load if invalid recipes are present - now logs an error instead

Fixed lava buckets in the oven disappearing instead of emptying when used

Fixed CraftTweaker recipes no longer showing up in Cooking for Blockheads

Fixed recipe reloads not updating in Cooking for Blockheads until restart

Fixed #NoFilterEdition not being considered a book by Inspirations and other mods

Fixed arrows no longer showing up on the "previous" / "next" recipe buttons

Fixed some compatibility issues with mods interacting with the sink ([by Darkere](https://github.com/blay09/CookingForBlockheads/pull/509))

Fixed #NoFilter book popping off the cooking table if the cooking table is rotated

Fixed duplicate cutting board drops if cutting board is rotated

Fixed recipe of #NoFilterEdition - it should cost a recipe book, not a crafting book

Fixed max stack size of Preservation Chamber

Added new events "OvenCookedEvent" and "OvenItemSmeltedEvent" to allow for mod compatiblity

Added Spanish Translation ([by FrannDzs](https://github.com/blay09/CookingForBlockheads/pull/503))

Updated Korean Translation ([by yoko57822](https://github.com/blay09/CookingForBlockheads/pull/504))

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/cooking-for-blockheads/files/all)

### [Curios API (Forge)](https://www.curseforge.com/minecraft/mc-mods/curios) ([curios-forge-1.16.5-4.0.4.0.jar](https://www.curseforge.com/minecraft/mc-mods/curios/files/3186427)⟶[curios-forge-1.16.5-4.0.5.0.jar](https://www.curseforge.com/minecraft/mc-mods/curios/files/3231111))

#### [curios-forge-1.16.5-4.0.5.0.jar](https://www.curseforge.com/minecraft/mc-mods/curios/files/3231111)

Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Forge Recommended Versioning](https://mcforge.readthedocs.io/en/latest/conventions/versioning/).

[1.16.5-4.0.5.0] - 2021.03.07

Added

* ICurio#onEquip(SlotContext, ItemStack)
* ICurio#onUnequip(SlotContext, ItemStack)
* ICuriosHelper#isStackValid(SlotContext, ItemStack)

Changed

* Items that are invalidated while in a slot, due to modified tags or changed curio behavior, will now automatically eject from its slot and be given to the player
* Corrected Chinese translation (thanks qsefthuopq!) [#106](https://github.com/TheIllusiveC4/Curios/pull/106)

Deprecated

* ICurio#onEquip(String, int, LivingEntity)
* Icurio#onUnequip(String, int, LivingEntity)

[1.16.5-4.0.4.0] - 2021.01.29

Added

* SlotContext for providing and retrieving slot context throughout the API
* ICurio#getEquipSound(SlotContext) [#104](https://github.com/TheIllusiveC4/Curios/issues/104)
* ICurio#canEquipFromUse(SlotContext)
* ICurio#onEquipFromUse(SlotContext)
* ICurio#getAttributeModifiers(SlotContext, UUID)
* ICurioItem#getEquipSound(SlotContext, ItemStack)
* ICurioItem#canEquipFromUse(SlotContext, ItemStack)
* ICurioItem#onEquipFromUse(SlotContext, ItemStack)
* ICurioItem#getAttributeModifiers(SlotContext, UUID, ItemStack)
* ICuriosHelper#getAttributeModifiers(SlotContext, UUID, ItemStack)

Deprecated

* ICurio#canRightClickEquip() [#102](https://github.com/TheIllusiveC4/Curios/issues/102)
* ICurio#playRightClickEquipSound(LivingEntity) [#102](https://github.com/TheIllusiveC4/Curios/issues/102)
* ICurio#getAttributeModifiers(String)
* ICurioItem#canRightClickEquip(ItemStack) [#102](https://github.com/TheIllusiveC4/Curios/issues/102)
* ICurioItem#playRightClickEquipSound(LivingEntity, ItemStack) [#102](https://github.com/TheIllusiveC4/Curios/issues/102)
* ICurioItem#getAttributeModifiers(String, ItemStack)
* ICuriosHelper#getAttributeModifiers(String, ItemStack)

[1.16.4-4.0.3.5] - 2021.01.14

Fixed

* Fixed crash related to performing logic on empty itemstacks

[1.16.4-4.0.3.4] - 2021.01.12

Fixed

* Fixed command slot type identification for dedicated servers

[1.16.4-4.0.3.3] - 2020.12.31

Added

* Added Korean localization (thanks othuntgithub!) [#97](https://github.com/TheIllusiveC4/Curios/pull/97)

[1.16.4-4.0.3.2] - 2020.12.26

Changed

* Reverted ICurio#onUnequip change from 4.0.3.1

[1.16.4-4.0.3.1] - 2020.12.26

Changed

* [API] ICurio#onUnequip now passes the actual ItemStack instance instead of a copy

[1.16.4-4.0.3.0] - 2020.11.24

[(116 more lines)](https://www.curseforge.com/minecraft/mc-mods/curios/files/3231111)

### [Curious Elytra (Forge)](https://www.curseforge.com/minecraft/mc-mods/curious-elytra) ([curiouselytra-forge-1.16.5-4.0.2.1.jar](https://www.curseforge.com/minecraft/mc-mods/curious-elytra/files/3224508)⟶[curiouselytra-forge-1.16.5-4.0.2.3.jar](https://www.curseforge.com/minecraft/mc-mods/curious-elytra/files/3231248))

#### [curiouselytra-forge-1.16.5-4.0.2.3.jar](https://www.curseforge.com/minecraft/mc-mods/curious-elytra/files/3231248)

Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project does not adhere to [Semantic Versioning](http://semver.org/spec/v2.0.0.html). This project uses MCVERSION-MAJORMOD.MAJORAPI.MINOR.PATCH.

[1.16.5-4.0.2.3] - 2021.03.07

Fixed

* Fixed elytra ticking logic [#17](https://github.com/TheIllusiveC4/CuriousElytra/issues/17)

[1.16.5-4.0.2.2] - 2021.03.07

Changed

* Refactored some logic for the elytra curio

[1.16.5-4.0.2.1] - 2021.03.02

Fixed

* Fixed elytras working while broken [#16](https://github.com/TheIllusiveC4/CuriousElytra/issues/16)

[1.16.5-4.0.2.0] - 2021.01.21

Added

* Added Silent Gear Elytra rendering integration

[1.16.5-4.0.1.0] - 2021.01.21

Added

* Added Enderite Mod integration
* Added Netherite Plus integration

Changed

* Updated to 1.16.5

[1.16.3-4.0.0.1] - 2020.09.27

Changed

* Updated to 1.16.3

[1.16.2-4.0.0.0] - 2020.08.14

Changed

* Updated to 1.16.2

[3.0](https://github.com/TheIllusiveC4/CuriousElytra/compare/1.15.x...master) - 2020.07.02

Changed

* Ported to 1.16.1 Forge

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/curious-elytra/files/all)

### [Dark Utilities](https://www.curseforge.com/minecraft/mc-mods/dark-utilities) ([DarkUtilities-1.16.5-8.0.4.jar](https://www.curseforge.com/minecraft/mc-mods/dark-utilities/files/3215025)⟶[DarkUtilities-1.16.5-8.0.6.jar](https://www.curseforge.com/minecraft/mc-mods/dark-utilities/files/3246552))

#### [DarkUtilities-1.16.5-8.0.6.jar](https://www.curseforge.com/minecraft/mc-mods/dark-utilities/files/3246552)

* Merge branch '1.16.5' of [https://github.com/Darkhax-Minecraft/Dark-Utilities](https://github.com/Darkhax-Minecraft/Dark-Utilities) into 1.16.5 - Tyler Hancock
* Add a push warning to players walking on vector plates. - Tyler Hancock
* Add dev environment command to quickly set up a debug server using the mod. - Tyler Hancock
* Anchor plate will now tell players how to get off the plate. Closes #251 - Tyler Hancock

Huge thanks to my supporters on [Patreon](https://www.patreon.com/Darkhax?MCChangelog?DarkUtilities)

* Diablo Crasher
* BigAl607
* arcanearchivesmod
* Pongo Sapiens
* Darkosto

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/dark-utilities/files/all)

### [Diet (Forge)](https://www.curseforge.com/minecraft/mc-mods/diet) ([diet-forge-1.16.5-0.13.jar](https://www.curseforge.com/minecraft/mc-mods/diet/files/3225669)⟶[diet-forge-1.16.5-0.17.jar](https://www.curseforge.com/minecraft/mc-mods/diet/files/3241528))

#### [diet-forge-1.16.5-0.17.jar](https://www.curseforge.com/minecraft/mc-mods/diet/files/3241528)

Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to the format [MCVERSION-MAJORMOD.MAJORAPI.MINOR.PATCH](https://mcforge.readthedocs.io/en/1.15.x/conventions/versioning/).

[1.16.5-0.17] - 2021.03.16

Added

* Added five-food-group support for:
* Food Enhancements
* Added "RESET" to config option for death penalties to reset values to defaults

Changed

* Updated five-food-group support for:
* Autumnity
* Bloom and Gloom
* Players no longer gain diet values when full

[1.16.5-0.16] - 2021.03.13

Added

* Partial Taiwanese translation (thanks Pancakes0228!) [#22](https://github.com/TheIllusiveC4/Diet/pull/22)
* Added five-food-group support for:
* Forbidden and Arcanus
* Good Night's Sleep
* Silent's Mechanisms
* Untitled Duck Mod

Fixed

* Fixed potential NPE crashes [#23](https://github.com/TheIllusiveC4/Diet/issues/23)

[1.16.5-0.15] - 2021.03.10

Added

* Added five-food-group support for:
* Pandoras Creatures

Fixed

* Fixed potential NPE crashes [#21](https://github.com/TheIllusiveC4/Diet/issues/21)

[1.16.5-0.14] - 2021.03.08

Added

* Added five-food-group support for:
* Abundance
* Bayou Blues
* Blueberry
* Drop the Meat
* Golden Beetroot Mod
* Added percentage-based death penalty config option [#17](https://github.com/TheIllusiveC4/Diet/issues/17)
* Added food quality overrides list config option

Changed

* Increased overall gain rate of all foods for every food group by 20%

[1.16.5-0.13] - 2021.03.03

Fixed

* Fixed GUI cross-mod compatibility issues [#16](https://github.com/TheIllusiveC4/Diet/issues/16)
* Fixed food blocks not giving diet values [#6](https://github.com/TheIllusiveC4/Diet/issues/6)

[1.16.5-0.12] - 2021.03.02

Changed

* Polished up dietary effects tooltip

Fixed

* [API] Fixed potential infinite loop in IMC calls [#15](https://github.com/TheIllusiveC4/Diet/issues/15)

[(95 more lines)](https://www.curseforge.com/minecraft/mc-mods/diet/files/3241528)

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/diet/files/all)

### [Emendatus Enigmatica](https://www.curseforge.com/minecraft/mc-mods/emendatus-enigmatica) ([EmendatusEnigmatica-1.16.5-1.2.2](https://www.curseforge.com/minecraft/mc-mods/emendatus-enigmatica/files/3221979)⟶[EmendatusEnigmatica-1.16.5-1.2.3](https://www.curseforge.com/minecraft/mc-mods/emendatus-enigmatica/files/3233422))

#### [EmendatusEnigmatica-1.16.5-1.2.3](https://www.curseforge.com/minecraft/mc-mods/emendatus-enigmatica/files/3233422)

Emendatus Enigmatica

MC 1.16.5 | Version 1.2.3

* Added Clusters to help with inv management when mining.
* Added custom layer renderer for Patreon Rewards.

### [Engineer's Decor](https://www.curseforge.com/minecraft/mc-mods/engineers-decor) ([engineersdecor-1.16.4-1.1.8.jar](https://www.curseforge.com/minecraft/mc-mods/engineers-decor/files/3221407)⟶[engineersdecor-1.16.4-1.1.10.jar](https://www.curseforge.com/minecraft/mc-mods/engineers-decor/files/3244958))

#### [engineersdecor-1.16.4-1.1.10.jar](https://www.curseforge.com/minecraft/mc-mods/engineers-decor/files/3244958)

* v1.1.10    [A] Added Small Lab Furnace config for accepted speed-boost heaters (PR#165, ty mrh0).

[F] Fixed Labeled Crate mouse scrolling crash (issue #169, ty vaelzan).

* v1.1.9     [A] Dark Shingle Roof Wire Conduit recipe added.

[F] Fixed Ladder climbing (affects forge>=36.0.45, issue #167, thx ZED).

* v1.1.8     [F] Crafting Table Output slot sync rework (issue #138).

[A] Dark Shingle Roof Wire Conduit added (CFR#347).

* v1.1.8-b2  [F] Fixed Iron Hatch isLadder bug (thx jerryw09).

[F] Fixed Block Placer block placing pre-conditions (issue #160, ty XFactHD).

[F] Added explicit scheduled Crafting Table client sync.

[F] Fixed directional waterloggable block default state forwarding (issue #162, ty b52src).

* v1.1.8-b1  [F] Fluid Funnel waterlogged fluid picking fixed (issue #158, thx ZoMadeStuff).

[F] Roof rendering fixes (issues #153/#159, thx Salamance73/Murph).

[A] Recessed Clinkers, Vertically Slit Clinkers, and Structured Vertical Clinker Slab added.

* v1.1.7     [M] 1.16.5 support.

[F] Fixed Labeled Crate include (issue #157, ty NillerMedDild).

* v1.1.6     [F] Added common-config opt-out specification for pack level opt-outs (issue #154,

ty gekkone), will replace server config opt-out in MC1.17.

* v1.1.6-b3  [M] Config logging edited, E-Furnace GUI capacitor tooltip added, E-Furnace power consumption

independent of config speed setting (issue #152 ty Staegrin).

* v1.1.6-b2  [M] Alternative Clinker Brick recipe (swapped Bricks/Nether Bricks) added.

[M] Furnace XP handling simplified (simply stores/releases XP for each smelting process).

[M] Mod devices do not propagate strong Redstone power to adjacent blocks.

[M] Minor "librarizing" changes under the hood.

* v1.1.6-b1  [F] Fixed Metal Crafting Table Hopper access (issue #147, ty umerrr).

[F] Fixed Dark Shingle Roof Chimney placement restriction (issue #149, thx WenXin20).

[F] Door tags added for Wood Door and Metal Sliding Door (issue #150, thx WenXin20).

[A] Electrical Furnace automatically chokes speed and power consumption when the internally

stored power is below 20%.

* v1.1.5     [R] Release build v1.1.5.

[F] Fixed Crafting Table JEI storage slot count.

[F] Fixed Factory Hopper removed item collection dupe bug (issue #146, thx FatheredPuma81).

[F] Increased device GUI access ranges beyond the player block selection range.

[A] Window placement handling improved.

[M] Steel/Wood Pole and Double-T support placement improved (issue #139, thx Biviho).

[M] Metal Sliding Door bottom/top shape when opened added.

* v1.1.4     [R] Release build v1.1.4.

[F] Solar Panel balancing threshold tuned.

[F] Fixed Catwalk default state (issue #140, thx hvdklauw).

[M] Updated lang ru_ru file (PR#137, Smollet777).

[M] Factory Dropper: Added Ignore-External-Redstone mode.

* v1.1.4-b2  [A] Steel Catwalks added (top and bottom aligned).

[A] Steel Railings added.

[F] Fixed Empty Fluid Barrel crafting crash (ty inflamedsebi).

[A] Added Solar Panel power balancing.

[M] GUI Button tooltip delay reduced to 800ms.

[M] Hopper and Placer: Added "Redstone ignored" mode, changed icons from signal-like to Redstone-Torch-like.

[M] Treated Wood Ladder now crafted from Old Industrial Wood, as Treated Wood Sticks now count as normal Sticks.

* v1.1.4-b1  [U] Ported to 1.16.4.
* v1.1.3     [R] Release build v1.1.3.
* v1.1.3-b3  [A] Metal Sliding Door added (double door wing style).

[(39 more lines)](https://www.curseforge.com/minecraft/mc-mods/engineers-decor/files/3244958)

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/engineers-decor/files/all)

### [FTB Chunks](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks) ([ftb-chunks-1604.2.2.62.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks/files/3189022)⟶[ftb-chunks-1605.2.3-build.71.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks/files/3236808))

#### [ftb-chunks-1605.2.3-build.71.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks/files/3236808)

* Fixed large map showing wrong block at mouse position - LatvianModder
* Added no_wilderness in server config, allows to force players to claim chunks to interact with them - LatvianModder
* Added /ftbchunks admin bypass_protection, fixed items not being right-clickable in protected chunks - LatvianModder

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks/files/all)

### [FTB GUI Library](https://www.curseforge.com/minecraft/mc-mods/ftb-gui-library) ([ftb-gui-library-1605.2.1.40-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-gui-library/files/3214262)⟶[ftb-gui-library-1605.2.1.41-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-gui-library/files/3237039))

#### [ftb-gui-library-1605.2.1.41-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-gui-library/files/3237039)

* Add mavenlocal publishing - Max

### [FTB Quests](https://www.curseforge.com/minecraft/mc-mods/ftb-quests) ([ftb-quests-1605.2.0-build.32-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-quests/files/3217206)⟶[ftb-quests-1605.2.1-build.35-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-quests/files/3243885))

#### [ftb-quests-1605.2.1-build.35-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-quests/files/3243885)

* Added image support in quest descriptions - use {image: mod:path/image.png width:200 height:100} - LatvianModder
* Fixed recursive text formatting in quest descriptions from translation keys - LatvianModder
* Fixed more z-fighting issues, removed chapter group menu from settings, moved creation and editing of them to chapter list - LatvianModder

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/ftb-quests/files/all)

### [FTB Teams](https://www.curseforge.com/minecraft/mc-mods/ftb-teams) ([ftb-teams-1604.1.0.15-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-teams/files/3182798)⟶[ftb-teams-1604.1.0.16-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-teams/files/3237174))

#### [ftb-teams-1604.1.0.16-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-teams/files/3237174)

* More minor buildscript adjustments - Max
* Update to arch 3, migrate buildscripts - Max
* Add maven-publish workflow - Max

### [FTB Ultimine](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine) ([ftb-ultimine-1605.2.0-build.23-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine/files/3226218)⟶[ftb-ultimine-1605.2.0-build.25-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine/files/3237136))

#### [ftb-ultimine-1605.2.0-build.25-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine/files/3237136)

* Fix maven-publish - Max

### [FastWorkbench](https://www.curseforge.com/minecraft/mc-mods/fastworkbench) ([FastWorkbench-1.16.4-4.5.0.jar](https://www.curseforge.com/minecraft/mc-mods/fastworkbench/files/3171218)⟶[FastWorkbench-1.16.4-4.5.1.jar](https://www.curseforge.com/minecraft/mc-mods/fastworkbench/files/3245271))

#### [FastWorkbench-1.16.4-4.5.1.jar](https://www.curseforge.com/minecraft/mc-mods/fastworkbench/files/3245271)

Fixed dynamic recipes being unable to have their outputs updated.

Fixed being unable to throw items from within the crafting table gui when the recipe book was turned off.

### [ForgeEndertech](https://www.curseforge.com/minecraft/mc-mods/forgeendertech) ([ForgeEndertech-1.16.4-7.0.10.0-build.0037.jar](https://www.curseforge.com/minecraft/mc-mods/forgeendertech/files/3183055)⟶[ForgeEndertech-1.16.4-7.1.0.0-build.0075.jar](https://www.curseforge.com/minecraft/mc-mods/forgeendertech/files/3246245))

#### [ForgeEndertech-1.16.4-7.1.0.0-build.0075.jar](https://www.curseforge.com/minecraft/mc-mods/forgeendertech/files/3246245)

7.1.0.0

* implemented: correct BlockStatesSet.removeAll method
* implemented: correct BlockStatesMap.addAll method
* implemented: ItemModel.Properties class
* implemented: BlockStateChange event
* implemented: ForgeBucketItem class
* implemented: ForgeBlock.Properties class
* implemented: RegistryEntriesInit class
* implemented: ChestWearRenderer class
* implemented: TileInventory class
* implemented: ForgeTileWithInventory class
* implemented: ITickableUnit interface
* added: SmokeContainers.maxBlocksInMultiblock config parameter
* added: ItemModel.IModelWrapperFactory interface
* added: ItemModel.BuiltIn class
* added: GlassMeterRenderer class
* added: IEmitter.Type enum
* added: proper event for registering item model properties
* added: better method for replacing item models
* added: GameMath.isNan method
* added: UnitsInit.addNew method
* added: ForgeMod.getModEventBus method
* added: ForgeMod.registerTileRenderer method
* added: ForgeMod.setRenderLayer method
* added: ForgeMod.registerContainerScreen method
* added: ForgeMod.addPlayerRenderLayer method
* added: ForgeTileEntity.syncWithClients method
* added: ForgeEntity.rayTraceEntityBeingLookedAt method
* added: BlockStateCarrier.carriesSameBlock method
* added: Tooltip.addRaw method
* added: ChunkLoc.existIn and ChunkLoc.getChunk methods
* improved: UnitId class to work with fluids
* improved: RelatedUnitsInit class to work with fluids
* improved: ISmokeContainer interface
* improved: ForgeEmitter.Properties class
* improved: ForgeEntity.rayTraceBlockBeingLookedAt method
* improved: UnitsInitWithEnum class to allow reload configs
* replaced: all nullables in BlockStateCarrier class with optionals
* replaced: ForgeTileEntityBlock class with ForgeTiledBlock
* reworked: GameWorld.Directions class
* reworked: Common.CachedValue class
* removed: IWithMeta interface
* fixed: not working hook for RandomTickEvent
* fixed: UnitId.toConfigName not removing metadata
* fixed: issues with syncing TileEntities on initial chunk loading
* fixed: bizarre scientific format of small values in configs
* requires: Forge 35.1.4 or above

### [Game Stages](https://www.curseforge.com/minecraft/mc-mods/game-stages) ([GameStages-1.16.5-6.0.1.jar](https://www.curseforge.com/minecraft/mc-mods/game-stages/files/3184325)⟶[GameStages-1.16.5-7.1.4.jar](https://www.curseforge.com/minecraft/mc-mods/game-stages/files/3246556))

#### [GameStages-1.16.5-7.1.4.jar](https://www.curseforge.com/minecraft/mc-mods/game-stages/files/3246556)

* Update issue templates - Tyler Hancock

Like the mod? Consider following me on [Twitter](https://twitter.com/darkhaxdev) and joining the [Discord](https://discord.darkhax.net/)

Huge thanks to my supporters on [Patreon](https://www.patreon.com/Darkhax?MCChangelog?GameStages)

* Diablo Crasher
* BigAl607
* arcanearchivesmod
* Pongo Sapiens
* Darkosto

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/game-stages/files/all)

### [Immersive Engineering](https://www.curseforge.com/minecraft/mc-mods/immersive-engineering) ([ImmersiveEngineering-1.16.5-4.2.2-132](https://www.curseforge.com/minecraft/mc-mods/immersive-engineering/files/3225348)⟶[ ImmersiveEngineering-1.16.5-4.2.4-134](https://www.curseforge.com/minecraft/mc-mods/immersive-engineering/files/3233018))

#### [ ImmersiveEngineering-1.16.5-4.2.4-134](https://www.curseforge.com/minecraft/mc-mods/immersive-engineering/files/3233018)

* Fix issues with the manual (BluSunrize)

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/immersive-engineering/files/all)

### [Immersive Petroleum](https://www.curseforge.com/minecraft/mc-mods/immersive-petroleum) ([ImmersivePetroleum-1.16.4-3.1.0-2.jar](https://www.curseforge.com/minecraft/mc-mods/immersive-petroleum/files/3143267)⟶[ImmersivePetroleum-1.16.5-3.2.0-3.jar](https://www.curseforge.com/minecraft/mc-mods/immersive-petroleum/files/3235657))

#### [ImmersivePetroleum-1.16.5-3.2.0-3.jar](https://www.curseforge.com/minecraft/mc-mods/immersive-petroleum/files/3235657)

1.16.5-3.2.0-3

---------------------------------------

Minimum Forge: 36.0.27

Minimum IE: 1.16.5-4.2.2-132

* Added IPs logo to mod menu. (TwistedGate)

! Fixed Diesel and Lubricant not filling a bucket. (TwistedGate)

! Fixed NoSuchMethodError crash related to Utils.drainFluidContainer in distiliation tower. (TwistedGate)

! Fixed attempted to load I18n class on server by Projector. (TwistedGate)

! Fixed asphalt concrete not dropping itself. (TwistedGate)

~ Changed to using Loot Tables. (Also fixes Asphalt not dropping itself) Includes Asphalt, Portable Generator, Flarestack, the Autolube and all multiblocks. (TwistedGate)

~ Increased Portable Generator storage back to 100kRf (TwistedGate)

~ Changed flarestack to use a fluidtag to determine if it can burn a fluid. (TwistedGate)

~ Changed Oil Can and Automatic Lubricator to use fluidtags. (TwistedGate)

~ Changed CraftTweaker-Compat to reflect the flarestack and Oil Can + Automatic Lubricator changes. (TwistedGate)

1.6.4-3.1.0-2

---------------------------------------

Minimum Forge: 35.1.0

Minimum IE: 4.1.2-129

! Fixed NoSuchMethodError crash related to IETemplateMultiblock (TwistedGate)

~ Changed asphalt recipes to use fluidtag (TwistedGate)

~ Changed version format to MC-API-Release (TwistedGate)

3.1.0 [1.6.3]

---------------------------------------

This may break existing worlds. Please read below befor updating!

Break and then re-place a single block on every distillation tower in the world. Still make a backup of your world just incase.

After updating and doing the prior you can then whack them with the hammer on the redstone block again and everything should be golden

Deconstructing the multiblock prior to updating will be nessesary to avoid problems!!!

Thank you for your time. ~TwistedGate

* Added Flarestack (TwistedGate)

! Fixed missing napalm recipe (TwistedGate)

! Fixed reservoirs not being shown on servers (TwistedGate)

! Fixed crash when clicking the box button in the Pumpjack multiblock page (TwistedGate)

! Fixed projector conveyor rotations in projection and creative placement (TwistedGate)

~ Overhauled the Projector (TwistedGate)

~ Moved Distillation Tower master block more towards the center in hopes of fixing disapearing GUI (TwistedGate)

~ Removed unused assets to decrease filesize (TwistedGate)

~ Changed default keybind for projection mirroring to M (TwistedGate)

3.0.0 [1.6.3]

---------------------------------------

! Fixed crash when closing the manual on a server.

2.0.0 [1.14.4]

---------------------------------------

* Added JEI compat for Distillation Tower (TwistedGate)

~ Overhauled CraftTweaker compat to be more flexible (TwistedGate)

~ Distillation Tower output fluids more efficiently (TwistedGate)

! Fixed Distillation Tower model flickering (TwistedGate)

! Distillation Recipes and Reservoirs can now be created using a DataPack (TwistedGate)

1.1.9

---------------------------------------

! Update for GUI change in IE build 80

[(111 more lines)](https://www.curseforge.com/minecraft/mc-mods/immersive-petroleum/files/3235657)

### [Immersive Posts](https://www.curseforge.com/minecraft/mc-mods/immersiveposts) ([Immersive Posts 3.0.0](https://www.curseforge.com/minecraft/mc-mods/immersiveposts/files/3092448)⟶[Immersive Posts 4.0.0](https://www.curseforge.com/minecraft/mc-mods/immersiveposts/files/3231239))

#### [Immersive Posts 4.0.0](https://www.curseforge.com/minecraft/mc-mods/immersiveposts/files/3231239)

Minimum Forge version: 1.16.5-36.0.27 (Because of IE)

Minimum IE version: 1.16.5-4.2.2-132

[A] Loot Tables for Posts, PostBase and Fences. (Parker8283 & TwistedGate)

[A] Added Spanish (es_es) language. (FrannDzs)

[F] Manual text not being resolved from lang file in "Accepted Blocks" index pages. (Parker8283)

[F] Fences not dropping themselves when broken. (Parker8283)

### [Integrated Crafting](https://www.curseforge.com/minecraft/mc-mods/integrated-crafting) ([IntegratedCrafting-1.16.5-1.0.12.jar](https://www.curseforge.com/minecraft/mc-mods/integrated-crafting/files/3225384)⟶[IntegratedCrafting-1.16.5-1.0.13.jar](https://www.curseforge.com/minecraft/mc-mods/integrated-crafting/files/3231829))

#### [IntegratedCrafting-1.16.5-1.0.13.jar](https://www.curseforge.com/minecraft/mc-mods/integrated-crafting/files/3231829)

As always, don't forget to backup your world before updating!

Requires CyclopsCore version 1.11.1 or higher.

Fixes:

* Fix rare cases where overlapping jobs would cause halting

If a job would cause items to be added to the network,

and another job would consume those items in parallel,

the outputs of the first job could be consumed by the second job,

so that the first job sometimes would not be marked as completed.

Closes #48

### [Integrated Dynamics](https://www.curseforge.com/minecraft/mc-mods/integrated-dynamics) ([IntegratedDynamics-1.16.5-1.5.1.jar](https://www.curseforge.com/minecraft/mc-mods/integrated-dynamics/files/3225379)⟶[IntegratedDynamics-1.16.5-1.6.1.jar](https://www.curseforge.com/minecraft/mc-mods/integrated-dynamics/files/3239115))

#### [IntegratedDynamics-1.16.5-1.6.1.jar](https://www.curseforge.com/minecraft/mc-mods/integrated-dynamics/files/3239115)

As always, don't forget to backup your world before updating!

Requires CyclopsCore version 1.11.1 or higher.

Fixes:

* Fix crash when cables are removed indirectly, Closes #1005
* Fix Materializer not being able to handle curried operators, Closes #1004
* Fix wrong text rendering in delay gui
* Fix Materializer and Proxy not immediately noticing slot changes, #1004
* Fix crash when inserting invalid sound name in audio writer, Closes #1006

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/integrated-dynamics/files/all)

### [Integrated NBT](https://www.curseforge.com/minecraft/mc-mods/integrated-nbt) ([integratednbt-1.16.4-1.4.1.jar](https://www.curseforge.com/minecraft/mc-mods/integrated-nbt/files/3192227)⟶[integratednbt-1.16.4-1.4.2.jar](https://www.curseforge.com/minecraft/mc-mods/integrated-nbt/files/3228821))

#### [integratednbt-1.16.4-1.4.2.jar](https://www.curseforge.com/minecraft/mc-mods/integrated-nbt/files/3228821)

* Fix right clicking NBT Extractor lets handheld item to trigger
* Auto scroll when content is out of view

### [Integrated Tunnels](https://www.curseforge.com/minecraft/mc-mods/integrated-tunnels) ([IntegratedTunnels-1.16.5-1.6.17.jar](https://www.curseforge.com/minecraft/mc-mods/integrated-tunnels/files/3225375)⟶[IntegratedTunnels-1.16.5-1.7.0.jar](https://www.curseforge.com/minecraft/mc-mods/integrated-tunnels/files/3239110))

#### [IntegratedTunnels-1.16.5-1.7.0.jar](https://www.curseforge.com/minecraft/mc-mods/integrated-tunnels/files/3239110)

As always, don't forget to backup your world before updating!

Requires CyclopsCore version 1.11.1 or higher.

Additions:

* Add item and fluid network aspects to Network Reader, Closes #208

### [Item Filters](https://www.curseforge.com/minecraft/mc-mods/item-filters) ([item-filters-1605.2.4-build.29-forge.jar](https://www.curseforge.com/minecraft/mc-mods/item-filters/files/3206607)⟶[item-filters-1605.2.4-build.30-forge.jar](https://www.curseforge.com/minecraft/mc-mods/item-filters/files/3231742))

#### [item-filters-1605.2.4-build.30-forge.jar](https://www.curseforge.com/minecraft/mc-mods/item-filters/files/3231742)

* Fixed a fabric crash - LatvianModder

### [Just Enough Items (JEI)](https://www.curseforge.com/minecraft/mc-mods/jei) ([jei-1.16.4-7.6.1.71.jar](https://www.curseforge.com/minecraft/mc-mods/jei/files/3192904)⟶[jei-1.16.5-7.6.1.75.jar](https://www.curseforge.com/minecraft/mc-mods/jei/files/3245079))

#### [Just Enough Items (JEI) 7.6.1](https://www.curseforge.com/minecraft/mc-mods/jei/files/3245079)

* [Update for 1.16.5](https://github.com/mezz/JustEnoughItems/commit/c24d5f203d41ea277418928f74b954ed297b9123) - mezz
* [Fix #2276 Potion effects push bookmarks too far down](https://github.com/mezz/JustEnoughItems/commit/8255a01a6db0980f6e03b2b4d9d5f376bef7fd25) - mezz
* [Fix the "give command" item argument for vanilla servers (#2274)](https://github.com/mezz/JustEnoughItems/commit/c9f6756377ee04140e8489fd904b803f38a91c56) - iTitus
* [Update ja_jp.json (#2275)](https://github.com/mezz/JustEnoughItems/commit/c1857050e2f7214b57f1f7182d4fa583fd47e035) - actuallyasmartname
* [Make IIngredients outputs a List<List>> (#554)](https://github.com/mezz/JustEnoughItems/commit/2100e79b1c0d199a4180ddf75fb95f7da4728354) - mezz

### [KubeJS](https://www.curseforge.com/minecraft/mc-mods/kubejs) ([kubejs-1605.3.6-build.171-forge.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs/files/3222777)⟶[kubejs-1605.3.6-build.176-forge.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs/files/3240199))

#### [kubejs-1605.3.6-build.176-forge.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs/files/3240199)

* Added nullchecks, maybe fixed entityOf crashes - LatvianModder
* Merge pull request #91 from Hunter19823/temp - Kristiāns Micītis
* Streamline random tick callback - Max
* Merge pull request #90 from Hunter19823/patch-1 - Kristiāns Micītis
* Reformat using new code style, add .editorconfig - Max
* Changed randomTickCallback to a BiConsumer, as well as tested changes. - Hunter19823
* Update gradle.properties - Hunter19823
* Adds randomBlockTicking to BlockJS and BlockBuilder (Not Tested) - Hunter19823
* Maybe Fixed scheduledTick events being added to wrong list. - Hunter19823

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/kubejs/files/all)

### [LibX](https://www.curseforge.com/minecraft/mc-mods/libx) ([LibX-1.16.3-1.0.18.jar](https://www.curseforge.com/minecraft/mc-mods/libx/files/3225024)⟶[LibX-1.16.3-1.0.23.jar](https://www.curseforge.com/minecraft/mc-mods/libx/files/3245714))

#### [LibX-1.16.3-1.0.23.jar](https://www.curseforge.com/minecraft/mc-mods/libx/files/3245714)

* Events for random ticks - noeppi_noeppi

#### [4 more entries](https://www.curseforge.com/minecraft/mc-mods/libx/files/all)

### [Lollipop](https://www.curseforge.com/minecraft/mc-mods/lollipop) ([Lollipop-1.16.4-3.2.8.jar](https://www.curseforge.com/minecraft/mc-mods/lollipop/files/3225046)⟶[Lollipop-1.16.5-3.2.9.jar](https://www.curseforge.com/minecraft/mc-mods/lollipop/files/3232534))

#### [Lollipop-1.16.5-3.2.9.jar](https://www.curseforge.com/minecraft/mc-mods/lollipop/files/3232534)

No changelog available.

### [Lost Trinkets](https://www.curseforge.com/minecraft/mc-mods/lost-trinkets) ([LostTrinkets-1.16.4-0.1.23.jar](https://www.curseforge.com/minecraft/mc-mods/lost-trinkets/files/3225047)⟶[LostTrinkets-1.16.5-0.1.27.jar](https://www.curseforge.com/minecraft/mc-mods/lost-trinkets/files/3242497))

#### [LostTrinkets-1.16.5-0.1.27.jar](https://www.curseforge.com/minecraft/mc-mods/lost-trinkets/files/3242497)

0.1.27

* Fixed some trinkets not working.

0.1.25 & 0.1.26 (rebuild)

* Prevent disabled trinkets from being unlocked from using a Trinket item - Thanks to BlueAgent
* Added tooltip for disabled and non-random trinkets and ownership of trinket - Thanks to BlueAgent
* Added support for config reloading (banned trinkets will be removed from online players when config is reloaded) - Thanks to BlueAgent

0.1.24

* Bump MC version to 1.16.5
* Updated lollipop to v3.2.9

0.1.23

* Added magneto compatibility for Demagnetize and Botania - Thanks to BlueAgent
* Updated lollipop to v3.2.8

0.1.22

* Added Russian translation ru_ru.json - Thanks to Fr0stmatic
* Updated lollipop to v3.2.6

0.1.21

* Increased the max slotUpFactor on the config from 20 to 1000

0.1.20

* Fixed Ruby Heart trinket by trying to save last health - Thanks to BlueAgent

0.1.19

* Added config option for maximum trinket slots - Thanks to BlueAgent

0.1.18

* Re-Fixed a server crash, Closes #48

0.1.17

* Fixed a server crash, Closes #46 - Thanks to BlueAgent

0.1.16

* Fixed Mossy ring resets mining progress, Closes #16 - Thanks to BlueAgent
* Fixed Mossy ring/belt required the player to have experience, Closes #43 - Thanks to BlueAgent

0.1.15

* Fixed "Big Foot" trinket doesn't work on baby hoglins and baby zoglins, Closes #37 - Thanks to BlueAgent
* Fixed "Fire Mind" trinket does not set hoglins on fire, Closes #38 - Thanks to BlueAgent
* Fixed Dark Vexes become aggressive towards the player, Closes #39 - Thanks to BlueAgent
* Fixed WarmVoidTrinket being registered instead of BigFootTrinket - Thanks to BlueAgent
* Fixed Tha Ghost trinket functionality - Thanks to BlueAgent

0.1.14

* Fixed Lost trinkets with right click activations don't work, Closes #36 - Thanks to BlueAgent
* Fixed Silver Nail Format Error, Closes #40 - Thanks to BlueAgent
* Added Korean translation - Thanks to chironader

0.1.13

* Fixed Magical Herbs Trinket removes Neutral effects, Closes #33 - Thanks to BlueAgent

0.1.12

* Fixed Octopick incompatible with silk touch, Closes #19 - Thanks to BlueAgent
* Fixed Mining Trinkets not awarding XP, Closes #6 - Thanks to BlueAgent

0.1.11

* Fixed Karma villager discount does not consider native discounts, Closes #30 - Thanks to BlueAgent

0.1.10

* Added config for unlock cooldown delay - Thanks to BlueAgent
* Added config for non-random trinkets - Thanks to BlueAgent

0.1.9

* Fixed Tha Ghost does not work bug, Closes #20 - Thanks to BlueAgent

[(30 more lines)](https://www.curseforge.com/minecraft/mc-mods/lost-trinkets/files/3242497)

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/lost-trinkets/files/all)

### [McJtyLib](https://www.curseforge.com/minecraft/mc-mods/mcjtylib) ([McJtyLib - 1.16-5.0.17](https://www.curseforge.com/minecraft/mc-mods/mcjtylib/files/3222458)⟶[McJtyLib - 1.16-5.0.19](https://www.curseforge.com/minecraft/mc-mods/mcjtylib/files/3236516))

#### [McJtyLib - 1.16-5.0.19](https://www.curseforge.com/minecraft/mc-mods/mcjtylib/files/3236516)

McJtyLib 1.16-5.0.19

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/mcjtylib/files/all)

### [MoreVanillaLib](https://www.curseforge.com/minecraft/mc-mods/morevanillalib) ([morevanillalib-1.16.4-1.3.9.jar](https://www.curseforge.com/minecraft/mc-mods/morevanillalib/files/3145508)⟶[morevanillalib-1.16.4-1.4.0.jar](https://www.curseforge.com/minecraft/mc-mods/morevanillalib/files/3237301))

#### [morevanillalib-1.16.4-1.4.0.jar](https://www.curseforge.com/minecraft/mc-mods/morevanillalib/files/3237301)

YOU NEED TO CREATE A NEW CONFIG BECAUSE VALUES CHANGED

* re-add jei as optional dependency for curseforge - MelanX
* bump version - MelanX
* use worlds random instead of creating a new one - MelanX
* re-balance a few default values for chances - MelanX
* change default values and change chances to be doubles instead of integer. you may need to configure again if you changed the config before - MelanX
* increase max harvest level to 10 - MelanX

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/morevanillalib/files/all)

### [MythicBotany](https://www.curseforge.com/minecraft/mc-mods/mythicbotany) ([MythicBotany-1.16.3-1.2.5.jar](https://www.curseforge.com/minecraft/mc-mods/mythicbotany/files/3200393)⟶[MythicBotany-1.16.3-1.2.8.jar](https://www.curseforge.com/minecraft/mc-mods/mythicbotany/files/3241113))

#### [MythicBotany-1.16.3-1.2.8.jar](https://www.curseforge.com/minecraft/mc-mods/mythicbotany/files/3241113)

Fixes [#27](https://github.com/noeppi-noeppi/MythicBotany/issues/27)

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/mythicbotany/files/all)

### [Nature's Aura](https://www.curseforge.com/minecraft/mc-mods/natures-aura) ([NaturesAura-34.0.jar](https://www.curseforge.com/minecraft/mc-mods/natures-aura/files/3186734)⟶[NaturesAura-34.1.jar](https://www.curseforge.com/minecraft/mc-mods/natures-aura/files/3246921))

#### [NaturesAura-34.1.jar](https://www.curseforge.com/minecraft/mc-mods/natures-aura/files/3246921)

* Added transmutation recipes for milk and eggs
* Appended "Ingot" to the names of infused iron and tainted gold
* Slightly increased the range and update rate of the corporeal eye to allow it to contain larger (modded) animals
* Fixed the botanist's hoe not actually creating seeds
* Added a crafting recipe for ancient bark
* Added a config option for the amount of animals that causes the powder of fertility to stop working

### [Occultism](https://www.curseforge.com/minecraft/mc-mods/occultism) ([occultism-1.0.15.jar](https://www.curseforge.com/minecraft/mc-mods/occultism/files/3226080)⟶[occultism-1.0.16.jar](https://www.curseforge.com/minecraft/mc-mods/occultism/files/3238238))

#### [occultism-1.0.16.jar](https://www.curseforge.com/minecraft/mc-mods/occultism/files/3238238)

[Automated Build]

Changelog for this build: [https://github.com/klikli-dev/occultism/wiki/1.0.16](https://github.com/klikli-dev/occultism/wiki/1.0.16)

Find changes for all versions at [https://github.com/klikli-dev/occultism/releases](https://github.com/klikli-dev/occultism/releases)

### [Oh The Biomes You'll Go](https://www.curseforge.com/minecraft/mc-mods/oh-the-biomes-youll-go) ([Biomes You Go 1.1.10 MCV: 1.16.5](https://www.curseforge.com/minecraft/mc-mods/oh-the-biomes-youll-go/files/3197729)⟶[Biomes You Go 1.1.12 MCV: 1.16.5](https://www.curseforge.com/minecraft/mc-mods/oh-the-biomes-youll-go/files/3242032))

#### [Biomes You Go 1.1.12 MCV: 1.16.5](https://www.curseforge.com/minecraft/mc-mods/oh-the-biomes-youll-go/files/3242032)

-Fix iron blocks spawning in mineral deposits and replace them with iron ore.

-Try and remove leaves with a distance of 7 when generating trees

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/oh-the-biomes-youll-go/files/all)

### [OpenBlocks Elevator](https://www.curseforge.com/minecraft/mc-mods/openblocks-elevator) ([elevatorid-1.16.5-1.7.12.jar](https://www.curseforge.com/minecraft/mc-mods/openblocks-elevator/files/3179579)⟶[elevatorid-1.16.5-1.7.13.jar](https://www.curseforge.com/minecraft/mc-mods/openblocks-elevator/files/3238352))

#### [elevatorid-1.16.5-1.7.13.jar](https://www.curseforge.com/minecraft/mc-mods/openblocks-elevator/files/3238352)

Fix breaking animation not rendering (#77)

Fix potential incompatibility crash (#79)

Update Russian translations (#78)

Built with forge 1.16.5-36.0.55

### [PneumaticCraft: Repressurized](https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized) (Archived file⟶[pneumaticcraft-repressurized-1.16.5-2.11.0-155.jar](https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized/files/3242473))

#### [pneumaticcraft-repressurized-1.16.5-2.11.0-155.jar](https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized/files/3242473)

2.11.0-155 (17 Mar 2021)

Note: this release requires Forge 36.0.42 or later.

New

* The Programmable Controller now has some optional chunkloading functionality
* - You can choose in the GUI whether to load the PC's own chunk and/or the current working chunk (where the minidrone is) and/or a 3x3 area around the working chunk
* - This comes with an extra air cost if enabled: 10 mL/t to load itself, and another 10mL/t to load the working area, or 30mL/t to load a 3x3 area
* Added Jet Boots Flight Stabilizers to bring you to an instant halt when releasing the thrust key
* - With Jet Boots Tier IV or Tier V, the Jet Boots armor GUI gets a checkbox to toggle Flight Stabilizers
* - Can also be bound to a hotkey for quick enabling/disabling
* - No extra upgrade needed, just Jet Boots Upgrade Tier IV or V
* Added Radiation Shielding Upgrade for Pneumatic Armor to protect against Mekanism radiation
* - Needs a Mekanism Radiation Shielding Unit to craft
* - One upgrade is needed for each armor piece for effective protection (you need all 4 to be safe)
* - This protection may extend to other mods which add radiation mechanics in future as they become available on 1.16
* - Note: protects against initial irradiation; if you're already irradiated, this won't help!
* Added JEI support for displaying the PneumaticCraft heat properties of any blocks/fluids which have been assigned custom heat properties
* - Displays temperature and thermal resistance for all blocks & fluids
* - For blocks which have a transition (e.g. Lava -> Netherrack) also shows the hot/cold transitions, and the heat capacity of the block/fluids
* As part of the above change, all custom heat properties are now added via the vanilla recipe system
* - This means that data files under data/pneumaticcraft/pneumaticraft/block_heat_properties have moved to data/pneumaticcraft/recipes/block_heat_properties
* - The JSON files themselves have the same format as before, with the addition of a mandatory "type": "pneumaticcraft:heat_properties" field
* Added custom heat properties for a bunch of new modded blocks (thanks @MuteTiefling)
* - Better End (Forge): all the Emerald Ice blocks
* - Biomes You'll Go: Boric/Cryptic Campfires, Cryptic Magma, Magmatic Stone
* - Create: Blaze Burner (with different properties based on the Burner state: smouldering/kindled/seething/fading)
* - Decorative Blocks: Brazier & Soul Brazier
* - Minecraft: Soul Campfire
* - Occultism: Spirit Fire
* - Valhelsia Structures: Brazier
* All pressurizable items can now take the CoFH Holding enchantment to increase their air storage (over & above what Volume Upgrades add)
* - Each level of Holding acts as a straight volume multiplier: Holding I = 2x, Holding II = 3x, etc.
* - This only applies to items/tools, not pneumatic machines when in item form
* - Also works for Drones, which will remember the enchantment when switched between item and entity form

Updates

* Drones which get stuck on a block (even when they are able to pathfind) will now teleport if stuck for more than 20 ticks
* - Note that such blocks are most commonly non-full-cube blocks with a movement-blocking hitbox added by mods which have forgotten to mark those blocks as non-pathable
* - If you see cases of drones getting stuck & teleporting around particular blocks, please raise a github issue so I can investigate-
* - Stuck teleport timeout is configurable: see Advanced -> stuck_drone_teleport_ticks in pneumaticcraft-common.toml; if you set it to 0, teleportation is disabled, and drones will mostly likely sit at the stuck position indefinitely (as in previous versions)
* GUIs for Thermopneumatic Processing Plant, Fluid Mixer and Refinery now show the current recipe in the JEI recipe click area
* - If the machine has a current recipe based on its input items/fluids, then the planned output(s) will be shown in the area tooltip
* - If extended information is enabled (F3+H), the internal recipe ID will also be shown
* All PneumaticCraft Drones are now immune to Mekanism radiation
* Custom block heat properties now support multiple entries for the same block
* - Entries must be distinguished by blockstate predicates. See the create/blaze_burner_*.json entries for examples.
* Disabled Aerial Interface / Curios inventory insertion and extraction
* - I've had reports of item duplication bugs, although I can't reproduce them myself
* - Other Curios integration (Aerial Interface FE-charging items in Curios slots and Memory Stick as a Curio) continue to work as before

Fixes

* Fix Thermopneumatic Processing Plant choosing the wrong recipe under certain circumstances
* - Was an issue with similar recipes (e.g. Potato -> Vegetable Oil & Potato/Yeast -> Ethanol), exposed when extra recipes have been added

[(4 more lines)](https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized/files/3242473)

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized/files/all)

### [Powah!](https://www.curseforge.com/minecraft/mc-mods/powah) ([Powah-1.16.4-2.3.14.jar](https://www.curseforge.com/minecraft/mc-mods/powah/files/3225048)⟶[Powah-1.16.5-2.3.16.jar](https://www.curseforge.com/minecraft/mc-mods/powah/files/3232535))

#### [Powah-1.16.5-2.3.16.jar](https://www.curseforge.com/minecraft/mc-mods/powah/files/3232535)

2.3.16

* Added the ability to Let Energizing Orb be placed on any direction - Thanks to BlueAgent
* Added colors to Energizing Rod Beams based on tier color - Thanks to BlueAgent
* Bump MC version to 1.16.5
* Updated lollipop to v3.2.9

2.3.15

* Added curio support for batteries - Thanks to BlueAgent

2.3.14

* Fixed Ender Cells Void inserted cells on Server Restart - Thanks to BlueAgent
* Updated lollipop to v3.2.8

2.3.13

* Fixed Ender Channels 2-12 being the same - Thanks to BlueAgent
* Fixed powah manual Crafting Panel crash and recipe arrows - Thanks to BlueAgent.
* Fixed energy Capability Implementation - Thanks to BlueAgent.
* Fixed Broken Heatsource Recipe - Thanks to BlueAgent
* Updated lollipop to v3.2.7

2.3.12

* Fixed Energising rod beam doesn't appear when directly over orb, closes #136 - Thanks to BlueAgent
* Fixed Solar Panel allowing sky light to pass through - Thanks to BlueAgent.
* Fixed Solar Panel working under blocks without Lens of Ender - Thanks to BlueAgent.
* Fixed Mod loading error has occurred message on game launch, closes #150 - Thanks to BlueAgent
* Added Russian translation ru_ru.json - Thanks to Fr0stmatic
* Updated lollipop to v3.2.6

2.3.11

* Added dry ice tags - Thanks to BlueAgent

2.3.10

* Added Simplified Chinese translation zh_cn.json - Thanks to WuzgXY
* Updated lollipop to v3.2.5

2.3.9

* Added Traditional Chinese translation zh_tw.json - Thanks to Jeffku0107

2.3.8

* Added brazilian translation pt_br.json - Thanks to Mikeliro
* Added french translation fr_fr.json - Thanks to jordanamr

2.3.7

* Fixed Powah's dry ice and uraninite ores ConfiguredFeatures should be registered, closes #129.
* Fixed Solar Panel has wrong time, closes #132.
* Fixed Ender Cell/Ender Gate channel mismatch, closes #131.

2.3.6

* Fixed Configs for thermo_gen and magmator are mixed up, Closes #126.
* Fixed Excessive cable network size issues, Closes #128.
* Added uraninite storage blocks tags.
* Updated lollipop to v3.2.3.

2.3.5

* Fixed Impossible to disable worldgen, Closes #124.

2.3.4 (1.16.4)

* Initial port to 1.16.4

2.3.4

* Disabled energizing particle temporary to fix a crash.

2.3.3

* Fix Client Crash Using Powah and Forge 34.1.27+, Closes #119

[(59 more lines)](https://www.curseforge.com/minecraft/mc-mods/powah/files/3232535)

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/powah/files/all)

### [RFTools Builder](https://www.curseforge.com/minecraft/mc-mods/rftools-builder) ([RFToolsBuilder - 1.16-3.0.15](https://www.curseforge.com/minecraft/mc-mods/rftools-builder/files/3216945)⟶[RFToolsBuilder - 1.16-3.0.16](https://www.curseforge.com/minecraft/mc-mods/rftools-builder/files/3226977))

#### [RFToolsBuilder - 1.16-3.0.16](https://www.curseforge.com/minecraft/mc-mods/rftools-builder/files/3226977)

RFToolsBuilder 1.16-3.0.16

### [RFTools Control](https://www.curseforge.com/minecraft/mc-mods/rftools-control) ([RFToolsControl - 1.16-4.0.7](https://www.curseforge.com/minecraft/mc-mods/rftools-control/files/3194359)⟶[RFToolsControl - 1.16-4.0.8](https://www.curseforge.com/minecraft/mc-mods/rftools-control/files/3226979))

#### [RFToolsControl - 1.16-4.0.8](https://www.curseforge.com/minecraft/mc-mods/rftools-control/files/3226979)

RFToolsControl 1.16-4.0.8

### [RFTools Utility](https://www.curseforge.com/minecraft/mc-mods/rftools-utility) ([RFToolsUtility - 1.16-3.0.23](https://www.curseforge.com/minecraft/mc-mods/rftools-utility/files/3215134)⟶[RFToolsUtility - 1.16-3.0.25](https://www.curseforge.com/minecraft/mc-mods/rftools-utility/files/3236518))

#### [RFToolsUtility - 1.16-3.0.25](https://www.curseforge.com/minecraft/mc-mods/rftools-utility/files/3236518)

RFToolsUtility 1.16-3.0.25

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/rftools-utility/files/all)

### [Resourceful Bees](https://www.curseforge.com/minecraft/mc-mods/resourceful-bees) ([resourcefulbees-1.16.5-0.5.10b](https://www.curseforge.com/minecraft/mc-mods/resourceful-bees/files/3206649)⟶[ResourcefulBees-1.16.5-0.6.5b](https://www.curseforge.com/minecraft/mc-mods/resourceful-bees/files/3245153))

#### [ResourcefulBees-1.16.5-0.6.5b](https://www.curseforge.com/minecraft/mc-mods/resourceful-bees/files/3245153)

# ----- [0.6.5b] -----

* fixed a crash related to centrifuges when it can't find a valid tank
* cleaned up patchouli effects page

# ----- [0.6.4b] -----

* fixed bee box not properly supplying bee with data upon release
* updated patchouli (#188) (note: beecon gif doesn't work but doesn't crash now)
* mutation validation logging now displays bee name
* fixed named colors in bee jsons causing crashes
* reworked some block interactions
* hid resource pack from pack selection screen
* fixed tiered hives not upgrading properly (#189)
* general code cleanup

# ----- [0.6.3b] -----

* fixed fluid crashes in centrifuge
* changed how bee is accessed from its goals to eliminate possible mixin crashes

# ----- [0.6.2b] -----

* fixed stack overflow error caused by custom honey block

# ----- [0.6.1b] -----

* fixed jar manifest

# ----- [0.6.0b] -----

##IMPORTANT INFO FOR PACK DEVS:

* removed "defaultChance" AND "defaultWeight" from mutation objects and "chance" from mutation outputs, replaced with "chance" in the main mutation object
* Simplified mutation types to just BLOCK, ITEM, and ENTITY (BLOCK_TO_BLOCK, BLOCK_TO_FLUID, FLUID_TO_BLOCK, and FLUID_TO_FLUID all now use BLOCK)
* old mutation types will still work for the time being but when 1.17 hits those old types will be removed.

```json

{

"type": "BLOCK",

"inputID" : "minecraft:stone",

"chance": 0.25,

"outputs": [

{"outputID" : "minecraft:iron_ore", "weight": 20},

{"outputID" : "minecraft:gold_ore", "weight": 10},

{"outputID" : "minecraft:diamond_ore"}

]

}

```

###Additions:

* Added platforms for hives over lava or water
* Added DungeonBee texture
* Bees can now have their min and max y-level for spawning configured
* Added the Beepedia, this is an item that will allow you to see information about any bee added by this mod
* you can now have 3 item and 1 fluid output for bee centrifuge output
* if a recipe uses a custom honey, when no bottles are present the proper honey fluid will deposit to the tank
* the fluid tanks in the centrifuge will now fill from left to right instead of having each slot allotted a tank (changed to allow for multiple fluid outputs per slot)
* Added CROP and ARMORED model types, and a template texture for each
* Added Honey dipper, a tool that will allow you to set a hive and flower manually for bees
* Added dungeon bee to default bees
* added advancements
* added bee box and lost bee box
* pretty nests can now be upgraded in world to T4 (hives will be removed in 1.17 in favor of this)

[(20 more lines)](https://www.curseforge.com/minecraft/mc-mods/resourceful-bees/files/3245153)

#### [5 more entries](https://www.curseforge.com/minecraft/mc-mods/resourceful-bees/files/all)

### [Simple Tomb](https://www.curseforge.com/minecraft/mc-mods/simple-tomb) ([simpletomb-1.16.5-1.0.5.jar](https://www.curseforge.com/minecraft/mc-mods/simple-tomb/files/3221199)⟶[simpletomb-1.16.5-1.0.6.jar](https://www.curseforge.com/minecraft/mc-mods/simple-tomb/files/3229015))

#### [simpletomb-1.16.5-1.0.6.jar](https://www.curseforge.com/minecraft/mc-mods/simple-tomb/files/3229015)

New feature: Theres a new way to open your grave, just use they key on the grave (sneak standing on it still works). Helpful if you are in range of it but you cannot directly stand on it, for example when its down in the void or blocked in by a 1x1 bedrock space. This comes with a config to disable the new feature.

### [Sophisticated Backpacks](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks) ([sophisticatedbackpacks-1.16.4-2.2.4.192.jar](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks/files/3225717)⟶[sophisticatedbackpacks-1.16.4-2.2.7.219.jar](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks/files/3244261))

#### [sophisticatedbackpacks-1.16.4-2.2.7.219.jar](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks/files/3244261)

Tweaked JEI handler to find the first open crafting tab and use that one for the recipe. If it can't find any open crafting tabs to actually open the first crafting tab and fill the recipe there.

Added config which allows setting whether shift click first moves stacks into open tab (like crafting grid) or first to the backpack/player's inventory.

Fixed inverted condition on explosion resistance which gave bedrock resistance to backpack without everlasting upgrade and the one with upgrade didn't have it.

Fixed gui of block backpack to close when the backpack was removed from the world by something like explosion, another player, ...

#### [4 more entries](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks/files/all)

### [Supplementaries](https://www.curseforge.com/minecraft/mc-mods/supplementaries) ([supplementaries-1.16.5-0.10.1c.jar](https://www.curseforge.com/minecraft/mc-mods/supplementaries/files/3224238)⟶[supplementaries-1.16.5-0.10.5.jar](https://www.curseforge.com/minecraft/mc-mods/supplementaries/files/3245739))

#### [supplementaries-1.16.5-0.10.5.jar](https://www.curseforge.com/minecraft/mc-mods/supplementaries/files/3245739)

Added Biomes O Plenty support for signs

To reaffirm its place as a mid game item, flax seeds can now be often found in dungeons and rarely in mineshafts chests.

This means that it should be more readily available. Remember that you can still get some guaranteed seed from pillager outposts or sometimes from the traveling merchant.

Added a command to open the config screen if Configured mod is installed

Flax bale now has almost all the same functionalities as a hay bale

Villagers can now buy flax seeds

Lanterns can now be directly hunged on horizontal ropes

Updated some tags

minor fixes

#### [5 more entries](https://www.curseforge.com/minecraft/mc-mods/supplementaries/files/all)

### [Tetra](https://www.curseforge.com/minecraft/mc-mods/tetra) ([tetra-1.16.5-3.7.0.jar](https://www.curseforge.com/minecraft/mc-mods/tetra/files/3225829)⟶[tetra-1.16.5-3.8.0.jar](https://www.curseforge.com/minecraft/mc-mods/tetra/files/3232294))

#### [tetra-1.16.5-3.8.0.jar](https://www.curseforge.com/minecraft/mc-mods/tetra/files/3232294)

Changes:

* bows now only gain honing progression when drawn more than 75%
* holding shift now allows a secondary tool <-> block interaction to be used

Fixes:

* fixed unbreaking not working for bows
* fixed bows working when broken
* fixed hammers not using tags for crafting material
* fixed incorrect caching of models & stats for predefined items

### [Tips](https://www.curseforge.com/minecraft/mc-mods/tips) ([Tips-1.16.5-4.0.7.jar](https://www.curseforge.com/minecraft/mc-mods/tips/files/3224747)⟶[Tips-1.16.5-4.0.8.jar](https://www.curseforge.com/minecraft/mc-mods/tips/files/3232463))

#### [Tips-1.16.5-4.0.8.jar](https://www.curseforge.com/minecraft/mc-mods/tips/files/3232463)

* Merge branch '1.16.5' of [https://github.com/Darkhax-Minecraft/Tips](https://github.com/Darkhax-Minecraft/Tips) into 1.16.5 - Tyler Hancock
* Allow tips to control their own cycle time. Closes #33 - Tyler Hancock

Huge thanks to my supporters on [Patreon](https://www.patreon.com/Darkhax?MCChangelog?Tips)

* Diablo Crasher
* BigAl607
* arcanearchivesmod
* Pongo Sapiens
* Darkosto

### [Transport](https://www.curseforge.com/minecraft/mc-mods/transport) ([Transport-1.16.4-3.4.2.jar](https://www.curseforge.com/minecraft/mc-mods/transport/files/3193318)⟶[Transport-1.16.5-3.5.0.jar](https://www.curseforge.com/minecraft/mc-mods/transport/files/3239490))

#### [Transport-1.16.5-3.5.0.jar](https://www.curseforge.com/minecraft/mc-mods/transport/files/3239490)

Fix: RIDERS predicate is now registered

Fix: Solid Fuel Engine Module now shows remaining burn time

New: Create Cart Links have some mild support with Transport rails (AKA Switches will try to keep carts together)

New: When opening a UI from a Modular Cart or Boat, Tabs now render on the side, allowing for better interactions with all Module UIs

### [U Team Core](https://www.curseforge.com/minecraft/mc-mods/u-team-core) ([U-Team-Core-1.16.4-3.1.17.192](https://www.curseforge.com/minecraft/mc-mods/u-team-core/files/3177217)⟶[U-Team-Core-1.16.5-3.2.0.193](https://www.curseforge.com/minecraft/mc-mods/u-team-core/files/3233194))

#### [U-Team-Core-1.16.5-3.2.0.193](https://www.curseforge.com/minecraft/mc-mods/u-team-core/files/3233194)

[Changelog of 3.2.0.193](https://github.com/MC-U-Team/U-Team-Core/blob/1.16.5/CHANGELOG.md#1165-320193---2021-03-09)

### [Useful Railroads](https://www.curseforge.com/minecraft/mc-mods/useful-railroads) ([Useful-Railroads-1.16.4-1.4.6.35](https://www.curseforge.com/minecraft/mc-mods/useful-railroads/files/3177291)⟶[Useful-Railroads-1.16.5-1.4.6.36](https://www.curseforge.com/minecraft/mc-mods/useful-railroads/files/3233242))

#### [Useful-Railroads-1.16.5-1.4.6.36](https://www.curseforge.com/minecraft/mc-mods/useful-railroads/files/3233242)

[Changelog of 1.4.6.36](https://github.com/MC-U-Team/Useful-Railroads/blob/1.16.5/CHANGELOG.md#1165-14636---2021-03-09)

### [Vanilla Excavators [Forge]](https://www.curseforge.com/minecraft/mc-mods/vanilla-excavators-forge) ([vanillaexcavators-1.16.4-2.2.0.jar](https://www.curseforge.com/minecraft/mc-mods/vanilla-excavators-forge/files/3110508)⟶[vanillaexcavators-1.16.4-2.2.1.jar](https://www.curseforge.com/minecraft/mc-mods/vanilla-excavators-forge/files/3214023))

#### [vanillaexcavators-1.16.4-2.2.1.jar](https://www.curseforge.com/minecraft/mc-mods/vanilla-excavators-forge/files/3214023)

* Create zh_cn.json (#6) - Aemande

### [YUNG's Better Mineshafts (Forge)](https://www.curseforge.com/minecraft/mc-mods/yungs-better-mineshafts-forge) ([[1.16.4 / 1.16.5] YUNG's Better Mineshafts v2.0.1](https://www.curseforge.com/minecraft/mc-mods/yungs-better-mineshafts-forge/files/3175671)⟶[[1.16.4 / 1.16.5] YUNG's Better Mineshafts v2.0.3](https://www.curseforge.com/minecraft/mc-mods/yungs-better-mineshafts-forge/files/3245380))

#### [[1.16.4 / 1.16.5] YUNG's Better Mineshafts v2.0.3](https://www.curseforge.com/minecraft/mc-mods/yungs-better-mineshafts-forge/files/3245380)

Added [Lootr](https://www.curseforge.com/minecraft/mc-mods/lootr) compatibility.

Fixed logging errors about Terraforged.

Join us on Discord:

Give me ur money:

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/yungs-better-mineshafts-forge/files/all)

## Removed

* [Create Plus](https://www.curseforge.com/minecraft/mc-mods/create-plus)

Generated using [ChangelogGenerator 2.0.0-pre9](https://github.com/TheRandomLabs/ChangelogGenerator).
