### Enigmatica 6 v0.3.7

_Using Forge-1.16.4-35.1.37_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.3.7.txt)_

**New Mods!**

-   FerriteCore

**Improvements**

-   Worldgen: Stopped Thermal Bituminous sands from generating
-   Disabled Quark/Thermal Carrot, Potato and Beetroot crates, replaced by the new Farmer's Delight variants.
-   Disabled JAOPCA's Ender/Ender Pearl/End Stone Storage Blocks

**Bug Fixes**

-

### Enigmatica 6 v0.3.6

_Using Forge-1.16.4-35.1.36_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.3.6.txt)_

**Note for server admins**: FTB Chunks now allows you to stop chunkloading for players that are offline. To enable it, change the value `chunk_load_offline` to `false` in the file `world/serverconfig/ftbchunks-server.toml`. Enabling it can have a positive impact on TPS.

**New Mod!**

-   FerriteCore

**Improvements**

-   Added missing secondary outputs to Immersive Engineering and Thermal Ore Processing [\#745](https://github.com/NillerMedDild/Enigmatica6/pull/745) ([MuteTiefling](https://github.com/MuteTiefling))
-   Additional Apiary Glass Types [\#871](https://github.com/NillerMedDild/Enigmatica6/issues/871)
-   \[ImgBot\] Optimize images [\#852](https://github.com/NillerMedDild/Enigmatica6/pull/852) ([imgbot[bot]](https://github.com/apps/imgbot))
-   Bee Update - Higher output, higher time in hive [\#832](https://github.com/NillerMedDild/Enigmatica6/pull/832) ([Ridanisaurus](https://github.com/Ridanisaurus))
-   Create Ore Processing - Lead [\#838](https://github.com/NillerMedDild/Enigmatica6/pull/838) ([MuteTiefling](https://github.com/MuteTiefling))
-   Fix for Create Processing [\#748](https://github.com/NillerMedDild/Enigmatica6/pull/748) ([MuteTiefling](https://github.com/MuteTiefling))
-   FTB Chunks: Default max chunk loaded claimed chunks is now 10, down from 25.
-   FTB Chunks: Offline chunkloading is now off by default, but old worlds/servers will still have it on. See above for instructions if you wish to change it.
-   Implementation of Supplementaries [\#778](https://github.com/NillerMedDild/Enigmatica6/pull/778) ([kil0byt3](https://github.com/kil0byt3))
-   Lost Trinkets: There is now a 30 minute cooldown between being able to obtain a Lost Trinket.
-   Lost Trinkets: The following Trinkets can no longer be randomly obtained:
    Note: There will most likely be added a way to obtain some of these in the future
    -   Rock Candy
    -   Tha Cloud
    -   Turtle Sheel
    -   Blaze Heart
    -   Tha Bat
    -   Tea Leaf
    -   Octopick
    -   Magic Herbs
    -   Magical Feathers
    -   Mad Aura
-   Magic Feather Recipes [\#865](https://github.com/NillerMedDild/Enigmatica6/pull/865) ([MuteTiefling](https://github.com/MuteTiefling))
-   Magic Feather [\#344](https://github.com/NillerMedDild/Enigmatica6/issues/344)
-   Occultism Ore Generator Revamp [\#787](https://github.com/NillerMedDild/Enigmatica6/pull/787) ([MuteTiefling](https://github.com/MuteTiefling))
-   Occultism progression fixes [\#835](https://github.com/NillerMedDild/Enigmatica6/pull/835) ([MuteTiefling](https://github.com/MuteTiefling))
-   RFTools Quest Loot Table [\#775](https://github.com/NillerMedDild/Enigmatica6/pull/775) ([MuteTiefling](https://github.com/MuteTiefling))
-   Update Wood List [\#780](https://github.com/NillerMedDild/Enigmatica6/pull/780) ([MuteTiefling](https://github.com/MuteTiefling))
-   Valid Apiary Block updates [\#839](https://github.com/NillerMedDild/Enigmatica6/pull/839) ([MuteTiefling](https://github.com/MuteTiefling))
-   Worldgen: Added 'Dustrial Decor materials to some Village structures.

**Bug Fixes**

-   Aquaculture Fishing Loot was empty [\#886](https://github.com/NillerMedDild/Enigmatica6/issues/886)
-   Ars Nouveau Loot fix [\#762](https://github.com/NillerMedDild/Enigmatica6/pull/762) ([MuteTiefling](https://github.com/MuteTiefling))
-   \[0.3.4\] BloodMagic's Updated Book \(Sanguine Sanctorum\) [\#823](https://github.com/NillerMedDild/Enigmatica6/issues/823) [\#842](https://github.com/NillerMedDild/Enigmatica6/pull/842) ([MuteTiefling](https://github.com/MuteTiefling))
-   \[Client Crash\] Latest Create \(v0.3c\) has an NPE for some users \(not all\) [\#810](https://github.com/NillerMedDild/Enigmatica6/issues/810)
-   \[Server Crash\]\[Ars Noveau\] Using cut spell against ghast's fireball causes ClassCastException [\#819](https://github.com/NillerMedDild/Enigmatica6/issues/819)
-   \[Suggestion\] Quest condense/cleanup [\#840](https://github.com/NillerMedDild/Enigmatica6/issues/840)
-   Bug: Tha Ghost Trinket not-functional [\#784](https://github.com/NillerMedDild/Enigmatica6/issues/784)
-   Buried Dungeons spawning in the End? [\#866](https://github.com/NillerMedDild/Enigmatica6/issues/866)
-   BYG fruits aren't tagged as fruits for the cooking mods [\#492](https://github.com/NillerMedDild/Enigmatica6/issues/492)
-   Can't select-all text in JEI search box [\#765](https://github.com/NillerMedDild/Enigmatica6/issues/765)
-   Change Cobbleworks so it doens't interfere with basic cobble generators. [\#836](https://github.com/NillerMedDild/Enigmatica6/pull/836) ([MuteTiefling](https://github.com/MuteTiefling))
-   Create Recipe Conflict [\#779](https://github.com/NillerMedDild/Enigmatica6/issues/779)
-   Dank Construction Mode Bug [\#801](https://github.com/NillerMedDild/Enigmatica6/issues/801)
-   disabled quark bone to bonemeal smelt recipe [\#760](https://github.com/NillerMedDild/Enigmatica6/pull/760) ([theboo](https://github.com/theboo))
-   Excessive Cave Generation [\#809](https://github.com/NillerMedDild/Enigmatica6/issues/809)
-   FTBChunks Crashing with fake player \(drones\) [\#660](https://github.com/NillerMedDild/Enigmatica6/issues/660)
-   Lead chunks can't be crushed/milled by create [\#889](https://github.com/NillerMedDild/Enigmatica6/issues/889)
-   Lowered Surface Cave density, fixes [#809](https://github.com/NillerMedDild/Enigmatica6/issues/809)
-   Occultism is hard to get started with [\#829](https://github.com/NillerMedDild/Enigmatica6/issues/829)
-   Only 1 Gem drops from EE Dimensional Ore [\#867](https://github.com/NillerMedDild/Enigmatica6/issues/867)
-   Opening Thermopneumatic Processing Plant GUI crashes game [\#703](https://github.com/NillerMedDild/Enigmatica6/issues/703)
-   PneumaticCraft Pressure Chamber leaks air on startup [\#708](https://github.com/NillerMedDild/Enigmatica6/issues/708)
-   Progression Skip/Vanilla Cobble Gen randomized [\#833](https://github.com/NillerMedDild/Enigmatica6/issues/833)
-   Re-add missing Gem processing recipes to Create Crushing [\#851](https://github.com/NillerMedDild/Enigmatica6/pull/851) ([MuteTiefling](https://github.com/MuteTiefling))
-   Re-enabled all disabled Lost Trinkets. _(except Tha Ghost which is completely broken now that it works)_
-   Refined Fuel \(Thermal Series\) does not work in compression dynamos [\#872](https://github.com/NillerMedDild/Enigmatica6/issues/872)
-   Removed duplicate Pulverizer, Milling & Crushing Recipes [\#750](https://github.com/NillerMedDild/Enigmatica6/pull/750) ([MuteTiefling](https://github.com/MuteTiefling))
-   RFtools Loot [\#777](https://github.com/NillerMedDild/Enigmatica6/pull/777) ([MuteTiefling](https://github.com/MuteTiefling))
-   Skeleton Horse spawning on seafloor crashed server [\#643](https://github.com/NillerMedDild/Enigmatica6/issues/643)
-   Sophisticated backpacks can't pull from slot 1 in toolbar [\#834](https://github.com/NillerMedDild/Enigmatica6/issues/834)
-   Storage Drawers can no longer be picked up with Cardboard Boxes from Mekanism, as they already retain their inventory when broken.
-   Sulfur Conflict [\#879](https://github.com/NillerMedDild/Enigmatica6/pull/879) ([MuteTiefling](https://github.com/MuteTiefling))
-   Tetra quest tree is incorrect. [\#831](https://github.com/NillerMedDild/Enigmatica6/issues/831)
-   Unable to craft Industrial Foregoing Ore Laser Drill [\#648](https://github.com/NillerMedDild/Enigmatica6/issues/648)

### Enigmatica 6 v0.3.5

_Using Forge-1.16.4-35.1.29_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.3.5.txt)_

**New mods!**

-   CC: Tweaked
-   CookieCore
-   KubeJS Create
-   Magic Feather
-   Refined Storage for ComputerCraft
-   Snow Under Trees
-   Supplementaries

**Improvements**

-   Botany Pots: Added Occultism datura compatibility
-   Lost Trinkets: Increased XP cost of unlocking more slots.
-   Tetra: Botania metals as Tetra materials now repair when supplied with mana
-   Worldgen: Added a whole bunch of good looking stone types to the underground.
-   Worldgen: Slightly increased how many Emerald Ores generate in mountains
-   Worldgen: Increased spawn chance of Occultism underground groves.
-   Worldgen: Increased Quark Crystal Cave generation
-   Worldgen: Increased Eidolon Stray Tower generation
-   Worldgen: Slightly decreased how many ores generated for the following ores:
    -   Iron
    -   Copper
    -   Tin
    -   Osmium
    -   Fluorite
    -   Coal
    -   Redstone

**Bug Fixes**

-   Apotheosis does not increase level cap of Ars Noveue Enchantments. [\#753](https://github.com/NillerMedDild/Enigmatica6/issues/753)
-   Apotheosis spawner config set to use Max INT for many limits. Intended? [\#754](https://github.com/NillerMedDild/Enigmatica6/issues/754)
-   \[Bug\] TheOneProbe-Create oddities [\#727](https://github.com/NillerMedDild/Enigmatica6/issues/727)
-   Bees won't go in new hives if they're carrying pollen [\#763](https://github.com/NillerMedDild/Enigmatica6/issues/763)
-   Blaze Bees doesn't use any flower, fungus, or netherwart [\#768](https://github.com/NillerMedDild/Enigmatica6/issues/768)
-   Entering commands in chat or command blocks results in temporary lookup or sometimes java becomes unresponsive [\#694](https://github.com/NillerMedDild/Enigmatica6/issues/694)
-   found certus quartz in newly generated world [\#746](https://github.com/NillerMedDild/Enigmatica6/issues/746)
-   Further refinement on beelancing [\#662](https://github.com/NillerMedDild/Enigmatica6/issues/662)
-   Machine Infuser ONLY accepts Dimensional Shards from RFToolsBase, no other Dimensional Shards \(aka Emendatus Enigmatica\) [\#776](https://github.com/NillerMedDild/Enigmatica6/issues/776)
-   Obsidian Bees Kill themselves [\#749](https://github.com/NillerMedDild/Enigmatica6/issues/749)
-   recipe conflict with quark and eidolon [\#759](https://github.com/NillerMedDild/Enigmatica6/issues/759)
-   Removed Fishing Real [\#790](https://github.com/NillerMedDild/Enigmatica6/issues/790)
-   Removed Immersive Posts Metal Rod recipes
-   Thermal Pulverizer doesn't accept Ancient Debris [\#793](https://github.com/NillerMedDild/Enigmatica6/issues/793)

### Enigmatica 6 v0.3.4

_Using Forge-1.16.4-35.1.29_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.3.4.txt)_

**Hotfix - See changelog from v0.3.3 for the rest of the changes since v0.3.2**

**Bug Fixes**

-   \[Server Crash\] Exception in server tick loop - Portable Stonecutter [\#739](https://github.com/NillerMedDild/Enigmatica6/issues/739)
-   Stone Tools Require Marble [\#738](https://github.com/NillerMedDild/Enigmatica6/issues/738)
-   Stone tools fix [\#740](https://github.com/NillerMedDild/Enigmatica6/pull/740) ([MuteTiefling](https://github.com/MuteTiefling))
-   Uranium was improperly tagged as a Nether Only ore in the laser drill [\#741](https://github.com/NillerMedDild/Enigmatica6/pull/741) ([MuteTiefling](https://github.com/MuteTiefling))

### Enigmatica 6 v0.3.3

_Using Forge-1.16.4-35.1.29_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.3.3.txt)_

**New Mods!**

-   **Dungeon Crawl**
-   **Eidolon**
-   **Occultism**
-   Armor Toughness Bar
-   Cat Jammies
-   Chocolate Fix
-   Paragliders
-   Polymorph (Forge)
-   Spawner Bug Fix
-   Tamed Summon

**Improvements**

-   **Create Ore Processing Revamp [\#731](https://github.com/NillerMedDild/Enigmatica6/pull/731) ([MuteTiefling](https://github.com/MuteTiefling))**
-   **Quests: Astral Sorcery [\#568 ](https://github.com/NillerMedDild/Enigmatica6/issues/568) ([MuteTiefling](https://github.com/MuteTiefling))**
-   **The Great Bee-ficiation - Bee overhaul [\#649](https://github.com/NillerMedDild/Enigmatica6/pull/649) ([Ridanisaurus](https://github.com/Ridanisaurus))**
-   Add custom names to Apotheosis [\#719](https://github.com/NillerMedDild/Enigmatica6/pull/719) ([Flabort](https://github.com/Flabort))
-   Added tags to RFTools items for quests [\#665](https://github.com/NillerMedDild/Enigmatica6/pull/665) ([Merlo17](https://github.com/Merlo17))
-   Astral Mineralis Ore Gen [\#689](https://github.com/NillerMedDild/Enigmatica6/issues/689)
-   Astral Sorcery Loot Tables [\#713](https://github.com/NillerMedDild/Enigmatica6/pull/713) ([MuteTiefling](https://github.com/MuteTiefling))
-   Create celestial_gateway building gadget template [\#629](https://github.com/NillerMedDild/Enigmatica6/pull/629) ([MuteTiefling](https://github.com/MuteTiefling))
-   Create starlight_infuser building gadget template [\#624](https://github.com/NillerMedDild/Enigmatica6/pull/624) ([MuteTiefling](https://github.com/MuteTiefling))
-   Gear unification [\#597](https://github.com/NillerMedDild/Enigmatica6/pull/597) ([MuteTiefling](https://github.com/MuteTiefling))
-   Hide RFTools Dim Ore / Shards in JEI [\#696](https://github.com/NillerMedDild/Enigmatica6/pull/696) ([MuteTiefling](https://github.com/MuteTiefling))
-   Increase base range of range upgrades for the wireless transmitter \(Refined Storage\) [\#693](https://github.com/NillerMedDild/Enigmatica6/issues/693)
-   JEI info for Cheese Slice: How to obtain [\#621](https://github.com/NillerMedDild/Enigmatica6/issues/621)
-   Loot table remake [\#650](https://github.com/NillerMedDild/Enigmatica6/pull/650) ([MuteTiefling](https://github.com/MuteTiefling))
-   More quest related tags [\#673](https://github.com/NillerMedDild/Enigmatica6/pull/673) ([MuteTiefling](https://github.com/MuteTiefling))
-   Oregen: Cleaned up the underground a lot. Now that cobblegens can produce all the different kinds of worldgen stone, they're not needed as much in worldgen.
-   Ore Processing Compat for The Undergarden [\#632](https://github.com/NillerMedDild/Enigmatica6/issues/632)
-   Pedestals cobble gen update [\#692](https://github.com/NillerMedDild/Enigmatica6/pull/692) ([MuteTiefling](https://github.com/MuteTiefling))
-   Plate recipes for Create Mechanical press [\#638](https://github.com/NillerMedDild/Enigmatica6/issues/638)
-   Removal of some chests from forge:chests (Chests that can hold items won't be used in recipes anymore) [\#683](https://github.com/NillerMedDild/Enigmatica6/pull/683) ([MuteTiefling](https://github.com/MuteTiefling))
-   Saw and Insolator Fixes [\#605](https://github.com/NillerMedDild/Enigmatica6/pull/605) ([MuteTiefling](https://github.com/MuteTiefling))
-   Server: Set `max-tick-time` to 300000 in the `server.properties`. This means that the server will crash if a single tick takes longer than 5 minutes. This is a countermeasure against servers being frozen. Note: This change was not due to an issue, but due to a recommendation from a smart person.
-   Tags for use in quests [\#625](https://github.com/NillerMedDild/Enigmatica6/pull/625) ([MuteTiefling](https://github.com/MuteTiefling))
-   Tetra: Added a recipe for the Combustion Chamber upgrade, so high-end Tetra isn't worldgen gated. The other upgrades will however not be made available through crafting.
-   Tetra: Alternatives to Diorite as T2 hammer [\#579](https://github.com/NillerMedDild/Enigmatica6/issues/579)
-   Tree Updates [\#611](https://github.com/NillerMedDild/Enigmatica6/pull/611) ([MuteTiefling](https://github.com/MuteTiefling))
-   Update JEI intro in Modded for Dummies [\#699](https://github.com/NillerMedDild/Enigmatica6/pull/699) ([Merlo17](https://github.com/Merlo17))
-   Updates to ore related configs [\#695](https://github.com/NillerMedDild/Enigmatica6/pull/695) ([MuteTiefling](https://github.com/MuteTiefling))
-   Vanilla Cobble generators and Stone generators now randomly produce different types of cobblestone/stone - To target specific stone types check JEI.
-   Villagers no longer respond to the mob griefing gamerule, so they are allowed to farm whether it is true or false.

**Bug Fixes**

-   0.3.2 - BYG buttons are not tagged with minecraft:wooden_buttons [\#636](https://github.com/NillerMedDild/Enigmatica6/issues/636)
-   0.3.2 Quest text makes a consistent grammar mistake all over the place. [\#610](https://github.com/NillerMedDild/Enigmatica6/issues/610)
-   3.2 makes the Crafting station uncraftable [\#602](https://github.com/NillerMedDild/Enigmatica6/issues/602)
-   Activating a holding rail from Transport with any minecart crashes the game. [\#618](https://github.com/NillerMedDild/Enigmatica6/issues/618)
-   Add Alex's mobs to Megatorch/Dread Lamp configs [\#628](https://github.com/NillerMedDild/Enigmatica6/issues/628)
-   Ancient Debris Enrichment Chamber Recipes [\#614](https://github.com/NillerMedDild/Enigmatica6/issues/614)
-   Ars/RS crash, breaking block with gui [\#609](https://github.com/NillerMedDild/Enigmatica6/issues/609)
-   Ars Nouveau Enchanting Apparatus Crash [\#557](https://github.com/NillerMedDild/Enigmatica6/issues/557)
-   Astral Sorcery marble doesn't work in most recipes [\#634](https://github.com/NillerMedDild/Enigmatica6/issues/634)
-   \[Bug\] Icy Bee Breeding [\#670](https://github.com/NillerMedDild/Enigmatica6/issues/670)
-   \[Quest\] Bee Nests Issue [\#619](https://github.com/NillerMedDild/Enigmatica6/issues/619)
-   BlockCarpentry slabs horizontal placement [\#471](https://github.com/NillerMedDild/Enigmatica6/issues/471)
-   Botania Fertilizer can only be made with Cyan Dye [\#641](https://github.com/NillerMedDild/Enigmatica6/issues/641)
-   Compression dynamo bugged [\#604](https://github.com/NillerMedDild/Enigmatica6/issues/604)
-   Crafting Table recipes for gears missing \(for me, but not other people\) [\#585](https://github.com/NillerMedDild/Enigmatica6/issues/585)
-   Crash with Lost Trinkets Mirror Shard Trinket and Guardians [\#644](https://github.com/NillerMedDild/Enigmatica6/issues/644)
-   Dupe bug with Lost Trinket Magneto [\#534](https://github.com/NillerMedDild/Enigmatica6/issues/534)
-   Emerald Honeycomb [\#630](https://github.com/NillerMedDild/Enigmatica6/issues/630)
-   Occultism Harvesting Bug [\#674](https://github.com/NillerMedDild/Enigmatica6/issues/674)
-   PNC: Memory Stick XP Dupe Bug [\#623](https://github.com/NillerMedDild/Enigmatica6/issues/623)
-   Portable Stonecutter crafting isn't always possible [\#573](https://github.com/NillerMedDild/Enigmatica6/issues/573)
-   Resourceful Bees: Fixed Redstone Bee not being breedable
-   Server crash in ocean monument with mirror shield. [\#498](https://github.com/NillerMedDild/Enigmatica6/issues/498)
-   Sophisticated Backpacks duplication bug [\#645](https://github.com/NillerMedDild/Enigmatica6/issues/645)
-   Undergarden Diamond Generation too high [\#669](https://github.com/NillerMedDild/Enigmatica6/issues/669)
-   Update compression.js (Fixes Thermal Compression Dynamo fuel issue) [\#608](https://github.com/NillerMedDild/Enigmatica6/pull/608) ([MuteTiefling](https://github.com/MuteTiefling))

### Enigmatica 6 v0.3.2

_Using Forge-1.16.4-35.1.13_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.3.2.txt)_

**Hotfix for a few issues found in 0.3.1**

**Bug Fixes**

-   High RAM usage [\#588](https://github.com/NillerMedDild/Enigmatica6/issues/588)
-   0.3.1 Hellfire Forge can't be crafted - Shows 'empty' for the place an Iron block should be [\#583](https://github.com/NillerMedDild/Enigmatica6/pull/583) ([MuteTiefling](https://github.com/MuteTiefling))
-   Wither Bee drop chance increase & Fix [\#593](https://github.com/NillerMedDild/Enigmatica6/pull/593) ([Ridanisaurus](https://github.com/Ridanisaurus))
-   Missed saw recipes and a typo [\#584](https://github.com/NillerMedDild/Enigmatica6/pull/584) ([MuteTiefling](https://github.com/MuteTiefling))
-   Fixed sawdust output in sawing recipes

### Enigmatica 6 v0.3.1

_Using Forge-1.16.4-35.1.13_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.3.1.txt)_

**Fixed a host of issues with dimensions, including the Ender Dragon not spawning, missing biomes and random biomes.**
**For existing worlds, however, you have to manually clean the mess. If you can reset your world, this is the simplest and most reliable fix. If you know what you're doing, you can follow [this guide](https://github.com/AllTheMods/ATM-6/issues/437) made by the ATM team, to fix your existing world.**

**New Mods!**

-   'Dustrial Decor
-   Alex's Mobs
-   Architectury (Forge)
-   Artifacts
-   Astral Sorcery
-   Blood Magic
-   Citadel
-   Clockout
-   CodeChicken Lib 1.8.+
-   Create
-   Demagnetize
-   Ender Storage 1.8.+
-   ExtraStorage
-   Immersive Petroleum
-   KubeJS Blood Magic
-   KubeJS Immersive Engineering
-   KubeJS Mekanism
-   KubeJS Thermal
-   Mod Name Tooltip
-   More MobGriefing Options
-   ObserverLib
-   Portable Stonecutter
-   RFTools Power
-   Restriction: Re-Restricted
-   Shrink.
-   Sophisticated Backpacks
-   The Undergarden

**Improvements**

-   "Oh The Biomes You'll Go" tree seeds in the Market [\#461](https://github.com/NillerMedDild/Enigmatica6/issues/461)
-   Alchemy and Infuser extras [\#522](https://github.com/NillerMedDild/Enigmatica6/pull/522) ([MuteTiefling](https://github.com/MuteTiefling))
-   Aquaculture: Removed the Knives except the Neptunium variant, they have been replaced by Farmer's Delight Knives.
-   Astral Infusion Ore Compat [\#521](https://github.com/NillerMedDild/Enigmatica6/pull/521) ([MuteTiefling](https://github.com/MuteTiefling))
-   Astral Sorcery Starlight Infusion Compat [\#519](https://github.com/NillerMedDild/Enigmatica6/issues/519)
-   Blood Magic Alchemy Table [\#518](https://github.com/NillerMedDild/Enigmatica6/issues/518)
-   Blood Magic ore processing compat [\#516](https://github.com/NillerMedDild/Enigmatica6/issues/516)
-   Botany Tree Saplings-update [\#494](https://github.com/NillerMedDild/Enigmatica6/pull/494) ([MuteTiefling](https://github.com/MuteTiefling))
-   Building Gadgets Schematics [\#575](https://github.com/NillerMedDild/Enigmatica6/pull/575) ([MuteTiefling](https://github.com/MuteTiefling))
-   BYG sapling support in Botany Pots [\#489](https://github.com/NillerMedDild/Enigmatica6/issues/489)
-   Cobblegen Randomizer Create Compat [\#565](https://github.com/NillerMedDild/Enigmatica6/issues/565)
-   Crushing Update [\#556](https://github.com/NillerMedDild/Enigmatica6/pull/556) ([MuteTiefling](https://github.com/MuteTiefling))
-   Decreased percentage of players who have to sleep for the night to pass on servers from 50% to 35%
-   Disabled Gear Recycling in the Immersive Engineering Arc Furnace
-   Loading: Removed color changes to the Mojang brand.
-   Lootboxes, Delights, Tetra Geode, IE Crate [\#553](https://github.com/NillerMedDild/Enigmatica6/pull/553) ([Ridanisaurus](https://github.com/Ridanisaurus))
-   Mekanism Tools Balancing V1.0 [\#566](https://github.com/NillerMedDild/Enigmatica6/pull/566) ([Ridanisaurus](https://github.com/Ridanisaurus))
-   Mekanism Tools nerf [\#460](https://github.com/NillerMedDild/Enigmatica6/issues/460)
-   New Essence \<-\> Memory Essence recipe [\#453](https://github.com/NillerMedDild/Enigmatica6/issues/453)
-   On login, the player is now given the quest book in stead of the Modded for Dummies book. The Modded for Dummies book is now a quest reward for one of the first quests, but is also craftable.
-   Ore Processing Unification [\#517](https://github.com/NillerMedDild/Enigmatica6/pull/517) ([MuteTiefling](https://github.com/MuteTiefling))
-   Powah quests suggestion [\#497](https://github.com/NillerMedDild/Enigmatica6/issues/497)
-   Pretty Pipes Recipe Re-write [\#524](https://github.com/NillerMedDild/Enigmatica6/pull/524) ([MuteTiefling](https://github.com/MuteTiefling))
-   Quark: Re-added Vertical Slabs, as turning them off had no benefit.
-   Recipe Updates [\#527](https://github.com/NillerMedDild/Enigmatica6/pull/527) ([MuteTiefling](https://github.com/MuteTiefling))
-   Removed Sugar Cane Block from Thermal, it was uncraftable anyway.
-   Removed the XP fluid bucket exchange recipe because of a bug, will be readded later on.
-   Resourceful Bee guide book recipe change [\#454](https://github.com/NillerMedDild/Enigmatica6/issues/454)
-   Resourceful bees beelancing
-   Rods and Wires - Just for Fun [\#550](https://github.com/NillerMedDild/Enigmatica6/pull/550) ([MuteTiefling](https://github.com/MuteTiefling))
-   Tag-based Ladder Recipe [\#425](https://github.com/NillerMedDild/Enigmatica6/issues/425)
-   Tags update for multi-material crafting recipes [\#525](https://github.com/NillerMedDild/Enigmatica6/pull/525) ([MuteTiefling](https://github.com/MuteTiefling))
-   Tetra: Missing Improvement [\#513](https://github.com/NillerMedDild/Enigmatica6/pull/513) ([Ridanisaurus](https://github.com/Ridanisaurus))
-   Tetra Tool Rewards [\#547](https://github.com/NillerMedDild/Enigmatica6/issues/547)
-   Thermal and IE slag compatability [\#479](https://github.com/NillerMedDild/Enigmatica6/issues/479)
-   Thermal Dynamos Rebalance Attempt [\#552](https://github.com/NillerMedDild/Enigmatica6/pull/552) ([MuteTiefling](https://github.com/MuteTiefling))
-   Wood rework [\#570](https://github.com/NillerMedDild/Enigmatica6/pull/570) ([MuteTiefling](https://github.com/MuteTiefling))

**Bug Fixes**

-   Bitumen has no uses [\#414](https://github.com/NillerMedDild/Enigmatica6/issues/414)
-   Breaking Blocks/Items While Holding A Dank Storage Item Voids The Block/Item [\#437](https://github.com/NillerMedDild/Enigmatica6/issues/437)
-   Builder crashes server if a mechanical pipe is ontop/below it. [\#477](https://github.com/NillerMedDild/Enigmatica6/issues/477)
-   Can't craft Enchanted Crafting Table [\#531](https://github.com/NillerMedDild/Enigmatica6/issues/531)
-   Cannot crush Zinc Chunks in a Pedestal with the Crusher upgrade [\#495](https://github.com/NillerMedDild/Enigmatica6/issues/495)
-   Crashing when using "Biomes You'll Go" mushrooms with Sylph [\#451](https://github.com/NillerMedDild/Enigmatica6/issues/451)
-   Decorative blocks: most beams don't have a recipe [\#431](https://github.com/NillerMedDild/Enigmatica6/issues/431)
-   Dupe bug with gear recycling in an arc furnace and multiservo press [\#440](https://github.com/NillerMedDild/Enigmatica6/issues/440)
-   Dupe/Delete items in RF Tools Modular Storage when activating Inventory Tweaks Sort function [\#530](https://github.com/NillerMedDild/Enigmatica6/issues/530)
-   Dupe with Pneumaticraft and Quark [\#511](https://github.com/NillerMedDild/Enigmatica6/issues/511)
-   Immersive Engineering Treated Wood recipe voids Mekanism Tank [\#447](https://github.com/NillerMedDild/Enigmatica6/issues/447)
-   Industrial Foregoing not showing up in a refined storage system [\#560](https://github.com/NillerMedDild/Enigmatica6/issues/560)
-   Isolated Recipes \(Xerca Mod\) [\#452](https://github.com/NillerMedDild/Enigmatica6/issues/452)
-   JEI is not searching on Tags on a server [\#380](https://github.com/NillerMedDild/Enigmatica6/issues/380)
-   Mana Bloom recipe does not ore-dict [\#499](https://github.com/NillerMedDild/Enigmatica6/issues/499)
-   Mekanism Coal/Gunpowder - Sulfur issues [\#485](https://github.com/NillerMedDild/Enigmatica6/issues/485)
-   Mining Gadget crash [\#289](https://github.com/NillerMedDild/Enigmatica6/issues/289)
-   Missing Blood Magic recipes [\#520](https://github.com/NillerMedDild/Enigmatica6/pull/520) ([MuteTiefling](https://github.com/MuteTiefling))
-   Multiple steel recipe issues [\#417](https://github.com/NillerMedDild/Enigmatica6/issues/417)
-   Nature's Aura Ore Generator Update [\#523](https://github.com/NillerMedDild/Enigmatica6/pull/523) ([MuteTiefling](https://github.com/MuteTiefling))
-   Netherite Bees Kill themselves. [\#457](https://github.com/NillerMedDild/Enigmatica6/issues/457)
-   No End Dragon or End Fountain \(See last comment for fixing worlds updated to 0.3.1, made in 0.3.0\) [\#420](https://github.com/NillerMedDild/Enigmatica6/issues/420)
-   non EE ore spawns when using Nature's Aura powder of bountiful core \(ore gen\) [\#465](https://github.com/NillerMedDild/Enigmatica6/issues/465)
-   Not seeing any Biomes O' Plenty biomes on multiplayer server [\#549](https://github.com/NillerMedDild/Enigmatica6/issues/549)
-   NPE with new IF Generators [\#493](https://github.com/NillerMedDild/Enigmatica6/issues/493)
-   Oil Generation in Byg-End bioms [\#419](https://github.com/NillerMedDild/Enigmatica6/issues/419)
-   Possible exploit with tetra mod and enchantment extractor [\#432](https://github.com/NillerMedDild/Enigmatica6/issues/432)
-   Quark Dungeon and Burred Dungeon spawn in the end [\#423](https://github.com/NillerMedDild/Enigmatica6/issues/423)
-   Quest for Latex Processing Unit [\#412](https://github.com/NillerMedDild/Enigmatica6/issues/412)
-   Recipe conflict between vertical dark oak wood planks and dark oak panels [\#441](https://github.com/NillerMedDild/Enigmatica6/issues/441)
-   server crash with wither interaction [\#463](https://github.com/NillerMedDild/Enigmatica6/issues/463)
-   simplefarming:raw_bacon recipe uses up the knife [\#428](https://github.com/NillerMedDild/Enigmatica6/issues/428)
-   Simple Farming and Farmer's Delight fried egg conflict [\#480](https://github.com/NillerMedDild/Enigmatica6/issues/480)
-   Simple Farming seeds don't work with IE machines [\#429](https://github.com/NillerMedDild/Enigmatica6/issues/429)
-   Steel can be created in a vanilla blast furnace non-coal fuel [\#405](https://github.com/NillerMedDild/Enigmatica6/issues/405)
-   Stonecutter renamed to Bench Saw by unknown mod [\#427](https://github.com/NillerMedDild/Enigmatica6/issues/427)
-   Stonecutting can turn any stone into any other stone breaking balance [\#445](https://github.com/NillerMedDild/Enigmatica6/issues/445)
-   Terrasteel Recipe Conflict [\#470](https://github.com/NillerMedDild/Enigmatica6/issues/470)
-   Tetra Workbench Dupe Bug [\#469](https://github.com/NillerMedDild/Enigmatica6/issues/469)
-   Unification cleanup appears to have broken [\#415](https://github.com/NillerMedDild/Enigmatica6/issues/415)
-   Updated EE Config (**Random Ore Y levels fixed!**) [\#537](https://github.com/NillerMedDild/Enigmatica6/pull/537) ([Ridanisaurus](https://github.com/Ridanisaurus))
-   Wandering Traders Disabled? [\#571](https://github.com/NillerMedDild/Enigmatica6/issues/571)
-   Wrong Recipe Crusher : mana gem -\> mana powder \(botania\) [\#404](https://github.com/NillerMedDild/Enigmatica6/issues/404)
-   Xnet wireless router not working [\#459](https://github.com/NillerMedDild/Enigmatica6/issues/459)

**Removed**

-   Actually Useful Stonecutter
-   Reload Audio Driver (RAD) [Forge] _Will be coming back_
-   Screenshot to Clipboard (Forge) _Will be coming back_
-   Xerca Mod

### Enigmatica 6 v0.3.0

_Using Forge-1.16.4-35.1.0_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.3.0.txt)_

Updated Minecraft version from 1.16.1 to 1.16.4

**We highly recommend that you start a new world when updating from 0.2.x to 0.3.x**

_It is possible to update an E6 v0.2.x world to v0.3.x, but it will most likely not be without issues, which is why we don't recommend it_

**New Mods!**

-   Archer's Paradox
-   Ars Nouveau
-   AttributeFix
-   Botania Additions
-   Botany Trees
-   Builders Crafts & Additions (Forge)
-   Chisels & Bits
-   CoFH Core
-   CobbleGenRandomizer
-   Config Swapper
-   Crafting Station
-   CreativeCore
-   EmbellishCraft
-   Ensorcellation
-   Ensorcelled
-   FTB Chunks
-   FTB Essentials
-   FTB GUI Library
-   FTB Quests
-   FTB Ranks
-   FTB Teams
-   Farmer's Delight
-   Framed Compacting Drawers
-   GeckoLib
-   Glassential
-   Guns Without Roses
-   Immersive Posts
-   Item Filters
-   LibX
-   Lost Trinkets
-   Mapper Base
-   McJtyLib
-   Meet Your Fight
-   More Overlays Updated
-   MythicBotany
-   Nature's Aura
-   Oh The Biomes You'll Go
-   Plonk
-   Pretty Pipes
-   RFTools Base
-   RFTools Builder
-   RFTools Control
-   RFTools Storage
-   RFTools Utility
-   Rare Ice (Forge/Fabric)
-   RecipeBuffers
-   Refined Storage: Requestify
-   Resourceful Bees
-   Rhino
-   Screenshot to Clipboard (Forge)
-   Seals
-   Tetra
-   The Mighty Architect
-   The Official Enigmatica Resource Pack
-   Thermal Expansion
-   Thermal Foundation
-   Thermal Innovation
-   Thermal Locomotion
-   Tips
-   Travel Anchors
-   Useful Railroads
-   XNet
-   XNet Gases
-   XercaMod
-   mGui

**Additions**

-   QUESTS!!!1 (Credit Merlo, Motoko & Yagi)
-   Added Tetra trades to the Armorer Villager
-   Additional Tetra Materials [\#378](https://github.com/NillerMedDild/Enigmatica6/issues/378)
-   Biomes O'Plenty White and Black Sand compat for Botany Pots [\#278](https://github.com/NillerMedDild/Enigmatica6/pull/278) ([Ridanisaurus](https://github.com/Ridanisaurus))
-   Enabled the Biomes O' Plenty additions to the Nether
-   Increased Emerald Ore spawn height
-   Increased Uranium and Lead spawn chance [\#283](https://github.com/NillerMedDild/Enigmatica6/issues/283)
-   Make XP fluids compatible [\#265](https://github.com/NillerMedDild/Enigmatica6/issues/265)
-   Quark: Disabled Vertical Slabs, since BlockCarpentry has those covered
-   Quark Saplings & Farmer's Delight Seeds for Market \(Credit Merlo\) [\#335](https://github.com/NillerMedDild/Enigmatica6/issues/335)
-   Switched mini/worldmap to FTB Chunks Map [\#343](https://github.com/NillerMedDild/Enigmatica6/issues/343)
-   Tetra Compat for turning "vanilla" tools into Tetra tools in the workbench [\#383](https://github.com/NillerMedDild/Enigmatica6/issues/383)
-   The "Ding" sound is now played when joining a server
-   Tons of new Tetra materials

**Bug Fixes**

-   1Gold Ingot in Stone Cutter is 4 Light Weighted Pressure Plate [\#288](https://github.com/NillerMedDild/Enigmatica6/issues/288)
-   Amadron Ordering Scam [\#263](https://github.com/NillerMedDild/Enigmatica6/issues/263)
-   Apotheosis Bosses are spawning in the end [\#269](https://github.com/NillerMedDild/Enigmatica6/issues/269)
-   Aquaculture Fillet Knife Blasting Recipe [\#395](https://github.com/NillerMedDild/Enigmatica6/issues/395)
-   Backpacks can be stored inside other Backpacks [\#319](https://github.com/NillerMedDild/Enigmatica6/issues/319)
-   Basic Logistical Sorters does not send items into Storage Drawers [\#173](https://github.com/NillerMedDild/Enigmatica6/issues/173)
-   BlockCarpentry blocks not rendering [\#253](https://github.com/NillerMedDild/Enigmatica6/issues/253)
-   BlockCarpentry crash when using the Frame [\#257](https://github.com/NillerMedDild/Enigmatica6/issues/257)
-   Botiania flowers easily duplicated with bonemeal [\#308](https://github.com/NillerMedDild/Enigmatica6/issues/308)
-   Broken Heart bauble functionality [\#226](https://github.com/NillerMedDild/Enigmatica6/issues/226)
-   Can drown while in spectator [\#214](https://github.com/NillerMedDild/Enigmatica6/issues/214)
-   Cannot craft Quark Oddities Item Pipes \(Meant to be disabled, hidden from JEI\) [\#372](https://github.com/NillerMedDild/Enigmatica6/issues/372)
-   Clocks acquired from fishing loot not recognized by JEI/autocrafting. [\#284](https://github.com/NillerMedDild/Enigmatica6/issues/284)
-   Crafting Tweaks "Compress All" With Honey Bottles Doesn't Return Empty Bottles [\#180](https://github.com/NillerMedDild/Enigmatica6/issues/180)
-   Crash Issue when using Nether Portal [\#320](https://github.com/NillerMedDild/Enigmatica6/issues/320)
-   Crash when attempting to rename an item in a Robit that's not docked. [\#296](https://github.com/NillerMedDild/Enigmatica6/issues/296)
-   Crash when near skeletal horse {maybe just trap} [\#286](https://github.com/NillerMedDild/Enigmatica6/issues/286)
-   Engineers Workbench is not working [\#317](https://github.com/NillerMedDild/Enigmatica6/issues/317)
-   Flowers have extreme offsets [\#264](https://github.com/NillerMedDild/Enigmatica6/issues/264)
-   FTB Utilities claims don't show anymore [\#204](https://github.com/NillerMedDild/Enigmatica6/issues/204)
-   Game Crash - Clicking on the Dank Dock with a Mekanism Configurator [\#266](https://github.com/NillerMedDild/Enigmatica6/issues/266)
-   Gas Dupe \(again\) [\#309](https://github.com/NillerMedDild/Enigmatica6/issues/309)
-   IE Engineer Villager accepts only IE Steel \(Steel conversion recipe added\) [\#280](https://github.com/NillerMedDild/Enigmatica6/issues/280)
-   IE steel rod recipe conflict [\#306](https://github.com/NillerMedDild/Enigmatica6/issues/306)
-   Industrial Foregoing potion brewer crash [\#293](https://github.com/NillerMedDild/Enigmatica6/issues/293)
-   Issue with the new Memory Stick item [\#221](https://github.com/NillerMedDild/Enigmatica6/issues/221)
-   Item frames refuse to accept items [\#356](https://github.com/NillerMedDild/Enigmatica6/issues/356)
-   Kicking Players with Java Error \(0.2.16\) [\#261](https://github.com/NillerMedDild/Enigmatica6/issues/261)
-   Mekanism Armored Jetpack Enchantability [\#213](https://github.com/NillerMedDild/Enigmatica6/issues/213)
-   Mekanism hover text shows "total" FE without taking upgrades into account [\#205](https://github.com/NillerMedDild/Enigmatica6/issues/205)
-   Mobs don't drop experience in other dimensions than overworld [\#192](https://github.com/NillerMedDild/Enigmatica6/issues/192)
-   Modded for Dummies missing texture [\#277](https://github.com/NillerMedDild/Enigmatica6/issues/277)
-   Neat healthbars disable themselves [\#217](https://github.com/NillerMedDild/Enigmatica6/issues/217)
-   Obsidian dust crafting through crafting table [\#274](https://github.com/NillerMedDild/Enigmatica6/issues/274)
-   Occasional crashes in the Nether due to an Immersive Engineering LV Wire Connector in the Overworld [\#321](https://github.com/NillerMedDild/Enigmatica6/issues/321)
-   Occasional server crash on player login when aerial interface is fed by universal cable [\#322](https://github.com/NillerMedDild/Enigmatica6/issues/322)
-   Patchouli mod manuals text formatting [\#271](https://github.com/NillerMedDild/Enigmatica6/issues/271)
-   Pedestals causing crashes while auto-killing raid captains [\#229](https://github.com/NillerMedDild/Enigmatica6/issues/229)
-   Productive Bees ruins everything [\#302](https://github.com/NillerMedDild/Enigmatica6/issues/302)
-   Recipe conflict Lattice and Gears [\#279](https://github.com/NillerMedDild/Enigmatica6/issues/279)
-   Recipe conflict porkchop [\#285](https://github.com/NillerMedDild/Enigmatica6/issues/285)
-   Refined Storage Fluid Issues [\#233](https://github.com/NillerMedDild/Enigmatica6/issues/233)
-   Server kick on PneumaticCraft item charge change [\#326](https://github.com/NillerMedDild/Enigmatica6/issues/326)
-   Stripped Logs [\#175](https://github.com/NillerMedDild/Enigmatica6/issues/175)
-   Treated Wood is no longer obtainable by crafting [\#248](https://github.com/NillerMedDild/Enigmatica6/issues/248)
-   Treated wood Planks recipe not giving Big Buckets back [\#199](https://github.com/NillerMedDild/Enigmatica6/issues/199)
-   Using ftb optimine on underwater sand breaks the water [\#157](https://github.com/NillerMedDild/Enigmatica6/issues/157)
-   Vanilla Hammers destroy the digital miner [\#200](https://github.com/NillerMedDild/Enigmatica6/issues/200)
-   Waystone Naming UI [\#174](https://github.com/NillerMedDild/Enigmatica6/issues/174)

**Removed Mods**

-   Abnormals Core
-   Applied Energistics 2
-   Armor Toughness Bar
-   Artifacts
-   Bamboo Blocks
-   Big Buckets
-   Buzzier Bees
-   Carpet Stairs Mod
-   Cauldron Recipes
-   Citadel
-   Click Machine
-   Cloth Config API (Forge)
-   Culinary Construct
-   Dark Paintings
-   Environmental Creepers
-   Extended Lights
-   Global XP
-   Just Enough Resources (JER)
-   Laser Relays
-   Let Sleeping Dogs Lie
-   Light Overlay (Rift/Forge/Fabric)
-   Ma Enchants
-   Ma Essentials
-   Metal Barrels
-   Mod Name Tooltip
-   Neon Craft Mod
-   No Potion Shift
-   Open Loader
-   Pretty Beaches
-   Productive Bees
-   Rope Bridge
-   Simply Backpacks
-   Snow Under Trees
-   Stronger Snowballs
-   TellMe
-   The Conjurer
-   The Endergetic Expansion
-   Tool Belt
-   Trample Stopper
-   Waddles
-   Xaero's Minimap
-   Xaero's World Map
-   ☃ Snow! Real Magic!
-   🌳 Passable Foliage
-   🥝 Kiwi

### Enigmatica 6 v0.2.17

_Using Forge-1.16.1-32.0.108_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.2.17.txt)_

**Mod Additions**

-   BlockCarpentry

**Bug Fixes**

-   Recipe conflict porkchop [\#285](https://github.com/NillerMedDild/Enigmatica6/issues/285)
-   Clocks acquired from fishing loot not recognized by JEI/autocrafting. [\#284](https://github.com/NillerMedDild/Enigmatica6/issues/284)
-   IE Engineer Villager accepts only IE Steel \(Steel conversion recipe added\) [\#280](https://github.com/NillerMedDild/Enigmatica6/issues/280)
-   Recipe conflict Lattice and Gears [\#279](https://github.com/NillerMedDild/Enigmatica6/issues/279)
-   Obsidian dust crafting through crafting table [\#274](https://github.com/NillerMedDild/Enigmatica6/issues/274)
-   Minor KubeJS recipe errors [\#267](https://github.com/NillerMedDild/Enigmatica6/issues/267)
-   Flowers have extreme offsets [\#264](https://github.com/NillerMedDild/Enigmatica6/issues/264)
-   Amadron Ordering Scam [\#263](https://github.com/NillerMedDild/Enigmatica6/issues/263)
-   BlockCarpentry blocks not rendering [\#253](https://github.com/NillerMedDild/Enigmatica6/issues/253)
-   Treated Wood is no longer obtainable by crafting [\#248](https://github.com/NillerMedDild/Enigmatica6/issues/248)
-   Issue with the new Memory Stick item [\#221](https://github.com/NillerMedDild/Enigmatica6/issues/221)
-   Vanilla Hammers destroy the digital miner [\#200](https://github.com/NillerMedDild/Enigmatica6/issues/200)

**Changes**

-   BotanyPots: Biomes O'Plenty White and Black Sand compat
-   Increased Uranium and Lead spawn chance [\#283](https://github.com/NillerMedDild/Enigmatica6/issues/283)

### Enigmatica 6 v0.2.16

_Using Forge-1.16.1-32.0.108_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.2.16.txt)_

**Bug Fixes**

-   Servers failing to start
-   BlockCarpentry crashes

**Changes**

-   Updated the Main Menu! (All credit goes to Rid!)
-   Quark: Disabled Compasses work everywhere to fix bug #284

**Mod Removals**

-   BlockCarpentry (will be re-added when/if it becomes more stable)

### Enigmatica 6 v0.2.15

_Using Forge-1.16.1-32.0.108_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.2.15.txt)_

**Mod Additions**

-   Neon Craft Mod [\#236](https://github.com/NillerMedDild/Enigmatica6/issues/236)
-   Save Your Pets [\#232](https://github.com/NillerMedDild/Enigmatica6/issues/232)
-   Transport [\#224](https://github.com/NillerMedDild/Enigmatica6/issues/224)
-   AIOT Botania [\#223](https://github.com/NillerMedDild/Enigmatica6/issues/223)
-   Emojiful [\#220](https://github.com/NillerMedDild/Enigmatica6/issues/220)
-   BlockCarpentry [\#212](https://github.com/NillerMedDild/Enigmatica6/issues/212)
-   Re-added Interactio, because it has been fixed

**Changes**

-   Botania: The Orechid now prioritizes ores the same way the rest of the pack does.
    -   **Change not included, had to remove it due to a bug**
-   Forge: Enabled experimental lighting pipeline

**Bug Fixes**

-   Abnormals Core: encountered an error during the common_setup event phase: null [\#208](https://github.com/NillerMedDild/Enigmatica6/issues/208)
-   Duplication Exploits [\#207](https://github.com/NillerMedDild/Enigmatica6/issues/207)
-   EmendatusEnigmatica: Experience farm with ore chunks back to ores blocks [\#193](https://github.com/NillerMedDild/Enigmatica6/issues/193)
-   Interactio: Lag that seems to be caused by Interactio [\#196](https://github.com/NillerMedDild/Enigmatica6/issues/196)
-   InventoryTweaks: sorting X AE2 crafting terminal [\#234](https://github.com/NillerMedDild/Enigmatica6/issues/234)
-   ProductiveBees: Bees seem to duplicate or spawn a LOT [\#216](https://github.com/NillerMedDild/Enigmatica6/issues/216)
-   Quark: Fixed Engineer's Crafting Stations having Quark filter buttons
-   Quark: Fixed RS Crafting Grid having Quark filter buttons
-   Quark: No slate generating \(And possibly Jasper?\) [\#206](https://github.com/NillerMedDild/Enigmatica6/issues/206)
-   TellMe: TellMe mod using gold nugget as debug item [\#211](https://github.com/NillerMedDild/Enigmatica6/issues/211)
-   VanillaHammers: Hammers drop extra materials when mining [\#202](https://github.com/NillerMedDild/Enigmatica6/issues/202)

**Known Issues**

-   Fluid Crafting recipes don't work on initial world join, use `/reload` to fix them

#### Enigmatica 6 v0.2.14

_Using Forge-1.16.1-32.0.108_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.2.14.txt)_

**Mod Additions**

-   Re-added Ma Essentials (Much regret)
-   Macaw's Trapdoors

**Changes**

-   Ma Essentials: Disabled Warp commands (They can be re-enabled in the configs)
-   Ma Essentials: Increased cooldown of /back command to 5 minutes, from 3.
-   Applied Energistics: Added recipes to convert between different certus and ender dust variants.
-   Applied Energistics: Disabled the custom Fluix Crystal recipe using water. The normal one works.
-   Ancient Debris Tags [\#197](https://github.com/NillerMedDild/Enigmatica6/issues/197)

**Bug Fixes**

-   Fixed server lag caused by item entities.
-   Emendatus Enigmatica Ender Pearl Dust cant be used to craft AE2 singularity (Conversion recipe between ender dusts added) [\#187](https://github.com/NillerMedDild/Enigmatica6/issues/187)

**Mod Removals**

-   Interactio (Temporarily removed due to a lag issues)

#### Enigmatica 6 v0.2.13

_Using Forge-1.16.1-32.0.108_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.2.13.txt)_

**Mod Additions**

-   Wither Skeleton Tweaks [\#186](https://github.com/NillerMedDild/Enigmatica6/issues/186)

**Bug Fixes**

-   FTB Chunks: Downgraded to fix a crash bug.
-   Extended Lights: Recipe Conflict: Vanilla Chain and Post Lamp Beam [\#184](https://github.com/NillerMedDild/Enigmatica6/issues/184)
-   Building Gadgets: Gadget\(s\) Don't Drain Power When Used [\#177](https://github.com/NillerMedDild/Enigmatica6/issues/177)

#### Enigmatica 6 v0.2.12

_Using Forge-1.16.1-32.0.108_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.2.12.txt)_

Server files will be added later, due to an issue with CurseForge. The only updates in this version are the mods FTBChunks, FTB GUI Library, Apotheosis and More Dragon Eggs.

**Bug Fixes**

-   Apotheosis: Fixed a crash bug with thrown potions, ghast fireballs and other projectiles.

#### Enigmatica 6 v0.2.11

_Using Forge-1.16.1-32.0.108_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.2.11.txt)_

**Mods Additions**

-   Swing Through Grass [\#129](https://github.com/NillerMedDild/Enigmatica6/issues/129)

**Changes**

-   EmendatusEnigmatica: Chunks can now be crafted directly into Stone Ores for the sake of automation.
-   Waystones: No longer spawn in villages, due to high frequency
-   Waystones: Now spawn randomly spread throughout the world, rarely.

**Bug Fixes**

-   Interactio: Fixed log spam
-   AE2 Crafting Interface + Filter Button [\#179](https://github.com/NillerMedDild/Enigmatica6/issues/179)
-   Mining Gadget Beam Doesn't Render [\#178](https://github.com/NillerMedDild/Enigmatica6/issues/178)

#### Enigmatica 6 v0.2.10

_Using Forge-1.16.1-32.0.108_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.2.10.txt)_

**Changes**

-   Applied Energistics: Normal water-based Fluix recipe now works on servers.

**Bug Fixes**

-   Applied Energistics: 1k drive parts can only be crafted with charged certus [\#170](https://github.com/NillerMedDild/Enigmatica6/issues/170)
-   Applied Energistics: Enhanced seed recipe is mixed up [\#168](https://github.com/NillerMedDild/Enigmatica6/issues/168)
-   RS and AE2 Silicon Unification [\#166](https://github.com/NillerMedDild/Enigmatica6/issues/166)

#### Enigmatica 6 v0.2.9

_Using Forge-1.16.1-32.0.108_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.2.9.txt)_

**Mod Additions**

-   More Dragon Eggs

**Changes**

-   Applied Energistics: Certus can now be charged in the Powah Energizer (Credit Rid) [\#160](https://github.com/NillerMedDild/Enigmatica6/issues/160)
-   Applied Energistics: Enriching recipes to grow AE2 crystal seeds into Pure crystals

**Bug Fixes**

-   Applied Energistics: Recipe requiring Charged Certus don't work [\#164](https://github.com/NillerMedDild/Enigmatica6/issues/164)
-   Applied Energistics: Fluix unobtainable [\#163](https://github.com/NillerMedDild/Enigmatica6/issues/163)
-   Applied Energistics: Can't make charged certus quartz [\#160](https://github.com/NillerMedDild/Enigmatica6/issues/160)
-   Botania: Quartz Variants Unobtainable [\#165](https://github.com/NillerMedDild/Enigmatica6/issues/165)

#### Enigmatica 6 v0.2.8

_Using Forge-1.16.1-32.0.108_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.2.8.txt)_

After community feedback, we've decided to re-add Useful Backpacks and Ranged Pumps, as they have features that would be sorely missed.

**Mod Additions**

-   Angel Ring [\#144](https://github.com/NillerMedDild/Enigmatica6/issues/144)
-   Useful Backpacks
-   Ranged Pumps

**Changes**

-   Apotheosis: Decreased boss, brutal spawner and swarm spawner frequencies.
-   Default Keybindings: Updated with new mod keys, unbound rarely used keys.
-   Immersive Engineering: Buffed the Pump's pump speed when powered.
-   Ranged Pumps: Increased speed, reduced tank capicity, improved energy capacity, increased energy usage.

**Bug Fixes**

-   Mekanism: Disabled Fluorite Ore from spawning, so only the EE variants spawn.
-   Unification: Some Mekanism Ores being unprocessable - Not a big deal since you can't obtain them, but still.
-   Unification: Chunks only being convertable to smooth stone Ore in the Stonecutter.
-   Simply Backpacks erasing items, needs update [\#150](https://github.com/NillerMedDild/Enigmatica6/issues/150)
-   No Recipe for Ender Dust [\#149](https://github.com/NillerMedDild/Enigmatica6/issues/149)
-   Same Ores on Overworld [\#148](https://github.com/NillerMedDild/Enigmatica6/issues/148)
-   Aquaculture tin cans give iron [\#146](https://github.com/NillerMedDild/Enigmatica6/issues/146)

#### Enigmatica 6 v0.2.7

_Using Forge-1.16.1-32.0.108_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.2.7.txt)_

**Warning**: Several mods were removed in 0.2.6. If you're using LargeFluidTanks or Useful Backpacks, make sure to move the contents before updating.

If you're playing in a world that was created with Rats (E6 v0.2.4 and earlier), you will need to readd Rats for that world to work correctly. Download it [here](https://www.curseforge.com/minecraft/mc-mods/rats/files/3020258) and put it in your mods folder.

**Mod Additions**

-   **Building Gadgets [\#137](https://github.com/NillerMedDild/Enigmatica6/issues/137)**
-   FTB Chunks
-   FTB Ranks [\#126](https://github.com/NillerMedDild/Enigmatica6/issues/126)
-   FTB GUI Library
-   FTB Teams
-   Ambient Sounds [\#125](https://github.com/NillerMedDild/Enigmatica6/issues/125)
-   Just Enough Beacons [\#118](https://github.com/NillerMedDild/Enigmatica6/issues/118)
-   TellMe [\#142](https://github.com/NillerMedDild/Enigmatica6/issues/142)

**Changes**

-   Apotheosis: Max Sugarcane height is now 10

**Bug Fixes**

-   Quark Loot still provides vanilla ore blocks [\#139](https://github.com/NillerMedDild/Enigmatica6/issues/139)
-   Crash during Resource Pack activation [\#134](https://github.com/NillerMedDild/Enigmatica6/issues/134)
-   Quantum Storage items uncraftable [\#133](https://github.com/NillerMedDild/Enigmatica6/issues/133)
-   Can't craft the 16384k fluid storage part on 0.2.6 [\#131](https://github.com/NillerMedDild/Enigmatica6/issues/131)
-   0.2.6 Botania rendering crash [\#130](https://github.com/NillerMedDild/Enigmatica6/issues/130)
-   Certus Quartz unobtainable [\#128](https://github.com/NillerMedDild/Enigmatica6/issues/128)
-   Modded for Dummies Texture Error [\#127](https://github.com/NillerMedDild/Enigmatica6/issues/127)
-   Click Machine lacks a recipie [\#111](https://github.com/NillerMedDild/Enigmatica6/issues/111)
-   Programmable drones can be crafted without pcb [\#94](https://github.com/NillerMedDild/Enigmatica6/issues/94)

### Enigmatica 6 v0.2.6

_Using Forge-1.16.1-32.0.108_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.2.6.txt)_

**Warning: Several mods were removed in 0.2.6. If you're using LargeFluidTanks or Useful Backpacks, make sure to move the contents before updating.**

**Major Changes**

-   Ore processing outputs have been changed. Nearly everything ore/ingot/dust/nugget related should now output items from our own mod, Emendatus Enigmatica.
    -   This means a lot of autocrafting will break, unfortunately. We felt it was needed to combat the issues with unification.

**Mod Additions**

-   Readded Tip The Scales (It will now disable itself if Optifine is detected)
-   **Apotheosis**
-   **Emendatus Enigmatica**
-   Enigmatica Companion Mod
-   Extreme sound muffler (Forge)
-   Game Stages
-   Mantle
-   Runelic
-   Spice of Life: Carrot Edition
-   Tinkers' Mechworks

**Changes**

-   Added a beginner's guide to Modded Minecraft! [\#89](https://github.com/NillerMedDild/Enigmatica6/issues/89) _(Made by Merlo, textures by Rid)_
-   Renewable Coral Blocks [\#88](https://github.com/NillerMedDild/Enigmatica6/issues/88)

**Bug Fixes**

-   Weird bounding box around BotanyPots crops [\#93](https://github.com/NillerMedDild/Enigmatica6/issues/93)
-   0.2.5 farmland isn't craftable [\#92](https://github.com/NillerMedDild/Enigmatica6/issues/92)
-   Furnace provides light despite being unpowered [\#36](https://github.com/NillerMedDild/Enigmatica6/issues/36)

**Mod Removals**

-   Dwarf Coal (Design choice)
-   Engineers Tools (A bit on the OP side)
-   LargeFluidTank (Content overlap)
-   Ma' Essentials (Slightly cheaty)
-   MixinBootstrap (Mixins is now included in Forge)
-   Packing Tape (Content overlap)
-   Ranged Pumps (Content overlap)
-   ScalableCatsForce (Dependency for LargeFluidTank)
-   Useful Backpacks (Content overlap)
-   U Team Core (Dependency for Useful BackPacks)

### Enigmatica 6 v0.2.5

_Using Forge-1.16.1-32.0.106_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.2.5.txt)_

**Mod Additions**

-   Applied Energistics 2 [\#59](https://github.com/NillerMedDild/Enigmatica6/issues/59)
-   Aquaculture 2 [\#77](https://github.com/NillerMedDild/Enigmatica6/issues/77)
-   Click Machine [\#79](https://github.com/NillerMedDild/Enigmatica6/issues/79)
-   Dark Utilities [\#64](https://github.com/NillerMedDild/Enigmatica6/issues/64)
-   Enigmatica Companion Mod [\#86](https://github.com/NillerMedDild/Enigmatica6/issues/86)
-   Extended Lights [\#70](https://github.com/NillerMedDild/Enigmatica6/issues/70)
-   FTB Backups [\#72](https://github.com/NillerMedDild/Enigmatica6/issues/72)
-   Mining Gadgets [\#65](https://github.com/NillerMedDild/Enigmatica6/issues/65)
-   QuantumStorage [\#68](https://github.com/NillerMedDild/Enigmatica6/issues/68)
-   Valhelsia Structures [\#66](https://github.com/NillerMedDild/Enigmatica6/issues/66)

**Mod Removals**

-   Rats (Removed due to a bug. Will most likely not return)
-   Tip the Scales (To allow users to use **Optifine**)

**Changes**

-   It should now be possible to use Optifine in E6 out of the box
-   New recipes: Stripped Wood (Axe + Log)
-   New recipes: Farmland (Hoe + Dirt)
    -   Useful for Botany Pots
-   New recipes: Enchanted Soil (Grass + Overgrowth Seed)
    -   Useful for Botany Pots
-   QuantumStorage Expensive Recipes [\#75](https://github.com/NillerMedDild/Enigmatica6/issues/75)

**Bug Fixes**

-   Biomes O' Plenty causes some old worlds to be unable to load [\#46](https://github.com/NillerMedDild/Enigmatica6/issues/46)
-   [IE] Crash when loading world [\#60](https://github.com/NillerMedDild/Enigmatica6/issues/60)
-   \[Optifine\] Crash when opening video settings [\#84](https://github.com/NillerMedDild/Enigmatica6/issues/84)

### Enigmatica 6 v0.2.4

_Using Forge-1.16.1-32.0.88_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.2.4.txt)_

**Mod Additions**

-   **Botania**
-   Curious Armor Stands
-   FindMe
-   Fishing Real
-   **Macaw's Roofs**
-   Open Loader
-   **Pedestals**
-   **PneumaticCraft: Repressurized**
-   Rope Bridge
-   Simple Discord Rich Presence
-   Towers Of The Wild

**Changes**

-   Immersive Engineering: Hemp Seeds can now be bought in the Market
-   Immersive Engineering: Botany Pots now accept Hemp
-   Rats: Disabled the Pied Piper spawning naturally
-   ProductiveBees: Output from Combs have been unified to fit the rest of the pack.
-   Unified Sulfur

**Fixed Bugs**

-   Main Menu button linking to the wrong issue tracker
-   Gas duping using gas nodes from laser relays [\#44](https://github.com/NillerMedDild/Enigmatica6/issues/44)
-   Wood Floor recipes from planks/logs have amounts reversed [\#43](https://github.com/NillerMedDild/Enigmatica6/issues/43)
-   Stonecutter Dupes [\#35](https://github.com/NillerMedDild/Enigmatica6/issues/35)

### Enigmatica 6 v0.2.3

_Using Forge-1.16.1-32.0.75_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.2.3.txt)_

**Changes**

-   Rats: Wild Rats no longer raid crops
-   Rats: No longer dig holes

**Fixed Bugs**

-   0.2.2 - Server blows up on player login - Related to Crafting Station/Extra Tags [\#42](https://github.com/NillerMedDild/Enigmatica6/issues/42)

**Mod Removals**

-   CraftingStation (Temporarily, due to a bug)
-   Extra Tags (Temporarily, due to a bug)

### Enigmatica 6 v0.2.2

**GraveStones was removed in favor of Quark graves in v0.2.1, make sure to retrieve any items you have lying around in gravestones, so you don't lose them.**

_Using Forge-1.16.1-32.0.75_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.2.2.txt)_

**Mod Additions**

-   Back Tools
-   Crafting Station
-   Drawers Tooltip
-   Extra Tags
-   **Macaw's Windows**
-   Neat
-   iChunUtil

**Fixed Bugs**

-   Crashes [\#39](https://github.com/NillerMedDild/Enigmatica6/issues/39)
-   Cant smelt dusts [\#38](https://github.com/NillerMedDild/Enigmatica6/issues/38)

**Mod Removals**

-   Pedestals (Temporarily, because it cannot have crushing recipes modified at the moment)

### Enigmatica 6 v0.2.1

**GraveStones is being removed in favor of Quark graves, make sure to retrieve any items you have lying around in gravestones, so you don't lose them.**

_Using Forge-1.16.1-32.0.75_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.2.1.txt)_

**Mod additions**

-   Armor Toughness Bar
-   AutoRegLib
-   BountifulBaubles
-   Environmental Creepers
-   JAOPCA
-   Quark
-   Quark Oddities
-   Scaffolding behavior
-   Simple Farming
-   Simply Backpacks
-   Stronger Snowballs
-   The Endergetic Expansion
-   Torchmaster
-   ☃ Snow! Real Magic!
-   🥝 Kiwi

**Changes**

-   BiomesOPlenty: Set default world type for servers to biomesoplenty
-   Torchmaster: Harder recipes
-   Torchmaster: Decreased radius of Mega Torch to 32 blocks
-   Powah: Almost removed dry ice from worldgen (very low chance)
-   Prevent Creepers from destroying items [\#8](https://github.com/NillerMedDild/Enigmatica6/issues/8)

**Fixed Bugs**

-   Iron Bars Conflicting Recipes [\#31](https://github.com/NillerMedDild/Enigmatica6/issues/31)
-   2 recipes for each powah reactor [\#27](https://github.com/NillerMedDild/Enigmatica6/issues/27)
-   TrueShot enchant locking up server. [\#24](https://github.com/NillerMedDild/Enigmatica6/issues/24)
-   Ingots not unified, ore deposits missing uses [\#18](https://github.com/NillerMedDild/Enigmatica6/issues/18)
-   Lighting issue [\#14](https://github.com/NillerMedDild/Enigmatica6/issues/14)

**Mod removals**

-   GraveStones (Replaced by Quark Oddities grave)
-   Reap (Replaced by Simple Farming's/Quark's right-click harvest)

### Enigmatica 6 v0.2.0

**It is highly recommended to run the `/reload` command when entering a singleplayer world or booting up a server, due to a bug. We're working to resolve it.**

_Using Forge-1.16.1-32.0.71_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.2.0.txt)_

**Mod additions**

-   Actually Useful Stonecutter
-   **Artifacts**
-   Bad Wither No Cookie - Reloaded
-   Better Advancements
-   **Biomes O' Plenty**
-   Buzzier Bees
-   Cauldron Recipes
-   Clumps
-   Enchantment Descriptions
-   **FTB Ultimine**
-   **Immersive Engineering**
-   **Industrial Foregoing**
-   Just Enough Resources (JER)
-   Masonry
-   Morpheus
-   OldJavaWarning
-   Ranged Pumps
-   ReAuth
-   Simply Light
-   Titanium

**Changes**

-   Re-did Default keybindings \(Sorting was disabled\) [\#7](https://github.com/NillerMedDild/Enigmatica6/issues/7)

**Mod removals**

-   GameStages (Redundant atm)

### Enigmatica 6 v0.1.7

_Using Forge-1.16.1-32.0.66_

**Mod additions**

-   Waystones

**Bug fixes**

-   Waystones has been re-added now that it's stable. It was removed incorrectly in 0.1.6.

### Enigmatica 6 v0.1.6

_Using Forge-1.16.1-32.0.66_

**Bug fixes**

-   Fixed frequent crashes when exploring (being close to villages)

**Mod removals**

-   Waystones

### Enigmatica 6 v0.1.5

_Using Forge-1.16.1-32.0.66 | [Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.1.5.txt)_

**Mod Additions**

-   AI Improvements
-   Additional Lights
-   Bed Benefits
-   Cauldron Recipes
-   KubeJS
-   Overloaded Armor Bar
-   Productive Bees
-   Refined Storage Addons
-   Tool Stats

**Bug fixes**

-   Crafting Tweaks Crash [\#4](https://github.com/NillerMedDild/Enigmatica6/issues/4)

### Enigmatica 6 v0.1.4

_Using Forge-1.16.1-32.0.66 | [Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.1.4.txt)_

**Mod Additions**

-   Additional Bars
-   Better Burning
-   Big Buckets
-   Campfire Torches
-   ConnectedTexturesMod
-   Controlling
-   Crafting Tweaks
-   **Ender Mail**
-   Extra Disks
-   Global XP
-   Lollipop
-   Miner's Helmet
-   **Modular Routers**
-   **Nature's Compass**
-   No Potion Shift
-   OpenBlocks Elevator
-   PackMenu
-   **Powah!**
-   **Refined Storage**
-   Server Tab Info
-   Snow Under Trees
-   **Storage Drawers**
-   TipTheScales
-   Tool Belt
-   Waddles
-   **YUNG's Better Mineshafts (Forge)**
-   🌳 Passable Foliage

## The Mekanism Update!

_(v0.1.3) | Using Forge-1.16.1-32.0.62 | [Mod Updates](https://gist.github.com/NillerMedDild/6fa386a0d9d05a3a05988e89c9b727f0)_

**Mod Additions**

-   Bookshelf
-   Botany Pots
-   Carpet Stairs Mod
-   Citadel
-   Comforts
-   Cooking for Blockheads
-   Culinary Construct
-   Dank Storage
-   Farming for Blockheads
-   FastFurnace
-   FastWorkbench
-   Game Stages
-   KleeSlabs
-   Laser Relays
-   Mekanism
-   Mekanism Generators
-   Mekanism Tools
-   Patchouli
-   Pedestals
-   Placebo
-   Productive Bees
-   Rats
-   The One Probe
-   Toast Control
-   Trash Cans
-   Waystones
-   YUNG's Better Caves

### Enigmatica 6 v0.1.2

_Using Forge-1.16.1-32.0.57_ | _[Mod Updates](https://gist.github.com/NillerMedDild/a96787faf94d9379f1605cc02866e028)_

**Mod Additions**

-   Abnormals Core
-   AppleSkin
-   Bamboo Blocks
-   Bedspreads
-   Caelus API
-   Cake Chomps [FABRIC/FORGE]
-   Cherished Worlds
-   Connected Glass
-   Cosmetic Armor Reworked
-   Curio of Undying
-   Curios API
-   Curious Elytra
-   Dark Paintings
-   Decorative Blocks
-   Ding
-   Engineer's Decor
-   FPS Reducer
-   Interactio - In-World Crafting with Datapacks!
-   Let Sleeping Dogs Lie
-   Ma Enchants
-   MixinBootstrap
-   NetherPortalFix
-   Passthrough Signs
-   RandomPatches
-   ServerConfig Updater
-   U Team Core
-   Useful Backpacks
-   World Stripper
-   Xaero's Minimap
-   Xaero's World Map
