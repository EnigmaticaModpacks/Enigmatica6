var grainFoods = [
  'pneumaticcraft:sourdough_bread',
  'pneumaticcraft:salmon_tempura',
  'resourcefulbees:oreo_cookie',
  'meetyourfight:aether_glazed_cupcake',
  'meetyourfight:velvet_fortune'
];

events.listen('item.tags', (event) => {
    grainFoods.forEach((food) => {
        event.get('diet:grains').add(food);
    });
});