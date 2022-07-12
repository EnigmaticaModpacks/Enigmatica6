onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    // Altar's Max Fill rate is 300 aura per tick. If a recipe draws faster than this, it'll still work, but will slow the craft down to that rate if a large enough batch goes through.
    const id_prefix = 'enigmatica:expert/naturesaura/altar/';
    const recipes = [
        {
            input: 'architects_palette:sunmetal_brick',
            output: { item: 'naturesaura:infused_iron' },
            aura_type: 'naturesaura:overworld',
            aura: 15000,
            time: 80,
            id: 'naturesaura:altar/infused_iron'
        },
        {
            input: 'architects_palette:sunmetal_block',
            output: { item: 'naturesaura:infused_iron_block' },
            aura_type: 'naturesaura:overworld',
            aura: 135000,
            time: 700,
            id: 'naturesaura:altar/infused_iron_block'
        },
        {
            input: '#forge:ingots/arcane_gold',
            output: { item: 'naturesaura:tainted_gold' },
            aura_type: 'naturesaura:nether',
            aura: 15000,
            time: 80,
            id: 'naturesaura:altar/tainted_gold'
        },
        {
            input: '#forge:storage_blocks/arcane_gold',
            output: { item: 'naturesaura:tainted_gold_block' },
            aura_type: 'naturesaura:nether',
            aura: 135000,
            time: 700,
            id: 'naturesaura:altar/tainted_gold_block'
        },
        {
            input: 'eidolon:candle',
            output: { item: 'occultism:candle_white' },
            aura_type: 'naturesaura:nether',
            aura: 18000,
            time: 60,
            id: 'occultism:crafting/candle'
        },
        {
            input: 'kubejs:firmament',
            output: { item: 'architects_palette:sunstone' },
            aura_type: 'naturesaura:overworld',
            aura: 5000,
            time: 20,
            id: `${id_prefix}sunstone`
        },
        {
            input: 'ars_nouveau:arcane_stone',
            output: { item: 'naturesaura:infused_stone' },
            aura_type: 'naturesaura:nether',
            aura: 12000,
            time: 40,
            id: 'naturesaura:altar/infused_stone'
        },
        {
            input: 'minecraft:glass',
            output: { item: 'glassential:glass_ghostly' },
            aura_type: 'naturesaura:nether',
            aura: 100,
            time: 20,
            id: `${id_prefix}glass_ghostly`
        },
        {
            input: 'minecraft:ender_pearl',
            output: { item: 'integrateddynamics:proto_chorus' },
            aura_type: 'naturesaura:nether',
            aura: 5000,
            time: 20,
            id: 'integrateddynamics:crafting/proto_chorus'
        },
        {
            input: '#minecraft:fishes',
            output: { item: 'aquaculture:fish_bones' },
            aura_type: 'naturesaura:nether',
            catalyst: { item: 'naturesaura:crushing_catalyst' },
            aura: 1000,
            time: 60,
            id: `${id_prefix}fish_bones`
        },
        {
            input: 'minecraft:pufferfish',
            output: { item: 'upgrade_aquatic:lionfish' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura_type: 'naturesaura:nether',
            aura: 15000,
            time: 80,
            id: `${id_prefix}lionfish`
        },
        {
            input: 'integrateddynamics:part_static_light_panel',
            output: { item: 'integrateddynamics:part_display_panel' },
            aura_type: 'naturesaura:nether',
            aura: 100,
            time: 20,
            id: 'integrateddynamics:crafting/part_display_panel'
        },
        {
            input: 'botania:redstone_root',
            output: { item: 'botania:root' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura_type: 'naturesaura:overworld',
            aura: 1500,
            time: 20,
            id: `${id_prefix}root`
        },
        {
            input: 'minecraft:lily_pad',
            output: { item: 'environmental:duckweed' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura_type: 'naturesaura:overworld',
            aura: 15000,
            time: 80,
            id: `${id_prefix}duckweed`
        },
        {
            input: 'ars_nouveau:arcane_stone',
            output: { item: 'ars_nouveau:warding_stone' },
            aura_type: 'naturesaura:overworld',
            aura: 135000,
            time: 450,
            id: `${id_prefix}warding_stone`
        },
        {
            input: '#forge:gems/mana',
            output: { item: 'botania:mana_powder', count: 4 },
            aura_type: 'naturesaura:overworld',
            catalyst: { item: 'naturesaura:crushing_catalyst' },
            aura: 6000,
            time: 20,
            id: `${id_prefix}mana_powder`
        },
        {
            input: 'thermal:phytogro',
            output: { item: 'botania:fertilizer', count: 32 },
            aura_type: 'naturesaura:overworld',
            aura: 50000,
            time: 200,
            id: `${id_prefix}floral_fertilizer`
        },
        {
            input: 'minecraft:slime_ball',
            output: { item: 'tconstruct:ichor_slime_ball' },
            aura_type: 'naturesaura:nether',
            aura: 5000,
            time: 20,
            id: `${id_prefix}ichor_slime_ball`
        },
        {
            input: 'minecraft:slime_ball',
            output: { item: 'tconstruct:sky_slime_ball' },
            aura_type: 'naturesaura:overworld',
            aura: 5000,
            time: 20,
            id: `${id_prefix}sky_slime_ball`
        },
        {
            input: 'tconstruct:earth_congealed_slime',
            output: { item: 'tconstruct:ichor_congealed_slime' },
            aura_type: 'naturesaura:nether',
            aura: 5000 * 3,
            time: 20 * 3,
            id: `${id_prefix}ichor_congealed_slime`
        },
        {
            input: 'tconstruct:earth_congealed_slime',
            output: { item: 'tconstruct:sky_congealed_slime' },
            aura_type: 'naturesaura:overworld',
            aura: 5000 * 3,
            time: 20 * 3,
            id: `${id_prefix}sky_congealed_slime`
        },
        {
            input: 'create:rose_quartz',
            output: { item: 'create:polished_rose_quartz' },
            aura_type: 'naturesaura:overworld',
            aura: 5000,
            time: 20,
            id: `${id_prefix}polished_rose_quartz`
        },
        {
            input: 'botania:vine_ball',
            output: { item: 'botania:thorn_chakram', count: 2 },
            aura_type: 'naturesaura:overworld',
            aura: 135000,
            time: 500,
            id: `${id_prefix}thorn_chakram`
        },
        {
            input: 'ars_nouveau:mana_bloom_crop',
            output: { item: 'botania:overgrowth_seed' },
            aura_type: 'naturesaura:overworld',
            aura: 500000,
            time: 1000,
            id: `${id_prefix}overgrowth_seed`
        },
        {
            input: 'ars_nouveau:magic_clay',
            output: { item: 'ars_nouveau:marvelous_clay' },
            aura_type: 'naturesaura:overworld',
            aura: 15000,
            time: 50,
            id: 'ars_nouveau:marvelous_clay'
        },
        {
            input: 'eidolon:soul_shard',
            output: { item: 'bloodmagic:slate_ampoule' },
            aura_type: 'naturesaura:nether',
            aura: 15000,
            time: 50,
            id: `${id_prefix}slate_ampoule`
        },
        {
            input: 'ars_nouveau:ritual_fertility',
            output: { item: 'naturesaura:birth_spirit', count: 8 },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura_type: 'naturesaura:overworld',
            aura: 300000,
            time: 1000,
            id: `${id_prefix}birth_spirit`
        },
        {
            input: 'astralsorcery:infused_wood',
            output: { item: 'astralsorcery:infused_wood_infused' },
            aura_type: 'naturesaura:overworld',
            aura: 500,
            time: 100,
            id: `astralsorcery:infuser/infused_wood`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:altar';
        recipe.input = Ingredient.of(recipe.input).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
