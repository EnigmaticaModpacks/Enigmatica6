events.listen('item.tags', (event) => {
    event.add('curios:goggles', [
        'occultism:otherworld_goggles',
        'create:goggles',
        'artifacts:night_vision_goggles',
        'botania:cosmetic_engineer_goggles'
    ]);
});
