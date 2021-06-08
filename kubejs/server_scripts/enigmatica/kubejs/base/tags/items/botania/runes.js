onEvent('item.tags', (event) => {
    let realms = [
        'asgard',
        'vanaheim',
        'alfheim',
        'midgard',
        'joetunheim',
        'muspelheim',
        'niflheim',
        'nidavellir',
        'helheim'
    ];
    realms.forEach((realm) => {
        event.get(`botania:runes/${realm}`).add(`mythicbotany:${realm}_rune`);
    });
});
