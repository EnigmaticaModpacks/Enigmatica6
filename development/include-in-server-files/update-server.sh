#!/bin/sh

MOD_FOLDER="$(dirname "$0")/mods"
WORLD_FOLDER="$(dirname "$0")/world"
BACKUP_FOLDER="$(dirname "$0")/backups"
OVERRIDES_FOLDER="$(dirname "$0")/overrides"
THIRD_PARTY_MODS_FOLDER="$(dirname "$0")/thirdpartymods"
BACKUPS_TO_KEEP=10

git fetch

COMMITS_BEHIND=$(git rev-list --left-only --count origin/master...master)
if [ "$COMMITS_BEHIND" -gt 0 ]; then
	# Make a backup of the mods folder
	mkdir -p "$BACKUP_FOLDER"

	if [ -d "$MOD_FOLDER" ]; then
		if [ "$(ls "$MOD_FOLDER" | wc -l)" -gt 0 ]; then
			zip -r "$BACKUP_FOLDER/mods-$(date +'%m.%d.%Y-%H.%M').zip" "$MOD_FOLDER" || echo "Couldn't back up mods -- aborting" 1>&2 ; exit 1;
		fi
	else
		mkdir -p "$MOD_FOLDER"
	fi

	# Make a backup of the world folder
	mkdir -p "$BACKUP_FOLDER"
	if [ -d "$WORLD_FOLDER" ]; then
		if [ "$(ls "$WORLD_FOLDER" | wc -l)" -gt 0 ]; then
			zip -r "$BACKUP_FOLDER/world-$(date +'%m.%d.%Y-%H.%M').zip" "$WORLD_FOLDER" || echo "Couldn't back up world -- aborting" 1>&2 ; exit 1;
		fi
	else
		mkdir -p "$WORLD_FOLDER"
	fi

	BACKUP_FILES=$(ls -tr "$BACKUP_FOLDER")
	BACKUP_FILE_COUNT=$(wc -l "$BACKUP_FILES")

	if [ "$BACKUP_FILE_COUNT" -gt "$BACKUPS_TO_KEEP" ]; then
		echo "$BACKUP_FILES" | tail -n $(("$BACKUP_FILE_COUNT" - "$BACKUPS_TO_KEEP")) | xargs -I{} rm -rf '{}'
	fi
fi

git stash
git reset --hard
git pull

./remove-client-mods.sh

if [ -d "$OVERRIDES_FOLDER" ]; then
	cp --force "$OVERRIDES_FOLDER"/* "$(dirname "$OVERRIDES_FOLDER")"/
fi

cp -r --force "$THIRD_PARTY_MODS_FOLDER"/* mods/
