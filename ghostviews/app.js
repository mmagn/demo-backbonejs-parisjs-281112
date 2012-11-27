$(function(){
App.start = function(nb){
	App.files = new FileCollection();

	for (var i = 0; i < nb; i++) {
		App.files.add({
			name: 'file'+i+'.js',
		})
	};

	var mainView = new App.Views.FolderView({model: App.files});

    $('#zombiesList').html('<h4>Listview <small>#zombiesList</small></h4>');
	$('#zombiesList').append(mainView.render().el);
};

App.start(4);
});