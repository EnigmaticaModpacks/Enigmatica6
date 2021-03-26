# Enigmatica6 0.4.5⟶Enigmatica6 0.4.6

## Added

* [Create Plus](https://www.curseforge.com/minecraft/mc-mods/create-plus)
* [Lazy DataFixerUpper(LazyDFU) [FORGE]](https://www.curseforge.com/minecraft/mc-mods/lazy-dfu-forge)

## Updated

### [Abnormals Delight](https://www.curseforge.com/minecraft/mc-mods/abnormals-delight) ([Abnormals Delight 1.16.5 - 1.0.1](https://www.curseforge.com/minecraft/mc-mods/abnormals-delight/files/3222472)⟶[Abnormals Delight 1.16.5 - 1.1.0](https://www.curseforge.com/minecraft/mc-mods/abnormals-delight/files/3251168))

#### [Abnormals Delight 1.16.5 - 1.1.0](https://www.curseforge.com/minecraft/mc-mods/abnormals-delight/files/3251168)

* Added Escargot for Autumnity compat
* Added Perch slices for Upgrade Aquatic compat
* Added cooking pot recipe for Autumnity's Foul Soup
* Updated compat recipes to work with Farmer's Delight 0.4.0
* Updated some tags

### [Alex's Mobs](https://www.curseforge.com/minecraft/mc-mods/alexs-mobs) ([alexsmobs-1.8.0](https://www.curseforge.com/minecraft/mc-mods/alexs-mobs/files/3245951)⟶[alexsmobs-1.8.1](https://www.curseforge.com/minecraft/mc-mods/alexs-mobs/files/3248100))

#### [alexsmobs-1.8.1](https://www.curseforge.com/minecraft/mc-mods/alexs-mobs/files/3248100)

-Made flies ambient, surface spawns. They spawn above grass, dirt sand in well lit areas, but only under natural light

-Made kangaroos defend babies

-Made baby kangaroos helpless

-Made emu attack pillager if skeleton config is set to true

-Added config for percent chance of Outback Leggings dodge

-Lowered Outback leggings dodge chance from 70% to 45%

-Lowered Outback leggings armor points

-Lowered Kangaroo health from 24 to 22

-Pocket of sand now has blindness effect

-Implemented 2-3 second cooldown on Kangaroo item eating/healing

-Fixed all mod animal buckets not retaining names of creatures

-Fixed kangaroo fedora floating

-Fixed kangaroo joey being weaponized

-Fixed mungus not consuming mushrooms when given

-Fixed kangaroo not eating out of hand

-Fixed all spanish translations not working

-Fixed kangaroo suffocation

-Fixed kangaroo drowning

-Fixed missing subtitles

-Fixed kangaroo armor missing on relog

### [Architectury API (Forge)](https://www.curseforge.com/minecraft/mc-mods/architectury-forge) ([[Forge 1.16.4/5] v1.10.137](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3247096)⟶[[Forge 1.16.4/5] v1.10.138](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3248258))

#### [[Forge 1.16.4/5] v1.10.138](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3248258)

Architectury v1.10.138 for 1.16.4/5

Updated at 2021-03-22 21:39.

[Click here for changelog](https://www.github.com/architectury/architectury/commits/2846a96)

* Bump forge event priority to HIGH
* Add EntityHooks.fromCollision to retrieve an entity from block collision (#64)
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

[(130 more lines)](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3248258)

### [Atmospheric](https://www.curseforge.com/minecraft/mc-mods/atmospheric) ([Atmospheric 1.16.4 - 3.0.0](https://www.curseforge.com/minecraft/mc-mods/atmospheric/files/3154934)⟶[Atmospheric 1.16.5 - 3.1.0](https://www.curseforge.com/minecraft/mc-mods/atmospheric/files/3249309))

#### [Atmospheric 1.16.5 - 3.1.0](https://www.curseforge.com/minecraft/mc-mods/atmospheric/files/3249309)

Atmospheric

* Added Arid Shrine structure
* Added Arid Sprouts
* Added Crustose Path
* Added advancement modifiers for potion effects
* Added support for Quark's posts & hedges
* Added particles to Flowering Morado Leaves
* Changed some textures
* Changed the blocks that Dunes crops can survive on
* Fixed Dunes biomes not being tagged as sandy
* Fixed fences & fence gates not being flammable
* Fixed persistence negating slowness
* Fixed many flower pots not having loot tables
* Fixed Flowering Morado Leaves loot table
* Fixed Aloe Vera loot table
* Fixed floating lava in certain world types

### [Botany Pots](https://www.curseforge.com/minecraft/mc-mods/botany-pots) ([BotanyPots-1.16.5-7.0.9.jar](https://www.curseforge.com/minecraft/mc-mods/botany-pots/files/3232394)⟶[BotanyPots-1.16.5-7.0.10.jar](https://www.curseforge.com/minecraft/mc-mods/botany-pots/files/3251169))

#### [BotanyPots-1.16.5-7.0.10.jar](https://www.curseforge.com/minecraft/mc-mods/botany-pots/files/3251169)

* Fixed crash when crop has no drops. Fixes #158 - Tyler Hancock
* Compiled against Forge RB 36.1.2 and Bookshelf 10.0.7. - Tyler Hancock

Like the mod? Consider following me on [Twitter](https://twitter.com/darkhaxdev) and joining the [Discord](https://discord.darkhax.net/)

Huge thanks to my supporters on [Patreon](https://www.patreon.com/Darkhax?MCChangelog?BotanyPots)

* Diablo Crasher
* BigAl607
* arcanearchivesmod
* Pongo Sapiens
* Darkosto

### [CoFH Core](https://www.curseforge.com/minecraft/mc-mods/cofh-core) ([cofh_core-1.16.4-1.2.0.jar](https://www.curseforge.com/minecraft/mc-mods/cofh-core/files/3247581)⟶[cofh_core-1.16.4-1.2.1.jar](https://www.curseforge.com/minecraft/mc-mods/cofh-core/files/3249453))

#### [cofh_core-1.16.4-1.2.1.jar](https://www.curseforge.com/minecraft/mc-mods/cofh-core/files/3249453)

Fixes a couple of minor issues with Enchantments.

Fixes XP rounding issue with the Insighful Crystal in Thermal Foundation.

### [Dank Storage](https://www.curseforge.com/minecraft/mc-mods/dank-storage) ([dankstorage-3.15.jar](https://www.curseforge.com/minecraft/mc-mods/dank-storage/files/3223717)⟶[dankstorage-3.16.jar](https://www.curseforge.com/minecraft/mc-mods/dank-storage/files/3250771))

#### [dankstorage-3.16.jar](https://www.curseforge.com/minecraft/mc-mods/dank-storage/files/3250771)

* fix crash when upgrading in certain cases
* fix possible crash when right clicking on an empty dock with nothing

### [Diet (Forge)](https://www.curseforge.com/minecraft/mc-mods/diet) ([diet-forge-1.16.5-0.17.jar](https://www.curseforge.com/minecraft/mc-mods/diet/files/3241528)⟶[diet-forge-1.16.5-0.18.jar](https://www.curseforge.com/minecraft/mc-mods/diet/files/3248903))

#### [diet-forge-1.16.5-0.18.jar](https://www.curseforge.com/minecraft/mc-mods/diet/files/3248903)

Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to the format [MCVERSION-MAJORMOD.MAJORAPI.MINOR.PATCH](https://mcforge.readthedocs.io/en/1.15.x/conventions/versioning/).

[1.16.5-0.18] - 2021.03.23

Fixed

* Fixed players not gaining diet values when eating food to maximum fullness [#27](https://github.com/TheIllusiveC4/Diet/issues/27)

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

[(98 more lines)](https://www.curseforge.com/minecraft/mc-mods/diet/files/3248903)

### [FTB Chunks](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks) ([ftb-chunks-1605.2.3-build.71.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks/files/3236808)⟶[ftb-chunks-1605.2.4-dev.8.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks/files/3251873))

#### [ftb-chunks-1605.2.4-dev.8.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks/files/3251873)

No changelog available.

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks/files/all)

### [FTB Quests](https://www.curseforge.com/minecraft/mc-mods/ftb-quests) ([ftb-quests-1605.2.1-build.36-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-quests/files/3248025)⟶[ftb-quests-1605.2.1-build.39-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-quests/files/3249257))

#### [ftb-quests-1605.2.1-build.39-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-quests/files/3249257)

* Fix more client-server inconsistencies - Max

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/ftb-quests/files/all)

### [Farmer's Delight](https://www.curseforge.com/minecraft/mc-mods/farmers-delight) ([Farmer's Delight 0.3.2 - 1.16.3+](https://www.curseforge.com/minecraft/mc-mods/farmers-delight/files/3188508)⟶[Farmer's Delight 0.4 - 1.16.3+](https://www.curseforge.com/minecraft/mc-mods/farmers-delight/files/3249879))

#### [Farmer's Delight 0.4 - 1.16.3+](https://www.curseforge.com/minecraft/mc-mods/farmers-delight/files/3249879)

0.4.0 - Spring Cleaning

* Shepherd's Pie is now a Feast!
* Mutton can now be cut into Mutton Chops, using a Cutting Board;
* New foods!
* Roasted Mutton Chops - Another use for Beetroot! (and Mutton, I guess);
* Mutton Wrap;
* Cabbage Rolls - Wrap many kinds of leftovers in cabbage for a healthy snack;
* Noodle Soup;
* Cutting Board recipes now make use of a ToolIngredient, freeing the `type` parameter and allowing custom ingredients (thank you, ochotonida!)
* BREAKING CHANGE! Custom axe/pickaxe cutting board recipes will have to be changed to the new format; the old syntax will no longer work!
* Please refer to the source code and wiki for information on the new syntax.
* [https://github.com/vectorwing/FarmersDelight/wiki/Cutting-Board-Recipes](https://github.com/vectorwing/FarmersDelight/wiki/Cutting-Board-Recipes)
* Vanilla soups and stews now stack up to 16, much like meals from this mod! (thank you, bagel!)
* By default, this affects exclusively `SoupItem`'s from vanilla, using a list inside the configs. You can add more items to it, but it only affects `SoupItem` items;
* You can configure to treat the list of items as a deny-list instead, making EVERY `SoupItem` stack to 16, except the ones listed in the config. This affects other mods, so be careful!
* This feature can be disabled entirely in the configs.
* Dog Food and Horse Feed now consult tags for eligible entities to feed:
* `dog_food_users` determines which living entities can be fed Dog Food;
* `horse_feed_users` determines which living entities can be fed Horse Feed;
* If a specified entity can be tamed, it must be tamed to accept the food. Otherwise, it can be fed right away;
* Balancing experiments (ongoing; please give feedback!):
* The Nourished effect has been partially shortened across all meals;
* Knives deal 0.5 less damage, but have a bit less knockback to help users deal more strikes;
* Knives are no longer efficient at mining Leaves and Bales, since that is now the Hoe's job in 1.16;
* Integration with MC Abnormals mods has been moved to their official add-on, Abnormals Delight! Go check it out!
* Pies can now rotate horizontally, much like Feasts;
* Tatami blocks and half-mats can now rotate horizontally, to match the seams of their paired and full-mat counterparts;
* Rich Soil now emits green stars when boosting a plant. Should hopefully not be exaggerated;
* Fixes:
* Rich Soil now respects OnCropsGrow Forge events. This fixes compatibility with Serene Seasons, but there could be more mods benefitting from it;
* World gen code reordered a bit, should hopefully prevent crashes with OpenJ9 (but update OpenJ9 anyway, if you use it);
* Tomatoes are now recognized as a CROP PlantType, to better integrate with modded farmlands (thank you, Foam!);
* Pigs and Hoglins will drop Smoked Ham if they're on fire when killed with a knife (thank you, Foam!);
* Crop blocks should now have proper langs, for WAILA compatibility and similar;
* Fix meals vanishing when using bowls with a full inventory;
* Meals can no longer be shift-clicked inside the meal display;
* Rice Crop should no longer crash upon certain state updates (example: world editing, chunk removal etc);
* Flint Knife is now repaired with Flint instead of Stone, using a custom item tier rather than the Stone tier;
* Horse Feed is no longer consumed on Creative Mode;
* Added translations:
* zh_TW (thank you, Pancakes0228!);
* Updated translations:
* ru_RU (thank you, GrayPix and Alepod!);
* zh_CN (thank you, WuzgXY!);
* es_ES (thank you, FrannDzs!);
* de_DE (thank you, elloellie and Foam!);

### [LibX](https://www.curseforge.com/minecraft/mc-mods/libx) ([LibX-1.16.3-1.0.23.jar](https://www.curseforge.com/minecraft/mc-mods/libx/files/3245714)⟶[LibX-1.16.3-1.0.25.jar](https://www.curseforge.com/minecraft/mc-mods/libx/files/3251911))

#### [LibX-1.16.3-1.0.25.jar](https://www.curseforge.com/minecraft/mc-mods/libx/files/3251911)

* Add text component util - noeppi_noeppi

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/libx/files/all)

### [Modular Routers](https://www.curseforge.com/minecraft/mc-mods/modular-routers) ([modular-routers-1.16.4-7.3.1-50.jar](https://www.curseforge.com/minecraft/mc-mods/modular-routers/files/3176107)⟶[modular-routers-1.16.5-7.4.0-55.jar](https://www.curseforge.com/minecraft/mc-mods/modular-routers/files/3251933))

#### [modular-routers-1.16.5-7.4.0-55.jar](https://www.curseforge.com/minecraft/mc-mods/modular-routers/files/3251933)

7.4.0 (26 Mar 2021)

* Activator Module rework
* - No longer any separate Item/Block modes (just activate item or right-click entity)
* - Now acts just as if an ordinary player right-clicks an item, using same vanilla logic
* - Tests indicate it Does The Right Thing (tm), but there is a possibility of some subtle behaviour changes from older releases - worth checking your Activators to be sure they're still doing what you think!
* Distributor Modules can now run in reverse, i.e. pulling items from multiple inventories
* - Configure this in the module GUI
* - Default is to send items, as before
* Security Upgrades now make router fake players (e.g. for Activator/Placer/Breaker modules) run with the same game profile as the Security Upgrade's owner (i.e. you!)
* - This can be very useful if the Item Router is to run in a protected area (e.g. FTB Chunks)
* Added new Filter Round Robin Augment
* - When installed in a module, the module picks a single item from its filter in turn to filter on, in a round-robin fashion, advancing each time the module executes
* - This is instead of the default behaviour of just filtering on any item in the filter
* - The Termination button in module GUI's is now a tri-state instead of a toggle:
* - Off: subsequent modules always run
* - T+: subsequent modules run IFF this module did some work
* - T-: subsequent modules run IFF this module did NOT do any work
* Blacklisted Chisels & Bits blocks from being used as Router or Extruder Mk2 camouflage (they tend to cause crashes when used as camo)
* Fixed item dupe bug with Bulk Filter GUI
* Fixed typing into the regulation field (when using Regulator Augment) not properly updating the module
* Fixed server crash related to unconfigured Security Upgrades (e.g. pulled straight from JEI)

### [MythicBotany](https://www.curseforge.com/minecraft/mc-mods/mythicbotany) ([MythicBotany-1.16.3-1.2.8.jar](https://www.curseforge.com/minecraft/mc-mods/mythicbotany/files/3241113)⟶[MythicBotany-1.16.3-1.2.9.jar](https://www.curseforge.com/minecraft/mc-mods/mythicbotany/files/3249568))

#### [MythicBotany-1.16.3-1.2.9.jar](https://www.curseforge.com/minecraft/mc-mods/mythicbotany/files/3249568)

The aquapanthus can now fill barrels and crucibles from ex nihilo sequentia and ex compressum

### [Pane In The Glass](https://www.curseforge.com/minecraft/mc-mods/pane-in-the-glass) ([Pane In The Glass](https://www.curseforge.com/minecraft/mc-mods/pane-in-the-glass/files/3088909)⟶[pitg-1.16.3-1.4.2.jar](https://www.curseforge.com/minecraft/mc-mods/pane-in-the-glass/files/3251859))

#### [pitg-1.16.3-1.4.2.jar](https://www.curseforge.com/minecraft/mc-mods/pane-in-the-glass/files/3251859)

There are no functional changes in this version - no reason to upgrade!

Modified the way invalid block definitions are presented in-world. An invalid block will now show an empty full block wire frame to help the player to clear phantom blocks.

### [PneumaticCraft: Repressurized](https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized) ([pneumaticcraft-repressurized-1.16.5-2.11.1-163.jar](https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized/files/3247865)⟶[pneumaticcraft-repressurized-1.16.5-2.11.3-168.jar](https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized/files/3251802))

#### [pneumaticcraft-repressurized-1.16.5-2.11.3-168.jar](https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized/files/3251802)

2.11.3-168 (26 Mar 2021)

Fixes

* Hotfix: drone pathfinding NPE introduced in 2.11.2

2.11.2-167 (26 Mar 2021)

Updates

* Memory Essence fluid is now tagged as forge:experience for more cross-mod compatibility
* - Vacuum Trap will now accept any fluids with this tag
* The max teleport distance for Drones is now configurable
* - Set max_drone_teleport_range in config/pneumaticcraft-common.toml
* - Default is 0, meaning unlimited range - same as previous behaviour
* - Amadrones and Programmer Controller are not affected by this
* - Primarily intended to avoid abuse on PvP servers, but may have other applications
* - Be careful about setting this to very low values; it could mess up drone programs where the drone can't always find a path
* Added another JEI entry for Memory Essence clarifying that Drones with an Entity Import widget can import XP orbs -> Memory Essence

Fixes

* Fixed Smart Chest in push mode sometimes getting wedged and not pushing items even when it can
* Fixed (cosmetic) face culling issue for Thermopneumatic Processing Plant. Also gave it a better block shape (matches model more nicely now).
* Fixed the new Huge Tank not accepting any upgrades
* Fixed rebuilding a Pressure Chamber (which already had some pressure) sometimes getting the new pressure very wrong
* Some more Elevator work: hoping once again that the player-falling-off bug is really fixed (looking good so far, but needs testing and feedback please!)
* Fixed Air Grate range preview not being removed if the Air Grate module is removed
* - Also, Air Grates no longer show their range when initially placed (use the GUI to toggle range preview)

### [Project: Vibrant Journeys](https://www.curseforge.com/minecraft/mc-mods/project-vibrant-journeys) ([projectvibrantjourneys-1.16.5-3.0.0BETA4.jar](https://www.curseforge.com/minecraft/mc-mods/project-vibrant-journeys/files/3238669)⟶[projectvibrantjourneys-1.16.5-3.0.0.jar](https://www.curseforge.com/minecraft/mc-mods/project-vibrant-journeys/files/3248386))

#### [projectvibrantjourneys-1.16.5-3.0.0.jar](https://www.curseforge.com/minecraft/mc-mods/project-vibrant-journeys/files/3248386)

1.16.5 release

more content from older versions will be added later

### [Sophisticated Backpacks](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks) ([sophisticatedbackpacks-1.16.4-2.2.7.219.jar](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks/files/3244261)⟶[sophisticatedbackpacks-1.16.4-2.2.7.227.jar](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks/files/3252002))

#### [sophisticatedbackpacks-1.16.4-2.2.7.227.jar](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks/files/3252002)

Added Russian translations (Thanks Fr0stmatic)

Fixed issue where compacting upgrades wouldn't return item containers in case the compacting recipe leaves some in the crafting grid.

Compacting honey bottles now properly puts empty bottles into the backpack in addition to honey blocks which was the only result of compacting before.

Fixed dupe bug related to quark's transfer functionality by disabling quark buttons in backpack screen. That is the only way to prevent the issue at the moment. When/if there is a way to provide compatibility this will likely get removed and replaced by proper compatibility implementation.

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks/files/all)

### [Supplementaries](https://www.curseforge.com/minecraft/mc-mods/supplementaries) ([supplementaries-1.16.5-0.10.5.jar](https://www.curseforge.com/minecraft/mc-mods/supplementaries/files/3245739)⟶[supplementaries-1.16.5-0.11.0b.jar](https://www.curseforge.com/minecraft/mc-mods/supplementaries/files/3250953))

#### [supplementaries-1.16.5-0.11.0b.jar](https://www.curseforge.com/minecraft/mc-mods/supplementaries/files/3250953)

v 0.11.0b: fixed a rare startup crash due to mod conflict.

v0.11.0:

Added sign post structures: they are a new type of "structure" that spawns randomly and will have signs that will point to up to two nearby villages. They are randomly generated and have quite a few variations to them

Added magma cream block: It's a new storage block that acts like a directional slime block meaning it will be sticky from one side and act like terracotta from the other. The sides act as something in between only sticking to themselves. To have this functionality you'll need Quark installed. They will also have some of the properties of slime blocks and magma blocks.

You can now edit blackboards directly by clicking on them with a quartz item, a coal item or a black and white dye

Faucets can now extract sap from autumnity sappy logs

You can now activate a pulley directly by turning a crank placed on it

Changed many textures:

Clock, Flax bale, doormat, key

Fixed some buggy interaction with jars when the interaction resulted in an empty jar

Pulley ropes will no longer break blocks when trying to push them down below y=0. They also will now properly interact with glazed terracotta

Jars with a light emitting liquid inside will once again emit light

Improved interaction with item display blocks: now the equip sound won't play anymore, instead you'll get the item received animation

Flax will no longer drop seeds from its upper block

Added compatibilities for more modded bottles for jars (thanks to agrona)

Reformatted and improved a lot of recipes and advancements (thanks to AlleCraft)

Doormat is now crafted with flax

Updated to mojmaps and thus alot of code has changed. let me know if some things don't work as they used to before

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/supplementaries/files/all)

### [Thermal Foundation](https://www.curseforge.com/minecraft/mc-mods/thermal-foundation) (Archived file⟶[thermal_foundation-1.16.4-1.2.0.jar](https://www.curseforge.com/minecraft/mc-mods/thermal-foundation/files/3248150))

#### [thermal_foundation-1.16.4-1.2.0.jar](https://www.curseforge.com/minecraft/mc-mods/thermal-foundation/files/3248150)

Changelog - Thermal Series

1.16.4-1.2.0

1.16.4 is now the minimum required version of Minecraft.

Additions

* Igneous Extruder (Expansion)
* Generates various types of stone.
* Requires a lava source and various other adjacent blocks.
* The block under the Extruder may matter as well (for Basalt, for example).
* Vacuumulator (Expansion)
* Sucks up Items (and maybe XP) in an area.
* Can use a Filter augment to restrict what it grabs.

*

Nullifier (Expansion)

* Destroys Items and Fluids inserted into it via automation.
* Items can be inserted manually via the GUI; a button is used to empty the inventory.
* Can use a Filter augment to restrict valid items.

*

Decoctive Diffuser (Innovation)

* Spreads potions in an area.
* Redstone or Glowstone can be used to boost the potion strength or duration.

*

Energetic Infuser (Innovation)

* Charges up to 9 items with Redstone Flux.
* Automation-compatible, but does not automatically transfer or have side configuration.

*

Filter Augment System

* Filter augments can be used in almost any block and will intelligently restrict input.
* These work in some tools (Currently the FluxoMagnet).
* Only a basic Item Filter for now. System is extensible and more filter types are coming.

*

XP Storage Augment

* Can be placed in many different blocks to enable XP collection (from recipes). XP must be manually removed by a player.
* This system will be elaborated on a bit more.

*

Certain blocks will play sounds when active. This can be disabled in the Client-side configuration.

*

Creative Augments which affect various aspects of blocks and tools.

*

Efficiency Augments for Machines.

*

Insightful Crystal

* Stores XP. Can be enchanted with Holding.
* Can automatically collect XP that a player picks up.
* More to come with this. ;)

*

Seeds now drop from grass. (Cultivation)

*

So. Much. Mod support.

*

Two new Casts for the Blast Chiller. No uses yet in Thermal directly, but some are coming. :)

[(206 more lines)](https://www.curseforge.com/minecraft/mc-mods/thermal-foundation/files/3248150)

### [Upgrade Aquatic](https://www.curseforge.com/minecraft/mc-mods/upgrade-aquatic) ([Upgrade Aquatic 1.16.5 - 3.0.1](https://www.curseforge.com/minecraft/mc-mods/upgrade-aquatic/files/3171113)⟶[Upgrade Aquatic 1.16.5 - 3.1.0](https://www.curseforge.com/minecraft/mc-mods/upgrade-aquatic/files/3249419))

#### [Upgrade Aquatic 1.16.5 - 3.1.0](https://www.curseforge.com/minecraft/mc-mods/upgrade-aquatic/files/3249419)

* Added Perch, a new fish that serves as prey for pike in swamps
* Added raw and cooked fish to tags
* Added support for Quark's posts & hedges
* Added the ability to configure mob spawn rates
* Added the ability to configure some worldgen rates
* Added the ability to configure the Drowned swimming animation
* Fixed Redfin Pike Bucket missing localization
* Fixed Glass Door & Trapdoor loot tables
* Fixed some broken trades
* Fixed using Glowing Ink Sac on signs crashing servers
* Fixed dispenser not shrinking Glowing Ink Sac stack
* Removed Mulberry advancement

Generated using [ChangelogGenerator 2.0.0-pre9](https://github.com/TheRandomLabs/ChangelogGenerator).
