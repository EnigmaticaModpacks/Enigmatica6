var vegetableFoods = [
    'pneumaticcraft:chips',
    'pneumaticcraft:cod_n_chips',
    'undergarden:droopvine_item',
    'undergarden:underbeans',
    'undergarden:gloomgourd_pie',
    'undergarden:bloody_stew',
    'undergarden:inky_stew',
    'undergarden:indigo_stew',
    'undergarden:veiled_stew',
    'byg:soul_shroom',
    'byg:death_cap',
    'byg:green_mushroom',
    'byg:weeping_milkcap',
    'byg:wood_blewit',
    'byg:black_puff',
    'meetyourfight:marshy_delight'
];

events.listen('item.tags', (event) => {
    vegetableFoods.forEach((food) => {
        event.get('diet:vegetables').add(food);
    });
});
