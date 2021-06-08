onEvent('fluid.tags', (event) => {
    honeyVarieties.forEach((honeyVariety) => {
        event.get(honeyVariety).add(honeyVariety);
    });
});
