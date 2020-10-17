events.listen('item.tags', function (event) {
    var hoes = [
        'minecraft:wooden_hoe',
        'minecraft:stone_hoe',
        'minecraft:iron_hoe',
        'minecraft:golden_hoe',
        'minecraft:diamond_hoe',
        'minecraft:netherite_hoe',
        'aquaculture:neptunium_hoe',
        'mekanismtools:bronze_hoe',
        'mekanismtools:lapis_lazuli_hoe',
        'mekanismtools:osmium_hoe',
        'mekanismtools:refined_glowstone_hoe',
        'mekanismtools:refined_obsidian_hoe',
        'mekanismtools:steel_hoe'
    ];

    hoes.forEach(function (hoe) {
        event.get('forge:tools').add(hoe);
        event.get('forge:tools/hoe').add(hoe);
    });
});
