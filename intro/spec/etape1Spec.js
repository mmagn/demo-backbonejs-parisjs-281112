describe('l affichage de l age du capitaine', function(){

	var monCapitaine,
		superView;

	beforeEach(function(){
		monCapitaine = new Capitaine({age:10});
		superView = new MaView({model: monCapitaine});

	});

	it('affiche 10 quand le capitaine a 10 ans', function(){
		superView.render();

		//expect($('#age').html()).toEqual('10');

		expect(superView.$el.html()).toEqual('10');
	});	

	it('si on modifie l age du capitaine la vue change', function(){
		superView.render();
		//expect($('#age').html()).toEqual('10');

		monCapitaine.set('age', 88);

		expect(superView.$el.html()).toEqual('88');
	});	
});

describe('la saisie de l age du capitaine', function(){

	var monCapitaine,
		superView;

	var template = '<p><input/><span id="age"></span></p>'

	beforeEach(function(){
		monCapitaine = new Capitaine({age:10});
		superView = new MaView({
			model: monCapitaine,
			template: template
		});

	});

	it('se fait dans une textbox', function(){
		expect(monCapitaine.get('age')).toEqual(200);
	});

});
