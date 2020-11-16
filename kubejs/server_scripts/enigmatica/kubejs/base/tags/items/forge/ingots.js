events.listen('item.tags', function (event) {
    event.get('forge:ingots').add('powah:uraninite');
    event.get('forge:ingots/uraninite').add('powah:uraninite');
    event.get('forge:ingots/energized_steel').add('powah:steel_energized');
    event.get('forge:ingots/radioactive').add('#forge:ingots/uraninite').add('#forge:ingots/uranium');
    // event.get('forge:ingots').add('create:zinc_ingot').add('create:brass_ingot');

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
        .add('good_nights_sleep:zitrite_ingot')
        .add('good_nights_sleep:rainbow_ingot');

    event.get('forge:ingots/copper').add('immersiveengineering:ingot_copper');
    event.get('forge:ingots/alfsteel').add('mythicbotany:alfsteel_ingot');
    event.get('forge:ingots/pink_slime').add('industrialforegoing:pink_slime_ingot');
    event.get('forge:ingots/gaia').add('botania:gaia_ingot');
    event.get('forge:ingots/gaia_spirit').add('botania:gaia_ingot');
    event.get('forge:ingots/rainbow').add('good_nights_sleep:rainbow_ingot');
    event.get('forge:ingots/zitrite').add('good_nights_sleep:zitrite_ingot');
    // event.get('forge:ingots').add('occultism:iesnium_ingot');

    event
        .get('forge:ingots')
        .add('naturesaura:sky_ingot')
        .add('naturesaura:tainted_gold')
        .add('naturesaura:infused_iron');
    event.get('forge:ingots').add('industrialforgoing:pink_slime_ingot');
    event.get('forge:ingots').add('botania:gaia_ingot');
});
