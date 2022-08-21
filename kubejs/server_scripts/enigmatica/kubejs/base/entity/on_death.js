{
    const bee_map = {};
    bees.forEach((bee) => {
        bee_map[`resourcefulbees:${bee}_bee`] = `kubejs:${bee}_larva`;
    });

    onEvent('entity.death', (event) => {
        // console.log(event); // dev.latvian.kubejs.entity.LivingEntityDeathEventJS@372ec6ba [dev.latvian.kubejs.entity.LivingEntityDeathEventJS]
        // console.log(event.entity); // Clay Bee-9f197ad6-af90-4f2e-a58d-1fbec1ceb1fc
        // console.log(event.entity.type); // resourcefulbees:clay_bee
        // console.log(event.entity.name); // Clay Bee

        if (bee_map[event.entity.type]) {
            // https://discord.com/channels/303440391124942858/993995629577633893/994009200034324600
            const larva = event.entity.world.createEntity('item');
            larva.item = bee_map[event.entity.type];
            larva.setPosition(event.entity.x, event.entity.y, event.entity.z);

            // https://discord.com/channels/303440391124942858/977886448109879307/977886759817990154
            let heading = 360 * Math.random();
            let xspeed = 0.1 * Math.random() * Math.sin(heading);
            let zspeed = 0.1 * Math.random() * Math.cos(heading);
            let yspeed = 0.2 * Math.random() + 0.2 * Math.random();
            larva.addMotion(xspeed, yspeed, zspeed);

            return larva.spawn();
        }
    });
}
