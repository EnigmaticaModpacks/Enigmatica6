events.listen('recipes', (event) => {
    event.remove({ type: 'mekanism:combining' });
    event.remove({ type: 'minecraft:smelting', output: 'minecraft:obsidian' });
    event.remove({ type: 'minecraft:blasting', output: 'minecraft:obsidian' });

    event.remove({ type: 'minecraft:smelting', input: '#forge:ores' });
    event.remove({ type: 'minecraft:blasting', input: '#forge:ores' });

    event.remove({ type: 'minecraft:smelting', input: '#forge:dusts' });
    event.remove({ type: 'minecraft:blasting', input: '#forge:dusts' });

    event.remove({ type: 'minecraft:smelting', input: '#farmersdelight:tools/knives' });
    event.remove({ type: 'minecraft:blasting', input: '#farmersdelight:tools/knives' });

    event.remove({ mod: 'prettypipes' });
    event.remove({ mod: 'ironjetpacks' });

    var outputRemovals = [
        'aiotbotania:livingwood_shears',
        'aiotbotania:livingrock_shears',

        'bambooeverything:bamboo_bundle',

        'byg:blue_enchanted_crafting_table',
        'byg:green_enchanted_crafting_table',

        'create:crushing/obsidian',

        'craftingstation:crafting_station',

        'decorative_blocks:lattice',

        'akashictome:tome',

        'magicfeather:magicfeather',

        'mekanism:combiner',
        'mekanism:basic_combining_factory',
        'mekanism:advanced_combining_factory',
        'mekanism:elite_combining_factory',
        'mekanism:ultimate_combining_factory',

        'minecraft:sticky_piston',

        'morevanillalib:obsidian_shard',

        'simplefarming:raw_bacon',
        'powah:uraninite',

        'thermal:bamboo_block'
    ];

    var idRemovals = [
        'aquaculture:brown_mushroom_from_fish',
        'aquaculture:gold_nugget_from_blasting',
        'aquaculture:gold_nugget_from_gold_fish',
        'aquaculture:gold_nugget_from_smelting',
        'aquaculture:iron_nugget_from_blasting',
        'aquaculture:iron_nugget_from_smelting',
        'aquaculture:neptunium_ingot_from_blasting',
        'aquaculture:neptinium_ingot_from_blasting',
        'aquaculture:planks_from_driftwood',
        'aquaculture:red_mushroom_from_red_shrooma',

        'astralsorcery:infuser/gold_ore',

        'autumnity:turkey_piece',
        'autumnity:syrup_bottle',
        'autumnity:syrup_bottle_from_smoking',
        'autumnity:syrup_bottle_from_campfire_cooking',
        'autumnity:sugar_from_sap_bottle',

        'bloodmagic:smelting/ingot_netherite_scrap',

        'botania:fertilizer_dye',

        'botanypots:crafting/compact_hopper_botany_pot',

        'buildersaddition:iron_rod',

        'byg:vermilion_sculk',

        'compactmachines:wall',

        'create:mechanical_crafting/integrated_circuit',
        'create:pressing/lapis_block',
        'create:fill_minecraft_bucket_with_create_honey',

        'eidolon:tallow',
        'engineersdecor:dependent/slag_brick_block_recipe',

        'farmersdelight:cutting/chicken',
        'farmersdelight:integration/create/mixing/pie_crust_from_mixing',
        'farmersdelight:milk_bottle',
        'farmersdelight:milk_bucket_from_bottles',

        'fluxnetworks:fluxcontroller',
        'fluxnetworks:fluxcore',

        'industrialforegoing:laser_drill_ore/niter',
        'industrialforegoing:laser_drill_ore/sapphire',
        'industrialforegoing:laser_drill_ore/ruby',
        'industrialforegoing:laser_drill_ore/ancient_debris',
        'industrialforegoing:laser_drill_ore/arcane',
        'industrialforegoing:laser_drill_ore/mana',
        'industrialforegoing:laser_drill_ore/bitumen',
        'industrialforegoing:laser_drill_ore/fluorite',
        'industrialforegoing:laser_drill_ore/osmium',
        'industrialforegoing:laser_drill_ore/iron',
        'industrialforegoing:laser_drill_ore/gold',
        'industrialforegoing:laser_drill_ore/glowstone',
        'industrialforegoing:laser_drill_ore/emerald',
        'industrialforegoing:laser_drill_ore/uranium',
        'industrialforegoing:laser_drill_ore/tin',
        'industrialforegoing:laser_drill_ore/sulfur',
        'industrialforegoing:laser_drill_ore/silver',
        'industrialforegoing:laser_drill_ore/redstone',
        'industrialforegoing:laser_drill_ore/quartz',
        'industrialforegoing:laser_drill_ore/nickel',
        'industrialforegoing:laser_drill_ore/zinc',
        'industrialforegoing:laser_drill_ore/lead',
        'industrialforegoing:laser_drill_ore/lapis',
        'industrialforegoing:laser_drill_ore/cinnabar',
        'industrialforegoing:laser_drill_ore/diamond',
        'industrialforegoing:laser_drill_ore/copper',
        'industrialforegoing:laser_drill_ore/aluminum',
        'industrialforegoing:laser_drill_ore/coal',
        'industrialforegoing:stonework_generate/andesite',
        'industrialforegoing:stonework_generate/diorite',
        'industrialforegoing:stonework_generate/granite',

        'immersiveengineering:crafting/stick_steel',
        'immersiveengineering:crafting/stick_aluminum',
        'immersiveengineering:crafting/stick_iron',
        'immersiveengineering:crusher/bone_meal',
        'immersiveengineering:crafting/jerrycan',

        'immersivepetroleum:distillationtower/oilcracking',

        'mapperbase:steel_nugget_from_blasting',
        'mapperbase:steel_plate_from_blasting',
        'mapperbase:steel_block_from_blasting',
        'mapperbase:steel_ingot_from_blasting',
        'mapperbase:steel_rod_from_blasting',
        'mapperbase:steel_rod',
        'mapperbase:iron_rod',
        'mapperbase:iron_plate',
        'mapperbase:steel_plate',

        'mekanism:crushing/stone/to_cobblestone',
        'mekanism:reaction/substrate/water_hydrogen',

        'morevanillalib:obsidian_shard',
        'morevanillalib:obsidian',

        'pedestals:pedestal_cobblegen/blackstone',
        'pitg:green_dye',

        'quark:building/crafting/tallow_from_block',

        'thermal:machine/smelter/smelter_alloy_netherite',
        'thermal:machine/press/packing2x2/press_honeycomb_packing',
        'thermal:machine/refinery/refinery_crude_oil',
        'thermal:machine/centrifuge/centrifuge_honeycomb',
        'thermal:machine/centrifuge/centrifuge_oil_red_sand',
        'thermal:machine/centrifuge/centrifuge_oil_sand',
        'thermal:machine/plugins/create/pulverizer_create_zinc_ore',
        'thermal:machine/plugins/mekanism/pulverizer_mek_osmium_ore',
        'thermal:machine/integrateddynamics/sawmill_integrateddynamics_menril_log',
        'thermal:machine/plugins/integrateddynamics/sawmill_integrateddynamics_menril_log',
        'thermal:machine/integrateddynamics/sawmill_integrateddynamics_menril_log_filled',
        'thermal:machine/plugins/integrateddynamics/sawmill_integrateddynamics_menril_log_filled',
        'thermal:storage/sugar_cane_from_block',
        'thermal:devices/plugins/byg/tree_extractor_byg_rainbow_eucalyptus',
        'thermal:devices/plugins/byg/tree_extractor_byg_mahogany',
        'thermal:devices/plugins/byg/tree_extractor_byg_baobab',
        'thermal:devices/tree_extractor/tree_extractor_jungle',

        'powah:crafting/energy_cell_basic_2',
        'powah:crafting/cable_basic',

        'simplefarming:candy',
        'simplefarming:raw_chicken_wings',

        'supplementaries:strings_recipe',

        '/integrateddynamics:\\w+/convenience/minecraft_dye/',
        '/integrateddynamics:\\w+/ore/dust/',
        '/integrateddynamics:\\w+/ore/redstone/',
        '/integrateddynamics:\\w+/ore/quartz/',

        '/integrateddynamics:\\w+/convenience/',
        '/integrateddynamics:\\w+/ore/',
        '/integrateddynamics:blasting/menril_log/'
    ];

    var regexIdRemovals = [
        /emendatusenigmatica:ore_from_chunk_crafting/,
        /emendatusenigmatica:ore_from_chunk_stonecutting/,
        /create:\w+\/bread/,
        /byg:\w*red_rock_\w+_from_\w*stonecutting/,
        /masonry:\w+wall_from_\w+_stonecutting/,
        /masonry:\w+slab_from_\w+_stonecutting/
    ];

    outputRemovals.forEach((removal) => {
        event.remove({ output: removal });
    });

    idRemovals.forEach((removal) => {
        event.remove({ id: removal });
    });

    regexIdRemovals.forEach((removal) => {
        event.remove({ id: removal });
    });

    disabledItems.forEach((disabledItem) => {
        event.remove({ output: disabledItem });
    });

    event.remove({
        output: '/buildersaddition:\\w+_vertical_slab/',
        mod: 'buildersaddition',
        type: 'minecraft:crafting_shaped'
    });

    event.remove({
        output: 'mekanism:sawdust',
        mod: 'mekanism',
        type: 'mekanism:sawing'
    });

    event.remove({
        output: '/\\w+:\\w+_gear$/',
        type: 'minecraft:crafting_shaped'
    });

    event.remove({
        output: '/emendatusenigmatica:\\w+_rod/',
        mod: 'immersiveengineering',
        type: 'immersiveengineering:metal_press'
    });

    event.remove({
        output: '/emendatusenigmatica:\\w+_rod/',
        mod: 'immersiveposts'
    });

    event.remove({
        output: '/emendatusenigmatica:\\w+_gear/',
        mod: 'immersiveengineering'
    });

    event.remove({
        input: '#forge:ores',
        mod: 'create',
        type: 'create:milling'
    });

    event.remove({
        input: '#forge:ores',
        mod: 'create',
        type: 'create:crushing'
    });

    event.remove({
        mod: 'occultism',
        type: 'occultism:miner'
    });

    event.remove({
        output: '/powah:\\w+_starter/',
        mod: 'powah'
    });

    event.remove({ type: 'botanypots:crop' });
    event.remove({ type: 'botanypots:soil' });
    event.remove({ type: 'thermal:insolator' });
    event.remove({ type: 'immersiveengineering:cloche' });

    event.remove({ type: 'valhelsia_structures:axe_crafting' });

    beamRecipes.forEach((recipe) => {
        event.remove({ output: recipe.output });
    });

    stonecuttables.forEach((stoneType) => {
        stoneType.stones.forEach((stone) => {
            event.remove({ type: 'minecraft:stonecutting', output: stone });
        });
        stoneType.onlyAsOutput.forEach((stone) => {
            event.remove({ type: 'minecraft:stonecutting', output: stone });
        });
    });

    event.remove({
        input: '#forge:ores/zinc',
        type: 'thermal:smelter'
    });
    event.remove({
        input: '#forge:ores/osmium',
        type: 'thermal:smelter'
    });
    event.remove({
        input: '#forge:ores/uranium',
        type: 'thermal:smelter'
    });
    event.remove({
        input: '#forge:ores/aluminum',
        type: 'thermal:smelter'
    });
    event.remove({
        input: '#forge:ores/nickel',
        type: 'thermal:smelter'
    });
    event.remove({
        id: /emendatusenigmatica:ore_from_chunk_crafting/
    });
    event.remove({
        input: 'minecraft:fire_charge',
        mod: 'thermal',
        type: 'minecraft:crafting_shapeless'
    });
    event.remove({ type: 'pedestals:pedestal_crushing', output: '#forge:dyes' });
    event.remove({ type: 'create:milling', output: '#forge:dyes' });
    event.remove({ type: 'create:crushing', output: '#forge:dyes' });
    event.remove({ type: 'mekanism:enriching', output: '#forge:dyes' });
    event.remove({ type: 'thermal:centrifuge', output: '#forge:dyes' });
    event.remove({ type: 'immersiveengineering:crusher', output: '#forge:dyes' });
});
