events.listen('item.tags', function (event) {
    var irontags = ['', '_aluminum', '_lead', '_tin', '_copper', '_brass']; 
    
    irontags.forEach(function (tag) {
        event.remove('forge:ingots/iron' + tag, 'dustrial_decor:rusty_iron_ingot');
    });

    event.remove('forge:nuggets/iron', 'dustrial_decor:rusty_iron_nugget');
    event.remove('forge:nuggets/iron_copper', 'dustrial_decor:rusty_iron_nugget');

    //Script seems to remove the default forge tags too, max says it's a bug with kubejs' recursive removal. Temp fix is to just readd them manually (or leave them without it)
    event.get('forge:ingots').add('dustrial_decor:rusty_iron_ingot');
    event.get('forge:nuggets').add('dustrial_decor:rusty_iron_nugget');
});
