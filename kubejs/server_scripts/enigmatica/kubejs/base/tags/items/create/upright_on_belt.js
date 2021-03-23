events.listen('item.tags', (event) => {
    event.add('create:upright_on_belt', [
        /bucket/,
        /bottle$/,
        /juice/,
        'botania:vial',
        'botania:brew_vial',
        'quark:bottled_cloud'
    ])
});
