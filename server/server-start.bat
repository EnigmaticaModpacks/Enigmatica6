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

REM Set some placeholder defaults (failsafe if settings.cfg is old version or corrupt somehow
SET MC_SERVER_MAX_RAM=5G
SET MC_SERVER_JVM_ARGS=-Xmx%MC_SERVER_MAX_RAM%
SET MC_SERVER_MAX_CRASH=5
SET MC_SERVER_CRASH_TIMER=600
SET MC_SERVER_RUN_FROM_BAD_FOLDER=0
SET MC_SERVER_IGNORE_OFFLINE=0
SET MC_SERVER_IGNORE_JAVA=0
SET MC_SERVER_MCVER=1.12.2
SET MC_SERVER_FORGEVER=14.23.2.2625
SET MC_SERVER_FORGEURL=DISABLE
SET MC_SERVER_SPONGE=0
SET MC_SERVER_HIGH_PRIORITY=0
SET MC_SERVER_PACKNAME=PLACEHOLDER

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

REM Check for 64-bit OS, not needed since 64-bit java is checked
REM reg query "HKLM\System\CurrentControlSet\Control\Session Manager\Environment" /v PROCESSOR_ARCHITECTURE | find /i "x86" || GOTO CHECKJAVA 1>> "%~dp0logs\serverstart.log" 2>&1

:CHECKJAVA
ECHO INFO: Checking java installation...
ECHO DEBUG: JAVA version output (java -d64 -version): 1>>  "%~dp0logs\serverstart.log" 2>&1
java -d64 -version || GOTO JAVAERROR 1>>  "%~dp0logs\serverstart.log" 2>&1

java -d64 -version 2>&1 | %MC_SYS32%\FIND.EXE "1.8"  1>>  "%~dp0logs\serverstart.log" 2>&1
IF %ERRORLEVEL% EQU 0 (
	ECHO INFO: Found 64-bit Java 1.8 1>> "%~dp0logs\serverstart.log" 2>&1
	ECHO ...64-bit Java 1.8 found! 1>> "%~dp0logs\serverstart.log" 2>&1
	GOTO CHECKFOLDER
) ELSE (
    GOTO JAVAERROR
)

:JAVAERROR
IF NOT %MC_SERVER_IGNORE_JAVA% EQU 0 (
	ECHO WARN: Skipping validation of proper Java install/version...
	ECHO IF Java is not installed, too old, or not 64-bit, the server probably won't start/run correctly
	ECHO WARN: Skipping validation of Java install... 1>>  "%~dp0logs\serverstart.log" 2>&1
	GOTO CHECKFOLDER
)
COLOR CF
ECHO ERROR: Could not find 64-bit Java 1.8 installed or in PATH 1>> "%~dp0logs\serverstart.log" 2>&1
SET MC_SERVER_ERROR_REASON="JavaVersionOrPathError"
CLS
ECHO.
ECHO ERROR: Could not find valid java version installed. 
>nul TIMEOUT 1
ECHO 64-bit Java ver 1.8+ is highly recomended. Check here for latest downloads:
ECHO https://java.com/en/download/manual.jsp
ECHO.
>nul TIMEOUT 1
GOTO ERROR

:CHECKFOLDER
IF NOT %MC_SERVER_RUN_FROM_BAD_FOLDER% EQU 0 (
	ECHO WARN: Skipping check if server directory is in potentially problematic location...
	ECHO WARN: Skipping check if server directory is in potentially problematic location... 1>>  "%~dp0logs\serverstart.log" 2>&1
	GOTO CHECKONLINE
)
ECHO Checking if current folder is valid...
ECHO INFO: Checking if current folder is valid... 1>>  "%~dp0logs\serverstart.log" 2>&1

REM Check if current directory is in ProgramFiles
IF NOT DEFINED ProgramFiles ( GOTO CHECKPROG86 )
ECHO.x%CD%x | %MC_SYS32%\FINDSTR.EXE /I /C:"%ProgramFiles%" >nul
REM ECHO Error Level: %ERRORLEVEL%
IF %ERRORLEVEL% EQU 0 (
	SET MC_SERVER_ERROR_REASON=BadFolder-ProgramFiles;
	GOTO FOLDERERROR
)
ECHO.x%~dp0x | %MC_SYS32%\FINDSTR.EXE /I /C:"%ProgramFiles%" >nul
IF %ERRORLEVEL% EQU 0 (
	SET MC_SERVER_ERROR_REASON=BadFolder-ProgramFiles;
	GOTO FOLDERERROR
)

:CHECKPROG86
IF NOT DEFINED ProgramFiles^(x86^) ( GOTO CHECKSYS )
ECHO.x%CD%x | %MC_SYS32%\FINDSTR.EXE /I /C:"%ProgramFiles(x86)%" >nul
IF %ERRORLEVEL% EQU 0 (
	SET MC_SERVER_ERROR_REASON=BadFolder-ProgramFiles86;
	GOTO FOLDERERROR
)
ECHO.x%~dp0x | %MC_SYS32%\FINDSTR.EXE /I /C:"%ProgramFiles(x86)%" >nul
IF %ERRORLEVEL% EQU 0 (
	SET MC_SERVER_ERROR_REASON=BadFolder-ProgramFiles86;
	GOTO FOLDERERROR
)

:CHECKSYS
REM Check if current directory is in SystemRoot
IF NOT DEFINED SystemRoot ( GOTO CHECKTEMP )
ECHO.x%CD%x | %MC_SYS32%\FINDSTR.EXE /I /C:"%SystemRoot%" >nul
IF %ERRORLEVEL% EQU 0 (
	SET MC_SERVER_ERROR_REASON=BadFolder-System;
	GOTO FOLDERERROR
)
ECHO.x%~dp0x | %MC_SYS32%\FINDSTR.EXE /I /C:"%SystemRoot%" >nul
IF %ERRORLEVEL% EQU 0 (
	SET MC_SERVER_ERROR_REASON=BadFolder-System;
	GOTO FOLDERERROR
)

:CHECKTEMP
REM Check if current directory is in TEMP
IF NOT DEFINED TEMP ( GOTO CHECKTMP )
ECHO.x%CD%x | %MC_SYS32%\FINDSTR.EXE /I /C:"%TEMP%" >nul
IF %ERRORLEVEL% EQU 0 (
	SET MC_SERVER_ERROR_REASON=BadFolder-Temp;
	GOTO FOLDERERROR
)
ECHO.x%~dp0x | %MC_SYS32%\FINDSTR.EXE /I /C:"%TEMP%" >nul
IF %ERRORLEVEL% EQU 0 (
	SET MC_SERVER_ERROR_REASON=BadFolder-Temp;
	GOTO FOLDERERROR
)

:CHECKTMP
IF NOT DEFINED TMP ( GOTO CHECKONLINE )
	ECHO.x%CD%x | %MC_SYS32%\FINDSTR.EXE /I /C:"%TMP%" >nul
	IF %ERRORLEVEL% EQU 0 (
		SET MC_SERVER_ERROR_REASON=BadFolder-Temp;
		GOTO FOLDERERROR
	)
	ECHO.x%~dp0x | %MC_SYS32%\FINDSTR.EXE /I /C:"%TMP%" >nul
	IF %ERRORLEVEL% EQU 0 (
		SET MC_SERVER_ERROR_REASON=BadFolder-Temp;
		GOTO FOLDERERROR
	)
)
GOTO CHECKONLINE

:FOLDERERROR
ECHO WARN: Running from "Program Files," "Temporary," or "System" folders can lead to permissions issues and data loss
ECHO WARN: If you want to do this anyway, you need change script setting MC_SERVER_RUN_FROM_BAD_FOLDER to 1
ECHO WARN: Running from "Program Files," "Temporary," or "System" folders can lead to permissions issues and data loss 1>>  "%~dp0logs\serverstart.log" 2>&1
ECHO WARN: If you want to do this anyway, you need change script setting MC_SERVER_RUN_FROM_BAD_FOLDER to 1 1>>  "%~dp0logs\serverstart.log" 2>&1
GOTO ERROR

:CHECKONLINE
IF NOT %MC_SERVER_IGNORE_OFFLINE% EQU 0 (
	ECHO Skipping internet connectivity check...
	ECHO WARN: Skipping internet connectivity check... 1>>  "%~dp0logs\serverstart.log" 2>&1
	GOTO CHECKFILES
)

ECHO Checking for basic internet connectivity...
ECHO INFO: Checking for basic internet connectivity... 1>>  "%~dp0logs\serverstart.log" 2>&1

REM Try with Google DNS
%MC_SYS32%\PING.EXE -n 2 -w 1000 8.8.8.8 | %MC_SYS32%\FIND.EXE "TTL="  1>>  "%~dp0logs\serverstart.log" 2>&1
IF %ERRORLEVEL% EQU 0 (
    SET MC_SERVER_TMP_FLAG=0
	ECHO INFO: Ping of "8.8.8.8" Successfull 1>>  "%~dp0logs\serverstart.log" 2>&1
) ELSE (
    SET MC_SERVER_TMP_FLAG=1
	ECHO WARN: Ping of "8.8.8.8" Failed 1>>  "%~dp0logs\serverstart.log" 2>&1
)

REM If Google ping failed try one more time with L3 just in case
IF MC_SERVER_TMP_FLAG EQU 1 (
	%MC_SYS32%\PING.EXE -n 2 -w 1000 4.2.2.1 | %MC_SYS32%\FIND.EXE "TTL="  1>>  "%~dp0logs\serverstart.log" 2>&1
	IF %ERRORLEVEL% EQU 0 (
		SET MC_SERVER_TMP_FLAG=0
		INFO: Ping of "4.4.2.1" Successfull 1>>  "%~dp0logs\serverstart.log" 2>&1
	) ELSE (
		SET MC_SERVER_TMP_FLAG=1
		ECHO WARN: Ping of "4.4.2.1" Failed 1>>  "%~dp0logs\serverstart.log" 2>&1
	)
)

REM Possibly no internet connection...
IF MC_SERVER_TMP_FLAG EQU 1 (
	ECHO ERROR: No internet connectivity found
	ECHO ERROR: No internet connectivity found 1>>  "%~dp0logs\serverstart.log" 2>&1
	SET MC_SERVER_ERROR_REASON=NoInternetConnectivity
	GOTO ERROR
	)

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

SET MC_SERVER_TMP_FLAG=0

:FETCHHTML
REM Download Forge Download Index HTML to parse the URL for the direct download
ECHO INFO: Fetching index html from forge ^( https://files.minecraftforge.net/maven/net/minecraftforge/forge/index_%MC_SERVER_MCVER%.html ^) 1>>  "%~dp0logs\serverstart.log" 2>&1
%MC_SYS32%\bitsadmin.exe /rawreturn /nowrap /transfer dlforgehtml /download /priority FOREGROUND "https://files.minecraftforge.net/maven/net/minecraftforge/forge/index_%MC_SERVER_MCVER%.html" "%~dp0forge-%MC_SERVER_MCVER%.html"  1>> "%~dp0logs\serverstart.log" 2>&1

IF NOT EXIST "%~dp0forge-%MC_SERVER_MCVER%.html" (
	IF "%MC_SERVER_TMP_FLAG%"=="0" (
		ECHO Something went wrong, trying again...
		SET MC_SERVER_TMP_FLAG=1
		GOTO FETCHHTML
	) ELSE (
		SET MC_SERVER_ERROR_REASON=ForgeIndexNotFound
		GOTO ERROR
	)
)

REM Simple search for matching text to make sure we got the correct webpage/html (and not a 404, for example)
REM ECHO DEBUG: Checking simple pattern match for forge ver to validate HTML... 1>>  "%~dp0logs\serverstart.log" 2>&1
REM FIND /I "%MC_SERVER_FORGEVER%" forge-%MC_SERVER_MCVER%.html 1>> "%~dp0logs\serverstart.log" 2>&1 || (
REM 	IF %MC_SERVER_TMP_FLAG% LEQ 0 (
REM 		ECHO Something wrong with Forge download part 1 of 2
REM 		ECHO Something wrong with Forge download part 1 of 2 1>>  "%~dp0logs\serverstart.log" 2>&1
REM 		SET MC_SERVER_TMP_FLAG=1
REM 		DEL /F /Q "%~dp0*forge-index.html"  1>> "%~dp0logs\serverstart.log" 2>&1 || ECHO INFO: No forge-index to delete 1>>  "%~dp0logs\serverstart.log" 2>&1
REM 		GOTO FETCHHTML
REM 	) ELSE (
REM 		ECHO HTML Download failed a second time... stopping. 
REM 		ECHO ERROR: HTML Download failed a second time... stopping. 1>>  "%~dp0logs\serverstart.log" 2>&1
REM 		SET MC_SERVER_ERROR_REASON=ForgeDownloadURLNotFound
REM 		GOTO ERROR
REM 	)
REM )

REM More complex wannabe-regex (aka magic)
FOR /f tokens^=^5^ delims^=^=^<^>^" %%G in ('%MC_SYS32%\FINDSTR.EXE /ir "https://files.minecraftforge.net/maven/net/minecraftforge/forge/%MC_SERVER_MCVER%-%MC_SERVER_FORGEVER%/forge-%MC_SERVER_MCVER%-%MC_SERVER_FORGEVER%-installer.jar" "%~dp0forge-%MC_SERVER_MCVER%.html"') DO SET MC_SERVER_FORGEURL=%%G & GOTO FETCHHTML1

:FETCHHTML1
IF "%MC_SERVER_FORGEURL%"=="%MC_SERVER_FORGEURL:installer.jar=%" (
	IF "%MC_SERVER_TMP_FLAG%"=="0" (
		ECHO Something went wrong, trying again...
		SET MC_SERVER_TMP_FLAG=1
		GOTO FETCHHTML
	) ELSE (
		SET MC_SERVER_ERROR_REASON=ForgeDownloadURLNotFound
		GOTO ERROR
	)
) 

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

REM TODO: CHECKS TO VALIDATE SUCCESSFUL INSTALL

REM Create default server.properties and eula.txt files
IF NOT EXIST "%~dp0server.properties" (
	ECHO Could not find server.properties, creating initial copy... 1>>  "%~dp0logs\serverstart.log" 2>&1
	ECHO INFO: server.properties not found... populating default 1>>  "%~dp0logs\serverstart.log" 2>&1
	ECHO view-distance=8 1>> "%~dp0server.properties"  2> "%~dp0logs\serverstart.log"
	ECHO allow-flight=true 1>> "%~dp0server.properties"  2> "%~dp0logs\serverstart.log"
	ECHO level-type=BIOMESOP 1>> "%~dp0server.properties"  2> "%~dp0logs\serverstart.log"
	ECHO snooper-enabled=false 1>> "%~dp0server.properties"  2> "%~dp0logs\serverstart.log"
	ECHO max-tick-time=90000 1>> "%~dp0server.properties"  2> "%~dp0logs\serverstart.log"
	ECHO motd=%MC_SERVER_PACKNAME% 1>> "%~dp0server.properties"  2> "%~dp0logs\serverstart.log"
	)
IF NOT EXIST "%~dp0eula.txt" (
	ECHO Could not find eula.txt, creating initial copy... 1>>  "%~dp0logs\serverstart.log" 2>&1
	ECHO INFO: eula.txt not found... populating default 1>>  "%~dp0logs\serverstart.log" 2>&1
	ECHO eula=false 1>> "%~dp0eula.txt"  2> "%~dp0logs\serverstart.log"
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

:DOWNLOADSPONGE
REM Auto-Download not implemented yet, and might not ever be
REM Problems with scraping github for link for bootsreapper were problematic

REM ---Rename any spongeforge*.jar to .jar.disabled
REM (FOR /f "tokens=* delims=*" %%x in ('dir "%~dp0mods\*spongeforge*.jar" /B /O:-D') DO MOVE /Y "%%x" "%%x.disabled") 1>> "%~dp0logs\serverstart.log" 2>&1
REM ---Rename any sponge*bootstrap*.jar to .jar.disabled
REM (FOR /f "tokens=* delims=*" %%x in ('dir "%~dp0*sponge*bootstrap*.jar" /B /O:-D') DO MOVE /Y "%~dp0%%x" "%%x.disabled") 1>> "%~dp0logs\serverstart.log" 2>&1
REM ---Download spongeforge index to parse for jar download
REM bitsadmin /rawreturn /nowrap /transfer dlspongehtml /download /priority FOREGROUND "http://files.minecraftforge.net/maven/org/spongepowered/spongeforge/index_%MC_SERVER_MCVER%.html" "%~dp0spongeforge-%MC_SERVER_MCVER%.html"  1>> "%~dp0logs\serverstart.log" 2>&1
REM ---Download sponge bootstrap html to parse for jar download 
REM bitsadmin /rawreturn /nowrap /transfer dlspongebootstrap /download /priority FOREGROUND "https://api.github.com/repos/simon816/spongebootstrap/releases/latest" "%~dp0spongebootstrap.html"  1>> "%~dp0logs\serverstart.log" 2>&1
REM ---Find latest bootstrap download and save to var
REM FOR /f tokens^=* delims^=^" %%F in ('findstr /ir "https:\/\/github.*releases.*Bootstrap.*\.jar" "%~dp0spongebootstrap.html"') DO (
REM 	SET "MC_SERVER_SPONGEBOOTSTRAPURL=%%F"
REM 	FOR /f tokens^=^30 delims^=^/ %%B in ("%%G") DO ECHO Bootstrap Filename: %%B
REM ---Find latest SpongeForge download and save to var http://files.minecraftforge.net/maven/org/spongepowered/spongeforge/1.10.2-2281-5.2.0-BETA-2274/spongeforge-1.10.2-2281-5.2.0-BETA-2274.jar
REM FOR /f tokens^=* delims^=^" %%G in ('findstr /ir "https:\/\/files.*%MC_SERVER_MCVER%.*%MC_SERVER_FORGESHORT%.*[0-9]*\.jar" "%~dp0spongeforge-%MC_SERVER_MCVER%.html"') DO (
REM 	SET "MC_SERVER_SPONGEURL=%%G"
REM 	FOR /f tokens^=^30 delims^=^/ %%S in ("%%G") DO ECHO SpongeForge Filename: %%S
REM )
REM ECHO DEBUG: Attempting to download "%MC_SERVER_SPONGEBOOTSTRAPURL%" 1>> "%~dp0logs\serverstart.log" 2>&1
REM bitsadmin /rawreturn /nowrap /transfer dlforgeinstaller /download /priority FOREGROUND %MC_SERVER_SPONGEBOOTSTRAPURL% "%~dp0%%B"  1>>  "%~dp0logs\serverstart.log" 2>&1
REM ECHO DEBUG: Attempting to download "%MC_SERVER_SPONGEURL%" 1>> "%~dp0logs\serverstart.log" 2>&1
REM bitsadmin /rawreturn /nowrap /transfer dlforgeinstaller /download /priority FOREGROUND %MC_SERVER_SPONGEURL% "%~dp0%%S"  1>>  "%~dp0logs\serverstart.log" 2>&1

CLS
TITLE ERROR! SPONGE FILES NOT FOUND!! (ServerStart)
COLOR cf
ECHO.
ECHO **** ERROR ****
ECHO SPONGE has been enabled in settings.cfg but necessary files were not found...
ECHO.
ECHO To use Sponge:
ECHO    1) "MODS" folder must have a SpongeForge JAR matching Forge %MC_SERVER_FORGESHORT%
ECHO    2) SpongeBootstrap JAR must be present in same folder as Forge "universal"
ECHO.
ECHO **** PLEASE NOTE ****
ECHO YOU MAY NOT RECIEVE SUPPORT from modpack devs if you use Sponge
ECHO Use at your own risk OR DISABLE SPONGE in settings.cfg
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
PAUSE
GOTO CLEANUP

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
ECHO DEBUG: JAVA version output (java -d64 -version): 1>>  "%~dp0logs\serverstart.log" 2>&1
java -d64 -version 1>>  "%~dp0logs\serverstart.log" 2>&1

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
