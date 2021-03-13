events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                inputs: [
                    { count: 48, base_ingredient: { item: 'immersiveengineering:empty_shell' } },
                    { count: 2, base_ingredient: { tag: 'forge:gunpowder' } },
                    { tag: 'forge:dusts/aluminum' },
                    { tag: 'forge:dyes/green' }
                ],
                category: 'specialBullet',
                output: {
                    item: 'immersiveengineering:flare',
                    count: 48,
                    nbt: '{flareColour:2925323}'
                },
                id: 'bullet_flare_green'
            },
            {
                inputs: [
                    { count: 48, base_ingredient: { item: 'immersiveengineering:empty_shell' } },
                    { count: 2, base_ingredient: { tag: 'forge:gunpowder' } },
                    { tag: 'forge:dusts/aluminum' },
                    { tag: 'forge:dyes/yellow' }
                ],
                category: 'specialBullet',
                output: {
                    item: 'immersiveengineering:flare',
                    count: 48,
                    nbt: '{flareColour:16777090}'
                },
                id: 'bullet_flare_yellow'
            },
            {
                inputs: [
                    { count: 48, base_ingredient: { item: 'immersiveengineering:empty_shell' } },
                    { count: 2, base_ingredient: { tag: 'forge:gunpowder' } },
                    { tag: 'forge:dusts/aluminum' },
                    { tag: 'forge:dyes/red' }
                ],
                category: 'specialBullet',
                output: {
                    item: 'immersiveengineering:flare',
                    count: 48,
                    nbt: '{flareColour:13381126}'
                },
                id: 'bullet_flare_red'
            },
            {
                inputs: [
                    { count: 24, base_ingredient: { item: 'immersiveengineering:empty_casing' } },
                    { tag: 'forge:gunpowder' },
                    { tag: 'forge:nuggets/lead' },
                    { item: 'minecraft:ender_eye' }
                ],
                category: 'specialBullet',
                output: {
                    item: 'immersiveengineering:homing',
                    count: 24
                },
                id: 'bullet_homing'
            },
            {
                inputs: [
                    { count: 12, base_ingredient: { item: 'immersiveengineering:empty_casing' } },
                    { tag: 'forge:gunpowder' },
                    { item: 'minecraft:glass_bottle' }
                ],
                category: 'specialBullet',
                output: {
                    item: 'immersiveengineering:potion',
                    count: 12
                },
                id: 'bullet_potion'
            },
            {
                inputs: [
                    { count: 24, base_ingredient: { item: 'immersiveengineering:empty_casing' } },
                    { tag: 'forge:gunpowder' },
                    { tag: 'forge:nuggets/lead' },
                    { tag: 'forge:nuggets/silver' }
                ],
                category: 'bullet',
                output: {
                    item: 'immersiveengineering:silver',
                    count: 24
                },
                id: 'bullet_silver'
            },
            {
                inputs: [
                    { count: 24, base_ingredient: { item: 'immersiveengineering:empty_casing' } },
                    { tag: 'forge:gunpowder' },
                    { tag: 'forge:nuggets/steel' },
                    { tag: 'forge:nuggets/uranium' }
                ],
                category: 'bullet',
                output: {
                    item: 'immersiveengineering:armor_piercing',
                    count: 24
                },
                id: 'bullet_armorpiercing'
            },
            {
                inputs: [
                    { count: 48, base_ingredient: { item: 'immersiveengineering:empty_shell' } },
                    { count: 2, base_ingredient: { tag: 'forge:gunpowder' } },
                    { tag: 'forge:dusts/steel' }
                ],
                category: 'bullet',
                output: {
                    item: 'immersiveengineering:buckshot',
                    count: 48
                },
                id: 'bullet_buckshot'
            },
            {
                inputs: [
                    { count: 24, base_ingredient: { item: 'immersiveengineering:empty_casing' } },
                    { tag: 'forge:gunpowder' },
                    { tag: 'forge:nuggets/lead' }
                ],
                category: 'bullet',
                output: {
                    item: 'immersiveengineering:casull',
                    count: 24
                },
                id: 'bullet_casull'
            },
            {
                inputs: [
                    { count: 24, base_ingredient: { item: 'immersiveengineering:empty_casing' } },
                    { tag: 'forge:gunpowder' },
                    { item: 'minecraft:tnt' }
                ],
                category: 'specialBullet',
                output: {
                    item: 'immersiveengineering:he',
                    count: 24
                },
                id: 'bullet_explosive'
            },
            {
                inputs: [
                    { count: 48, base_ingredient: { item: 'immersiveengineering:empty_shell' } },
                    { count: 2, base_ingredient: { tag: 'forge:gunpowder' } },
                    { tag: 'forge:dusts/aluminum' }
                ],
                category: 'specialBullet',
                output: {
                    item: 'immersiveengineering:dragons_breath',
                    count: 48
                },
                id: 'bullet_dragonsbreath'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        let re = event.custom({
            type: 'immersiveengineering:blueprint',
            inputs: recipe.inputs,
            category: recipe.category,
            result: recipe.output
        });

        if (recipe.id) {
            re.id('immersiveengineering:blueprint/' + recipe.id);
        }
    });
});
