events.listen('jei.hide.items', (event) => {
    // var disabledItems = [
    //     'ars_nouveau:arcane_brick',
    //     'ars_nouveau:arcane_ore',
    //     'emendatusenigmatica:certus_quartz_block',
    //     'emendatusenigmatica:certus_quartz_chunk',
    //     'emendatusenigmatica:certus_quartz_dust',
    //     'emendatusenigmatica:certus_quartz_gem',
    //     'emendatusenigmatica:certus_quartz_ore',
    //     'emendatusenigmatica:charged_certus_quartz_block',
    //     'emendatusenigmatica:charged_certus_quartz_chunk',
    //     'emendatusenigmatica:charged_certus_quartz_gem',
    //     'emendatusenigmatica:charged_certus_quartz_ore',
    //     'emendatusenigmatica:fluix_block',
    //     'emendatusenigmatica:fluix_dust',
    //     'emendatusenigmatica:fluix_gem',
    //     'immersiveengineering:dust_saltpeter',
    //     'immersiveengineering:dust_wood',
    //     'mapperbase:bitumen_ore',
    //     'mapperbase:iron_plate',
    //     'mapperbase:iron_rod',
    //     'mapperbase:raw_bitumen',
    //     'mapperbase:steel_ingot',
    //     'mapperbase:steel_nugget',
    //     'mapperbase:steel_plate',
    //     'mapperbase:steel_rod',
    //     'morevanillalib:obsidian_shard',
    //     'pedestals:dustflour',
    //     'powah:uraninite_ore',
    //     'powah:uraninite_ore_dense',
    //     'powah:uraninite_ore_poor',
    //     'powah:uraninite_raw',
    //     'powah:uraninite_raw_dense',
    //     'powah:uraninite_raw_poor',
    //     'quark:biotite',
    //     'quark:biotite_ore',
    //     'thermal:coal_coke',
    //     'thermal:coal_coke_block',
    //     'thermal:ender_pearl_dust',
    //     'thermal:sawdust'
    // ];

    // materialsToUnify.forEach((material) => {
    //     global.disabledItems.push(
    //         'emendatusenigmatica:' + material + '_andesite_ore',
    //         'emendatusenigmatica:' + material + '_gabbro_ore',
    //         'emendatusenigmatica:' + material + '_c_limestone_ore',
    //         'emendatusenigmatica:' + material + '_scoria_ore',
    //         'emendatusenigmatica:' + material + '_weathered_limestone_ore',
    //         'emendatusenigmatica:' + material + '_jasper_ore',
    //         'emendatusenigmatica:' + material + '_marble_ore',
    //         'emendatusenigmatica:' + material + '_slate_ore',
    //         'titanium:' + material + '_gear',
    //         'thermal:' + material,
    //         'thermal:' + material + '_dust',
    //         'thermal:' + material + '_gear',
    //         'thermal:' + material + '_ingot',
    //         'thermal:' + material + '_nugget',
    //         'thermal:' + material + '_ore',
    //         'thermal:' + material + '_plate',
    //         'tmechworks:' + material + '_ingot',
    //         'tmechworks:' + material + '_nugget',
    //         'tmechworks:' + material + '_ore',
    //         'pedestals:dust' + material,
    //         'mekanism:' + material + '_gem',
    //         'mekanism:' + material + '_ore',
    //         'mekanism:dust_' + material,
    //         'mekanism:ingot_' + material,
    //         'mekanism:nugget_' + material,
    //         'minecraft:' + material + '_ore',
    //         'kubejs:' + material + '_ore_deposit',
    //         'immersiveengineering:dust_' + material,
    //         'immersiveengineering:ingot_' + material,
    //         'immersiveengineering:nugget_' + material,
    //         'immersiveengineering:ore_' + material,
    //         'immersiveengineering:plate_' + material
    //     );
    // });

    global.materialsToUnify.forEach(function (material) {
        global.typesToUnify.forEach(function (type) {
            var tagString = '#forge:' + type + 's/' + material;
            var tag = ingredient.of(tagString);
            if (tag.stacks.size() > 1) {
                console.log('jei hide now checking ' + tag);
                var prefItem = getPreferredItemInTag(tag);
                tag.stacks.forEach((stack) => {
                    if (stack != prefItem) {
                        console.log('hiding ' + stack);
                        event.hide(stack);
                    }
                });
            }
        });
    });

    global.disabledItems.forEach((item) => {
        event.hide(item);
    });
});
