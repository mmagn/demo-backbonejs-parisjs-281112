var AwesomeView = Backbone.View.extend({

	initialize: function(){
		this.model.on('change', this.majLaBarbe, this); // on bind la fonction de rendu sur les changements du model
	},

	majLaBarbe: function(){
		this.$el.find('.barbe').css('height', this.model.get('age') * 4);
	},

	render: function(){
		this.$el.html('<div class="capitaine"><div class="barbe"><div class="finBarbe"></div></div></div>');
		this.majLaBarbe();
		return this;
	}

});