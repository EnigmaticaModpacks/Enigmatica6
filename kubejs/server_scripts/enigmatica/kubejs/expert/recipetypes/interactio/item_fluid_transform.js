events.listen('recipes', (event) => {
    if (!global.isExpertMode) {
        return;
    }
});
