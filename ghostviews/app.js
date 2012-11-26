
App.start = function(nb){
	App.files = new FileCollection();

	for (var i = 0; i < nb; i++) {
		App.files.add({
			name: 'file'+i+'.js',
		})
	};

	var mainView = new App.Views.FolderView({model: App.files});

	$('#zombiesList').html(mainView.render().el);
};

App.start(8);