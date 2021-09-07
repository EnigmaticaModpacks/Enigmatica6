onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/enigmatica/';
    const recipes = [
        {
            output: 'magicfeather:magicfeather',
            pattern: ['CFC', 'BDB', 'AEA'],
            key: {
                A: 'alexsmobs:roadrunner_feather',
                B: '#forge:ingots/enderium',
                C: 'ars_nouveau:mana_fiber',
                D: 'byg:leaf_pile',
                E: 'ars_nouveau:glyph_launch',
                F: 'ars_nouveau:glyph_slowfall'
            },
            id: `${id_prefix}magicfeather_magic`
        },
        {
            output: 'magicfeather:magicfeather',
            pattern: ['CFC', 'BDB', 'AEA'],
            key: {
                A: 'thermal:lightning_charge',
                B: '#mekanism:alloys/atomic',
                C: 'thermal:hazmat_fabric',
                D: 'byg:leaf_pile',
                E: 'thermal:hazmat_boots',
                F: 'alexsmobs:frontier_cap'
            },
            id: `${id_prefix}magicfeather_tech`
        },
        {
            output: 'losttrinkets:magical_feathers',
            pattern: ['FAF', 'EBE', 'CDC'],
            key: {
                A: 'minecraft:elytra',
                B: 'magicfeather:magicfeather',
                C: 'minecraft:prismarine_shard',
                D: '#forge:nether_stars',
                E: 'rftoolsbase:infused_diamond',
                F: 'minecraft:ender_eye'
            },
            id: `${id_prefix}magical_feathers`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
