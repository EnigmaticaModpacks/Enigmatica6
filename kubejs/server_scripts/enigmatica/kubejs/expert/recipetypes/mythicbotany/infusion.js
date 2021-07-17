onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            inputs: [
                { item: 'resourcefulbees:mana_bee_spawn_egg' },
                { item: 'botania:mana_pearl' },
                { item: 'botania:mana_diamond' },
                { item: 'botania:quartz_mana' }
            ],
            output: { item: 'resourcefulbees:terrestrial_bee_spawn_egg' },
            mana: 2000000,
            fromColor: 255,
            toColor: 65280
        },
        {
            inputs: [
                { tag: 'forge:nuggets/terminite' },
                { tag: 'forge:nuggets/terminite' },
                { tag: 'forge:nuggets/terminite' },
                { item: 'botania:mana_pearl' },
                { item: 'resourcefulbees:terrestrial_honeycomb' },
                { item: 'resourcefulbees:terrestrial_honeycomb' },
                { item: 'resourcefulbees:terrestrial_honeycomb' },
                { item: 'botania:mana_diamond' },
                { tag: 'forge:nuggets/iesnium' },
                { tag: 'forge:nuggets/iesnium' },
                { tag: 'forge:nuggets/iesnium' },
                { item: 'botania:quartz_mana' }
            ],
            output: { item: 'botania:terrasteel_ingot' },
            mana: 300000,
            fromColor: 255,
            toColor: 65280
        },
        {
            inputs: [
                { tag: 'forge:nuggets/terminite' },
                { tag: 'forge:nuggets/terminite' },
                { tag: 'forge:nuggets/terminite' },
                { item: 'botania:mana_pearl' },
                { tag: 'forge:nuggets/manasteel' },
                { tag: 'forge:nuggets/manasteel' },
                { tag: 'forge:nuggets/manasteel' },
                { item: 'botania:mana_diamond' },
                { tag: 'forge:nuggets/iesnium' },
                { tag: 'forge:nuggets/iesnium' },
                { tag: 'forge:nuggets/iesnium' },
                { item: 'botania:quartz_mana' }
            ],
            output: { item: 'botania:terrasteel_ingot' },
            mana: 500000,
            fromColor: 255,
            toColor: 65280,
            id: 'mythicbotany:mythicbotany_infusion/terrasteel_ingot'
        },
        {
            inputs: [
                { tag: 'forge:nuggets/nebu' },
                { tag: 'forge:nuggets/nebu' },
                { tag: 'forge:nuggets/nebu' },
                { item: 'botania:pixie_dust' },
                { item: 'resourcefulbees:elven_honeycomb' },
                { item: 'resourcefulbees:elven_honeycomb' },
                { item: 'resourcefulbees:elven_honeycomb' },
                { item: 'botania:dragonstone' },
                { tag: 'forge:nuggets/utherium' },
                { tag: 'forge:nuggets/utherium' },
                { tag: 'forge:nuggets/utherium' },
                { item: 'create:polished_rose_quartz' }
            ],
            output: { item: 'mythicbotany:alfsteel_ingot' },
            mana: 1500000,
            fromColor: 16711821,
            toColor: 16750080
        },
        {
            inputs: [
                { tag: 'forge:nuggets/nebu' },
                { tag: 'forge:nuggets/nebu' },
                { tag: 'forge:nuggets/nebu' },
                { item: 'botania:pixie_dust' },
                { tag: 'forge:nuggets/elementium' },
                { tag: 'forge:nuggets/elementium' },
                { tag: 'forge:nuggets/elementium' },
                { item: 'botania:dragonstone' },
                { tag: 'forge:nuggets/utherium' },
                { tag: 'forge:nuggets/utherium' },
                { tag: 'forge:nuggets/utherium' },
                { item: 'create:polished_rose_quartz' }
            ],
            output: { item: 'mythicbotany:alfsteel_ingot' },
            mana: 2000000,
            fromColor: 16711821,
            toColor: 16750080,
            id: 'mythicbotany:mythicbotany_infusion/alfsteel_ingot'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'mythicbotany:infusion',
            group: 'infuser',
            ingredients: recipe.inputs,
            output: recipe.output,
            mana: recipe.mana,
            fromColor: recipe.fromColor,
            toColor: recipe.toColor
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
