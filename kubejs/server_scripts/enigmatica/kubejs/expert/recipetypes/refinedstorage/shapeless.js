onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/refinedstorage/shapeless/';
    const recipes = [
        {
            output: 'refinedstorage:16k_storage_part',
            inputs: ['refinedstorage:1k_storage_part'],
            id: `${id_prefix}1k_to_16k_conversion`
        },
        {
            output: 'refinedstorage:64k_storage_part',
            inputs: ['refinedstorage:4k_storage_part'],
            id: `${id_prefix}4k_to_64k_conversion`
        },
        {
            output: 'refinedstorage:1024k_fluid_storage_part',
            inputs: ['refinedstorage:64k_fluid_storage_part'],
            id: `${id_prefix}64k_fluid_to_1024k_fluid_conversion`
        },
        {
            output: 'refinedstorage:4096k_fluid_storage_part',
            inputs: ['refinedstorage:256k_fluid_storage_part'],
            id: `${id_prefix}256k_fluid_to_4096k_fluid_conversion`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
