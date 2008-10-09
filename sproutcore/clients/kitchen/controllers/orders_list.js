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

	add_to_selection_list: function (target, event) {
		var item = target.get('content');
		item.produce_one_element();
	},

}) ;
