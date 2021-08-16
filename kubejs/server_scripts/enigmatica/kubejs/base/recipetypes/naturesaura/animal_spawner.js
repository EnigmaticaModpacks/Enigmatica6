onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                inputs: ['emendatusenigmatica:arcane_gem', 'naturesaura:gold_leaf'],
                entity: 'ars_nouveau:carbuncle',
                aura: 100000,
                time: 100
            },
            {
                inputs: ['emendatusenigmatica:arcane_gem', 'naturesaura:ancient_sapling'],
                entity: 'ars_nouveau:sylph',
                aura: 100000,
                time: 100
            },
            {
                inputs: ['emendatusenigmatica:arcane_gem', 'naturesaura:token_joy'],
                entity: 'ars_nouveau:drygmy',
                aura: 100000,
                time: 100
            },
            {
                inputs: ['minecraft:cod', 'minecraft:iron_bars'],
                entity: 'quark:crab',
                aura: 30000,
                time: 40
            },
            {
                inputs: ['minecraft:spider_eye', 'minecraft:lily_pad'],
                entity: 'quark:frog',
                aura: 30000,
                time: 40
            },
            {
                inputs: ['minecraft:leather', 'minecraft:coal'],
                entity: 'quark:foxhound',
                aura: 150000,
                time: 120
            },
            {
                inputs: ['minecraft:coarse_dirt', 'industrialforegoing:fertilizer'],
                entity: 'alexsmobs:cockroach',
                aura: 30000,
                time: 40
            },
            {
                inputs: ['minecraft:coarse_dirt', 'minecraft:brown_mushroom'],
                entity: 'alexsmobs:cockroach',
                aura: 150000,
                time: 120
            },
            {
                inputs: [
                    //'resourcefulbees:iron_bee_spawn_egg',
                    {
                        hasNBT: true,
                        item: Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:iron_bee", BeeType: "iron", Color: "#ffcc99"}).weakNBT().toJson()
                    },
                    'resourcefulbees:iron_honeycomb',
                    'naturesaura:infused_iron_block'
                ],
                entity: 'resourcefulbees:infused_bee',
                aura: 400000,
                time: 320
            },
            {
                inputs: [
                    //'resourcefulbees:gold_bee_spawn_egg',
                    {
                        hasNBT: true,
                        item: Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:gold_bee", BeeType: "gold", Color: "#ffdc00"}).weakNBT().toJson()
                    },
                    'resourcefulbees:gold_honeycomb',
                    'naturesaura:tainted_gold_block'
                ],
                entity: 'resourcefulbees:tainted_bee',
                aura: 500000,
                time: 400
            },
            {
                inputs: [
                    //'resourcefulbees:gold_bee_spawn_egg',
                    {
                        hasNBT: true,
                        item: Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:gold_bee", BeeType: "gold", Color: "#ffdc00"}).weakNBT().toJson()
                    },
                    'resourcefulbees:tainted_honeycomb',
                    'naturesaura:sky_ingot'
                ],
                entity: 'resourcefulbees:sky_bee',
                aura: 600000,
                time: 480
            },
            {
                inputs: ['farmersdelight:cabbage_leaf', 'simplefarming:lettuce', 'minecraft:carrot'],
                entity: 'minecraft:rabbit',
                aura: 30000,
                time: 40,
                id: 'naturesaura:animal_spawner/rabbit'
            },
            {
                inputs: ['astralsorcery:nocturnal_powder'],
                entity: 'minecraft:phantom',
                aura: 200000,
                time: 200,
                id: 'naturesaura:animal_spawner/phantom'
            },
            {
                inputs: ['minecraft:feather', 'minecraft:jungle_sapling'],
                entity: 'minecraft:parrot',
                aura: 50000,
                time: 60,
                id: 'naturesaura:animal_spawner/parrot'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        let ingredients = [Ingredient.of('naturesaura:birth_spirit').toJson()];

        recipe.inputs.forEach((input) => {
            if (input.hasNBT){
                ingredients.push(input.item)
            }
            else {
                ingredients.push(Ingredient.of(input).toJson())
            };
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
