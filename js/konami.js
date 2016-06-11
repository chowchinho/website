(function( $ ) {
	"use strict";

	$(function() {
		$( window ).konami( { eventName: 'konami.with.message', message: 'Code on Input 1' } );
      
		$(window).on('konami.with.message', function(event, opts) {
          //alert('konami activated');
          $.colorbox({inline:true, width:"50%", href:"#inline_content"});
		});
	});
}(jQuery));
