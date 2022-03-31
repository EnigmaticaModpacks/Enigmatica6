# Enigmatica6 1.1.1⟶Enigmatica6 1.1.2

## Updated

### [Curios API (Forge)](https://www.curseforge.com/minecraft/mc-mods/curios) ([curios-forge-1.16.5-4.0.8.1.jar](https://www.curseforge.com/minecraft/mc-mods/curios/files/3661903)⟶[curios-forge-1.16.5-4.0.8.2.jar](https://www.curseforge.com/minecraft/mc-mods/curios/files/3725386))

#### [curios-forge-1.16.5-4.0.8.2.jar](https://www.curseforge.com/minecraft/mc-mods/curios/files/3725386)

Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Forge Recommended Versioning](https://mcforge.readthedocs.io/en/latest/conventions/versioning/).

[1.16.5-4.0.8.2] - 2022.03.31

Changed

* Updated fr_fr.json localization (thanks HollishKid!) [#228](https://github.com/TheIllusiveC4/Curios/pull/228)

Fixed

* Fixed slot modifiers incorrectly persisting in some cases

[1.16.5-4.0.8.1] - 2022.02.25

Changed

* Updated ko_kr.json localization (thanks PixVoxel!) [#223](https://github.com/TheIllusiveC4/Curios/pull/223)

Fixed

* Fixed curios being unequipped when used with additional slots and relogging [#218](https://github.com/TheIllusiveC4/Curios/issues/218)
* Fixed NPE crash with certain mods that implement their own Curios providers [#225](https://github.com/TheIllusiveC4/Curios/issues/225)

[1.16.5-4.0.8.0] - 2021.01.18

Added

* Added uk_ua.json localization (thanks Sushomeister!)
* Added new entity selector option, curios=. More information at the [wiki](https://github.com/TheIllusiveC4/Curios/wiki/Commands#entity-selector-options).

Changed

* Updated ru_ru.json localization (thanks Sushomeister!)

[1.16.5-4.0.7.0] - 2021.01.08

Added

* [API] Added findFirstCurio and findCurios methods to ICuriosHelper

Changed

* Updated ko_kr localization (thanks mindy15963!) [#200](https://github.com/TheIllusiveC4/Curios/pull/200)

Deprecated

* [API] Deprecated findEquippedCurio methods in ICuriosHelper

Fixed

* Fixed knockback resistance tooltips not being formatted correctly
* Fixed clearing inventory via Creative 'x' button resulting in lingering attribute modifiers when equipped

[1.16.5-4.0.6.8] - 2021.12.27

Fixed

* Fixed client-side syncing errors when applying slot modifiers to slots with base size 0
* Fixed slot amount changes persistent when not applicable

[1.16.5-4.0.6.7] - 2021.12.19

Fixed

* Fixed slot amount changes not persisting when applicable
* Fixed slot amount changes causing loading errors [#195](https://github.com/TheIllusiveC4/Curios/issues/195)

[1.16.5-4.0.6.6] - 2021.12.15

Changed

* [API] ICurio#canEquipFromUse and ICurio#onEquipFromUse methods are now called both client-side and server-side (previously server-side only)

Fixed

* Fixed curio items not calling their use logic client-side [#192](https://github.com/TheIllusiveC4/Curios/issues/192)

[1.16.5-4.0.6.5] - 2021.12.05

Fixed

* Fixed crash with client-side player entities [#189](https://github.com/TheIllusiveC4/Curios/issues/189)

[1.16.5-4.0.6.4] - 2021.12.02

Fixed

* Fixed crash when running data generation in development environments [#188](https://github.com/TheIllusiveC4/Curios/issues/188)

[1.16.5-4.0.6.3] - 2021.12.01

[(204 more lines)](https://www.curseforge.com/minecraft/mc-mods/curios/files/3725386)

### [McJtyLib](https://www.curseforge.com/minecraft/mc-mods/mcjtylib) ([McJtyLib - 1.16-5.1.4](https://www.curseforge.com/minecraft/mc-mods/mcjtylib/files/3641836)⟶[McJtyLib - 1.16-5.1.5](https://www.curseforge.com/minecraft/mc-mods/mcjtylib/files/3725412))

#### [McJtyLib - 1.16-5.1.5](https://www.curseforge.com/minecraft/mc-mods/mcjtylib/files/3725412)

McJtyLib 1.16-5.1.5

### [Pretty Pipes](https://www.curseforge.com/minecraft/mc-mods/pretty-pipes) ([PrettyPipes-1.9.7.jar](https://www.curseforge.com/minecraft/mc-mods/pretty-pipes/files/3724328)⟶[PrettyPipes-1.9.8.jar](https://www.curseforge.com/minecraft/mc-mods/pretty-pipes/files/3724799))

#### [PrettyPipes-1.9.8.jar](https://www.curseforge.com/minecraft/mc-mods/pretty-pipes/files/3724799)

* Fixed a crash when requesting items without an NBT tag

Generated using [ChangelogGenerator 2.0.0-pre10](https://github.com/TheRandomLabs/ChangelogGenerator).
