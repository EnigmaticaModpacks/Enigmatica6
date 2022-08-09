onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/bloodmagic/soulforge/';
    const recipes = [
        {
            inputs: [
                'bloodmagic:soulforge',
                '#forge:ingots/iesnium',
                'occultism:spirit_attuned_crystal',
                'glassential:glass_ghostly'
            ],
            output: 'bloodmagic:demoncrystallizer',
            minimumDrain: 500.0,
            drain: 100.0,
            id: 'bloodmagic:soulforge/demon_crystallizer'
        },
        {
            inputs: [
                'bloodmagic:soulforge',
                '#forge:ingots/iesnium',
                'eidolon:crimson_essence',
                'occultism:spirit_attuned_gem'
            ],
            output: 'bloodmagic:demoncrucible',
            minimumDrain: 400.0,
            drain: 100.0,
            id: 'bloodmagic:soulforge/demon_crucible'
        },
        {
            inputs: [
                'eidolon:soul_shard',
                'naturesaura:infused_iron',
                'glassential:glass_ghostly',
                'minecraft:conduit'
            ],
            output: 'bloodmagic:soulgempetty',
            minimumDrain: 1.0,
            drain: 1.0,
            id: 'bloodmagic:soulforge/pettytartaricgem'
        },
        {
            inputs: [
                'bloodmagic:soulgempetty',
                '#forge:ingots/forgotten_metal',
                'glassential:glass_ethereal',
                'quark:diamond_heart'
            ],
            output: 'bloodmagic:soulgemlesser',
            minimumDrain: 60.0,
            drain: 20.0,
            id: 'bloodmagic:soulforge/lessertartaricgem'
        },
        {
            inputs: [
                'bloodmagic:soulgemlesser',
                '#forge:ingots/enderium',
                '#botania:runes/helheim',
                'bloodmagic:infusedslate'
            ],
            output: 'bloodmagic:soulgemcommon',
            minimumDrain: 240.0,
            drain: 50.0,
            id: 'bloodmagic:soulforge/commontartaricgem'
        },
        {
            inputs: [
                'bloodmagic:soulgemcommon',
                'bloodmagic:demonslate',
                '#forge:ingots/gaia_spirit',
                '#bloodmagic:crystals/demon'
            ],
            output: 'bloodmagic:soulgemgreater',
            minimumDrain: 1000.0,
            drain: 100.0,
            id: 'bloodmagic:soulforge/greatertartaricgem'
        },
        {
            inputs: ['#forge:storage_blocks/gold', 'eidolon:crimson_essence'],
            output: Item.of('eidolon:arcane_gold_block'),
            minimumDrain: 32.0,
            drain: 16.0,
            id: `${id_prefix}arcane_gold_ingot`
        },
        {
            inputs: [
                'bloodmagic:rawdemoncrystal',
                Item.of('bloodmagic:soulpickaxe', '{Damage:0]}').weakNBT(),
                '#forge:storage_blocks/iesnium'
            ],
            output: Item.of('occultism:iesnium_pickaxe'),
            minimumDrain: 4000.0,
            drain: 2048.0,
            id: 'occultism:crafting/iesnium_pickaxe'
        },
        {
            inputs: ['occultism:dimensional_matrix', 'occultism:storage_controller_base'],
            output: 'occultism:storage_controller',
            minimumDrain: 32.0,
            drain: 16.0,
            id: 'occultism:crafting/storage_controller'
        },
        {
            inputs: ['bloodmagic:dungeon_stone', '#forge:ingots/tainted_gold', '#forge:gems/nitro'],
            output: 'bloodmagic:crystalline_resonator',
            minimumDrain: 1200.0,
            drain: 200.0,
            id: 'bloodmagic:soulforge/primitive_crystalline_resonator'
        },
        {
            inputs: [
                'bloodmagic:tauoil',
                'atum:anputs_fingers_spores',
                'eidolon:ender_calx',
                '#quark:crystal_clusters/white'
            ],
            output: 'bloodmagic:rawcatalyst',
            minimumDrain: 400.0,
            drain: 20.0,
            id: 'bloodmagic:soulforge/raw_catalyst'
        },
        {
            inputs: [
                'bloodmagic:tauoil',
                'atum:anputs_fingers_spores',
                'eidolon:ender_calx',
                '#quark:crystal_clusters/green'
            ],
            output: 'bloodmagic:corrosivecatalyst',
            minimumDrain: 400.0,
            drain: 20.0,
            id: 'bloodmagic:soulforge/corrosive_catalyst'
        },
        {
            inputs: [
                'bloodmagic:tauoil',
                'atum:anputs_fingers_spores',
                'eidolon:ender_calx',
                '#quark:crystal_clusters/red'
            ],
            output: 'bloodmagic:vengefulcatalyst',
            minimumDrain: 400.0,
            drain: 20.0,
            id: 'bloodmagic:soulforge/vengeful_catalyst'
        },
        {
            inputs: [
                'bloodmagic:tauoil',
                'atum:anputs_fingers_spores',
                'eidolon:ender_calx',
                '#quark:crystal_clusters/yellow'
            ],
            output: 'bloodmagic:destructivecatalyst',
            minimumDrain: 400.0,
            drain: 20.0,
            id: 'bloodmagic:soulforge/destructive_catalyst'
        },
        {
            inputs: [
                'bloodmagic:tauoil',
                'atum:anputs_fingers_spores',
                'eidolon:ender_calx',
                '#quark:crystal_clusters/indigo'
            ],
            output: 'bloodmagic:steadfastcatalyst',
            minimumDrain: 400.0,
            drain: 20.0,
            id: 'bloodmagic:soulforge/steadfast_catalyst'
        }
    ];

    const patchouli_safe_removals = [
        { output: 'bloodmagic:soulsword', id: 'bloodmagic:soulforge/sentientsword' },
        { output: 'bloodmagic:soulaxe', id: 'bloodmagic:soulforge/sentientaxe' },
        { output: 'bloodmagic:soulpickaxe', id: 'bloodmagic:soulforge/sentientpickaxe' },
        { output: 'bloodmagic:soulshovel', id: 'bloodmagic:soulforge/sentientshovel' },
        { output: 'bloodmagic:soulscythe', id: 'bloodmagic:soulforge/sentientscythe' },
        { output: 'bloodmagic:noderouter', id: 'bloodmagic:soulforge/node_router' },
        { output: 'bloodmagic:itemroutingnode', id: 'bloodmagic:soulforge/routing_node' },
        { output: 'bloodmagic:outputroutingnode', id: 'bloodmagic:soulforge/output_routing_node' },
        { output: 'bloodmagic:inputroutingnode', id: 'bloodmagic:soulforge/input_routing_node' },
        { output: 'bloodmagic:masterroutingnode', id: 'bloodmagic:soulforge/master_routing_node' },
        { output: 'bloodmagic:demonpylon', id: 'bloodmagic:soulforge/demon_pylon' },
        { output: 'bloodmagic:mastercore', id: 'bloodmagic:soulforge/master_node_upgrade' }
    ];

    patchouli_safe_removals.forEach((recipe) => {
        recipes.push({
            inputs: ['kubejs:altered_recipe_indicator'],
            output: Item.of(recipe.output),
            minimumDrain: 0.0,
            drain: 0.0,
            id: recipe.id
        });
    });

    recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .soulforge(recipe.output, recipe.inputs)
            .minimumDrain(recipe.minimumDrain)
            .drain(recipe.drain)
            .id(recipe.id);
    });
});
