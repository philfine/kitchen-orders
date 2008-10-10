// ==========================================================================
// Kitchen.OrdersListController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.CollectionController
  @author AuthorName
  @version 0.1
  @static
*/
Kitchen.ordersListController = SC.CollectionController.create(
/** @scope Kitchen.ordersListController */ {

  // TODO: Add your own code here.

	add_to_dispatch_list: function (event, target) {
		var item = target.get('content');
		item.set('quantity', item.get('quantity') - 1);
		item.set('produced', item.get('produced') + 1);
	},

}) ;
