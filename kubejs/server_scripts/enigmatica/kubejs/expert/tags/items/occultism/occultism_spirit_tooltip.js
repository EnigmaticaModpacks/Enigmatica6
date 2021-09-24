onEvent('item.tags', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const items = [
        'bloodmagic:soulsword',
        'bloodmagic:soulaxe',
        'bloodmagic:soulpickaxe',
        'bloodmagic:soulshovel',
        'bloodmagic:soulscythe',
        'kubejs:spirit_heat_exchanger',
        'losttrinkets:magical_feathers',
        'magicfeather:magicfeather'
    ];
    event.get('occultism:occultism_spirit_tooltip').add(items);
});
