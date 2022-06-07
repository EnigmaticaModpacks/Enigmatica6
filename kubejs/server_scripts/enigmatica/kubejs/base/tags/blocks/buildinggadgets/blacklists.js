onEvent('block.tags', (event) => {
    // Documentation: https://github.com/Direwolf20-MC/BuildingGadgets/tree/master/src/main/resources/data/buildinggadgets/tags/blocks/blacklist

    const blocks = [
        'immersiveengineering:alloy_smelter',
        'immersiveengineering:arc_furnace',
        'immersiveengineering:assembler',
        'immersiveengineering:auto_workbench',
        'immersiveengineering:bottling_machine',
        'immersiveengineering:bucket_wheel',
        'immersiveengineering:coke_oven',
        'immersiveengineering:blast_furnace',
        'immersiveengineering:crusher',
        'immersiveengineering:diesel_generator',
        'immersiveengineering:excavator',
        'immersiveengineering:fermenter',
        'immersiveengineering:advanced_blast_furnace',
        'immersiveengineering:lightning_rod',
        'immersiveengineering:metal_press',
        'immersiveengineering:mixer',
        'immersiveengineering:refinery',
        'immersiveengineering:sawmill',
        'immersiveengineering:silo',
        'immersiveengineering:squeezer',
        'immersiveengineering:tank',
        'immersivepetroleum:hydrotreater',
        'immersivepetroleum:distillationtower',
        'immersivepetroleum:cokerunit',
        'immersivepetroleum:pumpjack',
        'xnet:facade'
    ];
    event.get('buildinggadgets:blacklist/building').add(blocks);
    event.get('buildinggadgets:blacklist/copy_paste').add(blocks);
    event.get('buildinggadgets:blacklist/exchanging').add(blocks);
});
