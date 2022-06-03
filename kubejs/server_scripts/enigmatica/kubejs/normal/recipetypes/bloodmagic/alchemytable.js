onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/bloodmagic/alchemytable/';

    recipes = [
        {
            inputs: [
                'bloodmagic:tauoil',
                '#forge:dusts/glowstone',
                'minecraft:gunpowder',
                'minecraft:sugar',
                '#forge:dusts/sulfur',
                Item.of('minecraft:potion', '{Potion:"minecraft:water"}')
            ],
            output: 'bloodmagic:intermediatecuttingfluid',
            count: 1,
            syphon: 2000,
            ticks: 200,
            orbLevel: 3,
            id: 'bloodmagic:alchemytable/intermediate_cutting_fluid'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .alchemytable(Item.of(recipe.output, recipe.count), recipe.inputs)
            .syphon(recipe.syphon)
            .ticks(recipe.ticks)
            .upgradeLevel(recipe.orbLevel)
            .id(recipe.id);
    });
});
