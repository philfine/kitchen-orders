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
		this.info = "Table : " + this.get('table');
		this.info += " - " + this.get('orderer');
		this.info += " - " + this.get('awaiting') + " min";
	}.observes('table', 'orderer', 'awaiting').property('info'),
	
	awaiting: 0,
	
	tick: function() {
		this.set('awaiting', this.get('awaiting') + 1);
	},

	_timer: SC.Timer.schedule( {
		target: this,
		action: 'tick', 
		repeats: YES, 
		interval: 1000
	}),
	
  // TODO: Add your own code here.

}) ;
