onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            input: { item: 'thermal:machine_frame', count: 2 },
            output: { item: 'kubejs:rftools_machine_frame_parts', count: 1 },
            program: 'drill'
        },
        {
            input: { item: 'kubejs:unassembled_rftools_machine_frame', count: 1 },
            output: { item: 'rftoolsbase:machine_frame', count: 1 },
            program: 'laser',
            id: 'rftoolsbase:machine_frame'
        },
        {
            input: { tag: 'forge:storage_blocks/gold', count: 1 },
            output: { item: 'supplementaries:gold_trapdoor', count: 5 },
            program: 'drill'
        },
        {
            input: { item: 'supplementaries:gold_trapdoor', count: 5 },
            output: { item: 'pedestals:coin/default', count: 10 },
            program: 'laser',
            id: 'pedestals:upgrades/itempedestalupgradedefault'
        },
        {
            input: { item: 'kubejs:basic_circuit_package', count: 1 },
            output: { item: 'kubejs:basic_circuit_assembly', count: 1 },
            program: 'drill'
        },
        {
            input: { item: 'kubejs:basic_circuit_assembly', count: 1 },
            output: { item: 'mekanism:basic_control_circuit', count: 3 },
            program: 'laser',
            id: 'mekanism:control_circuit/basic'
        },
        {
            input: { item: 'kubejs:basic_lenses_package', count: 1 },
            output: { item: 'occultism:lenses', count: 3 },
            program: 'laser',
            id: 'occultism:crafting/lenses'
        },

        {
            input: { item: 'kubejs:pneumatic_helmet_package', count: 1 },
            output: { item: 'kubejs:pneumatic_helmet_assembly', count: 1 },
            program: 'drill'
        },
        {
            input: { item: 'kubejs:pneumatic_helmet_assembly', count: 1 },
            output: { item: 'pneumaticcraft:pneumatic_helmet', count: 1 },
            program: 'laser'
        },

        {
            input: { item: 'kubejs:pneumatic_chestplate_package', count: 1 },
            output: { item: 'kubejs:pneumatic_chestplate_assembly', count: 1 },
            program: 'drill'
        },
        {
            input: { item: 'kubejs:pneumatic_chestplate_assembly', count: 1 },
            output: { item: 'pneumaticcraft:pneumatic_chestplate', count: 1 },
            program: 'laser'
        },
        {
            input: { item: 'kubejs:pneumatic_leggings_package', count: 1 },
            output: { item: 'kubejs:pneumatic_leggings_assembly', count: 1 },
            program: 'drill'
        },
        {
            input: { item: 'kubejs:pneumatic_leggings_assembly', count: 1 },
            output: { item: 'pneumaticcraft:pneumatic_leggings', count: 1 },
            program: 'laser'
        },
        {
            input: { item: 'kubejs:pneumatic_boots_package', count: 1 },
            output: { item: 'kubejs:pneumatic_boots_assembly', count: 1 },
            program: 'drill'
        },
        {
            input: { item: 'kubejs:pneumatic_boots_assembly', count: 1 },
            output: { item: 'pneumaticcraft:pneumatic_boots', count: 1 },
            program: 'laser'
        }
    ];
    recipes.forEach((recipe) => {
        if (recipe.input.count > 1) {
            recipe.input.type = 'pneumaticcraft:stacked_item';
        }

        let re = event.custom({
            type: `pneumaticcraft:assembly_${recipe.program}`,
            input: recipe.input,
            result: recipe.output,
            program: recipe.program
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
