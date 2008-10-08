// ==========================================================================
// Kitchen.Item
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
Kitchen.Item = SC.Record.extend(
/** @scope Kitchen.Item.prototype */ {

	group: 'Bla',
	properties: ['quantity', 'name'],
	state: 'NotSeen',  // 'Preparing', 'Done', 'Delivered'
	
	orderType: 'Kitchen.Order',
	
	html_info_update: function () {
		var html = [];
		html.push ('<div class="orders_item">');
			html.push ('<div class="order_item_quantity">' + this.get('quantity') + '</div>');
			html.push ('<div class="order_item_name">' + this.get('name') + '</div>');
		html.push ('</div>');
		
		this.set('html_info', html.join(''));
	}.observes('quantity', 'name').property('html_info'),
	
  // TODO: Add your own code here.

}) ;
