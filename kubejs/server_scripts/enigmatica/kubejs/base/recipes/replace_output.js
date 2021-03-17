events.listen('recipes', (event) => {
    event.replaceOutput({}, 'thermal:cinnabar', '#forge:gems/cinnabar');
    event.replaceOutput({}, 'thermal:sulfur', '#forge:gems/sulfur');
    event.replaceOutput({}, 'thermal:apatite', '#forge:gems/apatite');
    event.replaceOutput({}, 'thermal:niter', '#forge:gems/niter');
    event.replaceOutput({}, 'thermal:bitumen', '#forge:gems/bitumen');
    event.replaceOutput({}, 'thermal:coal_coke', '#forge:gems/coal_coke');
    event.replaceOutput({}, 'thermal:sawdust', 'emendatusenigmatica:wood_dust');
    event.replaceOutput({}, 'refinedstorage:silicon', '#forge:gems/silicon');
    event.replaceOutput({}, 'create:dough', 'farmersdelight:wheat_dough');
    event.replaceOutput({}, 'simplefarming:chocolate', 'create:bar_of_chocolate');

    event.replaceOutput({ mod: 'dustrial_decor' }, 'minecraft:iron_ingot', 'dustrial_decor:rusty_iron_ingot');
    event.replaceOutput({ mod: 'dustrial_decor' }, 'minecraft:iron_nugget', 'dustrial_decor:rusty_iron_nugget');

    sharedDies.forEach((die) => {
        event.replaceOutput({}, `thermal:press_${die.thermalName}_die`, `immersiveengineering:mold_${die.immersiveEngineeringName}`);
    });
});
