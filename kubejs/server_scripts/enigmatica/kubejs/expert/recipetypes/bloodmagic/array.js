onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/bloodmagic/array/';
    const recipes = [
        {
            input: '#forge:rods/copper',
            addedInput: '#forge:gems/fluorite',
            output: 'powah:charged_snowball',
            texture: 'bindinglightningarray',
            id: `${id_prefix}charged_snowball`
        },
        {
            input: 'architects_palette:algal_lamp',
            addedInput: '#forge:gems/aquamarine',
            output: 'minecraft:heart_of_the_sea',
            texture: 'watersigil',
            id: `${id_prefix}heart_of_the_sea`
        },
        {
            input: 'architects_palette:moonstone',
            addedInput: '#forge:ingots/silver',
            output: 'bloodmagic:arcaneashes',
            texture: 'moonarray',
            id: 'bloodmagic:array/night'
        },
        {
            input: 'architects_palette:sunstone',
            addedInput: '#forge:ingots/sunmetal',
            output: 'bloodmagic:arcaneashes',
            texture: 'sunarray',
            id: 'bloodmagic:array/day'
        },
        {
            input: 'ars_nouveau:ritual_scrying',
            addedInput: 'bloodmagic:blankslate',
            output: 'bloodmagic:divinationsigil',
            texture: 'divinationsigil',
            id: 'bloodmagic:array/divinationsigil'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .array(recipe.output, recipe.input, recipe.addedInput)
            .texture(`bloodmagic:textures/models/alchemyarrays/${recipe.texture}.png`)
            .id(recipe.id);
    });
});
