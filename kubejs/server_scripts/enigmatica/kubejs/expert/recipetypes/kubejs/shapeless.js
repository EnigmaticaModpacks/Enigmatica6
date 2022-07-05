onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/kubejs/shapeless/';
    const recipes = [
        {
            output: 'kubejs:engineers_school_project',
            inputs: [
                'kubejs:construction_tools',
                'kubejs:engineering_student_meals',
                'kubejs:landscaping_materials',
                'kubejs:foundation_materials',
                'kubejs:building_materials',
                'kubejs:building_materials',
                'kubejs:building_materials',
                'kubejs:building_materials',
                'kubejs:building_materials'
            ],
            id: `${id_prefix}engineers_school_project`
        },
        {
            output: 'kubejs:engineers_school_upgrades',
            inputs: ['kubejs:computer_package', 'kubejs:fluid_drill_package'],
            id: `${id_prefix}engineers_school_upgrades`
        },
        {
            output: 'kubejs:cpu_core_mk_1026',
            inputs: ['rftoolscontrol:cpu_core_500'],
            id: `${id_prefix}cpu_tier_one_conversion`
        },
        {
            output: 'rftoolscontrol:cpu_core_500',
            inputs: ['kubejs:cpu_core_mk_1026'],
            id: `${id_prefix}cpu_tier_one_reversion`
        },
        {
            output: 'kubejs:cpu_core_eg_28222',
            inputs: ['rftoolscontrol:cpu_core_1000'],
            id: `${id_prefix}cpu_tier_two_conversion`
        },
        {
            output: 'rftoolscontrol:cpu_core_1000',
            inputs: ['kubejs:cpu_core_eg_28222'],
            id: `${id_prefix}cpu_tier_two_reversion`
        },
        {
            output: 'kubejs:cpu_core_as_81221',
            inputs: ['rftoolscontrol:cpu_core_2000'],
            id: `${id_prefix}cpu_tier_three_conversion`
        },
        {
            output: 'rftoolscontrol:cpu_core_2000',
            inputs: ['kubejs:cpu_core_as_81221'],
            id: `${id_prefix}cpu_tier_three_reversion`
        },
        {
            output: 'kubejs:imaharas_indelible_electrodes',
            inputs: [
                Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0,Unbreakable:1}'),
                Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0,Unbreakable:1}'),
                Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0,Unbreakable:1}'),
                'mekanism:cardboard_box'
            ],
            id: `${id_prefix}imaharas_indelible_electrodes`
        },
        {
            output: 'kubejs:bright_constellation_box',
            inputs: [
                'mekanism:cardboard_box',
                Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"astralsorcery:aevitas"}}'
                ).weakNBT(),
                Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"astralsorcery:armara"}}'
                ).weakNBT(),
                Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"astralsorcery:discidia"}}'
                ).weakNBT(),
                Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"astralsorcery:evorsio"}}'
                ).weakNBT(),
                Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"astralsorcery:vicio"}}'
                ).weakNBT()
            ],
            id: `${id_prefix}bright_constellation_box`
        },
        {
            output: 'kubejs:dim_constellation_box',
            inputs: [
                'mekanism:cardboard_box',
                Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"naturesstarlight:naritis"}}'
                ).weakNBT(),
                Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"astralsorcery:octans"}}'
                ).weakNBT(),
                Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"astralsorcery:horologium"}}'
                ).weakNBT(),
                Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"astralsorcery:lucerna"}}'
                ).weakNBT(),
                Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"astralsorcery:mineralis"}}'
                ).weakNBT(),
                Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"astralsorcery:bootes"}}'
                ).weakNBT(),
                Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"astralsorcery:fornax"}}'
                ).weakNBT(),
                Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"astralsorcery:pelotrio"}}'
                ).weakNBT()
            ],
            id: `${id_prefix}dim_constellation_box`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
