onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    /*  Any item can become an augment by giving it the proper NBT tags.
        Reference: https://github.com/KingLemming/1.16/blob/fe263e24b6f872bbacd7599c73f78ed44098d105/CoFHCore/src/main/java/cofh/lib/util/constants/NBTTags.java#L101

        These follow the pattern of {AugmentData:{Type:"<TYPE>",<AUGMENT_1>:<FLOAT>,<AUGMENT_2>:<FLOAT>,<AUGMENT_3>:<FLOAT>}}

        Types:
            TAG_AUGMENT_TYPE_UPGRADE = "Upgrade"            Component is Unique, only one will apply to the machine
            TAG_AUGMENT_TYPE_RF = "RF"                      Adjusts RF Values of Machines
            TAG_AUGMENT_TYPE_FLUID = "Fluid"                Adjusts Fluid Values of Machines
            TAG_AUGMENT_TYPE_MACHINE = "Machine"            May only be used in Machines
            TAG_AUGMENT_TYPE_DYNAMO = "Dynamo"              May only be used in Dynamos
            TAG_AUGMENT_TYPE_AREA_EFFECT = "Area"           May only be used in machines with an AoE, such as 
            TAG_AUGMENT_TYPE_FILTER = "Filter"              Defines an item as a Filter
            TAG_AUGMENT_TYPE_POTION = "Potion"              May only be used for Potion using machines

        General Augments:
            TAG_AUGMENT_BASE_MOD = "BaseMod"                Multiplier for all other bonuses

            TAG_AUGMENT_RF_CREATIVE = "RFCre"               Unlimited RF
            TAG_AUGMENT_RF_STORAGE = "RFMax"                RF Capacity
            TAG_AUGMENT_RF_XFER = "RFXfer"                  RF Transfer Rate

            TAG_AUGMENT_FLUID_CREATIVE = "FluidCre"         Unlimited Fluid
            TAG_AUGMENT_FLUID_STORAGE = "FluidMax"          Fluid Capacity

            TAG_AUGMENT_ITEM_CREATIVE = "ItemCre"           Unlimited Items
            TAG_AUGMENT_ITEM_STORAGE = "ItemMax"            Item Capacity

            TAG_AUGMENT_DEPTH = "Depth"                     Dig Depth?
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
            TAG_AUGMENT_DYNAMO_COIL = "DynamoCoil"          ???
            TAG_AUGMENT_DYNAMO_ENERGY = "DynamoEnergy"      Energy Efficiency per Fuel
            TAG_AUGMENT_DYNAMO_POWER = "DynamoPower"        Output Rate
            TAG_AUGMENT_DYNAMO_THROTTLE = "DynamoThrottle"  ???

    Machine-Specific Augments:
            TAG_AUGMENT_MACHINE_MIN_OUTPUT = "MachineMin"   ???
            TAG_AUGMENT_MACHINE_PRIMARY = "MachinePri"      Primary Output Modifier
            TAG_AUGMENT_MACHINE_SECONDARY = "MachineSec"    Secondary Output Modifier

            TAG_AUGMENT_MACHINE_CATALYST = "MachineCat"     Catalyst Use Rate
            TAG_AUGMENT_MACHINE_ENERGY = "MachineEnergy"    Energy per Process
            TAG_AUGMENT_MACHINE_POWER = "MachinePower"      Energy Capacity
            TAG_AUGMENT_MACHINE_SPEED = "MachineSpeed"      Processing Speed
            TAG_AUGMENT_MACHINE_XP = "MachineXp"            XP per Process??? 
    */

    const recipes = [
        // Integral Components
        /*  These are the default values, adding them for reference
        {
            type: {},
            toReplace: 'thermal:upgrade_augment_1',
            replaceWith: Item.of('thermal:upgrade_augment_1', '{AugmentData:{Type:"Upgrade",BaseMod:2.0d}}')
        },
        {
            type: {},
            toReplace: 'thermal:upgrade_augment_2',
            replaceWith: Item.of('thermal:upgrade_augment_2', '{AugmentData:{Type:"Upgrade",BaseMod:3.0d}}')
        },
        {
            type: {},
            toReplace: 'thermal:upgrade_augment_3',
            replaceWith: Item.of('thermal:upgrade_augment_3', '{AugmentData:{Type:"Upgrade",BaseMod:4.0d}}')
        },
        */
        // Dynamo Augments
        {
            type: {},
            toReplace: 'thermal:dynamo_output_augment',
            replaceWith: Item.of(
                'thermal:dynamo_output_augment',
                '{AugmentData:{Type:"Dynamo",DynamoEnergy:0.9d,DynamoPower:10.0d}}'
            )
        },
        {
            type: {},
            toReplace: 'thermal:dynamo_fuel_augment',
            replaceWith: Item.of('thermal:dynamo_fuel_augment', '{AugmentData:{Type:"Dynamo",DynamoEnergy:1.2d}}')
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceOutput(recipe.type, recipe.toReplace, recipe.replaceWith);
    });
});
