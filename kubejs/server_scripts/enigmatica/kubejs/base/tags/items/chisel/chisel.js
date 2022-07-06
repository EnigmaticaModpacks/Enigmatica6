onEvent('item.tags', (event) => {
    const chiselNamespace = 'chisel';
    event.add(`${chiselNamespace}:glowstone`, ['#chipped:glowstone']);

    woodVariantsToConstruct
        .filter((woodVariant) => woodVariant.split(':')[0] === 'minecraft')
        .forEach((woodVariant) => {
            let plankType = woodVariant.split(':')[1];
            event.add(`${chiselNamespace}:planks/${plankType}`, [`#${chiselNamespace}:${plankType}`]);
        });
});
