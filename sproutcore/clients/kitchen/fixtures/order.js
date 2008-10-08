// ==========================================================================
// Kitchen.Order Fixtures
// ==========================================================================

require('core') ;

Kitchen.FIXTURES = Kitchen.FIXTURES.concat([

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique guid and a type matching the
  // name of your contact.  See the example below.

  {
	guid: 1,
	type: 'Order',
	orderer: 'Lois',
	table: '10',
  },
  {
	guid: 2,
	type: 'Order',
	orderer: 'John',
	table: '5',
  },
  {
	guid: 3,
	type: 'Order',
	orderer: 'Lois',
	table: '8',
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
