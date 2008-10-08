// ==========================================================================
// Kitchen.Item Fixtures
// ==========================================================================

require('core') ;

Kitchen.FIXTURES = Kitchen.FIXTURES.concat([

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique guid and a type matching the
  // name of your contact.  See the example below.

  {
	guid: 1,
	type: 'Item',
	quantity: 2,
	name: 'Creme Borle',
	state: 'NotSeen',
	order: 1,
  },
  {
	guid: 2,
	type: 'Item',
	quantity: 10,
	name: 'Chicken',
	state: 'NotSeen',
	order: 1,
  },
  {
	guid: 3,
	type: 'Item',
	quantity: 2,
	name: 'Seafood',
	state: 'NotSeen',
	order: 2,
  },
  {
	guid: 4,
	type: 'Item',
	quantity: 3,
	name: 'Steak au Poivre',
	state: 'NotSeen',
	order: 2,
  },
  {
	guid: 5,
	type: 'Item',
	quantity: 1,
	name: 'Pizza',
	state: 'NotSeen',
	order: 3,
  },

  // { guid: 1,
  //   type: 'Contact',
  //   firstName: "Michael",
  //   lastName: "Scott"
  // },
  //
  // { guid: 2,
  //   type: 'Contact',
  //   firstName: "Dwight",
  //   lastName: "Schrute"
  // },
  //
  // { guid: 3,
  //   type: 'Contact',
  //   firstName: "Jim",
  //   lastName: "Halpert"
  // },
  //
  // { guid: 4,
  //   type: 'Contact',
  //   firstName: "Pam",
  //   lastName: "Beesly"
  // },
  //
  // { guid: 5,
  //   type: 'Contact',
  //   firstName: "Ryan",
  //   lastName: "Howard"
  // }

]);
