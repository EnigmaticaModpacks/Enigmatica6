events.listen('item.tags', (event) => {
    event.get('forge:ingots/uraninite').add('powah:uraninite');
    event.get('forge:ingots/energized_steel').add('powah:steel_energized');
    event.get('forge:ingots/radioactive').add('#forge:ingots/uraninite').add('#forge:ingots/uranium');

    event.add('forge:ingots', [
        'astralsorcery:starmetal_ingot',
        'betterendforge:aeternium_ingot',
        'betterendforge:terminite_ingot',
        'betterendforge:thallasium_ingot',
        'botania:gaia_ingot',
        'byg:blue_nether_brick',
        'byg:yellow_nether_brick',
        'create:andesite_alloy',
        'immersiveengineering:ingot_aluminum',
        'immersiveengineering:ingot_constantan',
        'immersiveengineering:ingot_electrum',
        'immersiveengineering:ingot_hop_graphite',
        'immersiveengineering:ingot_lead',
        'immersiveengineering:ingot_nickel',
        'immersiveengineering:ingot_silver',
        'immersiveengineering:ingot_uranium',
        'industrialforegoing:pink_slime_ingot',
        'mythicbotany:alfsteel_ingot',
        'naturesaura:infused_iron',
        'naturesaura:sky_ingot',
        'naturesaura:tainted_gold',
        'occultism:iesnium_ingot',
        'powah:uraninite'
    ]);

    event.get('forge:ingots/copper').add('immersiveengineering:ingot_copper');
    event.get('forge:ingots/alfsteel').add('mythicbotany:alfsteel_ingot');
    event.get('forge:ingots/pink_slime').add('industrialforegoing:pink_slime_ingot');
    event.get('forge:ingots/gaia').add('botania:gaia_ingot');
    event.get('forge:ingots/gaia_spirit').add('botania:gaia_ingot');
    event.add('forge:ingots/starmetal', ['astralsorcery:starmetal_ingot']);
    event.add('forge:ingots/andesite_alloy', ['create:andesite_alloy']);

    event.add('forge:ingots/aeternium', ['betterendforge:aeternium_ingot']);
    event.add('forge:ingots/terminite', ['betterendforge:terminite_ingot']);
    event.add('forge:ingots/thallasium', ['betterendforge:thallasium_ingot']);

    event.get('forge:ingots/gold_brass').add('#forge:ingots/gold').add('#forge:ingots/brass');
    event.get('forge:ingots/gold_bronze').add('#forge:ingots/gold').add('#forge:ingots/bronze');
    event.get('forge:ingots/gold_copper').add('#forge:ingots/gold').add('#forge:ingots/copper');
    event.get('forge:ingots/gold_silver').add('#forge:ingots/gold').add('#forge:ingots/silver');
    event.get('forge:ingots/gold_tin').add('#forge:ingots/gold').add('#forge:ingots/tin');

    event.get('forge:ingots/iron_aluminum').add('#forge:ingots/iron').add('#forge:ingots/aluminum');
    event.get('forge:ingots/iron_copper').add('#forge:ingots/iron').add('#forge:ingots/copper');
    event.get('forge:ingots/iron_lead').add('#forge:ingots/iron').add('#forge:ingots/lead');
    event.get('forge:ingots/iron_tin').add('#forge:ingots/iron').add('#forge:ingots/tin');
    event.get('forge:ingots/iron_brass').add('#forge:ingots/iron').add('#forge:ingots/brass');

    event.add('forge:ingots/nether_brick', ['byg:blue_nether_brick', 'byg:yellow_nether_brick']);
});
