onEvent('block.tags', (event) => {
    event.add('forge:beehives/tier_0', tier0Hives);
    event.add('forge:beehives/tier_1', tier1Hives);
    event.add('forge:beehives/tier_2', tier2Hives);
    event.add('forge:beehives/tier_3', tier3Hives);
    event.add('forge:beehives/tier_4', tier4Hives);
});
