events.listen('jei.hide.items', (event) => {
    global.materialsToUnify.forEach((material) => {
        if (material == 'iesnium') {
            return;
        }
        itemsToHide.push(
            'emendatusenigmatica:' + material + '_andesite_ore',
            'emendatusenigmatica:' + material + '_gabbro_ore',
            'emendatusenigmatica:' + material + '_c_limestone_ore',
            'emendatusenigmatica:' + material + '_scoria_ore',
            'emendatusenigmatica:' + material + '_weathered_limestone_ore',
            'emendatusenigmatica:' + material + '_jasper_ore',
            'emendatusenigmatica:' + material + '_marble_ore',
            'emendatusenigmatica:' + material + '_slate_ore',
            'emendatusenigmatica:' + material + '_netherrack_ore',
            'emendatusenigmatica:' + material + '_blackstone_ore',
            'emendatusenigmatica:' + material + '_end_stone_ore',
            'emendatusenigmatica:' + material + '_mossy_stone_ore',
            'emendatusenigmatica:' + material + '_granite_ore',
            'emendatusenigmatica:' + material + '_diorite_ore',
            'emendatusenigmatica:' + material + '_sand_ore',
            'emendatusenigmatica:' + material + '_gravel_ore',
            'titanium:' + material + '_gear',
            'thermal:' + material,
            'thermal:' + material + '_dust',
            'thermal:' + material + '_gear',
            'thermal:' + material + '_ingot',
            'thermal:' + material + '_nugget',
            'thermal:' + material + '_ore',
            'thermal:' + material + '_plate',
            'tmechworks:' + material + '_ingot',
            'tmechworks:' + material + '_nugget',
            'tmechworks:' + material + '_ore',
            'pedestals:dust' + material,
            'mekanism:' + material + '_gem',
            'mekanism:' + material + '_ore',
            'mekanism:dust_' + material,
            'mekanism:ingot_' + material,
            'mekanism:nugget_' + material,
            'minecraft:' + material + '_ore',
            'immersiveengineering:dust_' + material,
            'immersiveengineering:ingot_' + material,
            'immersiveengineering:nugget_' + material,
            'immersiveengineering:ore_' + material,
            'immersiveengineering:plate_' + material,
            'immersiveengineering:stick_' + material,
            'bloodmagic:' + material + 'fragment',
            'bloodmagic:' + material + 'gravel',
            'bloodmagic:' + material + 'sand',
            'create:' + material + '_sheet',
            'create:' + material + '_nugget',
            'create:' + material + '_ingot',
            'immersiveposts:stick_' + material,
            'buildersaddition:' + material + '_rod',
            'occultism:' + material + '_ingot',
            'occultism:' + material + '_ore',
            'occultism:' + material + '_dust',
            'occultism:' + material + '_nugget',
            'occultism:' + material + '_block'
        );
    });

    itemsToHide.forEach((disabledItem) => {
        if (!item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });

    global.disabledItems.forEach((disabledItem) => {
        if (!item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });
});
