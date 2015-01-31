Famous.Routers.Router = Backbone.Router.extend({
	initialize: function (options) {
		this.$rootEl = options.$rootEl
	},

	routes: {
		"":"index"
	},

	index: function () {
		var auctionItemsCollection = new Famous.Collections.AuctionItems();
		auctionItemsCollection.fetch(); 
		var indexView = new Famous.Views.AuctionItemsIndexView({
			collection: auctionItemsCollection
		});
		this._swapView(indexView);
	},

	_swapView: function (view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}
})