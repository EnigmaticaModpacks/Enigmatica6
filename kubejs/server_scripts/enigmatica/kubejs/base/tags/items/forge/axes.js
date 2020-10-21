events.listen('item.tags', function (event) {
    var axes = [
        'minecraft:wooden_axe',
        'minecraft:stone_axe',
        'minecraft:iron_axe',
        'minecraft:golden_axe',
        'minecraft:diamond_axe',
        'minecraft:netherite_axe',
        'botania:manasteel_axe',
        'botania:elementium_axe',
        'botania:terra_axe',
        'aquaculture:neptunium_axe',
        'immersiveengineering:axe_steel',
        'mekanismtools:bronze_axe',
        'mekanismtools:lapis_lazuli_axe',
        'mekanismtools:osmium_axe',
        'mekanismtools:refined_glowstone_axe',
        'mekanismtools:refined_obsidian_axe',
        'mekanismtools:steel_axe'
    ];

    axes.forEach(function (axe) {
        event.get('forge:tools').add(axe);
        event.get('forge:tools/axe').add(axe);
    });
});
