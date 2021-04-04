events.listen('item.tags', (event) => {
    var simple_botany_pots = ['botanypots:botany_pot'];
    colors.forEach((color) => {
        simple_botany_pots.push(`botanypots:${color}_botany_pot`);
    });

    event.get('botanypots:simple_botany_pots').add(simple_botany_pots);
});
