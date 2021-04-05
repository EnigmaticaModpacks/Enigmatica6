### Enigmatica 6 v0.4.9

_Using Forge-1.16.5-36.1.0_ | _[Mod Updates 0.4.8](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.4.9.md)_

**Note: Integrated Dynamics energy and fluid transfer is being nerfed, make sure your Reactor can handle the change before updating :D**

**Improvements/Changes**

-   XNet: Buffed fluid transfer rate
    -   Normal Connectors can now move 4000 mb per operation, up from 1000
    -   Advanced Connectors can now move 32000 mb per operation, up from 5000
-   XNet: Buffed energy transfer rate 5x
    -   Normal Connectors: 25000 FE up from 5000 FE
    -   Advanced Connectors: 500000 FE up from 100000 FE
-   Alex's Mobs: Lowered Kangaroo spawn weight
-   ArsNouveau: Lowered new Wilden creature's spawn weight
-   IntegratedDynamics: Lowered max FE transfer of a network to 65,536 FE/t
-   IntegratedDynamics: Lowered max fluid transfer of a network to 65,536 mb/t
-   IntegratedDynamics: Default new part update frequency of 10 ticks (up from 1)

**Bug Fixes**

**Removed Mods**

-   Botany Trees (The mod doesn't do anything due to our recipe changes)

### Enigmatica 6 v0.4.8

_Using Forge-1.16.5-36.1.0_ | _[Mod Updates 0.4.8](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.4.8.md)_

**Known issues**

-   Several Atmospheric biomes may change when updating from 0.4.3 to anything above. We have been unable to fix this issue unfortunately.
-   Updating from 0.4.3 to 0.4.5 and above will remove crops with Botany Pots.
    -   Updates from version 0.4.5 do not have this issue, so it should only happen the one time.

**Bug Fixes**

-   \[0.4.7\] Inventory appears on HUD after update from 0.4.3 to 0.4.7 [\#1830](https://github.com/NillerMedDild/Enigmatica6/issues/1830)
-   \[0.4.6\] Stonecutter tweaks issues [\#1820](https://github.com/NillerMedDild/Enigmatica6/issues/1820)
-   Occultism Storage crafting eats honey bottles [\#1624](https://github.com/NillerMedDild/Enigmatica6/issues/1624)
-   \[0.4.7\] Pedestal quests issue [\#1831](https://github.com/NillerMedDild/Enigmatica6/issues/1831)
-   \[0.4.5\] Frame chest is disabled but Illusion chest is not [\#1828](https://github.com/NillerMedDild/Enigmatica6/issues/1828)
-   \[0.4.7\] Server start and settings files changed encoding [\#1827](https://github.com/NillerMedDild/Enigmatica6/issues/1827)
-   0.4.7 Worn Notebook - Many entries broken and showing 2d cubes [\#1826](https://github.com/NillerMedDild/Enigmatica6/issues/1826)
-   Restore Pedestal's cobble and stoneworks [\#1835](https://github.com/NillerMedDild/Enigmatica6/pull/1835) ([MuteTiefling](https://github.com/MuteTiefling))
-   Fix beam stonecutting recipes [\#1836](https://github.com/NillerMedDild/Enigmatica6/pull/1836) ([ochotonida](https://github.com/ochotonida))

### Enigmatica 6 v0.4.7 (+0.4.6)

_Using Forge-1.16.5-36.1.0_ | _[Mod Updates 0.4.6](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.4.6.md)_ | _[Mod Updates 0.4.7](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.4.7.md)_

**New Mods**

-   [Lazy DataFixerUpper(LazyDFU) [FORGE]](https://www.curseforge.com/minecraft/mc-mods/lazy-dfu-forge)

**Improvements/Changes**

-   AlexsMobs: Cave Centipedes no longer naturally spawn.
    -   Their spawn eggs can be purchased from the Market
-   BYG Nether biomes Compatibility changes.\(part 1, probably\) [\#1602](https://github.com/NillerMedDild/Enigmatica6/issues/1602)
-   Recutting with stonecutter [\#1342](https://github.com/NillerMedDild/Enigmatica6/issues/1342)
-   Pedestals Quests [\#1811](https://github.com/NillerMedDild/Enigmatica6/pull/1811) ([TemperedFool](https://github.com/TemperedFool))

**Bug Fixes**

-   \[0.4.6\] Crash on world load [\#1821](https://github.com/NillerMedDild/Enigmatica6/issues/1821)
-   Reverted Curios changes. Everything is pretty much as it was in 0.4.3
-   \[0.4.5\] Missing Sugar Crushing recipes [\#1807](https://github.com/NillerMedDild/Enigmatica6/issues/1807)
-   \[0.4.5\] Server crash when upgrading Dank [\#1806](https://github.com/NillerMedDild/Enigmatica6/issues/1806)
-   \[0.4.3\] Obsidian Dupe with IE Crusher [\#1805](https://github.com/NillerMedDild/Enigmatica6/issues/1805)
-   \[0.4.5\] Apiary honeycombs [\#1800](https://github.com/NillerMedDild/Enigmatica6/issues/1800)
-   \[0.4.5\] BooBee honeycombs won't process in a Centrifuge [\#1799](https://github.com/NillerMedDild/Enigmatica6/issues/1799)
-   \[0.4.5\] Looting enchant missing [\#1792](https://github.com/NillerMedDild/Enigmatica6/issues/1792)
-   \[0.4.5\] Create goggles in new curio slot don't work [\#1791](https://github.com/NillerMedDild/Enigmatica6/issues/1791)
-   \[0.4.5\] Mending enchant broken [\#1788](https://github.com/NillerMedDild/Enigmatica6/issues/1788)
-   \[0.4.3\] Bad Material Stonework Factory recipe [\#1785](https://github.com/NillerMedDild/Enigmatica6/issues/1785)
-   \[Enigmatica 6\] Crafting Tweaks and Sophisticated Backpacks [\#1740](https://github.com/NillerMedDild/Enigmatica6/issues/1740)
-   End oregen y-levels [\#1601](https://github.com/NillerMedDild/Enigmatica6/issues/1601)
-   Batch spellchecking fixes to quest descriptions [\#1816](https://github.com/NillerMedDild/Enigmatica6/pull/1816) ([ylou](https://github.com/ylou))
-   Fix swapped Powah reactor transfer rates [\#1815](https://github.com/NillerMedDild/Enigmatica6/pull/1815) ([ylou](https://github.com/ylou))
-   Fix Apiary Recipies [\#1802](https://github.com/NillerMedDild/Enigmatica6/pull/1802) ([TemperedFool](https://github.com/TemperedFool))

### Enigmatica 6 v0.4.5

_Using Forge-1.16.5-36.1.0_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.4.5.md)_

**Remove all Curios and then use the command `/curios reset [playername]` to gain access to the new Goggle slot.** (We're aware of the weird armor stand slots, no need to report that :P)

**Improvements/Changes**

-   Add byg stones to the stonecutter tweaks [\#1768](https://github.com/NillerMedDild/Enigmatica6/pull/1768) ([Rodg88](https://github.com/Rodg88))
-   Add PNC essence compat to Pedestals and increase conversion rates [\#1777](https://github.com/NillerMedDild/Enigmatica6/pull/1777) ([MuteTiefling](https://github.com/MuteTiefling))
-   Change many recipes to allow any forge:stone input instead of only vanilla "stone" [\#1770](https://github.com/NillerMedDild/Enigmatica6/issues/1770)
-   Igneous Extruder Compat [\#1781](https://github.com/NillerMedDild/Enigmatica6/issues/1781)

**Bug Fixes**

-   Amber ore from Better end [\#1772](https://github.com/NillerMedDild/Enigmatica6/issues/1772)
-   \[0.4.3\] create-client.toml in use by another process [\#1775](https://github.com/NillerMedDild/Enigmatica6/issues/1775)
-   \[0.4.3\] Missing crafting recipes on ranked Botania Terra Shatterer [\#1773](https://github.com/NillerMedDild/Enigmatica6/issues/1773)
-   \[0.4.4\] Goggle Curio Slot Not Present on Curio Reset Command [\#1779](https://github.com/NillerMedDild/Enigmatica6/issues/1779)
-   Crafting from JEI with Refined Storage provides blank output [\#798](https://github.com/NillerMedDild/Enigmatica6/issues/798)
-   Minor mold/die unification fixes [\#1776](https://github.com/NillerMedDild/Enigmatica6/pull/1776) ([ochotonida](https://github.com/ochotonida))
-   Really remove Powah's starter blocks [\#1765](https://github.com/NillerMedDild/Enigmatica6/pull/1765) ([MuteTiefling](https://github.com/MuteTiefling))
-   Updated BYG to fix a crash

### Enigmatica 6 v0.4.4

_Using Forge-1.16.5-36.1.0_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.4.4.md)_

**If you're updating from 0.3.x please read the last 3 changelogs**

**Use the command `/curios reset [playername]` to gain access to the new Goggle slot.** (We're aware of the weird armor stand slots, no need to report that :P)

**New Mods**

-   [Bad Wither No Cookie - Reloaded](https://www.curseforge.com/minecraft/mc-mods/bad-wither-no-cookie-reloaded)
-   [Macaw's Fences and Walls](https://www.curseforge.com/minecraft/mc-mods/macaws-fences-and-walls)
-   [Project: Vibrant Journeys](https://www.curseforge.com/minecraft/mc-mods/project-vibrant-journeys)
-   [RSInfinityBooster](https://www.curseforge.com/minecraft/mc-mods/rsinfinitybooster)
-   [Repurposed Structures (Forge)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures)

**Improvements/Changes**

-   Add Alex's Mobs to Torchmaster blacklists for Mega Torch and Dread Lamp [\#1749](https://github.com/NillerMedDild/Enigmatica6/pull/1749) ([MuteTiefling](https://github.com/MuteTiefling))
-   Add Diet attributes to Mekanism Canteen [\#1663](https://github.com/NillerMedDild/Enigmatica6/issues/1663)
-   Added create cobblestones smelting recipes [\#1733](https://github.com/NillerMedDild/Enigmatica6/pull/1733) ([Merlo17](https://github.com/Merlo17))
-   Added driftwood washing recipe [\#1674](https://github.com/NillerMedDild/Enigmatica6/pull/1674) ([Merlo17](https://github.com/Merlo17))
-   Added Torch Recipe for Stick + Standing Fire [\#1641](https://github.com/NillerMedDild/Enigmatica6/pull/1641) ([Ridanisaurus](https://github.com/Ridanisaurus))
-   Added various fluid-related recipes [\#1614](https://github.com/NillerMedDild/Enigmatica6/pull/1614) ([ochotonida](https://github.com/ochotonida))
-   Add extra fuel to the Lapidary Dynamo [\#1596](https://github.com/NillerMedDild/Enigmatica6/pull/1596) ([MuteTiefling](https://github.com/MuteTiefling))
-   Add extra hot and cold blocks to PNC and Powah [\#1688](https://github.com/NillerMedDild/Enigmatica6/pull/1688) ([MuteTiefling](https://github.com/MuteTiefling))
-   Add Flax Compat Recipes [\#1607](https://github.com/NillerMedDild/Enigmatica6/pull/1607) ([MuteTiefling](https://github.com/MuteTiefling))
-   Add JEI info for Thermal elemental drops [\#1547](https://github.com/NillerMedDild/Enigmatica6/issues/1547)
-   Add low passive generation to Mekanism fusion [\#1662](https://github.com/NillerMedDild/Enigmatica6/issues/1662)
-   Add Recipes for Artifact Level Infinity Tools [\#1730](https://github.com/NillerMedDild/Enigmatica6/pull/1730) ([MuteTiefling](https://github.com/MuteTiefling))
-   Add Supplementaries Flax to Market [\#1621](https://github.com/NillerMedDild/Enigmatica6/pull/1621) ([MuteTiefling](https://github.com/MuteTiefling))
-   Apiary Beelancing [\#1705](https://github.com/NillerMedDild/Enigmatica6/pull/1705) ([TemperedFool](https://github.com/TemperedFool))
-   \[Mek-QuestLine\]A small warning. [\#1523](https://github.com/NillerMedDild/Enigmatica6/issues/1523)
-   \[Mod Suggestion\] Repurposed Structures \(Forge\) [\#310](https://github.com/NillerMedDild/Enigmatica6/issues/310)
-   \[Suggestion\] Bad Wither No Cookie [\#1457](https://github.com/NillerMedDild/Enigmatica6/issues/1457)
-   \[Suggestion\] recipes for legendary varients of infinity tools [\#1694](https://github.com/NillerMedDild/Enigmatica6/issues/1694)
-   \[Suggestion\] Smithing table recipe to turn a terrasteel AIOT into an alfsteel AIOT [\#700](https://github.com/NillerMedDild/Enigmatica6/issues/700)
-   Bees: I-C-Bee Honey Bottles output chance increased to 50% from 2%
-   BYG nether enhancements v2 [\#1629](https://github.com/NillerMedDild/Enigmatica6/pull/1629) ([Merlo17](https://github.com/Merlo17))
-   Change Immersive Engineering Excavator quest [\#1689](https://github.com/NillerMedDild/Enigmatica6/issues/1689)
-   Cobblestones from Create can't be smelted back to stone variants [\#1725](https://github.com/NillerMedDild/Enigmatica6/issues/1725)
-   Create: Rockwool & Quilted Wool can now be used as Windmill Sails
-   Curios: Added Goggles support for all Goggles.
-   Drawer quest improvement [\#1573](https://github.com/NillerMedDild/Enigmatica6/issues/1573)
-   Dropoff/quickstack once again ignores the hotbar
-   Explain how Habanero is obtained [\#1652](https://github.com/NillerMedDild/Enigmatica6/issues/1652)
-   Flour and dough unification [\#1618](https://github.com/NillerMedDild/Enigmatica6/pull/1618) ([Merlo17](https://github.com/Merlo17))
-   Food tags & unification [\#1635](https://github.com/NillerMedDild/Enigmatica6/pull/1635) ([ochotonida](https://github.com/ochotonida))
-   Give our Akashic Tome instead of all manuals separately [\#1459](https://github.com/NillerMedDild/Enigmatica6/issues/1459)
-   IE and PNC Gun Damage Boosts \(and IE Excavator speed boost\) [\#1660](https://github.com/NillerMedDild/Enigmatica6/pull/1660) ([MuteTiefling](https://github.com/MuteTiefling))
-   IE fermenter recipes [\#1647](https://github.com/NillerMedDild/Enigmatica6/pull/1647) ([DarkAngel22579](https://github.com/DarkAngel22579))
-   IE Loot Updates [\#1670](https://github.com/NillerMedDild/Enigmatica6/pull/1670) ([MuteTiefling](https://github.com/MuteTiefling))
-   IE quest for water wheel maybe shouldn't be a pre-req for squeezer/fermenter quest [\#1645](https://github.com/NillerMedDild/Enigmatica6/issues/1645)
-   Limit Powah Upgrade Recipes to Only prior tiers [\#1676](https://github.com/NillerMedDild/Enigmatica6/pull/1676) ([MuteTiefling](https://github.com/MuteTiefling))
-   Market Update and Chorus Insolator Fix [\#1682](https://github.com/NillerMedDild/Enigmatica6/pull/1682) ([MuteTiefling](https://github.com/MuteTiefling))
-   More recipes for the IE industrial fermenter [\#1637](https://github.com/NillerMedDild/Enigmatica6/issues/1637)
-   More ways to get Driftwood [\#1661](https://github.com/NillerMedDild/Enigmatica6/issues/1661)
-   Occultism Otherworld Goggles [\#1654](https://github.com/NillerMedDild/Enigmatica6/issues/1654)
-   Powah tiering recipes accept any tiered mechanisms of the same type. [\#1671](https://github.com/NillerMedDild/Enigmatica6/issues/1671)
-   rebalanced occultism ore miner weights [\#1600](https://github.com/NillerMedDild/Enigmatica6/pull/1600) ([theboo](https://github.com/theboo))
-   Rebalance Mob Weights for Alexs Mobs in The Nether [\#1717](https://github.com/NillerMedDild/Enigmatica6/issues/1717)
-   Reverse-stonecutting [\#1727](https://github.com/NillerMedDild/Enigmatica6/pull/1727) ([Rodg88](https://github.com/Rodg88))
-   StorageDrawers: Added JEI info about Framed Drawers (Merlo)
-   Support for BYG Imparius Wood [\#1703](https://github.com/NillerMedDild/Enigmatica6/issues/1703)
-   Tag updates [\#1679](https://github.com/NillerMedDild/Enigmatica6/pull/1679) ([ochotonida](https://github.com/ochotonida))
-   Thermal: Added JEI info about Blitz, Blizz & Basalz
-   Unified chocolate [\#1639](https://github.com/NillerMedDild/Enigmatica6/pull/1639) ([ochotonida](https://github.com/ochotonida))
-   Unified dies & molds [\#1729](https://github.com/NillerMedDild/Enigmatica6/pull/1729) ([ochotonida](https://github.com/ochotonida))
-   Unify Wheat Flour [\#1576](https://github.com/NillerMedDild/Enigmatica6/issues/1576)
-   Use for Resourceful Beeswax [\#1713](https://github.com/NillerMedDild/Enigmatica6/issues/1713)

**Bug Fixes**

-   "Crouching" when someone teleports [\#1527](https://github.com/NillerMedDild/Enigmatica6/issues/1527)

-   Astral Sorcery Mineral Enrichment Perk can turn most stones into ores [\#1147](https://github.com/NillerMedDild/Enigmatica6/issues/1147)

-   Astral Sorcery Neromantic Prime - only water and lava is available despite configs [\#1452](https://github.com/NillerMedDild/Enigmatica6/issues/1452)

-   Astral Sorcery Starmetal ore unsmeltable, uncrushable, and uncuttable [\#1644](https://github.com/NillerMedDild/Enigmatica6/issues/1644)

-   Baby RGBee killing itself [\#1667](https://github.com/NillerMedDild/Enigmatica6/issues/1667)

-   \[0.4.3: No Mutation/Flower info for Resourceful Bees [\#1732](https://github.com/NillerMedDild/Enigmatica6/issues/1732)

-   \[0.4.3\] Autocrafting Bacon Crash [\#1707](https://github.com/NillerMedDild/Enigmatica6/issues/1707)

-   \[0.4.3\] Cloche doesn't have randomised outputs? [\#1734](https://github.com/NillerMedDild/Enigmatica6/issues/1734)

-   \[0.4.3\] Multiservo Press, Gearworking Die and Gear Mold [\#1722](https://github.com/NillerMedDild/Enigmatica6/issues/1722)

-   \[0.4.3\] Natural Scoria can't be used in a mineral survey [\#1723](https://github.com/NillerMedDild/Enigmatica6/issues/1723)

-   [0.4.3] some BetterEndForge plants missing some recipes [#1754](https://github.com/NillerMedDild/Enigmatica6/issues/1754)

-   \[0.4.3\] Pneumaticraft drones [\#1708](https://github.com/NillerMedDild/Enigmatica6/issues/1708)

-   \[E6/dev\] Rabbits [\#1748](https://github.com/NillerMedDild/Enigmatica6/issues/1748)

-   \[Enigmatica 6 0.4.3\] Crash when staring at create things with goggles [\#1720](https://github.com/NillerMedDild/Enigmatica6/issues/1720)

-   Bee Smoker is unbreakable [\#1649](https://github.com/NillerMedDild/Enigmatica6/issues/1649)

-   BlockCarpentry Chests Cause Excessive Log Spam & TPS Drops [\#1208](https://github.com/NillerMedDild/Enigmatica6/issues/1208)

-   Block Carpentry Chests Crash Servers when Broken [\#1623](https://github.com/NillerMedDild/Enigmatica6/issues/1623)

-   Blocks of Uraninite Cannot be turn back into Uraninite [\#1546](https://github.com/NillerMedDild/Enigmatica6/issues/1546)

-   Bug with Quantumstorage [\#888](https://github.com/NillerMedDild/Enigmatica6/issues/888)

-   Can't enable Core Components for PNC armor [\#1561](https://github.com/NillerMedDild/Enigmatica6/issues/1561)

-   Cannot place Animal Dictionary in Bookshelf [\#826](https://github.com/NillerMedDild/Enigmatica6/issues/826)

-   Carbuncles hate being captured [\#785](https://github.com/NillerMedDild/Enigmatica6/issues/785)

-   Chisel & Bits has buggy display and affected items seem to switch textures/item IDs with other blocks whenever modpack is updated [\#1092](https://github.com/NillerMedDild/Enigmatica6/issues/1092)

-   Chunk to Ore Transformation Fix 2 [\#1632](https://github.com/NillerMedDild/Enigmatica6/pull/1632) ([MuteTiefling](https://github.com/MuteTiefling))

-   Compact Machine Walls are unbreakable in survival [\#1534](https://github.com/NillerMedDild/Enigmatica6/issues/1534)

-   Cooking for Blockheads eats knives [\#1550](https://github.com/NillerMedDild/Enigmatica6/issues/1550)

-   Crashing Issue With Mimicubes [\#1205](https://github.com/NillerMedDild/Enigmatica6/issues/1205)

-   Crash on F2 [\#1400](https://github.com/NillerMedDild/Enigmatica6/issues/1400)

-   Create - Pretty Pipes Crash [\#1581](https://github.com/NillerMedDild/Enigmatica6/issues/1581)

-   Create - Refined Storage Network Receiver Crash [\#1640](https://github.com/NillerMedDild/Enigmatica6/issues/1640)

-   Distiller tower crashes the gane [\#1653](https://github.com/NillerMedDild/Enigmatica6/issues/1653)

-   Endermite & Displacement Crashes Server [\#1543](https://github.com/NillerMedDild/Enigmatica6/issues/1543)

-   Fixed drawers again [\#1605](https://github.com/NillerMedDild/Enigmatica6/pull/1605) ([Merlo17](https://github.com/Merlo17))

-   Fix Ender Gate Quest [\#1658](https://github.com/NillerMedDild/Enigmatica6/pull/1658) ([OneLemonyBoi](https://github.com/OneLemonyBoi))

-   Garden cloche can't produce sugar cane as a crop? [\#1693](https://github.com/NillerMedDild/Enigmatica6/issues/1693)

-   Give Akashic Tome as quest reward [\#1540](https://github.com/NillerMedDild/Enigmatica6/issues/1540)

-   Immersive Posts gold post destroyed when breaking [\#1218](https://github.com/NillerMedDild/Enigmatica6/issues/1218)

-   JEI tag searches don't work on server client [\#934](https://github.com/NillerMedDild/Enigmatica6/issues/934)

-   Menril Logs can be burned in vanilla Blast Furnace for charcoal. [\#1634](https://github.com/NillerMedDild/Enigmatica6/issues/1634)

-   Missing Pumpjack recipe. [\#1604](https://github.com/NillerMedDild/Enigmatica6/issues/1604)

-   Multiservo Press Missing Recipes for 3x3 Packing Die [\#1702](https://github.com/NillerMedDild/Enigmatica6/issues/1702)

-   Mythic Botany wand breaks armor UI [\#1144](https://github.com/NillerMedDild/Enigmatica6/issues/1144)

-   Netherite Sophisticated Backpack does not drop when broken with fist \(does not happen with any of the other tiers\) [\#1587](https://github.com/NillerMedDild/Enigmatica6/issues/1587)

-   New Drawer Recipes [\#1580](https://github.com/NillerMedDild/Enigmatica6/issues/1580)

-   No recipe for smelting starmetal ore into ingots. [\#1542](https://github.com/NillerMedDild/Enigmatica6/issues/1542)

-   Obsidian honeycomb cant be used in centrifuger [\#1411](https://github.com/NillerMedDild/Enigmatica6/issues/1411)

-   Occultism Dimensional Mineshaft gives Nether Quarts Ore rather than Nether Quartz Chunks [\#1585](https://github.com/NillerMedDild/Enigmatica6/issues/1585)

-   Placed Chisels and Bits change between pack updates [\#1086](https://github.com/NillerMedDild/Enigmatica6/issues/1086)

-   Possible misscalculation in burntimes with Mapper Base bituminous coal. [\#1631](https://github.com/NillerMedDild/Enigmatica6/issues/1631)

-   Potassium Nitrate Chunk gives itself when in crafting grid [\#1116](https://github.com/NillerMedDild/Enigmatica6/issues/1116)

-   Potatoes don't work in TPP to make Ethanol [\#1625](https://github.com/NillerMedDild/Enigmatica6/issues/1625)

-   Quartz Chunks from Laser Drill [\#1608](https://github.com/NillerMedDild/Enigmatica6/pull/1608) ([MuteTiefling](https://github.com/MuteTiefling))

-   Quartz Enriched Iron should have a shapeless recipie [\#1615](https://github.com/NillerMedDild/Enigmatica6/issues/1615)

-   Random failures in crafting of Compact Machines [\#1552](https://github.com/NillerMedDild/Enigmatica6/issues/1552)

-   Re-add missing Chunk to Ore Shapeless Recipes [\#1609](https://github.com/NillerMedDild/Enigmatica6/pull/1609) ([MuteTiefling](https://github.com/MuteTiefling))

-   Refined Obsidian in Thermal's Induction Smelter should require Osmium [\#1724](https://github.com/NillerMedDild/Enigmatica6/issues/1724)

-   Remove Natural Spawning of Cockroaches [\#1535](https://github.com/NillerMedDild/Enigmatica6/issues/1535)

-   Resourceful Bees Ghast Mutation weird JEI tab [\#1350](https://github.com/NillerMedDild/Enigmatica6/issues/1350)

-   Resourceful Bees JEI Problem [\#1424](https://github.com/NillerMedDild/Enigmatica6/issues/1424)

-   Server crash with Integrated Tunnels [\#1595](https://github.com/NillerMedDild/Enigmatica6/issues/1595)

-   Smoker displays misleading animation with Resourceful Bees Hives [\#892](https://github.com/NillerMedDild/Enigmatica6/issues/892)

-   Some villagers accept items that are not unified [\#1187](https://github.com/NillerMedDild/Enigmatica6/issues/1187)

-   Sophisticated Backpacks JEI dyed versions error [\#642](https://github.com/NillerMedDild/Enigmatica6/issues/642)

-   The ability to delete blocks using immersive engineering teslas [\#854](https://github.com/NillerMedDild/Enigmatica6/issues/854)

-   Unable to submit Farmer's Delight Crates to Bountiful [\#1586](https://github.com/NillerMedDild/Enigmatica6/issues/1586)

-   Update Growables to handle missing Better End compat [#1758](https://github.com/NillerMedDild/Enigmatica6/pull/1758)

-   Update Insolator and Cloche to reduce rare drops like poison potatoes [\#1750](https://github.com/NillerMedDild/Enigmatica6/pull/1750) ([MuteTiefling](https://github.com/MuteTiefling))

-   Valhesia structures not spawning [\#1487](https://github.com/NillerMedDild/Enigmatica6/issues/1487)

**Removed Mods**

-   CreatePlus: We added our own Curios support

### Enigmatica 6 v0.4.3

_Using Forge-1.16.5-36.0.45_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.4.3.md)_

**If you're updating from 0.3.x please read the last 3 changelogs**

**Improvements/Changes**

-   Add IE Creosote as valid fuel for PNC [\#1513](https://github.com/NillerMedDild/Enigmatica6/pull/1513) ([MuteTiefling](https://github.com/MuteTiefling))
-   Add pickerelweed to crops list [\#1520](https://github.com/NillerMedDild/Enigmatica6/pull/1520) ([MuteTiefling](https://github.com/MuteTiefling))
-   Disabled the "Reloaded with no KubeJs errors" message on world-join.
-   Give our Akashic Tome instead of all manuals separately [\#1459](https://github.com/NillerMedDild/Enigmatica6/issues/1459)
-   remove duplicate ore and dust smelting recipes [\#1521](https://github.com/NillerMedDild/Enigmatica6/pull/1521) ([MuteTiefling](https://github.com/MuteTiefling))
-   Thermoelectric Boiler quest gives no size. [\#1525](https://github.com/NillerMedDild/Enigmatica6/issues/1525)

**Bug Fixes**

-   Amadron Tablet offers use non EE Aluminum [\#1507](https://github.com/NillerMedDild/Enigmatica6/issues/1507)
-   \[Tetra&Pneumaticcraft\] Disenchanting Exploit [\#1506](https://github.com/NillerMedDild/Enigmatica6/issues/1506)
-   Blast Furnace Smelt Iron Dust at Half Speed/Half Efficiency [\#1519](https://github.com/NillerMedDild/Enigmatica6/issues/1519)
-   Cooking for Blockheads Book Recipe [\#1529](https://github.com/NillerMedDild/Enigmatica6/issues/1529)
-   Crashing using Pneumatic helmet with tetra [\#639](https://github.com/NillerMedDild/Enigmatica6/issues/639)
-   Crash when using Occultism machine operator [\#1530](https://github.com/NillerMedDild/Enigmatica6/issues/1530)
-   Create crushed ores accidentally hidden in JEI [\#1512](https://github.com/NillerMedDild/Enigmatica6/issues/1512)
-   Cutting Board recipe using wrong item [\#1422](https://github.com/NillerMedDild/Enigmatica6/issues/1422)
-   Dupe Bug: PNC vacuum Chamber and Quark Ancient Tome [\#1514](https://github.com/NillerMedDild/Enigmatica6/issues/1514)
-   Elytra doesn't break properly when worn as a curio [\#1496](https://github.com/NillerMedDild/Enigmatica6/issues/1496)
-   Ender cells reset energy levels [\#1445](https://github.com/NillerMedDild/Enigmatica6/issues/1445)
-   End Stone smelter has broken GUI [\#1426](https://github.com/NillerMedDild/Enigmatica6/issues/1426)
-   IE Arc furnace Recycling recipe wrong [\#654](https://github.com/NillerMedDild/Enigmatica6/issues/654)
-   ImmersiveEngineering: Temporarily removed Jerrycan recipe due to an issue with the Jerrycan
    -   JustEnoughResources: No more double reloading, should speed up the time it takes to load singleplayer
-   Lootr & Dungeon Crawl Interaction [\#1508](https://github.com/NillerMedDild/Enigmatica6/issues/1508)
-   Mob Duplicator no longer spawning mobs [\#1518](https://github.com/NillerMedDild/Enigmatica6/issues/1518)
-   Powah: Cleaned up ways to obtain Uranitite, only the valid ones are shown now.
-   Remove Natural Spawning of Cockroaches [\#1535](https://github.com/NillerMedDild/Enigmatica6/issues/1535)
-   Undergarden SMP generation [\#1472](https://github.com/NillerMedDild/Enigmatica6/issues/1472)
-   UpdateServerScript: Fixed overrides folder not being moved correctly on Unix based operating systems.

### Enigmatica 6 v0.4.2

_Using Forge-1.16.5-36.0.40_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.4.2.md)_

**If you're updating from 0.3.x please read the last two changelogs**

**New Mods!**

-   [Abnormals Delight](https://www.curseforge.com/minecraft/mc-mods/abnormals-delight)

*   [Create Plus](https://www.curseforge.com/minecraft/mc-mods/create-plus)
*   [Inventory HUD+](https://www.curseforge.com/minecraft/mc-mods/inventory-hud-forge)

**Improvements/Changes**

-   Ores:
    -   Decreased Gold a bit: Larger veins, fewer of them
    -   Decreased Fluorite a bit: Larger veins, fewer of them
    -   Decreased Potassium Nitrate
    -   Increased Quartz a bit, it can now spawn on more nether blocks.
-   Add Autumnity/Atmospheric saplings to market [\#1466](https://github.com/NillerMedDild/Enigmatica6/pull/1466) ([theboo](https://github.com/theboo))
-   Added QoL log to chest recipes for all modded logs [\#1473](https://github.com/NillerMedDild/Enigmatica6/pull/1473) ([Merlo17](https://github.com/Merlo17))
-   Allow other 'stone' to be used in PNC crafting [\#1450](https://github.com/NillerMedDild/Enigmatica6/issues/1450)
-   Blacklist Artifacts campsites from Undergarden biomes [\#1474](https://github.com/NillerMedDild/Enigmatica6/pull/1474) ([ochotonida](https://github.com/ochotonida))
-   Cheaper Mekanism Bins [\#1388](https://github.com/NillerMedDild/Enigmatica6/issues/1388)
-   Immersive Engineering hammer and Enigmatic hammer usage problem [\#1449](https://github.com/NillerMedDild/Enigmatica6/issues/1449)
-   Improved Traveling distance and angle for travel anchors [\#1489](https://github.com/NillerMedDild/Enigmatica6/pull/1489) ([Buuz135](https://github.com/Buuz135))
-   Increase IE Crusher ore output back to 2x, plus 10% secondary [\#1477](https://github.com/NillerMedDild/Enigmatica6/pull/1477) ([MuteTiefling](https://github.com/MuteTiefling))
-   Make powah reactor upgrades cheaper [\#1482](https://github.com/NillerMedDild/Enigmatica6/issues/1482)
-   Mekanism Bins and Iron Chests Texture Update [\#1446](https://github.com/NillerMedDild/Enigmatica6/pull/1446) ([Ridanisaurus](https://github.com/Ridanisaurus))
-   Mekanism Lithium Quest is confusing [\#1481](https://github.com/NillerMedDild/Enigmatica6/issues/1481)
-   Much more reasonable compact machine recipes [\#1476](https://github.com/NillerMedDild/Enigmatica6/pull/1476) ([Merlo17](https://github.com/Merlo17))
-   Neat: Centipede body no longer displays a Neat-bar
-   Occultism Wither Summon: Change Loot Table to Armor and Weapon drops instead of Apoth targeted books [\#1495](https://github.com/NillerMedDild/Enigmatica6/pull/1495) ([MuteTiefling](https://github.com/MuteTiefling))
-   Oregen buff [\#1425](https://github.com/NillerMedDild/Enigmatica6/issues/1425)
-   Quark: Monster Box loot changes a bit. Ores are now chunks, infested blocks are no longer in the pool.
-   Quark: Turf Slab to Turf recipe
-   Reduce cost of Powah Reactor Block Upgrades to be more in line with the default craft. [\#1493](https://github.com/NillerMedDild/Enigmatica6/pull/1493) ([MuteTiefling](https://github.com/MuteTiefling))
-   Refined storage questline should accept any storage disk [\#1435](https://github.com/NillerMedDild/Enigmatica6/issues/1435)
-   Retexture Mekanism Bins [\#1389](https://github.com/NillerMedDild/Enigmatica6/issues/1389)
-   Schematics for the Create Schematicannon [\#1464](https://github.com/NillerMedDild/Enigmatica6/pull/1464) ([TemperedFool](https://github.com/TemperedFool))
-   Updated occultism loot boxes [\#1454](https://github.com/NillerMedDild/Enigmatica6/pull/1454) ([theboo](https://github.com/theboo))

**Bug Fixes**

-   **Extremely slow nether/end generation**
-   Aluminum Ore Texture \(World Generation\) [\#1404](https://github.com/NillerMedDild/Enigmatica6/issues/1404)
-   \[0.4.1\] Can't create the "Feedthrough Insulator" multiblock [\#1451](https://github.com/NillerMedDild/Enigmatica6/issues/1451)
-   Compact Crafting Field Projector does not drop itself when broken with a valid tool [\#1438](https://github.com/NillerMedDild/Enigmatica6/issues/1438)
-   Crash when "crafting" the stonecutter [\#921](https://github.com/NillerMedDild/Enigmatica6/issues/921)
-   Ender Biotite has no use [\#1497](https://github.com/NillerMedDild/Enigmatica6/issues/1497)
-   Ether \(BYG\) crafting table cannot be converted to vanilla crafting table [\#1492](https://github.com/NillerMedDild/Enigmatica6/issues/1492)
-   Green Dye crafting recipe from Yellow and Blue Dye [\#1467](https://github.com/NillerMedDild/Enigmatica6/issues/1467)
-   Integrated Dynamics guide book in the Akashic Tome broken [\#1416](https://github.com/NillerMedDild/Enigmatica6/issues/1416)
-   Issues with recipes that use Farmer's Delight knife with Cooking for Blockheads and Refined Storage. [\#920](https://github.com/NillerMedDild/Enigmatica6/issues/920)
-   New tips! [#1453](https://github.com/NillerMedDild/Enigmatica6/pull/1453) ([Merlo17](https://github.com/Merlo17))
-   Non-functional "small" crafting recipe for Compact Crafting [\#1430](https://github.com/NillerMedDild/Enigmatica6/issues/1430)
-   RFTools Quests - XNet Tutorial Link is timestamped [\#1494](https://github.com/NillerMedDild/Enigmatica6/issues/1494)

**Mod Removals**

-   Temporarily removed [YUNG's Better Caves (Forge)](https://www.curseforge.com/minecraft/mc-mods/yungs-better-caves) while we find a solution to dimensional worldgen issues.

### Enigmatica 6 v0.4.1

_Using Forge-1.16.5-36.0.40_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.4.1.md)_

**If you're updating from 0.3.x please read the last changelog**

**Improvements/Changes**

-   Alex's Mobs: Decreased spawning of:
    -   Fly
    -   Raccoon
    -   Crow
-   Editing Signs now requires an empty hand
-   Mekansim: Advanced and Elite Bins can no hold more stacks of items
-   Mekanism Ore Tripling Quest [\#1403](https://github.com/NillerMedDild/Enigmatica6/issues/1403)
-   Missing recipe for Pumpkin Slice [\#1391](https://github.com/NillerMedDild/Enigmatica6/issues/1391)

**Bug Fixes**

-   Zombies can no longer drop Rusty Iron Ingots
-   Signs on chests are now "clicked through" unless you have an empty hand
-   Botania Quest Text Error [\#1429](https://github.com/NillerMedDild/Enigmatica6/issues/1429)
-   Thermal Quest Chapter missing a few rewards [\#1421](https://github.com/NillerMedDild/Enigmatica6/issues/1421)
-   Integrated Dynamics guide book in the Akashic Tome broken [\#1416](https://github.com/NillerMedDild/Enigmatica6/issues/1416)
-   **Periodic disconnect with ConcurrentModificationException [\#1409](https://github.com/NillerMedDild/Enigmatica6/issues/1409)**
-   **Sophisticated Backpacks Sometimes Voids Inventory On Upgrade [\#1406](https://github.com/NillerMedDild/Enigmatica6/issues/1406)**
-   Quark config reload msg spam [\#1396](https://github.com/NillerMedDild/Enigmatica6/issues/1396)
-   Create Stone Variants & Tetra [\#1395](https://github.com/NillerMedDild/Enigmatica6/issues/1395)
-   Re-add Mantle [\#1392](https://github.com/NillerMedDild/Enigmatica6/issues/1392)
-   Lowered artifact rates in end city loot \(and accidentally fixed \#1391\) [\#1428](https://github.com/NillerMedDild/Enigmatica6/pull/1428) ([theboo](https://github.com/theboo))
-   Update akashictome-common.toml [\#1402](https://github.com/NillerMedDild/Enigmatica6/pull/1402) ([Jerzyn2601](https://github.com/Jerzyn2601))

### Enigmatica 6 v0.4.0 - TerraForged

_Using Forge-1.16.5-36.0.40_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.4.0.md)_

You **must** update to a new profile if using the CurseForge App or GDLauncher. This is to clean up old files that we have removed in the update.

#### It's highly recommended that you make a new world, to get all the new features.

_We will not be offering support to 0.4.x worlds generated before 0.4.0. See the bottom of the v0.4.0 changelog for a list of possible issues when not making a new world._

Lastly, we recommend not changing the default world type as we are using Terraforged with datapacks to provide a custom experience our team has been working on for a while with highly customized terrain and underground.

**New Mods!**

-   [Abnormals Core](https://www.curseforge.com/minecraft/mc-mods/abnormals-core)
-   [Atmospheric](https://www.curseforge.com/minecraft/mc-mods/atmospheric)
-   [Autumnity](https://www.curseforge.com/minecraft/mc-mods/autumnity)
-   [Babel](https://www.curseforge.com/minecraft/mc-mods/babel)
-   [BetterEnd (Forge)](https://www.curseforge.com/minecraft/mc-mods/betterend-forge-port)
-   [Bountiful](https://www.curseforge.com/minecraft/mc-mods/bountiful)
-   [Cloth Config API (Forge)](https://www.curseforge.com/minecraft/mc-mods/cloth-config-forge)
-   [Common Capabilities](https://www.curseforge.com/minecraft/mc-mods/common-capabilities)
-   [Compact Crafting](https://www.curseforge.com/minecraft/mc-mods/compact-crafting)
-   [Compact Machines](https://www.curseforge.com/minecraft/mc-mods/compact-machines)
-   [Cyclops Core](https://www.curseforge.com/minecraft/mc-mods/cyclops-core)
-   [Diet (Forge)](https://www.curseforge.com/minecraft/mc-mods/diet)
-   [Flux Networks](https://www.curseforge.com/minecraft/mc-mods/flux-networks)
-   [Integrated Crafting](https://www.curseforge.com/minecraft/mc-mods/integrated-crafting)
-   [Integrated Dynamics](https://www.curseforge.com/minecraft/mc-mods/integrated-dynamics)
-   [Integrated NBT](https://www.curseforge.com/minecraft/mc-mods/integrated-nbt)
-   [Integrated Terminals](https://www.curseforge.com/minecraft/mc-mods/integrated-terminals)
-   [Integrated Tunnels](https://www.curseforge.com/minecraft/mc-mods/integrated-tunnels)
-   [ItemZoom](https://www.curseforge.com/minecraft/mc-mods/itemzoom)
-   [Just Enough Piglin Bartering](https://www.curseforge.com/minecraft/mc-mods/just-enough-piglin-bartering)
-   [Just Enough Resources (JER)](https://www.curseforge.com/minecraft/mc-mods/just-enough-resources-jer)
-   [Kotlin for Forge](https://www.curseforge.com/minecraft/mc-mods/kotlin-for-forge)
-   [Quickstack](https://www.curseforge.com/minecraft/mc-mods/quickstack)
-   [Reload Audio Driver (RAD) [Forge]](https://www.curseforge.com/minecraft/mc-mods/reload-audio-driver-rad)
-   [Save My Stronghold! (Forge)](https://www.curseforge.com/minecraft/mc-mods/save-my-stronghold)
-   [Screenshot to Clipboard (Forge)](https://www.curseforge.com/minecraft/mc-mods/screenshot-to-clipboard)
-   [Simple Tomb](https://www.curseforge.com/minecraft/mc-mods/simple-tomb)
-   [TerraForged](https://www.curseforge.com/minecraft/mc-mods/terraforged)
-   [Tetranomicon](https://www.curseforge.com/minecraft/mc-mods/tetranomicon)
-   [Time in a bottle standalone](https://www.curseforge.com/minecraft/mc-mods/time-in-a-bottle-standalone)
-   [Upgrade Aquatic](https://www.curseforge.com/minecraft/mc-mods/upgrade-aquatic)

**Improvements/Changes**

-   added a bunch of tips [\#1338](https://github.com/NillerMedDild/Enigmatica6/pull/1338) ([Merlo17](https://github.com/Merlo17))
-   Added better end book to akashic tome [\#1304](https://github.com/NillerMedDild/Enigmatica6/pull/1304) ([Merlo17](https://github.com/Merlo17))
-   Added BYG pollen recipes \(block -\> item and viceversa\) [\#1309](https://github.com/NillerMedDild/Enigmatica6/pull/1309) ([Merlo17](https://github.com/Merlo17))
-   Added Diet food groups to unsupported mod foods [\#1378](https://github.com/NillerMedDild/Enigmatica6/pull/1378) ([Merlo17](https://github.com/Merlo17))
-   Added JEI Info tab to Uraninite to avoid confusion [\#1366](https://github.com/NillerMedDild/Enigmatica6/pull/1366) ([Merlo17](https://github.com/Merlo17))
-   Added to Occultism wild hunt ritual loot table [\#1341](https://github.com/NillerMedDild/Enigmatica6/pull/1341) ([theboo](https://github.com/theboo))
-   Additional Apotheosis Boss-Types [\#1356](https://github.com/NillerMedDild/Enigmatica6/pull/1356) ([Ridanisaurus](https://github.com/Ridanisaurus))
-   Add Obsidian Crushing Recipes [\#1358](https://github.com/NillerMedDild/Enigmatica6/pull/1358) ([MuteTiefling](https://github.com/MuteTiefling))
-   Adds elytra and dragon head to endcity loot [\#1355](https://github.com/NillerMedDild/Enigmatica6/pull/1355) ([theboo](https://github.com/theboo))
-   Adds more mountain oregen [\#1376](https://github.com/NillerMedDild/Enigmatica6/pull/1376) ([theboo](https://github.com/theboo))
-   Adds recipes for occultism crushed end stone [\#1354](https://github.com/NillerMedDild/Enigmatica6/pull/1354) ([theboo](https://github.com/theboo))
-   BotanyPots: Have been changed greatly. They now grow things very very slowly, but with increased drops.
    -   This was done to incentivize using other methods that requires more planning, namely IE's Garden Cloche and Thermal's Insolator.
-   \[Chisels and Bits\] Increase Bit Bag Stack Size [\#1223](https://github.com/NillerMedDild/Enigmatica6/issues/1223)
-   \[Sugestion\] Balance Power Generation [\#861](https://github.com/NillerMedDild/Enigmatica6/issues/861)
-   Better End : The Taggening - Add basic tags to many items/blocks from better end [\#1313](https://github.com/NillerMedDild/Enigmatica6/pull/1313) ([MuteTiefling](https://github.com/MuteTiefling))
-   Better End Compat [\#1276](https://github.com/NillerMedDild/Enigmatica6/issues/1276)
-   Better End Ender Ore and Amber Ore Processing Integration [\#1320](https://github.com/NillerMedDild/Enigmatica6/pull/1320) ([MuteTiefling](https://github.com/MuteTiefling))
-   Chisels&Bits: Increased Bit Bag stack size to 16384 (32 times what it could hold before)
-   Compact Machines recipes [\#1337](https://github.com/NillerMedDild/Enigmatica6/pull/1337) ([Merlo17](https://github.com/Merlo17))
-   Compact Powah Recipes [\#1251](https://github.com/NillerMedDild/Enigmatica6/issues/1251)
-   Create Menril/Chorus Processing Recipes for Thermal and PneumaticCraft [\#1368](https://github.com/NillerMedDild/Enigmatica6/pull/1368) ([MuteTiefling](https://github.com/MuteTiefling))
-   Enable cosmetic curio slots [\#1310](https://github.com/NillerMedDild/Enigmatica6/issues/1310)
-   Enigmatica preset, new biome weights [\#1305](https://github.com/NillerMedDild/Enigmatica6/pull/1305) ([theboo](https://github.com/theboo))
-   ID Ore Unification - Ores to Dust | Ingots/Gems to Dust [\#1307](https://github.com/NillerMedDild/Enigmatica6/pull/1307) ([MuteTiefling](https://github.com/MuteTiefling))
-   IF Laser Lens [\#1206](https://github.com/NillerMedDild/Enigmatica6/issues/1206)
-   LostTrinkets: Set maximum number of trinket slots the player can have to 10
-   Magic Feather and Angel Ring [\#1167](https://github.com/NillerMedDild/Enigmatica6/issues/1167)
-   Move Mimiccream to Mimic drop table [\#1382](https://github.com/NillerMedDild/Enigmatica6/pull/1382) ([MuteTiefling](https://github.com/MuteTiefling))
-   New Panorama and Main Menu [\#1348](https://github.com/NillerMedDild/Enigmatica6/pull/1348) ([Ridanisaurus](https://github.com/Ridanisaurus))
-   Possible list of structure datapacks [\#1269](https://github.com/NillerMedDild/Enigmatica6/issues/1269)
-   Silicon [\#1257](https://github.com/NillerMedDild/Enigmatica6/issues/1257)
-   Tag BYG redstone, Add a few heat sources PNC and Powah [\#1325](https://github.com/NillerMedDild/Enigmatica6/pull/1325) ([MuteTiefling](https://github.com/MuteTiefling))
-   Tetra: Eidolon Compatibility [\#1132](https://github.com/NillerMedDild/Enigmatica6/issues/1132)
-   Tips for the ticker on map load up [\#1359](https://github.com/NillerMedDild/Enigmatica6/issues/1359)
-   Tweaked diet effects [\#1381](https://github.com/NillerMedDild/Enigmatica6/pull/1381) ([Merlo17](https://github.com/Merlo17))
-   Undergarden: TwistyTwig can no longer be used in place of string
-   Update BuildingGadgets' README.txt w/ A Link To DW20's Spotlight [\#1375](https://github.com/NillerMedDild/Enigmatica6/pull/1375) ([r-mc2](https://github.com/r-mc2))

**Bug Fixes**

-   Ars Nouveau - Harvest spell isn't work on server [\#1231](https://github.com/NillerMedDild/Enigmatica6/issues/1231)
-   Ars Nouveau using mod specific mana gems [\#1163](https://github.com/NillerMedDild/Enigmatica6/issues/1163)
-   AS Crafting Starmetal dust with Starlight Infuser [\#1178](https://github.com/NillerMedDild/Enigmatica6/issues/1178)
-   autocrafting energizing rods could be easier \(powah\) [\#1112](https://github.com/NillerMedDild/Enigmatica6/issues/1112)
-   Bad ordering on early Occultism quests [\#1156](https://github.com/NillerMedDild/Enigmatica6/issues/1156)
-   \[Dupe+Void\] RF Filter+Sorting Mod [\#1363](https://github.com/NillerMedDild/Enigmatica6/issues/1363)
-   Bee Traits Fix [\#1299](https://github.com/NillerMedDild/Enigmatica6/pull/1299) ([Ridanisaurus](https://github.com/Ridanisaurus))
-   Bug: Fletching villagers cannot exist due to modified fletching tables [\#767](https://github.com/NillerMedDild/Enigmatica6/issues/767)
-   BYG stone missing duplicating cobble/stone gen recipies [\#1315](https://github.com/NillerMedDild/Enigmatica6/issues/1315)
-   Can't use EE steel plate in multiservo press mold recipes [\#1219](https://github.com/NillerMedDild/Enigmatica6/issues/1219)
-   cannot craft most colored redstone-sensitive blocks from gauges & switches [\#1141](https://github.com/NillerMedDild/Enigmatica6/issues/1141)
-   Deepsoil Farmland can't be crafted like other Farmlands [\#1152](https://github.com/NillerMedDild/Enigmatica6/issues/1152)
-   Eidolon Rituals quest gives out BM Ash [\#1174](https://github.com/NillerMedDild/Enigmatica6/issues/1174)
-   Farmer's Delight knives not shown in fish fillet recipes [\#1343](https://github.com/NillerMedDild/Enigmatica6/issues/1343)
-   Farmers Delight Cooking Pot Recipes [\#1238](https://github.com/NillerMedDild/Enigmatica6/issues/1238)
-   Gloomgourd can't be cultivated in Botany Pots [\#1153](https://github.com/NillerMedDild/Enigmatica6/issues/1153)
-   Hellish Zombee have no flowers [\#1189](https://github.com/NillerMedDild/Enigmatica6/issues/1189)
-   IE Garden Cloche does not accept Phyto-grow [\#1160](https://github.com/NillerMedDild/Enigmatica6/issues/1160)
-   Item Dup Exploit: Mimicubes drop mimicked items if you have the Octopus Leg lost trinket equipped. [\#1281](https://github.com/NillerMedDild/Enigmatica6/issues/1281)
-   It is a downgrade to put vanilla bees in tier 3 apiary, compared to tier 2 [\#1175](https://github.com/NillerMedDild/Enigmatica6/issues/1175)
-   Lootr Chests/barrels not appear in the Campsites added by Artifact's mod [\#1230](https://github.com/NillerMedDild/Enigmatica6/issues/1230)
-   Mekanism Oredictionifcator Doesn't Appreciate Certain Tags [\#1110](https://github.com/NillerMedDild/Enigmatica6/issues/1110)
-   Mekanism Teleporter in the Nether [\#982](https://github.com/NillerMedDild/Enigmatica6/issues/982)
-   minecraft:flower_pot becomes invisible with flowers from byg mod [\#729](https://github.com/NillerMedDild/Enigmatica6/issues/729)
-   Mod guidebooks not placeable on Builder's Addition bookshelves [\#1069](https://github.com/NillerMedDild/Enigmatica6/issues/1069)
-   Morph-o-tool not switching to RFTools wrench when looking at RFtools blocks [\#1349](https://github.com/NillerMedDild/Enigmatica6/issues/1349)
-   Occultism Create crash [\#1314](https://github.com/NillerMedDild/Enigmatica6/issues/1314)
-   Powah: At long last fixed a heat sources issue, credit BlueAgent
-   Quark Chests Override Lootr Chests in The End [\#1197](https://github.com/NillerMedDild/Enigmatica6/issues/1197)
-   Reproducible crash with Backtools and Seals [\#1158](https://github.com/NillerMedDild/Enigmatica6/issues/1158)
-   Returning to main menu immediately leads to the multiplayer menu [\#1079](https://github.com/NillerMedDild/Enigmatica6/issues/1079)
-   Save Your Pets interferes with Occultism drikwing summoning method. [\#1293](https://github.com/NillerMedDild/Enigmatica6/issues/1293)
-   Server-Crash because of Ars_Nouveau [\#1295](https://github.com/NillerMedDild/Enigmatica6/issues/1295)
-   Some Eidolon recipes hidden in JEI on servers [\#1130](https://github.com/NillerMedDild/Enigmatica6/issues/1130)
-   Some Mekanism fluid recipes are not shown in JEI when using "Show Use" Key. [\#947](https://github.com/NillerMedDild/Enigmatica6/issues/947)
-   Some Servers Do Not Show Up Correctly On Client [\#824](https://github.com/NillerMedDild/Enigmatica6/issues/824)
-   Stonecutter plethora of same recipe [\#1182](https://github.com/NillerMedDild/Enigmatica6/issues/1182)
-   Tallow [\#1263](https://github.com/NillerMedDild/Enigmatica6/issues/1263)
-   Tetra's hammer not creatable with BYG Cika planks/hammers not searchable in JEI [\#1339](https://github.com/NillerMedDild/Enigmatica6/issues/1339)
-   Tetra crash/freeze when placing forge hammer [\#916](https://github.com/NillerMedDild/Enigmatica6/issues/916)
-   Tetra Extractor Unification [\#1245](https://github.com/NillerMedDild/Enigmatica6/issues/1245)
-   Thermal packing/unpacking Comb recipes and Vanilla Comb 3x3 [\#1303](https://github.com/NillerMedDild/Enigmatica6/pull/1303) ([Merlo17](https://github.com/Merlo17))
-   Travel anchor oddity [\#1111](https://github.com/NillerMedDild/Enigmatica6/issues/1111)
-   Typo in Mekanism Wind Generator quest [\#1161](https://github.com/NillerMedDild/Enigmatica6/issues/1161)
-   Undergarden mushrooms can't be placed in Deepsoil in Botany Pots [\#1151](https://github.com/NillerMedDild/Enigmatica6/issues/1151)
-   Unify Vegetable storage blocks [\#1260](https://github.com/NillerMedDild/Enigmatica6/issues/1260)
-   When you click on the quest for anything it crashes [\#1334](https://github.com/NillerMedDild/Enigmatica6/issues/1334)
-   Wrong EE ore being chosen for outputs [\#1266](https://github.com/NillerMedDild/Enigmatica6/issues/1266)
-   You can keep re-looting Lootr chests that are in minecarts. [\#1165](https://github.com/NillerMedDild/Enigmatica6/issues/1165)

**Some of the possible issues when updating an old world**

-   Refined Storage Extra Disks have been moved to a new mod, so existing disks will vanish.
-   Crashes/world corruption, especially if you were using BoP worldgen
-   Lack of end biomes
-   Countless errors in the console

### Enigmatica 6 v0.3.13

_Using Forge-1.16.5-36.0.10_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.3.13.txt)_

**Bug Fixes**

-   Removed the mod BackTools temporarily to fix a crash [\#1158](https://github.com/NillerMedDild/Enigmatica6/issues/1158)

### Enigmatica 6 v0.3.12: Industrial Foregoing Hotfix & Eidolon Quest Chapter

_Using Forge-1.16.5-36.0.10_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.3.12.txt)_

**Improvements/Changes**

-   Further decreased the spawn chance of Alex's Mobs Orca & Cockroach, as their numbers on servers grow too quickly.
-   Quests: Eidolon [\#1133](https://github.com/NillerMedDild/Enigmatica6/issues/1133)

**Bug Fixes**

-   Industrial foregoing issues after update to v0.3.11 [\#1145](https://github.com/NillerMedDild/Enigmatica6/issues/1145)
-   Titanium 1.16.5-3.2.6 causes crashes, 3.2.6.1 fixes it [\#1143](https://github.com/NillerMedDild/Enigmatica6/issues/1143)
-   Occultism Crafting errors [\#1131](https://github.com/NillerMedDild/Enigmatica6/issues/1131)
-   Akashic tome dupe bug with Occultism storage actuator [\#1064](https://github.com/NillerMedDild/Enigmatica6/issues/1064)
-   Bug: Fletching villagers cannot exist due to modified fletching tables (Fixed in previous version) [\#767](https://github.com/NillerMedDild/Enigmatica6/issues/767)

### Enigmatica 6 v0.3.11

_Using Forge-1.16.5-36.0.10_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.3.11.txt)_

#### This version restores The End for those who had lost it

**Improvements/Changes**

-   Added alloy recipes for Eidolon Pewter [\#1102](https://github.com/NillerMedDild/Enigmatica6/pull/1102) ([Merlo17](https://github.com/Merlo17))
-   Added automation for Building Gadgets construction paste [\#1129](https://github.com/NillerMedDild/Enigmatica6/pull/1129) ([Merlo17](https://github.com/Merlo17))
-   Add Glitterkelp to Insolator and Botany Pots [\#1108](https://github.com/NillerMedDild/Enigmatica6/pull/1108) ([MuteTiefling](https://github.com/MuteTiefling))
-   \[Suggestion\] Allow Iron Chest quests to be done with the upgrade [\#1076](https://github.com/NillerMedDild/Enigmatica6/issues/1076)
-   Botany Pot + Thermal Expansion Insulator recipe for Undergarden's Glitterkelp [\#1078](https://github.com/NillerMedDild/Enigmatica6/issues/1078)
-   BuildingGadgets: Construction Paste QoL [\#1128](https://github.com/NillerMedDild/Enigmatica6/issues/1128)
-   Create Building Gadget Pattern for a simple ThermoElectric Boiler [\#1094](https://github.com/NillerMedDild/Enigmatica6/pull/1094)
-   Machine alloying recipes for Eidolon Pewter [\#1099](https://github.com/NillerMedDild/Enigmatica6/issues/1099)
-   Quest for Mekanism sodium-based cooling/Thermoelectric boiler, and example boiler blueprint [\#1083](https://github.com/NillerMedDild/Enigmatica6/issues/1083)
-   Refined Storage Colored Crafters usable in Upgraded Crafter recipes [\#1091](https://github.com/NillerMedDild/Enigmatica6/issues/1091)
-   Unify candles under forge:candles tag [\#1135](https://github.com/NillerMedDild/Enigmatica6/pull/1135) ([theboo](https://github.com/theboo))

**Bug Fixes**

-   0.3.10 - Multiservo recipes for IE wire\(copper, electrum, etc\) only take Tinker's Mechworks ingots, not Enigmatica Ingots [\#1121](https://github.com/NillerMedDild/Enigmatica6/issues/1121)
-   0.3.10 - Server that was upgraded from 0.3.9, the end seems to be non-functional [\#1090](https://github.com/NillerMedDild/Enigmatica6/issues/1090)
-   Blacklist Mimicubes from spawners [\#1109](https://github.com/NillerMedDild/Enigmatica6/pull/1109) ([MuteTiefling](https://github.com/MuteTiefling))
-   Eidolon ingots and nuggets hidden in JEI [\#1100](https://github.com/NillerMedDild/Enigmatica6/issues/1100)
-   End & Nether Biomes not spawning [\#1075](https://github.com/NillerMedDild/Enigmatica6/issues/1075)
-   Fixed RS Grids not showing up in JEI and allow for any colored crafter to be used in recipes [\#1096](https://github.com/NillerMedDild/Enigmatica6/pull/1096) ([Merlo17](https://github.com/Merlo17))
-   Randomized Stone and Cobblestone Catalysts are not showing in JEI on Servers [\#1097](https://github.com/NillerMedDild/Enigmatica6/issues/1097)
-   Refined Storage Fluid Grid not shown in JEI [\#1127](https://github.com/NillerMedDild/Enigmatica6/issues/1127)
-   Updated thermal IE wire recipes to accept EE ingots [\#1122](https://github.com/NillerMedDild/Enigmatica6/pull/1122) ([Merlo17](https://github.com/Merlo17))

### Enigmatica 6 v0.3.10

_Using Forge-1.16.5-36.0.1_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.3.10.txt)_

**Now on Minecraft 1.16.5! You can update existing worlds without issues.**

**Improvements/Changes**

-   Removed Thermal Fire Charge recipes for alloys, so players have to use more interesting mechanics over crafting.
-   Removed iron tags from rusty iron, to reduce clutter in JEI [#1051](https://github.com/NillerMedDild/Enigmatica6/pull/1051) ([Merlo17](https://github.com/Merlo17))
-   hidden Refined Storage colored blocks from JEI [\#1051](https://github.com/NillerMedDild/Enigmatica6/pull/1051) ([Merlo17](https://github.com/Merlo17))
-   Changed Immersive Engineering's Brass recipes to bring in line with the rest of the pack's mods [\#1046](https://github.com/NillerMedDild/Enigmatica6/pull/1046) ([Merlo17](https://github.com/Merlo17))

**Bug Fixes**

-   Server Crash after modpack update [\#1074](https://github.com/NillerMedDild/Enigmatica6/issues/1074)
-   "Nou're" [\#1073](https://github.com/NillerMedDild/Enigmatica6/issues/1073)
-   Please add extrastorage to mekanism cardboardModBlacklist [\#1070](https://github.com/NillerMedDild/Enigmatica6/issues/1070)
-   KubeJS script errors on servers running 0.3.9 [\#1050](https://github.com/NillerMedDild/Enigmatica6/issues/1050)
-   Broken Undergarden [\#1049](https://github.com/NillerMedDild/Enigmatica6/issues/1049)
-   Multiblock Centrifuge Bug [\#1048](https://github.com/NillerMedDild/Enigmatica6/issues/1048)
-   Occultism Ores Generating [\#1045](https://github.com/NillerMedDild/Enigmatica6/issues/1045)
-   Different Brass Alloy Recipes [\#1043](https://github.com/NillerMedDild/Enigmatica6/issues/1043)
-   Wither Bee keeps killing itself \(Fixed by setting size to 1 temporarily\) [\#1003](https://github.com/NillerMedDild/Enigmatica6/issues/1003)
-   ResourcefulBees getting stuck in apiary walls [\#900](https://github.com/NillerMedDild/Enigmatica6/issues/900)
-   Create Empty Placeholders for Removed Scripts [\#1059](https://github.com/NillerMedDild/Enigmatica6/pull/1059) ([MuteTiefling](https://github.com/MuteTiefling))
-   Hide from JEI script fix and Akashic Tome fixes [\#1047](https://github.com/NillerMedDild/Enigmatica6/pull/1047) ([Merlo17](https://github.com/Merlo17))
-   Updates deleting JEI bookmarks [\#1065](https://github.com/NillerMedDild/Enigmatica6/issues/1065)

### Enigmatica 6 v0.3.9

_Using Forge-1.16.4-35.1.37_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.3.9.txt)_

**Improvements/Changes**

-   AS Starmetal suggestions [\#1025](https://github.com/NillerMedDild/Enigmatica6/issues/1025)
-   Crushing to Dye - Recipes Normalized and Outputs Expanded [\#1036](https://github.com/NillerMedDild/Enigmatica6/pull/1036) ([MuteTiefling](https://github.com/MuteTiefling))
-   Custom recipe to make candles from beeswax [\#1026](https://github.com/NillerMedDild/Enigmatica6/issues/1026)
-   Tallow Unification [\#1020](https://github.com/NillerMedDild/Enigmatica6/issues/1020)

**Bug Fixes**

-   Loot Duplication exploit [\#1037](https://github.com/NillerMedDild/Enigmatica6/issues/1037)
-   Stone Bricks not valid Apiary block [\#1033](https://github.com/NillerMedDild/Enigmatica6/issues/1033)
-   Akashic Tome and Morph Tool not behaving properly [\#1032](https://github.com/NillerMedDild/Enigmatica6/issues/1032)
-   Biomes of Plenty sandstone variant recipes missing from custom stone gen. [\#1028](https://github.com/NillerMedDild/Enigmatica6/issues/1028)
-   Crash when putting labeled crate into sophisticated backpack. [\#1010](https://github.com/NillerMedDild/Enigmatica6/issues/1010)

### Enigmatica 6 v0.3.8

_Using Forge-1.16.4-35.1.37_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.3.8.txt)_

**New Mods!**

-   Lootr
-   Tome of Blood
-   Undergarden/Tetra Patch

**Improvements/Changes**

-   Bee Update \(Biomes, Secondary Outputs, and Custom Honey\) [\#996](https://github.com/NillerMedDild/Enigmatica6/pull/996) ([Ridanisaurus](https://github.com/Ridanisaurus))
-   Blood Magic Processing Update, now using Blood Magic style ingredients [\#1002](https://github.com/NillerMedDild/Enigmatica6/pull/1002) ([MuteTiefling](https://github.com/MuteTiefling))
-   Buff Occultism Storage [\#1013](https://github.com/NillerMedDild/Enigmatica6/pull/1013) ([theboo](https://github.com/theboo))
-   Creosote Unification [\#999](https://github.com/NillerMedDild/Enigmatica6/pull/999) ([MuteTiefling](https://github.com/MuteTiefling))
-   Honey Unification [\#1007](https://github.com/NillerMedDild/Enigmatica6/pull/1007) ([MuteTiefling](https://github.com/MuteTiefling))
-   Quests: Create [\#569](https://github.com/NillerMedDild/Enigmatica6/issues/569)
-   Quests: Occultism [\#659](https://github.com/NillerMedDild/Enigmatica6/issues/659)
-   Suggestion: Add Use to Thermal Creosote [\#988](https://github.com/NillerMedDild/Enigmatica6/issues/988)
-   Suggestion: Unify honey types [\#1001](https://github.com/NillerMedDild/Enigmatica6/issues/1001)
-   Super Secret Occultism Loot of Doom \(No peaking!\) [\#1018](https://github.com/NillerMedDild/Enigmatica6/pull/1018) ([MuteTiefling](https://github.com/MuteTiefling))
-   Tetra: Astral Sorcery Compatibility [\#600](https://github.com/NillerMedDild/Enigmatica6/issues/600)
-   Tetra: Create Compatibility [\#599](https://github.com/NillerMedDild/Enigmatica6/issues/599)
-   Tetra: Occultism Compatibility [\#658](https://github.com/NillerMedDild/Enigmatica6/issues/658)

**Bug Fixes**

-   Botania's "Spark Augmenter banner patterns" are bugged [\#758](https://github.com/NillerMedDild/Enigmatica6/issues/758)
-   Cannot craft signpost with BYF planks [\#987](https://github.com/NillerMedDild/Enigmatica6/issues/987)
-   Crashing when opening chat [\#965](https://github.com/NillerMedDild/Enigmatica6/issues/965)
-   Create: Chocolate and Honey are showing as direct replacements for water in many machines [\#559](https://github.com/NillerMedDild/Enigmatica6/issues/559)
-   Create Handheld Blockzapper Requires Create Brass [\#991](https://github.com/NillerMedDild/Enigmatica6/issues/991)
-   Gears are reversed in the Metal Press [\#1011](https://github.com/NillerMedDild/Enigmatica6/issues/1011)
-   Incompletable quest in Immersive Engineering due to unobtainable item [\#992](https://github.com/NillerMedDild/Enigmatica6/issues/992)
-   Locking a villager's trades with item routers [\#853](https://github.com/NillerMedDild/Enigmatica6/issues/853)
-   Mekanism Crusher missing recipes. [\#993](https://github.com/NillerMedDild/Enigmatica6/issues/993)
-   Memory Leak with C&B [\#983](https://github.com/NillerMedDild/Enigmatica6/issues/983)
-   Nature's Aura Ore Restructuring - remove non EE variants, attempt to reduce sulfur spawn rate [\#1021](https://github.com/NillerMedDild/Enigmatica6/pull/1021) ([MuteTiefling](https://github.com/MuteTiefling))
-   Reduced Sulfur ore weight of Astral Sorcery Mineralis ritual [\#1005](https://github.com/NillerMedDild/Enigmatica6/issues/1005)
-   Reduced weight of Sulfur Ore generated by Nature's Aura [\#1016](https://github.com/NillerMedDild/Enigmatica6/pull/1016) ([MuteTiefling](https://github.com/MuteTiefling))
-   Removed Create/Eidolon/Occultism Ores from the Astral Sorcery Mineralis Ritual [\#1019](https://github.com/NillerMedDild/Enigmatica6/issues/1019)
-   RGBee comb missing centrifuge recipe [\#910](https://github.com/NillerMedDild/Enigmatica6/issues/910)
-   Thermal Induction Smelter missing all alloy recipes [\#979](https://github.com/NillerMedDild/Enigmatica6/issues/979)
-   Wrong quest description for Tier 1 Beehive [\#977](https://github.com/NillerMedDild/Enigmatica6/issues/977)

### Enigmatica 6 v0.3.7

_Using Forge-1.16.4-35.1.37_ | _[Mod Updates](https://github.com/NillerMedDild/Enigmatica6/blob/master/changelogs/CHANGELOG_MODS_0.3.7.txt)_

**New Mods!**

-   Advanced Hook Launchers
-   Akashic Tome
-   ForgeEndertech
-   Just Enough Professions (JEP)
-   Morph-o-Tool
-   Ping
-   YUNG's API (Forge)
-   spark

**Improvements/Changes**

-   Added botany pots compat for Undergarten plants and soils [\#945](https://github.com/NillerMedDild/Enigmatica6/pull/945) ([Merlo17](https://github.com/Merlo17))
-   Added create compat for alloys [\#954](https://github.com/NillerMedDild/Enigmatica6/pull/954) ([Merlo17](https://github.com/Merlo17))
-   Added Create Steel Processing [\#969](https://github.com/NillerMedDild/Enigmatica6/pull/969) ([MuteTiefling](https://github.com/MuteTiefling))
-   Additional Apiary Glass Types (For realsies this time) [\#871](https://github.com/NillerMedDild/Enigmatica6/issues/871)
-   Akashic Tome and Morph Tool additions [\#930](https://github.com/NillerMedDild/Enigmatica6/pull/930) ([Merlo17](https://github.com/Merlo17))
-   Apotheosis: Nerfed Apotheosis spawners:
    -   Max Spawn Count (Fermented Spider Eyes modifier) reduced to 5, down from 20
    -   The minimum delay Sugar can set a Spawner to is now 5 seconds
    -   Disabled the Clock (maximum delay modifier)
    -   Max nearby entities, reduced to max 10 down from max 40
-   Ars Nouveau Tweaks [\#967](https://github.com/NillerMedDild/Enigmatica6/pull/967) ([MuteTiefling](https://github.com/MuteTiefling))
-   Buffed Tetra custom materials [\#970](https://github.com/NillerMedDild/Enigmatica6/pull/970) ([Merlo17](https://github.com/Merlo17))
-   Crushing Recipes Update [\#922](https://github.com/NillerMedDild/Enigmatica6/pull/922) ([MuteTiefling](https://github.com/MuteTiefling))
-   Disabled Quark/Thermal Carrot, Potato and Beetroot crates, replaced by the new Farmer's Delight variants.
-   Made Apotheosis Over-enchanting more reasonable [\#966](https://github.com/NillerMedDild/Enigmatica6/pull/966) ([MuteTiefling](https://github.com/MuteTiefling))
-   Recipes for BYG Grass/dirt variants [\#935](https://github.com/NillerMedDild/Enigmatica6/issues/935)
-   Stopped Thermal Bituminous sands from generating
-   Undergarden Flowers/Mushrooms and Botany Pots [\#941](https://github.com/NillerMedDild/Enigmatica6/issues/941)

**Bug Fixes**

-   Alex's Mobs Excessive Spawning [\#925](https://github.com/NillerMedDild/Enigmatica6/issues/925)
-   Apotheosis Spawners are Overpowered [\#963](https://github.com/NillerMedDild/Enigmatica6/issues/963)
-   \[Bug\] Blood Magic Crash with Mek [\#682](https://github.com/NillerMedDild/Enigmatica6/issues/682)
-   \[Bug\] Globetrotter's Sash makes the elevators from Elevator Mod inconsistent [\#720](https://github.com/NillerMedDild/Enigmatica6/issues/720)
-   Biomes you will Go - Woods [\#927](https://github.com/NillerMedDild/Enigmatica6/issues/927)
-   Bits, from chisel and bits, wont place currectly [\#818](https://github.com/NillerMedDild/Enigmatica6/issues/818)
-   Blacklist Ars Nouveau Tools from Ultimine [\#972](https://github.com/NillerMedDild/Enigmatica6/pull/972) ([MuteTiefling](https://github.com/MuteTiefling))
-   Blacklist Dark Vex in PNC Spawner [\#904](https://github.com/NillerMedDild/Enigmatica6/pull/904) ([MuteTiefling](https://github.com/MuteTiefling))
-   Botania materials are duplicated in Tetra [\#960](https://github.com/NillerMedDild/Enigmatica6/issues/960)
-   Bug: Fletching villagers cannot exist due to modified fletching tables [\#767](https://github.com/NillerMedDild/Enigmatica6/issues/767)
-   Building Gadget templates different from quest parts [\#946](https://github.com/NillerMedDild/Enigmatica6/issues/946)
-   Dark Utilities Mod Filter [\#923](https://github.com/NillerMedDild/Enigmatica6/issues/923)
-   Disabled JAOPCA's Ender/Ender Pearl/End Stone Storage Blocks
-   Dupe Bug with 2x2 Crafting [\#653](https://github.com/NillerMedDild/Enigmatica6/issues/653)
-   Duplicate Enchanting Apparatus Recipes [\#598](https://github.com/NillerMedDild/Enigmatica6/issues/598)
-   Duplication bug for Buildersaddition [\#896](https://github.com/NillerMedDild/Enigmatica6/issues/896)
-   Duplication Bug [\#957](https://github.com/NillerMedDild/Enigmatica6/issues/957)
-   Dustrial Decor - fix uncraftable rusty iron [\#924](https://github.com/NillerMedDild/Enigmatica6/pull/924) ([MuteTiefling](https://github.com/MuteTiefling))
-   Eidolon Enchantment Table breaks Apotheosis advancements [\#756](https://github.com/NillerMedDild/Enigmatica6/issues/756)
-   Fix for missing Create Gearshift recipes [\#937](https://github.com/NillerMedDild/Enigmatica6/pull/937) ([MuteTiefling](https://github.com/MuteTiefling))
-   IF breakers can break anything [\#859](https://github.com/NillerMedDild/Enigmatica6/issues/859)
-   It is impossible to pick up supplementaries safe even if it is yours [\#897](https://github.com/NillerMedDild/Enigmatica6/issues/897)
-   Lost Trinkets - Karma villager discount does not consider native discounts [\#898](https://github.com/NillerMedDild/Enigmatica6/issues/898)
-   Mining gadget can't mine redstone [\#936](https://github.com/NillerMedDild/Enigmatica6/issues/936)
-   Missing recipes for grinding ingots and gems to dust. [\#909](https://github.com/NillerMedDild/Enigmatica6/pull/909) ([MuteTiefling](https://github.com/MuteTiefling))
-   Naturally spawned collection crystals from Astral Sorcery can be mined [\#707](https://github.com/NillerMedDild/Enigmatica6/issues/707)
-   No recipe for adjustable chain gearshift [\#893](https://github.com/NillerMedDild/Enigmatica6/issues/893)
-   Osmium Ingot \> Dust recipe missing from Thermal Pulverizer [\#906](https://github.com/NillerMedDild/Enigmatica6/issues/906)
-   Possible to void nuclear products from Mekanism [\#883](https://github.com/NillerMedDild/Enigmatica6/issues/883)
-   QuantumStorage doesn’t retain inventory on upgrade [\#908](https://github.com/NillerMedDild/Enigmatica6/issues/908)
-   Quest typo in "Tier 1 Beehive" - Missing the A in Apiaries [\#938](https://github.com/NillerMedDild/Enigmatica6/issues/938)
-   Refined Obsidian is unbalanced [\#907](https://github.com/NillerMedDild/Enigmatica6/issues/907)
-   RFToolsControl workbench should use tags [\#931](https://github.com/NillerMedDild/Enigmatica6/issues/931)
-   RFToolsControl workbench uses tags now [\#932](https://github.com/NillerMedDild/Enigmatica6/pull/932) ([MelanX](https://github.com/MelanX))
-   Server crash after flying with paraglider over newly generated chunk [\#882](https://github.com/NillerMedDild/Enigmatica6/issues/882)
-   Some ore chunks no longer work in Mek machines for ore multiplying [\#917](https://github.com/NillerMedDild/Enigmatica6/issues/917)
-   Ultimate Powah! achievement bug [\#952](https://github.com/NillerMedDild/Enigmatica6/issues/952)
-   unable to insert repeater into glyph press [\#943](https://github.com/NillerMedDild/Enigmatica6/issues/943)
-   Update basic_fusion_reactor BG schematic [\#956](https://github.com/NillerMedDild/Enigmatica6/pull/956) ([MuteTiefling](https://github.com/MuteTiefling))
-   Update Broken Jaopca Blacklist config [\#919](https://github.com/NillerMedDild/Enigmatica6/pull/919) ([MuteTiefling](https://github.com/MuteTiefling))
-   Vanilla chest recipe not using different variants of plank. [\#959](https://github.com/NillerMedDild/Enigmatica6/issues/959)
-   Visual glitch with Chunk borders [\#466](https://github.com/NillerMedDild/Enigmatica6/issues/466)
-   World/Server crashes w/ dark vex from Dark Egg & PneumaticCraft [\#903](https://github.com/NillerMedDild/Enigmatica6/issues/903)
-   Wrong order of quests for uranium. [\#968](https://github.com/NillerMedDild/Enigmatica6/issues/968)

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
