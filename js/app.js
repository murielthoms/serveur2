(function () {
	"use.strict";
	var app = {

		html: null,
		urla:'http://localhost:2345/files/menu.json',
		urlb:'http://localhost:2345/files/alice.md',
		urlc:'http://localhost:2345/files/example.md',
		converter: new showdown.Converter(),

		init: function(){

            app.listener();
        },

        listener: function(){
        	$('#lienTitle').on('click', app.articleAlice);
        	$('#lien1').on('click', app.example);

        },
        articleAlice: function(){
        	$.get(app.urlb, function(alice){
        		app.html = app.converter.makeHtml(alice);
        		$('#md').html(app.html);
        	});
        },

        example: function(){
        	$.get (app.urlc, function(example){
        		app.html = app.converter.makeHtml(example);
        		$('#md').html(app.html);

        	});

        },







    };
    $(document).ready(function(){

    	app.init();  
    });
})();