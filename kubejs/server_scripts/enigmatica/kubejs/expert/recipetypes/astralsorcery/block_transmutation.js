onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/astralsorcery/block_transmutation';
    const recipes = [
        {
            input: { block: 'atum:godforged_block' },
            output: { block: 'astralsorcery:altar_discovery' },
            starlight: 60,
            id: 'astralsorcery:block_transmutation/craftingtable_altar'
        },
        {
            input: { block: 'kubejs:firmament' },
            output: { block: 'astralsorcery:starmetal_ore' },
            starlight: 100,
            id: 'astralsorcery:block_transmutation/iron_starmetal'
        },
        {
            input: [
                {
                    block: 'farmersdelight:stuffed_pumpkin_block',
                    display: { item: 'farmersdelight:stuffed_pumpkin_block', count: 1 }
                }
            ],
            output: { block: 'minecraft:cake', properties: [{ name: 'bites', value: '0' }] },
            display: { item: 'minecraft:cake', count: 1 },
            starlight: 300,
            id: 'astralsorcery:block_transmutation/pumpkin_cake'
        }
    ];

    const crystals = [
        { color1: 'red', color2: 'orange' },
        { color1: 'orange', color2: 'yellow' },
        { color1: 'yellow', color2: 'green' },
        { color1: 'green', color2: 'blue' },
        { color1: 'blue', color2: 'indigo' },
        { color1: 'indigo', color2: 'violet' },
        { color1: 'violet', color2: 'white' },
        { color1: 'white', color2: 'black' },
        { color1: 'black', color2: 'red' }
    ];

    crystals.forEach((crystal) => {
        recipes.push({
            input: { block: `quark:${crystal.color1}_crystal` },
            output: { block: `quark:${crystal.color2}_crystal` },
            starlight: 1000,
            id: `${id_prefix}${crystal.color2}_crystal`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'astralsorcery:block_transmutation';
        event.custom(recipe).id(recipe.id);
    });
});
