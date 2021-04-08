// This file created by calvss 2021-04-02
// Released under MIT License
// Allows smelting of rusted iron back into regular iron

events.listen('recipes', function (event) {
	event.smelting('minecraft:iron_ingot', 'dustrial_decor:rusty_iron_ingot');
	event.smelting('minecraft:iron_ingot', 'dustrial_decor:rusty_iron_nugget');
	
	event.blasting('minecraft:iron_ingot', 'dustrial_decor:rusty_iron_ingot');
	event.blasting('minecraft:iron_ingot', 'dustrial_decor:rusty_iron_nugget');
});