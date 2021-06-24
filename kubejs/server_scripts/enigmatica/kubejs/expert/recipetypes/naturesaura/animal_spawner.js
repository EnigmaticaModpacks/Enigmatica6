onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    var data = {
        recipes: [
            {
                inputs: [
                    'naturesaura:birth_spirit',
                    'quark:bottled_cloud',
                    'resourcefulbees:sand_honeycomb',
                    'minecraft:sand'
                ],
                entity: 'alexsmobs:guster',
                aura: 150000,
                time: 120
            },
            {
                inputs: [
                    'naturesaura:birth_spirit',
                    '#forge:dusts/fluorite',
                    'resourcefulbees:electrum_honeycomb',
                    'powah:charged_snowball'
                ],
                entity: 'thermal:blitz',
                aura: 150000,
                time: 120
            },
            {
                inputs: [
                    'naturesaura:birth_spirit',
                    '#forge:dusts/lapis',
                    'resourcefulbees:icy_honeycomb',
                    'minecraft:blue_ice'
                ],
                entity: 'thermal:blizz',
                aura: 150000,
                time: 120
            },
            {
                inputs: [
                    'naturesaura:birth_spirit',
                    '#forge:dusts/apatite',
                    'resourcefulbees:rocky_honeycomb',
                    'minecraft:basalt'
                ],
                entity: 'thermal:basalz',
                aura: 150000,
                time: 120
            },
            {
                inputs: [
                    'naturesaura:birth_spirit',
                    '#forge:dusts/sulfur',
                    'resourcefulbees:coal_honeycomb',
                    'minecraft:nether_bricks'
                ],
                entity: 'minecraft:blaze',
                aura: 150000,
                time: 120,
                id: 'naturesaura:animal_spawner/blaze'
            },
            {
                inputs: ['naturesaura:birth_spirit', 'resourcefulbees:bloody_honeycomb', 'minecraft:blue_ice'],
                entity: 'ars_nouveau:wilden_guardian',
                aura: 250000,
                time: 120
            },
            {
                inputs: [
                    'naturesaura:birth_spirit',
                    'resourcefulbees:bloody_honeycomb',
                    'valhelsia_structures:bone_pile'
                ],
                entity: 'ars_nouveau:wilden_hunter',
                aura: 150000,
                time: 120
            },
            {
                inputs: [
                    'naturesaura:birth_spirit',
                    'resourcefulbees:bloody_honeycomb',
                    'astralsorcery:nocturnal_powder'
                ],
                entity: 'ars_nouveau:wilden_stalker',
                aura: 150000,
                time: 120
            },
            {
                inputs: [
                    'farmersdelight:honey_glazed_ham_block',
                    'naturesaura:token_anger',
                    'eidolon:shadow_gem',
                    '#forge:ingots/forgotten_metal'
                ],
                entity: 'undergarden:masticator',
                aura: 5000000,
                time: 200
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input).toJson());
        });

        const re = event.custom({
            type: 'naturesaura:animal_spawner',
            ingredients: ingredients,
            entity: recipe.entity,
            aura: recipe.aura,
            time: recipe.time
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
