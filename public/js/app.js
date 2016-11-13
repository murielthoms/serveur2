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
            $('#formAdd').on('submit', app.creationArticle);

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

        creationArticle:function(event){
            event.preventDefault();
            title = $('#title').val(),
            content = $('#content').val()
            app.ajaxAjout({title: title, content: content});
        },

        ajaxAjout:function(data){
            $.ajax({
                type:'POST',
                url: $('#formAdd').attr('action'),
                data: data,
                success: app.success

            })

        },
        success:function(){
            console.log('heyyyy!')
        },
    };
    $(document).ready(function(){

     app.init();  
 });
})();