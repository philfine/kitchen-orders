// ==========================================================================
// Kitchen.Order
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
Kitchen.Order = SC.Record.extend(
/** @scope Kitchen.Order.prototype */ {

	properties: ['orderer', 'table'],
	time: 0,
	display_items: YES,

	items: SC.Record.hasMany('Kitchen.Item', 'order'),	

	info_update: function() {
		this.info = "Table : " + this.get('table') + " - " + this.get('orderer');
	}.observes('table', 'orderer').property('info'),

  // TODO: Add your own code here.

}) ;
