onEvent('item.tags', (event) => {
    atum_aspects.forEach((atum_aspect) => {
        event.get('atum:artifacts').add(`/atum:${atum_aspect}.*_/`);
        event.get(`atum:artifacts/${atum_aspect}`).add(`/atum:${atum_aspect}.*_/`);

        event.get('atum:artifacts').add(`/atum:.*_${atum_aspect}/`);
        event.get(`atum:artifacts/${atum_aspect}`).add(`/atum:.*_${atum_aspect}/`);

        event.get('atum:artifacts').remove(`atum:${atum_aspect}_godforged_block`);
        event.get('atum:artifacts').remove(`atum:torch_of_${atum_aspect}`);
        event.get('atum:artifacts').remove(`atum:lantern_of_${atum_aspect}`);
        event.get('atum:artifacts').remove(`atum:${atum_aspect}_godshard`);

        event.get(`atum:artifacts/${atum_aspect}`).remove(`atum:${atum_aspect}_godforged_block`);
        event.get(`atum:artifacts/${atum_aspect}`).remove(`atum:torch_of_${atum_aspect}`);
        event.get(`atum:artifacts/${atum_aspect}`).remove(`atum:lantern_of_${atum_aspect}`);
        event.get(`atum:artifacts/${atum_aspect}`).remove(`atum:${atum_aspect}_godshard`);
    });

    event.get('atum:artifacts').remove('atum:anputs_fingers_spores');
    event.get('atum:artifacts/anput').remove('atum:anputs_fingers_spores');

    event.get('atum:artifacts').remove('atum:khnumite_raw');
    event.get('atum:artifacts/ra').remove('atum:khnumite_raw');

    event.get('atum:artifacts').remove('atum:desert_rabbit_spawn_egg');
    event.get('atum:artifacts/ra').remove('atum:desert_rabbit_spawn_egg');
});
