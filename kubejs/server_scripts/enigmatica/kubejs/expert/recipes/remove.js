onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const idRemovals = [
        'atum:blast_furnace',
        'ars_nouveau:stone_2',
        'ars_nouveau:ring_of_potential',
        'ars_nouveau:dull_trinket',
        'ars_nouveau:mundane_belt',
        'botania:mana_infusion/mana_diamond_block',
        'minecraft:leather_to_stripes',
        'quark:building/crafting/candles/candle_basic',
        'betterendforge:leather_to_stripes',
        'astralsorcery:shaped/black_marble/black_marble_raw',
        'astralsorcery:altar/black_marble_raw',
        'astralsorcery:shaped/wand',
        'immersiveengineering:crafting/concrete',
        /create:crafting\/materials\/andesite_alloy/,
        'immersiveengineering:crafting/component_iron',
        'immersiveengineering:crafting/component_steel',
        'minecraft:stick',
        'pedestals:upgrades/breaker2',
        'pedestals:ingot_gold_from_upgrades',
        'pedestals:upgrades/recycler',
        'pedestals:upgrades/rffuelgen',
        'pedestals:upgrades/rfexpgen',
        'darkutils:crafting/rune_damage_player',
        /emendatusenigmatica:alloy_dust/
    ];

    const outputRemovals = ['tiab:timeinabottle'];

    const patchouli_safe_removals = [
        { output: 'ars_nouveau:arcane_stone', id: 'ars_nouveau:arcane_stone' },
        { output: 'ars_nouveau:crystallizer', id: 'ars_nouveau:crystallizer' },
        { output: 'ars_nouveau:volcanic_accumulator', id: 'ars_nouveau:volcanic_accumulator' },
        { output: 'naturesaura:calling_spirit', id: 'naturesaura:calling_spirit' },
        { output: 'naturesaura:animal_spawner', id: 'naturesaura:animal_spawner' },
        { output: 'botania:spark', id: 'botania:spark' },
        { output: 'botania:mana_pylon', id: 'botania:mana_pylon' },
        { output: 'botania:natura_pylon', id: 'botania:natura_pylon' },
        { output: 'botania:gaia_pylon', id: 'mythicbotany:modified_gaia_pylon_with_alfsteel' },
        { output: 'mythicbotany:alfsteel_pylon', id: 'mythicbotany:alfsteel_pylon' },
        { output: 'naturesaura:gold_brick', id: 'naturesaura:gold_brick' },
        { output: 'naturesaura:generator_limit_remover', id: 'naturesaura:generator_limit_remover' },
        { output: 'apotheosis:hellshelf', id: 'apotheosis:hellshelf' },
        { output: 'apotheosis:seashelf', id: 'apotheosis:seashelf' },
        { output: 'apotheosis:endshelf', id: 'apotheosis:endshelf' }
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });

    patchouli_safe_removals.forEach((recipe) => {
        event.shaped(recipe.output, ['A'], { A: 'kubejs:altered_recipe_indicator' }).id(recipe.id);
    });
});
