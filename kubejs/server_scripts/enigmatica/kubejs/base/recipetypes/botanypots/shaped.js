onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'botanypots:botany_pot',
            pattern: ['ADA', 'ABA', 'ACA'],
            key: {
                A: 'minecraft:terracotta',
                B: 'minecraft:flower_pot',
                C: 'minecraft:bone_block',
                D: 'minecraft:water_bucket'
            },
            id: 'botanypots:crafting/botany_pot'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
