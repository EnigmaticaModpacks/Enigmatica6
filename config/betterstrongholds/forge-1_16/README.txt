######################################
#             ores.json              #
######################################

  This file contains a BlockSetSelector (see below) describing the probability of a given ore being chosen.
These probabilities are used in treasure rooms in the stronghold, in which
piles of ore have a chance of spawning.
For information on BlockSetSelectors, see the bottom of this README.

######################################
#          rareblocks.json           #
######################################

  This file contains a BlockSetSelector describing the probability of a given block being chosen.
These probabilities are used in grand libraries, in which
two rare blocks will spawn.
For information on BlockSetSelectors, see the bottom of this README.

######################################
#          armorstands.json          #
######################################

  This file contains ItemSetSelectors describing the probability distribution of armor on armor stands.
Common armor stands spawn in Armoury rooms, while Rare ones are only available in the rare Commander rooms.
For information on ItemSetSelectors, see the bottom of this README.

######################################
#          itemframes.json          #
######################################

  This file contains ItemSetSelectors describing the probability distribution of items in item frames.
Item frames only spawn in storage rooms and armoury rooms.
For information on ItemSetSelectors, see the bottom of this README.

######################################
#         BlockSetSelectors          #
######################################

Describes a set of blockstates and the probability of each blockstate being chosen.
 - entries: An object where each entry's key is a blockstate, and each value is that blockstate's probability of being chosen.
      The total sum of all probabilities SHOULD NOT exceed 1.0!
 - defaultBlock: The blockstate used for any leftover probability ranges.
      For example, if the total sum of all the probabilities of the entries is 0.6, then
      there is a 0.4 chance of the defaultBlock being selected.

Here's an example block selector:
"entries": {
  "minecraft:cobblestone": 0.25,
  "minecraft:air": 0.2,
  "minecraft:stone_bricks": 0.1
},
"defaultBlock": "minecraft:oak_planks"

For each block, this selector has a 25% chance of returning cobblestone, 20% chance of choosing air,
10% chance of choosing stone bricks, and a 100 - (25 + 20 + 10) = 45% chance of choosing oak planks (since it's the default block).

######################################
#         ItemSetSelectors           #
######################################

Describes a set of items and the probability of each item being chosen.
Works the same as BlockSetSelectors, but with items instead of blockstates.
