// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')
onEvent('item.registry', event => {

  // Texture for this item goes in kubejs/assets/kubejs/textures/item/my_part.png

  event.create('incomplete_redstone_flux_coil').type('create:sequenced_assembly').displayName('Incomplete Redstone Flux Coil')

})
onEvent('recipes', event => {
	event.remove({output: 'quark:beetroot_crate'});
	event.remove({output: 'quark:carrot_crate'});
	event.remove({output: 'quark:potato_crate'});
	
	event.remove({id: 'tconstruct:smeltery/seared/grout'});
	event.remove({id: 'tconstruct:smeltery/seared/grout_multiple'});
	event.remove({id: 'tconstruct:smeltery/scorched/nether_grout'});
	event.remove({id: 'tconstruct:smeltery/seared/seared_brick_kiln'});
	event.remove({id: 'tconstruct:smeltery/seared/seared_brick'});
	event.remove({id: 'tconstruct:smeltery/scorched/scorched_brick_kiln'});
	event.remove({id: 'tconstruct:smeltery/scorched/scorched_brick'});
	event.remove({id: 'thermal:fire_charge/bronze_ingot_4'});
	event.remove({id: 'thermal:fire_charge/electrum_ingot_2'});
	event.remove({id: 'thermal:fire_charge/invar_ingot_3'});
	event.remove({id: 'thermal:fire_charge/constantan_ingot_2'});
	event.remove({id: 'thermal:fire_charge/signalum_ingot_4'});
	event.remove({id: 'thermal:fire_charge/lumium_ingot_4'});
	event.remove({id: 'thermal:fire_charge/enderium_ingot_2'});
	event.remove({id: 'thermal:bronze_dust_4'});
	event.remove({id: 'thermal:electrum_dust_2'});
	event.remove({id: 'thermal:invar_dust_3'});
	event.remove({id: 'thermal:constantan_dust_2'});
	event.remove({id: 'thermal:signalum_dust_4'});
	event.remove({id: 'thermal:lumium_dust_4'});
	event.remove({id: 'thermal:enderium_dust_2'});
	event.remove({id: 'thermal:rf_coil'});
	event.remove({id: 'thermal:redstone_servo'});
	event.remove({id: 'thermal:machine_frame'});
	
	event.recipes.createMixing('2x tconstruct:grout', [
	'minecraft:clay_ball',
	'minecraft:gravel',
	'minecraft:sand'
	]).heated();

	event.recipes.createMixing('2x tconstruct:nether_grout', [
	'minecraft:gravel',
	'#minecraft:soul_fire_base_blocks',
	Fluid.of('tconstruct:magma', 250)
	]).heated();
	
	event.recipes.createMixing(Fluid.of('tconstruct:seared_stone', 100), [
	'tconstruct:grout'
	]).superheated();

	event.recipes.createMixing(Fluid.of('tconstruct:scorched_stone', 100), [
	'tconstruct:nether_grout'
	]).superheated();	

	event.recipes.createCompacting('tconstruct:seared_brick', [
		Fluid.of('tconstruct:seared_stone', 100)
	]);

	event.recipes.createCompacting('tconstruct:scorched_brick', [
		Fluid.of('tconstruct:scorched_stone', 100)
	]);

	event.shaped('thermal:rf_coil', [
    		'  R',
    		' E ',
    		'R  '
  		], {R: 'minecraft:redstone', E: 'thermal:electrum_ingot'});

	event.shaped('thermal:redstone_servo', [
    		'R R',
    		' I ',
    		'R R'
  		], {R: 'minecraft:redstone', I: 'thermal:invar_plate'});

	event.shaped('thermal:machine_frame', [
    		'RGR',
    		'GIG',
    		'RGR'
  		], {R: 'minecraft:iron_ingot', I: 'thermal:invar_gear', G: '#forge:glass'});

	
	

})
onEvent('tags.items', event => {
    event.remove('forge:ingots/copper', 'create:copper_ingot');
    event.remove('forge:plates/copper', 'create:copper_sheet');
    event.remove('forge:nuggets/copper', 'create:copper_nugget');
    event.remove('forge:ores/copper', 'create:copper_ore');
    

    event.remove('forge:ingots/copper', 'tconstruct:copper_ingot');
    event.remove('forge:nuggets/copper', 'tconstruct:copper_nugget');
    event.remove('forge:ores/copper', 'tconstruct:copper_ore');

})




