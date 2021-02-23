var sugarFoods = [
    'resourcefulbees:oreo_cookie',
    'betterendforge:sweet_berry_jelly',
    'betterendforge:shadow_berry_jelly',
    'meetyourfight:aether_glazed_cupcake'
];

events.listen('item.tags', (event) => {
    sugarFoods.forEach((food) => {
        event.get('diet:sugars').add(food);
    });

    combVariants.forEach((comb) => {
        event.get('diet:sugars').add('resourcefulbees:' + comb + '_honeycomb');
    });

    honeyVarieties.forEach((honey) => {
        event.get('diet:sugars').add(honey + '_bottle');
    });
});
