#!/bin/bash
# Make sure users aren't trying to run script via sh directly (won't work)

unameOut="$(uname -s)"
case "${unameOut}" in
    Linux*)     machine=Linux;;
    Darwin*)    machine=Mac;;
    CYGWIN*)    machine=Cygwin;;
    MINGW*)     machine=MinGw;;
    *)          machine="UNKNOWN:${unameOut}"
esac

if [ ! "$BASH_VERSION" ] ; then
    echo "Please do not use sh to run this script ($0). Use bash instead (or execute it directly)" 1>&2
    exit 1
fi

# routine to handle Forge/server install
install_server(){
	echo "Starting install of Forge/Minecraft server binaries"
	echo "DEBUG: Starting install of Forge/Minecraft server binaries" >>serverstart.log 2>&1
	if [ -f installer.jar ]; then
		echo "DEBUG: installer.jar found in current directory" >>serverstart.log 2>&1
		export answer="n"
		read -t 8 -p "Installer found. Use it (y) or download again (n)?  " answer
		if [[ "$answer" =~ ^([yY][eE][sS]|[yY])+$ ]]; then
			echo "INFO: Skipping download. Using existing installer.jar" >>serverstart.log 2>&1
			echo "Skipping download. Using existing installer.jar"
		fi
	else
		if [ "${FORGEURL}" = "DISABLE" ]; then
			export URL="http://files.minecraftforge.net/maven/net/minecraftforge/forge/${MCVER}-${FORGEVER}/forge-${MCVER}-${FORGEVER}-installer.jar"
		else
			export URL="${FORGEURL}"
		fi
		echo $URL
		which wget >> /dev/null
		if [ $? -eq 0 ]; then
			echo "DEBUG: (wget) Downloading ${URL}" >>serverstart.log 2>&1
			wget -O installer.jar "${URL}" >>serverstart.log 2>&1
		else
			which curl >> /dev/null
			if [ $? -eq 0 ]; then
				echo "DEBUG: (curl) Downloading ${URL}" >>serverstart.log 2>&1
				curl -o installer.jar "${URL}" >>serverstart.log 2>&1
			else
				echo "Neither wget or curl were found on your system. Please install one and try again"
				echo "ERROR: Neither wget or curl were found" >>serverstart.log 2>&1
			fi
		fi
	fi

	if [ ! -f installer.jar ]; then
		echo "Forge installer did not download"
		echo "ERROR: Forge installer did not download" >>serverstart.log 2>&1
		exit 0
	else
		echo "Moving unneeded files/folders to ./DELETEME"
		echo "INFO: Moving unneeded files/folders to ./DELETEME" >>serverstart.log 2>&1
		rm -rf ./DELETEME >>serverstart.log 2>&1
		mv -f ./asm ./DELETEME >>serverstart.log 2>&1
		mv -f ./libraries ./DELETEME >>serverstart.log 2>&1
		mv -f ./llibrary ./DELETEME >>serverstart.log 2>&1
		mv -f ./minecraft_server*.jar ./DELETEME >>serverstart.log 2>&1
		mv -f ./forge*.jar ./DELETEME >>serverstart.log 2>&1
		mv -f ./OpenComputersMod*lua* ./DELETEME >>serverstart.log 2>&1
		echo "Installing Forge Server, please wait..."
		echo "INFO: Installing Forge Server" >>serverstart.log 2>&1
		java -jar installer.jar --installServer >>serverstart.log 2>&1
		echo "Deleting Forge installer (no longer needed)"
		echo "INFO: Deleting installer.jar" >>serverstart.log 2>&1
		rm -rf installer.jar  >>serverstart.log 2>&1
	fi
}

# routine for basic directory checks
check_dir(){
	echo "DEBUG: Current directory is " $(pwd) >>serverstart.log 2>&1
	if [ "$(pwd)" = "/tmp" ] || [ "$(pwd)" = "/var/tmp" ]; then
		echo "Current directory appears to be TMP"
		echo "WARN: Current DIR is TEMP"  >>serverstart.log 2>&1
		if [ ${RUN_FROM_BAD_FOLDER} -eq 0 ]; then
			echo "ERROR: Stopping due to bad folder (TMP)" >>serverstart.log 2>&1
			echo "RUN_FROM_BAD_FOLDER setting is off, exiting script"
			exit 0
		else
			echo "WARN: Bad folder (TMP) but continuing anyway" >>serverstart.log 2>&1
			echo "Bypassing cd=temp halt per script settings"
		fi
	fi

	if [ ! -r . ] || [ ! -w . ]; then
	echo "WARN: Not full R/W access on current directory"
	echo "You do not have full R/W access to current directory"
		if [ ${RUN_FROM_BAD_FOLDER} -eq 0 ]; then
		echo "ERROR: Stopping due to bad folder (R/W access)" >>serverstart.log 2>&1
		echo "RUN_FROM_BAD_FOLDER setting is off, exiting script"
		exit 0
		else
		echo "WARN: Bad folder (R/W) cut continuing anyway" >>serverstart.log 2>&1
		echo "Bypassing no R/W halt (per script settings)"
		fi
	fi
}

# routine for ping inet connectivity
check_connection(){
	if [ ${IGNORE_OFFLINE} -eq 1 ]; then
		echo "WARN: Internet connectivity checking is disabled" >>serverstart.log 2>&1
		echo "Skipping internet connectivity check"
	else
		if ping -c 1 8.8.8.8 >> /dev/null 2>&1; then
			echo "INFO: Ping to Google DNS successfull" >>serverstart.log 2>&1
			echo "Ping to Google DNS successfull"
		else
			echo "ERROR: Ping to Google DNS failed. No internet access?" >>serverstart.log 2>&1
			echo "Ping to Google DNS failed. No internet access?"
		fi

		if ping -c 1 4.2.2.1 >> /dev/null 2>&1; then
			echo "INFO: Ping to L4 successfull" >>serverstart.log 2>&1
			echo "Ping to L4 successfull"
		else
			echo "ERROR: Ping to L4 failed. No internet access?"  >>serverstart.log 2>&1
			echo "Ping to L4 failed. No internet access?"
			exit 0
		fi
	fi
}

# routine to make sure necessary binaries are found
check_binaries(){
	if [ ! -f ${FORGE_JAR} ] ; then
		echo "WARN: ${FORGE_JAR} not found"  >>serverstart.log 2>&1
		echo "Required files not found, need to install Forge"
		install_server
	fi
	if [ ! -f ./minecraft_server.${MCVER}.jar ] ; then
		echo "WARN: minecraft_server.${MCVER}.jar not found" >>serverstart.log 2>&1
		echo "Required files not found, need to install Forge"
		install_server
	fi
	if [ ! -d ./libraries ] ; then
		echo "WARN: library directory not found" >>serverstart.log 2>&1
		echo "Required files not found, need to install Forge"
		install_server
	fi
}

read_config(){
	while read -r line || [[ -n "$line" ]] ; do
   		if echo $line | grep -F = &>/dev/null; then
   			if [[ ${str:0:1} != "#" ]] ; then
      			name=$(echo "$line" | cut -d '=' -f 1)
      			val=$(echo "${line}" | cut -d '=' -f 2-)
      			eval "export ${name}='${val%?}'"
      		fi
   		fi
	done < settings.cfg 

}

read_config

# Script/batch starts here...

# init log file and dump basic info
echo "INFO: Starting script at" $(date -u +%Y-%m-%d_%H:%M:%S) >serverstart.log 2>&1
echo "DEBUG: Dumping starting variables: " >>serverstart.log 2>&1
echo "DEBUG: MAX_RAM=$MAX_RAM" >>serverstart.log 2>&1
echo "DEBUG: JAVA_ARGS=$JAVA_ARGS" >>serverstart.log 2>&1
echo "DEBUG: CRASH_COUNT=$CRASH_COUNT" >>serverstart.log 2>&1
echo "DEBUG: RUN_FROM_BAD_FOLDER=$RUN_FROM_BAD_FOLDER" >>serverstart.log 2>&1
echo "DEBUG: IGNORE_OFFLINE=$IGNORE_OFFLINE" >>serverstart.log 2>&1
echo "DEBUG: MCVER=$MCVER" >>serverstart.log 2>&1
echo "DEBUG: FORGEVER=$FORGEVER" >>serverstart.log 2>&1
echo "DEBUG: FORGEURL=$FORGEURL" >>serverstart.log 2>&1
echo "DEBUG: Basic System Info: " $(uname -a) >>serverstart.log 2>&1
if [ "$machine" = "Mac" ] 
then
  echo "DEBUG: Total RAM estimate: " $(sysctl hw.memsize | awk 'BEGIN {total = 1} {if (NR == 1 || NR == 3) total *=$NF} END {print total / 1024 / 1024" MB"}') >>serverstart.log 2>&1
else
  echo "DEBUG: Total RAM estimate: " $(getconf -a | grep PAGES | awk 'BEGIN {total = 1} {if (NR == 1 || NR == 3) total *=$NF} END {print total / 1024 / 1024" MB"}') >>serverstart.log 2>&1
fi
echo "DEBUG: Java Version info: " $(java -version) >>serverstart.log 2>&1
echo "DEBUG: Dumping current directory listing " >>serverstart.log 2>&1
ls -s1h >>serverstart.log 2>&1

check_dir
check_connection
check_binaries