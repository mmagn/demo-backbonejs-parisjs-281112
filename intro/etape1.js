var Capitaine = Backbone.Model.extend({});

var MaView = Backbone.View.extend({

	render: function(){
		$('#age').html(this.model.get('age')); // Bahh cracra, difficilement testable
	}

});

//////////////////////////////////////////////////////////////////

var monCapitaine = new Capitaine({age:10});

var superView = new MaView({model: monCapitaine});
superView.render();

//////////////////////////////////////////////////////////////////

var MaView = Backbone.View.extend({

	render: function(){
		this.$el.html(this.model.get('age')); // Plus propre, on fait réf à el -> facilement testable
		return this;
	}

});

var superView = new MaView({model: monCapitaine, el: '#age'}); // On passe la référence à l'init

//////////////////////////////////////////////////////////////////

monCapitaine.set('age', 36); // si on modifie le model rien ne se passe sur la vue

//////////////////////////////////////////////////////////////////


var MaView = Backbone.View.extend({

	initialize: function(){
		this.model.on('change', this.render, this); // on bind la fonction de rendu sur les changements du model
	},

	render: function(){
		this.$el.html(_.template('<%= age %>', this.model.toJSON()));
		return this;
	}

});

//////////////////////////////////////////////////////////////////

monCapitaine.set('age', 88); // maintenant la vue est liée aux évènements du model

//////////////////////////////////////////////////////////////////

var MaView = Backbone.View.extend({

	initialize: function(){
		this.model.on('change', this.render, this); // on bind la fonction de rendu sur les changements du model
	},

	render: function(){
		this.$el.html(_.template(this.options.template, this.model.toJSON()));
		return this;
	}

});

var superView = new MaView({
	model: monCapitaine,
	el: '#age',
	template: '<p><input/><span id="age"></span></p>'
});

//////////////////////////////////////////////////////////////////

var MaView = Backbone.View.extend({

	initialize: function(){
		this.model.on('change', this.render, this);
		var that = this;
		$('input', this.$el).change(function(){
			that.model.set('age', $('input').val());
		});
	},

	render: function(){
		var $content = $('<input>'); //
		$content.append('Age: ' + this.model.get('age'));
		this.$el.html($content);
		return this;
	}
});
