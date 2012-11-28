var Capitaine = Backbone.Model.extend({});

var View = Backbone.View.extend({

/*
	render: function(){
	 	this.$el.html('<span class="age">' + this.model.get('age') + ' ans</span>');
	 	return this;
	},



	initialize: function(){
		this.model.on('change', this.render, this);
	},
	


	template: '<label>Age du capitaine </label><input size="2"/><div><span class="age"><%= age %> ans</span></div>',
	
	render: function(){
		var contenu = _.template(this.template, this.model.toJSON())
		this.$el.html(contenu);
		return this;
	},



	events : {
		'change input' : 'majAgeDuCapitaine'
	},

	majAgeDuCapitaine: function(){
		var age = this.$el.find('input').val();
		this.model.set('age', age);
	},	
*/
});


var capitaine = new Capitaine({age: 15});
var view = new View({model: capitaine});
$('#capitaine').html(view.render().$el);