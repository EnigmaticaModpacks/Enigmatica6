events.listen('item.tags', function (event) {
    event.get('forge:storage_blocks').add('minecraft:glowstone');
    event.get('forge:storage_blocks/glowstone').add('minecraft:glowstone');
    event
        .get('forge:storage_blocks')
        .add('immersiveengineering:storage_aluminum')
        .add('immersiveengineering:storage_lead')
        .add('immersiveengineering:storage_silver')
        .add('immersiveengineering:storage_nickel')
        .add('immersiveengineering:storage_uranium')
        .add('immersiveengineering:storage_constantan')
        .add('immersiveengineering:storage_electrum')
        .add('immersiveengineering:coke');

    // event.get('forge:storage_blocks').add('create:zinc_block').add('create:brass_block');
    // event.get('forge:storage_blocks').add('occultism:iesnium_block');
    event.get('forge:storage_blocks').add('powah:uraninite_block');
    // event
    //     .get('forge:storage_blocks')
    //     .add('psi:psidust_block')
    //     .add('psi:psimetal_block')
    //     .add('psi:psigem_block')
    //     .add('psi:ivory_psimetal_block')
    //     .add('psi:ebony_psimetal_block');

    // event.get('forge:storage_blocks').add('naturesaura:infused_iron_block').add('naturesaura:tainted_gold_block');
});
