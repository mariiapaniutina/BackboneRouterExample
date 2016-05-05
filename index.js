'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery: 'node_modules/jquery/dist/jquery',
        underscore: 'node_modules/underscore/underscore',
        backbone: 'node_modules/backbone/backbone',
        text: 'node_modules/requirejs-text/text',
        mustache: 'node_modules/mustache/mustache'
    }
});

require([
    'jquery',
    'underscore',
    'backbone',
    'src/js/ApplicationRouter'
], function ($, _, Backbone, ApplicationRouter) {

    var router = new ApplicationRouter();
    Backbone.history.start({
        pushState: true
    });

    $(document).on("click", "a", function(e){
        e.preventDefault();
        var href = $(e.currentTarget).attr('href');
        router.navigate(href, true);
    });

});