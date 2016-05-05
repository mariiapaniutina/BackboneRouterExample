define(function(require) {

    var Backbone = require('backbone');
    var BaseView = require('src/js/BaseView');

    var ApplicationRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            'home': 'navigateHome',
            'contact': 'navigateContact'
        },

        index: function() {
            console.log('Hit the base route.');
            console.log('12312313123');
            var view = new BaseView({content: "This is index"});

        },
        navigateHome: function(){
            console.log('navigateHome');
            var view = new BaseView({content: "This is HOME"});
        },
        navigateContact: function(){
            console.log('navigateContact');
            var view = new BaseView({content: "This is CONTACT"});
        }
    });

    return ApplicationRouter;

});
