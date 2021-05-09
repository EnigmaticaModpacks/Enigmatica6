events.listen('recipes', (event) => {
    const recipes = [
        { output: 'botania:enchanted_soil', inputs: ['minecraft:grass_block', 'botania:overgrowth_seed'] },
        { output: 'minecraft:sticky_piston', inputs: ['minecraft:piston', '#forge:slimeballs'] },
        { output: 'minecraft:flint', inputs: ['#forge:gravel', '#forge:gravel', '#forge:gravel'] },
        { output: 'simplefarming:cornbread', inputs: ['#forge:grain', '#forge:crops/corn', '#forge:grain'] },
        { output: 'minecraft:chest', inputs: ['#forge:chests/wooden'] },
        { output: 'minecraft:pumpkin', inputs: ['autumnity:large_pumpkin_slice'] },
        { output: Item.of('powah:uraninite', 9), inputs: ['#forge:storage_blocks/uraninite'] },
        {
            output: 'minecraft:crafting_table',
            inputs: ['craftingstation:crafting_station_slab', 'craftingstation:crafting_station_slab']
        },
        {
            output: 'simplefarming:fish_sandwich',
            inputs: [
                '#forge:bread',
                'aquaculture:fish_fillet_cooked',
                'aquaculture:fish_fillet_cooked',
                '#forge:crops/tomato',
                '#forge:salad_ingredients'
            ]
        },
        {
            output: 'simplefarming:sushi',
            inputs: [
                '#forge:grain',
                'minecraft:dried_kelp',
                'aquaculture:fish_fillet_raw',
                'aquaculture:fish_fillet_raw'
            ]
        },
        {
            output: 'simplefarming:fish_fillet',
            inputs: ['#forge:grain', '#forge:grain', 'aquaculture:fish_fillet_cooked', 'aquaculture:fish_fillet_cooked']
        },
        { output: 'minecraft:wheat_seeds', inputs: ['minecraft:wheat'] },
        { output: 'quark:root', inputs: ['minecraft:vine', '#forge:dyes/brown'] },
        {
            output: Item.of('patchouli:guide_book', { 'patchouli:book': 'patchouli:modded_for_dummies' }),
            inputs: ['minecraft:book', '#forge:dyes/yellow']
        },
        {
            output: Item.of('bambooeverything:bamboo_bundle', 2),
            inputs: ['thermal:bamboo_block', 'thermal:bamboo_block']
        },
        { output: Item.of('thermal:bamboo_block', 2), inputs: ['quark:bamboo_block', 'quark:bamboo_block'] },
        {
            output: Item.of('quark:bamboo_block', 2),
            inputs: ['bambooeverything:bamboo_bundle', 'bambooeverything:bamboo_bundle']
        },
        { output: 'minecraft:crafting_table', inputs: ['#forge:workbench'] },
        {
            output: Item.of('patchouli:guide_book', { 'patchouli:book': 'resourcefulbees:fifty_shades_of_bees' }),
            inputs: ['minecraft:sugar', 'minecraft:book']
        },
        {
            output: 'prettypipes:pipe_frame',
            inputs: ['minecraft:item_frame', 'prettypipes:pipe', '#forge:dusts/redstone']
        },
        {
            output: 'prettypipes:crafting_terminal',
            inputs: ['prettypipes:item_terminal', 'prettypipes:low_crafting_module']
        },
        { output: 'ars_nouveau:mana_gem', inputs: ['emendatusenigmatica:arcane_gem'] },
        { output: 'emendatusenigmatica:arcane_gem', inputs: ['ars_nouveau:mana_gem'] },
        {
            output: 'botania:fertilizer',
            inputs: ['#forge:fertilizer', '#forge:dyes', '#forge:dyes', '#forge:dyes', '#forge:dyes']
        },
        { output: 'emendatusenigmatica:dimensional_gem', inputs: ['rftoolsbase:dimensionalshard'] },
        { output: 'rftoolsbase:dimensionalshard', inputs: ['emendatusenigmatica:dimensional_gem'] },

        {
            output: Item.of('#forge:shards/ender'),
            inputs: ['#forge:ores/ender', 'emendatusenigmatica:enigmatic_hammer']
        },
        {
            output: Item.of('#forge:shards/amber'),
            inputs: ['#forge:ores/amber', 'emendatusenigmatica:enigmatic_hammer']
        },

        { output: Item.of('#forge:shards/ender'), inputs: ['#forge:ores/ender', 'thermal:earth_charge'] },
        { output: Item.of('#forge:shards/amber'), inputs: ['#forge:ores/amber', 'thermal:earth_charge'] },

        { output: 'emendatusenigmatica:fluorite_dust', inputs: ['thermal:earth_charge', '#forge:ores/fluorite'] },
        { output: 'emendatusenigmatica:dimensional_dust', inputs: ['thermal:earth_charge', '#forge:ores/dimensional'] },
        {
            output: 'emendatusenigmatica:potassium_nitrate_dust',
            inputs: ['thermal:earth_charge', '#forge:ores/potassium_nitrate']
        },
        {
            output: 'betterendforge:endstone_dust',
            inputs: [
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone'
            ]
        },
        {
            output: Item.of('akashictome:tome').nbt({
                'akashictome:data': {
                    industrialforegoing: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: { 'patchouli:book': 'industrialforegoing:industrial_foregoing' }
                    },
                    tetra: {
                        id: 'tetra:holo',
                        Count: 1,
                        tag: {
                            'holo/core_material': 'frame/dim',
                            'holo/frame': 'holo/frame',
                            'holo/core': 'holo/core',
                            'holo/frame_material': 'core/ancient'
                        }
                    },
                    resourcefulbees: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: { 'patchouli:book': 'resourcefulbees:fifty_shades_of_bees' }
                    },
                    theoneprobe: { id: 'theoneprobe:probenote', Count: 1 },
                    astralsorcery: { id: 'astralsorcery:tome', Count: 1 },
                    ftbquests: { id: 'ftbquests:book', Count: 1 },
                    alexsmobs: { id: 'alexsmobs:animal_dictionary', Count: 1 },
                    immersiveengineering: { id: 'immersiveengineering:manual', Count: 1 },
                    eidolon: { id: 'eidolon:codex', Count: 1 },
                    botania: { id: 'botania:lexicon', Count: 1, tag: {} },
                    thermal: { id: 'patchouli:guide_book', Count: 1, tag: { 'patchouli:book': 'thermal:guidebook' } },
                    patchouli: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: { 'patchouli:book': 'patchouli:modded_for_dummies' }
                    },
                    rftoolsbase: { id: 'rftoolsbase:manual', Count: 1 },
                    cookingforblockheads: {
                        id: 'cookingforblockheads:crafting_book',
                        Count: 1
                    },
                    powah: { id: 'powah:book', Count: 1 },
                    pneumaticcraft: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: { 'patchouli:book': 'pneumaticcraft:book' }
                    },
                    naturesaura: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: { 'patchouli:book': 'naturesaura:book' }
                    },
                    pedestals: { id: 'patchouli:guide_book', Count: 1, tag: { 'patchouli:book': 'pedestals:manual' } },
                    transport: { id: 'patchouli:guide_book', Count: 1, tag: { 'patchouli:book': 'transport:guide' } },
                    engineersdecor: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: { 'patchouli:book': 'engineersdecor:engineersdecor_manual' }
                    },
                    occultism: { id: 'occultism:dictionary_of_spirits', Count: 1 },
                    solcarrot: { id: 'solcarrot:food_book', Count: 1 },
                    modularrouters: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: { 'patchouli:book': 'modularrouters:book' }
                    },
                    ars_nouveau: { id: 'ars_nouveau:worn_notebook', Count: 1 },
                    bloodmagic: { id: 'patchouli:guide_book', Count: 1, tag: { 'patchouli:book': 'bloodmagic:guide' } },
                    integrateddynamics: { id: 'integrateddynamics:on_the_dynamics_of_integration', Count: 1 },
                    betterendforge: { id: 'betterendforge:guidebook', Count: 1 }
                }
            }),
            inputs: ['minecraft:book', '#forge:bookshelves']
        },
        {
            output: Item.of('buildersaddition:large_candle', 4),
            inputs: ['#forge:wax', '#forge:wax', '#forge:wax', '#forge:string']
        },
        { output: Item.of('occultism:tallow', 9), inputs: ['quark:tallow_block'] },
        {
            output: 'minecraft:writable_book',
            inputs: ['minecraft:book', '#forge:dyes/black', '#forge:feathers'],
            id: 'minecraft:writable_book'
        },
        { output: Item.of('minecraft:honeycomb', 9), inputs: ['minecraft:honeycomb_block'] },
        { output: Item.of('byg:pollen_dust', 4), inputs: ['byg:pollen_block'] },

        { output: Item.of('betterendforge:lumecorn_seed', 6), inputs: ['betterendforge:lumecorn_rod'] },
        { output: Item.of('betterendforge:bulb_vine_seed', 4), inputs: ['betterendforge:glowing_bulb'] },
        { output: Item.of('betterendforge:end_lily_seed', 1), inputs: ['betterendforge:end_lily_leaf'] },
        { output: Item.of('betterendforge:blue_vine_seed', 4), inputs: ['betterendforge:blue_vine_lantern'] },
        {
            output: Item.of('betterendforge:glowing_pillar_seed', 4),
            inputs: ['betterendforge:glowing_pillar_luminophor']
        },
        {
            output: Item.of('minecraft:paper', 3),
            inputs: ['minecraft:sugar_cane', 'minecraft:sugar_cane', 'minecraft:sugar_cane']
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.shapeless(recipe.output, recipe.inputs).id(recipe.id)
            : event.shapeless(recipe.output, recipe.inputs);
    });

    powahTiers.forEach((tier) => {
        if (tier == 'starter') {
            return;
        }
        var capacitor = 'powah:capacitor_' + tier;

        event.shapeless(`powah:reactor_${tier}`, `powah:reactor_${tier}`);

        event.shapeless(`powah:reactor_${tier}`, ['#powah:reactor', capacitor]);
    });

    materialsToUnify.forEach((material) => {
        var ore = Item.of(`emendatusenigmatica:${material}_ore`);
        if (ore.exists) {
            event.shapeless(ore, `#forge:ores/${material}`);
        }
    });
});
