onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            replaceTarget: { id: 'compactmachines:personal_shrinking_device' },
            toReplace: 'minecraft:book',
            replaceWith: 'shrink:shrinking_device'
        },
        {
            replaceTarget: { id: 'powah:crafting/player_tranmitter_basic' },
            toReplace: 'powah:player_transmitter_starter',
            replaceWith: 'powah:player_aerial_pearl'
        },
        {
            replaceTarget: { mod: 'powah' },
            toReplace: '#powah:furnator',
            replaceWith: 'minecraft:blast_furnace'
        },
        {
            replaceTarget: { mod: 'powah' },
            toReplace: '#powah:energy_hopper',
            replaceWith: 'minecraft:hopper'
        }
    ];

    powahTiers.forEach(function (tier) {
        recipes.push({
            replaceTarget: { id: `powah:crafting/energizing_rod_${tier}` },
            toReplace: '#powah:energizing_rod',
            replaceWith: `powah:energy_cable_${tier}`
        });
    });

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.replaceTarget, recipe.toReplace, recipe.replaceWith);
    });

    const alt_material_tag_replacements = [
        {
            type: 'nuggets',
            replace: 'gold',
            replaceWith: 'silver',
            items: ['botania:spark']
        }
    ];

    alt_material_tag_replacements.forEach((recipe) => {
        recipe.items.forEach((item) => {
            event.replaceInput(
                { output: item },
                '#forge:' + recipe.type + '/' + recipe.replace,
                '#forge:' + recipe.type + '/' + recipe.replace + '_' + recipe.replaceWith
            );
        });
    });
});
