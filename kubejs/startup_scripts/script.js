// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

onEvent('jei.hide.items', event => {
  event.hide('quark:beetroot_crate');
  event.hide('quark:carrot_crate');
  event.hide('quark:potato_crate');

  event.hide('create:copper_ingot');
  event.hide('create:copper_ore');
  event.hide('create:copper_nugget');
  event.hide('create:copper_sheet');
  event.hide('create:copper_block')

  event.hide('tconstruct:copper_ingot');
  event.hide('tconstruct:copper_ore');
  event.hide('tconstruct:copper_nugget');
  event.hide('tconstruct:copper_block')
})