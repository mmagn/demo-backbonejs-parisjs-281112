var Capitaine = Backbone.Model.extend({});


var MaView = Backbone.View.extend({

	initialize: function(){
		this.model.on('change', this.render, this); // on bind la fonction de rendu sur les changements du model
	},

	render: function(){
		this.$el.html(_.template(this.options.template, this.model.toJSON()));
		return this;
	}

});