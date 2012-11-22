var FolderView = Backbone.View.extend({

  tagName: "table",

  className: "folder",

  render: function() {

    // on nettoie la vue
    this.$el.empty();

    // pour chaque élément de la collection on ajoute une ligne
    this.model.each(function(item){
      this.$el.append(new DocumentRowView({model: item}).render().el);
    });

    return this;
  }

});

var DocumentRowView = Backbone.View.extend({

  tagName: "tr",

  className: "document-row",

  events: {
    "click .icon":          "open",
    "click .button.edit":   "openEditDialog",
    "click .button.delete": "destroy"
  },

  render: function() {
    this.$el.html('<td>'+this.model.path+'</td><td>'+this.model.size+'</td>')
  }

});