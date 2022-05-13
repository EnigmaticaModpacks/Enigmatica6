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
            items: [
                'integrateddynamics:mechanical_squeezer',
                'integrateddynamics:mechanical_drying_basin',
                'integrateddynamics:squeezer',
                'integrateddynamics:drying_basin',
                'pneumaticcraft:air_compressor',
                'pneumaticcraft:advanced_air_compressor',
                'darkutils:rune_damage_player',
                'eidolon:crucible',
                'eidolon:wooden_brewing_stand',
                'tanknull:dock',
                'dankstorage:dock',
                'engineersdecor:factory_placer',
                'eidolon:worktable',
                'mekanism:osmium_compressor',
                'mekanism:ultimate_compressing_factory',
                'mekanism:elite_compressing_factory',
                'mekanism:advanced_compressing_factory',
                'mekanism:basic_compressing_factory'
            ],
            text: [disabledInExpert]
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
        },
        {
            items: ['kubejs:medium_machinery_schematics'],
            text: [
                Text.of(`Unlocks the ability to form the following structures:`).blue(),
                Text.of(`- Automated Engineer's Workbench`).aqua(),
                Text.of(`- Diesel Generator`).aqua(),
                Text.of(`- Excavator`).aqua(),
                Text.of(`- Fermenter`).aqua(),
                Text.of(`- Metal Press`).aqua(),
                Text.of(`- Mixer`).aqua(),
                Text.of(`- Pumpjack`).aqua(),
                Text.of(`- Refinery`).aqua(),
                Text.of(`- Sawmill`).aqua(),
                Text.of(`- Squeezer`).aqua()
            ]
        },
        {
            items: ['kubejs:heavy_machinery_schematics'],
            text: [
                Text.of(`Unlocks the ability to form the following structures:`).blue(),
                Text.of(`- Arc Furnace`).aqua(),
                Text.of(`- Assembler`).aqua(),
                Text.of(`- Coker Unit`).aqua(),
                Text.of(`- Crusher`).aqua(),
                Text.of(`- Distillation Tower`).aqua(),
                Text.of(`- Lightning Rod`).aqua(),
                Text.of(`- Sulfur Recovery Unit`).aqua()
            ]
        },
        {
            items: [/kubejs:diy/],
            text: [Text.of(`Some Assembly Required.`).green(), Text.of(`Batteries Not Included.`).darkRed()]
        }
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });
});
