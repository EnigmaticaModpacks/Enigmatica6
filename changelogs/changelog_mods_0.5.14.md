# Enigmatica6 0.5.13⟶Enigmatica6 0.5.14

## Updated

### [Chisels & Bits](https://www.curseforge.com/minecraft/mc-mods/chisels-bits) ([C&B 0.3.4](https://www.curseforge.com/minecraft/mc-mods/chisels-bits/files/3234842)⟶[Rebuild: 1.0.5](https://www.curseforge.com/minecraft/mc-mods/chisels-bits/files/3472725))

#### [Rebuild: 1.0.5](https://www.curseforge.com/minecraft/mc-mods/chisels-bits/files/3472725)

Fix the fact that when a change occurred in a neighboring model, the targeted model was not updated, causing potentially see through sides.

#### [5 more entries](https://www.curseforge.com/minecraft/mc-mods/chisels-bits/files/all)

### [Diet (Forge)](https://www.curseforge.com/minecraft/mc-mods/diet) ([diet-forge-1.16.5-0.41.jar](https://www.curseforge.com/minecraft/mc-mods/diet/files/3464340)⟶[diet-forge-1.16.5-0.43.jar](https://www.curseforge.com/minecraft/mc-mods/diet/files/3472677))

#### [diet-forge-1.16.5-0.43.jar](https://www.curseforge.com/minecraft/mc-mods/diet/files/3472677)

Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to the format [MCVERSION-MAJORMOD.MAJORAPI.MINOR.PATCH](https://mcforge.readthedocs.io/en/1.15.x/conventions/versioning/).

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

[1.16.5-0.37] - 2021.08.02

Added

* Added 5-food-group support for:
* Atum 2

[(285 more lines)](https://www.curseforge.com/minecraft/mc-mods/diet/files/3472677)

### [Macaw's Fences and Walls](https://www.curseforge.com/minecraft/mc-mods/macaws-fences-and-walls) ([[ 1.0.0 / 1.16.5] Macaw's Fences & Walls](https://www.curseforge.com/minecraft/mc-mods/macaws-fences-and-walls/files/3231567)⟶[[ 1.0.1 / 1.16.5] Macaw's Fences and Walls](https://www.curseforge.com/minecraft/mc-mods/macaws-fences-and-walls/files/3472412))

#### [[ 1.0.1 / 1.16.5] Macaw's Fences and Walls](https://www.curseforge.com/minecraft/mc-mods/macaws-fences-and-walls/files/3472412)

* Fixed recipe overlapping for Horse Fence with Crayfish's Upgraded fence

### [Occultism](https://www.curseforge.com/minecraft/mc-mods/occultism) ([occultism-1.13.3.jar](https://www.curseforge.com/minecraft/mc-mods/occultism/files/3470116)⟶[occultism-1.14.1.jar](https://www.curseforge.com/minecraft/mc-mods/occultism/files/3472626))

#### [occultism-1.14.1.jar](https://www.curseforge.com/minecraft/mc-mods/occultism/files/3472626)

[Automated Build]

Changelog for this build: [https://github.com/klikli-dev/occultism/wiki/1.14.1](https://github.com/klikli-dev/occultism/wiki/1.14.1)

Find changes for all versions at [https://github.com/klikli-dev/occultism/releases](https://github.com/klikli-dev/occultism/releases)

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/occultism/files/all)

### [Selene Lib](https://www.curseforge.com/minecraft/mc-mods/selene) ([selene-1.16.5-1.7.1.jar](https://www.curseforge.com/minecraft/mc-mods/selene/files/3464540)⟶[selene-1.16.5-1.7.2.jar](https://www.curseforge.com/minecraft/mc-mods/selene/files/3472679))

#### [selene-1.16.5-1.7.2.jar](https://www.curseforge.com/minecraft/mc-mods/selene/files/3472679)

Fixed interaction with fluid tanks that allowed to incorrectly mix up fluids that weren't of the same type. Fixed some water fluid attributes

Generated using [ChangelogGenerator 2.0.0-pre10](https://github.com/TheRandomLabs/ChangelogGenerator).
