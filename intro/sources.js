var Capitaine = Backbone.Model.extend({});

var View = Backbone.View.extend({

/*Render easy
	render: function(){
		this.$el.html('<span class="age">' + this.model.get('age') + ' ans</span>');
		return this;
	},
*/

/*Pattern observable ? de la balle
	initialize: function(){
		this.model.on('change', this.render, this);
	},
*/	

/*Render 2 le retour avec les templates
	template: '<label>Age du capitaine </label><input size="2"/><div><span class="age"><%= age %> ans</span></div>',
	
	render: function(){
		var contenu = _.template(this.template, this.model.toJSON())
		this.$el.html(contenu);
		return this;
	},
*/

/*j'ecoute la view (WTF?)
	events : {
		'change input' : 'majAgeDuCapitaine'
	},

	majAgeDuCapitaine: function(){
		var age = this.$el.find('input').val();
		this.model.set('age', age);
	},	
*/

});


var capitaine = new Capitaine({age: 20});
var view = new View({model: capitaine});
$('#capitaine').html(view.render().$el);