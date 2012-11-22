var FileModel = Backbone.Model.extend({
  defaults: {
    "path":  "/file/path",
    "name":     "fileName"
  }
});

var FileCollection = Backbone.Collection.extend({
  model: FileModel
});