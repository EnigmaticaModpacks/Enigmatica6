# Enigmatica6 0.5.19⟶Enigmatica6 0.5.20

## Updated

### [AppleSkin](https://www.curseforge.com/minecraft/mc-mods/appleskin) ([appleskin-forge-mc1.16.x-2.1.0.jar](https://www.curseforge.com/minecraft/mc-mods/appleskin/files/3395800)⟶[appleskin-forge-mc1.16.x-2.2.0.jar](https://www.curseforge.com/minecraft/mc-mods/appleskin/files/3512372))

#### [appleskin-forge-mc1.16.x-2.2.0.jar](https://www.curseforge.com/minecraft/mc-mods/appleskin/files/3512372)

* Fix crash when food's regeneration amplifier is huge ([#149](https://github.com/squeek502/AppleSkin/pull/149), thanks [@sagesse-cn](https://github.com/sagesse-cn))
* Fix potential infinite loop when calculating health restored by food ([#155](https://github.com/squeek502/AppleSkin/pull/155), thanks [@sagesse-cn](https://github.com/sagesse-cn))

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/appleskin/files/all)

### [Portable Stonecutter](https://www.curseforge.com/minecraft/mc-mods/portable-stonecutter) ([Portable Stonecutter-1.16.4-1.3.4](https://www.curseforge.com/minecraft/mc-mods/portable-stonecutter/files/3221966)⟶[Portable Stonecutter-1.16.5-1.3.5](https://www.curseforge.com/minecraft/mc-mods/portable-stonecutter/files/3512385))

#### [Portable Stonecutter-1.16.5-1.3.5](https://www.curseforge.com/minecraft/mc-mods/portable-stonecutter/files/3512385)

* Fixed a bug with JEI integration happening in FTB OceanBlock (all thanks to AleksandrXamlo on github for helping me tracking it down)
* Updated minecraft mappings and forge version in preparation for a coming update

### [Repurposed Structures (Forge)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures) ([Repurposed Structures v3.3.4 (1.16.5 MC)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures/files/3499509)⟶[Repurposed Structures v3.4.0 (1.16.5 MC)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures/files/3511911))

#### [Repurposed Structures v3.4.0 (1.16.5 MC)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures/files/3511911)

(V.3.4.0 Changes) (1.16.5 Minecraft)

Woodland Mansions:

All RS Mansions now spawns pieces by using template pools. This means you can edit the pool files by datapack to remove rooms you do not want to spawn. Or datapack the pools to make structure processors run for mansion pieces to randomize blocks. Or even datapack using RS's pool_addition folder to inject new rooms into mansions! Just make sure your new mansion pieces matches the size of the other pieces in the same pool. No Jigsaw Block needed since Mansions are not Jigsaw Structures.

1x1_b5 room now spawns in RS mansions unlike vanilla which is bugged lol. [https://bugs.mojang.com/browse/MC-240121](https://bugs.mojang.com/browse/MC-240121)

Adjusted looks of Savanna mansion to make it look nicer.

Fixed vanilla bug in RS mansions where terrain can be found floating on second and third floor hallways of the mansions. [https://bugs.mojang.com/browse/MC-107594](https://bugs.mojang.com/browse/MC-107594)

Fixed vanilla mansion bug for RS mansions where there can be a hole in the second floor's wall to the outside if there's a 3rd floor above. [https://bugs.mojang.com/browse/MC-240221](https://bugs.mojang.com/browse/MC-240221)

Fixed vanilla mansion bug for RS mansions where there can be a 3 block high hole on outside wall right side where 2nd floor meets the 3rd floor. [https://bugs.mojang.com/browse/MC-110098](https://bugs.mojang.com/browse/MC-110098)

Outposts:

Crimson, Warped, and Nether Brick Outposts now can have target pieces with either Wither Skeleton Skulls or regular Skeleton Skulls. The Wither Skeleton Skull piece only has a 23% chance of appearing for a single Outpost. Before, Nether Brick Outpost had a 50% chance of spawning one.

Misc:

Adjusted several loot table files.

Compat:

Added a mixin to undo a Charm's structure processor for non-charm buildings so that Charm does not break several RS structures that uses Data Mode Structure Blocks.

(V.3.3.4 Changes) (1.16.5 Minecraft)

Mod Compat:

Adjusted piece spawn limiting for Tidbits compat datapack.

(V.3.3.3 Changes) (1.16.5 Minecraft)

Mod Compat:

Modded loot will be imported into Better Stronghold Compat datapack's loot tables now.

Misc:

Fixed the structure offsetting to actually work for and only for RS strongholds so they do not get cutoff by world bottom.

(V.3.3.2 Changes) (1.16.5 Minecraft)

Dungeons:

Added shulkerBoxInEndDungeons config option to let users make End Dungeons spawn chests instead of Shulker Boxes if set to false. Configuredfeatures are unable to be overridden by datapack due to a bad Forge hook placement. Hence this config option as a workaround.

Villages:

Slightly adjusted look of Church (temple) piece in Mushroom Villages.

Misc:

RS structures that would've been cut off by world bottom will be offset upward so that they are now longer cut off. (Helps prevents End-themed Better Stronghold from being cut off when using Better Stronghold Compat datapack)

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



Generated using [ChangelogGenerator 2.0.0-pre10](https://github.com/TheRandomLabs/ChangelogGenerator).
