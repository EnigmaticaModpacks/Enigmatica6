/// High Priority required or Apotheosis over-writes these.
onEvent('server.datapack.high_priority', (event) => {
    let gearSets = [
        // Overrides for default sets
        {
            name: 'iron',
            weight: 1000,
            tags: ['standard'],
            mainhands: [
                { weight: 4, stack: { item: 'atum:iron_greatsword' } },
                { weight: 4, stack: { item: 'atum:iron_club' } },
                { weight: 2, stack: { item: 'minecraft:iron_axe' } },
                { weight: 1, stack: { item: 'minecraft:iron_pickaxe' } },
                { weight: 1, stack: { item: 'minecraft:iron_shovel' } }
            ],
            offhands: [{ weight: 3, stack: { item: 'minecraft:shield' } }],
            boots: [{ weight: 3, stack: { item: 'minecraft:chainmail_boots' } }],
            leggings: [{ weight: 3, stack: { item: 'minecraft:chainmail_leggings' } }],
            chestplates: [{ weight: 3, stack: { item: 'minecraft:chainmail_chestplate' } }],
            helmets: [{ weight: 3, stack: { item: 'minecraft:chainmail_helmet' } }]
        },
        {
            name: 'iron_bow',
            weight: 1000,
            tags: ['skeleton'],
            mainhands: [
                { weight: 1, stack: { item: 'atum:iron_greatsword' } },
                { weight: 4, stack: { item: 'minecraft:bow' } }
            ],
            offhands: [{ weight: 3, stack: { item: 'minecraft:shield' } }],
            boots: [{ weight: 3, stack: { item: 'minecraft:chainmail_boots' } }],
            leggings: [{ weight: 3, stack: { item: 'minecraft:chainmail_leggings' } }],
            chestplates: [{ weight: 3, stack: { item: 'minecraft:chainmail_chestplate' } }],
            helmets: [{ weight: 3, stack: { item: 'minecraft:chainmail_helmet' } }]
        },
        {
            name: 'diamond',
            weight: 600,
            tags: ['standard'],
            mainhands: [
                { weight: 4, stack: { item: 'undergarden:cloggrum_sword' } },
                { weight: 2, stack: { item: 'undergarden:cloggrum_axe' } },
                { weight: 1, stack: { item: 'undergarden:cloggrum_pickaxe' } },
                { weight: 1, stack: { item: 'undergarden:cloggrum_shovel' } }
            ],
            offhands: [{ weight: 3, stack: { item: 'undergarden:cloggrum_shield' } }],
            boots: [{ weight: 3, stack: { item: 'undergarden:cloggrum_boots' } }],
            leggings: [{ weight: 3, stack: { item: 'undergarden:cloggrum_leggings' } }],
            chestplates: [{ weight: 3, stack: { item: 'undergarden:cloggrum_chestplate' } }],
            helmets: [{ weight: 3, stack: { item: 'undergarden:cloggrum_helmet' } }]
        },
        {
            name: 'diamond_bow',
            weight: 600,
            tags: ['skeleton'],
            mainhands: [
                { weight: 1, stack: { item: 'undergarden:cloggrum_sword' } },
                { weight: 4, stack: { item: 'minecraft:bow' } }
            ],
            offhands: [{ weight: 3, stack: { item: 'undergarden:cloggrum_shield' } }],
            boots: [{ weight: 3, stack: { item: 'undergarden:cloggrum_boots' } }],
            leggings: [{ weight: 3, stack: { item: 'undergarden:cloggrum_leggings' } }],
            chestplates: [{ weight: 3, stack: { item: 'undergarden:cloggrum_chestplate' } }],
            helmets: [{ weight: 3, stack: { item: 'undergarden:cloggrum_helmet' } }]
        },
        {
            name: 'netherite',
            weight: 10,
            tags: ['standard', 'enderman', 'flying_bugs'],
            mainhands: [
                { weight: 4, stack: { item: 'minecraft:netherite_sword' } },
                { weight: 2, stack: { item: 'minecraft:netherite_axe' } },
                { weight: 1, stack: { item: 'minecraft:netherite_pickaxe' } },
                { weight: 1, stack: { item: 'minecraft:netherite_shovel' } }
            ],
            offhands: [{ weight: 3, stack: { item: 'minecraft:shield' } }],
            boots: [{ weight: 3, stack: { item: 'minecraft:netherite_boots' } }],
            leggings: [{ weight: 3, stack: { item: 'minecraft:netherite_leggings' } }],
            chestplates: [{ weight: 3, stack: { item: 'minecraft:netherite_chestplate' } }],
            helmets: [{ weight: 3, stack: { item: 'minecraft:netherite_helmet' } }]
        },
        {
            name: 'netherite_bow',
            weight: 10,
            tags: ['skeleton'],
            mainhands: [
                { weight: 1, stack: { item: 'minecraft:netherite_sword' } },
                { weight: 4, stack: { item: 'minecraft:bow' } }
            ],
            offhands: [{ weight: 3, stack: { item: 'minecraft:shield' } }],
            boots: [{ weight: 3, stack: { item: 'minecraft:netherite_boots' } }],
            leggings: [{ weight: 3, stack: { item: 'minecraft:netherite_leggings' } }],
            chestplates: [{ weight: 3, stack: { item: 'minecraft:netherite_chestplate' } }],
            helmets: [{ weight: 3, stack: { item: 'minecraft:netherite_helmet' } }]
        },

        // Custom Sets
        {
            name: 'botania_manaweave',
            weight: 1500,
            tags: ['standard'],
            mainhands: [
                { weight: 4, stack: { item: 'botania:manasteel_sword' } },
                { weight: 2, stack: { item: 'botania:manasteel_axe' } },
                { weight: 1, stack: { item: 'botania:manasteel_pick' } },
                { weight: 1, stack: { item: 'botania:manasteel_shovel' } }
            ],
            offhands: [{ weight: 3, stack: { item: 'atum:brigand_shield' } }],
            boots: [{ weight: 3, stack: { item: 'botania:manaweave_boots' } }],
            leggings: [{ weight: 3, stack: { item: 'botania:manaweave_leggings' } }],
            chestplates: [{ weight: 3, stack: { item: 'botania:manaweave_chestplate' } }],
            helmets: [{ weight: 3, stack: { item: 'botania:manaweave_helmet' } }]
        },
        {
            name: 'botania_manaweave_bow',
            weight: 1500,
            tags: ['skeleton'],
            mainhands: [
                { weight: 1, stack: { item: 'botania:manasteel_sword' } },
                { weight: 4, stack: { item: 'botania:livingwood_bow' } }
            ],
            offhands: [{ weight: 3, stack: { item: 'atum:brigand_shield' } }],
            boots: [{ weight: 3, stack: { item: 'botania:manaweave_boots' } }],
            leggings: [{ weight: 3, stack: { item: 'botania:manaweave_leggings' } }],
            chestplates: [{ weight: 3, stack: { item: 'botania:manaweave_chestplate' } }],
            helmets: [{ weight: 3, stack: { item: 'botania:manaweave_helmet' } }]
        },
        {
            name: 'immersive_steel',
            weight: 1000,
            tags: ['standard', 'enderman'],
            mainhands: [
                { weight: 4, stack: { item: 'immersiveengineering:sword_steel' } },
                { weight: 2, stack: { item: 'immersiveengineering:axe_steel' } },
                { weight: 1, stack: { item: 'immersiveengineering:pickaxe_steel' } },
                { weight: 1, stack: { item: 'immersiveengineering:shovel_steel' } }
            ],
            offhands: [{ weight: 3, stack: { item: 'immersiveengineering:shield' } }],
            boots: [{ weight: 3, stack: { item: 'immersiveengineering:armor_steel_feet' } }],
            leggings: [{ weight: 3, stack: { item: 'immersiveengineering:armor_steel_legs' } }],
            chestplates: [{ weight: 3, stack: { item: 'immersiveengineering:armor_steel_chest' } }],
            helmets: [{ weight: 3, stack: { item: 'immersiveengineering:armor_steel_head' } }]
        },
        {
            name: 'immersive_steel_bow',
            weight: 1000,
            tags: ['skeleton'],
            mainhands: [
                { weight: 1, stack: { item: 'immersiveengineering:sword_steel' } },
                { weight: 4, stack: { item: 'minecraft:bow' } }
            ],
            offhands: [{ weight: 3, stack: { item: 'immersiveengineering:shield' } }],
            boots: [{ weight: 3, stack: { item: 'immersiveengineering:armor_steel_feet' } }],
            leggings: [{ weight: 3, stack: { item: 'immersiveengineering:armor_steel_legs' } }],
            chestplates: [{ weight: 3, stack: { item: 'immersiveengineering:armor_steel_chest' } }],
            helmets: [{ weight: 3, stack: { item: 'immersiveengineering:armor_steel_head' } }]
        },
        {
            name: 'immersive_faraday',
            weight: 1500,
            tags: ['standard', 'enderman'],
            mainhands: [
                { weight: 4, stack: { item: 'immersiveengineering:sword_steel' } },
                { weight: 2, stack: { item: 'immersiveengineering:axe_steel' } },
                { weight: 1, stack: { item: 'immersiveengineering:pickaxe_steel' } },
                { weight: 1, stack: { item: 'immersiveengineering:shovel_steel' } }
            ],
            offhands: [{ weight: 3, stack: { item: 'immersiveengineering:shield' } }],
            boots: [{ weight: 3, stack: { item: 'immersiveengineering:armor_faraday_feet' } }],
            leggings: [{ weight: 3, stack: { item: 'immersiveengineering:armor_faraday_legs' } }],
            chestplates: [{ weight: 3, stack: { item: 'immersiveengineering:armor_faraday_chest' } }],
            helmets: [{ weight: 3, stack: { item: 'immersiveengineering:armor_faraday_head' } }]
        },
        {
            name: 'immersive_faraday_bow',
            weight: 1500,
            tags: ['skeleton'],
            mainhands: [
                { weight: 1, stack: { item: 'immersiveengineering:sword_steel' } },
                { weight: 4, stack: { item: 'minecraft:bow' } }
            ],
            offhands: [{ weight: 3, stack: { item: 'immersiveengineering:shield' } }],
            boots: [{ weight: 3, stack: { item: 'immersiveengineering:armor_faraday_feet' } }],
            leggings: [{ weight: 3, stack: { item: 'immersiveengineering:armor_faraday_legs' } }],
            chestplates: [{ weight: 3, stack: { item: 'immersiveengineering:armor_faraday_chest' } }],
            helmets: [{ weight: 3, stack: { item: 'immersiveengineering:armor_faraday_head' } }]
        },
        {
            name: 'terminite',
            weight: 600,
            tags: ['standard', 'enderman'],
            mainhands: [
                { weight: 4, stack: { item: 'betterendforge:terminite_sword' } },
                { weight: 2, stack: { item: 'betterendforge:terminite_axe' } },
                { weight: 1, stack: { item: 'betterendforge:terminite_pickaxe' } },
                { weight: 1, stack: { item: 'betterendforge:terminite_shovel' } }
            ],
            offhands: [{ weight: 3, stack: { item: 'minecraft:shield' } }],
            boots: [{ weight: 3, stack: { item: 'betterendforge:terminite_boots' } }],
            leggings: [{ weight: 3, stack: { item: 'betterendforge:terminite_leggings' } }],
            chestplates: [{ weight: 3, stack: { item: 'betterendforge:terminite_chestplate' } }],
            helmets: [{ weight: 3, stack: { item: 'betterendforge:terminite_helmet' } }]
        },
        {
            name: 'terminite_bow',
            weight: 600,
            tags: ['skeleton'],
            mainhands: [
                { weight: 1, stack: { item: 'betterendforge:terminite_sword' } },
                { weight: 4, stack: { item: 'minecraft:bow' } }
            ],
            offhands: [{ weight: 3, stack: { item: 'minecraft:shield' } }],
            boots: [{ weight: 3, stack: { item: 'betterendforge:terminite_boots' } }],
            leggings: [{ weight: 3, stack: { item: 'betterendforge:terminite_leggings' } }],
            chestplates: [{ weight: 3, stack: { item: 'betterendforge:terminite_chestplate' } }],
            helmets: [{ weight: 3, stack: { item: 'betterendforge:terminite_helmet' } }]
        },
        {
            name: 'cardboard',
            weight: 1000,
            tags: ['standard', 'enderman'],
            mainhands: [
                { weight: 4, stack: { item: 'occultism:butcher_knife' } },
                { weight: 2, stack: { item: 'occultism:butcher_knife' } },
                { weight: 1, stack: { item: 'aiotbotania:livingrock_pickaxe' } },
                { weight: 1, stack: { item: 'aiotbotania:livingrock_shovel' } }
            ],
            offhands: [{ weight: 3, stack: { item: 'minecraft:shield' } }],
            boots: [{ weight: 3, stack: { item: 'dustrial_decor:cardboard_boots' } }],
            leggings: [{ weight: 3, stack: { item: 'dustrial_decor:cardboard_leggings' } }],
            chestplates: [{ weight: 3, stack: { item: 'dustrial_decor:cardboard_chestplate' } }],
            helmets: [{ weight: 3, stack: { item: 'dustrial_decor:cardboard_helmet' } }]
        },
        {
            name: 'cardboard_bow',
            weight: 1000,
            tags: ['skeleton'],
            mainhands: [
                { weight: 1, stack: { item: 'occultism:butcher_knife' } },
                { weight: 4, stack: { item: 'minecraft:bow' } }
            ],
            offhands: [{ weight: 3, stack: { item: 'minecraft:shield' } }],
            boots: [{ weight: 3, stack: { item: 'dustrial_decor:cardboard_boots' } }],
            leggings: [{ weight: 3, stack: { item: 'dustrial_decor:cardboard_leggings' } }],
            chestplates: [{ weight: 3, stack: { item: 'dustrial_decor:cardboard_chestplate' } }],
            helmets: [{ weight: 3, stack: { item: 'dustrial_decor:cardboard_helmet' } }]
        },
        {
            name: 'gold',
            weight: 600,
            tags: ['standard'],
            mainhands: [
                { weight: 4, stack: { item: 'minecraft:golden_sword' } },
                { weight: 2, stack: { item: 'minecraft:golden_axe' } },
                { weight: 1, stack: { item: 'minecraft:golden_pickaxe' } },
                { weight: 1, stack: { item: 'minecraft:golden_shovel' } }
            ],
            offhands: [{ weight: 3, stack: { item: 'minecraft:shield' } }],
            boots: [{ weight: 3, stack: { item: 'minecraft:golden_boots' } }],
            leggings: [{ weight: 3, stack: { item: 'minecraft:golden_leggings' } }],
            chestplates: [{ weight: 3, stack: { item: 'minecraft:golden_chestplate' } }],
            helmets: [{ weight: 3, stack: { item: 'minecraft:golden_helmet' } }]
        },
        {
            name: 'gold_bow',
            weight: 600,
            tags: ['skeleton'],
            mainhands: [
                { weight: 1, stack: { item: 'minecraft:golden_sword' } },
                { weight: 4, stack: { item: 'minecraft:bow' } }
            ],
            offhands: [{ weight: 3, stack: { item: 'minecraft:shield' } }],
            boots: [{ weight: 3, stack: { item: 'minecraft:golden_boots' } }],
            leggings: [{ weight: 3, stack: { item: 'minecraft:golden_leggings' } }],
            chestplates: [{ weight: 3, stack: { item: 'minecraft:golden_chestplate' } }],
            helmets: [{ weight: 3, stack: { item: 'minecraft:golden_helmet' } }]
        },
        {
            name: 'refined_glowstone',
            weight: 600,
            tags: ['standard'],
            mainhands: [
                { weight: 4, stack: { item: 'mekanismtools:refined_glowstone_sword' } },
                { weight: 2, stack: { item: 'mekanismtools:refined_glowstone_axe' } },
                { weight: 1, stack: { item: 'mekanismtools:refined_glowstone_pickaxe' } },
                { weight: 1, stack: { item: 'mekanismtools:refined_glowstone_shovel' } }
            ],
            offhands: [{ weight: 3, stack: { item: 'minecraft:shield' } }],
            boots: [{ weight: 3, stack: { item: 'mekanismtools:refined_glowstone_boots' } }],
            leggings: [{ weight: 3, stack: { item: 'mekanismtools:refined_glowstone_leggings' } }],
            chestplates: [{ weight: 3, stack: { item: 'mekanismtools:refined_glowstone_chestplate' } }],
            helmets: [{ weight: 3, stack: { item: 'mekanismtools:refined_glowstone_helmet' } }]
        },
        {
            name: 'refined_glowstone_bow',
            weight: 600,
            tags: ['skeleton'],
            mainhands: [
                { weight: 1, stack: { item: 'mekanismtools:refined_glowstone_sword' } },
                { weight: 4, stack: { item: 'minecraft:bow' } }
            ],
            offhands: [{ weight: 3, stack: { item: 'minecraft:shield' } }],
            boots: [{ weight: 3, stack: { item: 'mekanismtools:refined_glowstone_boots' } }],
            leggings: [{ weight: 3, stack: { item: 'mekanismtools:refined_glowstone_leggings' } }],
            chestplates: [{ weight: 3, stack: { item: 'mekanismtools:refined_glowstone_chestplate' } }],
            helmets: [{ weight: 3, stack: { item: 'mekanismtools:refined_glowstone_helmet' } }]
        }
    ];

    gearSets.forEach((gearSet) => {
        event.addJson(`apotheosis:boss_gear/${gearSet.name}.json`, gearSet);
    });
});
