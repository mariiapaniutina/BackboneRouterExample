define(function(require) {

    var Backbone = require('backbone');
    var $ = require('jquery');

    var BaseView = Backbone.View.extend({
        el: '#content',
        initialize: function(settings){
            this.content = settings.content;
            this.render();
        },
        render: function(){
            var self = this;
            this.$el.html(self.content);
        }
    });

    return BaseView;
});