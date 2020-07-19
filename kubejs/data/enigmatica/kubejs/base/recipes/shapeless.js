events.listen('recipes', function (event) {
    var recipes = [
        //shapelessRecipe('botania:enchanted_soil', ['minecraft:grass_block', 'botania:overgrowth_seed']),
        shapelessRecipe('minecraft:sticky_piston', ['minecraft:piston', '#forge:slimeballs']),
        shapelessRecipe('minecraft:flint', ['#forge:gravel', '#forge:gravel', '#forge:gravel']),
        //shapelessRecipe('simplefarming:cornbread', ['#forge:grain', '#forge:crops/corn', '#forge:grain']),
        shapelessRecipe('minecraft:chest', ['#forge:chests/wooden']),
        // shapelessRecipe('minecraft:crafting_table', [
        //     'craftingstation:crafting_station_slab',
        //     'craftingstation:crafting_station_slab'
        // ]),
        // shapelessRecipe('simplefarming:fish_sandwich', [
        //     '#forge:bread',
        //     'aquaculture:fish_fillet_cooked',
        //     'aquaculture:fish_fillet_cooked',
        //     '#forge:crops/tomato',
        //     '#forge:salad_ingredients'
        // ]),
        // shapelessRecipe('simplefarming:sushi', [
        //     '#forge:grain',
        //     'minecraft:dried_kelp',
        //     'aquaculture:fish_fillet_raw',
        //     'aquaculture:fish_fillet_raw'
        // ]),
        // shapelessRecipe('simplefarming:fish_fillet', [
        //     '#forge:grain',
        //     '#forge:grain',
        //     'aquaculture:fish_fillet_cooked',
        //     'aquaculture:fish_fillet_cooked'
        // ]),
        // shapelessRecipe('tetra:magmatic_cell', [
        //     { item: 'tetra:magmatic_cell', nbt: { Damage: 128 } },
        //     'powah:capacitor_blazing',
        //     'powah:capacitor_blazing'
        // ]),
        shapelessRecipe('minecraft:wheat_seeds', ['minecraft:wheat'])
        // shapelessRecipe('quark:root', ['minecraft:vine', '#forge:dyes/brown']),
        // shapelessRecipe(
        //     {
        //         item: 'akashictome:tome',
        //         nbt: {
        //             'akashictome:is_morphing': 1,
        //             'akashictome:data': {
        //                 modularrouters: {
        //                     id: 'patchouli:guide_book',
        //                     Count: 1,
        //                     tag: { 'patchouli:book': 'modularrouters:book' }
        //                 },
        //                 powah: {
        //                     id: 'powah:book',
        //                     Count: 1,
        //                     tag: {
        //                         'akashictome:displayName': '{"translate":"item.powah.book"}',
        //                         'akashictome:is_morphing': 1,
        //                         display: {
        //                             Name:
        //                                 '{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.powah.book"}]}'
        //                         }
        //                     }
        //                 },
        //                 rftoolsbase: {
        //                     id: 'patchouli:guide_book',
        //                     Count: 1,
        //                     tag: { 'patchouli:book': 'rftoolsbase:manual' }
        //                 },
        //                 naturesaura: {
        //                     id: 'patchouli:guide_book',
        //                     Count: 1,
        //                     tag: {
        //                         'akashictome:displayName': '{"translate":"item.naturesaura.book.name"}',
        //                         'patchouli:book': 'naturesaura:book',
        //                         'akashictome:is_morphing': 1,
        //                         display: {
        //                             Name:
        //                                 '{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.naturesaura.book.name"}]}'
        //                         }
        //                     }
        //                 },
        //                 transport: {
        //                     id: 'patchouli:guide_book',
        //                     Count: 1,
        //                     tag: { 'patchouli:book': 'transport:guide' }
        //                 },
        //                 engineersdecor: {
        //                     id: 'patchouli:guide_book',
        //                     Count: 1,
        //                     tag: { 'patchouli:book': 'engineersdecor:engineersdecor_manual' }
        //                 },
        //                 psi: {
        //                     id: 'patchouli:guide_book',
        //                     Count: 1,
        //                     tag: { 'patchouli:book': 'psi:encyclopaedia_psionica' }
        //                 },
        //                 pneumaticcraft: {
        //                     id: 'patchouli:guide_book',
        //                     Count: 1,
        //                     tag: { 'patchouli:book': 'pneumaticcraft:book' }
        //                 },
        //                 occultism: { id: 'occultism:dictionary_of_spirits', Count: 1 },
        //                 solcarrot: { id: 'solcarrot:food_book', Count: 1 },
        //                 immersiveengineering: { id: 'immersiveengineering:manual', Count: 1 },
        //                 integrateddynamics: { id: 'integrateddynamics:on_the_dynamics_of_integration', Count: 1 }
        //             }
        //         }
        //     },
        //     ['minecraft:book', '#forge:bookshelves']
        // )
    ];

    recipes.forEach(function (recipe) {
        event.shapeless(recipe.result, recipe.ingredients);
    });
});
