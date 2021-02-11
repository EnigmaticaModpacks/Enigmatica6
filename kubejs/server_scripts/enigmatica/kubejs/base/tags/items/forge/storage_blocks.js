events.listen('item.tags', (event) => {
    var storageBlocks = 'forge:storage_blocks';
    event.get(storageBlocks + '/glowstone').add('minecraft:glowstone');
    event
        .get(storageBlocks)
        .add('minecraft:glowstone')
        .add('immersiveengineering:storage_aluminum')
        .add('immersiveengineering:storage_lead')
        .add('immersiveengineering:storage_silver')
        .add('immersiveengineering:storage_nickel')
        .add('immersiveengineering:storage_uranium')
        .add('immersiveengineering:storage_constantan')
        .add('immersiveengineering:storage_electrum')
        .add('immersiveengineering:coke')
        .add('powah:uraninite_block')
        .add('occultism:iesnium_block')
        .add('naturesaura:infused_iron_block')
        .add('naturesaura:tainted_gold_block')
        .add('astralsorcery:starmetal')
        .add('ars_nouveau:mana_gem_block');

    event.get(storageBlocks + '/mana').add('ars_nouveau:mana_gem_block');
    event.get(storageBlocks + '/infused_iron').add('naturesaura:infused_iron_block');
    event.get(storageBlocks + '/tainted_gold').add('naturesaura:tainted_gold_block');
    event.get(storageBlocks + '/starmetal').add('astralsorcery:starmetal');
    event
        .get(storageBlocks + '/gold_bronze')
        .add('#' + storageBlocks + '/gold')
        .add('#' + storageBlocks + '/bronze');

    event
        .get(storageBlocks + '/gold_brass')
        .add('#' + storageBlocks + '/gold')
        .add('#' + storageBlocks + '/brass');

    event
        .get(storageBlocks + '/iron_aluminum')
        .add('#' + storageBlocks + '/iron')
        .add('#' + storageBlocks + '/aluminum');
    event
        .get(storageBlocks + '/iron_brass')
        .add('#' + storageBlocks + '/iron')
        .add('#' + storageBlocks + '/brass');
    event
        .get(storageBlocks + '/iron_invar')
        .add('#' + storageBlocks + '/iron')
        .add('#' + storageBlocks + '/invar');
    event
        .get(storageBlocks + '/iron_lead')
        .add('#' + storageBlocks + '/iron')
        .add('#' + storageBlocks + '/lead');
    event
        .get(storageBlocks + '/iron_tin')
        .add('#' + storageBlocks + '/iron')
        .add('#' + storageBlocks + '/tin');
});
