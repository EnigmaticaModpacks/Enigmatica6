onEvent('item.tags', (event) => {
    colors.forEach((color) => {
        event.add(`forge:glass/${color}`, [
            `connectedglass:borderless_glass_${color}`,
            `connectedglass:clear_glass_${color}`,
            `connectedglass:scratched_glass_${color}`,
            `connectedglass:tinted_borderless_glass_${color}`,
            `quark:${color}_framed_glass`
        ]);
    });
});
