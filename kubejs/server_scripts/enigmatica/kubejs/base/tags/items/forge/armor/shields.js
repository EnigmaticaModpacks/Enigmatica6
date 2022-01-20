onEvent('item.tags', (event) => {
    var items = [
        'minecraft:shield',
        'ars_nouveau:enchanters_shield',
        'atum:stoneguard_shield',
        'atum:brigand_shield',
        'undergarden:cloggrum_shield',
        'mekanismtools:steel_shield',
        'mekanismtools:refined_obsidian_shield',
        'mekanismtools:refined_glowstone_shield',
        'mekanismtools:osmium_shield',
        'mekanismtools:lapis_lazuli_shield',
        'mekanismtools:bronze_shield',
        'immersiveengineering:shield'
    ];

    var tags = ['forge:armor', 'forge:armor/shields'];

    tags.forEach((tag) => {
        event.get(tag).add(items);
    });
});
