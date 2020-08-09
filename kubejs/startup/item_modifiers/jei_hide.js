events.listen('jei.hide.items', (event) => {
    console.log('Hiding items in JEI');
    event.hide('/appliedenergistics2:facade/');
});
