var App = {};

var file1 = new FileModel({
	path: '/machin',
	file: 'truc.js'
});

var file2 = new FileModel({
	path: '/machin/bidule',
	file: 'chose.js'
});

var file3 = new FileModel({
	path: '/machin/bidule',
	file: 'stuff.js'
});

App.files = new FileCollection([file1, file2, file3]);

console.log(App.files);

var mainView = new FolderView({model: App.files});

$('#ici').html(mainView.render().el);