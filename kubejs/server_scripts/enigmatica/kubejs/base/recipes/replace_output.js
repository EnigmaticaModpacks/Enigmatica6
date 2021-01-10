events.listen('recipes', function (event) {
    event.replaceOutput({}, 'thermal:cinnabar', '#forge:gems/cinnabar');
    event.replaceOutput({}, 'thermal:sulfur', '#forge:gems/sulfur');
    event.replaceOutput({}, 'thermal:apatite', '#forge:gems/apatite');
    event.replaceOutput({}, 'thermal:niter', '#forge:gems/niter');
    event.replaceOutput({ mod: 'bloodmagic' }, 'bloodmagic:ironfragment', '#mekanism:clumps/iron');
    event.replaceOutput({ mod: 'bloodmagic' }, 'bloodmagic:goldfragment', '#mekanism:clumps/gold');
    event.replaceOutput({ mod: 'bloodmagic' }, 'bloodmagic:irongravel', '#mekanism:dirty_dusts/iron');
    event.replaceOutput({ mod: 'bloodmagic' }, 'bloodmagic:goldgravel', '#mekanism:dirty_dusts/gold');
});
