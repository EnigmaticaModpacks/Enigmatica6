onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/materialis/modifiers/';
    const recipes = [
        {
            result: { name: 'materialis:reaping', level: 1 },
            inputs: [
                { item: 'eidolon:tattered_cloth' },
                { item: 'eidolon:reaper_scythe' },
                { item: 'eidolon:tattered_cloth' },
                { item: 'eidolon:soul_shard' },
                { item: 'eidolon:soul_shard' }
            ],
            tools: { tag: 'tconstruct:modifiable/melee' },
            slots: { abilities: 1 },
            max_level: 1,
            id: 'materialis:tools/modifiers/reaping'
        },
        {
            result: { name: 'materialis:reaping', level: 1 },
            inputs: [
                { item: 'eidolon:tattered_cloth' },
                { item: 'eidolon:reaper_scythe' },
                { item: 'eidolon:tattered_cloth' },
                { item: 'eidolon:soul_shard' },
                { item: 'eidolon:soul_shard' }
            ],
            tools: { tag: 'tconstruct:modifiable/armor/chestplate' },
            slots: { abilities: 1 },
            requirements: {
                name: 'tconstruct:unarmed',
                level: 1,
                error: 'recipe.tconstruct.modifier.unarmed'
            },
            max_level: 1,
            id: 'materialis:tools/modifiers/reaping_unarmed'
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:modifier';
        event.custom(recipe).id(recipe.id);
    });
});
