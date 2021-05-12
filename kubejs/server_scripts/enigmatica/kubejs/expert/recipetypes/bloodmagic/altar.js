events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    data = {
        recipes: [
            {
                input: 'eidolon:unholy_symbol',
                output: 'bloodmagic:weakbloodorb',
                syphon: 7000,
                altarLevel: 0,
                consumptionRate: 5,
                drainRate: 1,
                id: 'bloodmagic:altar/weakbloodorb'
            },
            {
                input: 'meetyourfight:caged_heart',
                output: 'bloodmagic:apprenticebloodorb',
                syphon: 7000,
                altarLevel: 1,
                consumptionRate: 5,
                drainRate: 5,
                id: 'bloodmagic:altar/apprenticebloodorb'
            },
            {
                input: 'occultism:chalk_white_impure',
                output: 'occultism:chalk_white',
                syphon: 7000,
                altarLevel: 0,
                consumptionRate: 5,
                drainRate: 1,
                id: 'occultism:spirit_fire/chalk_white'
            },
            {
                input: 'occultism:chalk_gold_impure',
                output: 'occultism:chalk_gold',
                syphon: 7000,
                altarLevel: 1,
                consumptionRate: 5,
                drainRate: 5,
                id: 'occultism:spirit_fire/chalk_gold'
            },
            {
                input: 'occultism:chalk_purple_impure',
                output: 'occultism:chalk_purple',
                syphon: 25000,
                altarLevel: 2,
                consumptionRate: 20,
                drainRate: 20,
                id: 'occultism:spirit_fire/chalk_purple'
            },
            {
                input: 'occultism:chalk_red_impure',
                output: 'occultism:chalk_red',
                syphon: 40000,
                altarLevel: 3,
                consumptionRate: 30,
                drainRate: 50,
                id: 'occultism:spirit_fire/chalk_red'
            },
            {
                input: 'ars_nouveau:mana_fiber',
                output: 'bloodmagic:soulsnare',
                syphon: 500,
                altarLevel: 1,
                consumptionRate: 5,
                drainRate: 1,
                id: 'bloodmagic:altar/soul_snare'
            },
            {
                input: 'kubejs:firmament',
                output: 'architects_palette:moonstone',
                syphon: 25000,
                altarLevel: 2,
                consumptionRate: 20,
                drainRate: 20
            },
            {
                input: 'eidolon:sapping_sword',
                output: 'bloodmagic:sacrificialdagger',
                syphon: 7000,
                altarLevel: 1,
                consumptionRate: 5,
                drainRate: 5,
                id: 'bloodmagic:sacrificial_dagger'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.bloodmagic
            .altar(recipe.output, recipe.input)
            .upgradeLevel(recipe.altarLevel)
            .altarSyphon(recipe.syphon)
            .consumptionRate(recipe.consumptionRate)
            .drainRate(recipe.drainRate);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
