Famous.Collections.AuctionItems = Backbone.Collection.extend({
	url: "https://s3-us-west-2.amazonaws.com/famous-hiring/famousEbayData.json"
})

auctionItemsCollection = new Famous.Collections.AuctionItems();
auctionItemsCollection.fetch(); 