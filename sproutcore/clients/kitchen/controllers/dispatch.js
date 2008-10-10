// ==========================================================================
// Kitchen.DispatchController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.CollectionController
  @author AuthorName
  @version 0.1
  @static
*/
Kitchen.dispatchController = SC.CollectionController.create(
/** @scope Kitchen.dispatchController */ {

  // TODO: Add your own code here.
	remove_from_dispatch_list: function (target, event) {
		var item = target.get('content');
		item.set('produced', item.get('produced') - 1);
		item.set('quantity', item.get('quantity') + 1);
	},
}) ;
