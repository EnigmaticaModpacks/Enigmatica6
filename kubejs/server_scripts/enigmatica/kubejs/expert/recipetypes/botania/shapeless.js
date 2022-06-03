onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'botania:auto_crafting_halo',
            inputs: ['botania:crafting_halo', 'eidolon:lesser_soul_gem'],
            id: 'botania:auto_crafting_halo'
        },
        {
            output: 'botania:lens_magnet',
            inputs: [
                'botania:lens_normal',
                'immersiveengineering:wirecoil_copper',
                'immersiveengineering:wirecoil_copper'
            ],
            id: 'botania:lens_magnet'
        },
        {
            output: 'botania:redstone_root',
            inputs: ['quark:root_item', '#forge:dusts/redstone'],
            id: 'botania:redstone_root'
        },
        {
            output: Item.of('botania:red_string', 1),
            inputs: ['minecraft:string', '#forge:storage_blocks/redstone', 'atum:ectoplasm'],
            id: 'botania:red_string_alt'
        },
        {
            output: Item.of('botania:corporea_block', 8),
            inputs: ['naturesaura:infused_stone', 'botania:corporea_spark'],
            id: 'botania:corporea_block'
        },
        {
            output: Item.of('botania:corporea_spark_master', 1),
            inputs: ['botania:corporea_spark', '#atum:godshards'],
            id: 'botania:corporea_spark_master'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
