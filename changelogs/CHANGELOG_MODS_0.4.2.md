# Enigmatica6 0.4.1⟶Enigmatica6 0.4.2

## Added

* [Abnormals Delight](https://www.curseforge.com/minecraft/mc-mods/abnormals-delight)
* [Create Plus](https://www.curseforge.com/minecraft/mc-mods/create-plus)
* [Inventory HUD+](https://www.curseforge.com/minecraft/mc-mods/inventory-hud-forge)

## Updated

### [Abnormals Core](https://www.curseforge.com/minecraft/mc-mods/abnormals-core) ([Abnormals Core 1.16.4 - 3.0.6](https://www.curseforge.com/minecraft/mc-mods/abnormals-core/files/3157757)⟶[Abnormals Core 1.16.5 - 3.1.0](https://www.curseforge.com/minecraft/mc-mods/abnormals-core/files/3218058))

#### [Abnormals Core 1.16.5 - 3.1.0](https://www.curseforge.com/minecraft/mc-mods/abnormals-core/files/3218058)

* Added a method to register gifts for villager types
* Added support for Quark's Posts feature (eltrutlikes)
* Added support for Quark's Hedges feature (eltrutlikes)
* Added the ability for Advancement modifiers to use conditions
* Updated AbnormalsWoodBlock and AbnormalsLogBlock to use getToolModifiedState
* Fixed model for vertical planks (Shock Micro)
* Fixed createCompatChestBlocks parameter order
* Fixed compat chests not working as fuel

### [Architectury API (Forge)](https://www.curseforge.com/minecraft/mc-mods/architectury-forge) ([[Forge 1.16.4/5] v1.8.126](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3217852)⟶[[Forge 1.16.4/5] v1.8.130](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3222916))

#### [[Forge 1.16.4/5] v1.8.130](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3222916)

Architectury v1.8.130 for 1.16.4/5

Updated at 2021-03-01 15:49.

[Click here for changelog](https://www.github.com/architectury/architectury/commits/0dbf726)

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

[(125 more lines)](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3222916)

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/all)

### [Better Advancements](https://www.curseforge.com/minecraft/mc-mods/better-advancements) ([BetterAdvancements-1.16.4-0.1.0.104](https://www.curseforge.com/minecraft/mc-mods/better-advancements/files/3166504)⟶[BetterAdvancements-1.16.5-0.1.0.105](https://www.curseforge.com/minecraft/mc-mods/better-advancements/files/3218942))

#### [BetterAdvancements-1.16.5-0.1.0.105](https://www.curseforge.com/minecraft/mc-mods/better-advancements/files/3218942)

[[ffc4324](https://github.com/way2muchnoise/BetterAdvancements/commit/ffc4324b3da2f6ae1ee4aea4915e1d577a08f0d7)] bump to 1.16.5 (way2muchnoise)

### [BetterEnd (Forge)](https://www.curseforge.com/minecraft/mc-mods/betterend-forge-port) ([betterendforge-1.16.4-1.5.0.jar](https://www.curseforge.com/minecraft/mc-mods/betterend-forge-port/files/3209506)⟶[betterendforge-1.16.4-1.5.1.jar](https://www.curseforge.com/minecraft/mc-mods/betterend-forge-port/files/3222673))

#### [betterendforge-1.16.4-1.5.1.jar](https://www.curseforge.com/minecraft/mc-mods/betterend-forge-port/files/3222673)

Changes:

* added BetterEnd ingots, nuggets and ores to their own forge tag (forge:ingots/thallasium, forge:nuggets/terminite etc..) to help compatibility with some mods
* end portal can now be linked to dimensions that are not the overworld by placing a certain item on the eternal pedestals. The dimension and its corresponding key item have to be specified in the portals.json file
* added a little easter egg block
* updated Chinese Simplified (China) translation (courtesy of [https://github.com/zorc](https://github.com/zorc))

Mod Integration:

* BetterEnd wooden barrels can now be upgraded by the MetalBarrels mod

Fixes:

* fixed metal chain blockstates
* fixed mod bookshelves not working with the enchanting table
* fixed duplication bug caused by incompatibility with Apotheosis anvil
* fixed end stone smelter missing GUI texture
* fixed underwater saplings creating contained water sources when water around them is removed
* fixed incorrect registration of metal tools and armor items, causing incompatibilities in some recipes

### [Citadel](https://www.curseforge.com/minecraft/mc-mods/citadel) ([citadel-1.6.1-1.16.5](https://www.curseforge.com/minecraft/mc-mods/citadel/files/3198842)⟶[ citadel-1.6.2-1.16.5 ](https://www.curseforge.com/minecraft/mc-mods/citadel/files/3220917))

#### [ citadel-1.6.2-1.16.5 ](https://www.curseforge.com/minecraft/mc-mods/citadel/files/3220917)

-Fixed Alex's Mobs Roadrunners not spawning

### [Diet (Forge)](https://www.curseforge.com/minecraft/mc-mods/diet) ([diet-forge-1.16.5-0.7.jar](https://www.curseforge.com/minecraft/mc-mods/diet/files/3212311)⟶[diet-forge-1.16.5-0.11.jar](https://www.curseforge.com/minecraft/mc-mods/diet/files/3222821))

#### [diet-forge-1.16.5-0.11.jar](https://www.curseforge.com/minecraft/mc-mods/diet/files/3222821)

Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to the format [MCVERSION-MAJORMOD.MAJORAPI.MINOR.PATCH](https://mcforge.readthedocs.io/en/1.15.x/conventions/versioning/).

[1.16.5-0.11] - 2021.03.01

Added

* Added five-food-group support for:
* Abnormals Delight
* Better Default Biomes
* Creatures and Beasts
* Environmental
* Neapolitan (new foods)
* Netherite Spuds
* Pumpkin Spice Everything
* Survival Plus
* Trail Mix
* VanillaTweaks
* XercaMod

Changed

* Doubled overall gain rate of all foods for every food group

Fixed

* Fixed Pam's HarvestCraft 2 - Trees bug where nutmegs were showing a diet tooltip erroneously

[1.16.5-0.10] - 2021.02.27

Added

* Added five-food-group support for:
* Bettas
* Fins and Tails
* Frozen Up
* Omni

[1.16.5-0.9] - 2021.02.27

Fixed

* Categorized missing item from Resourceful Bees

[1.16.5-0.8] - 2021.02.27

Added

* Added five-food-group support for:
* Ars Nouveau
* Better End (Forge)
* Integrated Dynamics
* Meet Your Fight
* PneumaticCraft: Repressurized
* Resourceful Bees
* Oh The Biomes You'll Go
* Undergarden

Fixed

* Fixed diet values not syncing when changing dimensions [#9](https://github.com/TheIllusiveC4/Diet/issues/9)

[1.16.5-0.7] - 2021.02.21

Changed

* [API] Streamlined items/blocks API
* Removed Enchanted Golden Apple from most default food groups
* Updated tooltips for non-food items

Fixed

[(48 more lines)](https://www.curseforge.com/minecraft/mc-mods/diet/files/3222821)

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/diet/files/all)

### [Ding](https://www.curseforge.com/minecraft/mc-mods/ding) ([Ding-1.16.3-1.2.0.jar](https://www.curseforge.com/minecraft/mc-mods/ding/files/3062074)⟶[Ding-1.16.5-1.3.0.jar](https://www.curseforge.com/minecraft/mc-mods/ding/files/3222705))

#### [Ding-1.16.5-1.3.0.jar](https://www.curseforge.com/minecraft/mc-mods/ding/files/3222705)

1.3.0:

* Add sound category config for all 3 scenarios.
* Slightly changed how we play sounds, we try to play the sound even if we can't find it anyway using the ResourceLocation. This effectively removes the need for the skipSoundEventCheck config.

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/ding/files/all)

### [Emendatus Enigmatica](https://www.curseforge.com/minecraft/mc-mods/emendatus-enigmatica) ([EmendatusEnigmatica-1.16.5-1.2.1](https://www.curseforge.com/minecraft/mc-mods/emendatus-enigmatica/files/3210607)⟶[EmendatusEnigmatica-1.16.5-1.2.2](https://www.curseforge.com/minecraft/mc-mods/emendatus-enigmatica/files/3221979))

#### [EmendatusEnigmatica-1.16.5-1.2.2](https://www.curseforge.com/minecraft/mc-mods/emendatus-enigmatica/files/3221979)

Emendatus Enigmatica

MC 1.16.5 | Version 1.2.2

* Disabled Vanilla Nether Quartz ore, and added it under EE control. (Please make sure you review the config if you are updating to this version)
* Complete mod retexture and visual enhancement

### [Engineer's Decor](https://www.curseforge.com/minecraft/mc-mods/engineers-decor) ([engineersdecor-1.16.4-1.1.8-b2.jar](https://www.curseforge.com/minecraft/mc-mods/engineers-decor/files/3209553)⟶[engineersdecor-1.16.4-1.1.8.jar](https://www.curseforge.com/minecraft/mc-mods/engineers-decor/files/3221407))

#### [engineersdecor-1.16.4-1.1.8.jar](https://www.curseforge.com/minecraft/mc-mods/engineers-decor/files/3221407)

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

[A] Doors implicitly open/close adjacent wings of double doors.

[A] Disabled injected buttons from other mods in container GUIs.

[A] Mob spawning on Rebar/Gas Concrete inhibited (IE Concrete Compliancy).

[M] Small Tree Cutter chopping improved (loosened tree volume search restrictions).

[(35 more lines)](https://www.curseforge.com/minecraft/mc-mods/engineers-decor/files/3221407)

### [Extreme sound muffler (Forge)](https://www.curseforge.com/minecraft/mc-mods/extreme-sound-muffler) ([Extreme Sound Muffler 3.7 - Forge 1.16.5](https://www.curseforge.com/minecraft/mc-mods/extreme-sound-muffler/files/3191547)⟶[Extreme Sound Muffler 3.8 - Forge 1.16.5](https://www.curseforge.com/minecraft/mc-mods/extreme-sound-muffler/files/3219144))

#### [Extreme Sound Muffler 3.8 - Forge 1.16.5](https://www.curseforge.com/minecraft/mc-mods/extreme-sound-muffler/files/3219144)

Fixed delete button not actually deleting anything.

Fixed Anchors being saved in the wrong place, which prevent them from being loaded.. it's always the Anchors isn't it?

### [Farming for Blockheads](https://www.curseforge.com/minecraft/mc-mods/farming-for-blockheads) ([FarmingForBlockheads_1.16.3-7.2.1.jar](https://www.curseforge.com/minecraft/mc-mods/farming-for-blockheads/files/3098206)⟶[FarmingForBlockheads_1.16.3-7.3.0.jar](https://www.curseforge.com/minecraft/mc-mods/farming-for-blockheads/files/3222141))

#### [FarmingForBlockheads_1.16.3-7.3.0.jar](https://www.curseforge.com/minecraft/mc-mods/farming-for-blockheads/files/3222141)

Allow JSON for market entries to be specified as String in order to support Minecraft's custom JSON features

Allow "count" to be used as count field for entryOverrides to be consistent with the other naming

Fixed dupe bug

### [FerriteCore](https://www.curseforge.com/minecraft/mc-mods/ferritecore) ([ferritecore-2.0.2-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ferritecore/files/3218090)⟶[ferritecore-2.0.3-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ferritecore/files/3222545))

#### [ferritecore-2.0.3-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ferritecore/files/3222545)

* Fix blockstate properties getting replaced by equivalent, but not reference equivalent properties
* Fixes IE feedthroughs not forming
* Fixes a startup crash under unknown circumstances

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/ferritecore/files/all)

### [Industrial Foregoing](https://www.curseforge.com/minecraft/mc-mods/industrial-foregoing) ([industrial-foregoing-1.16.5-3.2.10-09eb824.jar](https://www.curseforge.com/minecraft/mc-mods/industrial-foregoing/files/3204945)⟶[industrial-foregoing-1.16.5-3.2.10.1-decb7ae.jar](https://www.curseforge.com/minecraft/mc-mods/industrial-foregoing/files/3223241))

#### [industrial-foregoing-1.16.5-3.2.10.1-decb7ae.jar](https://www.curseforge.com/minecraft/mc-mods/industrial-foregoing/files/3223241)

[https://github.com/InnovativeOnlineIndustries/Industrial-Foregoing/blob/changelog/CHANGELOG.md](https://github.com/InnovativeOnlineIndustries/Industrial-Foregoing/blob/changelog/CHANGELOG.md)

### [Inventory Essentials](https://www.curseforge.com/minecraft/mc-mods/inventory-essentials) ([InventoryEssentials_1.16.3-2.3.0.jar](https://www.curseforge.com/minecraft/mc-mods/inventory-essentials/files/3098198)⟶[InventoryEssentials_1.16.3-2.3.1.jar](https://www.curseforge.com/minecraft/mc-mods/inventory-essentials/files/3222115))

#### [InventoryEssentials_1.16.3-2.3.1.jar](https://www.curseforge.com/minecraft/mc-mods/inventory-essentials/files/3222115)

Fixed dupe bug

### [JAOPCA](https://www.curseforge.com/minecraft/mc-mods/jaopca) ([JAOPCA-1.16.4-3.4.0.4.jar](https://www.curseforge.com/minecraft/mc-mods/jaopca/files/3188731)⟶[JAOPCA-1.16.5-3.4.0.5.jar](https://www.curseforge.com/minecraft/mc-mods/jaopca/files/3220815))

#### [JAOPCA-1.16.5-3.4.0.5.jar](https://www.curseforge.com/minecraft/mc-mods/jaopca/files/3220815)

Added Immersive Engineering compat

Readded FuturePack compat

### [Just Enough Resources (JER)](https://www.curseforge.com/minecraft/mc-mods/just-enough-resources-jer) ([JustEnoughResources-1.16.4-0.12.0.104](https://www.curseforge.com/minecraft/mc-mods/just-enough-resources-jer/files/3166519)⟶[JustEnoughResources-1.16.4-0.12.0.107](https://www.curseforge.com/minecraft/mc-mods/just-enough-resources-jer/files/3216429))

#### [JustEnoughResources-1.16.4-0.12.0.107](https://www.curseforge.com/minecraft/mc-mods/just-enough-resources-jer/files/3216429)

[[c5edd45](https://github.com/way2muchnoise/JustEnoughResources/commit/c5edd45155c63be59581d0682ea014ba769daff3)] Fix plant rendering. (#278) (GitHub)

### [KleeSlabs](https://www.curseforge.com/minecraft/mc-mods/kleeslabs) ([KleeSlabs_1.16.3-9.2.0.jar](https://www.curseforge.com/minecraft/mc-mods/kleeslabs/files/3066071)⟶[KleeSlabs_1.16.5-9.2.1.jar](https://www.curseforge.com/minecraft/mc-mods/kleeslabs/files/3222119))

#### [KleeSlabs_1.16.5-9.2.1.jar](https://www.curseforge.com/minecraft/mc-mods/kleeslabs/files/3222119)

Fixed config file reload spam on newer Forge versions

### [Kotlin for Forge](https://www.curseforge.com/minecraft/mc-mods/kotlin-for-forge) ([Kotlin for Forge 1.9.0](https://www.curseforge.com/minecraft/mc-mods/kotlin-for-forge/files/3196593)⟶[Kotlin for Forge 1.10.0](https://www.curseforge.com/minecraft/mc-mods/kotlin-for-forge/files/3218088))

#### [Kotlin for Forge 1.10.0](https://www.curseforge.com/minecraft/mc-mods/kotlin-for-forge/files/3218088)

Kotlin for Forge 1.10.0

* Updated to Kotlin 1.4.31, Updated to serialization 1.1.0

### [KubeJS](https://www.curseforge.com/minecraft/mc-mods/kubejs) ([kubejs-1605.3.6-build.170-forge.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs/files/3211037)⟶[kubejs-1605.3.6-build.171-forge.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs/files/3222777))

#### [kubejs-1605.3.6-build.171-forge.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs/files/3222777)

* Reformatted example scripts - LatvianModder
* Reformatted code, possibly fixed some issues with modded biomes/items/blocks/sounds - LatvianModder
* Added reload announcement and better errors in recipes. you have to enable them in recipes event with event.itemErrors = true before other functions - LatvianModder
* Merge pull request #85 from MaxNeedsSnacks/master - Kristiāns Micītis
* Add YeetJEICategoriesEvent - Max
* Update arch plugin to 3.0.85 - Max

### [Occultism](https://www.curseforge.com/minecraft/mc-mods/occultism) ([occultism-1.0.12.jar](https://www.curseforge.com/minecraft/mc-mods/occultism/files/3204587)⟶[occultism-1.0.14.jar](https://www.curseforge.com/minecraft/mc-mods/occultism/files/3221550))

#### [occultism-1.0.14.jar](https://www.curseforge.com/minecraft/mc-mods/occultism/files/3221550)

[Automated Build]

Changelog for this build: [https://github.com/klikli-dev/occultism/wiki/1.0.14](https://github.com/klikli-dev/occultism/wiki/1.0.14)

Find changes for all versions at [https://github.com/klikli-dev/occultism/releases](https://github.com/klikli-dev/occultism/releases)

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/occultism/files/all)

### [Portable Stonecutter](https://www.curseforge.com/minecraft/mc-mods/portable-stonecutter) ([Portable Stonecutter-1.16.4-1.3.3](https://www.curseforge.com/minecraft/mc-mods/portable-stonecutter/files/3210632)⟶[Portable Stonecutter-1.16.4-1.3.4](https://www.curseforge.com/minecraft/mc-mods/portable-stonecutter/files/3221966))

#### [Portable Stonecutter-1.16.4-1.3.4](https://www.curseforge.com/minecraft/mc-mods/portable-stonecutter/files/3221966)

Fixed a crash when using too much of an ingredient.

### [Quark](https://www.curseforge.com/minecraft/mc-mods/quark) ([Quark-r2.4-307.jar](https://www.curseforge.com/minecraft/mc-mods/quark/files/3216263)⟶[Quark-r2.4-308.jar](https://www.curseforge.com/minecraft/mc-mods/quark/files/3221260))

#### [Quark-r2.4-308.jar](https://www.curseforge.com/minecraft/mc-mods/quark/files/3221260)

* Fixed compatibility with Lootr in obsidian pillars (noobanidus)
* Fixed mega dungeons sometimes spawning with waterlogged blocks
* Fixed monster boxes generating over lava
* Tried to fix the backpack not shifting the patchouli button hopefully it works

### [Simple Tomb](https://www.curseforge.com/minecraft/mc-mods/simple-tomb) ([simpletomb-1.16.5-1.0.4.jar](https://www.curseforge.com/minecraft/mc-mods/simple-tomb/files/3201800)⟶[simpletomb-1.16.5-1.0.5.jar](https://www.curseforge.com/minecraft/mc-mods/simple-tomb/files/3221199))

#### [simpletomb-1.16.5-1.0.5.jar](https://www.curseforge.com/minecraft/mc-mods/simple-tomb/files/3221199)

First version of command system in place, currently you can use /simpletomb latest to find your recent tomb, in case the key is lost. More features coming in the future, please report and request features from the old mod if you need them

Fixed dimension name in key tooltip.

Tombstone now has a solid hitbox, so players can stand on it and build against it.

### [Titanium](https://www.curseforge.com/minecraft/mc-mods/titanium) ([titanium-1.16.5-3.2.7.jar](https://www.curseforge.com/minecraft/mc-mods/titanium/files/3204888)⟶[titanium-1.16.5-3.2.8.jar](https://www.curseforge.com/minecraft/mc-mods/titanium/files/3223141))

#### [titanium-1.16.5-3.2.8.jar](https://www.curseforge.com/minecraft/mc-mods/titanium/files/3223141)

[https://github.com/InnovativeOnlineIndustries/Titanium/blob/changelog/CHANGELOG.md](https://github.com/InnovativeOnlineIndustries/Titanium/blob/changelog/CHANGELOG.md)

### [Waystones](https://www.curseforge.com/minecraft/mc-mods/waystones) ([Waystones 1.16.x v7.3.1](https://www.curseforge.com/minecraft/mc-mods/waystones/files/3098215)⟶[Waystones_1.16.5-7.4.0.jar](https://www.curseforge.com/minecraft/mc-mods/waystones/files/3222129))

#### [Waystones_1.16.5-7.4.0.jar](https://www.curseforge.com/minecraft/mc-mods/waystones/files/3222129)

Added option to take leashed animals with you when teleporting (default: on) ([by PssbleTrngle](https://github.com/blay09/Waystones/pull/319))

Fixed waystones not being activated immediately on placement

Fixed waystones not being removed if their block doesn't exist anymore (e.g. due to chunk corruption or external map edits resulting in inconsistent waystone store)

Fixed waystones getting re-initialized as a new waystone when rotated using a third-party mod

Fixed z-coordinate not being centered after teleport

Added French translation ([by Derrias](https://github.com/blay09/Waystones/pull/302))

Updated Chinese translation ([by HeyDon-Lee](https://github.com/blay09/Waystones/pull/315))

Updated Russian translation ([by Alepod](https://github.com/blay09/Waystones/pull/337))

## Removed

* [YUNG's Better Caves (Forge)](https://www.curseforge.com/minecraft/mc-mods/yungs-better-caves)

Generated using [ChangelogGenerator 2.0.0-pre9](https://github.com/TheRandomLabs/ChangelogGenerator).
