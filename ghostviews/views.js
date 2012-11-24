App.Views = {};

App.Views.FolderView = Backbone.View.extend({

  tagName: "table",

  className: "folder",

  render: function() {

    // on nettoie la vue
    this.$el.empty();

    // pour chaque élément de la collection on ajoute une ligne
    var that = this;
    this.model.each(function(item){
      that.$el.append(new DocumentRowView({model: item}).render().el);
    });

    return this;
  }

});

App.Views.DocumentRowView = Backbone.View.extend({

  tagName: "tr",

  className: "document-row",

  events: {
    "click .open": "open"
  },

  open: function(){
    console.log(this.model);
  },

  render: function() {
    this.$el.html('<td>'+this.model.get('name')+'</td><td>('+this.model.get('size')+' kb)</td><td><a class="open">open</a></td>')
    return this;
  }

});

// soit méthode pour repeupler la vue, soit unbinding
App.Views.DocumentDetailsView = Backbone.View.extend({

  tagName: "div",

  className: "document-details",

  events: {
    "click .close": "close"
  },

  open: function(){
    console.log(this.model);
  },

  render: function() {
    this.$el.html('')
    return this;
  }

});
