onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            inputs: [
                { tag: 'botania:petals/white' },
                { tag: 'botania:petals/white' },
                { tag: 'botania:petals/white' },
                { tag: 'botania:petals/white' },
                { item: 'minecraft:conduit' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:pure_daisy' },
            id: 'botania:petal_apothecary/pure_daisy'
        },
        {
            inputs: [
                { tag: 'botania:petals/brown' },
                { tag: 'botania:petals/brown' },
                { tag: 'botania:petals/red' },
                { tag: 'botania:petals/light_gray' },
                { tag: 'botania:runes/fire' },
                { tag: 'botania:runes/air' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:endoflame' },
            id: 'botania:petal_apothecary/endoflame'
        },
        {
            inputs: [
                { tag: 'botania:petals/blue' },
                { tag: 'botania:petals/blue' },
                { tag: 'botania:petals/cyan' },
                { tag: 'botania:petals/cyan' },
                { tag: 'forge:nuggets/neptunium' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:hydroangeas' },
            id: 'botania:petal_apothecary/hydroangeas'
        },
        {
            inputs: [
                { tag: 'botania:petals/light_blue' },
                { tag: 'botania:petals/green' },
                { tag: 'botania:petals/red' },
                { tag: 'botania:petals/cyan' },
                { tag: 'forge:dusts/mana' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:manastar' },
            id: 'botania:petal_apothecary/manastar'
        },
        {
            inputs: [{ tag: 'forge:mushrooms' }, { item: 'thermal:phytogro' }],
            output: { item: 'eidolon:fungus_sprouts', count: 2 }
        },
        {
            inputs: [
                { tag: 'botania:petals/pink' },
                { tag: 'botania:petals/pink' },
                { tag: 'botania:petals/purple' },
                { tag: 'botania:petals/purple' },
                { tag: 'botania:petals/lime' },
                { item: 'botania:life_essence' },
                { tag: 'botania:runes/mana' },
                { tag: 'botania:runes/mana' },
                { tag: 'botania:runes/mana' }
            ],
            output: { item: 'botania:rosa_arcana' },
            id: 'botania:petal_apothecary/rosa_arcana'
        },
        {
            inputs: [
                { tag: 'botania:petals/blue' },
                { tag: 'botania:petals/blue' },
                { tag: 'botania:petals/light_blue' },
                { tag: 'botania:petals/light_blue' },
                { tag: 'botania:petals/green' },
                { tag: 'botania:petals/green' },
                { tag: 'botania:runes/water' },
                { tag: 'botania:runes/sloth' },
                { item: 'botania:pixie_dust' }
            ],
            output: { item: 'mythicbotany:aquapanthus' },
            id: 'mythicbotany:petal_apothecary/aquapanthus'
        },
        {
            inputs: [
                { tag: 'botania:petals/light_gray' },
                { tag: 'botania:petals/light_gray' },
                { tag: 'botania:petals/yellow' },
                { tag: 'botania:petals/yellow' },
                { tag: 'botania:petals/red' },
                { item: 'undergarden:masticator_scales' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:gourmaryllis' },
            id: 'botania:petal_apothecary/gourmaryllis'
        },
        {
            inputs: [{ item: 'minecraft:mossy_stone_bricks' }, { item: 'naturesaura:gold_fiber' }],
            output: { item: 'naturesaura:gold_brick' }
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'botania:petal_apothecary',
            output: recipe.output,
            ingredients: recipe.inputs
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
