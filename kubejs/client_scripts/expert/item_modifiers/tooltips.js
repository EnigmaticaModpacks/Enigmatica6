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
    const recipes = [
        {
            items: ['bloodmagic:soulpickaxe'],
            text: ['Capable of mining Iesnium.']
        },
        {
            items: ['tconstruct:seared_melter'],
            text: [Text.of('Disabled in Expert Mode - Use the Smeltery Controller.').darkGreen()]
        },
        {
            items: ['kubejs:basic_circuit_package'],
            text: [Text.of('Requires 64 Buckets of Memory Essence in the Memory Stick').aqua()]
        }
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });
});
