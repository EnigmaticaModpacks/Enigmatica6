onEvent('jei.subtypes', (event) => {
    const augmentItems = [
        'kubejs:machine_speed_augment_mk2',
        'kubejs:machine_speed_augment_mk3',
        'kubejs:machine_speed_augment_mk4',
        'kubejs:dynamo_output_augment_mk2',
        'kubejs:dynamo_output_augment_mk3',
        'kubejs:dynamo_output_augment_mk4',
        'kubejs:dynamo_fuel_augment_mk2',
        'kubejs:dynamo_fuel_augment_mk3',
        'kubejs:dynamo_fuel_augment_mk4',
        'minecraft:stone_sword'
    ];

    augmentItems.forEach((augmentItem) => {
        event.useNBTKey(augmentItem, 'AugmentData');
    });
});
