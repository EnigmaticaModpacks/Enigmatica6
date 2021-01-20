events.listen('item.tags', (event) => {
    event.add('forge:fence_gates', /byg:\w+_fence_gate/);
    event.add('forge:fence_gates/wooden', /byg:\w+_fence_gate/);
});
