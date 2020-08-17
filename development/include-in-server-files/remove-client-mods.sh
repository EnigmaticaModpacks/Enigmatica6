#!/bin/sh

client_mods="nopotionshift ding reauth neat toastcontrol packmenu"
modfolder="$(dirname "$0")/mods"

for client_mod in $client_mods; do

	ls $modfolder | grep -i $client_mod | xargs -I{} rm -v "$modfolder/{}"

done
