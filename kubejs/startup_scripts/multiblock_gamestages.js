onForgeEvent('blusunrize.immersiveengineering.api.multiblocks.MultiblockHandler$MultiblockFormEvent', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    let requiredGameStage = new Map([
        ['immersivepetroleum:multiblocks/pumpjack', 'medium_machinery_schematics'],
        ['immersiveengineering:multiblocks/excavator', 'medium_machinery_schematics'],
        ['immersiveengineering:multiblocks/bucket_wheel', 'medium_machinery_schematics'],
        ['immersiveengineering:multiblocks/excavator_full', 'medium_machinery_schematics'],
        ['immersiveengineering:multiblocks/mixer', 'medium_machinery_schematics'],
        ['immersiveengineering:multiblocks/sawmill', 'medium_machinery_schematics'],
        ['immersiveengineering:multiblocks/squeezer', 'medium_machinery_schematics'],
        ['immersiveengineering:multiblocks/lightning_rod', 'medium_machinery_schematics'],
        ['immersiveengineering:multiblocks/metal_press', 'medium_machinery_schematics'],
        ['immersiveengineering:multiblocks/diesel_generator', 'medium_machinery_schematics'],

        ['immersiveengineering:multiblocks/auto_workbench', 'heavy_machinery_schematics'],
        ['immersiveengineering:multiblocks/arcfurnace', 'heavy_machinery_schematics'],
        ['immersiveengineering:multiblocks/assembler', 'heavy_machinery_schematics'],
        ['immersiveengineering:multiblocks/crusher', 'heavy_machinery_schematics'],
        ['immersiveengineering:multiblocks/refinery', 'heavy_machinery_schematics'],
        ['immersiveengineering:multiblocks/fermenter', 'heavy_machinery_schematics'],
        ['immersivepetroleum:multiblocks/cokerunit', 'heavy_machinery_schematics'],
        ['immersivepetroleum:multiblocks/distillationtower', 'heavy_machinery_schematics'],
        ['immersivepetroleum:multiblocks/hydrotreater', 'heavy_machinery_schematics']
    ]);

    const name = `${event.multiblock.getUniqueName()}`;
    if (requiredGameStage.has(name)) {
        if (!event.player.stages.has(requiredGameStage.get(name))) {
            event.setCanceled(true);
            if (!event.player.field_70170_p.field_72995_K) {
                let error_message = `Invalid structure or missing gamestage. Obtain a ${titleCase(
                    requiredGameStage.get(name).toString().replace(/_/g, ' ')
                )} to be able to form this multiblock.`;
                event.player.field_70170_p.asKJS().getPlayer(event.player).tell(error_message);
            }
        }
    }
});

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}
