events.listen('fluid.tags', function (event) {
    honeyVarieties.forEach((honeyVariety) => {
        event.get(honeyVariety).add(honeyVariety);
    });
});
