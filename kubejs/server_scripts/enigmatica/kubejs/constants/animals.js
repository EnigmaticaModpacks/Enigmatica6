//priority: 1000

// all animals that can be tamed, used for zoology challenge
// raccoons and crows aren't in this list as they don't trigger the relevant advancement trigger when tamed
const tameableAnimals = [
    'minecraft:wolf',
    'minecraft:cat',
    'minecraft:parrot',
    'minecraft:horse',
    'minecraft:donkey',
    'minecraft:mule',
    'minecraft:llama',
    'alexsmobs:capuchin_monkey',
    'alexsmobs:elephant',
    'alexsmobs:gorilla',
    'alexsmobs:grizzly_bear',
    'alexsmobs:kangaroo',
    'alexsmobs:komodo_dragon',
    'alexsmobs:mantis_shrimp',
    'alexsmobs:raccoon',
    'alexsmobs:warped_toad',
    'quark:foxhound'
];

// all animals that can be bred (except egg laying animals)
// all animals in this list are added to the 'Two by Two' advancement, which is used for conservationism challenge
// autumnity already adds snails and turkeys to the advancement, these aren't needed here
const breedableAnimals = [
    'minecraft:horse',
    'minecraft:donkey',
    'minecraft:mule',
    'minecraft:sheep',
    'minecraft:cow',
    'minecraft:mooshroom',
    'minecraft:pig',
    'minecraft:chicken',
    'minecraft:wolf',
    'minecraft:ocelot',
    'minecraft:rabbit',
    'minecraft:llama',
    'minecraft:cat',
    'minecraft:panda',
    'minecraft:fox',
    'minecraft:bee',
    'minecraft:hoglin',
    'minecraft:strider',
    'alexsmobs:fly',
    'alexsmobs:hummingbird',
    'alexsmobs:endergrade',
    'alexsmobs:capuchin_monkey',
    'alexsmobs:warped_toad',
    'alexsmobs:moose',
    'alexsmobs:raccoon',
    'alexsmobs:seal',
    'alexsmobs:cockroach',
    'alexsmobs:elephant',
    'alexsmobs:snow_leopard',
    'alexsmobs:alligator_snapping_turtle',
    'alexsmobs:mungus',
    'alexsmobs:mantis_shrimp',
    'alexsmobs:emu',
    'alexsmobs:platypus',
    'alexsmobs:tasmanian_devil',
    'alexsmobs:kangaroo',
    'quark:crab',
    'quark:foxhound',
    'quark:frog',
    'undergarden:gloomper',
    'undergarden:dweller',
    'upgrade_aquatic:goose'
];

// animals that can be bred, but don't immediately spawn a child after breeding
const eggLayingAnimals = ['minecraft:turtle', 'alexsmobs:crocodile'];
