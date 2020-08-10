events.listen('block.tags', function (event) {
    event.get('forge:ores').add(oreUraninite).add('appliedenergistics2:charged_quartz_ore');

    event.get('forge:ores/charged_certus_quartz').add('appliedenergistics2:charged_quartz_ore');
    // event.get('forge:ores/dimensional').add(oreDimensional);
    // event.get('forge:ores').add('create:zinc_ore');
    // event.get('forge:ores').add('occultism:iesnium_ore');

    // Add IE Ores

    // var unusedOres = [
    //     // 'create:copper_ore',
    //     'mekanism:copper_ore',
    //     'mekanism:lead_ore',
    //     'mekanism:uranium_ore',
    //     // 'occultism:copper_ore',
    //     // 'occultism:silver_ore',
    //     'tmechworks:aluminum_ore',
    //     'tmechworks:copper_ore'
    // ];

    // event.get('forge:ores').remove(unusedOres);
    // event.get('forge:ores/certus_quartz').remove('appliedenergistics2:charged_quartz_ore');
    // event.get('forge:ores/copper').remove(['mekanism:copper_ore', 'tmechworks:copper_ore']);
    // // event.get('forge:ores/silver').remove('occultism:silver_ore');
    // event.get('forge:ores/aluminum').remove('tmechworks:aluminum_ore');
});
