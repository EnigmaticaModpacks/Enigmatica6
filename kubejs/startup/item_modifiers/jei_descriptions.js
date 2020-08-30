events.listen('jei.information', (event) => {
    var certus_charging =
        'Only Applied Energistics Certus can be charged in the Applied Energistics Charger. You can convert between Certus variants through crafting.';
    var item_information_array = [
        [
            'appliedenergistics2:quantum_entangled_singularity',
            'To create drop 1 Singularity and 1 Ender Dust (From Applied Energistics) and cause an explosion within range of the items.'
        ],
        [
            'appliedenergistics2:fluix_crystal',
            'Drop 1 Charged Certus Quartz (From Applied Energistics) + 1 Nether Quartz + 1 Redstone Dust into a puddle next to one another and wait a moment to receive 2 Fluix Crystals.'
        ],
        ['appliedenergistics2:charged_certus_quartz_crystal', certus_charging],
        ['emendatusenigmatica:gem_charged_certus_quartz', certus_charging],
        ['appliedenergistics2:charger', certus_charging],
        ['mekanism:jetpack', 'Cannot be enchanted.'],
        ['mekanism:jetpack_armored', 'Cannot be enchanted.']
    ];
    item_information_array.forEach(function (array) {
        // array[0] = item
        // array[1] = description
        event.add(array[0], [array[1]]);
    });
});
