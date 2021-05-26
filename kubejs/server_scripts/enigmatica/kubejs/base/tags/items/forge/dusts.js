events.listen('item.tags', (event) => {
    event
        .get('forge:dusts')
        .add('immersiveengineering:dust_aluminum')
        .add('immersiveengineering:dust_lead')
        .add('immersiveengineering:dust_silver')
        .add('immersiveengineering:dust_nickel')
        .add('immersiveengineering:dust_uranium')
        .add('immersiveengineering:dust_constantan')
        .add('immersiveengineering:dust_electrum')
        .add('immersiveengineering:dust_coke')
        .add('immersiveengineering:dust_hop_graphite')
        .add('immersiveengineering:dust_saltpeter')
        .add('thermal:ender_pearl_dust')
        .add('astralsorcery:stardust')
        .add('#forge:dusts/flour');

    event.add('forge:dusts/starmetal', 'astralsorcery:stardust');
    event.get('forge:dusts/lapis').add('mekanism:dust_lapis_lazuli');

    event.get('forge:dusts').remove('minecraft:prismarine_shard');
    event.get('forge:dusts/prismarine').remove('minecraft:prismarine_shard');

    event.get('forge:dusts/ender_pearl').add('emendatusenigmatica:ender_dust').add('betterendforge:ender_dust');
    event.get('forge:dusts/ender').add('thermal:ender_pearl_dust').add('betterendforge:ender_dust');

    event.get('forge:dusts/netherite_scrap').remove('bloodmagic:sand_netherite');

    event.add('forge:dusts/flour', 'create:wheat_flour');
    event.add('forge:dusts/flour', 'pedestals:dustflour');

    // Temporary until EE adapts this change
    event.get('forge:chunks/arcane').remove('emendatusenigmatica:arcane_chunk');
    event.get('forge:ores/arcane').remove('emendatusenigmatica:arcane_chunk');
    event.get('forge:ores/arcane').remove('emendatusenigmatica:arcane_ore');
    event.get('forge:ores/arcane').remove('ars_nouveau:arcane_ore');
    event.get('forge:ores/mana_gem').remove('ars_nouveau:arcane_ore');
    event.get('forge:gems/arcane').remove('emendatusenigmatica:arcane_gem');
    event.get('forge:storage_blocks/arcane').remove('emendatusenigmatica:arcane_block');
    event.get('forge:storage_blocks/mana').add('emendatusenigmatica:arcane_block');
    event.get('forge:chunks/mana').add('emendatusenigmatica:arcane_chunk');
    event.get('forge:ores/mana').add('emendatusenigmatica:arcane_ore');
    event.get('forge:ores/mana').add('emendatusenigmatica:arcane_chunk');
    event.get('forge:gems/mana').add('emendatusenigmatica:arcane_gem');
    event.get('forge:ores/mana').add('ars_nouveau:arcane_ore');
});
