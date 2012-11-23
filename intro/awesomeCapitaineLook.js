var AwesomeLook = Backbone.View.extend({

	initialize: function(){
		this.model.on('change', this.majLaBarbe, this); // on bind la fonction de rendu sur les changements du model
	},

	majLaBarbe: function(){
		console.log('maj');
		this.$el.find('.barbe').css('height', this.model.get('age') * 4);
	},

	render: function(){
		this.$el.html(_.template(this.options.template, {}));
		this.majLaBarbe();
		return this;
	}

});

var awesomeLook = new AwesomeLook({
	model: monCapitaine,
	el: '#look',
	template: '<div class="capitaine"><div class="tete"></div><div class="barbe"></div><div class="finBarbe"></div></div>'
});