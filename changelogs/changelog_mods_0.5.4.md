# Enigmatica6 0.5.3⟶Enigmatica6 0.5.4

## Updated

### [Occultism](https://www.curseforge.com/minecraft/mc-mods/occultism) ([occultism-1.5.3.jar](https://www.curseforge.com/minecraft/mc-mods/occultism/files/3373996)⟶[occultism-1.5.4.jar](https://www.curseforge.com/minecraft/mc-mods/occultism/files/3374749))

#### [occultism-1.5.4.jar](https://www.curseforge.com/minecraft/mc-mods/occultism/files/3374749)

[Automated Build]

Changelog for this build: [https://github.com/klikli-dev/occultism/wiki/1.5.4](https://github.com/klikli-dev/occultism/wiki/1.5.4)

Find changes for all versions at [https://github.com/klikli-dev/occultism/releases](https://github.com/klikli-dev/occultism/releases)

### [Repurposed Structures (Forge)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures) ([Repurposed Structures v2.7.6 (1.16.5 MC)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures/files/3367262)⟶[Repurposed Structures v2.7.7 (1.16.5 MC)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures/files/3374303))

#### [Repurposed Structures v2.7.7 (1.16.5 MC)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures/files/3374303)

(V.2.7.7 Changes) (1.16.5 Minecraft)

Mineshafts:

* Fixed id for Swamp Mineshafts from "repurposed_structures:mineshaft_swamp_forest" to "repurposed_structures:mineshaft_swamp"

(V.2.7.6 Changes) (1.16.5 Minecraft)

Misc:

* Decided to bite the bullet and implement the #7777 Forge PR into my mod directly [https://github.com/MinecraftForge/MinecraftForge/pull/7777](https://github.com/MinecraftForge/MinecraftForge/pull/7777) I take full responsibility for any noise setting issues this cause for other mods but honestly, no mod should be negatively hurt by it. Instead, this PR-implemented-as-mixin will make Repurposed Structures's and a few other mod's dimensional whitelisting/blacklisting now work properly for structures.

Advancements:

* All advancements has been condensed. Now there's one advancement for finding all variants of one structure type. For example, you have to find and enter all Repurposed Structures villages to get the advancement for RS Villages.

Bastions:

*

Fixed Underground Bastion config max value so it is 10001. Now you can make Underground Bastion rarer and properly turn them off as I check for 10001 to know when to not spawn them.

*

Fixed Bastion Treasure room chest not having loot

Nether Cities:

* The topmost small tower tops will now spawn Wither Skeletons with Bows

Pyramids:

*

Mushroom Pyramid's pit is slightly adjusted to not be so cramped

*

Slightly adjusted Icy Pyramid's pit to make it harder to not set off trap

*

Added Chains to Ocean Pyramids so the Drowned won't walk into the Magma Block and take damage

Mineshafts:

* Lowered default config value for the max height of Ocean mineshafts from 31 to 26 to reduce amount of Ocean Mineshafts exposed on ocean floor.

(V.2.7.5 Changes) (1.16.5 Minecraft)

Misc:

* Fixed serverside crash when trying to use the pool_addition merger system.

(V.2.7.4 Changes) (1.16.5 Minecraft)

Mansions:

* Adjusted RS Mansions so their biome check doesn't conflict with Caves and Cliffs Backport mod by BlackGear.

(V.2.7.3 Changes) (1.16.5 Minecraft)

Configs:

* Fixed Blacklisted Outpost Biomes config not being in right config section

Misc:

* Silenced possible logspam about missing structure pieces that was removed in v2.4.

(V.2.7.2 Changes) (1.16.5 Minecraft)

Misc:

* Fixed a crash when a feature spawned from a structure tries to check if it is within structure bounds.

Villages:

*

Remove entry in Zombie Jungle Village Pool that was pointing to a non-existent nbt file.

*

Fixed butcher house pieces not spawning in zombie swamp villages.

(V.2.7.1 Changes) (1.16.5 Minecraft)

Misc:

* Fixed close air off processor not separating the structure's fluid from mismatched environmental fluids as well. Ocean Mineshafts should no longer have floating lava at edges at times anymore.

Lang:

*

Special thanks to invalid2tk for the Portuguese translations!

*

[(92 more lines)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures/files/3374303)

Generated using [ChangelogGenerator 2.0.0-pre10](https://github.com/TheRandomLabs/ChangelogGenerator).
