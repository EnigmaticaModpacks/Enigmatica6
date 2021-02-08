events.listen('recipes', (event) => {
    var recipes = [
        shapelessRecipe('botania:enchanted_soil', ['minecraft:grass_block', 'botania:overgrowth_seed']),
        shapelessRecipe('minecraft:sticky_piston', ['minecraft:piston', '#forge:slimeballs']),
        shapelessRecipe('minecraft:flint', ['#forge:gravel', '#forge:gravel', '#forge:gravel']),
        shapelessRecipe('simplefarming:cornbread', ['#forge:grain', '#forge:crops/corn', '#forge:grain']),
        shapelessRecipe('minecraft:chest', ['#forge:chests/wooden']),
        shapelessRecipe('minecraft:crafting_table', [
            'craftingstation:crafting_station_slab',
            'craftingstation:crafting_station_slab'
        ]),
        shapelessRecipe('simplefarming:fish_sandwich', [
            '#forge:bread',
            'aquaculture:fish_fillet_cooked',
            'aquaculture:fish_fillet_cooked',
            '#forge:crops/tomato',
            '#forge:salad_ingredients'
        ]),
        shapelessRecipe('simplefarming:sushi', [
            '#forge:grain',
            'minecraft:dried_kelp',
            'aquaculture:fish_fillet_raw',
            'aquaculture:fish_fillet_raw'
        ]),
        shapelessRecipe('simplefarming:fish_fillet', [
            '#forge:grain',
            '#forge:grain',
            'aquaculture:fish_fillet_cooked',
            'aquaculture:fish_fillet_cooked'
        ]),
        shapelessRecipe('minecraft:wheat_seeds', ['minecraft:wheat']),
        shapelessRecipe('quark:root', ['minecraft:vine', '#forge:dyes/brown']),
        shapelessRecipe(item.of('patchouli:guide_book', { 'patchouli:book': 'patchouli:modded_for_dummies' }), [
            'minecraft:book',
            '#forge:dyes/yellow'
        ]),
        shapelessRecipe(item.of('bambooeverything:bamboo_bundle', 2), ['thermal:bamboo_block', 'thermal:bamboo_block']),
        shapelessRecipe(item.of('thermal:bamboo_block', 2), ['quark:bamboo_block', 'quark:bamboo_block']),
        shapelessRecipe(item.of('quark:bamboo_block', 2), [
            'bambooeverything:bamboo_bundle',
            'bambooeverything:bamboo_bundle'
        ]),
        shapelessRecipe('minecraft:crafting_table', ['#forge:workbench']),
        shapelessRecipe(item.of('patchouli:guide_book', { 'patchouli:book': 'resourcefulbees:fifty_shades_of_bees' }), [
            'minecraft:sugar',
            'minecraft:book'
        ]),
        shapelessRecipe('prettypipes:pipe_frame', [
            'minecraft:item_frame',
            'prettypipes:pipe',
            '#forge:dusts/redstone'
        ]),
        shapelessRecipe('prettypipes:crafting_terminal', [
            'prettypipes:item_terminal',
            'prettypipes:low_crafting_module'
        ]),
        shapelessRecipe('ars_nouveau:mana_gem', ['emendatusenigmatica:arcane_gem']),
        shapelessRecipe('emendatusenigmatica:arcane_gem', ['ars_nouveau:mana_gem']),
        shapelessRecipe('botania:fertilizer', [
            '#forge:fertilizer',
            '#forge:dyes',
            '#forge:dyes',
            '#forge:dyes',
            '#forge:dyes'
        ]),
        shapelessRecipe('emendatusenigmatica:dimensional_gem', ['rftoolsbase:dimensionalshard']),
        shapelessRecipe('rftoolsbase:dimensionalshard', ['emendatusenigmatica:dimensional_gem']),

        shapelessRecipe('emendatusenigmatica:fluorite_dust', ['thermal:earth_charge', '#forge:ores/fluorite']),
        shapelessRecipe('emendatusenigmatica:dimensional_dust', ['thermal:earth_charge', '#forge:ores/dimensional']),
        shapelessRecipe('emendatusenigmatica:potassium_nitrate_dust', [
            'thermal:earth_charge',
            '#forge:ores/potassium_nitrate'
        ]),
        shapelessRecipe(
            Item.of('akashictome:tome').nbt({
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
                    integrateddynamics: { id: 'integrateddynamics:on_the_dynamics_of_integration', Count: 1 }
                }
            }),
            ['minecraft:book', '#forge:bookshelves']
        ),
        shapelessRecipe(Item.of('buildersaddition:large_candle', 4), [
            '#forge:wax',
            '#forge:wax',
            '#forge:wax',
            '#forge:string'
        ]),
        shapelessRecipe(Item.of('occultism:tallow', 9), ['quark:tallow_block']),
        shapelessRecipe(
            'minecraft:writable_book',
            ['minecraft:book', '#forge:dyes/black', '#forge:feathers'],
            'minecraft:writable_book'
        )
    ];

    recipes.forEach(function (recipe) {
        if (recipe.id) {
            event.shapeless(recipe.result, recipe.ingredients).id(recipe.id);
        } else {
            event.shapeless(recipe.result, recipe.ingredients);
        }
    });

    powahTiers.forEach(function (tier) {
        event.shapeless(`powah:reactor_${tier}`, `powah:reactor_${tier}`);
    });

    materialsToUnify.forEach((material) => {
        var ore = item.of(`emendatusenigmatica:${material}_ore`);
        if (ore.exists) {
            event.shapeless(ore, `#forge:ores/${material}`);
        }
    });
});
