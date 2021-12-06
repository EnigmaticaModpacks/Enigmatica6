onEvent('item.tags', (event) => {
    const small_meats = [
            'atum:quail',
            'farmersdelight:mutton_chops',
            'simplefarming:raw_chicken_wings',
            'farmersdelight:chicken_cuts',
            'farmersdelight:bacon',
            'quark:frog_leg',
            'undergarden:raw_gloomper_leg'
        ],
        medium_meats = ['environmental:duck', 'minecraft:chicken', 'minecraft:rabbit'],
        large_meats = [
            'undergarden:raw_dweller_meat',
            'simplefarming:raw_horse_meat',
            'atum:camel',
            'environmental:venison',
            'alexsmobs:kangaroo_meat',
            'minecraft:beef',
            'minecraft:mutton',
            'minecraft:porkchop',
            'alexsmobs:moose_ribs'
        ];

    event.get('enigmatica:meats').add(small_meats).add(medium_meats).add(large_meats);

    event.get('enigmatica:meats/small').add(small_meats);
    event.get('enigmatica:meats/medium').add(medium_meats);
    event.get('enigmatica:meats/large').add(large_meats);
});
