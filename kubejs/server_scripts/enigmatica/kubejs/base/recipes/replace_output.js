events.listen('recipes', function (event) {
    event.replaceOutput({}, 'thermal:cinnabar', '#forge:gems/cinnabar');
    event.replaceOutput({}, 'thermal:sulfur', '#forge:gems/sulfur');
    event.replaceOutput({}, 'thermal:apatite', '#forge:gems/apatite');
    event.replaceOutput({}, 'thermal:niter', '#forge:gems/niter');
    event.replaceOutput({}, 'thermal:bitumen', '#forge:gems/bitumen');
    event.replaceOutput({}, 'thermal:coal_coke', '#forge:gems/coal_coke');

    event.replaceOutput({ mod: 'bloodmagic' }, 'bloodmagic:ironfragment', '#mekanism:clumps/iron');
    event.replaceOutput({ mod: 'bloodmagic' }, 'bloodmagic:goldfragment', '#mekanism:clumps/gold');
    event.replaceOutput({ mod: 'bloodmagic' }, 'bloodmagic:irongravel', '#mekanism:dirty_dusts/iron');
    event.replaceOutput({ mod: 'bloodmagic' }, 'bloodmagic:goldgravel', '#mekanism:dirty_dusts/gold');
    event.replaceOutput({ mod: 'dustrial_decor' }, 'minecraft:iron_ingot', 'dustrial_decor:rusty_iron_ingot');
    event.replaceOutput({ mod: 'dustrial_decor' }, 'minecraft:iron_nugget', 'dustrial_decor:rusty_iron_nugget');
});
