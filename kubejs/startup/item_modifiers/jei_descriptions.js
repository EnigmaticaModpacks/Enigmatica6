events.listen('jei.information', (event) => {
    var certus_charging =
        'Only Applied Energistics Certus can be charged in the Applied Energistics Charger. You can convert between Certus variants through crafting.';
    event.add(
        'appliedenergistics2:quantum_entangled_singularity',
        'To create drop 1 Singularity and 1 Ender Dust (From Applied Energistics) and cause an explosion within range of the items.'
    );
    event.add(
        'appliedenergistics2:fluix_crystal',
        'Drop 1 Charged Certus Quartz (From Applied Energistics) + 1 Nether Quartz + 1 Redstone Dust into a puddle next to one another and wait a moment to receive 2 Fluix Crystals.'
    );
    event.add('appliedenergistics2:charged_certus_quartz_crystal', certus_charging);
    event.add('emendatusenigmatica:gem_charged_certus_quartz', certus_charging);
    event.add('appliedenergistics2:charger', certus_charging);
});
