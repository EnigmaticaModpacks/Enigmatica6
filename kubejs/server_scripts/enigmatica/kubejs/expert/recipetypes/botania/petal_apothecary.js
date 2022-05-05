onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/botania/petal_apothecary/';
    const recipes = [
        /// Generating Flora
        {
            inputs: [
                '#botania:petals/blue',
                '#botania:petals/blue',
                '#botania:petals/cyan',
                '#botania:petals/cyan',
                '#forge:nuggets/neptunium',
                '#botania:runes/water',
                'undergarden:masticator_scales',
                'thermal:phytogro'
            ],
            output: 'botania:hydroangeas',
            count: 1,
            id: 'botania:petal_apothecary/hydroangeas'
        },
        {
            inputs: [
                '#botania:petals/brown',
                '#botania:petals/brown',
                '#botania:petals/red',
                '#botania:petals/light_gray',
                '#botania:runes/fire',
                '#botania:runes/air',
                'undergarden:masticator_scales',
                'thermal:phytogro'
            ],
            output: 'botania:endoflame',
            count: 1,
            id: 'botania:petal_apothecary/endoflame'
        },
        {
            inputs: [
                '#botania:petals/red',
                '#botania:petals/orange',
                '#botania:petals/orange',
                '#botania:runes/earth',
                '#botania:runes/fire',
                'undergarden:masticator_scales',
                'thermal:phytogro'
            ],
            output: 'botania:thermalily',
            count: 1,
            id: 'botania:petal_apothecary/thermalily'
        },
        {
            inputs: [
                '#botania:petals/pink',
                '#botania:petals/pink',
                '#botania:petals/purple',
                '#botania:petals/purple',
                '#botania:petals/lime',
                '#botania:runes/mana',
                '#botania:runes/mana',
                '#botania:runes/mana',
                'undergarden:masticator_scales',
                'botania:life_essence'
            ],
            output: 'botania:rosa_arcana',
            count: 1,
            id: 'botania:petal_apothecary/rosa_arcana'
        },
        {
            inputs: [
                '#botania:petals/lime',
                '#botania:petals/lime',
                '#botania:petals/red',
                '#botania:petals/red',
                '#botania:petals/green',
                '#botania:runes/gluttony',
                'undergarden:masticator_scales',
                'thermal:phytogro'
            ],
            output: 'botania:munchdew',
            count: 1,
            id: 'botania:petal_apothecary/munchdew'
        },
        {
            inputs: [
                '#botania:petals/red',
                '#botania:petals/red',
                '#botania:petals/gray',
                '#botania:petals/gray',
                '#botania:petals/white',
                '#botania:petals/white',
                '#botania:runes/wrath',
                '#botania:runes/fire',
                'undergarden:masticator_scales',
                'thermal:phytogro'
            ],
            output: 'botania:entropinnyum',
            count: 1,
            id: 'botania:petal_apothecary/entropinnyum'
        },
        {
            inputs: [
                '#botania:petals/white',
                '#botania:petals/white',
                '#botania:petals/orange',
                '#botania:petals/orange',
                '#botania:petals/brown',
                '#botania:petals/brown',
                '#botania:runes/gluttony',
                'undergarden:masticator_scales',
                'botania:pixie_dust'
            ],
            output: 'botania:kekimurus',
            count: 1,
            id: 'botania:petal_apothecary/kekimurus'
        },
        {
            inputs: [
                '#botania:petals/light_gray',
                '#botania:petals/light_gray',
                '#botania:petals/yellow',
                '#botania:petals/yellow',
                '#botania:petals/red',
                'undergarden:masticator_scales',
                'thermal:phytogro'
            ],
            output: 'botania:gourmaryllis',
            count: 1,
            id: 'botania:petal_apothecary/gourmaryllis'
        },
        {
            inputs: [
                '#botania:petals/lime',
                '#botania:petals/lime',
                '#botania:petals/green',
                '#botania:petals/green',
                '#botania:petals/black',
                '#botania:runes/summer',
                '#botania:runes/water',
                'undergarden:masticator_scales',
                'thermal:phytogro'
            ],
            output: 'botania:narslimmus',
            count: 1,
            id: 'botania:petal_apothecary/narslimmus'
        },
        {
            inputs: [
                '#botania:petals/red',
                '#botania:petals/red',
                '#botania:petals/green',
                '#botania:petals/green',
                '#botania:petals/blue',
                '#botania:petals/blue',
                '#botania:petals/white',
                '#botania:petals/white',
                '#botania:runes/winter',
                '#botania:runes/air',
                'undergarden:masticator_scales',
                'botania:pixie_dust'
            ],
            output: 'botania:spectrolus',
            count: 1,
            id: 'botania:petal_apothecary/spectrolus'
        },
        {
            inputs: [
                '#botania:petals/purple',
                '#botania:petals/purple',
                '#botania:petals/lime',
                '#botania:petals/green',
                '#botania:runes/water',
                '#botania:runes/fire',
                '#botania:runes/earth',
                '#botania:runes/air',
                'undergarden:masticator_scales',
                'naturesaura:calling_spirit'
            ],
            output: 'botania:dandelifeon',
            count: 1,
            id: 'botania:petal_apothecary/dandelifeon'
        },
        {
            inputs: [
                '#botania:petals/purple',
                '#botania:petals/purple',
                '#botania:petals/green',
                '#botania:petals/green',
                '#botania:petals/black',
                '#botania:runes/earth',
                '#botania:runes/pride',
                'undergarden:masticator_scales',
                'botania:pixie_dust'
            ],
            output: 'botania:rafflowsia',
            count: 1,
            id: 'botania:petal_apothecary/rafflowsia'
        },
        {
            inputs: [
                '#botania:petals/purple',
                '#botania:petals/purple',
                '#botania:petals/magenta',
                '#botania:petals/magenta',
                '#botania:petals/light_gray',
                '#botania:runes/envy',
                '#botania:runes/wrath',
                'undergarden:masticator_scales',
                'botania:life_essence'
            ],
            output: 'botania:shulk_me_not',
            count: 1,
            id: 'botania:petal_apothecary/shulk_me_not'
        },

        /// Functional Flora
        {
            inputs: [
                '#botania:petals/lime',
                '#botania:petals/lime',
                '#botania:petals/green',
                '#botania:petals/yellow',
                '#botania:runes/spring',
                'botania:redstone_root',
                'thermal:phytogro'
            ],
            output: 'botania:agricarnation',
            count: 1,
            id: 'botania:petal_apothecary/agricarnation'
        },
        {
            inputs: [
                '#botania:petals/red',
                '#botania:petals/red',
                '#botania:petals/red',
                '#botania:petals/cyan',
                '#botania:petals/cyan',
                'botania:redstone_root',
                'thermal:phytogro'
            ],
            output: 'botania:bellethorn',
            count: 1,
            id: 'botania:petal_apothecary/bellethorn'
        },
        {
            inputs: [
                '#botania:petals/orange',
                '#botania:petals/green',
                '#botania:petals/green',
                'botania:redstone_root',
                'thermal:phytogro'
            ],
            output: 'botania:bergamute',
            count: 1,
            id: 'botania:petal_apothecary/bergamute'
        },
        {
            inputs: [
                '#botania:petals/light_gray',
                '#botania:petals/light_gray',
                '#botania:petals/gray',
                '#botania:petals/cyan',
                '#botania:runes/earth',
                'thermal:phytogro'
            ],
            output: 'botania:clayconia',
            count: 1,
            id: 'botania:petal_apothecary/clayconia'
        },
        {
            inputs: [
                '#botania:petals/white',
                '#botania:petals/white',
                '#botania:petals/brown',
                '#botania:petals/yellow',
                '#botania:runes/air',
                'botania:redstone_root',
                'thermal:phytogro'
            ],
            output: 'botania:daffomill',
            count: 1,
            id: 'botania:petal_apothecary/daffomill'
        },
        {
            inputs: [
                '#botania:petals/black',
                '#botania:petals/black',
                '#botania:petals/black',
                '#botania:petals/cyan',
                '#botania:petals/cyan',
                'botania:redstone_root',
                'thermal:phytogro'
            ],
            output: 'botania:dreadthorn',
            count: 1,
            id: 'botania:petal_apothecary/dreadthorn'
        },
        {
            inputs: [
                '#botania:petals/red',
                '#botania:petals/red',
                '#botania:petals/gray',
                '#botania:petals/light_gray',
                '#botania:runes/fire',
                '#botania:runes/summer',
                'thermal:phytogro'
            ],
            output: 'botania:exoflame',
            count: 1,
            id: 'botania:petal_apothecary/exoflame'
        },
        {
            inputs: [
                '#botania:petals/white',
                '#botania:petals/white',
                '#botania:petals/yellow',
                '#botania:petals/yellow',
                '#botania:petals/orange',
                '#botania:runes/spring',
                'thermal:phytogro'
            ],
            output: 'botania:fallen_kanade',
            count: 1,
            id: 'botania:petal_apothecary/fallen_kanade'
        },
        {
            inputs: [
                '#botania:petals/gray',
                '#botania:petals/gray',
                '#botania:petals/light_gray',
                '#botania:petals/light_gray',
                '#botania:runes/air',
                'botania:redstone_root',
                'thermal:phytogro'
            ],
            output: 'botania:hopperhock',
            count: 1,
            id: 'botania:petal_apothecary/hopperhock'
        },
        {
            inputs: [
                '#botania:petals/purple',
                '#botania:petals/purple',
                '#botania:petals/magenta',
                '#botania:petals/magenta',
                '#botania:petals/green',
                '#botania:runes/water',
                '#botania:runes/autumn',
                'botania:redstone_root',
                'thermal:phytogro'
            ],
            output: 'botania:hyacidus',
            count: 1,
            id: 'botania:petal_apothecary/hyacidus'
        },
        {
            inputs: [
                '#botania:petals/purple',
                '#botania:petals/lime',
                '#botania:petals/green',
                '#botania:runes/spring',
                'botania:redstone_root',
                'thermal:phytogro'
            ],
            output: 'botania:jaded_amaranthus',
            count: 1,
            id: 'botania:petal_apothecary/jaded_amaranthus'
        },
        {
            inputs: [
                '#botania:petals/pink',
                '#botania:petals/pink',
                '#botania:petals/purple',
                '#botania:petals/light_gray',
                '#botania:runes/water',
                '#botania:runes/air',
                'thermal:phytogro'
            ],
            output: 'botania:jiyuulia',
            count: 1,
            id: 'botania:petal_apothecary/jiyuulia'
        },
        {
            inputs: [
                '#botania:petals/light_blue',
                '#botania:petals/green',
                '#botania:petals/red',
                '#botania:petals/cyan',
                '#forge:dusts/mana',
                'thermal:phytogro'
            ],
            output: 'botania:manastar',
            count: 1,
            id: 'botania:petal_apothecary/manastar'
        },
        {
            inputs: [
                '#botania:petals/gray',
                '#botania:petals/yellow',
                '#botania:petals/green',
                '#botania:petals/red',
                '#botania:runes/earth',
                '#botania:runes/fire',
                'botania:redstone_root',
                'thermal:phytogro'
            ],
            output: 'botania:marimorphosis',
            count: 1,
            id: 'botania:petal_apothecary/marimorphosis'
        },
        {
            inputs: [
                '#botania:petals/brown',
                '#botania:petals/brown',
                '#botania:petals/gray',
                '#botania:petals/gray',
                '#botania:runes/earth',
                'botania:redstone_root',
                'thermal:phytogro'
            ],
            output: 'botania:medumone',
            count: 1,
            id: 'botania:petal_apothecary/medumone'
        },
        {
            inputs: [
                '#botania:petals/red',
                '#botania:petals/red',
                '#botania:petals/pink',
                '#botania:petals/pink',
                '#botania:petals/orange',
                '#botania:runes/lust',
                '#botania:runes/fire',
                'thermal:phytogro'
            ],
            output: 'botania:pollidisiac',
            count: 1,
            id: 'botania:petal_apothecary/pollidisiac'
        },
        {
            inputs: [
                '#botania:petals/white',
                '#botania:petals/white',
                '#botania:petals/white',
                '#botania:petals/white',
                'minecraft:conduit',
                'thermal:phytogro'
            ],
            output: 'botania:pure_daisy',
            count: 1,
            id: 'botania:petal_apothecary/pure_daisy'
        },
        {
            inputs: [
                '#botania:petals/orange',
                '#botania:petals/orange',
                '#botania:petals/yellow',
                '#botania:runes/earth',
                'botania:redstone_root',
                'thermal:phytogro'
            ],
            output: 'botania:rannuncarpus',
            count: 1,
            id: 'botania:petal_apothecary/rannuncarpus'
        },
        {
            inputs: [
                '#botania:petals/brown',
                '#botania:petals/brown',
                '#botania:petals/red',
                '#botania:petals/blue',
                'botania:redstone_root',
                'thermal:phytogro'
            ],
            output: 'botania:solegnolia',
            count: 1,
            id: 'botania:petal_apothecary/solegnolia'
        },
        {
            inputs: [
                '#botania:petals/cyan',
                '#botania:petals/cyan',
                '#botania:petals/gray',
                '#botania:petals/light_gray',
                '#botania:runes/air',
                '#botania:runes/earth',
                'thermal:phytogro'
            ],
            output: 'botania:tangleberrie',
            count: 1,
            id: 'botania:petal_apothecary/tangleberrie'
        },
        {
            inputs: [
                '#botania:petals/yellow',
                '#botania:petals/brown',
                '#botania:petals/orange',
                '#botania:petals/lime',
                '#botania:runes/autumn',
                'thermal:phytogro'
            ],
            output: 'botania:tigerseye',
            count: 1,
            id: 'botania:petal_apothecary/tigerseye'
        },
        {
            inputs: [
                '#botania:petals/black',
                '#botania:petals/black',
                '#botania:petals/purple',
                '#botania:petals/purple',
                '#botania:petals/green',
                '#botania:runes/water',
                '#botania:runes/sloth',
                '#botania:runes/lust',
                'botania:redstone_root',
                'thermal:phytogro'
            ],
            output: 'botania:vinculotus',
            count: 1,
            id: 'botania:petal_apothecary/vinculotus'
        },
        {
            inputs: [
                '#botania:petals/blue',
                '#botania:petals/blue',
                '#botania:petals/light_blue',
                '#botania:petals/light_blue',
                '#botania:petals/green',
                '#botania:petals/green',
                '#botania:runes/water',
                '#botania:runes/sloth',
                'botania:pixie_dust'
            ],
            output: 'mythicbotany:aquapanthus',
            count: 1,
            id: 'mythicbotany:petal_apothecary/aquapanthus'
        },
        {
            inputs: [
                '#botania:petals/red',
                '#botania:petals/red',
                '#botania:petals/purple',
                '#botania:petals/cyan',
                '#botania:runes/fire',
                'thermal:phytogro'
            ],
            output: 'mythicbotany:hellebore',
            count: 1,
            id: 'mythicbotany:petal_apothecary/hellebore'
        },
        {
            inputs: [
                '#botania:petals/yellow',
                '#botania:petals/yellow',
                '#botania:petals/gray',
                '#botania:petals/light_gray',
                '#botania:runes/fire',
                '#forge:dusts/blaze',
                'thermal:phytogro'
            ],
            output: 'mythicbotany:exoblaze',
            count: 1,
            id: 'mythicbotany:petal_apothecary/exoblaze'
        },

        /// Other
        {
            inputs: ['#forge:mushrooms', '#forge:mushrooms', 'thermal:phytogro'],
            output: 'eidolon:fungus_sprouts',
            count: 2,
            id: `${id_prefix}fungus_sprouts`
        },
        {
            inputs: ['minecraft:mossy_stone_bricks', 'naturesaura:gold_fiber', 'thermal:phytogro'],
            output: 'naturesaura:gold_brick',
            count: 1,
            id: `${id_prefix}gold_brick`
        },
        {
            inputs: ['minecraft:cobblestone', 'minecraft:vine', 'thermal:phytogro'],
            output: 'minecraft:mossy_cobblestone',
            count: 1,
            id: `minecraft:mossy_cobblestone`
        },
        {
            inputs: ['minecraft:stone_bricks', 'minecraft:vine', 'thermal:phytogro'],
            output: 'minecraft:mossy_stone_bricks',
            count: 1,
            id: `minecraft:mossy_stone_bricks`
        },
        {
            inputs: ['byg:red_rock_bricks', 'minecraft:vine', 'thermal:phytogro'],
            output: 'byg:mossy_red_rock_bricks',
            count: 1,
            id: `byg:mossy_red_rock_bricks`
        },
        {
            inputs: ['minecraft:netherrack', 'minecraft:vine', 'thermal:phytogro'],
            output: 'byg:mossy_netherrack',
            count: 1,
            id: `byg:mossy_netherrack`
        },
        {
            inputs: ['architects_palette:heavy_stone_bricks', 'minecraft:vine', 'thermal:phytogro'],
            output: 'architects_palette:heavy_mossy_stone_bricks',
            count: 1,
            id: `architects_palette:heavy_mossy_stone_bricks`
        },
        {
            inputs: ['minecraft:stone', 'minecraft:vine', 'thermal:phytogro'],
            output: 'byg:mossy_stone',
            count: 1,
            count: 1,
            id: `byg:mossy_stone`
        },
        {
            inputs: [
                'minecraft:warped_fungus',
                'minecraft:warped_fungus',
                'eidolon:ender_calx',
                '#forge:crops/nether_wart'
            ],
            output: 'eidolon:warped_sprouts',
            count: 2,
            id: `${id_prefix}warped_sprouts`
        },
        {
            inputs: [
                'upgrade_aquatic:elder_guardian_spine',
                'upgrade_aquatic:elder_guardian_spine',
                'upgrade_aquatic:elder_guardian_spine',
                '#forge:inlays/arcane_gold',
                '#forge:gems/aquamarine',
                'minecraft:heart_of_the_sea',
                '#forge:gems/aquamarine',
                'eidolon:unholy_symbol'
            ],
            output: 'eidolon:unholy_effigy',
            count: 1,
            id: `${id_prefix}unholy_effigy`
        },
        {
            inputs: ['minecraft:nether_bricks', 'naturesaura:gold_fiber', 'thermal:phytogro'],
            output: 'naturesaura:gold_nether_brick',
            count: 1,
            id: `${id_prefix}gold_nether_brick`
        },
        {
            inputs: [
                '#botania:runes/air',
                '#forge:ingots/sky',
                'atum:horus_godshard',
                '#forge:gems/dragonstone',
                'atum:geb_godshard',
                '#forge:ingots/gaia',
                '#botania:runes/earth',
                '#forge:ingots/gaia',
                'atum:geb_godshard',
                'botania:floating_rosa_arcana',
                'atum:horus_godshard',
                '#forge:ingots/sky'
            ],
            output: 'botania:laputa_shard',
            count: 1,
            id: `${id_prefix}laputa_shard`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'botania:petal_apothecary';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.output = { item: recipe.output, count: recipe.count };

        event.custom(recipe).id(recipe.id);
    });
});
