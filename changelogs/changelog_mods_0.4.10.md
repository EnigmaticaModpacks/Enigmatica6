# Enigmatica6 0.4.9⟶Enigmatica6 0.4.10

## Added

* [Chocolate Fix](https://www.curseforge.com/minecraft/mc-mods/chocolate-fix)
* [Client Tweaks](https://www.curseforge.com/minecraft/mc-mods/client-tweaks)
* [Construction Wand](https://www.curseforge.com/minecraft/mc-mods/construction-wand)
* [Crash Utilities](https://www.curseforge.com/minecraft/mc-mods/crash-utilities)
* [Dynamic View](https://www.curseforge.com/minecraft/mc-mods/dynamic-view)
* [Entangled](https://www.curseforge.com/minecraft/mc-mods/entangled)
* [Portality](https://www.curseforge.com/minecraft/mc-mods/portality)
* [RFTools Dimensions](https://www.curseforge.com/minecraft/mc-mods/rftools-dimensions)
* [Shutup Experimental Settings!](https://www.curseforge.com/minecraft/mc-mods/shutup-experimental-settings)
* [SuperMartijn642's Config Lib](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-config-lib)

## Updated

### [Advanced Peripherals](https://www.curseforge.com/minecraft/mc-mods/advanced-peripherals) ([Advanced Peripherals 0.5.1b](https://www.curseforge.com/minecraft/mc-mods/advanced-peripherals/files/3288538)⟶[Advanced Peripherals 0.5.3b](https://www.curseforge.com/minecraft/mc-mods/advanced-peripherals/files/3294374))

#### [Advanced Peripherals 0.5.3b](https://www.curseforge.com/minecraft/mc-mods/advanced-peripherals/files/3294374)

Added the [redstone integrator

](https://www.curseforge.com/linkout?remoteUrl=https://docs.srendi.de/peripherals/redstone_integrator/)Added a better documentation for the [item parameters](https://www.curseforge.com/linkout?remoteUrl=https://docs.srendi.de/othersandutilities/item_parameter/) of the me and rs bridge.

Added getArmor, isPlayerEquipped and isWearing to the inventory manager.

Added a [fingerprint](https://www.curseforge.com/linkout?remoteUrl=https://docs.srendi.de/othersandutilities/item_parameter/) to the items of the me and rs bridge.

Improved the nbt value of the item informations in the me and rs brigde. It is now more useful than just "Key: String"

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/advanced-peripherals/files/all)

### [Apotheosis](https://www.curseforge.com/minecraft/mc-mods/apotheosis) ([Apotheosis-1.16.4-4.5.1.jar](https://www.curseforge.com/minecraft/mc-mods/apotheosis/files/3283173)⟶[Apotheosis-1.16.4-4.5.2.jar](https://www.curseforge.com/minecraft/mc-mods/apotheosis/files/3292606))

#### [Apotheosis-1.16.4-4.5.2.jar](https://www.curseforge.com/minecraft/mc-mods/apotheosis/files/3292606)

Surface Boss Spawn lightning has been returned.

Surface Boss Spawning has been moved to LOWEST priority on the CheckSpawn event handler, which may fix an issue with TorchMaster. If it doesn't, TM will need to move their handler to LOW.

The Tome of Scrapping and Affix Tomes will now vary their results with the player's XP seed.

Affix Loot is now less dependent on class inheritance.

The Radial Mining affix can no longer break bedrock, even if a tool reports it is effective on bedrock.

### [Ars Nouveau](https://www.curseforge.com/minecraft/mc-mods/ars-nouveau) ([ars_nouveau-1.16.4-1.14.1.jar](https://www.curseforge.com/minecraft/mc-mods/ars-nouveau/files/3286983)⟶[ars_nouveau-1.16.4-1.15.1.jar](https://www.curseforge.com/minecraft/mc-mods/ars-nouveau/files/3293436))

#### [ars_nouveau-1.16.4-1.15.1.jar](https://www.curseforge.com/minecraft/mc-mods/ars-nouveau/files/3293436)

Fixes dupes and crashes with Summon Decoy

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/ars-nouveau/files/all)

### [Clumps](https://www.curseforge.com/minecraft/mc-mods/clumps) ([Clumps-6.0.0.21.jar](https://www.curseforge.com/minecraft/mc-mods/clumps/files/3275832)⟶[Clumps-6.0.0.22.jar](https://www.curseforge.com/minecraft/mc-mods/clumps/files/3294214))

#### [Clumps-6.0.0.22.jar](https://www.curseforge.com/minecraft/mc-mods/clumps/files/3294214)

Current version: 6.0.0.22

* [Hopefully fix a null clumpedMap. Close #62](https://github.com/jaredlll08/Clumps/commit/2ef9b36854c18d2b0ef24a6077bdb191568f54e5) - Jared - Fri Apr 30 21:36:56 2021
* [update forge and the build.gradle](https://github.com/jaredlll08/Clumps/commit/fb6fe02c211bc21fc942fb07557f7b9d8e253557) - Jared - Fri Apr 30 21:36:34 2021
* [Rework how mending is applied](https://github.com/jaredlll08/Clumps/commit/87e9b53c60750a795dd68ee4b988aee3f88fd550) - Jared - Wed Apr 14 14:43:14 2021
* [mark mcmt as compatible for now](https://github.com/jaredlll08/Clumps/commit/1b2ea8c2abf459e4e9334fa032ee6b7b0ce6a37d) - Jared - Tue Apr 13 15:30:29 2021
* [Add discord webhook](https://github.com/jaredlll08/Clumps/commit/9ab3c9d11ad16040406f4cc672811c0dd3a056c9) - Jared - Tue Apr 13 15:27:55 2021
* [Fix mending Calculation. Thanks @TheNormMan! Fixes #60](https://github.com/jaredlll08/Clumps/commit/bbecec20f9fbc37511f050d02e05443c48b94de7) - Jared - Sat Apr 10 19:04:30 2021
* [Migrate to deferred register, safeRunWhenOn, add localization (#54)](https://github.com/jaredlll08/Clumps/commit/38896602c4081a862d25d2cbe0b648fd1d14f079) - Chloe Dawn - Tue Feb 16 04:37:37 2021
* [update to 1.16.5](https://github.com/jaredlll08/Clumps/commit/13bfd39f1be7670a5a72e53377e9c8923556df09) - Jared - Sun Feb 14 20:31:57 2021
* [Mark MCMT as incompatible](https://github.com/jaredlll08/Clumps/commit/902b3a49672c883eb1d5859ee7e7a0065b1ccba8) - Jared - Mon Feb 8 04:21:14 2021
* [Fixed Clumps and Mending close $49](https://github.com/jaredlll08/Clumps/commit/d3c3fb10543e12f15a7e6ae8c257a3971f6e6c06) - Jared - Wed Feb 3 22:02:56 2021
* [proper port to 1.16.4](https://github.com/jaredlll08/Clumps/commit/bd5b5c4cd7e0de5141e8f64fa8b39a2e7bc24faf) - Jared - Sun Dec 13 01:25:18 2020
* [Cleanup and Efficiency (#42)](https://github.com/jaredlll08/Clumps/commit/321e4bd8458ea144990daa4f1f460901cee9ff44) - ChampionAsh5357 - Sun Nov 1 23:40:27 2020
* [Implement XP orb events (#41)](https://github.com/jaredlll08/Clumps/commit/129d87d18a24972051fbb036b421e918dce700c3) - FalseHonesty - Sat Oct 3 22:25:05 2020
* [port to 1.16.3](https://github.com/jaredlll08/Clumps/commit/810f040c82d4ee818bd2cbae92a1caafbc2290a5) - Jared - Wed Sep 16 23:15:08 2020
* [1.16.2 3rd times the charm](https://github.com/jaredlll08/Clumps/commit/49fd7690a8d32d1134009670a0df750a88c37446) - Jared - Tue Aug 25 17:55:44 2020
* [fix mapping issue](https://github.com/jaredlll08/Clumps/commit/0fd50c1855ad7c20126d0382f3d32ff032825489) - Jared - Tue Aug 25 17:24:46 2020
* [Fixed xp not dropping in dims (1.16.1) Close #192](https://github.com/jaredlll08/Clumps/commit/8fc3d38208a9b9aa1f36e96b5dc95fce2e61a954) - Jared - Tue Aug 25 17:16:30 2020
* [orb improvements](https://github.com/jaredlll08/Clumps/commit/75899ddf5dcb03398bd491266e6c325b7d8e78c6) - Jared - Thu Aug 20 20:21:10 2020
* [re-fix clumps causing crashes close #35](https://github.com/jaredlll08/Clumps/commit/234a169d959f1aefb65151a4328f04e70d1c7cc4) - Jared - Sun Jul 19 21:03:52 2020
* [update version](https://github.com/jaredlll08/Clumps/commit/91b94baf80891a34d0ad95fc90f8ce05deb4cf3c) - Jared - Sat Jul 18 01:58:06 2020
* [update commit](https://github.com/jaredlll08/Clumps/commit/1228c2b85508b66799487f0b16600a35f4e34d25) - Jared - Sat Jul 18 01:54:03 2020

### [Common Capabilities](https://www.curseforge.com/minecraft/mc-mods/common-capabilities) ([CommonCapabilities-1.16.5-2.6.0.jar](https://www.curseforge.com/minecraft/mc-mods/common-capabilities/files/3256898)⟶[CommonCapabilities-1.16.5-2.7.0.jar](https://www.curseforge.com/minecraft/mc-mods/common-capabilities/files/3292062))

#### [CommonCapabilities-1.16.5-2.7.0.jar](https://www.curseforge.com/minecraft/mc-mods/common-capabilities/files/3292062)

As always, don't forget to backup your world before updating!

Requires CyclopsCore version 1.11.1 or higher.

Changes:

* Migrate energy ingredient component to long-based values

Required for CyclopsMC/IntegratedDynamics#1023

### [Config Swapper](https://www.curseforge.com/minecraft/mc-mods/config-swapper) ([configswapper-1.2.jar](https://www.curseforge.com/minecraft/mc-mods/config-swapper/files/3200929)⟶[configswapper-1.3.jar](https://www.curseforge.com/minecraft/mc-mods/config-swapper/files/3294697))

#### [configswapper-1.3.jar](https://www.curseforge.com/minecraft/mc-mods/config-swapper/files/3294697)

fixed a bug where trying to modify clientside configs on a server would cause /mode to fail

### [Curious Armor Stands](https://www.curseforge.com/minecraft/mc-mods/curious-armor-stands) ([Curious Armor Stands-1.16.3-2.0.2.jar](https://www.curseforge.com/minecraft/mc-mods/curious-armor-stands/files/3107245)⟶[Curious Armor Stands-1.16.5-2.1.0.jar](https://www.curseforge.com/minecraft/mc-mods/curious-armor-stands/files/3288589))

#### [Curious Armor Stands-1.16.5-2.1.0.jar](https://www.curseforge.com/minecraft/mc-mods/curious-armor-stands/files/3288589)

* Fixed slots used by armor stands temporarily appearing among the player's curio slots after using the '/curios reset' command
* Reworked some stuff behind the scenes to prevent further issues

### [Cyclops Core](https://www.curseforge.com/minecraft/mc-mods/cyclops-core) ([CyclopsCore-1.16.5-1.11.5.jar](https://www.curseforge.com/minecraft/mc-mods/cyclops-core/files/3261776)⟶[CyclopsCore-1.16.5-1.11.6.jar](https://www.curseforge.com/minecraft/mc-mods/cyclops-core/files/3292066))

#### [CyclopsCore-1.16.5-1.11.6.jar](https://www.curseforge.com/minecraft/mc-mods/cyclops-core/files/3292066)

As always, don't forget to backup your world before updating!

Fixes:

* Make infobook injections loading thread-safe, Closes #157
* Cache world key creation in DimPos

This fixes performance issues, Closes #155

### [GeckoLib](https://www.curseforge.com/minecraft/mc-mods/geckolib) ([geckolib-forge-1.16.5-3.0.31.jar](https://www.curseforge.com/minecraft/mc-mods/geckolib/files/3282081)⟶[geckolib-forge-1.16.5-3.0.32.jar](https://www.curseforge.com/minecraft/mc-mods/geckolib/files/3292481))

#### [geckolib-forge-1.16.5-3.0.32.jar](https://www.curseforge.com/minecraft/mc-mods/geckolib/files/3292481)

v3.0.32

* New interface for syncing items in mulitplayer, ISyncable. #DenimRed

### [Integrated Crafting](https://www.curseforge.com/minecraft/mc-mods/integrated-crafting) ([IntegratedCrafting-1.16.5-1.0.13.jar](https://www.curseforge.com/minecraft/mc-mods/integrated-crafting/files/3231829)⟶[IntegratedCrafting-1.16.5-1.0.14.jar](https://www.curseforge.com/minecraft/mc-mods/integrated-crafting/files/3292090))

#### [IntegratedCrafting-1.16.5-1.0.14.jar](https://www.curseforge.com/minecraft/mc-mods/integrated-crafting/files/3292090)

As always, don't forget to backup your world before updating!

Requires CyclopsCore version 1.11.1 or higher.

Changes:

* Migrate energy ingredient component to long-based values

Required for CyclopsMC/IntegratedDynamics#1023

Fixes:

* Fix network reader aspects crashing after network corruption

Closes CyclopsMC/IntegratedDynamics#1034

### [Integrated Dynamics](https://www.curseforge.com/minecraft/mc-mods/integrated-dynamics) ([IntegratedDynamics-1.16.5-1.7.2.jar](https://www.curseforge.com/minecraft/mc-mods/integrated-dynamics/files/3271326)⟶[IntegratedDynamics-1.16.5-1.8.0.jar](https://www.curseforge.com/minecraft/mc-mods/integrated-dynamics/files/3292075))

#### [IntegratedDynamics-1.16.5-1.8.0.jar](https://www.curseforge.com/minecraft/mc-mods/integrated-dynamics/files/3292075)

As always, don't forget to backup your world before updating!

Requires CyclopsCore version 1.11.1 or higher.

Additions:

* (core change, required for Integrated Tunnels)

Allow filters to be placed on positions in ingredient networks

Required for CyclopsMC/IntegratedTunnels#98

Changes:

* Migrate energy ingredient component to long-based values

Required for #1023

Fixes:

* Fix going in and out of safe-mode corrupting all networks, Mentioned in #1034
* Fix erroring aspects not updating anymore, Closes #1035

This was the cause of network reader aspects always showing

ERROR, even after a cable was added in front of it to enable

these aspects.

* Fix itemstack values always materializing to stacksize 1, Closes #1025
* Fix item list count operator crashing on heterogeneous lists, Closes #1030
* Fix crash when creating list of operators, Closes #1031
* Fix crash when starting a singleplayer world for the second time

### [Integrated Terminals](https://www.curseforge.com/minecraft/mc-mods/integrated-terminals) ([IntegratedTerminals-1.16.5-1.2.2.jar](https://www.curseforge.com/minecraft/mc-mods/integrated-terminals/files/3268289)⟶[IntegratedTerminals-1.16.5-1.2.3.jar](https://www.curseforge.com/minecraft/mc-mods/integrated-terminals/files/3292102))

#### [IntegratedTerminals-1.16.5-1.2.3.jar](https://www.curseforge.com/minecraft/mc-mods/integrated-terminals/files/3292102)

As always, don't forget to backup your world before updating!

Requires CyclopsCore version 1.11.1 or higher.

Fixes:

* Handle energy counts larger than max integer

Closes CyclopsMC/IntegratedDynamics#1023

* Fix terminals not being usable anymore when energy usage is disabled
* Fix terminals still working if not enough energy

Closes CyclopsMC/IntegratedTunnels#224

### [Integrated Tunnels](https://www.curseforge.com/minecraft/mc-mods/integrated-tunnels) ([IntegratedTunnels-1.16.5-1.7.1.jar](https://www.curseforge.com/minecraft/mc-mods/integrated-tunnels/files/3256914)⟶[IntegratedTunnels-1.16.5-1.8.0.jar](https://www.curseforge.com/minecraft/mc-mods/integrated-tunnels/files/3292110))

#### [IntegratedTunnels-1.16.5-1.8.0.jar](https://www.curseforge.com/minecraft/mc-mods/integrated-tunnels/files/3292110)

As always, don't forget to backup your world before updating!

Requires CyclopsCore version 1.11.1 or higher.

Additions:

* Add filtering ingredient interfaces, Closes #98
* Add tutorials for filtering item interfaces

Changes:

* Apply filters from importers and exporters also on passive I/O

Previously, they would just accept anything.

Closes #75

* Migrate energy ingredient component to long-based values

Required for CyclopsMC/IntegratedDynamics#1023

* Make interfaces consume energy (if energy consumption enabled), Closes #224

Fixes:

* Fix some advancements not having correct icons
* Fix player simulator unable to milk cows, Closes #220
* Fix crash when using items that apply potion effect, Closes #219

### [KubeJS (Forge)](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge) ([kubejs-1605.3.7-build.186-forge.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/3286650)⟶[kubejs-1605.3.7-build.187-forge.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/3295116))

#### [kubejs-1605.3.7-build.187-forge.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/3295116)

* Gradle Cleanup Pt2: Fix common/fabric deps transitivity, as well - Max
* Gradle Cleanup Pt1: Migrate to archmaven and fix forge deps transitivity - Max
* Merge pull request #124 from MelanX/packmode - Kristiāns Micītis
* re-name mode -> packmode - MelanX
* add mode annotation - MelanX

### [LibX](https://www.curseforge.com/minecraft/mc-mods/libx) ([LibX-1.16.3-1.0.47.jar](https://www.curseforge.com/minecraft/mc-mods/libx/files/3286728)⟶[LibX-1.16.3-1.0.62.jar](https://www.curseforge.com/minecraft/mc-mods/libx/files/3294142))

#### [LibX-1.16.3-1.0.62.jar](https://www.curseforge.com/minecraft/mc-mods/libx/files/3294142)

* Fix config processor for enum values - noeppi_noeppi

#### [14 more entries](https://www.curseforge.com/minecraft/mc-mods/libx/files/all)

### [More Red](https://www.curseforge.com/minecraft/mc-mods/more-red) ([morered-1.16.5-2.1.0.2.jar](https://www.curseforge.com/minecraft/mc-mods/more-red/files/3256975)⟶[morered-1.16.5-2.1.0.3.jar](https://www.curseforge.com/minecraft/mc-mods/more-red/files/3292241))

#### [morered-1.16.5-2.1.0.3.jar](https://www.curseforge.com/minecraft/mc-mods/more-red/files/3292241)

* Added support for the Bag of Yurting mod; wires, cables, and wire/cable posts can now be moved by Bags of Yurting correctly

### [MythicBotany](https://www.curseforge.com/minecraft/mc-mods/mythicbotany) ([MythicBotany-1.16.3-1.2.12.jar](https://www.curseforge.com/minecraft/mc-mods/mythicbotany/files/3276052)⟶[MythicBotany-1.16.4-1.3.2.jar](https://www.curseforge.com/minecraft/mc-mods/mythicbotany/files/3294133))

#### [MythicBotany-1.16.4-1.3.2.jar](https://www.curseforge.com/minecraft/mc-mods/mythicbotany/files/3294133)

Added a config file

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/mythicbotany/files/all)

### [Occultism](https://www.curseforge.com/minecraft/mc-mods/occultism) ([occultism-1.0.17.jar](https://www.curseforge.com/minecraft/mc-mods/occultism/files/3252588)⟶[occultism-1.0.18.jar](https://www.curseforge.com/minecraft/mc-mods/occultism/files/3290469))

#### [occultism-1.0.18.jar](https://www.curseforge.com/minecraft/mc-mods/occultism/files/3290469)

[Automated Build]

Changelog for this build: [https://github.com/klikli-dev/occultism/wiki/1.0.18](https://github.com/klikli-dev/occultism/wiki/1.0.18)

Find changes for all versions at [https://github.com/klikli-dev/occultism/releases](https://github.com/klikli-dev/occultism/releases)

### [Oh The Biomes You'll Go](https://www.curseforge.com/minecraft/mc-mods/oh-the-biomes-youll-go) ([Biomes You Go 1.1.14 MCV: 1.16.5](https://www.curseforge.com/minecraft/mc-mods/oh-the-biomes-youll-go/files/3247407)⟶[Biomes You Go 1.2 MCV: 1.16.5](https://www.curseforge.com/minecraft/mc-mods/oh-the-biomes-youll-go/files/3289013))

#### [Biomes You Go 1.2 MCV: 1.16.5](https://www.curseforge.com/minecraft/mc-mods/oh-the-biomes-youll-go/files/3289013)

RESET YOUR CONFIGS

Overworld Patch V1:

-Revamped a ton of textures including but not limited to:

Green Apples, Skyris Green Apple Leaves, Jacaranda Leaves, Aspen Leaves, Meadow Grass & Dirt, Overgrown Stone, Ametrine, & Ether Stone

-BYG stones & ore properties are being properly revamped so each stone reflects is color along with ore & blocks of ore being separate and having their own colors as well

-Ametrine Ore is now Exclusive to the Shattered Viscal Isles sub biome of the Viscal Isles:

You can find regular Ametrine Ore which drops Ametrine Gems per usual.

But you can also come across Budding Ametine ore which when mined will still drop Ametrine Gem but if you let it be, can grow Ametrine Clusters on all 6 sides of it which each cluster dropping an Ametrine Gem.

Budding Ametrine ore cannot be silk touched and using a piston on the block will cause it to break into Ametrine Gems.

-Grassland Plateaus now can generate occasional lakes that are more visually appealing than vanilla lakes

-Revamped Ether Stone:

Added Cobbled Ether Stone

Added Carved Ether Stone

-Ametrine recipes now require Ametrine Block instead of gem to upgrade

-Praire biomes now use custom BYG oak tres instead of vanilla

-Cattails & Reeds can now spawn in every overworld biome (around the water of course)

-Lowered default max Y level for Scoria (now goes lower)

-Major biome changes:

Dev notes: Overall reduced tree density of all BYG biomes, Grove, Enchanted Grove, Flowering Grove, & Enchanted Flowering Grove are now all sub biomes.

Enchanted Groves are now exclusive sub-biomes of the Enchanted Forest.

Grove & Flowering Groves can now spawn in the majority of WARM forest biomes.

-Added Freezing Surface feature which was missing from a select biome (causes snow chunk borders when coming in contact with a snowy biome)

-Revamped Jacaranda:

Added Flowering Indigo & Regular Jacaranda Leaves

Added Regular & Flowering Jacaranda Bushes

Added Regular & Flowering Indigo Jacaranda Bushes

Dev Notes: These exciting new blocks can be found exclusively in the Jacaranda Forest, bonemeal regular bushes to get flowering bushes (bees love them!) further bonemeal a flowering jacaranda bush will grow a tree similar to a sapling (doesn't randomly tick to grow a tree!)

-Fixed 2 block-tall flowers only generating 1 block

-Lowered Bee Spawnrates

Dev Notes: Our Buzzy friends tend to be a bit much in the BYG biomes so we are lowering them to be more of a rare find.

-Disabled Iron Deposit in BluffPeaks

Dev Notes: Was previously added but isn't very polished/at the right quality and may be re-added in the future

-Bees now really enjoy all BYG flowering leaves

-Added Blueberry, Crimson Berry, Green Apple, & Nightshade Berry Pies! Additionally, any special effects on any of the berries will no longer be applied in this update and have instead been moved to the pie.

Blueberry Pie:

Hunger: 6

Saturation: 0.3

Special Effect: Movement Speed for 10 seconds

Green Apple Pie:

Hunger: 6

Saturation: 0.4

Special Effect: Dig Speed for 10 seconds

Crimson Berry Pie:

Hunger: 6

Saturation: 0.3

Special Effect: Fire Resistance for 10 seconds

Nightshade Berry Pie:

Hunger: 6

Saturation: 0.3

Special Effect: Night Vision for 10 seconds

[(2 more lines)](https://www.curseforge.com/minecraft/mc-mods/oh-the-biomes-youll-go/files/3289013)

### [PackMenu](https://www.curseforge.com/minecraft/mc-mods/packmenu) ([PackMenu-1.16.4-2.4.1.jar](https://www.curseforge.com/minecraft/mc-mods/packmenu/files/3264418)⟶[PackMenu-1.16.4-2.4.2.jar](https://www.curseforge.com/minecraft/mc-mods/packmenu/files/3292171))

#### [PackMenu-1.16.4-2.4.2.jar](https://www.curseforge.com/minecraft/mc-mods/packmenu/files/3292171)

Allow buttons to specify hover text.

### [Repurposed Structures (Forge)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures) ([Repurposed Structures v2.6.5 (1.16.5 MC) (36.0.25+ Forge)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures/files/3281243)⟶[Repurposed Structures v2.6.6 (1.16.5 MC) (36.0.25+ Forge)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures/files/3295005))

#### [Repurposed Structures v2.6.6 (1.16.5 MC) (36.0.25+ Forge)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures/files/3295005)

(V.2.6.6 Changes) (1.16.5 Minecraft)

Config:

* Fixed dimension blacklisting not working for dungeons, boulders, wells, and other features.

Strongholds:

* Chest Corridors now will always have a chest instead of a 1/3rd chance.

Witch Huts:

* Fixed Giant Tree Taiga Witch Hut having a stripped spruce log leg instead of Stone Bricks leg.

### [Simply Light](https://www.curseforge.com/minecraft/mc-mods/simply-light) ([simplylight-1.16.4-1.1.2.jar](https://www.curseforge.com/minecraft/mc-mods/simply-light/files/3186971)⟶[simplylight-1.16.4-1.1.3.jar](https://www.curseforge.com/minecraft/mc-mods/simply-light/files/3288992))

#### [simplylight-1.16.4-1.1.3.jar](https://www.curseforge.com/minecraft/mc-mods/simply-light/files/3288992)

Fixing Default Blockstates, closes #20

Moving all registration to the new Class

Force unlock my recipes for people without JEI.

### [Sophisticated Backpacks](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks) ([sophisticatedbackpacks-1.16.4-2.2.9.243.jar](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks/files/3272852)⟶[sophisticatedbackpacks-1.16.4-2.4.0.259.jar](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks/files/3294628))

#### [sophisticatedbackpacks-1.16.4-2.4.0.259.jar](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks/files/3294628)

Fixed issue when transferring more than maxstacksize stacks to slots where it stacks with the same item with less thatn maxstacksize stacks. This would previously cause losing anything over the maxstacksize in the original slot that was clicked on. Now correctly transfer max of maxstacksize and leaves the rest intact.

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks/files/all)

### [Tetra](https://www.curseforge.com/minecraft/mc-mods/tetra) ([tetra-1.16.5-3.8.0.jar](https://www.curseforge.com/minecraft/mc-mods/tetra/files/3232294)⟶[tetra-1.16.5-3.9.2.jar](https://www.curseforge.com/minecraft/mc-mods/tetra/files/3293914))

#### [tetra-1.16.5-3.9.2.jar](https://www.curseforge.com/minecraft/mc-mods/tetra/files/3293914)

Fixes:

* fixed execute with overextend dealing a bit too much damage

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/tetra/files/all)

### [U Team Core](https://www.curseforge.com/minecraft/mc-mods/u-team-core) ([U-Team-Core-1.16.5-3.2.0.194](https://www.curseforge.com/minecraft/mc-mods/u-team-core/files/3257635)⟶[U-Team-Core-1.16.5-3.2.1.195](https://www.curseforge.com/minecraft/mc-mods/u-team-core/files/3288223))

#### [U-Team-Core-1.16.5-3.2.1.195](https://www.curseforge.com/minecraft/mc-mods/u-team-core/files/3288223)

[Changelog of 3.2.1.195](https://github.com/MC-U-Team/U-Team-Core/blob/1.16.5/CHANGELOG.md#1165-321195---2021-04-25)

### [Useful Railroads](https://www.curseforge.com/minecraft/mc-mods/useful-railroads) ([Useful-Railroads-1.16.5-1.4.6.36](https://www.curseforge.com/minecraft/mc-mods/useful-railroads/files/3233242)⟶[Useful-Railroads-1.16.5-1.4.6.37](https://www.curseforge.com/minecraft/mc-mods/useful-railroads/files/3288255))

#### [Useful-Railroads-1.16.5-1.4.6.37](https://www.curseforge.com/minecraft/mc-mods/useful-railroads/files/3288255)

[Changelog of 1.4.6.37](https://github.com/MC-U-Team/Useful-Railroads/blob/1.16.5/CHANGELOG.md#1165-14637---2021-04-25)

### [mGui](https://www.curseforge.com/minecraft/mc-mods/mgui) ([mgui-1.16.4-3.1.3.jar](https://www.curseforge.com/minecraft/mc-mods/mgui/files/3104239)⟶[mgui-1.16.5-3.2.0.jar](https://www.curseforge.com/minecraft/mc-mods/mgui/files/3291267))

#### [mgui-1.16.5-3.2.0.jar](https://www.curseforge.com/minecraft/mc-mods/mgui/files/3291267)

added setColor method to GuiText

### [spark](https://www.curseforge.com/minecraft/mc-mods/spark) ([1.4.3 (Forge 1.16.4)](https://www.curseforge.com/minecraft/mc-mods/spark/files/3138786)⟶[1.5.2 (Forge 1.16.5)](https://www.curseforge.com/minecraft/mc-mods/spark/files/3245792))

#### [1.5.2 (Forge 1.16.5)](https://www.curseforge.com/minecraft/mc-mods/spark/files/3245792)

Hello everyone, update time!   If you like spark, please consider leaving a review or giving it a [star on GitHub](https://github.com/lucko/spark)!   On with the changes...   Added support for async-profiler

* [async-profiler](https://github.com/jvm-profiling-tools/async-profiler) has been integrated into spark as a new profiler engine.
* It is currently supported for Linux x86_64 servers only, the existing Java (WarmRoast) profiler will continue to be maintained for other systems and modes (like --only-ticks-over).
* It's much more accurate and has a lower profiling overhead than the existing engine - win win!    Added permissions for sub-commands instead of just requiring 'spark'
* Sorry it took so long.. I of all people should know better!    Website/viewer changes and improvements
* Deployed a [new documentation site](https://spark.lucko.me/docs)
* Lots of style changes/improvements, added a new(ish) logo
* Deobfuscation mappings are now applied automatically
* Re-added the search bar - finally!
* Re-added highlight/bookmarks, these are now encoded in the URL so you can share specific points in a profile with others easily    Fixed some bugs

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/spark/files/all)

## Removed

* [AI Improvements](https://www.curseforge.com/minecraft/mc-mods/ai-improvements)
* [AmbientSounds 3](https://www.curseforge.com/minecraft/mc-mods/ambientsounds)
* [CreativeCore](https://www.curseforge.com/minecraft/mc-mods/creativecore)
* [Enchantment Descriptions](https://www.curseforge.com/minecraft/mc-mods/enchantment-descriptions)
* [Runelic](https://www.curseforge.com/minecraft/mc-mods/runelic)

Generated using [ChangelogGenerator 2.0.0-pre10](https://github.com/TheRandomLabs/ChangelogGenerator).
