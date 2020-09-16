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
        shapedRecipe('simplefarming:fish_and_chips', [' A ', 'BCB', ' A '], {
            A: '#forge:crops/potato',
            B: '#forge:grain',
            C: 'aquaculture:fish_fillet_cooked'
        }),
        shapedRecipe('quantumstorage:tank', ['CBC', 'BLB', 'CCC'], {
            L: 'mekanism:ultimate_fluid_tank',
            C: '#forge:ingots/compressed_iron',
            B: '#forge:glass_panes'
        }),
        shapedRecipe('quantumstorage:qsu', ['BBB', 'BLB', 'CCC'], {
            L: 'mekanism:ultimate_bin',
            C: '#forge:ingots/compressed_iron',
            B: '#forge:glass'
        }),
        shapedRecipe('minecraft:furnace', ['LLL', 'L L', 'LLL'], {
            L: '#forge:stone'
        }),
        shapedRecipe('minecraft:tube_coral_block', ['AA', 'AA'], {
            A: 'minecraft:tube_coral_fan'
        }),
        shapedRecipe('minecraft:brain_coral_block', ['AA', 'AA'], {
            A: 'minecraft:brain_coral_fan'
        }),
        shapedRecipe('minecraft:bubble_coral_block', ['AA', 'AA'], {
            A: 'minecraft:bubble_coral_fan'
        }),
        shapedRecipe('minecraft:fire_coral_block', ['AA', 'AA'], {
            A: 'minecraft:fire_coral_fan'
        }),
        shapedRecipe('minecraft:horn_coral_block', ['AA', 'AA'], {
            A: 'minecraft:horn_coral_fan'
        }),
        shapedRecipe('minecraft:tube_coral_block', ['AA', 'AA'], {
            A: 'minecraft:tube_coral'
        }),
        shapedRecipe('minecraft:brain_coral_block', ['AA', 'AA'], {
            A: 'minecraft:brain_coral'
        }),
        shapedRecipe('minecraft:bubble_coral_block', ['AA', 'AA'], {
            A: 'minecraft:bubble_coral'
        }),
        shapedRecipe('minecraft:fire_coral_block', ['AA', 'AA'], {
            A: 'minecraft:fire_coral'
        }),
        shapedRecipe('minecraft:horn_coral_block', ['AA', 'AA'], {
            A: 'minecraft:horn_coral'
        }),
        shapedRecipe('laserrelays:color_filter', ['AAA'], {
            A: '#forge:glass_panes/white'
        }),
        shapedRecipe('appliedenergistics2:sky_compass', [' A ', 'ABA', ' A '], {
            A: '#forge:ingots/iron',
            B: '#forge:gems/charged_certus_quartz'
        }),
        shapedRecipe('appliedenergistics2:charged_staff', ['B  ', ' A ', '  A'], {
            A: '#forge:ingots/iron',
            B: '#forge:gems/charged_certus_quartz'
        }),
        shapedRecipe('appliedenergistics2:charged_staff', ['B', ' A ', 'A  '], {
            A: '#forge:ingots/iron',
            B: '#forge:gems/charged_certus_quartz'
        }),
        shapedRecipe('extlights:light_beam_post', ['BBB', ' A ', 'BBB'], {
            A: '#forge:ingots/iron',
            B: '#forge:nuggets/iron'
        }),
        shapedRecipe('decorative_blocks:lattice', ['A A', '   ', 'A A'], {
            A: '#forge:rods/wooden'
        })
    ];

    recipes.forEach(function (recipe) {
        event.shaped(recipe.result, recipe.pattern, recipe.key);
    });
});
