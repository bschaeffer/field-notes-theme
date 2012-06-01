$(document).ready(function(){

	$('a#about').click(function() {
		$('#about_container').toggle();
	});
	
});

function hideFollows(initial){

	var i = $('li.follows').size();
	
	var y = initial - 1;
	
	if ( i > y ) $('li.follows:gt('+ y +')').hide();
	
	$('.following').hover(function() {
	
		$('li.follows:gt('+ y +')').show();
		
	});
}

function flickr(id){

	$("<div>").attr("id", "photos").prependTo("#flickr");
	
	var url = 'http://api.flickr.com/services/feeds/photos_public.gne?id='+ id +'&format=json&jsoncallback=?';
	
	$.getJSON( url , function(data){
	
		$.each(data.items, function(i,item){
		
			var mImg = item.media.m,
				sImg = (item.media.m).replace("_m.jpg", "_s.jpg");
			
			$("<img/>")
				.attr("src", sImg)
				.attr("id", "thumb")
				.appendTo("#photos")
				.wrap('<a href="' + item.link + '" title="' + item.title + '" target="_blank" ></a>');
			
			if ( i >= 9 ) return false;
			
		});
		
	});
}