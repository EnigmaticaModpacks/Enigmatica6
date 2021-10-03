onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/mythicbotany/infusion/';
    const recipes = [
        {
            inputs: [
                Item.of('resourcefulbees:bee_jar', {
                    Entity: 'resourcefulbees:mana_bee',
                    BeeType: 'mana',
                    Color: '#4c97ff'
                })
                    .weakNBT()
                    .toJson(),
                { item: 'botania:mana_pearl' },
                { item: 'botania:mana_diamond' },
                { item: 'botania:quartz_mana' }
            ],
            output: Item.of('resourcefulbees:bee_jar', {
                Entity: 'resourcefulbees:terrestrial_bee',
                BeeType: 'terrestrial',
                Color: '#5bf23d'
            }).toJson(),
            mana: 2000000,
            fromColor: parseInt('0xFFFFFF'),
            toColor: parseInt('0x00FF00'),
            id: 'mythicbotany:terrestrial_bee_spawn_egg_infusion'
        },
        {
            inputs: [
                { tag: 'forge:ingots/sky' },
                { item: 'botania:mana_pearl' },
                { item: 'resourcefulbees:terrestrial_honeycomb' },
                { item: 'botania:mana_diamond' },
                { tag: 'forge:ingots/iesnium' },
                { item: 'botania:quartz_mana' }
            ],
            output: { item: 'botania:terrasteel_ingot' },
            mana: 300000,
            fromColor: parseInt('0xFFFFFF'),
            toColor: parseInt('0x00FF00'),
            id: 'mythicbotany:mythicbotany_infusion/terrasteel_ingot_honeycomb'
        },
        {
            inputs: [
                { tag: 'forge:ingots/sky' },
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
                { item: 'botania:forest_eye' },
                { item: 'naturesaura:token_euphoria' },
                { item: 'naturesaura:token_rage' },
                { item: 'atum:ptah_godshard' },
                { item: 'naturesaura:token_grief' },
                { item: 'naturesaura:token_terror' }
            ],
            output: { item: 'naturesaura:generator_limit_remover' },
            mana: 2000000,
            fromColor: parseInt('0xFF9900'),
            toColor: parseInt('0x00FF1A'),
            id: `${id_prefix}generator_limit_remover`
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
