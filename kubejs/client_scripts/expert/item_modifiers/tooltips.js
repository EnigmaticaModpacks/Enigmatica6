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
            description: ['Capable of mining Iesnium.']
        },
        {
            items: ['tconstruct:seared_melter'],
            description: [Text.of('Disabled in Expert Mode - Use the Smeltery Controller.').darkGreen()]
        }
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.description);
    });
});
