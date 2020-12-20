# Enigmatica 6

This is the official repository and issue-tracker for the modpack Enigmatica 6, for Minecraft 1.16.x

### Table of Contents
* [Testing](#testing)
* [Links](#links)

## Testing
If you would like to help test Enigmatica 6, please give me a shout on Discord.

There are a few things I would like testers to consider/look for:

* Bugs
* Things you find boring/tedious
* Things that need small optimizations, such as advancement text and textures.

I would also appreciate if you let me know what you think of the gameplay and why, especially if you didn't like it :)

Note: You do not have to use the below setup method, you can use the available files from CurseForge or Discord, however those are not updated as frequently as this repository.

# Setup 

### For Contributors, Testers and Server Admins

Follow these steps to setup your workspace/server:

## Windows - MultiMC

1) Download [MultiMC](https://multimc.org/#Download) if you haven't already. Also [Git for Windows](https://git-scm.com/download/win).
2) Open MultiMC.
3) Click Add Instance, choose Minecraft 1.16.4, click Ok. (Or the lastest version mods are dependant on)
4) Click Edit Instance. (right hand side)
5) Click Install Forge, pick the latest version. (right hand side)
6) Fork and clone the Enigmatica 6 repository to your GitHub profile.
7) Open the folder of the MultiMC Instance you made (step 1-5), and go into the .minecraft folder 
8) Depending on how Git was installed, "Git Bash Here" should show up when right-clicking inside the .minecraft folder. Open and use the following commands:

```
git init                                              # Initialize git in folder
git remote add origin URLToYourEnigmaticaFork.git     # Set remote origin to your Enigmatica fork
git remote -v                                         # Verify remote
git fetch
git pull
```

9) Now double click the script `setup.bat` to setup InstanceSync. It is found in the `development` folder.
10) One more `git pull`

Tip: If you run into issues, verifying you are using the right Minecraft and Forge version in your MultiMC instance!

## Windows / Mac - Twitch

1) Download the [CurseForge App](https://curseforge.overwolf.com/) if you haven't already.
2) Fork and clone the Enigmatica 6 repository to the Instances folder of the CurseForge App, the default path is `C:\Users\User\Documents\Curse\Minecraft\Instances`. If you previously used Twitch for modpacks the path will most likely be `C:\Users\User\Documents\Twitch\Minecraft\Instances`.
3) Double click the script `setup.bat` to setup InstanceSync. It is found in the `development` folder.
4) Pull.
5) Open the CurseForge App, go to Minecraft -> My Modpacks, and you should see Enigmatica 6. If you already had CurseForge App open, restart it.

You're done!

## Linux

#### Setup MultiMC Instance

1) Download [MultiMC](https://multimc.org/#Download) if you haven't already.
2) Open MultiMC.
3) Click Add Instance, choose Minecraft 1.16.3, click Ok.
4) Click Edit Instance (right hand side)
5) Click Install Forge, pick the latest version.

#### Repository Setup

6) Fork and clone the Enigmatica 6 repository
7) Open the folder of the MultiMC Instance you made (step 1-5), and go into the .minecraft folder - Open a Terminal and use the following commands:

```
git init                                           # Initialize git in folder
git remote add origin URLToYourEnigmatica4Fork     # Set remote origin to your Enigmatica 5 fork
git remote -v                                      # Verify remote
git fetch
git pull origin master
```

8) Now double click the script `setup.sh` to setup InstanceSync. It is found in the `development` folder.

You're done!

## Server Automation

*Note: You only have to do this setup once, afterwards you simply need to do step 8.*
1) Clone the Enigmatica 6 repository to an empty folder.
2) Double click the script `setup.bat` to setup InstanceSync. It is found in the `development` folder.
3) Open a command line, and navigate to the folder.
4) Use the command `git pull`
5) Navigate to the folder `development/include-in-server-files`
6) Open the file `settings.cfg` and change `MAX_RAM=4G` to the amount you wish to allocate.
7) Copy all files from the folder `development/include-in-server-files` into the root.
8) Run `remove-client-mods` to ensure that no client-side mods are on the server.
9) Double clicking `update-server.bat` will now update the modpack.

Using the `update-server` script will reset changes you've made to all files tracked by the repository.

### Alternatives

It is possible to setup a development instance for Enigmatica 6 in other ways, for example running it through the .Minecraft folder.

## Links

* [CurseForge](https://www.curseforge.com/minecraft/modpacks/enigmatica6)

* [Discord](https://discord.gg/HnWNd7X)
