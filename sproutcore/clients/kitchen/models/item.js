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
	
	dispatched: 0,
	produced: 0,
	
	orderType: 'Kitchen.Order',
	
	produce_one_element: function ()
	{
		var quant = this.get('quantity');
		if(quant > 0)
		{
			this.set('quantity', quant - 1);
			this.set('produced', this.get('produced') + 1);			
		}
	},

	_compute_orders_list_visibility: function () {
		this.set('isVisibleInOrdersList', this.get('quantity') > 0);
	}.property('isVisibleInOrdersList').observes('quantity'),

	_compute_dispatch_visibility: function () {
		this.set('isVisibleInDispatchList', this.get('produced') > 0);
	}.property('isVisibleInDispatchList').observes('produced'),
/*
	html_info_update: function () {
		var html = [];
		html.push ('<div class="orders_item">');
			html.push ('<div class="order_item_quantity">' + this.get('quantity') + '</div>');
			html.push ('<div class="order_item_name">' + this.get('name') + '</div>');
		html.push ('</div>');
		
		this.set('html_info', html.join(''));
	}.observes('quantity', 'name').property('html_info'),
*/	
  // TODO: Add your own code here.

}) ;
