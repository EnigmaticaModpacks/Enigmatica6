events.listen('recipes', (event) => {
    const materials = ['aeternium', 'terminite', 'thallasium'],
        types = ['shovel_head', 'hammer_head', 'hoe_head', 'pickaxe_head', 'axe_head', 'sword_blade'];

    const data = {
        recipes: [
            {
                id: 'betterendforge:ender_shard_to_dust',
                input: {
                    item: 'betterendforge:ender_shard'
                },
                result: 'emendatusenigmatica:ender_dust',
                level: 2,
                damage: 3
            },
            {
                id: 'betterendforge:ender_pearl_to_dust',
                input: {
                    item: 'minecraft:ender_pearl'
                },
                result: 'emendatusenigmatica:ender_dust',
                level: 4,
                damage: 5
            }
        ]
    };

    materials.forEach((material) => {
        types.forEach((type) => {
            // Neither terminite nor thallasium have a hammer head.
            if (type == 'hammer_head' && material != 'aeternium') {
                return;
            }

            let count, damage;
            switch (type) {
                case 'hoe_head':
                    count = 2;
                    break;
                case 'axe_head':
                    count = 3;
                    break;
                case 'pickaxe_head':
                    count = 3;
                    break;
                default:
                    count = 1;
            }
            switch (material) {
                case 'aeternium':
                    damage = 6;
                    break;
                case 'terminite':
                    damage = 3;
                    break;
                default:
                    damage = 2;
            }

            if (material == 'aeternium') {
                count = 1;
            }

            data.recipes.push({
                id: 'betterendforge:' + material + '_' + type,
                input: {
                    item: 'betterendforge:' + material + '_ingot'
                },
                result: 'betterendforge:' + material + '_' + type,
                inputCount: count,
                level: 1,
                damage: damage
            });
        });
    });

    data.recipes.forEach((recipe) => {
        event
            .custom({
                type: 'betterendforge:anvil_smithing',
                input: recipe.input,
                inputCount: recipe.count,
                result: recipe.result,
                level: recipe.level,
                damage: recipe.damage
            })
            .id(recipe.id);
    });
});
