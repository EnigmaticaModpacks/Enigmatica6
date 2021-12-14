onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/mythicbotany/rune_ritual/';
    recipes = [
        {
            group: 'rune_rituals',
            center: { item: 'mythicbotany:fimbultyr_tablet' },
            runes: [
                { item: '#botania:runes/midgard', pos: { x: -2, z: -2 } },
                { item: '#botania:runes/midgard', pos: { x: 2, z: 2 } },
                { item: '#botania:runes/helheim', pos: { x: 2, z: -2 } },
                { item: '#botania:runes/helheim', pos: { x: -2, z: 2 } },
                { item: '#botania:runes/summer', pos: { x: -1, z: -3 } },
                { item: '#botania:runes/summer', pos: { x: 1, z: 3 } },
                { item: '#botania:runes/summer', pos: { x: -3, z: -1 } },
                { item: '#botania:runes/summer', pos: { x: 3, z: 1 } },
                { item: '#botania:runes/fire', pos: { x: 1, z: -3 } },
                { item: '#botania:runes/fire', pos: { x: -1, z: 3 } },
                { item: '#botania:runes/fire', pos: { x: 3, z: -1 } },
                { item: '#botania:runes/fire', pos: { x: -3, z: 1 } }
            ],
            mana: 4000000,
            ticks: 200,
            inputs: [
                { item: 'botania:ender_dagger' },
                { item: 'bloodmagic:looting_anointment_l' },
                { item: 'botania:flask' },
                { tag: 'forge:storage_blocks/iesnium' }
            ],
            outputs: [{ item: 'mythicbotany:kvasir_blood' }],
            special_input: 'mythicbotany:wandering_trader',
            id: 'mythicbotany:mythicbotany_rune_rituals/kvasir_blood'
        }
    ];

    recipes.forEach((recipe) => {
        let rune_inputs = [];

        recipe.runes.forEach((rune) => {
            rune_inputs.push({
                rune: Item.of(rune.item).toJson(),
                x: rune.pos.x,
                z: rune.pos.z,
                consume: false
            });
        });

        recipe.type = 'mythicbotany:rune_ritual';
        recipe.runes = rune_inputs;
        event.custom(recipe).id(recipe.id);
    });
});
