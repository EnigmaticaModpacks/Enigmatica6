events.listen('item.tags', (event) => {
    event.add('diet:proteins', [
        'pneumaticcraft:cod_n_chips',
        'pneumaticcraft:salmon_tempura',
        'betterendforge:end_fish_raw',
        'betterendforge:end_fish_cooked',
        'undergarden:raw_dweller_meat',
        'undergarden:dweller_steak',
        'undergarden:raw_gwibling',
        'undergarden:cooked_gwibling',
        'undergarden:raw_gloomper_leg',
        'undergarden:gloomper_leg',
        'meetyourfight:marshy_delight'
    ]);
});
