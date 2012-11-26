App = {};
App.Views = {};

App.Views.FolderView = Backbone.View.extend({

  tagName: "table",

  render: function() {
    this.$el.empty();

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
    var detailView = new App.Views.DocumentDetailsView({model: this.model});
    // detailView.render()
    $('#details').html(detailView.render().el);
  },

  render: function() {
    this.$el.html('<td>'+this.model.get('name')+'</td><td>('+this.model.get('size')+' kb)</td>')
    return this;
  }

});

App.Views.DocumentDetailsView = Backbone.View.extend({

  // el: $('#details'),

  events: {
    "change input": "changeName"
  },

  changeName: function(){
    this.model.set('name', this.$el.find('input').val());
    console.log(this.model);
  },

  render: function() {
    this.$el.html('<h3>Details</h3><input value="'+this.model.get('name')+'"/>')
    return this;
  }

});
