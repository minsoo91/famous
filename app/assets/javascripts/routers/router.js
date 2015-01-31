Famous.Routers.Router = Backbone.Router.extend({
	initialize: function (options) {
		this.$rootEl = options.$rootEl
	},

	routes: {
		"":"index",
		"show-details/:id":"auctionItemShow"
	},

	index: function () {
		auctionItemsCollection.fetch(); 
		var indexView = new Famous.Views.AuctionItemsIndexView({
			collection: auctionItemsCollection
		});
		this._swapView(indexView);
	},

	auctionItemShow: function (id) {
		if (auctionItemsCollection === undefined) {
			auctionItemsCollection.fetch(); 
		}
		var showView = new Famous.Views.AuctionItemShowView({
			collection: auctionItemsCollection,
			id: id
		})
		this._swapView(showView);
	},

	_swapView: function (view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}
})