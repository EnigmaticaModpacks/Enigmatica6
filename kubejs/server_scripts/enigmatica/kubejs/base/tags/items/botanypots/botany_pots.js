onEvent('item.tags', (event) => {
    event.get('botanypots:hopper_botany_pots').removeAll();

    let simple_pots = ['botanypots:botany_pot'];
    let hopper_pots = ['botanypots:hopper_botany_pot'];

    colors.forEach((color) => {
        simple_pots.push(`botanypots:${color}_botany_pot`);
        hopper_pots.push(`botanypots:hopper_${color}_botany_pot`);
    });

    event.get('botanypots:botany_pots/simple').add(simple_pots);
    event.get('botanypots:botany_pots/hopper').add(hopper_pots);
    event.get('botanypots:botany_pots').removeAll().add(simple_pots).add(hopper_pots);
});
