onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/enigmatica/';
    const recipes = [
        {
            output: 'magicfeather:magicfeather',
            pattern: ['CFC', 'BDB', 'AEA'],
            key: {
                A: 'alexsmobs:roadrunner_feather',
                B: '#forge:ingots/enderium',
                C: 'ars_nouveau:mana_fiber',
                D: 'byg:leaf_pile',
                E: 'ars_nouveau:glyph_launch',
                F: 'ars_nouveau:glyph_slowfall'
            },
            id: `${id_prefix}magicfeather_magic`
        },
        {
            output: 'magicfeather:magicfeather',
            pattern: ['CFC', 'BDB', 'AEA'],
            key: {
                A: 'thermal:lightning_charge',
                B: '#mekanism:alloys/atomic',
                C: 'thermal:hazmat_fabric',
                D: 'byg:leaf_pile',
                E: 'thermal:hazmat_boots',
                F: 'alexsmobs:frontier_cap'
            },
            id: `${id_prefix}magicfeather_tech`
        },
        {
            output: 'losttrinkets:magical_feathers',
            pattern: ['FAF', 'EBE', 'CDC'],
            key: {
                A: '#forge:elytra',
                B: 'magicfeather:magicfeather',
                C: 'minecraft:prismarine_shard',
                D: '#forge:nether_stars',
                E: 'rftoolsbase:infused_diamond',
                F: 'minecraft:ender_eye'
            },
            id: `${id_prefix}magical_feathers`
        }
    ];

    powahTiers.forEach(function (tier) {
        let capacitor = 'powah:capacitor_' + tier,
            crystal = 'powah:crystal_' + tier,
            cable = 'powah:energy_cable_' + tier;

        if (tier == 'basic' || tier == 'starter') {
            return;
        } else if (tier == 'hardened') {
            crystal = 'powah:steel_energized';
        }

        let lowerTiers = [],
            i = 0,
            j = powahTiers.indexOf(tier);

        while (i < j) {
            lowerTiers.push(powahTiers[i]);
            i++;
        }

        recipes.push(
            {
                output: Item.of(`powah:energizing_rod_${tier}`),
                pattern: ['   ', 'ACA', ' B '],
                key: {
                    A: capacitor,
                    B: `powah:energy_cable_${tier}`,
                    C: Ingredient.of(lowerTiers.map((item) => `powah:energizing_rod_${item}`))
                },
                id: `${id_prefix}powah/energizing_rod_${tier}`
            },
            {
                output: Item.of(`powah:furnator_${tier}`),
                pattern: ['AAA', 'BCB', 'A A'],
                key: {
                    A: crystal,
                    B: capacitor,
                    C: Ingredient.of(lowerTiers.map((item) => `powah:furnator_${item}`))
                },
                id: `${id_prefix}powah/furnator_${tier}`
            },
            {
                output: Item.of(`powah:magmator_${tier}`),
                pattern: ['AAA', 'BCB', 'A A'],
                key: {
                    A: crystal,
                    B: capacitor,
                    C: Ingredient.of(lowerTiers.map((item) => `powah:magmator_${item}`))
                },
                id: `${id_prefix}powah/magmator_${tier}`
            },
            {
                output: Item.of(`powah:thermo_generator_${tier}`),
                pattern: [' A ', 'BCB'],
                key: {
                    A: crystal,
                    B: capacitor,
                    C: Ingredient.of(lowerTiers.map((item) => `powah:thermo_generator_${item}`))
                },
                id: `${id_prefix}powah/thermo_generator_${tier}`
            },
            {
                output: Item.of(`powah:energy_hopper_${tier}`),
                pattern: ['ABA'],
                key: {
                    A: capacitor,
                    B: Ingredient.of(lowerTiers.map((item) => `powah:energy_hopper_${item}`))
                },
                id: `${id_prefix}powah/energy_hopper_${tier}`
            },
            {
                output: Item.of(`powah:energy_discharger_${tier}`),
                pattern: [' A ', ' B ', ' A '],
                key: {
                    A: capacitor,
                    B: Ingredient.of(lowerTiers.map((item) => `powah:energy_discharger_${item}`))
                },
                id: `${id_prefix}powah/energy_discharger_${tier}`
            },
            {
                output: Item.of(`powah:ender_gate_${tier}`, 4),
                pattern: ['BAB', 'A A', 'BAB'],
                key: {
                    A: cable,
                    B: Ingredient.of(lowerTiers.map((item) => `powah:ender_gate_${item}`))
                },
                id: `${id_prefix}powah/ender_gate_${tier}`
            },
            {
                output: Item.of(`powah:reactor_${tier}`, 4),
                pattern: ['BAB', 'A A', 'BAB'],
                key: {
                    A: capacitor,
                    B: Ingredient.of(lowerTiers.map((item) => `powah:reactor_${item}`))
                },
                id: `${id_prefix}powah/reactor_${tier}`
            }
        );
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
