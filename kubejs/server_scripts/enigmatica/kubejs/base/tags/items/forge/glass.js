onEvent('item.tags', (event) => {
    colors.forEach((color) => {
        event
            .get(`forge:glass/${color}`)
            .add([
                `connectedglass:borderless_glass_${color}`,
                `connectedglass:clear_glass_${color}`,
                `connectedglass:scratched_glass_${color}`,
                `quark:${color}_framed_glass`
            ]);

        event.get('forge:glass').remove([`#chipped:${color}_stained_glass_pane`]);
    });
});
