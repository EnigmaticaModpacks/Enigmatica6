onEvent('fluid.tags', (event) => {
    const whitelisted_fluid_ids = draining_whitelist.map(fluid => fluid.id);

    event.get('create:no_infinite_draining').add(/.*/).remove(whitelisted_fluid_ids);
    event.get('create:allow_infinite_draining').add(whitelisted_fluid_ids);
});
