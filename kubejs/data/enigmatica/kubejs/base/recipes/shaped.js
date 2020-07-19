events.listen('recipes', function (event) {
    var recipes = [
        // shapedRecipe('tetra:hammer_base', ['LXL', 'LCL', 'LXL'], {
        //     L: '#forge:ingots/steel',
        //     X: '#forge:circuits/basic',
        //     C: '#morevanillalib:tools'
        // }),
        // shapedRecipe('tetra:core_extractor', ['LXL', 'LCL', 'LXL'], {
        //     L: '#forge:ingots/steel',
        //     X: '#forge:circuits/basic',
        //     C: 'industrialforegoing:fluid_extractor'
        // }),
        shapedRecipe(item.of('minecraft:stick', 16), ['A', 'A'], {
            A: '#minecraft:logs'
        }),

        shapedRecipe('minecraft:hopper', ['ABA', 'ABA', ' A '], {
            A: '#forge:ingots/iron',
            B: '#minecraft:logs'
        }),
        shapedRecipe('refinedstorageaddons:wireless_crafting_grid', ['ABA', 'ACA', 'ADA'], {
            A: 'refinedstorage:quartz_enriched_iron',
            B: 'refinedstorage:range_upgrade',
            C: 'refinedstorage:wireless_grid',
            D: 'minecraft:crafting_table'
        }),
        shapedRecipe('powah:reactor_starter', ['ABA', 'BCB', 'ABA'], {
            A: '#forge:ingots/radioactive',
            B: 'powah:capacitor_basic_tiny',
            C: 'powah:dielectric_casing'
        }),
        shapedRecipe('powah:reactor_basic', ['ABA', 'BCB', 'ABA'], {
            A: '#forge:ingots/radioactive',
            B: 'powah:capacitor_basic_large',
            C: 'powah:dielectric_casing'
        }),
        shapedRecipe('powah:reactor_hardened', ['ABA', 'BCB', 'ABA'], {
            A: '#forge:ingots/radioactive',
            B: 'powah:capacitor_hardened',
            C: 'powah:dielectric_casing'
        }),
        shapedRecipe('powah:reactor_blazing', ['ABA', 'BCB', 'ABA'], {
            A: '#forge:ingots/radioactive',
            B: 'powah:capacitor_blazing',
            C: 'powah:dielectric_casing'
        }),
        shapedRecipe('powah:reactor_niotic', ['ABA', 'BCB', 'ABA'], {
            A: '#forge:ingots/radioactive',
            B: 'powah:capacitor_niotic',
            C: 'powah:dielectric_casing'
        }),
        shapedRecipe('powah:reactor_spirited', ['ABA', 'BCB', 'ABA'], {
            A: '#forge:ingots/radioactive',
            B: 'powah:capacitor_spirited',
            C: 'powah:dielectric_casing'
        }),
        shapedRecipe('powah:reactor_nitro', ['ABA', 'BCB', 'ABA'], {
            A: '#forge:ingots/radioactive',
            B: 'powah:capacitor_nitro',
            C: 'powah:dielectric_casing'
        }),
        // shapedRecipe('simplefarming:fish_and_chips', [' A ', 'BCB', ' A '], {
        //     A: '#forge:crops/potato',
        //     B: '#forge:grain',
        //     C: 'aquaculture:fish_fillet_cooked'
        // }),
        shapedRecipe('minecraft:furnace', ['LLL', 'L L', 'LLL'], {
            L: '#forge:stone'
        })
    ];

    recipes.forEach(function (recipe) {
        event.shaped(recipe.result, recipe.pattern, recipe.key);
    });
});
