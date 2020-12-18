events.listen('item.tags', function (event) {
    var dies = ['immersiveengineering:mold_unpacking',
                'immersiveengineering:mold_packing_9',
                'immersiveengineering:mold_packing_4',
                'immersiveengineering:mold_wire',
                'immersiveengineering:mold_bullet_casing',
                'immersiveengineering:mold_rod',
                'immersiveengineering:mold_gear',
                'immersiveengineering:mold_plate' 
            ]

    event.get('thermal:crafting/dies').add(dies);
   

});
