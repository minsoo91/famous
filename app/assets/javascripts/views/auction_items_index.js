Famous.Views.AuctionItemsIndexView = Backbone.View.extend({
	className: "auctionItemsIndexContainer",
	initialize: function () {
		this.listenTo(this.collection, 'sync', this.render);
	},
	template: JST['auction_items/index'],
	render: function () {
		var content = this.template({
			auctionItems: this.collection
		});
		this.$el.html(content);
		return this;
		debugger;
	}
})