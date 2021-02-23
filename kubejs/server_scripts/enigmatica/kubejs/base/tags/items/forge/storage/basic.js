events.listen('item.tags', (event) => {
    var items = [
        'aquaculture:neptunes_bounty',
        'cookingforblockheads:corner',
        'cookingforblockheads:counter',
        'cookingforblockheads:fruit_basket',
        'cookingforblockheads:hanging_corner',
        'cookingforblockheads:spice_rack',
        'cookingforblockheads:tool_rack',
        'engineersdecor:labeled_crate',
        'farmersdelight:basket',
        'immersiveengineering:crate',
        'immersiveengineering:minecart_reinforcedcrate',
        'immersiveengineering:minecart_woodencrate',
        'immersiveengineering:reinforced_crate',
        'minecraft:barrel',
        'minecraft:chest_minecart',
        'minecraft:dispenser',
        'minecraft:dropper',
        'resourcefulbees:apiary_storage',
        'rftoolsstorage:modular_storage',
        'tetra:rack'
    ];
    var exceptions = [
        'aquaculture:treasure_chest',
        'naturesaura:sky_chest',
        'naturesaura:infused_iron_chest',
        'immersiveengineering:armor_steel_chest',
        'immersiveengineering:armor_faraday_chest'
    ];

    var tags = ['forge:storage', 'forge:storage/basic'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/chest$/)
            .add(/betterendforge:\w+barrel/)
            .add(/bedside_table/)
            .add(/buildersaddition:bookshelf/)
            .add(/buildersaddition:shelf/)
            .add(/buildersaddition:\w+counter/)
            .add(/cabinet/)
            .add(/cupboard/)
            .add(/shulker_box/)
            .add(/_pantry/)
            .add(/embellishcraft:\w+_crate/)
            .add(/rftoolsstorage:storage_module/)
            .remove(exceptions);
    });
});
