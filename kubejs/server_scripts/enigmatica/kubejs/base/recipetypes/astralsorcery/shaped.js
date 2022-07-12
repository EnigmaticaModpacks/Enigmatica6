onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/astralsorcery/shaped/';
    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const recipes = [
        {
            output: '8x astralsorcery:infused_wood_stairs',
            pattern: ['A  ', 'AA ', 'AAA'],
            key: {
                A: 'astralsorcery:infused_wood_planks'
            },
            id: `${id_prefix}infused_wood_stairs`
        },
        {
            output: '2x astralsorcery:infused_wood_arch',
            pattern: ['AA '],
            key: {
                A: 'astralsorcery:infused_wood_planks'
            },
            id: `${id_prefix}infused_wood_arch`
        },
        {
            output: '6x astralsorcery:infused_wood_slab',
            pattern: ['AAA'],
            key: {
                A: 'astralsorcery:infused_wood_planks'
            },
            id: `${id_prefix}infused_wood_slab`
        },
        {
            output: '2x astralsorcery:infused_wood_column',
            pattern: ['A', 'A'],
            key: {
                A: 'astralsorcery:infused_wood_planks'
            },
            id: `${id_prefix}infused_wood_column`
        },
        {
            output: '4x astralsorcery:infused_wood_engraved',
            pattern: [' A ', 'A A', ' A '],
            key: {
                A: 'astralsorcery:infused_wood_planks'
            },
            id: `${id_prefix}infused_wood_engraved`
        },
        {
            output: '4x astralsorcery:infused_wood_enriched',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: 'astralsorcery:infused_wood_planks',
                B: '#forge:gems/aquamarine'
            },
            id: `${id_prefix}infused_wood_enriched`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
