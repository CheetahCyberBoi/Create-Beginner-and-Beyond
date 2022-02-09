// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')
// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true
onEvent('recipes', event => {


unwantedRecipes(event);
metalSheets(event);
computers(event);
fixMissingRecipes(event);

// Make computer-related recipes more expensive.
function computers(event) {
	// Make computers more expensive.
	event.remove({ output: "computercraft:computer_advanced" });
	event.shaped("computercraft:computer_advanced", [
		"BBB",
		"BCB",
		"B B"
	], {
		B: "create:brass_sheet",
		C: "computercraft:computer_normal"
	});
	event.shaped("computercraft:computer_advanced", [
		"BBB",
		"BMB",
		"BGB"
	], {
		B: "create:brass_sheet",
		G: "#forge:glass_panes",
		M: "create:precision_mechanism"
	});
	event.remove({ output: "computercraft:computer_command" });
	event.shaped("computercraft:computer_command", [
		"BBB",
		"BCB",
		"BGB"
	], {
		B: "create:brass_sheet",
		C: "minecraft:command_block",
		G: "#forge:glass_panes"
	});
	event.remove({ output: "computercraft:computer_normal" });
	event.shaped("computercraft:computer_normal", [
		"AIA",
		"IMI",
		"AGA"
	], {
		A: "create:andesite_alloy",
		I: "create:iron_sheet",
		G: "#forge:glass_panes",
		M: "create:precision_mechanism"
	});

	// Make peripherals more expensive.
	event.remove({ output: "computercraft:cable" });
	event.shaped("6x computercraft:cable", [
		" A ",
		"ARA",
		" A "
	], {
		A: "create:andesite_alloy",
		R: "minecraft:redstone"
	});
	event.remove({ output: "computercraft:disk_drive" });
	event.shaped("computercraft:disk_drive", [
		"AIA",
		"IRI",
		"ARA"
	], {
		A: "create:andesite_alloy",
		I: "create:iron_sheet",
		R: "minecraft:redstone"
	});
	event.remove({ output: "computercraft:monitor_advanced" });
	event.shaped("2x computercraft:monitor_advanced", [
		"BBB",
		"BGB",
		"BBB"
	], {
		B: "create:brass_sheet",
		G: "#forge:glass_panes"
	});
	event.remove({ output: "computercraft:monitor_normal" });
	event.shaped("2x computercraft:monitor_normal", [
		"AIA",
		"IGI",
		"AIA"
	], {
		A: "create:andesite_alloy",
		G: "#forge:glass_panes",
		I: "create:iron_sheet"
	});
	event.remove({ output: "computercraft:printer" });
	event.shaped("computercraft:printer", [
		"AIA",
		"IRI",
		"ADA"
	], {
		A: "create:andesite_alloy",
		D: "#forge:dyes",
		I: "create:iron_sheet",
		R: "minecraft:redstone"
	});
	event.remove({ output: "computercraft:speaker" });
	event.shaped("computercraft:speaker", [
		"AIA",
		"INI",
		"ARA"
	], {
		A: "create:andesite_alloy",
		I: "create:iron_sheet",
		N: "minecraft:note_block",
		R: "minecraft:redstone"
	});
	event.remove({ output: "computercraft:wired_modem" });
	event.shapeless("computercraft:wired_modem", ["computercraft:wired_modem_full"]);
	event.shaped("2x computercraft:wired_modem", [
		"AIA",
		"IRI",
		"AIA"
	], {
		A: "create:andesite_alloy",
		I: "create:iron_sheet",
		R: "minecraft:redstone"
	});
	event.remove({ output: "computercraft:wireless_modem_advanced" });
	event.shaped("computercraft:wireless_modem_advanced", [
		"BBB",
		"BEB",
		"BBB"
	], {
		B: "create:brass_sheet",
		E: "minecraft:ender_eye"
	});
	event.remove({ output: "computercraft:wireless_modem_normal" });
	event.shaped("computercraft:wireless_modem_normal", [
		"AIA",
		"IPI",
		"AIA"
	], {
		A: "create:andesite_alloy",
		I: "create:iron_sheet",
		P: "minecraft:ender_pearl"
	});

	// Make pocket computers more expensive.
	event.remove({ output: "computercraft:pocket_computer_advanced" });
	event.shaped("computercraft:pocket_computer_advanced", [
		"BBB",
		"BPB",
		"BGB"
	], {
		B: "create:brass_sheet",
		G: "#forge:glass_panes",
		P: "minecraft:golden_apple"
	});
	event.shaped("computercraft:pocket_computer_advanced", [
		"BBB",
		"BCB",
		"B B"
	], {
		B: "create:brass_sheet",
		C: "computercraft:pocket_computer_normal"
	});
	event.remove({ output: "computercraft:pocket_computer_normal" });
	event.shaped("computercraft:pocket_computer_normal", [
		"AIA",
		"IPI",
		"AGA"
	], {
		A: "create:andesite_alloy",
		I: "create:iron_sheet",
		G: "#forge:glass_panes",
		P: "minecraft:golden_apple"
	});

	// Make turtles more expensive.
	event.remove({ output: "computercraft:turtle_advanced" });
	event.shaped("computercraft:turtle_advanced", [
		"BBB",
		"BCB",
		" L "
	], {
		B: "create:brass_sheet",
		C: "computercraft:computer_normal",
		L: "create:brass_block"
	});
	event.shaped("computercraft:turtle_advanced", [
		"BBB",
		"BCB",
		"BHB"
	], {
		B: "create:brass_sheet",
		C: "computercraft:computer_advanced",
		H: "#forge:chests/wooden"
	});
	event.remove({ output: "computercraft:turtle_normal" });
	event.shaped("computercraft:turtle_normal", [
		"AIA",
		"ICI",
		"AHA"
	], {
		A: "create:andesite_alloy",
		C: "computercraft:computer_normal",
		H: "#forge:chests/wooden",
		I: "create:iron_sheet"
	});
}

// Recreate any recipes that are missing.
function fixMissingRecipes(event) {
	event.shapeless("minecraft:trapped_chest", ["minecraft:chest", "minecraft:tripwire_hook"]);
}

// Make recipes use metal sheets instead of ingots.
function metalSheets(event) {
	// Tweak Farmer's Delight recipes.
	replaceIron(event, "farmersdelight:cooking_pot");
	replaceIron(event, "farmersdelight:skillet");
	replaceIron(event, "farmersdelight:stove");

	// Tweak miscellaneous recipes.
	replaceIron(event, "minecraft:bucket");
	replaceIron(event, "minecraft:cauldron");
	replaceIron(event, "minecraft:chest_minecart");
	replaceIron(event, "minecraft:furnace_minecart");
	replaceIron(event, "minecraft:heavy_weighted_pressure_plate");
	replaceIron(event, "minecraft:hopper");
	replaceIron(event, "minecraft:hopper_minecart");
	replaceIron(event, "minecraft:iron_door");
	replaceIron(event, "minecraft:iron_trapdoor");
	replaceGold(event, "minecraft:light_weighted_pressure_plate");
	replaceIron(event, "minecraft:minecart");
	replaceIron(event, "minecraft:stonecutter");
	replaceIron(event, "minecraft:tnt_minecart");
	replaceIron(event, "quark:iron_plate");
	replaceIron(event, "quark:rusty_iron_plate");
	replaceIron(event, "supplementaries:bomb");
	replaceIron(event, "supplementaries:cage");
	replaceGold(event, "supplementaries:gold_door");
	replaceGold(event, "supplementaries:gold_trapdoor");
	replaceIron(event, "supplementaries:spring_launcher");
	replaceIron(event, "prettypipes:pipe_wrench");

	// Tweak vanilla armor recipes.
	replaceGold(event, "minecraft:golden_boots");
	replaceGold(event, "minecraft:golden_chestplate");
	replaceGold(event, "minecraft:golden_helmet");
	replaceGold(event, "minecraft:golden_leggings");
	replaceIron(event, "minecraft:iron_boots");
	replaceIron(event, "minecraft:iron_chestplate");
	replaceIron(event, "minecraft:iron_helmet");
	replaceIron(event, "minecraft:iron_leggings");

	// Tweak RP recipes
	replaceIronWithInvarPlate(event, "refinedpipes:basic_energy_pipe");
	

	replaceGoldWithElectrumPlate(event, "refinedpipes:improved_energy_pipe");
	

	

	replaceDiamondWithDiamondGear(event, "refinedpipes:advanced_energy_pipe");
	



	replaceEmeraldWithEmeraldGear(event, "refinedpipes:elite_energy_pipe");
	
	
	
	replaceBasic(event, "refinedpipes:improved_energy_pipe", "energy");
	

	replaceImproved(event, "refinedpipes:advanced_energy_pipe", "energy");

	

	replaceAdvanced(event, "refinedpipes:elite_energy_pipe", "energy");
	

	replaceAdvanced(event, "refinedpipes:ultimate_energy_pipe", "energy");
	

	removeGear(event, "invar");
	removeGear(event, "constantan");
	removeGear(event, "electrum");
	removeGear(event, "bronze");
	removeGear(event, "enderium");
	removeGear(event, "invar");
	removeGear(event, "nickel");
	removeGear(event, "silver");
	removeGear(event, "lead");
	removeGear(event, "tin");
	removeGear(event, "copper");
	removeGear(event, "quartz");
	removeGear(event, "emerald");
	removeGear(event, "diamond");
	removeGear(event, "lapis");
	removeGear(event, "netherite");
	removeGear(event, "gold");
	removeGear(event, "iron");
	

}

// Replace gold ingots with gold sheets in a recipe.
function replaceGold(event, output) {
	event.replaceInput({ output: output }, "minecraft:gold_ingot", "#forge:plates/gold");
}

function replaceBasic(event, output, pipeType) {
	event.replaceInput({ output: output }, "#forge:glass", "refinedpipes:basic_" + pipeType +"_pipe");
}

function replaceImproved(event, output, pipeType) {
	event.replaceInput({ output: output }, "#forge:glass", "refinedpipes:improved_" + pipeType +"_pipe");
}

function replaceAdvanced(event, output, pipeType) {
	event.replaceInput({ output: output }, "#forge:glass", "refinedpipes:advanced_"+ pipeType +"_pipe");
}

function replaceElite(event, output, pipeType) {
	event.replaceInput({ output: output }, "#forge:glass", "refinedpipes:elite_"+ pipeType +"_pipe");
}

// Replace iron ingots with iron sheets in a recipe.
function replaceIron(event, output) {
	event.replaceInput({ output: output }, "minecraft:iron_ingot", "#forge:plates/iron");
}

function replaceIronWithInvarPlate(event, output) {
	event.replaceInput({ output: output }, "minecraft:iron_ingot", "thermal:invar_plate");
}

function replaceGoldWithElectrumPlate(event, output) {
	event.replaceInput({ output: output }, "minecraft:gold_ingot", "thermal:electrum_plate");
}

function replaceDiamondWithDiamondGear(event, output) {
	event.replaceInput({ output: output }, "minecraft:diamond", "thermal:diamond_gear");
}

function replaceEmeraldWithEmeraldGear(event, output) {
	event.replaceInput({ output: output }, "minecraft:emerald", "thermal:emerald_gear");
}

function removeGear(event, gearType) {
	event.remove({id: "thermal:parts/" +gearType+"_gear"});
}



// Get rid of unwanted recipes.
function unwantedRecipes(event) {
	// Remove Quark stone variants.
    event.remove({ output: "quark:andesite_bricks_slab" });
    event.remove({ output: "quark:andesite_bricks_vertical_slab" });
    event.remove({ output: "quark:andesite_vertical_slab" });
    event.remove({ output: "quark:diorite_bricks_slab" });
	event.remove({ output: "quark:diorite_bricks_vertical_slab" });
    event.remove({ output: "quark:granite_bricks_slab" });
	event.remove({ output: "quark:granite_bricks_vertical_slab" });

    // Remove duplicate rope.
	event.remove({ output: "farmersdelight:rope" });

	
}


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
	event.remove({id: 'redstone_arsenal:materials/flux_dust'});
	event.remove({id: 'redstone_arsenal:materials/flux_gem'});
	event.remove({id: 'refinedstorage:silicon'});
	event.remove({id: 'refinedstorage:quartz_enriched_iron'});
	event.remove({output: 'thermal:potato_block'});
	event.remove({output: 'thermal:carrot_block'});
	event.remove({output: 'thermal:beetroot_block'});
	event.remove({output: 'thermal:apple_block'});
	event.remove({output: 'thermal:onion_block'});
	event.remove({output: 'thermal:tomato_block'});
	event.remove({output: 'thermal:rice_block'});
	event.remove({id: 'refinedpipes:basic_item_pipe'});
	event.remove({id: 'refinedpipes:basic_fluid_pipe'});
	event.remove({id: 'refinedpipes:basic_extractor_attachment'});

	event.remove({id: 'refinedpipes:improved_item_pipe'});
	event.remove({id: 'refinedpipes:improved_fluid_pipe'});
	event.remove({id: 'refinedpipes:improved_extractor_attachment'});

	event.remove({id: 'refinedpipes:advanced_item_pipe'});
	event.remove({id: 'refinedpipes:advanced_fluid_pipe'});
	event.remove({id: 'refinedpipes:advanced_extractor_attachment'});

	
	event.remove({id: 'refinedpipes:elite_fluid_pipe'});
	event.remove({id: 'refinedpipes:elite_extractor_attachment'});

	
	event.remove({id: 'refinedpipes:ultimate_fluid_pipe'});
	event.remove({id: 'refinedpipes:ultimate_extractor_attachment'});
	event.remove({id: 'prettypipes:pipe'});
	event.remove({id: 'prettypipes:blank_module'});
	event.remove({id: 'ppfluids:fluid_pipe'});
	event.remove({id: 'ppfluids:fluid_pipe_to_pipe'});

	

	

	event.recipes.thermal.smelter('refinedstorage:silicon', ['minecraft:quartz','thermal:niter','thermal:apatite_dust']);
	event.recipes.thermal.smelter('redstone_arsenal:flux_gem', ['minecraft:diamond','4x minecraft:redstone']);
	event.recipes.thermal.smelter('redstone_arsenal:flux_dust', ['thermal:electrum_dust','4x minecraft:redstone']);
	
	
	event.recipes.createMixing('2x tconstruct:grout', [
	Fluid.of('tconstruct:molten_clay', 250),
	'#forge:gravel',
	'#forge:sand'
	]).heated();

	event.recipes.createMixing('2x tconstruct:grout', [
	"minecraft:clay_ball",
	'#forge:gravel',
	'#forge:sand'
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

	event.shaped('4x prettypipes:pipe', [
    		'IGI',
    		'GSG',
    		'IGI'
  		], {S: 'thermal:constantan_gear', I: 'thermal:silver_plate', G: '#forge:glass'});
	event.shaped('4x prettypipes:blank_module', [
    		' G ',
    		'GSG',
    		' G '
  		], {S: 'minecraft:iron_ingot', G: 'thermal:tin_plate'});

	
	

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




