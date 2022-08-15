onEvent('jei.subtypes', (event) => {
    /*
    /// regex to be supported next version. Can remove direct item calls then and just rely on the regex.
    const augmentItems = [
        /kubejs:\w+augment/,
        'kubejs:machine_speed_augment_mk2',
        'kubejs:machine_speed_augment_mk3',
        'kubejs:machine_speed_augment_mk4',
        'kubejs:dynamo_output_augment_mk2',
        'kubejs:dynamo_output_augment_mk3',
        'kubejs:dynamo_output_augment_mk4',
        'kubejs:dynamo_fuel_augment_mk2',
        'kubejs:dynamo_fuel_augment_mk3',
        'kubejs:dynamo_fuel_augment_mk4'
    ];

    augmentItems.forEach((augmentItem) => {
        event.useNBTKey(augmentItem, 'AugmentData');
    });
    */

    event.useNBTKey('resourcefulbees:bee_jar', 'Entity');
});
