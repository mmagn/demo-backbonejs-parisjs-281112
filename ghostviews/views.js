App = {};
App.Views = {};

App.Views.FolderView = Backbone.View.extend({

  tagName: "table",

  render: function() {
    this.$el.append('<tr><td><b>cid</b></td><td><b>filename</b></td></tr>');

    var that = this;
    this.model.each(function(item){
      that.$el.append(new App.Views.DocumentRowView({model: item}).render().el);
    });

    return this;
  }

});

App.Views.DocumentRowView = Backbone.View.extend({

  tagName: "tr",

  initialize: function(){
    this.model.on('change', this.render, this);
  },

  events: {
    "click": "open"
  },

  open: function(){
    var detailView = new App.Views.DocumentDetailsView({model: this.model, el: $('#zombieDetails')});
    detailView.render()
    // var detailView = new App.Views.DocumentDetailsView({model: this.model});
    // $('#zombieDetails').html(detailView.render().el);
  },

  render: function() {
    this.$el.html('<td>'+this.model.cid+'</td><td>'+this.model.get('name')+'</td>')
    return this;
  }

});

App.Views.DocumentDetailsView = Backbone.View.extend({

  events: {
    "change input": "changeName"
  },

  changeName: function(){
    this.model.set('name', this.$el.find('input').val());
    console.log(this.model);
  },

  render: function() {
    this.$el.html('<h4>DetailView <small>#zombieDetails</small></h4>');
    this.$el.append('<input style="font-size:1em" value="'+this.model.get('name')+'"/>')
    return this;
  }

});
