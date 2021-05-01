// events.listen('recipes', (event) => {
//     if (global.isExpertMode == false) {
//         return;
//     }
//     const recipes = [
//         {
//             output: Item.of('tiab:timeinabottle'),
//             inputs: [Item.of('eidolon:soul_shard'), Item.of('create:cuckoo_clock')],
//             fluid: {
//                 type: 'pneumaticcraft:fluid',
//                 fluid: 'cofh_core:potion',
//                 amount: 1000,
//                 nbt: {
//                     Potion: 'minecraft:long_swiftness'
//                 }
//             }
//         }
//     ];

//     recipes.forEach((recipe) => {
//         recipe.inputs.forEach((input) => {
//             event.recipes.create.filling(recipe.output, [input, recipe.fluid]);
//             event.recipes.thermal.bottler(recipe.output, [recipe.fluid, input]);
//         });
//     });
// });
