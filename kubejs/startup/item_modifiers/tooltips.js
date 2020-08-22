events.listen('client.item_tooltip', (event) => {
    switch (event.item.id) {
        case 'appliedenergistics2:quantum_entangled_singularity':
            event.add(
                'To create drop 1 Singularity and 1 Ender Dust (' +
                    text.red('From Applied Energistics') +
                    ') and cause an explosion within range of the items.'
            );
    }
});
