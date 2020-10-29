//Tiers array
var tiers = ['_starter', '_basic', '_hardened', '_blazing', '_nitoic', '_spirited', '_nitro'];

//Blocks array
var blocks = ['energy_cell', 'ender_cell', 'energy_cable', 'ender_gate', 'energizing_rod', 'furnator', 'magmator', 'thermo_generator', 'solar_panel', 'reactor', 'player_transmitter', 'energy_hopper', 'energy_discharger', 'battery'];

events.listen('item.tags', function (event) {
    tiers.forEach(
        function(tier) { 
            blocks.forEach(
                function(block) {
                    event.get('powah:' + block).add('powah:' + block + tier) 
                }
            );
        }
    );
});