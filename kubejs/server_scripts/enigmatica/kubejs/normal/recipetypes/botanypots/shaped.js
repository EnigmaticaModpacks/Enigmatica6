onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
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

    colors.forEach((color) => {
        event
            .shaped(`botanypots:${color}_botany_pot`, ['ADA', 'ABA', 'ACA'], {
                A: `minecraft:${color}_terracotta`,
                B: 'minecraft:flower_pot',
                C: 'minecraft:bone_block',
                D: 'minecraft:water_bucket'
            })
            .id(`botanypots:crafting/${color}_botany_pot`);
        event.remove({ id: `botanypots:crafting/compact_hopper_${color}_botany_pot` });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
