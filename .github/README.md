# Enigmatica 6

This is the official repository and issue-tracker for the modpack Enigmatica 6, for Minecraft 1.16.x

### Table of Contents

-   [Testing](#testing)
-   [Setup](#setup)
    -   [MultiMC (Windows/Mac/Linux)](#multimc-linux--windows--mac)
    -   [CurseForge App (Windows/Mac)](#curseforge-app-windows--mac)
-   [Server Automation](#server-automation)
-   [Server Automation with Docker](#server-automation-with-docker)
-   [Links](#links)

<hr></hr>

## Testing

If you would like to help test the modpack, you're very welcome to do so.
The best way you can test is by playing the modpack, reporting bugs and providing feedback from your experience.

There are a few things we would like testers to consider/look for:

-   Bugs
-   Things you find boring/tedious
-   Things that need small optimizations, such as advancement text and textures.

We would also appreciate if you let us know what you think of the gameplay and why, especially if you didn't like it :)

Note: You do not have to use the below setup method, you can use the available files from CurseForge or Discord, however those are not updated as frequently as this repository.

# Setup

### For Contributors and Testers

Follow these steps to setup your workspace:

## MultiMC (Linux / Windows / Mac)

#### Setup MultiMC Instance

1. Download [MultiMC](https://multimc.org/#Download) and [Git](https://git-scm.com/downloads) if you haven't already.
2. Open MultiMC.
3. Click Add Instance, choose Minecraft 1.16.5, click Ok.
4. Click Edit Instance (right hand side)
5. Click Install Forge, pick the latest version.

#### Repository Setup

6. Fork and clone the repository into the MultiMC Instance.
7. Open the folder of the MultiMC Instance you made (step 1-5), and go into the .minecraft folder - Open a terminal/command line and use the following commands:

```sh
git init                                            # Initialize git in folder
git remote add origin URLToYourForkOfTheModpack     # Set remote origin to your fork of the modpack
git remote -v                                       # Verify remote
git fetch
git pull origin develop
```

8. Now double click the script `InstanceSyncSetup.sh` to setup InstanceSync. It is found in the root folder.

You're done!

Tip: If you run into issues, verify that you are using the right Minecraft and Forge version in your MultiMC instance!

## CurseForge App (Windows / Mac)

1. Download the [CurseForge App](https://curseforge.overwolf.com/) and [Git](https://git-scm.com/downloads) if you haven't already.
2. Fork and clone the repository to the Instances folder of the CurseForge App, the default path is `C:\Users\{UserName}\Documents\Curse\Minecraft\Instances`.

    _Note: If you've previously used the Twitch App the path will most likely be `C:\Users\{UserName}\Documents\Twitch\Minecraft\Instances`._

3. Double click the script `InstanceSyncSetup.bat` to setup InstanceSync. It is found in the root folder.
4. Pull.
5. Open the CurseForge App and you should see the modpack. If you already had CurseForge App open, restart it.

You're done!

# Server Automation

## Automatic updates with Git

_Note: You only have to do this setup once, afterwards you simply need to do step 9 whenever you want to update._

1. Clone the repository to an empty folder.
2. Double click the script `InstanceSyncSetup.bat` to setup InstanceSync. It is found in the root folder.
3. Open a command line, and navigate to the folder.
4. Use the command `git pull`
5. Navigate to the folder `server`
6. Open the file `settings.cfg` and change `MAX_RAM=4G` to the amount you wish to allocate.
7. Copy all files from the folder `server` into the root.
8. Run `remove-client-mods` to ensure that no client-side mods are on the server.
9. Double clicking `update-server.bat` will now update the modpack.

**Notes**

-   Using the `update-server` script will reset changes you've made to all files tracked by the repository.
-   You have to update the Forge version in the `settings.cfg` whenever the modpack updates Forge. Re-copying the `settings.cfg` from the server folder after updates ensures that the Forge version is up to date.
    -   Remember to reapply `settings.cfg` changes if you use this approach.
-   Anything put in the `overrides` folder will be copied into the root folder when the `update-server` script is finished - I recommend you put any changed configs and added mods there.

## Server Automation with Docker

There's an example `docker-compose.yml` in the `docker` folder, for those who want to run the modpack server through Docker.
It's based on [Docker Minecraft Server](https://github.com/itzg/docker-minecraft-server), please see the link for configuration and advanced usage.

## Links

-   [CurseForge](https://www.curseforge.com/minecraft/modpacks/enigmatica6)

-   [Discord](https://discord.gg/HnWNd7X)
