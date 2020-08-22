events.listen('block.tags', function (event) {
    event.get('forge:ores').add(oreUraninite).add('appliedenergistics2:charged_quartz_ore');

    event.get('forge:ores/charged_certus_quartz').add('appliedenergistics2:charged_quartz_ore');
    // event.get('forge:ores/dimensional').add(oreDimensional);
    // event.get('forge:ores').add('create:zinc_ore');
    // event.get('forge:ores').add('occultism:iesnium_ore');
});
