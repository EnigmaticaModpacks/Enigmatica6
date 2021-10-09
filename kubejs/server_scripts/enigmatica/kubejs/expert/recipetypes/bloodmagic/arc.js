onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/bloodmagic/arc/';
    const recipes = [
        {
            output: 'eidolon:unholy_symbol',
            input: 'bloodmagic:weakbloodorb',
            tool: '#bloodmagic:arc/reverter',
            extraOutputs: [],
            consume: false,
            id: 'bloodmagic:arc/reversion/weak_blood_orb'
        },
        {
            output: 'meetyourfight:caged_heart',
            input: 'bloodmagic:apprenticebloodorb',
            tool: '#bloodmagic:arc/reverter',
            extraOutputs: [],
            consume: false,
            id: 'bloodmagic:arc/reversion/apprentice_blood_orb'
        },
        {
            output: 'botania:mana_tablet',
            input: 'bloodmagic:magicianbloodorb',
            tool: '#bloodmagic:arc/reverter',
            extraOutputs: [],
            consume: false,
            id: 'bloodmagic:arc/reversion/magician_blood_orb'
        },
        {
            output: 'create:shadow_steel',
            input: 'bloodmagic:masterbloodorb',
            tool: '#bloodmagic:arc/reverter',
            extraOutputs: [],
            consume: false,
            id: 'bloodmagic:arc/reversion/master_blood_orb'
        },
        {
            output: Item.of('bloodmagic:corrupted_tinydust', 6),
            input: '#bloodmagic:crystals/demon',
            tool: '#bloodmagic:arc/resonator',
            extraOutputs: [Item.of('bloodmagic:corrupted_tinydust').chance(0.15)],
            consume: false,
            id: `${id_prefix}corrupted_tinydust_from_demon_crystals`
        }

        /*,
        // Disabled for now. Thought this could be a nifty way to access this stuff instead of the magma crucible recipes but it's not discoverable in JEI at all... 
        // Issue opened with BloodMagic. To revist possibly later. 
        {
            output: 'botania:mana_powder',
            input: '#forge:storage_blocks/ender',
            tool: '#bloodmagic:arc/resonator',
            extraOutputs: [],
            outputFluid: Fluid.of('thermal:ender', 500),
            consume: false,
            id: `${id_prefix}mana_powder_from_pearl`
        },
        {
            output: 'botania:mana_powder',
            input: '#forge:storage_blocks/redstone',
            tool: '#bloodmagic:arc/resonator',
            extraOutputs: [],
            outputFluid: Fluid.of('thermal:redstone', 500),
            consume: false,
            id: `${id_prefix}mana_powder_from_redstone`
        },
        {
            output: 'botania:mana_powder',
            input: '#forge:storage_blocks/glowstone',
            tool: '#bloodmagic:arc/resonator',
            extraOutputs: [],
            outputFluid: Fluid.of('thermal:glowstone', 500),
            consume: false,
            id: `${id_prefix}mana_powder_from_glowstone`
        }
        */
    ];
    recipes.forEach((recipe) => {
        const re = event.recipes.bloodmagic
            .arc(recipe.output, recipe.input, recipe.tool, recipe.extraOutputs)
            .consumeIngredient(recipe.consume)
            .id(recipe.id);

        if (recipe.outputFluid) {
            re.outputFluid(recipe.outputFluid);
        }
    });
});
