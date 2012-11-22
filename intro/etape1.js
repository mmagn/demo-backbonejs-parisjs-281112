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


var MaView = Backbone.View.extend({

	initialize: function(){
		this.model.on('change', this.render, this);
	},

	render: function(){
		$('#ici').html('Age: ' + this.model.get('age')); // Bahh cracra
	}
});

var superView = new MaView({model: superModel});

superView.render();

//////////////////////////////////////////////////////////////////

superModel.set('age', 36);

//////////////////////////////////////////////////////////////////

var MaView = Backbone.View.extend({

	initialize: function(){
		this.model.on('change', this.render, this);
		$('input').change(function(){
			that.model.set('age', $('input').val());
		});
	},

	render: function(){
		$('#ici').html('Age: ' + this.model.get('age')); // Bahh cracra
		var that = this;
	}
});

var superView = new MaView({model: superModel});

superView.render();