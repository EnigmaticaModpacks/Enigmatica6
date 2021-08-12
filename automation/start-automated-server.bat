@ECHO OFF
::::
:::: Minecraft-Forge Server install/launcher script
:::: Created by the "All The Mods" pack team
::::
:::: This script will setup and start the minecraft server
:::: *** THIS FILE NOT INTENDED TO BE EDITED, USE "settings.cfg" INSTEAD ***
::::
:::: FOR HELP (or more details);
::::    Github:   https://github.com/AllTheMods/Server-Scripts
::::    Discord:  https://discord.gg/FdFDVWb
::::

:::: *** THIS FILE NOT INTENDED TO BE EDITED, USE "settings.cfg" INSTEAD ***

::================================================================================::
::*** LICENSE ***::

:: The only reason we included a license is because we wanted it to be easier 
:: for more people to use/share this. Some places (i.e. Curse) need some form of 
:: "official" notice allowing content to be used. Since we were making a license 
:: anyway, we thought it would be nice to add an attribution clause so others 
:: didn't try to claim our work as their own. The result is this custom license 
:: based on a combination of the MIT license and a couple parts from Vaskii's 
:: Botania/Psi license:

	:: Copyright (c) 2017 All The Mods Team

	:: Permission is hereby granted, free of charge, to any person obtaining a copy
	:: of this software and associated documentation files (the "Software"), to deal
	:: in the Software without restriction, including without limitation the rights
	:: to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	:: copies of the Software, and to permit persons to whom the Software is
	:: furnished to do so, subject to the following conditions:

	:: You must give appropriate credit to the "All The Mods Team" as original 
	:: creators for any parts of this Software being used. A link back to original 
	:: content is optional but would be greatly appreciated. 

	:: It is forbidden to charge for access to the distribution of this Software or 
	:: gain money through it. This includes any type of inline advertisement, such 
	:: as url shorteners (adf.ly or otherwise) or ads. This also includes 
	:: restricting any amount of access behind a paywall. Special permission is 
	:: given to allow this Software to be bundled or distributed with projects on 
	:: Curse.com, CurseForge.com or their related sub-domains and subsidiaries.

	:: Derivative works must be open source (have its source visible and allow for 
	:: redistribution and modification).

	:: The above copyright notice and conditions must be included in all copies or 
	:: substantial portions of the Software, including derivative works and 
	:: re-licensing thereof. 

::================================================================================::
::*** DISCLAIMERS ***::

	:: "All The Mods Team" is not affiliated with "Mojang," "Oracle," 
	:: "Curse," "Twitch," "Sponge," "Forge" or any other entity (or entity owning a 
	:: referenced product) potentially mentioned in this document or relevant source 
	:: code for this Software. The use of their names and/or trademarks is strictly 
	:: circumstantial and assumed fair-use. All credit for their respective works, 
	:: software, branding, copyrights and/or trademarks belongs entirely to them as 
	:: original owners/licensers.

	:: THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	:: IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	:: FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	:: AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	:: LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	:: OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	:: SOFTWARE.

:::: *** THIS FILE NOT INTENDED TO BE EDITED, USE "settings.cfg" INSTEAD ***

Powershell.exe -ExecutionPolicy RemoteSigned -File %~dp0remove-client-mods.ps1

SETLOCAL
REM Internal Scripty stuff
REM Define system root so we can run CORRECT version of things (like FIND)
SET MC_SYS32=%SYSTEMROOT%\SYSTEM32
REM default an error code in case error block is ran without this var being defined first
SET MC_SERVER_ERROR_REASON=Unspecified
REM this is a temp variable to use for intermidiate calculations and such
SET MC_SERVER_TMP_FLAG=0
REM this is the var to keep track of sequential crashes
SET MC_SERVER_CRASH_COUNTER=1
REM set "crash time" to initial script start 
SET MC_SERVER_CRASH_YYYYMMDD=%date:~10,4%%date:~4,2%%date:~7,2%
SET MC_SERVER_CRASH_HHMMSS=%time:~0,2%%time:~3,2%%time:~6,2%

REM Create log FOLDER if it doesn't exist
IF NOT EXIST "%~dp0logs\" (MKDIR logs && echo created non-existent "logs" folder)

REM delete log if already exists to start a fresh one
IF EXIST "%~dp0logs\serverstart.log" DEL /F /Q "%~dp0logs\serverstart.log"
ECHO. 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO. 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO. 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO ----------------------------------------------------------------- 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO INFO: Starting batch at %MC_SERVER_CRASH_YYYYMMDD%:%MC_SERVER_CRASH_HHMMSS% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO ----------------------------------------------------------------- 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO. 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: Current Dir is %CD% -- trying to change to %~dp0 1>>  "%~dp0logs\serverstart.log" 2>&1
CD "%~dp0" 1>>  "%~dp0logs\serverstart.log" 2>&1

:BEGIN
CLS
COLOR 3F

REM Check for config file
ECHO INFO: Checking that settings.cfg exists 1>> "%~dp0logs\serverstart.log" 2>&1
IF NOT EXIST "%~dp0settings.cfg" (
	SET MC_SERVER_ERROR_REASON=Settings.cfg_Not_Found
	GOTO ERROR
)

ECHO DEBUG: settings.cfg Found. Logging full contents below: 1>>  "%~dp0logs\serverstart.log" 2>&1
>nul COPY "%~dp0logs\serverstart.log"+"%~dp0settings.cfg" "%~dp0logs\serverstart.log"
ECHO. 1>>  "%~dp0logs\serverstart.log" 2>&1

>nul %MC_SYS32%\FIND.EXE /I "MAX_RAM=" "%~dp0settings.cfg" || (
	SET MC_SERVER_ERROR_REASON=Settings.cfg_Error:MAX_RAM
	GOTO ERROR
	)

>nul %MC_SYS32%\FIND.EXE /I "JAVA_ARGS=" "%~dp0settings.cfg" || (
	SET MC_SERVER_ERROR_REASON=Settings.cfg_Error:JAVA_ARGS
	GOTO ERROR
	)

>nul %MC_SYS32%\FIND.EXE /I "CRASH_COUNT=" "%~dp0settings.cfg" || (
	SET MC_SERVER_ERROR_REASON=Settings.cfg_Error:CRASH_COUNT
	GOTO ERROR
	)

>nul %MC_SYS32%\FIND.EXE /I "CRASH_TIMER=" "%~dp0settings.cfg" || (
	SET MC_SERVER_ERROR_REASON=Settings.cfg_Error:CRASH_TIMER
	GOTO ERROR
	)

>nul %MC_SYS32%\FIND.EXE /I "RUN_FROM_BAD_FOLDER=" "%~dp0settings.cfg" || (
	SET MC_SERVER_ERROR_REASON=Settings.cfg_Error:RUN_FROM_BAD_FOLDER
	GOTO ERROR
	)

>nul %MC_SYS32%\FIND.EXE /I "IGNORE_OFFLINE=" "%~dp0settings.cfg" || (
	SET MC_SERVER_ERROR_REASON=Settings.cfg_Error:IGNORE_OFFLINE
	GOTO ERROR
	)	

>nul %MC_SYS32%\FIND.EXE /I "IGNORE_JAVA_CHECK=" "%~dp0settings.cfg" || (
	SET MC_SERVER_ERROR_REASON=Settings.cfg_Error:IGNORE_JAVA_CHECK
	GOTO ERROR
	)	

>nul %MC_SYS32%\FIND.EXE /I "MCVER=" "%~dp0settings.cfg" || (
	SET MC_SERVER_ERROR_REASON=Settings.cfg_Error:MCVER
	GOTO ERROR
	)	

>nul %MC_SYS32%\FIND.EXE /I "FORGEVER=" "%~dp0settings.cfg" || (
	SET MC_SERVER_ERROR_REASON=Settings.cfg_Error:FORGEVER
	GOTO ERROR
	)	

>nul %MC_SYS32%\FIND.EXE /I "FORGEURL=" "%~dp0settings.cfg" || (
	SET MC_SERVER_ERROR_REASON=Settings.cfg_Error:FORGEURL
	GOTO ERROR
	)		

REM  LOAD Settings from config
ECHO INFO: Loading variables from settings.cfg 1>>  "%~dp0logs\serverstart.log" 2>&1 
for /F "delims=; tokens=1 eol=;" %%A in (settings.cfg) DO (
	REM Only process the line if it contains an "equals" sign
	ECHO.%%A | findstr /C:"=">nul && (
		CALL SET %%A
	) || (
		REM Skipping Line without equals (blank or comments only)
	)
)
	REM Old way to parse settings--> broke if args had an "equals" (=) character
	REM for /f "delims==; tokens=1,2 eol=;" %%G in (settings.cfg) do set %%G=%%H 

REM Define Xms (min heap) as Floor(MAX_RAM / 2)
SET MC_SERVER_TMP_FLAG=
SET /A "MC_SERVER_TMP_FLAG=%MAX_RAM:~0,-1%/2"
FOR /f "tokens=1 delims=." %%a  in ("%MC_SERVER_TMP_FLAG%") DO (SET MC_SERVER_TMP_FLAG=%%a)
IF %MC_SERVER_TMP_FLAG% LSS 1 (SET MC_SERVER_TMP_FLAG=1)

REM Re-map imported vars (from settings.cfg) into script-standard variables
SET MC_SERVER_MAX_RAM=%MAX_RAM%
SET MC_SERVER_JVM_ARGS=-Xmx%MC_SERVER_MAX_RAM% -Xms%MC_SERVER_TMP_FLAG%%MC_SERVER_MAX_RAM:~-1% %JAVA_ARGS%
SET MC_SERVER_MAX_CRASH=%CRASH_COUNT%
SET MC_SERVER_CRASH_TIMER=%CRASH_TIMER%
SET MC_SERVER_RUN_FROM_BAD_FOLDER=%RUN_FROM_BAD_FOLDER%
SET MC_SERVER_IGNORE_OFFLINE=%IGNORE_OFFLINE%
SET MC_SERVER_IGNORE_JAVA=%IGNORE_JAVA_CHECK%
SET MC_SERVER_MCVER=%MCVER%
SET MC_SERVER_FORGEVER=%FORGEVER%
SET MC_SERVER_FORGEURL=%FORGEURL%
SET MC_SERVER_SPONGE=%USE_SPONGE%
SET MC_SERVER_HIGH_PRIORITY=%HIGH_CPU_PRIORITY%
SET MC_SERVER_PACKNAME=%MODPACK_NAME%

REM Cleanup imported vars after being remapped
SET MAX_RAM=
SET FORGE_JAR=
SET JAVA_ARGS=
SET CRASH_COUNT=
SET CRASH_TIMER=
SET RUN_FROM_BAD_FOLDER=
SET IGNORE_OFFLINE=
SET MCVER=
SET FORGEVER=
SET FORGEURL=
SET USE_SPONGE=
SET HIGH_CPU_PRIORITY=
SET MODPACK_NAME=
SET MC_SERVER_TMP_FLAG=

REM Get forge shorthand version number
SET MC_SERVER_FORGESHORT=%MC_SERVER_FORGEVER:~-4%

TITLE %MC_SERVER_PACKNAME% ServerStart Script
ECHO.
ECHO *** Loading %MC_SERVER_PACKNAME% Server ***
ECHO Running Forge %MC_SERVER_FORGESHORT% for Minecraft %MC_SERVER_MCVER%
TIMEOUT 1 >nul
ECHO.
ECHO ::::::::::::::::::::::::::::::::::::::::::::::::::::
ECHO    Minecraft-Forge Server install/launcher script
ECHO    (Created by the "All The Mods" modpack team)
ECHO ::::::::::::::::::::::::::::::::::::::::::::::::::::
ECHO.
ECHO This script will launch a Minecraft Forge Modded server
ECHO.
ECHO FOR HELP (or more details);
ECHO    Github:   https://github.com/AllTheMods/Server-Scripts
ECHO    Discord:  https://discord.gg/FdFDVWb
ECHO.
ECHO.

ECHO DEBUG: Starting variable definitions: 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_MAX_RAM=%MC_SERVER_MAX_RAM% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_FORGE_JAR=%MC_SERVER_FORGE_JAR% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_SPONGE_BOOT=%MC_SERVER_SPONGE_BOOT% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_JVM_ARGS=%MC_SERVER_JVM_ARGS% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_MAX_CRASH=%MC_SERVER_MAX_CRASH% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_CRASH_TIMER=%MC_SERVER_CRASH_TIMER% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_IGNORE_OFFLINE=%MC_SERVER_IGNORE_OFFLINE% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_RUN_FROM_BAD_FOLDER=%MC_SERVER_RUN_FROM_BAD_FOLDER% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_MCVER=%MC_SERVER_MCVER% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_FORGEVER=%MC_SERVER_FORGEVER% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_FORGESHORT=%MC_SERVER_FORGESHORT% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_FORGEURL=%MC_SERVER_FORGEURL% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_SPONGE=%MC_SERVER_SPONGE% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_HIGH_PRIORITY=%MC_SERVER_HIGH_PRIORITY% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_PACKNAME=%MC_SERVER_PACKNAME% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_SPONGEURL=%MC_SERVER_SPONGEURL% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_SPONGEBOOTSTRAPURL=%MC_SERVER_SPONGEBOOTSTRAPURL% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_ERROR_REASON=%MC_SERVER_ERROR_REASON% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_TMP_FLAG=%MC_SERVER_TMP_FLAG% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_CRASH_COUNTER=%MC_SERVER_CRASH_COUNTER% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_CRASH_YYYYMMDD=%MC_SERVER_CRASH_YYYYMMDD% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_CRASH_HHMMSS=%MC_SERVER_CRASH_HHMMSS% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: Current directory file listing: 1>>  "%~dp0logs\serverstart.log" 2>&1
DIR 1>>  "%~dp0logs\serverstart.log" 2>&1

:CHECKFILES
ECHO Checking for forge/minecraft binaries...
ECHO INFO: Checking for forge/minecraft binaries... 1>>  "%~dp0logs\serverstart.log" 2>&1

REM Check if forge is already installed
IF NOT EXIST "%~dp0*forge*%MC_SERVER_FORGEVER%*.jar" (
	ECHO FORGE %MC_SERVER_FORGEVER% binary not found, re-installing...
	ECHO INFO: FORGE %MC_SERVER_FORGEVER% not found, re-installing... 1>>  "%~dp0logs\serverstart.log" 2>&1
	GOTO INSTALLSTART
)

REM Check if Minecraft JAR is already downloaded
IF NOT EXIST "%~dp0*minecraft_server.%MC_SERVER_MCVER%.jar" (
	ECHO Minecraft binary not found, re-installing Forge...
	ECHO INFO: Minecraft binary not found, re-installing Forge...  1>>  "%~dp0logs\serverstart.log" 2>&1
	GOTO INSTALLSTART
)

REM Check if Libraries are already downloaded
IF NOT EXIST "%~dp0libraries" (
	ECHO Libraries folder not found, re-installing Forge...
	ECHO INFO: Libraries folder not found, re-installing Forge... 1>>  "%~dp0logs\serverstart.log" 2>&1
	GOTO INSTALLSTART
)

REM Sponge?
IF %MC_SERVER_SPONGE% EQU 1 (
	ECHO.
	ECHO. **** WARNING ****
	ECHO SPONGE has been enabled in settings.cfg
	ECHO Using Sponge with this modpack is experimental and can cause unexpected problems
	ECHO **** USE SPONGE AT YOUR OWN RISK ****
	ECHO SPONGE has been enabled in settings.cfg -- this is experimental and can cause unexpected problems USE AT YOUR OWN RISK  1>>  "%~dp0logs\serverstart.log" 2>&1
	ECHO.
	REM create "/mods/" folder if it doesn't exist
	IF NOT EXIST "%~dp0mods" (
		ECHO Mods folder not found, creating it
		ECHO INFO: Mods folder not found, creating it 1>>  "%~dp0logs\serverstart.log" 2>&1
		MKDIR "%~dp0mods" 1>>  "%~dp0logs\serverstart.log" 2>&1
	)
	REM Check for spongeforge jar in /mods/
	IF NOT EXIST "%~dp0mods/*spongeforge*%MC_SERVER_MCVER%*.jar" (
		ECHO SpongeForge JAR for not found in "mods" folder...
		ECHO INFO: SpongeForge JAR not found in "mods" folder  1>>  "%~dp0logs\serverstart.log" 2>&1
		GOTO DOWNLOADSPONGE
	)
	REM Check for spongeforge bootstrapper
	IF NOT EXIST "%~dp0*sponge*bootstrap*.jar" (
		ECHO SpongeBootstrap loader not found...
		ECHO INFO: SpongeForge Bootstrap loader not found 1>>  "%~dp0logs\serverstart.log" 2>&1
		GOTO DOWNLOADSPONGE
	)	
)

REM set absolute paths for binary JARs
(FOR /f "usebackq tokens=* delims=*" %%x in (`dir ^"*forge*%MC_SERVER_FORGEVER%*.jar^" /B /O:-D`) DO SET "MC_SERVER_FORGE_JAR=%%x" & GOTO CHECKFILES1) 1>> "%~dp0logs\serverstart.log" 2>&1

:CHECKFILES1
(FOR /f "usebackq tokens=* delims=*" %%x in (`dir ^"*sponge*bootstrap*.jar^" /B /O:-D`) DO SET "MC_SERVER_SPONGE_BOOT=%%x" & GOTO CHECKFILES2) 1>> "%~dp0logs\serverstart.log" 2>&1

:CHECKFILES2
REM Delete duplicate binary JARs
ECHO DEBUG: MC_SERVER_SPONGE_BOOT=%MC_SERVER_SPONGE_BOOT% 1>> "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_FORGE_JAR=%MC_SERVER_FORGE_JAR% 1>> "%~dp0logs\serverstart.log" 2>&1
ATTRIB +R "%MC_SERVER_SPONGE_BOOT%"  1>> "%~dp0logs\serverstart.log" 2>&1 || ECHO INFO: No Sponge Jar present to read-only 1>> "%~dp0logs\serverstart.log" 2>&1
ATTRIB +R "%MC_SERVER_FORGE_JAR%"  1>> "%~dp0logs\serverstart.log" 2>&1 || ECHO INFO: No Forge Jar present to read-only 1>> "%~dp0logs\serverstart.log" 2>&1
DEL "%~dp0*forge*.jar" /A:-R  1>> "%~dp0logs\serverstart.log" 2>&1 || ECHO INFO: No Sponge Jars present to delete 1>> "%~dp0logs\serverstart.log" 2>&1
DEL "%~dp0*sponge*bootstrap*.jar" /A:-R  1>> "%~dp0logs\serverstart.log" 2>&1 || ECHO INFO: No Forge Jars present to delete 1>> "%~dp0logs\serverstart.log" 2>&1
ATTRIB -R "%MC_SERVER_SPONGE_BOOT%"  1>> "%~dp0logs\serverstart.log" 2>&1 || ECHO INFO: No Sponge Jar present to UN-read-only 1>> "%~dp0logs\serverstart.log" 2>&1
ATTRIB -R "%MC_SERVER_FORGE_JAR%"  1>> "%~dp0logs\serverstart.log" 2>&1 || ECHO INFO: No Forge Jar present to UN-read-only 1>> "%~dp0logs\serverstart.log" 2>&1

:STARTSERVER
CLS 
IF /i "%1"=="install" (GOTO INSTALLCOMPLETE)
TITLE %MC_SERVER_PACKNAME% Server Running
ECHO.
ECHO.
ECHO Starting %MC_SERVER_PACKNAME% Server...
ECHO INFO: Starting Server... 1>>  "%~dp0logs\serverstart.log" 2>&1
COLOR 07

REM Batch will wait here indefinitely while MC server is running
IF %MC_SERVER_SPONGE% EQU 1 (
	ECHO DEBUG: Attempting to execute [ java %MC_SERVER_JVM_ARGS% -jar "%~dp0%MC_SERVER_SPONGE_BOOT%" nogui ]
	ECHO DEBUG: Attempting to execute [ java %MC_SERVER_JVM_ARGS% -jar "%~dp0%MC_SERVER_SPONGE_BOOT%" nogui ] 1>> "%~dp0logs\serverstart.log" 2>&1
	COLOR 
	IF %MC_SERVER_HIGH_PRIORITY% EQU 1 (
		START /B /I /WAIT /HIGH java %MC_SERVER_JVM_ARGS% -jar "%~dp0%MC_SERVER_SPONGE_BOOT%" nogui
	) ELSE (
		java %MC_SERVER_JVM_ARGS% -jar "%~dp0%MC_SERVER_SPONGE_BOOT%" nogui
	)
) ELSE (
	ECHO DEBUG: Disabling any spongeforge jar in \mods\ because USE_SPONGE is disabled in settings.cfg 1>> "%~dp0logs\serverstart.log" 2>&1
	(FOR /f "tokens=* delims=*" %%x in ('dir "%~dp0mods\*spongeforge*.jar" /B /O:-D') DO MOVE /Y "%~dp0mods\%%x" "%%x.disabled") 1>> "%~dp0logs\serverstart.log" 2>&1
	ECHO DEBUG: Attempting to execute [ java %MC_SERVER_JVM_ARGS% -jar "%~dp0%MC_SERVER_FORGE_JAR%" nogui ]
	ECHO DEBUG: Attempting to execute [ java %MC_SERVER_JVM_ARGS% -jar "%~dp0%MC_SERVER_FORGE_JAR%" nogui ] 1>> "%~dp0logs\serverstart.log" 2>&1
	COLOR 
	IF %MC_SERVER_HIGH_PRIORITY% EQU 1 (
		START /B /I /WAIT /HIGH java %MC_SERVER_JVM_ARGS% -jar "%~dp0%MC_SERVER_FORGE_JAR%" nogui
	) ELSE (
		java %MC_SERVER_JVM_ARGS% -jar "%~dp0%MC_SERVER_FORGE_JAR%" nogui
	)
)

REM If server is exited or crashes, restart...
REM CLS
ECHO.
ECHO WARN: %MC_SERVER_PACKNAME% Server was stopped (possibly crashed)...
GOTO RESTARTER

:INSTALLSTART
COLOR 5F
TITLE INSTALLING Forge/Minecraft for %MC_SERVER_PACKNAME% server
ECHO Clearing old files before installing forge/minecraft...
ECHO INFO: Clearing and installing forge/minecraft... 1>>  "%~dp0logs\serverstart.log" 2>&1

REM Just in case there's anything pending or dupe-named before starting...
%MC_SYS32%\bitsadmin.exe /reset 1>>  "%~dp0logs\serverstart.log" 2>&1

(FOR /f "tokens=* delims=*" %%x in ('dir "%~dp0*forge*%MC_SERVER_MCVER%*%MC_SERVER_FORGEVER%*installer.jar" /B /O:-D') DO SET "MC_SERVER_TMP_FLAG=%%x" & GOTO INSTALL1) 1>> "%~dp0logs\serverstart.log" 2>&1

:INSTALL1
REM Delete old/duplicate installers
ECHO: DEBUG: MC_SERVER_TMP_FLAG=%MC_SERVER_TMP_FLAG% 1>> "%~dp0logs\serverstart.log" 2>&1
ATTRIB +R "%MC_SERVER_TMP_FLAG%"  1>> "%~dp0logs\serverstart.log" 2>&1 || ECHO INFO: No Forge Installer present to read-only 1>> "%~dp0logs\serverstart.log" 2>&1
DEL "%~dp0*forge*installer*.jar*" /A:-R  1>> "%~dp0logs\serverstart.log" 2>&1 || ECHO INFO: No Forge Installers present to delete 1>> "%~dp0logs\serverstart.log" 2>&1
ATTRIB -R "%MC_SERVER_TMP_FLAG%"  1>> "%~dp0logs\serverstart.log" 2>&1 || ECHO INFO: No Forge Installer present to UN-read-only 1>> "%~dp0logs\serverstart.log" 2>&1
SET MC_SERVER_TMP_FLAG= 1>> "%~dp0logs\serverstart.log" 2>&1

REM Check for existing/included forge-installer and run it instead of downloading
IF EXIST "%~dp0forge-%MC_SERVER_MCVER%-%MC_SERVER_FORGEVER%-installer.jar" (
	ECHO.
	ECHO.
	ECHO Existing forge installer already found...
	ECHO Default is to use this installer and not re-download
	GOTO RUNINSTALLER
)

IF NOT %MC_SERVER_IGNORE_OFFLINE% EQU 0 (
	ECHO Skipping forge server online check...
	ECHO WARN: Skipping forge server online check... 1>>  "%~dp0logs\serverstart.log" 2>&1
	GOTO FORGEFILEPREP
)

REM Ping minecraftforge before attempting download
%MC_SYS32%\PING.EXE -n 2 -w 1000 minecraftforge.net | %MC_SYS32%\FIND.EXE "TTL="  1>> "%~dp0logs\serverstart.log" 2>&1
IF %ERRORLEVEL% EQU 0 (
	ECHO INFO: Ping of "minecraftforge.net" Successfull 1>>  "%~dp0logs\serverstart.log" 2>&1
) ELSE (
	ECHO ERROR: Could not reach minecraftforge.net! Possible firewall or internet issue?
	ECHO ERROR: Could not reach minecraftforge.net 1>>  "%~dp0logs\serverstart.log" 2>&1
	SET MC_SERVER_ERROR_REASON=NoInternetConnectivityMinecraftForgeNet
	GOTO ERROR
)

:FORGEFILEPREP
DEL /F /Q "%~dp0*forge*.html"  1>> "%~dp0logs\serverstart.log" 2>&1 || ECHO INFO: No forge-index to delete 1>>  "%~dp0logs\serverstart.log" 2>&1
DEL /F /Q "%~dp0*forge*"  1>> "%~dp0logs\serverstart.log" 2>&1 || ECHO INFO: No forge-universal to delete 1>>  "%~dp0logs\serverstart.log" 2>&1
DEL /F /Q "%~dp0*tmp-forgeinstaller.jar" 1>> "%~dp0logs\serverstart.log" 2>&1 || ECHO INFO: No forge-installer to delete 1>> "%~dp0logs\serverstart.log" 2>&1
DEL /F /Q "%~dp0*minecraft*server*%MC_SERVER_MCVER%*.jar" 1>> "%~dp0logs\serverstart.log" 2>&1 || ECHO INFO: No minecraft binary to delete 1>> "%~dp0logs\serverstart.log" 2>&1
RMDIR /S /Q "%~dp0libraries" 1>>  "%~dp0logs\serverstart.log" 2>&1 || ECHO INFO: No Libraries folder to delete 1>> "%~dp0logs\serverstart.log" 2>&1

ECHO.
ECHO.
ECHO Downloading FORGE (step 1 of 2). This can take several minutes, please be patient...

REM Check if direct forge URL is specified in config
IF NOT %MC_SERVER_FORGEURL%==DISABLE (
	ECHO Attempting to download "%MC_SERVER_FORGEURL%... this can take a moment, please wait." 
	GOTO DOWNLOADINSTALLER
)

IF %MC_SERVER_FORGEURL%==DISABLE (
	SET MC_SERVER_FORGEURL="https://maven.minecraftforge.net/net/minecraftforge/forge/%MC_SERVER_MCVER%-%MC_SERVER_FORGEVER%/forge-%MC_SERVER_MCVER%-%MC_SERVER_FORGEVER%-installer.jar"
	GOTO DOWNLOADINSTALLER
)

SET MC_SERVER_TMP_FLAG=0

ECHO Downloading FORGE (step 2 of 2). This can take several minutes, please be patient...
SET MC_SERVER_TMP_FLAG=0

:DOWNLOADINSTALLER
REM Attempt to download installer to a temp download
ECHO DEBUG: Attempting to download "%MC_SERVER_FORGEURL%" 1>> "%~dp0logs\serverstart.log" 2>&1
%MC_SYS32%\bitsadmin.exe /rawreturn /nowrap /transfer dlforgeinstaller /download /priority FOREGROUND %MC_SERVER_FORGEURL% "%~dp0tmp-forgeinstaller.jar"  1>>  "%~dp0logs\serverstart.log" 2>&1

REM Check that temp-download installer was downloaded
IF NOT EXIST "%~dp0tmp-forgeinstaller.jar" (
IF "%MC_SERVER_TMP_FLAG%"=="0" (
		ECHO Something wrong with download 2 of 2 - FORGE installer, trying again... 
		ECHO Something wrong with download 2 of 2 - FORGE installer, trying again...  1>>  "%~dp0logs\serverstart.log" 2>&1
		SET MC_SERVER_TMP_FLAG=1
		GOTO DOWNLOADINSTALLER
	) ELSE (
		ECHO FORGE Installer download failed a second time... stopping. 
		ECHO ERROR: FORGE Installer download failed a second time... stopping. 1>>  "%~dp0logs\serverstart.log" 2>&1
		SET MC_SERVER_ERROR_REASON=ForgeInstallerDownloadFailed
		GOTO ERROR
	)
)

REM Rename temp installer to proper installer, replacing one that was there already
DEL /F /Q "%~dp0forge-%MC_SERVER_MCVER%-%MC_SERVER_FORGEVER%-installer.jar" 1>>  "%~dp0logs\serverstart.log" 2>&1
MOVE /Y "%~dp0tmp-forgeinstaller.jar" "forge-%MC_SERVER_MCVER%-%MC_SERVER_FORGEVER%-installer.jar"  1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO Download complete.

:RUNINSTALLER
ECHO.
ECHO Installing Forge now, please wait...
ECHO INFO: Starting Forge install now, details below: 1>>  "%~dp0logs\serverstart.log" 2>&1
java -jar "%~dp0forge-%MC_SERVER_MCVER%-%MC_SERVER_FORGEVER%-installer.jar" --installServer 1>>  "%~dp0logs\serverstart.log" 2>&1

REM Create default server.properties and eula.txt files
IF NOT EXIST "%~dp0server.properties" (
	ECHO Could not find server.properties, creating initial copy... 1>>  "%~dp0logs\serverstart.log" 2>&1
	ECHO INFO: server.properties not found... populating default 1>>  "%~dp0logs\serverstart.log" 2>&1
	ECHO view-distance=8 >> "%~dp0server.properties"  2> "%~dp0logs\serverstart.log"
	ECHO allow-flight=true>> "%~dp0server.properties"  2> "%~dp0logs\serverstart.log"
	ECHO level-type=terraforged>> "%~dp0server.properties"  2> "%~dp0logs\serverstart.log"
	ECHO snooper-enabled=false>> "%~dp0server.properties"  2> "%~dp0logs\serverstart.log"
	ECHO max-tick-time=300000>> "%~dp0server.properties"  2> "%~dp0logs\serverstart.log"
	ECHO motd=%MC_SERVER_PACKNAME% >> "%~dp0server.properties"  2> "%~dp0logs\serverstart.log"
	)
IF NOT EXIST "%~dp0eula.txt" (
	ECHO Could not find eula.txt, creating initial copy... 1>>  "%~dp0logs\serverstart.log" 2>&1
	ECHO INFO: eula.txt not found... populating default 1>>  "%~dp0logs\serverstart.log" 2>&1
	ECHO eula=false>> "%~dp0eula.txt"  2> "%~dp0logs\serverstart.log"
	)

REM File cleanup
DEL /F /Q "%~dp0tmp-forgeinstaller.jar"  1>>  "%~dp0logs\serverstart.log" 2>&1
DEL /F /Q "%~dp0forge-%MC_SERVER_MCVER%.html"  1>>  "%~dp0logs\serverstart.log" 2>&1

:INSTALLCOMPLETE
COLOR 2F
ECHO.
ECHO.
ECHO.
ECHO ========================================================
ECHO  %MC_SERVER_PACKNAME% Server Files are now ready!
ECHO ========================================================
ECHO INFO: Download/Install complete... 1>>  "%~dp0logs\serverstart.log" 2>&1
>nul TIMEOUT 1
ECHO Download/Install of Forge and Minecraft binaries was sucessfull.
ECHO.
>nul TIMEOUT 3
IF /i "%1"=="install" (
	ECHO "install" parameter was passed to script now exiting without starting the server...
	ECHO You can use this same script without the "install" parameter to run the server files or 
	ECHO by manually starting the forge JAR with Java or uploading to your hosting service
	ECHO WARN: "install" paremeter passed to script, exiting after install and NOT starting server 1>>  "%~dp0logs\serverstart.log" 2>&1
	ECHO.
	GOTO CLEANUP
) ELSE (
	GOTO BEGIN
)


:ERROR
COLOR cf
TITLE ERROR - "%MC_SERVER_ERROR_REASON%" - Script Stopped
ECHO.
ECHO **** ERROR ****
ECHO There was an Error, Code: "%MC_SERVER_ERROR_REASON%"
ECHO ERROR: Error flagged, reason is: "%MC_SERVER_ERROR_REASON%" 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO.
TIMEOUT 1 >nul 
COLOR 4f
TIMEOUT 1 >nul 
COLOR cf
TIMEOUT 1 >nul 
COLOR 4f
TIMEOUT 1 >nul
COLOR cf
TIMEOUT 1 >nul
COLOR 0c
GOTO CLEANUP

:RESTARTER
COLOR 6F
REM Quick-check EULA before commencing full restarter logic
>nul %MC_SYS32%\FIND.EXE /I "eula=true" "%~dp0eula.txt" || (
	TITLE ERROR: EULA.TXT Must be updated before %MC_SERVER_PACKNAME% server can start
	CLS
	ECHO.
	ECHO Could not find "eula=true" in eula.txt file
	ECHO Please edit and save the EULA file before continuing.
	ECHO.
	PAUSE
	GOTO STARTSERVER
	)

ECHO ERROR: At %MC_SERVER_CRASH_YYYYMMDD%:%MC_SERVER_CRASH_HHMMSS% Server has stopped. 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO At %MC_SERVER_CRASH_YYYYMMDD%:%MC_SERVER_CRASH_HHMMSS% Server has stopped.
ECHO Server has %MC_SERVER_CRASH_COUNTER% consecutive stops, each within %MC_SERVER_CRASH_TIMER% seconds of eachother...
ECHO DEBUG: Server has %MC_SERVER_CRASH_COUNTER% consecutive stops, each within %MC_SERVER_CRASH_TIMER% seconds of eachother... 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO.

REM Arithmetic to check DAYS since last crash
REM Testing working in USA region. Hoping other regional formats don't mess it up
SET /a MC_SERVER_TMP_FLAG="%date:~10,4%%date:~4,2%%date:~7,2%-%MC_SERVER_CRASH_YYYYMMDD%"

REM If more than one calendar day, reset timer/counter.
REM Yes, this means over midnight it's not accurate.
REM Nobody's perfect.
IF %MC_SERVER_TMP_FLAG% GTR 0 (
	ECHO More than one day since last crash/restart... resetting counter/timer
	ECHO INFO: More than one day since last crash/restart... resetting counter/timer 1>>  "%~dp0logs\serverstart.log" 2>&1
	SET MC_SERVER_CRASH_YYYYMMDD=%date:~10,4%%date:~4,2%%date:~7,2%
	SET MC_SERVER_CRASH_HHMMSS=%time:~0,2%%time:~3,2%%time:~6,2%
	SET MC_SERVER_CRASH_COUNTER=0
	GOTO BEGIN
)

REM Arithmetic to check SECONDS since last crash
SET /a MC_SERVER_TMP_FLAG="%time:~0,2%%time:~3,2%%time:~6,2%-%MC_SERVER_CRASH_HHMMSS%"

REM If more than specified seconds (from config variable), reset timer/counter.	
IF %MC_SERVER_TMP_FLAG% GTR %MC_SERVER_CRASH_TIMER% (
	ECHO Last crash/startup was %MC_SERVER_TMP_FLAG%+ seconds ago
	ECHO INFO: Last crash/startup was %MC_SERVER_TMP_FLAG%+ seconds ago 1>>  "%~dp0logs\serverstart.log" 2>&1
	ECHO More than %MC_SERVER_CRASH_TIMER% seconds since last crash/restart... resetting counter/timer
	ECHO INFO: More than %MC_SERVER_CRASH_TIMER% seconds since last crash/restart... resetting counter/timer 1>>  "%~dp0logs\serverstart.log" 2>&1
	SET MC_SERVER_CRASH_YYYYMMDD=%date:~10,4%%date:~4,2%%date:~7,2%
	SET MC_SERVER_CRASH_HHMMSS=%time:~0,2%%time:~3,2%%time:~6,2%
	SET MC_SERVER_CRASH_COUNTER=0
	REM GOTO BEGIN
)

REM If we are still here, time difference is within threshold to increment counter
REM Check if already max failures:
IF %MC_SERVER_CRASH_COUNTER% GEQ %MC_SERVER_MAX_CRASH% (
	COLOR cf
	SET MC_SERVER_ERROR_REASON=TooManyCrashes:%MC_SERVER_CRASH_COUNTER%
	ECHO INFO: Last crash/startup was %MC_SERVER_TMP_FLAG%+ seconds ago 1>>  "%~dp0logs\serverstart.log" 2>&1
	ECHO.
	ECHO.
	ECHO ===================================================
	ECHO  ERROR: Server has stopped/crashed too many times!
	ECHO ===================================================
	ECHO ERROR: Server has stopped/crashed too many times! 1>>  "%~dp0logs\serverstart.log" 2>&1
	ECHO.
	>nul TIMEOUT 1
	ECHO %MC_SERVER_CRASH_COUNTER% Crashes have been counted each within %MC_SERVER_CRASH_TIMER% seconds.
	>nul TIMEOUT 1
	GOTO ERROR
	)

REM Still under threshold so lets increment and restart
ECHO INFO: Last crash/startup was %MC_SERVER_TMP_FLAG%+ seconds ago 1>>  "%~dp0logs\serverstart.log" 2>&1
SET /a "MC_SERVER_CRASH_COUNTER=%MC_SERVER_CRASH_COUNTER%+1"
SET MC_SERVER_CRASH_YYYYMMDD=%date:~10,4%%date:~4,2%%date:~7,2%
SET MC_SERVER_CRASH_HHMMSS=%time:~0,2%%time:~3,2%%time:~6,2%

ECHO DEBUG: Total consecutive crash/stops within time threshold: %MC_SERVER_CRASH_COUNTER% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO.
ECHO.
ECHO.
ECHO.
ECHO Server will re-start *automatically* in less than 30 seconds...
CHOICE /M:"Restart now (Y) or Exit (N)" /T:30 /D:Y
IF %ERRORLEVEL% GEQ 2 (
	ECHO INFO: Server manually stopped before auto-restart 1>>  "%~dp0logs\serverstart.log" 2>&1
	GOTO CLEANUP
) ELSE ( 
	GOTO BEGIN
)

:CLEANUP
ECHO WARN: Server startup script is exiting. Dumping current vars: 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_MAX_RAM=%MC_SERVER_MAX_RAM% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_FORGE_JAR=%MC_SERVER_FORGE_JAR% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_SPONGE_BOOT=%MC_SERVER_SPONGE_BOOT% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_JVM_ARGS=%MC_SERVER_JVM_ARGS% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_MAX_CRASH=%MC_SERVER_MAX_CRASH% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_CRASH_TIMER=%MC_SERVER_CRASH_TIMER% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_IGNORE_OFFLINE=%MC_SERVER_IGNORE_OFFLINE% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_RUN_FROM_BAD_FOLDER=%MC_SERVER_RUN_FROM_BAD_FOLDER% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_MCVER=%MC_SERVER_MCVER% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_FORGEVER=%MC_SERVER_FORGEVER% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_FORGESHORT=%MC_SERVER_FORGESHORT% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_FORGEURL=%MC_SERVER_FORGEURL% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_HIGH_PRIORITY=%MC_SERVER_HIGH_PRIORITY% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_SPONGE=%MC_SERVER_SPONGE% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_PACKNAME=%MC_SERVER_PACKNAME% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_SPONGEURL=%MC_SERVER_SPONGEURL% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_SPONGEBOOTSTRAPURL=%MC_SERVER_SPONGEBOOTSTRAPURL% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_ERROR_REASON=%MC_SERVER_ERROR_REASON% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_TMP_FLAG=%MC_SERVER_TMP_FLAG% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_CRASH_COUNTER=%MC_SERVER_CRASH_COUNTER% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_CRASH_YYYYMMDD=%MC_SERVER_CRASH_YYYYMMDD% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: MC_SERVER_CRASH_HHMMSS=%MC_SERVER_CRASH_HHMMSS% 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO DEBUG: Current directory file listing: 1>>  "%~dp0logs\serverstart.log" 2>&1
DIR 1>>  "%~dp0logs\serverstart.log" 2>&1

REM Clear variables -- probably not necessary since we SETLOCAL but doesn't hurt either
SET MC_SERVER_MAX_RAM=
SET MC_SERVER_FORGE_JAR=
SET MC_SERVER_SPONGE_BOOT=
SET MC_SERVER_JVM_ARGS=
SET MC_SERVER_MAX_CRASH=
SET MC_SERVER_CRASH_TIMER=
SET MC_SERVER_IGNORE_OFFLINE=
SET MC_SERVER_RUN_FROM_BAD_FOLDER=
SET MC_SERVER_MCVER=
SET MC_SERVER_FORGEVER=
SET MC_SERVER_FORGESHORT=
SET MC_SERVER_FORGEURL=
SET MC_SERVER_SPONGE=
SET MC_SERVER_HIGH_PRIORITY=
SET MC_SERVER_PACKNAME=
SET MC_SERVER_SPONGEURL=
SET MC_SERVER_SPONGEBOOTSTRAPURL=
SET MC_SERVER_ERROR_REASON=
SET MC_SERVER_TMP_FLAG=
SET MC_SERVER_CRASH_COUNTER=
SET MC_SERVER_CRASH_YYYYMMDD=
SET MC_SERVER_CRASH_HHMMSS=

REM Reset bitsadmin in case things got hung or errored
%MC_SYS32%\bitsadmin.exe /reset 1>>  "%~dp0logs\serverstart.log" 2>&1

COLOR

:EOF
