var MonModel = Backbone.Model.extend({});

var MaView = Backbone.View.extend({

	initialize: function(){
		this.model.on('change', this.render, this); //SIM: a regarder
	},

	render: function(){
		console.log('render', this.model.toJSON());
	}
});




//////////////////////////////////////////////////////////////////

var superModel = new MonModel({age:10});
var superView = new MaView({model: superModel});

superModel.set('age', 15);

//////////////////////////////////////////////////////////////////