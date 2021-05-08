events.listen('recipes', (event) => {
    data = {
        recipes: [
            {
                inputs: ['ars_nouveau:magic_clay', 'minecraft:blaze_powder'],
                output: 'bloodmagic:arcaneashes',
                count: 1,
                syphon: 500,
                ticks: 200,
                orbLevel: 1,
                id: 'bloodmagic:alchemytable/arcane_ash'
            },
            {
                inputs: [
                    'bloodmagic:plantoil',
                    'alexsmobs:rattlesnake_rattle',
                    '#forge:dusts/apatite',
                    '#forge:dusts/charcoal'
                ],
                output: 'bloodmagic:basiccuttingfluid',
                count: 1,
                syphon: 1000,
                ticks: 200,
                orbLevel: 1,
                id: 'bloodmagic:alchemytable/basic_cutting_fluid'
            },
            {
                inputs: [
                    'upgrade_aquatic:glowing_ink_sac',
                    '#forge:dusts/aluminum',
                    '#forge:dusts/aluminum',
                    '#forge:dusts/aluminum',
                    '#forge:dusts/aluminum'
                ],
                output: 'astralsorcery:illumination_powder',
                count: 16,
                syphon: 200,
                ticks: 200,
                orbLevel: 1
            },
            {
                inputs: [
                    'occultism:purified_ink',
                    '#forge:dusts/obsidian',
                    '#forge:dusts/obsidian',
                    '#forge:dusts/obsidian',
                    '#forge:dusts/obsidian'
                ],
                output: 'astralsorcery:nocturnal_powder',
                count: 16,
                syphon: 200,
                ticks: 200,
                orbLevel: 1
            },
            {
                inputs: [
                    'bloodmagic:plantoil',
                    'occultism:burnt_otherstone',
                    'occultism:burnt_otherstone',
                    'occultism:otherworld_ashes',
                    'occultism:otherworld_ashes',
                    'occultism:otherworld_ashes'
                ],
                output: 'occultism:chalk_white_impure',
                count: 1,
                syphon: 500,
                ticks: 200,
                orbLevel: 1,
                id: 'occultism:crafting/chalk_white_impure'
            },
            {
                inputs: [
                    'bloodmagic:plantoil',
                    'occultism:chalk_white_impure',
                    'architects_palette:sunmetal_blend',
                    'naturesaura:gold_powder'
                ],
                output: 'occultism:chalk_gold_impure',
                count: 1,
                syphon: 1000,
                ticks: 200,
                orbLevel: 2,
                id: 'occultism:crafting/chalk_gold_impure'
            },
            {
                inputs: [
                    'bloodmagic:plantoil',
                    'occultism:chalk_white_impure',
                    'betterendforge:enchanted_petal',
                    'eidolon:ender_calx'
                ],
                output: 'occultism:chalk_purple_impure',
                count: 1,
                syphon: 1500,
                ticks: 200,
                orbLevel: 3,
                id: 'occultism:crafting/chalk_purple_impure'
            },
            {
                inputs: [
                    'bloodmagic:plantoil',
                    'occultism:chalk_white_impure',
                    'occultism:afrit_essence',
                    'create:cinder_flour'
                ],
                output: 'occultism:chalk_red_impure',
                count: 1,
                syphon: 5000,
                ticks: 200,
                orbLevel: 4,
                id: 'occultism:crafting/chalk_red_impure'
            },
            {
                inputs: [
                    'alexsmobs:bone_serpent_tooth',
                    '#forge:dusts/sulfur',
                    'minecraft:magma_cream',
                    'ars_nouveau:red_archwood_wood'
                ],
                output: 'bloodmagic:reagentlava',
                count: 1,
                syphon: 1000,
                ticks: 200,
                orbLevel: 0,
                id: 'bloodmagic:alchemytable/reagent_lava'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.bloodmagic
            .alchemytable(Item.of(recipe.output, recipe.count), recipe.inputs)
            .syphon(recipe.syphon)
            .ticks(recipe.ticks)
            .upgradeLevel(recipe.orbLevel);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
