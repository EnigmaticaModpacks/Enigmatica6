onEvent('item.tags', (event) => {
    var items = [
        'botania:manasteel_pick',
        'botania:terra_pick',
        'immersiveengineering:pickaxe_steel',
        'mythicbotany:alfsteel_pick',
        'bloodmagic:soulpickaxe',
        'eidolon:reversal_pick',
        'atum:ptahs_decadence',
        'tconstruct:pickaxe'
    ];

    var exceptions = [
        'betterendforge:aeternium_pickaxe_head',
        'betterendforge:thallasium_pickaxe_head',
        'betterendforge:terminite_pickaxe_head',
        'occultism:ritual_dummy/craft_infused_pickaxe'
    ];

    var tags = ['forge:tools', 'forge:tools/pickaxe'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_pickaxe/)
            .add(/_paxel/)
            .add(/_aiot/)
            .remove(exceptions);
    });
});
