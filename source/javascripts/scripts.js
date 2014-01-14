$(document).ready(function(){

	  //slider
	  var rsi = $('#slider-in-laptop').royalSlider({
	    autoHeight: true,
	    arrowsNav: false,
	    fadeinLoadedSlide: true,
	    controlNavigationSpacing: 0,
	    controlNavigation: 'bullets',
	    imageScaleMode: 'fill',
	    imageAlignCenter:true,
	    loop: true,
	    loopRewind: true,
	    numImagesToPreload: 20,
	    keyboardNavEnabled: true,
	    autoScaleSlider: true,  
	    slidesSpacing: 0,
	    globalCaption: true,
	    autoScaleSliderWidth: 682,     
	    autoScaleSliderHeight: 410
	  }).data('royalSlider');
	  $('#slider-next').click(function() {
	    rsi.next();
	  });
	  $('#slider-prev').click(function() {
	    rsi.prev();
	  });



	$('#find-out-how').bind('click', function(){
    pageScroller.next();
	});

});
