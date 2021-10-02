/// High Priority required or Apotheosis over-writes these.
onEvent('server.datapack.high_priority', (event) => {
    let recipes = [
        {
            type: 'RANGED',
            entries: [
                { item: 'minecraft:bow', weight: 1500 },
                { item: 'botania:livingwood_bow', weight: 1000 },
                { item: 'botania:crystal_bow', weight: 400 },
                { item: 'minecraft:crossbow', weight: 1500 }
            ]
        },
        {
            type: 'ARMOR',
            entries: [
                { item: 'minecraft:iron_helmet', weight: 1000 },
                { item: 'minecraft:iron_chestplate', weight: 1000 },
                { item: 'minecraft:iron_leggings', weight: 1000 },
                { item: 'minecraft:iron_boots', weight: 1000 },

                { item: 'minecraft:turtle_helmet', weight: 800 },

                { item: 'minecraft:diamond_helmet', weight: 600 },
                { item: 'minecraft:diamond_chestplate', weight: 600 },
                { item: 'minecraft:diamond_leggings', weight: 600 },
                { item: 'minecraft:diamond_boots', weight: 600 },

                { item: 'botania:manaweave_helmet', weight: 1500 },
                { item: 'botania:manaweave_chestplate', weight: 1500 },
                { item: 'botania:manaweave_leggings', weight: 1500 },
                { item: 'botania:manaweave_boots', weight: 1500 },

                { item: 'atum:wanderer_helmet', weight: 1500 },
                { item: 'atum:wanderer_chest', weight: 1500 },
                { item: 'atum:wanderer_legs', weight: 1500 },
                { item: 'atum:wanderer_boots', weight: 1500 },

                { item: 'atum:desert_helmet_iron', weight: 1000 },
                { item: 'atum:desert_chest_iron', weight: 1000 },
                { item: 'atum:desert_legs_iron', weight: 1000 },
                { item: 'atum:desert_boots_iron', weight: 1000 },

                { item: 'mekanismtools:bronze_helmet', weight: 1000 },
                { item: 'mekanismtools:bronze_chestplate', weight: 1000 },
                { item: 'mekanismtools:bronze_leggings', weight: 1000 },
                { item: 'mekanismtools:bronze_boots', weight: 1000 },

                { item: 'mekanismtools:lapis_lazuli_helmet', weight: 1000 },
                { item: 'mekanismtools:lapis_lazuli_chestplate', weight: 1000 },
                { item: 'mekanismtools:lapis_lazuli_leggings', weight: 1000 },
                { item: 'mekanismtools:lapis_lazuli_boots', weight: 1000 },

                { item: 'ars_nouveau:novice_hood', weight: 1500 },
                { item: 'ars_nouveau:novice_robes', weight: 1500 },
                { item: 'ars_nouveau:novice_leggings', weight: 1500 },
                { item: 'ars_nouveau:novice_boots', weight: 1500 },

                { item: 'minecraft:netherite_helmet', weight: 10 },
                { item: 'minecraft:netherite_chestplate', weight: 10 },
                { item: 'minecraft:netherite_leggings', weight: 10 },
                { item: 'minecraft:netherite_boots', weight: 10 }
            ]
        },
        {
            type: 'SHIELD',
            entries: [
                { item: 'minecraft:shield', weight: 1500 },
                { item: 'atum:brigand_shield', weight: 1500 },
                { item: 'mekanismtools:bronze_shield', weight: 1200 },
                { item: 'mekanismtools:lapis_lazuli_shield', weight: 1200 },
                { item: 'undergarden:cloggrum_shield', weight: 1000 },
                { item: 'immersiveengineering:shield', weight: 600 },
                { item: 'mekanismtools:osmium_shield', weight: 500 }
            ]
        },
        {
            type: 'SWORD',
            entries: [
                { item: 'minecraft:iron_sword', weight: 1000 },
                { item: 'mekanismtools:bronze_sword', weight: 1200 },
                { item: 'mekanismtools:lapis_lazuli_sword', weight: 1200 },
                { item: 'minecraft:diamond_sword', weight: 800 },
                { item: 'minecraft:netherite_sword', weight: 10 }
            ]
        },
        {
            type: 'SHOVEL',
            entries: [
                { item: 'minecraft:iron_shovel', weight: 1000 },
                { item: 'mekanismtools:bronze_shovel', weight: 1200 },
                { item: 'mekanismtools:lapis_lazuli_shovel', weight: 1200 },
                { item: 'minecraft:diamond_shovel', weight: 800 },
                { item: 'minecraft:netherite_shovel', weight: 10 }
            ]
        },
        {
            type: 'PICKAXE',
            entries: [
                { item: 'minecraft:iron_pickaxe', weight: 1000 },
                { item: 'mekanismtools:bronze_pickaxe', weight: 1200 },
                { item: 'mekanismtools:lapis_lazuli_pickaxe', weight: 1200 },
                { item: 'minecraft:diamond_pickaxe', weight: 800 },
                { item: 'minecraft:netherite_pickaxe', weight: 10 }
            ]
        },
        {
            type: 'AXE',
            entries: [
                { item: 'minecraft:iron_axe', weight: 1000 },
                { item: 'mekanismtools:bronze_axe', weight: 1200 },
                { item: 'mekanismtools:lapis_lazuli_axe', weight: 1200 },
                { item: 'minecraft:diamond_axe', weight: 800 },
                { item: 'minecraft:netherite_axe', weight: 10 }
            ]
        }
    ];

    recipes.forEach((recipe) => {
        recipe.entries.forEach((entry) => {
            let data = {
                stack: { item: entry.item },
                type: recipe.type,
                weight: entry.weight
            };

            let fileName = entry.item.split(':')[1];
            event.addJson(`apotheosis:affix_loot_entries/${fileName}.json`, data);
        });
    });
});
