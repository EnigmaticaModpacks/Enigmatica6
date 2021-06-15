onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    var data = {
        recipes: [
            {
                inputs: [
                    'bloodmagic:soulforge',
                    '#forge:ingots/iesnium',
                    'occultism:spirit_attuned_crystal',
                    'glassential:glass_ghostly'
                ],
                output: 'bloodmagic:demoncrystallizer',
                minimumDrain: 500.0,
                drain: 100.0,
                id: 'bloodmagic:soulforge/demon_crystallizer'
            },
            {
                inputs: [
                    'bloodmagic:soulforge',
                    '#forge:ingots/iesnium',
                    'eidolon:crimson_essence',
                    'occultism:spirit_attuned_gem'
                ],
                output: 'bloodmagic:demoncrucible',
                minimumDrain: 400.0,
                drain: 100.0,
                id: 'bloodmagic:soulforge/demon_crucible'
            },
            {
                inputs: [
                    'eidolon:soul_shard',
                    'naturesaura:infused_iron',
                    'glassential:glass_ghostly',
                    'minecraft:conduit'
                ],
                output: 'bloodmagic:soulgempetty',
                minimumDrain: 1.0,
                drain: 1.0,
                id: 'bloodmagic:soulforge/pettytartaricgem'
            },
            {
                inputs: [
                    'bloodmagic:soulgempetty',
                    'naturesaura:tainted_gold',
                    'glassential:glass_ethereal',
                    'quark:diamond_heart'
                ],
                output: 'bloodmagic:soulgemlesser',
                minimumDrain: 60.0,
                drain: 20.0,
                id: 'bloodmagic:soulforge/lessertartaricgem'
            },
            {
                inputs: [
                    'bloodmagic:soulgemlesser',
                    '#forge:ingots/enderium',
                    'occultism:spirit_attuned_gem',
                    'bloodmagic:infusedslate'
                ],
                output: 'bloodmagic:soulgemcommon',
                minimumDrain: 240.0,
                drain: 50.0,
                id: 'bloodmagic:soulforge/commontartaricgem'
            },
            {
                inputs: [
                    'bloodmagic:soulgemcommon',
                    'bloodmagic:demonslate',
                    '#forge:ingots/gaia_spirit',
                    '#bloodmagic:crystals/demon'
                ],
                output: 'bloodmagic:soulgemgreater',
                minimumDrain: 1000.0,
                drain: 100.0,
                id: 'bloodmagic:soulforge/greatertartaricgem'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.bloodmagic
            .soulforge(recipe.output, recipe.inputs)
            .minimumDrain(recipe.minimumDrain)
            .drain(recipe.drain);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
