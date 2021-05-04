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
                ticks: 200,
                altarLevel: 0,
                consumptionRate: 5,
                drainRate: 1,
                id: 'bloodmagic:altar/weakbloodorb'
            },
            {
                input: 'occultism:chalk_white_impure',
                output: 'occultism:chalk_white',
                syphon: 1000,
                ticks: 200,
                altarLevel: 0,
                consumptionRate: 5,
                drainRate: 1,
                id: 'occultism:spirit_fire/chalk_white'
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
