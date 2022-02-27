onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/mythicbotany/rune_ritual/';
    recipes = [
        {
            group: 'rune_rituals',
            center: { item: 'mythicbotany:fimbultyr_tablet' },
            runes: [
                { item: '#botania:runes/midgard', pos: { x: -2, z: -2 } },
                { item: '#botania:runes/midgard', pos: { x: 2, z: 2 } },
                { item: '#botania:runes/helheim', pos: { x: 2, z: -2 } },
                { item: '#botania:runes/helheim', pos: { x: -2, z: 2 } },
                { item: '#botania:runes/summer', pos: { x: -1, z: -3 } },
                { item: '#botania:runes/summer', pos: { x: 1, z: 3 } },
                { item: '#botania:runes/summer', pos: { x: -3, z: -1 } },
                { item: '#botania:runes/summer', pos: { x: 3, z: 1 } },
                { item: '#botania:runes/fire', pos: { x: 1, z: -3 } },
                { item: '#botania:runes/fire', pos: { x: -1, z: 3 } },
                { item: '#botania:runes/fire', pos: { x: 3, z: -1 } },
                { item: '#botania:runes/fire', pos: { x: -3, z: 1 } }
            ],
            consume_runes: false,
            mana: 4000000,
            ticks: 200,
            inputs: [
                Item.of('botania:ender_dagger', '{Damage:0}').weakNBT(),
                'bloodmagic:looting_anointment_l',
                'botania:flask',
                'naturesaura:token_rage'
            ],
            outputs: ['mythicbotany:kvasir_blood'],
            special_input: 'mythicbotany:wandering_trader',
            id: 'mythicbotany:mythicbotany_rune_rituals/kvasir_blood'
        },
        {
            group: 'rune_rituals',
            center: { tag: 'botania:runes/midgard' },
            runes: [
                { pos: { x: -4, z: 4 }, item: 'ars_nouveau:ritual_moonfall' },
                { pos: { x: -3, z: 4 }, item: 'astralsorcery:shifting_star_aevitas' },
                { pos: { x: -2, z: 4 }, item: 'astralsorcery:resonating_gem' },
                { pos: { x: -1, z: 4 }, item: 'minecraft:oak_leaves' },
                { pos: { x: 0, z: 4 }, item: '#botania:runes/asgard' },
                { pos: { x: 1, z: 4 }, item: 'minecraft:oak_leaves' },
                { pos: { x: 2, z: 4 }, item: 'astralsorcery:resonating_gem' },
                { pos: { x: 3, z: 4 }, item: 'astralsorcery:shifting_star_aevitas' },
                { pos: { x: 4, z: 4 }, item: 'ars_nouveau:ritual_sunrise' },

                { pos: { x: -4, z: 3 }, item: 'astralsorcery:shifting_star_aevitas' },
                { pos: { x: -3, z: 3 }, item: '#botania:runes/alfheim' },
                { pos: { x: -2, z: 3 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: -1, z: 3 }, item: 'byg:flowering_palo_verde_leaves' },
                { pos: { x: 0, z: 3 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: 1, z: 3 }, item: 'byg:flowering_palo_verde_leaves' },
                { pos: { x: 2, z: 3 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: 3, z: 3 }, item: '#botania:runes/vanaheim' },
                { pos: { x: 4, z: 3 }, item: 'astralsorcery:shifting_star_aevitas' },

                { pos: { x: -4, z: 2 }, item: 'astralsorcery:resonating_gem' },
                { pos: { x: -3, z: 2 }, item: 'minecraft:oak_leaves' },
                { pos: { x: -2, z: 2 }, item: 'byg:flowering_palo_verde_leaves' },
                { pos: { x: -1, z: 2 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: 0, z: 2 }, item: 'botania:livingwood' },
                { pos: { x: 1, z: 2 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: 2, z: 2 }, item: 'byg:flowering_palo_verde_leaves' },
                { pos: { x: 3, z: 2 }, item: 'minecraft:oak_leaves' },
                { pos: { x: 4, z: 2 }, item: 'astralsorcery:resonating_gem' },

                { pos: { x: -4, z: 1 }, item: 'minecraft:oak_leaves' },
                { pos: { x: -3, z: 1 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: -2, z: 1 }, item: 'minecraft:oak_leaves' },
                { pos: { x: -1, z: 1 }, item: 'byg:flowering_palo_verde_leaves' },
                { pos: { x: 0, z: 1 }, item: 'botania:livingwood' },
                { pos: { x: 1, z: 1 }, item: 'byg:flowering_palo_verde_leaves' },
                { pos: { x: 2, z: 1 }, item: 'minecraft:oak_leaves' },
                { pos: { x: 3, z: 1 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: 4, z: 1 }, item: 'minecraft:oak_leaves' },

                { pos: { x: -4, z: 0 }, item: '#botania:runes/muspelheim' },
                { pos: { x: -3, z: 0 }, item: 'minecraft:oak_leaves' },
                { pos: { x: -2, z: 0 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: -1, z: 0 }, item: 'minecraft:oak_leaves' },
                //{ pos: { x: 0, z: 0 }, item: center },
                { pos: { x: 1, z: 0 }, item: 'minecraft:oak_leaves' },
                { pos: { x: 2, z: 0 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: 3, z: 0 }, item: 'minecraft:oak_leaves' },
                { pos: { x: 4, z: 0 }, item: '#botania:runes/niflheim' },

                { pos: { x: -2, z: -1 }, item: 'minecraft:oak_leaves' },
                { pos: { x: -1, z: -1 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: 0, z: -1 }, item: 'botania:livingwood' },
                { pos: { x: 1, z: -1 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: 2, z: -1 }, item: 'minecraft:oak_leaves' },

                { pos: { x: 0, z: -2 }, item: 'botania:livingwood' },

                { pos: { x: -4, z: -3 }, item: 'quark:root_item' },
                { pos: { x: -3, z: -3 }, item: '#botania:runes/joetunheim' },
                { pos: { x: 0, z: -3 }, item: 'botania:livingwood' },
                { pos: { x: 3, z: -3 }, item: '#botania:runes/nidavellir' },
                { pos: { x: 4, z: -3 }, item: 'quark:root_item' },

                { pos: { x: -4, z: -4 }, item: 'ars_nouveau:ritual_awakening' },
                { pos: { x: -3, z: -4 }, item: 'quark:root_item' },
                { pos: { x: -2, z: -4 }, item: 'naturesaura:generator_limit_remover' },
                { pos: { x: -1, z: -4 }, item: 'botania:livingwood' },
                { pos: { x: 0, z: -4 }, item: '#botania:runes/helheim' },
                { pos: { x: 1, z: -4 }, item: 'botania:livingwood' },
                { pos: { x: 2, z: -4 }, item: 'naturesaura:generator_limit_remover' },
                { pos: { x: 3, z: -4 }, item: 'quark:root_item' },
                { pos: { x: 4, z: -4 }, item: 'ars_nouveau:ritual_awakening' }
            ],
            consume_runes: true,
            mana: 2000000,
            ticks: 200,
            inputs: ['naturesaura:ancient_sapling'],
            outputs: ['masterfulmachinery:enigmatic_tree_of_life_controller'],
            id: `${id_prefix}enigmatic_tree_of_life_controller`
        },
        {
            group: 'rune_rituals',
            center: { tag: 'botania:runes/midgard' },
            runes: [
                { pos: { x: -4, z: 4 }, item: '#forge:pellets/antimatter' },
                { pos: { x: -1, z: 4 }, item: '#forge:pellets/antimatter' },
                { pos: { x: 0, z: 4 }, item: '#botania:runes/asgard' },
                { pos: { x: 1, z: 4 }, item: '#forge:pellets/antimatter' },
                { pos: { x: 4, z: 4 }, item: '#forge:pellets/antimatter' },

                { pos: { x: -3, z: 3 }, item: '#botania:runes/alfheim' },
                { pos: { x: -2, z: 3 }, item: '#forge:circuits/ultimate' },
                { pos: { x: -1, z: 3 }, item: 'kubejs:laputian_ingot' },
                { pos: { x: 0, z: 3 }, item: 'botania:mana_diamond_block' },
                { pos: { x: 1, z: 3 }, item: 'kubejs:laputian_ingot' },
                { pos: { x: 2, z: 3 }, item: '#forge:circuits/ultimate' },
                { pos: { x: 3, z: 3 }, item: '#botania:runes/vanaheim' },

                { pos: { x: -3, z: 2 }, item: '#forge:circuits/ultimate' },
                { pos: { x: -2, z: 2 }, item: 'botania:mana_diamond_block' },
                { pos: { x: -1, z: 2 }, item: 'botania:dragonstone_block' },
                { pos: { x: 0, z: 2 }, item: 'botania:mana_diamond_block' },
                { pos: { x: 1, z: 2 }, item: 'botania:dragonstone_block' },
                { pos: { x: 2, z: 2 }, item: 'botania:mana_diamond_block' },
                { pos: { x: 3, z: 2 }, item: '#forge:circuits/ultimate' },

                { pos: { x: -4, z: 1 }, item: '#forge:pellets/antimatter' },
                { pos: { x: -3, z: 1 }, item: 'kubejs:laputian_ingot' },
                { pos: { x: -2, z: 1 }, item: 'botania:dragonstone_block' },
                { pos: { x: -1, z: 1 }, item: 'botania:mana_diamond_block' },
                { pos: { x: 0, z: 1 }, item: 'powah:ender_core' },
                { pos: { x: 1, z: 1 }, item: 'botania:mana_diamond_block' },
                { pos: { x: 2, z: 1 }, item: 'botania:dragonstone_block' },
                { pos: { x: 3, z: 1 }, item: 'kubejs:laputian_ingot' },
                { pos: { x: 4, z: 1 }, item: '#forge:pellets/antimatter' },

                { pos: { x: -4, z: 0 }, item: '#botania:runes/muspelheim' },
                { pos: { x: -3, z: 0 }, item: 'botania:mana_diamond_block' },
                { pos: { x: -2, z: 0 }, item: 'botania:mana_diamond_block' },
                { pos: { x: -1, z: 0 }, item: 'powah:ender_core' },
                //{ pos: { x: 0, z: 0 }, item: center },
                { pos: { x: 1, z: 0 }, item: 'powah:ender_core' },
                { pos: { x: 2, z: 0 }, item: 'botania:mana_diamond_block' },
                { pos: { x: 3, z: 0 }, item: 'botania:mana_diamond_block' },
                { pos: { x: 4, z: 0 }, item: '#botania:runes/niflheim' },

                { pos: { x: -4, z: -1 }, item: '#forge:pellets/antimatter' },
                { pos: { x: -3, z: -1 }, item: 'kubejs:laputian_ingot' },
                { pos: { x: -2, z: -1 }, item: 'botania:dragonstone_block' },
                { pos: { x: -1, z: -1 }, item: 'botania:mana_diamond_block' },
                { pos: { x: 0, z: -1 }, item: 'powah:ender_core' },
                { pos: { x: 1, z: -1 }, item: 'botania:mana_diamond_block' },
                { pos: { x: 2, z: -1 }, item: 'botania:dragonstone_block' },
                { pos: { x: 3, z: -1 }, item: 'kubejs:laputian_ingot' },
                { pos: { x: 4, z: -1 }, item: '#forge:pellets/antimatter' },

                { pos: { x: -3, z: -2 }, item: '#forge:circuits/ultimate' },
                { pos: { x: -2, z: -2 }, item: 'botania:mana_diamond_block' },
                { pos: { x: -1, z: -2 }, item: 'botania:dragonstone_block' },
                { pos: { x: 0, z: -2 }, item: 'botania:mana_diamond_block' },
                { pos: { x: 1, z: -2 }, item: 'botania:dragonstone_block' },
                { pos: { x: 2, z: -2 }, item: 'botania:mana_diamond_block' },
                { pos: { x: 3, z: -2 }, item: '#forge:circuits/ultimate' },

                { pos: { x: -3, z: -3 }, item: '#botania:runes/joetunheim' },
                { pos: { x: -2, z: -3 }, item: '#forge:circuits/ultimate' },
                { pos: { x: -1, z: -3 }, item: 'kubejs:laputian_ingot' },
                { pos: { x: 0, z: -3 }, item: 'botania:mana_diamond_block' },
                { pos: { x: 1, z: -3 }, item: 'kubejs:laputian_ingot' },
                { pos: { x: 2, z: -3 }, item: '#forge:circuits/ultimate' },
                { pos: { x: 3, z: -3 }, item: '#botania:runes/nidavellir' },

                { pos: { x: -4, z: -4 }, item: '#forge:pellets/antimatter' },
                { pos: { x: -1, z: -4 }, item: '#forge:pellets/antimatter' },
                { pos: { x: 0, z: -4 }, item: '#botania:runes/helheim' },
                { pos: { x: 1, z: -4 }, item: '#forge:pellets/antimatter' },
                { pos: { x: 4, z: -4 }, item: '#forge:pellets/antimatter' }
            ],
            consume_runes: true,
            mana: 2000000,
            ticks: 1200,
            inputs: ['botania:sextant', 'botania:astrolabe', 'create:wand_of_symmetry', 'astralsorcery:exchange_wand'],
            outputs: ['kubejs:worldshaper_cog'],
            id: `${id_prefix}worldshaper_cog`
        }
    ];

    recipes.forEach((recipe) => {
        let rune_inputs = [];

        recipe.runes.forEach((rune) => {
            rune_inputs.push({
                rune: Item.of(rune.item).toJson(),
                x: rune.pos.x,
                z: rune.pos.z,
                consume: recipe.consume_runes
            });
        });

        recipe.type = 'mythicbotany:rune_ritual';
        recipe.runes = rune_inputs;
        recipe.inputs = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.outputs = recipe.outputs.map((output) => Item.of(output).toJson());
        event.custom(recipe).id(recipe.id);
    });
});
