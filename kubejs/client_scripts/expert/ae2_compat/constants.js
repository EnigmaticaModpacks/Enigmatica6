//priority: 1001

const isAE2Loaded = Platform.getMods().containsKey("appliedenergistics2");

const itemsToHideAE = [
    'appliedenergistics2:ender_dust', 
    'appliedenergistics2:flour', 
    'appliedenergistics2:gold_dust', 
    'appliedenergistics2:iron_dust', 
    'appliedenergistics2:nether_quartz_dust', 
    'appliedenergistics2:fluix_dust', 
    'appliedenergistics2:certus_quartz_dust', 
    
    'appliedenergistics2:fluix_crystal',
    'appliedenergistics2:charged_certus_quartz_crystal',
    'appliedenergistics2:certus_quartz_crystal', 
    'appliedenergistics2:purified_certus_quartz_crystal', 
    'appliedenergistics2:purified_nether_quartz_crystal', 
    'appliedenergistics2:purified_fluix_crystal',     

    'appliedenergistics2:quartz_ore',
    'appliedenergistics2:charged_quartz_ore',

    'appliedenergistics2:vibration_chamber',
    'appliedenergistics2:quartz_growth_accelerator',
    'appliedenergistics2:inscriber',
    'appliedenergistics2:crank',
    'appliedenergistics2:grindstone',

    'appliedenergistics2:printed_calculation_processor',
    'appliedenergistics2:printed_engineering_processor',
    'appliedenergistics2:printed_logic_processor',
    'appliedenergistics2:printed_silicon',
    'appliedenergistics2:logic_processor',
    'appliedenergistics2:calculation_processor',
    'appliedenergistics2:engineering_processor',
    'appliedenergistics2:silicon',

    'appliedenergistics2:calculation_processor_press',
    'appliedenergistics2:engineering_processor_press',
    'appliedenergistics2:logic_processor_press',
    'appliedenergistics2:silicon_press',

    'appliedenergistics2:1k_cell_component', 
    'appliedenergistics2:4k_cell_component', 
    'appliedenergistics2:1k_fluid_cell_component', 
    'appliedenergistics2:4k_fluid_cell_component'
];
