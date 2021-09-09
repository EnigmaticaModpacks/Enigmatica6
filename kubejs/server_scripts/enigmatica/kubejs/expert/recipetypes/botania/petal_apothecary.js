onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/botania/petal_apothecary/';
    const recipes = [
        /// Generating Flora
        {
            inputs: [
                { tag: 'botania:petals/blue' },
                { tag: 'botania:petals/blue' },
                { tag: 'botania:petals/cyan' },
                { tag: 'botania:petals/cyan' },
                { tag: 'forge:nuggets/neptunium' },
                { tag: 'botania:runes/water' },
                { item: 'undergarden:masticator_scales' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:hydroangeas' },
            id: 'botania:petal_apothecary/hydroangeas'
        },
        {
            inputs: [
                { tag: 'botania:petals/brown' },
                { tag: 'botania:petals/brown' },
                { tag: 'botania:petals/red' },
                { tag: 'botania:petals/light_gray' },
                { tag: 'botania:runes/fire' },
                { tag: 'botania:runes/air' },
                { item: 'undergarden:masticator_scales' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:endoflame' },
            id: 'botania:petal_apothecary/endoflame'
        },
        {
            inputs: [
                { tag: 'botania:petals/red' },
                { tag: 'botania:petals/orange' },
                { tag: 'botania:petals/orange' },
                { tag: 'botania:runes/earth' },
                { tag: 'botania:runes/fire' },
                { item: 'undergarden:masticator_scales' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:thermalily' },
            id: 'botania:petal_apothecary/thermalily'
        },
        {
            inputs: [
                { tag: 'botania:petals/pink' },
                { tag: 'botania:petals/pink' },
                { tag: 'botania:petals/purple' },
                { tag: 'botania:petals/purple' },
                { tag: 'botania:petals/lime' },
                { tag: 'botania:runes/mana' },
                { tag: 'botania:runes/mana' },
                { tag: 'botania:runes/mana' },
                { item: 'undergarden:masticator_scales' },
                { item: 'botania:life_essence' }
            ],
            output: { item: 'botania:rosa_arcana' },
            id: 'botania:petal_apothecary/rosa_arcana'
        },
        {
            inputs: [
                { tag: 'botania:petals/lime' },
                { tag: 'botania:petals/lime' },
                { tag: 'botania:petals/red' },
                { tag: 'botania:petals/red' },
                { tag: 'botania:petals/green' },
                { tag: 'botania:runes/gluttony' },
                { item: 'undergarden:masticator_scales' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:munchdew' },
            id: 'botania:petal_apothecary/munchdew'
        },
        {
            inputs: [
                { tag: 'botania:petals/red' },
                { tag: 'botania:petals/red' },
                { tag: 'botania:petals/gray' },
                { tag: 'botania:petals/gray' },
                { tag: 'botania:petals/white' },
                { tag: 'botania:petals/white' },
                { tag: 'botania:runes/wrath' },
                { tag: 'botania:runes/fire' },
                { item: 'undergarden:masticator_scales' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:entropinnyum' },
            id: 'botania:petal_apothecary/entropinnyum'
        },
        {
            inputs: [
                { tag: 'botania:petals/white' },
                { tag: 'botania:petals/white' },
                { tag: 'botania:petals/orange' },
                { tag: 'botania:petals/orange' },
                { tag: 'botania:petals/brown' },
                { tag: 'botania:petals/brown' },
                { tag: 'botania:runes/gluttony' },
                { item: 'undergarden:masticator_scales' },
                { item: 'botania:pixie_dust' }
            ],
            output: { item: 'botania:kekimurus' },
            id: 'botania:petal_apothecary/kekimurus'
        },
        {
            inputs: [
                { tag: 'botania:petals/light_gray' },
                { tag: 'botania:petals/light_gray' },
                { tag: 'botania:petals/yellow' },
                { tag: 'botania:petals/yellow' },
                { tag: 'botania:petals/red' },
                { item: 'undergarden:masticator_scales' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:gourmaryllis' },
            id: 'botania:petal_apothecary/gourmaryllis'
        },
        {
            inputs: [
                { tag: 'botania:petals/lime' },
                { tag: 'botania:petals/lime' },
                { tag: 'botania:petals/green' },
                { tag: 'botania:petals/green' },
                { tag: 'botania:petals/black' },
                { tag: 'botania:runes/summer' },
                { tag: 'botania:runes/water' },
                { item: 'undergarden:masticator_scales' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:narslimmus' },
            id: 'botania:petal_apothecary/narslimmus'
        },
        {
            inputs: [
                { tag: 'botania:petals/red' },
                { tag: 'botania:petals/red' },
                { tag: 'botania:petals/green' },
                { tag: 'botania:petals/green' },
                { tag: 'botania:petals/blue' },
                { tag: 'botania:petals/blue' },
                { tag: 'botania:petals/white' },
                { tag: 'botania:petals/white' },
                { tag: 'botania:runes/winter' },
                { tag: 'botania:runes/air' },
                { item: 'undergarden:masticator_scales' },
                { item: 'botania:pixie_dust' }
            ],
            output: { item: 'botania:spectrolus' },
            id: 'botania:petal_apothecary/spectrolus'
        },
        {
            inputs: [
                { tag: 'botania:petals/purple' },
                { tag: 'botania:petals/purple' },
                { tag: 'botania:petals/lime' },
                { tag: 'botania:petals/green' },
                { tag: 'botania:runes/water' },
                { tag: 'botania:runes/fire' },
                { tag: 'botania:runes/earth' },
                { tag: 'botania:runes/air' },
                { item: 'undergarden:masticator_scales' },
                { item: 'botania:life_essence' }
            ],
            output: { item: 'botania:dandelifeon' },
            id: 'botania:petal_apothecary/dandelifeon'
        },
        {
            inputs: [
                { tag: 'botania:petals/purple' },
                { tag: 'botania:petals/purple' },
                { tag: 'botania:petals/green' },
                { tag: 'botania:petals/green' },
                { tag: 'botania:petals/black' },
                { tag: 'botania:runes/earth' },
                { tag: 'botania:runes/pride' },
                { item: 'undergarden:masticator_scales' },
                { item: 'botania:pixie_dust' }
            ],
            output: { item: 'botania:rafflowsia' },
            id: 'botania:petal_apothecary/rafflowsia'
        },
        {
            inputs: [
                { tag: 'botania:petals/purple' },
                { tag: 'botania:petals/purple' },
                { tag: 'botania:petals/magenta' },
                { tag: 'botania:petals/magenta' },
                { tag: 'botania:petals/light_gray' },
                { tag: 'botania:runes/envy' },
                { tag: 'botania:runes/wrath' },
                { item: 'undergarden:masticator_scales' },
                { item: 'botania:life_essence' }
            ],
            output: { item: 'botania:shulk_me_not' },
            id: 'botania:petal_apothecary/shulk_me_not'
        },

        /// Functional Flora
        {
            inputs: [
                { tag: 'botania:petals/lime' },
                { tag: 'botania:petals/lime' },
                { tag: 'botania:petals/green' },
                { tag: 'botania:petals/yellow' },
                { tag: 'botania:runes/spring' },
                { item: 'botania:redstone_root' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:agricarnation' },
            id: 'botania:petal_apothecary/agricarnation'
        },
        {
            inputs: [
                { tag: 'botania:petals/red' },
                { tag: 'botania:petals/red' },
                { tag: 'botania:petals/red' },
                { tag: 'botania:petals/cyan' },
                { tag: 'botania:petals/cyan' },
                { item: 'botania:redstone_root' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:bellethorn' },
            id: 'botania:petal_apothecary/bellethorn'
        },
        {
            inputs: [
                { tag: 'botania:petals/orange' },
                { tag: 'botania:petals/green' },
                { tag: 'botania:petals/green' },
                { item: 'botania:redstone_root' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:bergamute' },
            id: 'botania:petal_apothecary/bergamute'
        },
        {
            inputs: [
                { tag: 'botania:petals/light_gray' },
                { tag: 'botania:petals/light_gray' },
                { tag: 'botania:petals/gray' },
                { tag: 'botania:petals/cyan' },
                { tag: 'botania:runes/earth' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:clayconia' },
            id: 'botania:petal_apothecary/clayconia'
        },
        {
            inputs: [
                { tag: 'botania:petals/white' },
                { tag: 'botania:petals/white' },
                { tag: 'botania:petals/brown' },
                { tag: 'botania:petals/yellow' },
                { tag: 'botania:runes/air' },
                { item: 'botania:redstone_root' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:daffomill' },
            id: 'botania:petal_apothecary/daffomill'
        },
        {
            inputs: [
                { tag: 'botania:petals/black' },
                { tag: 'botania:petals/black' },
                { tag: 'botania:petals/black' },
                { tag: 'botania:petals/cyan' },
                { tag: 'botania:petals/cyan' },
                { item: 'botania:redstone_root' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:dreadthorn' },
            id: 'botania:petal_apothecary/dreadthorn'
        },
        {
            inputs: [
                { tag: 'botania:petals/red' },
                { tag: 'botania:petals/red' },
                { tag: 'botania:petals/gray' },
                { tag: 'botania:petals/light_gray' },
                { tag: 'botania:runes/fire' },
                { tag: 'botania:runes/summer' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:exoflame' },
            id: 'botania:petal_apothecary/exoflame'
        },
        {
            inputs: [
                { tag: 'botania:petals/white' },
                { tag: 'botania:petals/white' },
                { tag: 'botania:petals/yellow' },
                { tag: 'botania:petals/yellow' },
                { tag: 'botania:petals/orange' },
                { tag: 'botania:runes/spring' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:fallen_kanade' },
            id: 'botania:petal_apothecary/fallen_kanade'
        },
        {
            inputs: [
                { tag: 'botania:petals/gray' },
                { tag: 'botania:petals/gray' },
                { tag: 'botania:petals/light_gray' },
                { tag: 'botania:petals/light_gray' },
                { tag: 'botania:runes/air' },
                { item: 'botania:redstone_root' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:hopperhock' },
            id: 'botania:petal_apothecary/hopperhock'
        },
        {
            inputs: [
                { tag: 'botania:petals/purple' },
                { tag: 'botania:petals/purple' },
                { tag: 'botania:petals/magenta' },
                { tag: 'botania:petals/magenta' },
                { tag: 'botania:petals/green' },
                { tag: 'botania:runes/water' },
                { tag: 'botania:runes/autumn' },
                { item: 'botania:redstone_root' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:hyacidus' },
            id: 'botania:petal_apothecary/hyacidus'
        },
        {
            inputs: [
                { tag: 'botania:petals/purple' },
                { tag: 'botania:petals/lime' },
                { tag: 'botania:petals/green' },
                { tag: 'botania:runes/spring' },
                { item: 'botania:redstone_root' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:jaded_amaranthus' },
            id: 'botania:petal_apothecary/jaded_amaranthus'
        },
        {
            inputs: [
                { tag: 'botania:petals/pink' },
                { tag: 'botania:petals/pink' },
                { tag: 'botania:petals/purple' },
                { tag: 'botania:petals/light_gray' },
                { tag: 'botania:runes/water' },
                { tag: 'botania:runes/air' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:jiyuulia' },
            id: 'botania:petal_apothecary/jiyuulia'
        },
        {
            inputs: [
                { tag: 'botania:petals/light_blue' },
                { tag: 'botania:petals/green' },
                { tag: 'botania:petals/red' },
                { tag: 'botania:petals/cyan' },
                { tag: 'forge:dusts/mana' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:manastar' },
            id: 'botania:petal_apothecary/manastar'
        },
        {
            inputs: [
                { tag: 'botania:petals/gray' },
                { tag: 'botania:petals/yellow' },
                { tag: 'botania:petals/green' },
                { tag: 'botania:petals/red' },
                { tag: 'botania:runes/earth' },
                { tag: 'botania:runes/fire' },
                { item: 'botania:redstone_root' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:marimorphosis' },
            id: 'botania:petal_apothecary/marimorphosis'
        },
        {
            inputs: [
                { tag: 'botania:petals/brown' },
                { tag: 'botania:petals/brown' },
                { tag: 'botania:petals/gray' },
                { tag: 'botania:petals/gray' },
                { tag: 'botania:runes/earth' },
                { item: 'botania:redstone_root' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:medumone' },
            id: 'botania:petal_apothecary/medumone'
        },
        {
            inputs: [
                { tag: 'botania:petals/red' },
                { tag: 'botania:petals/red' },
                { tag: 'botania:petals/pink' },
                { tag: 'botania:petals/pink' },
                { tag: 'botania:petals/orange' },
                { tag: 'botania:runes/lust' },
                { tag: 'botania:runes/fire' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:pollidisiac' },
            id: 'botania:petal_apothecary/pollidisiac'
        },
        {
            inputs: [
                { tag: 'botania:petals/white' },
                { tag: 'botania:petals/white' },
                { tag: 'botania:petals/white' },
                { tag: 'botania:petals/white' },
                { item: 'minecraft:conduit' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:pure_daisy' },
            id: 'botania:petal_apothecary/pure_daisy'
        },
        {
            inputs: [
                { tag: 'botania:petals/orange' },
                { tag: 'botania:petals/orange' },
                { tag: 'botania:petals/yellow' },
                { tag: 'botania:runes/earth' },
                { item: 'botania:redstone_root' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:rannuncarpus' },
            id: 'botania:petal_apothecary/rannuncarpus'
        },
        {
            inputs: [
                { tag: 'botania:petals/brown' },
                { tag: 'botania:petals/brown' },
                { tag: 'botania:petals/red' },
                { tag: 'botania:petals/blue' },
                { item: 'bloodmagic:reagentmagnetism' },
                { item: 'botania:redstone_root' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:solegnolia' },
            id: 'botania:petal_apothecary/solegnolia'
        },
        {
            inputs: [
                { tag: 'botania:petals/cyan' },
                { tag: 'botania:petals/cyan' },
                { tag: 'botania:petals/gray' },
                { tag: 'botania:petals/light_gray' },
                { tag: 'botania:runes/air' },
                { tag: 'botania:runes/earth' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:tangleberrie' },
            id: 'botania:petal_apothecary/tangleberrie'
        },
        {
            inputs: [
                { tag: 'botania:petals/yellow' },
                { tag: 'botania:petals/brown' },
                { tag: 'botania:petals/orange' },
                { tag: 'botania:petals/lime' },
                { tag: 'botania:runes/autumn' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:tigerseye' },
            id: 'botania:petal_apothecary/tigerseye'
        },
        {
            inputs: [
                { tag: 'botania:petals/black' },
                { tag: 'botania:petals/black' },
                { tag: 'botania:petals/purple' },
                { tag: 'botania:petals/purple' },
                { tag: 'botania:petals/green' },
                { tag: 'botania:runes/water' },
                { tag: 'botania:runes/sloth' },
                { tag: 'botania:runes/lust' },
                { item: 'botania:redstone_root' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:vinculotus' },
            id: 'botania:petal_apothecary/vinculotus'
        },
        {
            inputs: [
                { tag: 'botania:petals/blue' },
                { tag: 'botania:petals/blue' },
                { tag: 'botania:petals/light_blue' },
                { tag: 'botania:petals/light_blue' },
                { tag: 'botania:petals/green' },
                { tag: 'botania:petals/green' },
                { tag: 'botania:runes/water' },
                { tag: 'botania:runes/sloth' },
                { item: 'botania:pixie_dust' }
            ],
            output: { item: 'mythicbotany:aquapanthus' },
            id: 'mythicbotany:petal_apothecary/aquapanthus'
        },
        {
            inputs: [
                { tag: 'botania:petals/red' },
                { tag: 'botania:petals/red' },
                { tag: 'botania:petals/purple' },
                { tag: 'botania:petals/cyan' },
                { tag: 'botania:runes/fire' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'mythicbotany:hellebore' },
            id: 'mythicbotany:petal_apothecary/hellebore'
        },
        {
            inputs: [
                { tag: 'botania:petals/yellow' },
                { tag: 'botania:petals/yellow' },
                { tag: 'botania:petals/gray' },
                { tag: 'botania:petals/light_gray' },
                { tag: 'botania:runes/fire' },
                { tag: 'forge:dusts/blaze' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'mythicbotany:exoblaze' },
            id: 'mythicbotany:petal_apothecary/exoblaze'
        },

        /// Other
        {
            inputs: [{ tag: 'forge:mushrooms' }, { item: 'thermal:phytogro' }],
            output: { item: 'eidolon:fungus_sprouts', count: 2 },
            id: `${id_prefix}fungus_sprouts`
        },
        {
            inputs: [
                { item: 'minecraft:mossy_stone_bricks' },
                { item: 'naturesaura:gold_fiber' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'naturesaura:gold_brick' },
            id: `${id_prefix}gold_brick`
        },
        {
            inputs: [{ item: 'minecraft:cobblestone' }, { item: 'minecraft:vine' }, { item: 'thermal:phytogro' }],
            output: { item: 'minecraft:mossy_cobblestone' },
            id: `minecraft:mossy_cobblestone`
        },
        {
            inputs: [{ item: 'minecraft:stone_bricks' }, { item: 'minecraft:vine' }, { item: 'thermal:phytogro' }],
            output: { item: 'minecraft:mossy_stone_bricks' },
            id: `minecraft:mossy_stone_bricks`
        },
        {
            inputs: [{ item: 'byg:red_rock_bricks' }, { item: 'minecraft:vine' }, { item: 'thermal:phytogro' }],
            output: { item: 'byg:mossy_red_rock_bricks' },
            id: `byg:mossy_red_rock_bricks`
        },
        {
            inputs: [{ item: 'minecraft:netherrack' }, { item: 'minecraft:vine' }, { item: 'thermal:phytogro' }],
            output: { item: 'byg:mossy_netherrack' },
            id: `byg:mossy_netherrack`
        },
        {
            inputs: [
                { item: 'architects_palette:heavy_stone_bricks' },
                { item: 'minecraft:vine' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'architects_palette:heavy_mossy_stone_bricks' },
            id: `architects_palette:heavy_mossy_stone_bricks`
        },
        {
            inputs: [{ item: 'minecraft:stone' }, { item: 'minecraft:vine' }, { item: 'thermal:phytogro' }],
            output: { item: 'byg:mossy_stone' },
            id: `byg:mossy_stone`
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'botania:petal_apothecary',
                output: recipe.output,
                ingredients: recipe.inputs
            })
            .id(recipe.id);
    });
});
