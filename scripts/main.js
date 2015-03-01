Wine = Backbone.Model.extend();
Wines = Backbone.Collection.extend({
	Model: Wine,
	url: '#'
});

wines = new Wines([{
	name: 'Clos Pegase'
}, {
	name: 'Robert Mondovi'
}, {
	name: 'CakeBread'
}]);

HomeView = Backbone.View.extend({
	el: 'body',
	initialize: function () {
		this.render();
	},
	render: function () {
		this.listView = new ListView();

		this.$el.append(this.listView.render().el);
		return this;
	}
});

ListView = Backbone.View.extend({
	el: $('#main'),
	initialize: function () {
		this.template = _.template($('#item-container').html());
	},
	render: function () {
		var el = this.$el;
		var template = this.template;
		wines.each(function (wine) {
			el.append(template(wine.toJSON()));
		});

		return this;
	}
});

AddView = Backbone.View.extend({
	el: $('main'),
	initialize: function () {

	},
	render: function () {

	}
});

var home = new HomeView();
