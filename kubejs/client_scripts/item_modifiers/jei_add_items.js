onEvent('jei.add.items', (event) => {
    const items = [
        'lootr:lootr_chest',
        'lootr:lootr_barrel',
        'lootr:lootr_trapped_chest',
        Item.of('tetra:modular_double', {
            'double/handle': 'double/basic_handle',
            HideFlags: 1,
            'double/head_left': 'double/basic_hammer_left',
            'double/head_right': 'double/basic_hammer_right',
            Damage: 0,
            'double/basic_hammer_right_material': 'basic_hammer/alfsteel',
            'double/basic_handle_material': 'basic_handle/end_rod',
            'double/basic_hammer_left_material': 'basic_hammer/alfsteel'
        }),
        Item.of('tetra:modular_sword', {
            'sword/wide_guard_material': 'wide_guard/starmetal',
            'sword/guard': 'sword/wide_guard',
            'sword/short_blade_material': 'short_blade/eternal_crystal',
            'sword/blade': 'sword/short_blade',
            'sword/pommel': 'sword/decorative_pommel',
            'sword/basic_hilt_material': 'basic_hilt/end_rod',
            HideFlags: 1,
            'sword/hilt': 'sword/basic_hilt',
            Damage: 0,
            'sword/blade:arrested': 0,
            'sword/decorative_pommel_material': 'decorative_pommel/oak'
        })

        /*
        // Thermal Augments - See Notes Below for NBT data.
        // When making new augments, register them through KubeJS and include the word 'augment' in the name somewhere. Otherwise, update 'jei_add_subtypes'
        // Machine Speed Upgrades
        // Test Set 1 - moderate FE/t

        // 17.9 ticks/5720 FE per craft
        Item.of(
            'kubejs:machine_speed_augment_mk2',
            '{AugmentData:{Type:"Machine",MachineEnergy:1.43d,MachinePower:3.0d}}'
        ),
        // 9.3 ticks/7436 FE per craft
        Item.of(
            'kubejs:machine_speed_augment_mk3',
            '{AugmentData:{Type:"Machine",MachineEnergy:1.859d,MachinePower:9.0d}}'
        ),
        // 4.1 ticks/9666 FE per craft
        Item.of(
            'kubejs:machine_speed_augment_mk4',
            '{AugmentData:{Type:"Machine",MachineEnergy:2.4167d,MachinePower:27.0d}}'
        ),
        // Test Set 2 - considerably more FE/t
        // 16.5 ticks/13200 FE per craft
        Item.of(
            'kubejs:machine_speed_augment_mk2',
            '{AugmentData:{Type:"Machine",MachineEnergy:3.3d,MachinePower:9.0d}}'
        ),
        // 6.0 ticks/39600 FE per craft
        Item.of(
            'kubejs:machine_speed_augment_mk3',
            '{AugmentData:{Type:"Machine",MachineEnergy:9.9d,MachinePower:91.0d}}'
        ),
        // 2 ticks/118800 FE per craft
        Item.of(
            'kubejs:machine_speed_augment_mk4',
            '{AugmentData:{Type:"Machine",MachineEnergy:29.7d,MachinePower:729.0d}}'
        ),
        // Dynamo Speed Upgrades
        Item.of(
            'kubejs:dynamo_output_augment_mk2',
            '{AugmentData:{Type:"Dynamo",DynamoEnergy:0.846d,DynamoPower:2.0d}}'
        ),
        Item.of(
            'kubejs:dynamo_output_augment_mk3',
            '{AugmentData:{Type:"Dynamo",DynamoEnergy:0.79524d,DynamoPower:4.0d}}'
        ),
        Item.of(
            'kubejs:dynamo_output_augment_mk4',
            '{AugmentData:{Type:"Dynamo",DynamoEnergy:0.7475256d,DynamoPower:8.0d}}'
        ),
        // Dynamo Efficiency Upgrades
        Item.of('kubejs:dynamo_fuel_augment_mk2', '{AugmentData:{Type:"Dynamo",DynamoEnergy:1.43d}}'),
        Item.of('kubejs:dynamo_fuel_augment_mk3', '{AugmentData:{Type:"Dynamo",DynamoEnergy:1.859d}}'),
        Item.of('kubejs:dynamo_fuel_augment_mk4', '{AugmentData:{Type:"Dynamo",DynamoEnergy:2.4167d}}')
        */
    ];

    craftedBees.forEach((type) => {
        items.push(Item.of('resourcefulbees:bee_jar', `{Entity: "resourcefulbees:${type}_bee"}`));
    });

    items.forEach((item) => event.add(item));
});

/*  Any item can become an augment by giving it the proper NBT tags.
        Reference: https://github.com/KingLemming/1.16/blob/fe263e24b6f872bbacd7599c73f78ed44098d105/CoFHCore/src/main/java/cofh/lib/util/constants/NBTTags.java#L101

        These follow the pattern of {AugmentData:{Type:"<TYPE>",<AUGMENT_1>:<FLOAT>,<AUGMENT_2>:<FLOAT>,<AUGMENT_3>:<FLOAT>}}
        All augments use a Float to define their level. 

        Types:
            Determine what machine the item may be used in, and in some cases how many may be used. 
            TAG_AUGMENT_TYPE_UPGRADE = "Upgrade"            Component is Unique, only one will apply to the machine
            TAG_AUGMENT_TYPE_RF = "RF"                      Adjusts RF Values of Machines
            TAG_AUGMENT_TYPE_FLUID = "Fluid"                Adjusts Fluid Values of Machines
            TAG_AUGMENT_TYPE_MACHINE = "Machine"            May only be used in Machines
            TAG_AUGMENT_TYPE_DYNAMO = "Dynamo"              May only be used in Dynamos
            TAG_AUGMENT_TYPE_AREA_EFFECT = "Area"           May only be used in machines with an AoE, such as 
            TAG_AUGMENT_TYPE_FILTER = "Filter"              Defines an item as a Filter
            TAG_AUGMENT_TYPE_POTION = "Potion"              May only be used for Potion using machines

        Augments:
            Determine the effects to be applied to the machine. 
        General Augments:
            TAG_AUGMENT_BASE_MOD = "BaseMod"                Multiplier for all other bonuses as seen on Integral Components

            TAG_AUGMENT_RF_CREATIVE = "RFCre"               Unlimited RF
            TAG_AUGMENT_RF_STORAGE = "RFMax"                RF Capacity
            TAG_AUGMENT_RF_XFER = "RFXfer"                  RF Transfer Rate

            TAG_AUGMENT_FLUID_CREATIVE = "FluidCre"         Unlimited Fluid
            TAG_AUGMENT_FLUID_STORAGE = "FluidMax"          Fluid Capacity

            TAG_AUGMENT_ITEM_CREATIVE = "ItemCre"           Unlimited Items
            TAG_AUGMENT_ITEM_STORAGE = "ItemMax"            Item Capacity

            TAG_AUGMENT_DEPTH = "Depth"                     Dig Depth (NYI)
            TAG_AUGMENT_HARVEST_LEVEL = "Harvest"           Block Harvest Level
            TAG_AUGMENT_RADIUS = "Radius"                   Dig Radius
            TAG_AUGMENT_REACH = "Reach"                     Dig Reach

            TAG_AUGMENT_FEATURE_CYCLE_PROCESS = "CycProc"   Enable Cyclic Processing
            TAG_AUGMENT_FEATURE_RS_CONTROL = "RSCtl"        Enable Redstone Control
            TAG_AUGMENT_FEATURE_SIDE_CONFIG = "SideCfg"     Enable Side Config
            TAG_AUGMENT_FEATURE_XP_STORAGE = "XpStr"        Enable XP Handling

            TAG_AUGMENT_POTION_AMPLIFIER = "PotionAmp"      Potion Level
            TAG_AUGMENT_POTION_DURATION = "PotionDur"       Potion Duration

    Dynamo-Specific Augments:
            TAG_AUGMENT_DYNAMO_COIL = "DynamoCoil"          Allows energy to be extracted from any side? (NYI)
            TAG_AUGMENT_DYNAMO_ENERGY = "DynamoEnergy"      Energy Efficiency per Fuel (Fuel Energy in Tooltip)
            TAG_AUGMENT_DYNAMO_POWER = "DynamoPower"        Output Rate - FE/t (Maximum Output in Tooltip)
            TAG_AUGMENT_DYNAMO_THROTTLE = "DynamoThrottle"  Allows dynamo to turn off automatically when full? (NYI)

    Machine-Specific Augments:
            TAG_AUGMENT_MACHINE_MIN_OUTPUT = "MachineMin"   Forces minimum output? (NYI)
            TAG_AUGMENT_MACHINE_PRIMARY = "MachinePri"      Primary Output Modifier
            TAG_AUGMENT_MACHINE_SECONDARY = "MachineSec"    Secondary Output Modifier

            TAG_AUGMENT_MACHINE_CATALYST = "MachineCat"     Catalyst Use Rate
            TAG_AUGMENT_MACHINE_ENERGY = "MachineEnergy"    Energy per recipe (Process Energy in Tooltip)
            TAG_AUGMENT_MACHINE_POWER = "MachinePower"      Base Processing Speed (Base Power in Tooltip) 
            TAG_AUGMENT_MACHINE_SPEED = "MachineSpeed"      Maximum Processing Speed (Maximum Power in Tooltip) 
                Applies after Base Processing speed, negative reduces total speed after other bonuses (see Efficiency Upgrade)
            TAG_AUGMENT_MACHINE_XP = "MachineXp"            XP per Process??? 

            Notes: Default Efficiency is "MachineEnergy:0.9,MachineSpeed:-0.1" which slows the machine, but costs less energy total

    */
