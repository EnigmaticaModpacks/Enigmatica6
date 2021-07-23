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
            fromColor: parseInt('0xFFFFFF'),
            toColor: parseInt('0x00FF00')
        },
        {
            inputs: [
                { tag: 'forge:ingots/terminite' },
                { item: 'botania:mana_pearl' },
                { item: 'resourcefulbees:terrestrial_honeycomb' },
                { item: 'botania:mana_diamond' },
                { tag: 'forge:ingots/iesnium' },
                { item: 'botania:quartz_mana' }
            ],
            output: { item: 'botania:terrasteel_ingot' },
            mana: 300000,
            fromColor: parseInt('0xFFFFFF'),
            toColor: parseInt('0x00FF00')
        },
        {
            inputs: [
                { tag: 'forge:ingots/terminite' },
                { item: 'botania:mana_pearl' },
                { tag: 'forge:ingots/manasteel' },
                { item: 'botania:mana_diamond' },
                { tag: 'forge:ingots/iesnium' },
                { item: 'botania:quartz_mana' }
            ],
            output: { item: 'botania:terrasteel_ingot' },
            mana: 500000,
            fromColor: parseInt('0xFFFFFF'),
            toColor: parseInt('0x00FF00'),
            id: 'mythicbotany:mythicbotany_infusion/terrasteel_ingot'
        },
        {
            inputs: [
                { tag: 'forge:ingots/nebu' },
                { item: 'botania:pixie_dust' },
                { item: 'resourcefulbees:elven_honeycomb' },
                { item: 'botania:dragonstone' },
                { tag: 'forge:ingots/utherium' },
                { item: 'create:polished_rose_quartz' }
            ],
            output: { item: 'mythicbotany:alfsteel_ingot' },
            mana: 1500000,
            fromColor: parseInt('0xFF008D'),
            toColor: parseInt('0xFF9600')
        },
        {
            inputs: [
                { tag: 'forge:ingots/nebu' },
                { item: 'botania:pixie_dust' },
                { tag: 'forge:ingots/elementium' },
                { item: 'botania:dragonstone' },
                { tag: 'forge:ingots/utherium' },
                { item: 'create:polished_rose_quartz' }
            ],
            output: { item: 'mythicbotany:alfsteel_ingot' },
            mana: 2000000,
            fromColor: parseInt('0xFF008D'),
            toColor: parseInt('0xFF9600'),
            id: 'mythicbotany:mythicbotany_infusion/alfsteel_ingot'
        },
        {
            inputs: [
                { item: 'naturesaura:infused_stone' },
                { item: 'naturesaura:token_euphoria' },
                { item: 'naturesaura:token_rage' },
                { tag: 'forge:ingots/infused_iron' },
                { item: 'naturesaura:token_grief' },
                { item: 'naturesaura:token_terror' }
            ],
            output: { item: 'naturesaura:generator_limit_remover' },
            mana: 2000000,
            fromColor: parseInt('0xFF9900'),
            toColor: parseInt('0x00FF1A')
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
