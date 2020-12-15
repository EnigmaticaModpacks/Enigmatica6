//priority: 1000

const air = 'minecraft:air';
const beamRecipes = [
    { output: 'decorative_blocks:hellbark_beam', input: 'biomesoplenty:hellbark_logs' },
    { output: 'decorative_blocks:jungle_beam', input: 'minecraft:jungle_logs' },
    { output: 'decorative_blocks:birch_beam', input: 'minecraft:birch_logs' },
    { output: 'decorative_blocks:umbran_beam', input: 'biomesoplenty:umbran_logs' },
    { output: 'decorative_blocks:jacaranda_beam', input: 'biomesoplenty:jacaranda_logs' },
    { output: 'decorative_blocks:magic_beam', input: 'biomesoplenty:magic_logs' },
    { output: 'decorative_blocks:palm_beam', input: 'biomesoplenty:palm_logs' },
    { output: 'decorative_blocks:mahogany_beam', input: 'biomesoplenty:mahogany_logs' },
    { output: 'decorative_blocks:willow_beam', input: 'biomesoplenty:willow_logs' },
    { output: 'decorative_blocks:acacia_beam', input: 'minecraft:acacia_logs' },
    { output: 'decorative_blocks:cherry_beam', input: 'biomesoplenty:cherry_logs' },
    { output: 'decorative_blocks:fir_beam', input: 'biomesoplenty:fir_logs' },
    { output: 'decorative_blocks:dark_oak_beam', input: 'minecraft:dark_oak_logs' },
    { output: 'decorative_blocks:oak_beam', input: 'minecraft:oak_logs' },
    { output: 'decorative_blocks:redwood_beam', input: 'biomesoplenty:redwood_logs' },
    { output: 'decorative_blocks:dead_beam', input: 'biomesoplenty:dead_logs' },
    { output: 'decorative_blocks:spruce_beam', input: 'minecraft:spruce_logs' },
    { output: 'decorative_blocks:crimson_beam', input: 'minecraft:crimson_stems' },
    { output: 'decorative_blocks:warped_beam', input: 'minecraft:warped_stems' }
];

const modPriorities = [
    'emendatusenigmatica',
    'minecraft',
    'immersiveengineering',
    'thermal',
    'mekanism',
    'jaopca',
    'kubejs',
    'pneumaticcraft',
    'tmechworks',
    'industrialforegoing',
    'botania',
    'quark',
    'pedestals',
    'refinedstorage',
    'mapperbase'
];

const colors = [
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black',
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray'
];

const typesToUnify = ['nugget', 'ingot', 'gem', 'storage_block', 'ore', 'dust', 'gear', 'plate', 'rod'];
const unificationBlacklist = [
    unificationBlacklistEntry('quartz', 'gem'),
    unificationBlacklistEntry('quartz', 'storage_block')
];

const vanillaWoodTypes = ['oak', 'birch', 'spruce', 'jungle', 'acacia', 'dark_oak'];
