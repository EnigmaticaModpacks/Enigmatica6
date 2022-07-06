onEvent('item.tags', (event) => {
    event.add('forge:vegetables', ['#forge:crops/soy_bean', '#forge:crops/cucumber']);
    event.add('forge:vegetables/soybean', ['#forge:crops/soy_bean']);
    event.add('forge:vegetables/soy_bean', ['#forge:crops/soy_bean']);
    event.add('forge:vegetables/cucumber', ['#forge:crops/cucumber']);
});
