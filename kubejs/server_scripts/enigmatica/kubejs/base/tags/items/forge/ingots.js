events.listen('item.tags', function (event) {
    event.get('forge:ingots').add('powah:uraninite');
    event.get('forge:ingots/uraninite').add('powah:uraninite');
    event.get('forge:ingots/energized_steel').add('powah:steel_energized');
    event.get('forge:ingots/radioactive').add('#forge:ingots/uraninite').add('#forge:ingots/uranium');

    event
        .get('forge:ingots')
        .add('immersiveengineering:ingot_aluminum')
        .add('immersiveengineering:ingot_lead')
        .add('immersiveengineering:ingot_silver')
        .add('immersiveengineering:ingot_nickel')
        .add('immersiveengineering:ingot_uranium')
        .add('immersiveengineering:ingot_constantan')
        .add('immersiveengineering:ingot_electrum')
        .add('immersiveengineering:ingot_hop_graphite')
        .add('mythicbotany:alfsteel_ingot')
        .add('industrialforegoing:pink_slime_ingot')
        .add('occultism:iesnium_ingot');

    event.get('forge:ingots/copper').add('immersiveengineering:ingot_copper');
    event.get('forge:ingots/alfsteel').add('mythicbotany:alfsteel_ingot');
    event.get('forge:ingots/pink_slime').add('industrialforegoing:pink_slime_ingot');
    event.get('forge:ingots/gaia').add('botania:gaia_ingot');
    event.get('forge:ingots/gaia_spirit').add('botania:gaia_ingot');

    event
        .get('forge:ingots')
        .add('naturesaura:sky_ingot')
        .add('naturesaura:tainted_gold')
        .add('naturesaura:infused_iron');
    event.get('forge:ingots').add('botania:gaia_ingot');

    event.get('forge:ingots/cloggrum').add('undergarden:cloggrum_ingot');
    event.get('forge:ingots/froststeel').add('undergarden:froststeel_ingot');
    event.get('forge:ingots/utherium').add('undergarden:utherium_ingot');
    event.get('forge:ingots/regalium').add('undergarden:regalium_ingot');

    event.get('forge:ingots/gold_brass').add('#forge:ingots/gold').add('#forge:ingots/brass');
    event.get('forge:ingots/gold_bronze').add('#forge:ingots/gold').add('#forge:ingots/bronze');
    event.get('forge:ingots/gold_copper').add('#forge:ingots/gold').add('#forge:ingots/copper');
    event.get('forge:ingots/gold_silver').add('#forge:ingots/gold').add('#forge:ingots/silver');
    event.get('forge:ingots/gold_tin').add('#forge:ingots/gold').add('#forge:ingots/tin');

    event.get('forge:ingots/iron_aluminum').add('#forge:ingots/iron').add('#forge:ingots/aluminum');
    event.get('forge:ingots/iron_copper').add('#forge:ingots/iron').add('#forge:ingots/copper');
    event.get('forge:ingots/iron_lead').add('#forge:ingots/iron').add('#forge:ingots/lead');
    event.get('forge:ingots/iron_tin').add('#forge:ingots/iron').add('#forge:ingots/tin');
});
