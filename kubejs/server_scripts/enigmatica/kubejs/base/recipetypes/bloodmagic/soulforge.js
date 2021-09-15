onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/bloodmagic/soulforge/';
    var data = {
        recipes: [
            {
                inputs: ['#forge:stone', '#forge:rods/blaze', 'bloodmagic:explosivepowder'],
                output: 'bloodmagic:primitive_explosive_cell',
                minimumDrain: 1200.0,
                drain: 200.0,
                id: `${id_prefix}primitive_explosive_cell`
            },
            {
                inputs: [
                    '#forge:ingots/gold_tin',
                    '#forge:dusts/redstone',
                    '#forge:glass',
                    '#bloodmagic:crystals/demon'
                ],
                output: 'bloodmagic:demonwillgauge',
                minimumDrain: 400.0,
                drain: 50.0,
                id: 'bloodmagic:soulforge/demon_will_gauge'
            },
            {
                inputs: ['#forge:storage_blocks/iron_tin', '#forge:gems/diamond', 'bloodmagic:infusedslate'],
                output: 'bloodmagic:masterroutingnode',
                minimumDrain: 400.0,
                drain: 200.0,
                id: 'bloodmagic:soulforge/master_routing_node'
            },
            {
                inputs: [
                    '#forge:ingots/gold_silver',
                    'bloodmagic:itemroutingnode',
                    '#forge:dusts/redstone',
                    '#forge:dusts/glowstone'
                ],
                output: 'bloodmagic:inputroutingnode',
                minimumDrain: 400.0,
                drain: 25.0,
                id: 'bloodmagic:soulforge/input_routing_node'
            },
            {
                inputs: [
                    '#forge:ingots/iron_lead',
                    'bloodmagic:itemroutingnode',
                    '#forge:dusts/redstone',
                    '#forge:dusts/glowstone'
                ],
                output: 'bloodmagic:outputroutingnode',
                minimumDrain: 400.0,
                drain: 25.0,
                id: 'bloodmagic:soulforge/output_routing_node'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .soulforge(recipe.output, recipe.inputs)
            .minimumDrain(recipe.minimumDrain)
            .drain(recipe.drain)
            .id(recipe.id);
    });
});
