onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    var data = {
        recipes: [
            {
                input: 'bloodmagic:weakbloodorb',
                output: 'eidolon:unholy_symbol',
                tool: '#bloodmagic:arc/reverter',
                extraOutputs: [],
                consume: false,
                id: 'bloodmagic:arc/reversion/weak_blood_orb'
            },
            {
                input: 'bloodmagic:apprenticebloodorb',
                output: 'meetyourfight:caged_heart',
                tool: '#bloodmagic:arc/reverter',
                extraOutputs: [],
                consume: false,
                id: 'bloodmagic:arc/reversion/apprentice_blood_orb'
            },
            {
                input: 'bloodmagic:magicianbloodorb',
                output: 'botania:mana_tablet',
                tool: '#bloodmagic:arc/reverter',
                extraOutputs: [],
                consume: false,
                id: 'bloodmagic:arc/reversion/magician_blood_orb'
            },
            {
                input: 'bloodmagic:masterbloodorb',
                output: 'create:shadow_steel',
                tool: '#bloodmagic:arc/reverter',
                extraOutputs: [],
                consume: false,
                id: 'bloodmagic:arc/reversion/master_blood_orb'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.bloodmagic
            .arc(recipe.output, recipe.input, recipe.tool, recipe.extraOutputs)
            .consumeIngredient(recipe.consume);

        if (recipe.fluidOutput) {
            re.outputFluid(recipe.fluidOutput);
        }

        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
