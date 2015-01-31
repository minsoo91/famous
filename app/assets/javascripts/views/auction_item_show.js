Famous.Views.AuctionItemShowView = Backbone.View.extend({
	className: "auctionItemShow",
	template: JST['auction_items/show'],
	initialize: function () {
		this.listenTo(this.collection, "sync", this.render);
	},
	render: function () {
		if (this.collection.length > 0) {
			for (var i = 0; i < this.collection.models.length; ++i) {
				if (this.collection.models[i].attributes.itemId[0] === this.id) {
					var model = this.collection.models[i];
				}
			}
		}
		var content = this.template({
			auctionItem: model
		});
		this.$el.html(content);
		return this;
	}
})