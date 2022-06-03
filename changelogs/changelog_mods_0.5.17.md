# Enigmatica6 0.5.16⟶Enigmatica6 0.5.17

## Added

* [Compote](https://www.curseforge.com/minecraft/mc-mods/compote)
* [Energy Meter](https://www.curseforge.com/minecraft/mc-mods/energymeter)

## Updated

### [Advanced Peripherals](https://www.curseforge.com/minecraft/mc-mods/advanced-peripherals) ([Advanced Peripherals 1.16.5 0.7.2r](https://www.curseforge.com/minecraft/mc-mods/advanced-peripherals/files/3451857)⟶[Advanced Peripherals 1.16.5 0.7.3r](https://www.curseforge.com/minecraft/mc-mods/advanced-peripherals/files/3489937))

#### [Advanced Peripherals 1.16.5 0.7.3r](https://www.curseforge.com/minecraft/mc-mods/advanced-peripherals/files/3489937)

Removed

* Removed listCraftableItems() from the RSBridge because of some issues

Added

* getMaxItemDiskStorage() to the RS Bridge
* getMaxFluidDiskStorage() to the RS Bridge
* getMaxItemExternalStorage() to the RS Bridge
* getMaxFluidExternalStorage() to the RS Bridge
* getPattern() to the RS Bridge
* isItemCraftable() to the RS Bridge
* isItemCraftable() to the ME Bridge
* Mekanism dynamic tank integration
* french translation

Fixed

* [#177]Fixed that items after removing it from a chest using the inventory manager does not stack anymore.
* [#194]Fixed error spamming when using getRequests() from the colony integrator
* [#203]Fixed Inventory Manager api, slot argument behaviour is now correct.

### [Apotheosis](https://www.curseforge.com/minecraft/mc-mods/apotheosis) ([Apotheosis-1.16.5-4.8.1.jar](https://www.curseforge.com/minecraft/mc-mods/apotheosis/files/3485463)⟶[Apotheosis-1.16.5-4.8.2.jar](https://www.curseforge.com/minecraft/mc-mods/apotheosis/files/3490144))

#### [Apotheosis-1.16.5-4.8.2.jar](https://www.curseforge.com/minecraft/mc-mods/apotheosis/files/3490144)

[https://github.com/Shadows-of-Fire/Apotheosis/blob/1.16/changelog.md](https://github.com/Shadows-of-Fire/Apotheosis/blob/1.16/changelog.md)

### [Botany Pots](https://www.curseforge.com/minecraft/mc-mods/botany-pots) ([BotanyPots-1.16.5-7.1.26.jar](https://www.curseforge.com/minecraft/mc-mods/botany-pots/files/3481709)⟶[BotanyPots-1.16.5-7.1.27.jar](https://www.curseforge.com/minecraft/mc-mods/botany-pots/files/3493241))

#### [BotanyPots-1.16.5-7.1.27.jar](https://www.curseforge.com/minecraft/mc-mods/botany-pots/files/3493241)

* Made Botany Post waterloggable (#195) - Waterpicker

Like the mod? Consider following me on [Twitter](https://twitter.com/darkhaxdev) and joining the [Discord](https://discord.darkhax.net/)

Huge thanks to my supporters on [Patreon](https://www.patreon.com/Darkhax?MCChangelog?BotanyPots)

* Rempler
* lothrazar
* arcanearchivesmod
* Pongo Sapiens
* Darkosto

### [Chisels & Bits](https://www.curseforge.com/minecraft/mc-mods/chisels-bits) (Archived file⟶[chiselsandbits-1.0.42-ALPHA.jar](https://www.curseforge.com/minecraft/mc-mods/chisels-bits/files/3493219))

#### [chiselsandbits-1.0.42-ALPHA.jar](https://www.curseforge.com/minecraft/mc-mods/chisels-bits/files/3493219)

chiselsandbits Changelog

Version: 1.0.42-ALPHA

* Implement sound type passthrough for the primary blockstate.

#### [4 more entries](https://www.curseforge.com/minecraft/mc-mods/chisels-bits/files/all)

### [Config Swapper](https://www.curseforge.com/minecraft/mc-mods/config-swapper) ([configswapper-1.6.jar](https://www.curseforge.com/minecraft/mc-mods/config-swapper/files/3479052)⟶[configswapper-2.1.jar](https://www.curseforge.com/minecraft/mc-mods/config-swapper/files/3490147))

#### [configswapper-2.1.jar](https://www.curseforge.com/minecraft/mc-mods/config-swapper/files/3490147)

* fixed serverconfigs not working
* moved config application to run on world load to also catch serverconfig if the file was manually changed
* removed unused command arguments
* mode command will now print errors if it fails.

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/config-swapper/files/all)

### [Diet (Forge)](https://www.curseforge.com/minecraft/mc-mods/diet) ([diet-forge-1.16.5-0.43.jar](https://www.curseforge.com/minecraft/mc-mods/diet/files/3472677)⟶[diet-forge-1.16.5-1.0.0.jar](https://www.curseforge.com/minecraft/mc-mods/diet/files/3492273))

#### [diet-forge-1.16.5-1.0.0.jar](https://www.curseforge.com/minecraft/mc-mods/diet/files/3492273)

Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to the format [MCVERSION-MAJORMOD.MAJORAPI.MINOR.PATCH](https://mcforge.readthedocs.io/en/1.15.x/conventions/versioning/).

[1.16.5-1.0.0] - 2021.10.15

Added

* Added 5-food-group support for:
* Simple Corn

[1.16.5-0.43] - 2021.09.26

Changed

* Added mixins again

Fixed

* Fixed item uses being triggered erroneously [#87](https://github.com/TheIllusiveC4/Diet/issues/87)

[1.16.5-0.42] - 2021.09.22

Fixed

* Fixed default Diet configs not respecting defaultConfigPath in fml.toml

[1.16.5-0.41] - 2021.09.18

Changed

* Removed mixins

Fixed

* Fixed diet values not being synced to players on dedicated servers [#86](https://github.com/TheIllusiveC4/Diet/issues/86)

[1.16.5-0.40] - 2021.09.15

Added

* Added 5-food-group support for:
* Improved Berries
* Nourished End
* Project Vibrant Journeys
* Roots Classic
* Shulkered
* Simple Delights
* Trick O'Creeps
* Added configuration option for hiding diet food group tooltips for a player until that food has been eaten at least once [#85](https://github.com/TheIllusiveC4/Diet/issues/85)

Changed

* Revamped tagging system to include automatic tagging for foods without a group tag
* Existing groupings for foods may have changed or disappeared due to migrating to the new system, please report an issue if this happened in error
* New tags:
* diet:ingredients for items that should not add their own food groups to foods they are a part of (such as salt)
* diet:special_food for items that do not have food values but should still display food group tooltips (such as cake)

[1.16.5-0.39] - 2021.08.12

Added

* [API] Added ApplyEffect event for modders to cancel the effects from Diet
* Added 5-food-group support for:
* Infernal Expansion
* Unique Crops

Changed

* Updated 5-food-group support for:
* Ars Noveau
* Cookielicious

[1.16.5-0.38] - 2021.08.03

Fixed

* Fixed Russian localization

[(289 more lines)](https://www.curseforge.com/minecraft/mc-mods/diet/files/3492273)

### [Drawers Tooltip](https://www.curseforge.com/minecraft/mc-mods/drawers-tooltip) ([DrawersTooltip-1.16.2-2.1.0.jar](https://www.curseforge.com/minecraft/mc-mods/drawers-tooltip/files/3035686)⟶[DrawersTooltip-1.16.2-2.1.1.jar](https://www.curseforge.com/minecraft/mc-mods/drawers-tooltip/files/3491850))

#### [DrawersTooltip-1.16.2-2.1.1.jar](https://www.curseforge.com/minecraft/mc-mods/drawers-tooltip/files/3491850)

add Storage Drawers as dependency in mods.toml

### [Equipment Compare](https://www.curseforge.com/minecraft/mc-mods/equipment-compare) ([EquipmentCompare-1.16.5-1.2.5.jar](https://www.curseforge.com/minecraft/mc-mods/equipment-compare/files/3486298)⟶[EquipmentCompare-1.16.5-1.2.7.jar](https://www.curseforge.com/minecraft/mc-mods/equipment-compare/files/3494718))

#### [EquipmentCompare-1.16.5-1.2.7.jar](https://www.curseforge.com/minecraft/mc-mods/equipment-compare/files/3494718)

* Updated to support latest baubles API.
* Fixed an alignment issue for some items when used with Legendary Tooltips.

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/equipment-compare/files/all)

### [FTB Chunks (Forge)](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge) ([ftb-chunks-forge-1605.3.2-build.65.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge/files/3482751)⟶[ftb-chunks-forge-1605.3.2-build.69.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge/files/3495215))

#### [ftb-chunks-forge-1605.3.2-build.69.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge/files/3495215)

* Fixed loaded chunk view outside dev. Blame Mikey - LatvianModder

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge/files/all)

### [FTB Essentials (Forge)](https://www.curseforge.com/minecraft/mc-mods/ftb-essentials-forge) ([ftb-essentials-1605.1.4-build.24.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-essentials-forge/files/3483906)⟶[ftb-essentials-1605.1.4-build.28.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-essentials-forge/files/3494209))

#### [ftb-essentials-1605.1.4-build.28.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-essentials-forge/files/3494209)

* Added /tpx - LatvianModder

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/ftb-essentials-forge/files/all)

### [FTB Quests (Forge)](https://www.curseforge.com/minecraft/mc-mods/ftb-quests-forge) ([ftb-quests-forge-1605.3.5-build.64.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-quests-forge/files/3469837)⟶[ftb-quests-forge-1605.3.5-build.69.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-quests-forge/files/3492764))

#### [ftb-quests-forge-1605.3.5-build.69.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-quests-forge/files/3492764)

* Re-added FTB Money integration - LatvianModder

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/ftb-quests-forge/files/all)

### [FTB Teams (Forge)](https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge) ([ftb-teams-forge-1605.2.2-build.32.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge/files/3460043)⟶[ftb-teams-forge-1605.2.3-build.38.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge/files/3492657))

#### [ftb-teams-forge-1605.2.3-build.38.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge/files/3492657)

* Added getExtraData() in KnownClientPlayer - LatvianModder

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge/files/all)

### [FTB Ultimine (Forge)](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge) ([ftb-ultimine-forge-1605.3.0-build.27.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge/files/3487876)⟶[ftb-ultimine-forge-1605.3.0-build.33.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge/files/3490776))

#### [ftb-ultimine-forge-1605.3.0-build.33.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge/files/3490776)

* Fixed tinkers tools and tools sometimes voiding blocks if they break - LatvianModder

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge/files/all)

### [Farmer's Delight](https://www.curseforge.com/minecraft/mc-mods/farmers-delight) ([Farmer's Delight 0.4.6 - 1.16.5](https://www.curseforge.com/minecraft/mc-mods/farmers-delight/files/3418719)⟶[Farmer's Delight 0.5 - 1.16.5](https://www.curseforge.com/minecraft/mc-mods/farmers-delight/files/3491509))

#### [Farmer's Delight 0.5 - 1.16.5](https://www.curseforge.com/minecraft/mc-mods/farmers-delight/files/3491509)

0.5.0

Breaking changes (BACKUP YOUR SAVES!)

* This update causes a few breaking changes. Follow this link for more info:
* [https://github.com/vectorwing/FarmersDelight/wiki/0.5-Breaking-Changes](https://github.com/vectorwing/FarmersDelight/wiki/0.5-Breaking-Changes)

Additions

* Skillet - A portable food-cooking utensil with a powerful swing!
* Can be placed as a block (shift-use) or operated from your hand, if near a heat source;
* Being on fire counts as a heat source when handheld!
* Acts as a heavyweight melee weapon, packing extra knockback, but with very slow swings;
* 1 second slower than a Smoker by default, but cooks progressively faster when enchanted with Fire Aspect;
* Cannot interact with Hoppers as of now. This is pending a thinking-over later.
* New foods:
* Bacon and Eggs - Plenty of cholesterol for a fresh morning!
* New drinks:
* Apple Cider - A warm and simple drink to toughen you up with Absorption for a minute;
* Melon Juice - Refreshing and healthy! Heals 1 heart instantly;
* Canvas Rug - A fuzzy, rudimentary floor cover made of Canvas;
* Canvas Signs - Painterly signs with a dyeable background and a smooth writing surface!
* The sign is "uncolored" when first crafted, using the natural beige tone of Canvas;
* Can be crafted with any normal dye to color its background;
* Text can be dyed as usual by right-clicking the sign with a dye item;
* Signs with a "dark" background color start off with white text. This can be customized in the config.

Updates

* All workstations have been optimized for better performance, and now cache the previous recipes when processing;
* Pie and cake slices had their Speed buff shortened to 30 seconds;
* Cooking Pot:
* You now get experience points from cooking!
* Just like a Furnace, retrieving meals from the output slot will reward you the experience stored so far;
* Mining the pot will also release all stored experience;
* The pot can now be heated through heat_conductors, up to 1 block of space:
* By default, this applies to the metallic Hopper, letting you heat your food AND extract it at the same time!
* Built-in support for Create's Chutes, and 1.17 Copper Blocks are planned to be tagged as such in the future;
* You can now hang the pot from a handle!
* Place the pot from under a block, and it will display a handle;
* If a handle is shown, the pot won't display a tray at all;
* You can toggle between tray and handle by sneak-right-clicking the pot.
* The pot emits a new, custom steam particle when boiling;
* The boiling sound becomes more "soupy" when the pot is storing a meal;
* Stove:
* You can now use Fire Charges to light them;
* You can now use any item with a "shovel" ToolType to extinguish them;
* Cookable food can be placed on a Stove that isn't lit;
* Cutting Board:
* Cutting recipes can now define a drop chance for each output item!
* Chance is optional, and outputs are 100% guaranteed by default;
* Fortune increases chances, if the given tool is enchanted with it. This bonus can be tweaked in the configs;
* In FD, chances have been given to some flower-cutting and salvaging recipes;
* Check the GitHub wiki to see how the new syntax works.
* Updated JEI recipe displays to have dynamic outputs, and to also show drop chances;
* Carved tools have been mirrored, so as to avoid cutting across the handle gap;

[(20 more lines)](https://www.curseforge.com/minecraft/mc-mods/farmers-delight/files/3491509)

### [GeckoLib](https://www.curseforge.com/minecraft/mc-mods/geckolib) ([geckolib-forge-1.16.5-3.0.46.jar](https://www.curseforge.com/minecraft/mc-mods/geckolib/files/3448099)⟶[geckolib-forge-1.16.5-3.0.48.jar](https://www.curseforge.com/minecraft/mc-mods/geckolib/files/3495875))

#### [geckolib-forge-1.16.5-3.0.48.jar](https://www.curseforge.com/minecraft/mc-mods/geckolib/files/3495875)

v3.0.48

* Updated mclib and molang to latest.

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/geckolib/files/all)

### [Immersive Engineering](https://www.curseforge.com/minecraft/mc-mods/immersive-engineering) ([ImmersiveEngineering-1.16.5-5.0.3-138](https://www.curseforge.com/minecraft/mc-mods/immersive-engineering/files/3431122)⟶[ImmersiveEngineering-1.16.5-5.0.4-139](https://www.curseforge.com/minecraft/mc-mods/immersive-engineering/files/3483884))

#### [ImmersiveEngineering-1.16.5-5.0.4-139](https://www.curseforge.com/minecraft/mc-mods/immersive-engineering/files/3483884)

* Improve behavior of conveyors near unloaded/non-ticking chunks (Malte)
* Fix inconsistent redstone behavior of strip curtains (Malte)
* Fix redstone connectors not working on the main input of comparators (Malte)
* Fix logic units not clearing registers between cycles (Malte)
* Fix issues when adding or removing boards from the logic unit (Malte)
* Fix rare crash involving redstone wires (Malte)
* Fix race condition when addons add config getters (Malte)
* Fix issues with the workbench UI (Malte)
* Fix item entity output location for the auto-workbench (Malte)
* Fix wire desync (Malte)
* Fix render layer for diesel generator (Malte)
* Fix revolver bullet desync (Malte)
* Fix invisible fluid splash particles (Malte)
* Fix crash when building an excavator without a vein (Malte)
* Fix some recipes damaging instead of consuming their ingredients (Malte)
* Fix pump vanishing when the bottling machine is broken (Malte)
* Reduce block updates on multiblocks (Malte)
* Fix Spanish translation for lightning rods (TwistedGate)
* Fix recipes for graphite dust not loading with newer versions of JEI (BluSunrize)

### [Immersive Petroleum](https://www.curseforge.com/minecraft/mc-mods/immersive-petroleum) ([ImmersivePetroleum-1.16.5-3.3.0-6.jar](https://www.curseforge.com/minecraft/mc-mods/immersive-petroleum/files/3454143)⟶[ImmersivePetroleum-1.16.5-3.3.0-7.jar](https://www.curseforge.com/minecraft/mc-mods/immersive-petroleum/files/3489757))

#### [ImmersivePetroleum-1.16.5-3.3.0-7.jar](https://www.curseforge.com/minecraft/mc-mods/immersive-petroleum/files/3489757)

1.16.5-3.3.0-7

---------------------------------------

Minimum Forge: 36.2.0

Minimum IE: 1.16.5-5.0.4-139

! Fixed Distillation Tower not outputting fluids when receiving redstone signal. (TwistedGate)

! Fixed NoSuchMethod crash with IE 5.0.4-139 (malte0811)

! Possibly fixed ConcurrentModificationException. (TwistedGate)

* Update Chinese Translations. (mc-kaishixiaxue)

1.16.5-3.3.0-6

---------------------------------------

* Added special death-by-flarestack message. (TwistedGate)
* Added flarestack fire sound. (TwistedGate)

! Fixed OilCan not doing anything. (TwistedGate)

! Fixed projector-projection displaying blocks correctly now. (TwistedGate)

! Fixed creative Projector-Placing blockstate errors. (TwistedGate)

! Fixed NullPointerException in IPSaveData. (TwistedGate)

! Fixed Autolubricator and Flarestack dropping itself when top part is broken. (TwistedGate)

! Fixed manual not loading with ImmersivePosts installed.

* Changed flarestack fire damage to be based on amount being burned. (TwistedGate)
* Changed behaviour of the Confirm button, to automaticly switch to Projection Mode. (TwistedGate)
* Multiblock list in Projector GUI is now sorted in alphabetical order. (TwistedGate)
* Chinese translations. (mcBegins2Snow)

1.16.5-3.3.0-5

---------------------------------------

! Fixed bug with pipes-to-bedrock check for Pumpjack. (TwistedGate)

! Fixed Asphalt Stairs and Slab not dropping items. (TwistedGate)

! Fixed Portable Generator producing power without Gasoline. (TwistedGate)

! Fixed a crash caused by Quarks Item-Pipes with Distillation Tower and SRU. (TwistedGate)

! Fixed server config option for Generator and Boat fuels not being applied. (TwistedGate)

! Fixed pumpjack consuming power while idling. (bluefire-fx)

* Updated Russian Language. (Defrunct)
* Added Spanish Language. (FrannDzs)

1.16.5-3.3.0-4

---------------------------------------

Minimum Forge: 36.1.0

Minimum IE: 1.16.5-5.0.0-135

* Added Coker. (TwistedGate)
* Added Sulfur Recovery Unit. (TwistedGate)
* Added ability to turn off flarestack with a redstone signal. (TwistedGate)
* Added Sulfurized Diesel. (TwistedGate)
* Reimplemented the Motorboat. (TwistedGate)
* Added Asphalt Stairs and Slab. (TwistedGate)

! Fixed config generating .bak files every time. (TwistedGate)

! Fixed Portable Generator burning out wires. (TwistedGate)

! Fixed Portable Generator not updating the tank and RF storage. (TwistedGate)

! Fixed Portable Generator recipe not showing up in manual. (TwistedGate)

! Fixed fluid names not being displayed in manual reservoir entry. (TwistedGate)

! Fixed tower manual entry not showing fluid names in table. (TwistedGate)

! Fixed pumpjack pumping days not being accurate in manual. (TwistedGate)

! Fixed the stupidly high horizontal scroll speed for the projector multiblock list while hovering over an entry that has a too long string. (TwistedGate)

[(173 more lines)](https://www.curseforge.com/minecraft/mc-mods/immersive-petroleum/files/3489757)

### [Just Enough Effect Descriptions (JEED)](https://www.curseforge.com/minecraft/mc-mods/just-enough-effect-descriptions-jeed) ([jeed-1.16.5-1.1.jar](https://www.curseforge.com/minecraft/mc-mods/just-enough-effect-descriptions-jeed/files/3477842)⟶[jeed-1.16.5-1.2.jar](https://www.curseforge.com/minecraft/mc-mods/just-enough-effect-descriptions-jeed/files/3496673))

#### [jeed-1.16.5-1.2.jar](https://www.curseforge.com/minecraft/mc-mods/just-enough-effect-descriptions-jeed/files/3496673)

Added config with an optional blacklist, useful to not make some selected effects not register at all

Added more tooltips and reformatted a lot of older ones to be more consistent and precise

Added some inter mod compatibility, it particular JEED can now be used with Forge REI port instead of JEI (cry about it >:) )

### [Mekanism](https://www.curseforge.com/minecraft/mc-mods/mekanism) ([Mekanism-1.16.5-10.0.21.448.jar](https://www.curseforge.com/minecraft/mc-mods/mekanism/files/3206392)⟶[Mekanism-1.16.5-10.0.22.449.jar](https://www.curseforge.com/minecraft/mc-mods/mekanism/files/3497015))

#### [Mekanism-1.16.5-10.0.22.449.jar](https://www.curseforge.com/minecraft/mc-mods/mekanism/files/3497015)

[c904aae](https://github.com/mekanism/Mekanism/commit/c904aae20d60d0861dc71487e8a953488bddda1f) - Fixed GUI Slots

[b0a96e1](https://github.com/mekanism/Mekanism/commit/b0a96e1eb7b5f5741cb1ca2f4ce656084ae923d5) - add some basic implementations of IRecipe.getRecipeOutput for single static outputs of ItemStacks

[8b2d2e8](https://github.com/mekanism/Mekanism/commit/8b2d2e833581127879474909f499b28a3cc3f166) - Avoid VisionEnhancement night vision flashing ([#7250](https://github.com/mekanism/Mekanism/issues/7250))

[597740a](https://github.com/mekanism/Mekanism/commit/597740a800de6a8b99f2a8fcca78ccabdd7f36fa) - Fix merging of acceptor caches not properly merging acceptors that have changed and are in need of being rechecked [#6356](https://github.com/mekanism/Mekanism/issues/6356)

[d2f79f1](https://github.com/mekanism/Mekanism/commit/d2f79f13b302cfea53950884fad481d0cd46a61a) - version bump

### [Mekanism Generators](https://www.curseforge.com/minecraft/mc-mods/mekanism-generators) ([MekanismGenerators-1.16.5-10.0.21.448.jar](https://www.curseforge.com/minecraft/mc-mods/mekanism-generators/files/3206395)⟶[MekanismGenerators-1.16.5-10.0.22.449.jar](https://www.curseforge.com/minecraft/mc-mods/mekanism-generators/files/3497018))

#### [MekanismGenerators-1.16.5-10.0.22.449.jar](https://www.curseforge.com/minecraft/mc-mods/mekanism-generators/files/3497018)

[c904aae](https://github.com/mekanism/Mekanism/commit/c904aae20d60d0861dc71487e8a953488bddda1f) - Fixed GUI Slots

[b0a96e1](https://github.com/mekanism/Mekanism/commit/b0a96e1eb7b5f5741cb1ca2f4ce656084ae923d5) - add some basic implementations of IRecipe.getRecipeOutput for single static outputs of ItemStacks

[8b2d2e8](https://github.com/mekanism/Mekanism/commit/8b2d2e833581127879474909f499b28a3cc3f166) - Avoid VisionEnhancement night vision flashing ([#7250](https://github.com/mekanism/Mekanism/issues/7250))

[597740a](https://github.com/mekanism/Mekanism/commit/597740a800de6a8b99f2a8fcca78ccabdd7f36fa) - Fix merging of acceptor caches not properly merging acceptors that have changed and are in need of being rechecked [#6356](https://github.com/mekanism/Mekanism/issues/6356)

[d2f79f1](https://github.com/mekanism/Mekanism/commit/d2f79f13b302cfea53950884fad481d0cd46a61a) - version bump

### [Mekanism Tools](https://www.curseforge.com/minecraft/mc-mods/mekanism-tools) ([MekanismTools-1.16.5-10.0.21.448.jar](https://www.curseforge.com/minecraft/mc-mods/mekanism-tools/files/3206396)⟶[MekanismTools-1.16.5-10.0.22.449.jar](https://www.curseforge.com/minecraft/mc-mods/mekanism-tools/files/3497019))

#### [MekanismTools-1.16.5-10.0.22.449.jar](https://www.curseforge.com/minecraft/mc-mods/mekanism-tools/files/3497019)

[c904aae](https://github.com/mekanism/Mekanism/commit/c904aae20d60d0861dc71487e8a953488bddda1f) - Fixed GUI Slots

[b0a96e1](https://github.com/mekanism/Mekanism/commit/b0a96e1eb7b5f5741cb1ca2f4ce656084ae923d5) - add some basic implementations of IRecipe.getRecipeOutput for single static outputs of ItemStacks

[8b2d2e8](https://github.com/mekanism/Mekanism/commit/8b2d2e833581127879474909f499b28a3cc3f166) - Avoid VisionEnhancement night vision flashing ([#7250](https://github.com/mekanism/Mekanism/issues/7250))

[597740a](https://github.com/mekanism/Mekanism/commit/597740a800de6a8b99f2a8fcca78ccabdd7f36fa) - Fix merging of acceptor caches not properly merging acceptors that have changed and are in need of being rechecked [#6356](https://github.com/mekanism/Mekanism/issues/6356)

[d2f79f1](https://github.com/mekanism/Mekanism/commit/d2f79f13b302cfea53950884fad481d0cd46a61a) - version bump

### [More Dragon Eggs](https://www.curseforge.com/minecraft/mc-mods/more-dragon-eggs) ([moredragoneggs-1.4.jar](https://www.curseforge.com/minecraft/mc-mods/more-dragon-eggs/files/3037991)⟶[moredragoneggs-2.0.jar](https://www.curseforge.com/minecraft/mc-mods/more-dragon-eggs/files/3489119))

#### [moredragoneggs-2.0.jar](https://www.curseforge.com/minecraft/mc-mods/more-dragon-eggs/files/3489119)

* moved to mixins
* egg will now spawn the same way as in Vanilla when the dragon is completely gone, rather than when killed

performance impact changed from negligible to nonexistent

### [Occultism](https://www.curseforge.com/minecraft/mc-mods/occultism) ([occultism-1.16.0.jar](https://www.curseforge.com/minecraft/mc-mods/occultism/files/3488749)⟶[occultism-1.17.2.jar](https://www.curseforge.com/minecraft/mc-mods/occultism/files/3496016))

#### [occultism-1.17.2.jar](https://www.curseforge.com/minecraft/mc-mods/occultism/files/3496016)

[Automated Build]

1.17.2

Changelog for this build: [https://github.com/klikli-dev/occultism/releases/tag/release/v1.16.5-1.17.2](https://github.com/klikli-dev/occultism/releases/tag/release/v1.16.5-1.17.2)

Find changes for all versions at [https://github.com/klikli-dev/occultism/releases](https://github.com/klikli-dev/occultism/releases)

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/occultism/files/all)

### [PonderJS](https://www.curseforge.com/minecraft/mc-mods/ponderjs) ([ponderjs-1.16.5-1.0.3.jar](https://www.curseforge.com/minecraft/mc-mods/ponderjs/files/3473075)⟶[ponderjs-1.16.5-1.0.3a.jar](https://www.curseforge.com/minecraft/mc-mods/ponderjs/files/3494772))

#### [ponderjs-1.16.5-1.0.3a.jar](https://www.curseforge.com/minecraft/mc-mods/ponderjs/files/3494772)

* now accepts create v0.3.2e

### [Quark](https://www.curseforge.com/minecraft/mc-mods/quark) ([Quark-r2.4-316.jar](https://www.curseforge.com/minecraft/mc-mods/quark/files/3394265)⟶[Quark-r2.4-319.jar](https://www.curseforge.com/minecraft/mc-mods/quark/files/3490981))

#### [Quark-r2.4-319.jar](https://www.curseforge.com/minecraft/mc-mods/quark/files/3490981)

* Fixed an incorrect mapping causing Experimental Shiba to crash the game when picking up a trident outside of a development environment

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/quark/files/all)

### [Repurposed Structures (Forge)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures) ([Repurposed Structures v3.2.9 (1.16.5 MC)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures/files/3486458)⟶[Repurposed Structures v3.3.1 (1.16.5 MC)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures/files/3496193))

#### [Repurposed Structures v3.3.1 (1.16.5 MC)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures/files/3496193)

(V.3.3.1 Changes) (1.16.5 Minecraft)

Villages:

Adjusted some zombie terminator pool files so that they are used now for many zombie variant RS Villages.

Adjusted many RS Village's terminator pieces to make absolutely sure they cannot spawn the wrong village's street to prevent other village's buildings from spawning in extremely rare edge cases.

Fixed Zombie Warped Village spawning non-zombified Piglins.

Mod Compat:

Added limit on piece spawning for future mod compat datapacks with Tidbits, Reosurceful Bees, and PneumaticCraft: Repressurized. I'm just future proofing a bit.

(V.3.3.0 Changes) (1.16.5 Minecraft)

Villages:

Added Mushroom Villages for Mushroom category biomes!

Fixed Mountains Villages very very rarely spawn Savanna Village pieces.

Fixed Swamp and Giant Tree Taiga Villages very very rarely spawn Plains Village pieces.

Removed a lot of the randomly placed Red Sand blocks from Badlands Villages to make them look a lot cleaner.

Mod Compat:

Houses added to RS's villages from the official mod compat datapacks will now only spawn more more than once for a single village. This will greatly help prevent RS's villages from becoming overloaded with multiple modded houses from the datapacks.

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures/files/all)

### [Rhino](https://www.curseforge.com/minecraft/mc-mods/rhino) ([rhino-forge-1605.1.4-build.63.jar](https://www.curseforge.com/minecraft/mc-mods/rhino/files/3470925)⟶[rhino-forge-1605.1.4-build.67.jar](https://www.curseforge.com/minecraft/mc-mods/rhino/files/3493061))

#### [rhino-forge-1605.1.4-build.67.jar](https://www.curseforge.com/minecraft/mc-mods/rhino/files/3493061)

* Use JDK 16 for Gradle, apparently Loom needs it - Max

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/rhino/files/all)

### [Supplementaries](https://www.curseforge.com/minecraft/mc-mods/supplementaries) ([supplementaries-1.16.5-0.17.5.jar](https://www.curseforge.com/minecraft/mc-mods/supplementaries/files/3488926)⟶[supplementaries-1.16.5-0.17.6.jar](https://www.curseforge.com/minecraft/mc-mods/supplementaries/files/3493463))

#### [supplementaries-1.16.5-0.17.6.jar](https://www.curseforge.com/minecraft/mc-mods/supplementaries/files/3493463)

v 0.17.6: Improved books & fixes

* Fixed a crash with safe tooltips
* Fixed fishes in a jar crashing the game
* Changed placeable books textures
* Improved placeable books color assignment algorithm: they now support all 16 colors and will generally look better
* Placeable books now also support colored books from Inspirations mod
* Added a new config option to allow the placement of every book type in every configuration (so normal books horizontally and enchanted vertically)
* Updated some tags and some other minor fixes
* Updated many translations

### [Valhelsia Core](https://www.curseforge.com/minecraft/mc-mods/valhelsia-core) ([Valhelsia Core - 16.0.11](https://www.curseforge.com/minecraft/mc-mods/valhelsia-core/files/3476240)⟶[Valhelsia Core - 16.0.12](https://www.curseforge.com/minecraft/mc-mods/valhelsia-core/files/3490931))

#### [Valhelsia Core - 16.0.12](https://www.curseforge.com/minecraft/mc-mods/valhelsia-core/files/3490931)

* Fixed some log spam when players join a server.

### [YUNG's API (Forge)](https://www.curseforge.com/minecraft/mc-mods/yungs-api) ([[1.16.4 / 1.16.5] YUNG's API vForge-12](https://www.curseforge.com/minecraft/mc-mods/yungs-api/files/3412585)⟶[[1.16.4 / 1.16.5] YUNG's API vForge-13](https://www.curseforge.com/minecraft/mc-mods/yungs-api/files/3494919))

#### [[1.16.4 / 1.16.5] YUNG's API vForge-13](https://www.curseforge.com/minecraft/mc-mods/yungs-api/files/3494919)

API now works with newer Java versions!

Join us on Discord:

Generated using [ChangelogGenerator 2.0.0-pre10](https://github.com/TheRandomLabs/ChangelogGenerator).
