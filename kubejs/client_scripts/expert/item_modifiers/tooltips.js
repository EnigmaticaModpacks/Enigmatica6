onEvent('item.tooltip', (event) => {
    /*
    Valid Color Codes:
    
    .black()
    .darkBlue()
    .darkGreen()
    .darkAqua()
    .darkRed()
    .darkPurple()
    .gold()
    .gray()
    .darkGray()
    .blue()
    .green()
    .aqua()
    .red()
    .lightPurple()
    .yellow()
    .white()
    .color('#808080') //any hex color
    */
    if (global.isExpertMode == false) {
        return;
    }
    const disabledInExpert = Text.of('Disabled in Expert Mode.').red();
    const recipes = [
        {
            items: ['bloodmagic:soulpickaxe'],
            text: [Text.of('Capable of mining Iesnium.').color('#7e24b3')]
        },
        {
            items: ['tconstruct:seared_melter'],
            text: [disabledInExpert, Text.of('Use the Smeltery Controller instead.').aqua()]
        },
        {
            items: ['kubejs:basic_circuit_package'],
            text: [Text.of('Requires 64 Buckets of Memory Essence in the Memory Stick').aqua()]
        },
        {
            items: ['resourcefulbees:t2_apiary', 'resourcefulbees:t3_apiary', 'resourcefulbees:t4_apiary'],
            text: [
                Text.of('Crafting this will not return any bees contained in the ingredients.').red(),
                Text.of('Make sure to remove them before crafting!').red()
            ]
        },
        {
            items: ['industrialforegoing:mob_slaughter_factory'],
            text: [
                disabledInExpert,
                Text.of('Liquid Meat can be obtained by "processing" cows.').color('#6e2a2a'),
                Text.of('Pink Slime can be harvested from a Pink Wither using a Fluid Laser.').color('#da07e6')
            ]
        }
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });
});
