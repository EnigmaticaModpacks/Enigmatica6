events.listen('jei.hide.items', (event) => {
    global.materialsToUnify.forEach((material) => {
        if (material == 'iesnium' || material == 'graphite' || material == 'hop_graphite') {
            return;
        }
        itemsToHide.push(
            'occultism:' + material + '_ingot',
            'occultism:' + material + '_ore',
            'occultism:' + material + '_dust',
            'occultism:' + material + '_nugget',
            'occultism:' + material + '_block',
            'immersiveengineering:ingot_' + material,
            'immersiveengineering:dust_' + material,
            'immersiveengineering:nugget_' + material
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

    var regexHide = [
        /emendatusenigmatica:\w+_andesite_ore/,
        /emendatusenigmatica:\w+_gabbro_ore/,
        /emendatusenigmatica:\w+_c_limestone_ore/,
        /emendatusenigmatica:\w+_scoria_ore/,
        /emendatusenigmatica:\w+_weathered_limestone_ore/,
        /emendatusenigmatica:\w+_jasper_ore/,
        /emendatusenigmatica:\w+_marble_ore/,
        /emendatusenigmatica:\w+_slate_ore/,
        /emendatusenigmatica:\w+_netherrack_ore/,
        /emendatusenigmatica:\w+_blackstone_ore/,
        /emendatusenigmatica:\w+_end_stone_ore/,
        /emendatusenigmatica:\w+_mossy_stone_ore/,
        /emendatusenigmatica:\w+_granite_ore/,
        /emendatusenigmatica:\w+_diorite_ore/,
        /emendatusenigmatica:\w+_sand_ore/,
        /emendatusenigmatica:\w+_gravel_ore/,
        /titanium:\w+_gear/,
        /thermal:\w+_dust/,
        /thermal:\w+_gear/,
        /thermal:\w+_ingot/,
        /thermal:\w+_nugget/,
        /thermal:\w+_ore/,
        /thermal:\w+_plate/,
        /tmechworks:\w+_ingot/,
        /tmechworks:\w+_nugget/,
        /tmechworks:\w+_ore/,
        /pedestals:dust/,
        /mekanism:\w+_gem/,
        /mekanism:\w+_ore/,
        /mekanism:dust_/,
        /mekanism:ingot_/,
        /mekanism:nugget_/,
        /minecraft:\w+_ore/,

        /immersiveengineering:plate_/,
        /immersiveengineering:stick_/,
        /bloodmagic:\w+fragment/,
        /bloodmagic:\w+gravel/,
        /bloodmagic:\w+sand/,
        /create:\w+_sheet/,
        /create:\w+_nugget/,
        /create:\w+_ingot/,
        /create:\w+_ore/,
        /immersiveposts:stick_/,
        /buildersaddition:\w+_rod/,
        /eidolon:\w+_ingot/,
        /eidolon:\w+_nugget/,
        /eidolon:\w+_ore/,
        /byg:pendorite/,
        /byg:ametrine/,
        /emendatusenigmatica:\w+certus/,
        /emendatusenigmatica:\w+fluix/,
        /mapperbase:steel/,
        /rftoolsbase:dimensionalshard/
    ];
    regexHide.forEach((regexExpression) => {
        event.hide(regexExpression);
    });
});
