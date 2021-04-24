events.listen('server.datapack.high_priority', function (event) {
    var tamingCriteria = {};
    tameableAnimals.forEach((entityType) => {
        tamingCriteria[entityType] = {
            trigger: 'minecraft:tame_animal',
            conditions: {
                entity: [
                    {
                        condition: 'minecraft:entity_properties',
                        predicate: {
                            type: entityType
                        },
                        entity: 'this'
                    }
                ]
            }
        };
    });
    event.addJson('enigmatica:advancements/husbandry/tame_all_animals.json', {
        parent: 'minecraft:husbandry/tame_an_animal',
        display: {
            icon: {
                item: 'farmersdelight:horse_feed'
            },
            title: {
                translate: 'advancements.enigmatica.husbandry.tame_all_animals.title'
            },
            description: {
                translate: 'advancements.enigmatica.husbandry.tame_all_animals.description'
            },
            frame: 'challenge',
            show_toast: true,
            announce_to_chat: true,
            hidden: false
        },
        criteria: tamingCriteria
    });

    var breedingCriteria = {};
    breedableAnimals.forEach((entityType) => {
        breedingCriteria[entityType] = {
            trigger: 'minecraft:bred_animals',
            conditions: {
                child: [
                    {
                        condition: 'minecraft:entity_properties',
                        predicate: {
                            type: entityType
                        },
                        entity: 'this'
                    }
                ]
            }
        };
    });
    eggLayingAnimals.forEach((entityType) => {
        breedingCriteria[entityType] = {
            trigger: 'minecraft:bred_animals',
            conditions: {
                parent: [
                    {
                        condition: 'minecraft:entity_properties',
                        predicate: {
                            type: entityType
                        },
                        entity: 'this'
                    }
                ],
                partner: [
                    {
                        condition: 'minecraft:entity_properties',
                        predicate: {
                            type: entityType
                        },
                        entity: 'this'
                    }
                ]
            }
        };
    });
    event.addJson('minecraft:advancements/husbandry/bred_all_animals.json', {
        parent: 'minecraft:husbandry/breed_an_animal',
        display: {
            icon: {
                item: 'minecraft:golden_carrot'
            },
            title: {
                translate: 'advancements.husbandry.breed_all_animals.title'
            },
            description: {
                translate: 'advancements.husbandry.breed_all_animals.description'
            },
            frame: 'challenge',
            show_toast: true,
            announce_to_chat: true,
            hidden: false
        },
        rewards: {
            experience: 100
        },
        criteria: breedingCriteria
    });
});
