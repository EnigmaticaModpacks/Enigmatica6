onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const idRemovals = [
        'ars_nouveau:dull_trinket',
        'ars_nouveau:moonfall_2',
        'ars_nouveau:mundane_belt',
        'ars_nouveau:ring_of_potential',
        'ars_nouveau:stone_2',
        'ars_nouveau:sunrise_2',

        'astralsorcery:altar/black_marble_raw',
        'astralsorcery:shaped/black_marble/black_marble_raw',
        'astralsorcery:shaped/wand',

        'atum:blast_furnace',
        'atum:book',

        'betterendforge:leather_to_stripes',

        'bloodmagic:arc/weakbloodshard_tau',
        /bloodmagic:alchemytable\/melee_damage_anointment/,

        'botania:mana_infusion/mana_diamond_block',
        'byg:compat/create/black_sand_from_crushing',

        /compactmachines:machine_/,
        /create:pressing\/\w*_ingot/,

        /dankstorage:\w_to_\w/,
        'dankstorage:dock',

        'darkutils:crafting/rune_damage_player',
        'darkutils:crafting/blank_plate',
        /darkutils:crafting\/export_plate/,

        'farmersdelight:book_from_canvas',

        'fluxnetworks:fluxcontroller',

        'immersiveengineering:crafting/component_iron',
        'immersiveengineering:crafting/component_steel',
        'immersiveengineering:crafting/concrete',
        'immersiveengineering:crafting/concrete2',
        'immersiveengineering:mixer/concrete',
        /immersiveengineering:crafting\/plate_/,
        'immersiveengineering:crafting/cokebrick',
        'immersiveengineering:crafting/blastbrick',
        'immersiveengineering:crafting/alloybrick',

        'industrialforegoing:mob_slaughter_factory',

        'integrateddynamics:crafting/cable',
        'integrateddynamics:crafting/cable_rotated',
        'integrateddynamics:crafting/energy_battery',
        'integrateddynamics:crafting/mechanical_drying_basin',
        'integrateddynamics:crafting/mechanical_squeezer',
        'integrateddynamics:crafting/drying_basin',
        'integrateddynamics:crafting/squeezer',
        'integrateddynamics:crafting/coal_generator',
        'integrateddynamics:crafting/logic_director',
        'integrateddynamics:crafting/variable_transformer_output',
        'integrateddynamics:crafting/variable_transformer_input',

        'mekanism:metallurgic_infusing/alloy/reinforced',
        'mekanism:metallurgic_infusing/alloy/atomic',
        'mekanism:enriching/conversion/basalt_to_polished_basalt',
        'mekanism:processing/refined_glowstone/ingot_to_dust',
        'mekanism:processing/refined_obsidian/dust/from_ingot',
        'mekanism:osmium_compressor',
        /mekanism:factory/,
        'mekanism:robit',

        'minecraft:book',
        'minecraft:leather_to_stripes',
        'minecraft:stick',

        'mininggadgets:upgrade_empty',

        'pedestals:ingot_gold_from_upgrades',
        'pedestals:upgrades/breaker2',
        'pedestals:upgrades/crafter1mk2',
        'pedestals:upgrades/recycler',
        'pedestals:upgrades/rfexpgen',
        'pedestals:upgrades/rffuelgen',

        'pneumaticcraft:explosion_crafting/compressed_iron_block',
        'pneumaticcraft:explosion_crafting/compressed_iron_ingot',
        'pneumaticcraft:speed_upgrade',

        'powah:crafting/dielectric_paste_2',
        'powah:energizing/blazing_crystal_2',
        'powah:crafting/capacitor_basic',
        'powah:crafting/capacitor_basic_tiny',
        'powah:crafting/thermoelectric_plate',
        /powah:crafting\/cable_/,

        'quark:building/crafting/candles/candle_basic',
        'quark:building/crafting/red_nether_bricks_util',

        'refinedstorage:quartz_enriched_iron',

        'sophisticatedbackpacks:feeding_upgrade',
        'sophisticatedbackpacks:advanced_feeding_upgrade',
        'sophisticatedbackpacks:auto_smelting_upgrade',
        'sophisticatedbackpacks:pump_upgrade',
        'sophisticatedbackpacks:advanced_pump_upgrade',
        'sophisticatedbackpacks:xp_pump_upgrade',
        'sophisticatedbackpacks:compacting_upgrade',
        'sophisticatedbackpacks:advanced_compacting_upgrade',
        'sophisticatedbackpacks:tool_swapper_upgrade',
        'sophisticatedbackpacks:advanced_tool_swapper_upgrade',
        'sophisticatedbackpacks:refill_upgrade',

        'tanknull:dock',

        'tconstruct:smeltery/scorched/scorched_brick',
        'tconstruct:smeltery/scorched/scorched_brick_kiln',
        'tconstruct:smeltery/seared/melter',
        'tconstruct:smeltery/seared/seared_brick',
        'tconstruct:smeltery/seared/seared_brick_kiln',
        'tconstruct:tables/book_substitute',
        'tconstruct:smeltery/melting/metal/netherite/lodestone',

        'thermal:compat/refinedstorage/smelter_refinedstorage_alloy_quartz_enriched_iron',

        /create:crafting\/materials\/andesite_alloy/,
        /emendatusenigmatica:alloy_dust/
    ];

    const outputRemovals = ['tiab:timeinabottle', 'minecraft:nautilus_shell', 'bloodmagic:intermediatecuttingfluid'];

    const patchouli_safe_removals = [
        { output: 'apotheosis:hellshelf', id: 'apotheosis:hellshelf' },
        { output: 'apotheosis:seashelf', id: 'apotheosis:seashelf' },
        { output: 'apotheosis:endshelf', id: 'apotheosis:endshelf' },

        { output: 'ars_nouveau:arcane_stone', id: 'ars_nouveau:arcane_stone' },
        { output: 'ars_nouveau:crystallizer', id: 'ars_nouveau:crystallizer' },
        { output: 'ars_nouveau:volcanic_accumulator', id: 'ars_nouveau:volcanic_accumulator' },
        { output: 'ars_nouveau:mana_condenser', id: 'ars_nouveau:mana_condenser' },
        { output: 'ars_nouveau:mycelial_sourcelink', id: 'ars_nouveau:mycelial_sourcelink' },
        { output: 'ars_nouveau:vitalic_sourcelink', id: 'ars_nouveau:vitalic_sourcelink' },
        { output: 'ars_nouveau:alchemical_sourcelink', id: 'ars_nouveau:alchemical_sourcelink' },
        { output: 'ars_nouveau:novice_hood', id: 'ars_nouveau:novice_hood' },
        { output: 'ars_nouveau:novice_robes', id: 'ars_nouveau:novice_robes' },
        { output: 'ars_nouveau:novice_leggings', id: 'ars_nouveau:novice_leggings' },
        { output: 'ars_nouveau:novice_boots', id: 'ars_nouveau:novice_boots' },
        { output: 'ars_nouveau:apprentice_hood', id: 'ars_nouveau:apprentice_hood' },
        { output: 'ars_nouveau:apprentice_robes', id: 'ars_nouveau:apprentice_robes' },
        { output: 'ars_nouveau:apprentice_leggings', id: 'ars_nouveau:apprentice_leggings' },
        { output: 'ars_nouveau:apprentice_boots', id: 'ars_nouveau:apprentice_boots' },
        { output: 'ars_nouveau:archmage_hood', id: 'ars_nouveau:archmage_hood' },
        { output: 'ars_nouveau:archmage_robes', id: 'ars_nouveau:archmage_robes' },
        { output: 'ars_nouveau:archmage_leggings', id: 'ars_nouveau:archmage_leggings' },
        { output: 'ars_nouveau:archmage_boots', id: 'ars_nouveau:archmage_boots' },

        { output: 'bloodmagic:soulforge', id: 'bloodmagic:soul_forge' },
        { output: 'bloodmagic:ritualdiviner', id: 'bloodmagic:ritual_diviner_0' },
        { output: 'bloodmagic:blankrune', id: 'bloodmagic:blood_rune_blank' },
        { output: 'bloodmagic:speedrune', id: 'bloodmagic:blood_rune_speed' },
        { output: 'bloodmagic:sacrificerune', id: 'bloodmagic:blood_rune_sacrifice' },
        { output: 'bloodmagic:selfsacrificerune', id: 'bloodmagic:blood_rune_self_sacrifice' },
        { output: 'bloodmagic:dislocationrune', id: 'bloodmagic:blood_rune_displacement' },
        { output: 'bloodmagic:altarcapacityrune', id: 'bloodmagic:blood_rune_capacity' },
        { output: 'bloodmagic:bettercapacityrune', id: 'bloodmagic:blood_rune_aug_capacity' },
        { output: 'bloodmagic:orbcapacityrune', id: 'bloodmagic:blood_rune_orb' },
        { output: 'bloodmagic:accelerationrune', id: 'bloodmagic:blood_rune_acceleration' },
        { output: 'bloodmagic:chargingrune', id: 'bloodmagic:blood_rune_charging' },

        { output: 'botania:terrasteel_helmet', id: 'botania:terrasteel_helmet' },
        { output: 'botania:terrasteel_chestplate', id: 'botania:terrasteel_chestplate' },
        { output: 'botania:terrasteel_leggings', id: 'botania:terrasteel_leggings' },
        { output: 'botania:terrasteel_boots', id: 'botania:terrasteel_boots' },
        { output: 'botania:spark', id: 'botania:spark' },
        { output: 'botania:mana_pylon', id: 'botania:mana_pylon' },
        { output: 'botania:natura_pylon', id: 'botania:natura_pylon' },
        { output: 'botania:apothecary_default', id: 'botania:apothecary_default' },
        { output: 'botania:terra_plate', id: 'botania:terra_plate' },
        { output: 'botania:alfheim_portal', id: 'botania:alfheim_portal' },
        { output: 'botania:mana_ring', id: 'botania:mana_ring' },
        { output: 'botania:gaia_ingot', id: 'botania:gaia_ingot' },
        { output: 'botania:gaia_pylon', id: 'botania:gaia_pylon' },
        { output: 'botania:mining_ring', id: 'botania:mining_ring' },
        { output: 'botania:dodge_ring', id: 'botania:dodge_ring' },
        { output: 'botania:swap_ring', id: 'botania:swap_ring' },
        { output: 'botania:water_ring', id: 'botania:water_ring' },
        { output: 'botania:magnet_ring', id: 'botania:magnet_ring' },
        { output: 'botania:aura_ring', id: 'botania:aura_ring' },
        { output: 'botania:pixie_ring', id: 'botania:pixie_ring' },
        { output: 'botania:reach_ring', id: 'botania:reach_ring' },
        { output: 'botania:flight_tiara', id: 'botania:flighttiara_0' },
        { output: 'botania:runic_altar', id: 'botania:runic_altar' },
        { output: 'botania:mana_spreader', id: 'botania:mana_spreader' },
        { output: 'botania:elven_spreader', id: 'botania:elven_spreader' },
        { output: 'botania:gaia_spreader', id: 'botania:gaia_spreader' },
        { output: 'botania:fel_pumpkin', id: 'botania:fel_pumpkin' },
        { output: 'botania:blood_pendant', id: 'botania:blood_pendant' },

        { output: 'botania:gaia_pylon', id: 'mythicbotany:modified_gaia_pylon_with_alfsteel' },
        { output: 'mythicbotany:alfsteel_pylon', id: 'mythicbotany:alfsteel_pylon' },
        { output: 'mythicbotany:mana_infuser', id: 'mythicbotany:mana_infuser' },
        { output: 'mythicbotany:fire_ring', id: 'mythicbotany:fire_ring' },
        { output: 'mythicbotany:ice_ring', id: 'mythicbotany:ice_ring' },
        { output: 'mythicbotany:mana_collector', id: 'mythicbotany:mana_collector' },

        { output: 'naturesaura:calling_spirit', id: 'naturesaura:calling_spirit' },
        { output: 'naturesaura:animal_spawner', id: 'naturesaura:animal_spawner' },
        { output: 'naturesaura:gold_fiber', id: 'naturesaura:gold_fiber' },
        { output: 'naturesaura:gold_brick', id: 'naturesaura:gold_brick' },
        { output: 'naturesaura:generator_limit_remover', id: 'naturesaura:generator_limit_remover' },
        { output: 'naturesaura:shockwave_creator', id: 'naturesaura:shockwave_creator' },
        { output: 'naturesaura:death_ring', id: 'naturesaura:death_ring' },

        { output: 'pneumaticcraft:air_compressor', id: 'pneumaticcraft:air_compressor' },
        { output: 'pneumaticcraft:advanced_air_compressor', id: 'pneumaticcraft:advanced_air_compressor' },
        { output: 'pneumaticcraft:pressure_chamber_wall', id: 'pneumaticcraft:pressure_chamber_valve_x1' },
        { output: 'pneumaticcraft:pressure_chamber_wall', id: 'pneumaticcraft:pressure_chamber_valve_x4' },
        { output: 'pneumaticcraft:flux_compressor', id: 'pneumaticcraft:flux_compressor' },
        { output: 'pneumaticcraft:printed_circuit_board', id: 'pneumaticcraft:printed_circuit_board' },
        { output: 'pneumaticcraft:assembly_drill', id: 'pneumaticcraft:assembly_drill' },
        { output: 'pneumaticcraft:assembly_laser', id: 'pneumaticcraft:assembly_laser' },
        { output: 'pneumaticcraft:assembly_io_unit_import', id: 'pneumaticcraft:assembly_io_unit_import' },
        { output: 'pneumaticcraft:assembly_io_unit_export', id: 'pneumaticcraft:assembly_io_unit_export' },
        { output: 'pneumaticcraft:assembly_controller', id: 'pneumaticcraft:assembly_controller' },
        { output: 'pneumaticcraft:assembly_platform', id: 'pneumaticcraft:assembly_platform' },
        { output: 'pneumaticcraft:aerial_interface', id: 'pneumaticcraft:aerial_interface' },
        { output: 'pneumaticcraft:spawner_extractor', id: 'pneumaticcraft:spawner_extractor' }
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });

    event.remove({ type: 'minecraft:crafting_shapeless', output: '#forge:dusts', mod: 'thermal' });
    event.remove({ type: 'minecraft:crafting_shapeless', output: '#forge:dusts', mod: 'immersiveengineering' });
    event.remove({ type: 'integrateddynamics:drying_basin' });
    event.remove({ type: 'integrateddynamics:mechanical_drying_basin' });
    event.remove({ type: 'integrateddynamics:squeezer' });
    event.remove({ type: 'integrateddynamics:mechanical_drying_basin' });

    patchouli_safe_removals.forEach((recipe) => {
        event.shaped(recipe.output, ['A'], { A: 'kubejs:altered_recipe_indicator' }).id(recipe.id);
    });
});
