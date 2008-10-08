// ==========================================================================
// Kitchen.OrderReceiptView
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.View
  @author AuthorName
  @version 0.1
*/
Kitchen.OrderReceiptView = SC.View.extend(
/** @scope Kitchen.OrderReceiptView.prototype */ {

	emptyElement: '<div class="order_receipt"></div>',
	// Properties
	content: [],
	contentBindingDefault: SC.Binding.MultipleNotEmpty,

	render: function() {
		var html = [];

		if(this.content !== null)
		{
			html.push(this.content.get('orderer'))
		}
	  	html = html.join('');
	  	this.set('innerHTML', html);
	}.observes('content'),
  // TODO: Add your own code here.

}) ;
