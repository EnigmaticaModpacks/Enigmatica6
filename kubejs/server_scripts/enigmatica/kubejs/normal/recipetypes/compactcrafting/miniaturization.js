// events.listen('recipes', (event) => {
//     //https://github.com/CompactMods/CompactCrafting/wiki/Recipe-Specification
//     //Also note, can't use Item.of because Count is caps sensitive (Name too)

//     const machineShapes = {
//         five_by_five: [
//             {
//                 type: 'compactcrafting:mixed',
//                 pattern: [
//                     ['A', 'A', 'A', 'A', 'A'],
//                     ['A', 'B', 'B', 'B', 'A'],
//                     ['A', 'B', 'C', 'B', 'A'],
//                     ['A', 'B', 'B', 'B', 'A'],
//                     ['A', 'A', 'A', 'A', 'A']
//                 ]
//             },
//             {
//                 type: 'compactcrafting:mixed',
//                 pattern: [
//                     ['A', 'B', 'B', 'B', 'A'],
//                     ['B', 'D', 'D', 'D', 'B'],
//                     ['B', 'D', 'D', 'D', 'B'],
//                     ['B', 'D', 'D', 'D', 'B'],
//                     ['A', 'B', 'B', 'B', 'A']
//                 ]
//             },
//             {
//                 type: 'compactcrafting:mixed',
//                 pattern: [
//                     ['A', 'B', 'C', 'B', 'A'],
//                     ['B', 'D', 'D', 'D', 'B'],
//                     ['C', 'D', 'E', 'D', 'C'],
//                     ['B', 'D', 'D', 'D', 'B'],
//                     ['A', 'B', 'C', 'B', 'A']
//                 ]
//             },
//             {
//                 type: 'compactcrafting:mixed',
//                 pattern: [
//                     ['A', 'B', 'B', 'B', 'A'],
//                     ['B', 'D', 'D', 'D', 'B'],
//                     ['B', 'D', 'D', 'D', 'B'],
//                     ['B', 'D', 'D', 'D', 'B'],
//                     ['A', 'B', 'B', 'B', 'A']
//                 ]
//             },
//             {
//                 type: 'compactcrafting:mixed',
//                 pattern: [
//                     ['A', 'A', 'A', 'A', 'A'],
//                     ['A', 'B', 'B', 'B', 'A'],
//                     ['A', 'B', 'C', 'B', 'A'],
//                     ['A', 'B', 'B', 'B', 'A'],
//                     ['A', 'A', 'A', 'A', 'A']
//                 ]
//             }
//         ],
//         seven_by_seven: [
//             {
//                 type: 'compactcrafting:mixed',
//                 pattern: [
//                     ['A', 'A', 'A', 'A', 'A', 'A', 'A'],
//                     ['A', 'B', 'B', 'B', 'B', 'B', 'A'],
//                     ['A', 'B', 'C', 'C', 'C', 'B', 'A'],
//                     ['A', 'B', 'C', 'B', 'C', 'B', 'A'],
//                     ['A', 'B', 'C', 'C', 'C', 'B', 'A'],
//                     ['A', 'B', 'B', 'B', 'B', 'B', 'A'],
//                     ['A', 'A', 'A', 'A', 'A', 'A', 'A']
//                 ]
//             },
//             {
//                 type: 'compactcrafting:mixed',
//                 pattern: [
//                     ['A', 'B', 'B', 'B', 'B', 'B', 'A'],
//                     ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
//                     ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
//                     ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
//                     ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
//                     ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
//                     ['A', 'B', 'B', 'B', 'B', 'B', 'A']
//                 ]
//             },
//             {
//                 type: 'compactcrafting:mixed',
//                 pattern: [
//                     ['A', 'B', 'C', 'C', 'C', 'B', 'A'],
//                     ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
//                     ['C', 'D', 'D', 'D', 'D', 'D', 'C'],
//                     ['C', 'D', 'D', 'D', 'D', 'D', 'C'],
//                     ['C', 'D', 'D', 'D', 'D', 'D', 'C'],
//                     ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
//                     ['A', 'B', 'C', 'C', 'C', 'B', 'A']
//                 ]
//             },
//             {
//                 type: 'compactcrafting:mixed',
//                 pattern: [
//                     ['A', 'B', 'C', 'B', 'C', 'B', 'A'],
//                     ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
//                     ['C', 'D', 'D', 'D', 'D', 'D', 'C'],
//                     ['B', 'D', 'D', 'E', 'D', 'D', 'B'],
//                     ['C', 'D', 'D', 'D', 'D', 'D', 'C'],
//                     ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
//                     ['A', 'B', 'C', 'B', 'C', 'B', 'A']
//                 ]
//             },
//             {
//                 type: 'compactcrafting:mixed',
//                 pattern: [
//                     ['A', 'B', 'C', 'C', 'C', 'B', 'A'],
//                     ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
//                     ['C', 'D', 'D', 'D', 'D', 'D', 'C'],
//                     ['C', 'D', 'D', 'D', 'D', 'D', 'C'],
//                     ['C', 'D', 'D', 'D', 'D', 'D', 'C'],
//                     ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
//                     ['A', 'B', 'C', 'C', 'C', 'B', 'A']
//                 ]
//             },
//             {
//                 type: 'compactcrafting:mixed',
//                 pattern: [
//                     ['A', 'B', 'B', 'B', 'B', 'B', 'A'],
//                     ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
//                     ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
//                     ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
//                     ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
//                     ['B', 'D', 'D', 'D', 'D', 'D', 'B'],
//                     ['A', 'B', 'B', 'B', 'B', 'B', 'A']
//                 ]
//             },
//             {
//                 type: 'compactcrafting:mixed',
//                 pattern: [
//                     ['A', 'A', 'A', 'A', 'A', 'A', 'A'],
//                     ['A', 'B', 'B', 'B', 'B', 'B', 'A'],
//                     ['A', 'B', 'C', 'C', 'C', 'B', 'A'],
//                     ['A', 'B', 'C', 'B', 'C', 'B', 'A'],
//                     ['A', 'B', 'C', 'C', 'C', 'B', 'A'],
//                     ['A', 'B', 'B', 'B', 'B', 'B', 'A'],
//                     ['A', 'A', 'A', 'A', 'A', 'A', 'A']
//                 ]
//             }
//         ]
//     };

//     const recipes = [
//         {
//             //Tiny
//             recipeSize: 5,
//             layers: machineShapes.five_by_five,
//             catalyst: {
//                 id: 'fluxnetworks:flux_dust',
//                 Count: 1
//             },
//             components: {
//                 A: {
//                     type: 'compactcrafting:block',
//                     block: 'immersiveengineering:sheetmetal_colored_black'
//                 },
//                 B: {
//                     type: 'compactcrafting:block',
//                     block: 'minecraft:brown_concrete'
//                 },
//                 C: {
//                     type: 'compactcrafting:block',
//                     block: 'immersiveengineering:insulating_glass'
//                 },
//                 D: {
//                     type: 'compactcrafting:block',
//                     block: 'compactmachines:wall'
//                 },
//                 E: {
//                     type: 'compactcrafting:block',
//                     block: 'emendatusenigmatica:copper_block'
//                 }
//             },
//             outputs: [
//                 {
//                     id: 'compactmachines:machine_tiny',
//                     Count: 1
//                 }
//             ]
//         },
//         //Small
//         {
//             recipeSize: 5,
//             layers: machineShapes.five_by_five,
//             catalyst: {
//                 id: 'fluxnetworks:flux_dust',
//                 Count: 1
//             },
//             components: {
//                 A: {
//                     type: 'compactcrafting:block',
//                     block: 'immersiveengineering:sheetmetal_colored_black'
//                 },
//                 B: {
//                     type: 'compactcrafting:block',
//                     block: 'minecraft:white_concrete'
//                 },
//                 C: {
//                     type: 'compactcrafting:block',
//                     block: 'immersiveengineering:insulating_glass'
//                 },
//                 D: {
//                     type: 'compactcrafting:block',
//                     block: 'compactmachines:wall'
//                 },
//                 E: {
//                     type: 'compactcrafting:block',
//                     block: 'emendatusenigmatica:invar_block'
//                 }
//             },
//             outputs: [
//                 {
//                     id: 'compactmachines:machine_small',
//                     Count: 1
//                 }
//             ]
//         },
//         //Normal
//         {
//             recipeSize: 5,
//             layers: machineShapes.five_by_five,
//             catalyst: {
//                 id: 'fluxnetworks:flux_dust',
//                 Count: 1
//             },
//             components: {
//                 A: {
//                     type: 'compactcrafting:block',
//                     block: 'immersiveengineering:sheetmetal_colored_black'
//                 },
//                 B: {
//                     type: 'compactcrafting:block',
//                     block: 'minecraft:yellow_concrete'
//                 },
//                 C: {
//                     type: 'compactcrafting:block',
//                     block: 'immersiveengineering:insulating_glass'
//                 },
//                 D: {
//                     type: 'compactcrafting:block',
//                     block: 'compactmachines:wall'
//                 },
//                 E: {
//                     type: 'compactcrafting:block',
//                     block: 'emendatusenigmatica:electrum_block'
//                 }
//             },
//             outputs: [
//                 {
//                     id: 'compactmachines:machine_normal',
//                     Count: 1
//                 }
//             ]
//         },
//         //Large
//         {
//             recipeSize: 7,
//             layers: machineShapes.seven_by_seven,
//             catalyst: {
//                 id: 'fluxnetworks:flux_dust',
//                 Count: 1
//             },
//             components: {
//                 A: {
//                     type: 'compactcrafting:block',
//                     block: 'immersiveengineering:sheetmetal_steel'
//                 },
//                 B: {
//                     type: 'compactcrafting:block',
//                     block: 'minecraft:black_concrete'
//                 },
//                 C: {
//                     type: 'compactcrafting:block',
//                     block: 'immersiveengineering:insulating_glass'
//                 },
//                 D: {
//                     type: 'compactcrafting:block',
//                     block: 'compactmachines:wall'
//                 },
//                 E: {
//                     type: 'compactcrafting:block',
//                     block: 'emendatusenigmatica:signalum_block'
//                 }
//             },
//             outputs: [
//                 {
//                     id: 'compactmachines:machine_large',
//                     Count: 1
//                 }
//             ]
//         },
//         //Giant
//         {
//             recipeSize: 7,
//             layers: machineShapes.seven_by_seven,
//             catalyst: {
//                 id: 'fluxnetworks:flux_dust',
//                 Count: 1
//             },
//             components: {
//                 A: {
//                     type: 'compactcrafting:block',
//                     block: 'immersiveengineering:sheetmetal_steel'
//                 },
//                 B: {
//                     type: 'compactcrafting:block',
//                     block: 'minecraft:cyan_concrete'
//                 },
//                 C: {
//                     type: 'compactcrafting:block',
//                     block: 'immersiveengineering:insulating_glass'
//                 },
//                 D: {
//                     type: 'compactcrafting:block',
//                     block: 'compactmachines:wall'
//                 },
//                 E: {
//                     type: 'compactcrafting:block',
//                     block: 'emendatusenigmatica:lumium_block'
//                 }
//             },
//             outputs: [
//                 {
//                     id: 'compactmachines:machine_giant',
//                     Count: 1
//                 }
//             ]
//         },
//         //Max
//         {
//             recipeSize: 7,
//             layers: machineShapes.seven_by_seven,
//             catalyst: {
//                 id: 'fluxnetworks:flux_dust',
//                 Count: 1
//             },
//             components: {
//                 A: {
//                     type: 'compactcrafting:block',
//                     block: 'immersiveengineering:sheetmetal_steel'
//                 },
//                 B: {
//                     type: 'compactcrafting:block',
//                     block: 'minecraft:light_blue_terracotta'
//                 },
//                 C: {
//                     type: 'compactcrafting:block',
//                     block: 'immersiveengineering:insulating_glass'
//                 },
//                 D: {
//                     type: 'compactcrafting:block',
//                     block: 'compactmachines:wall'
//                 },
//                 E: {
//                     type: 'compactcrafting:block',
//                     block: 'emendatusenigmatica:enderium_block'
//                 }
//             },
//             outputs: [
//                 {
//                     id: 'compactmachines:machine_maximum',
//                     Count: 1
//                 }
//             ]
//         }
//     ];

//     recipes.forEach((recipe) => {
//         event.custom({
//             type: 'compactcrafting:miniaturization',
//             version: 1,
//             recipeSize: recipe.recipeSize,
//             layers: recipe.layers,
//             catalyst: recipe.catalyst,
//             components: recipe.components,
//             outputs: recipe.outputs
//         });
//     });
// });
