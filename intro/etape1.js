var MonModel = Backbone.Model.extend({});

var superModel = new MonModel({age:10});
superModel.set('age', 15);

var MaView = Backbone.View.extend({

	render: function(){
		$('#ici').html('Age: ' + this.model.get('age')); // Bahh cracra, difficilement testable
	}

});

var superView = new MaView({model: superModel});
superView.render();

//////////////////////////////////////////////////////////////////

var MaView = Backbone.View.extend({

	render: function(){
		this.$el.html('Age: ' + this.model.get('age')); // Plus propre, on fait réf à el -> facilement testable
		return this;
	}

});

var superView = new MaView({model: superModel, el: '#ici'}); // On passe la référence à l'init

//////////////////////////////////////////////////////////////////

superModel.set('age', 36); // si on modifie le model rien ne se passe sur la vue

//////////////////////////////////////////////////////////////////


var MaView = Backbone.View.extend({

	initialize: function(){
		this.model.on('change', this.render, this); // on bind la fonction de rendu sur les changements du model
	},

	render: function(){
		this.$el.html(_.template('Age: <%= age %>', this.model.toJSON()));
		return this;
	}

});

//////////////////////////////////////////////////////////////////

superModel.set('age', 36); // maintenant la vue est liée aux évènements du model

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
