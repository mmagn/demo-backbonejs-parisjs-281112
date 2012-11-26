
App.start = function(nb){
	App.files = new FileCollection();

	for (var i = 0; i < nb; i++) {
		App.files.add({
			name: 'file'+i+'.js',
			size: Math.round(Math.random()*1000)
		})
	};

	var mainView = new App.Views.FolderView({model: App.files});

	$('#ici').html(mainView.render().el);
};

App.start(20);