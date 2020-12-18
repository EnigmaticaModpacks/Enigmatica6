// events.listen('item.registry', function (event) {
//     for (var i = 0; i < materials.length; i++) {
//         for (var j = 0; j < materials[i].itemParts.length; j++) {
//             var materialName = materials[i].name;
//             var itemPart = materials[i].itemParts[j];
//             var registryName = materialName + '_' + itemPart;

//             event
//                 .create(registryName)
//                 .group('KubeJS')
//                 .color(0, materials[i].color)
//                 .texture('kubejs:item/' + itemPart)
//                 .add();
//         }
//     }
// });

events.listen('item.registry', function (event) {
    event.create('rare_lootbox').group('KubeJS').texture('kubejs:item/rare_lootbox').add();
    event.create('epic_lootbox').group('KubeJS').texture('kubejs:item/epic_lootbox').add();
    event.create('legendary_lootbox').group('KubeJS').texture('kubejs:item/legendary_lootbox').add();
    event.create('miners_delight').group('KubeJS').texture('kubejs:item/miners_delight').add();
    event.create('sorcerers_delight').group('KubeJS').texture('kubejs:item/sorcerers_delight').add();
    event.create('farmers_delight').group('KubeJS').texture('kubejs:item/farmers_delight').add();
    event.create('blacksmiths_delight').group('KubeJS').texture('kubejs:item/blacksmiths_delight').add();
    event.create('scavangers_delight').group('KubeJS').texture('kubejs:item/scavangers_delight').add();
    event.create('alchemists_delight').group('KubeJS').texture('kubejs:item/alchemists_delight').add();
});
