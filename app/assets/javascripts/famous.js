window.Famous = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	new Famous.Routers.Router({
  		$rootEl: $('#container')
  	})
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Famous.initialize();
});
