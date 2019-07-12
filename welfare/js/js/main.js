(function($){

 'use strict';


 $(window).on("load", function(){

 	$(".slider-wrapper").nivoSlider({

 		 animSpeed    : 900,
 		 controlNav   : false,
 		 nextText     : '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
 		 prevText     : '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
 		 beforeChange : function(){

	 		$('.nivo-caption p').removeClass('animated slideInLeft').hide();
	 		$('.nivo-caption h2').removeClass('animated slideInRight').hide();
	 		$('.nivo-caption span button').removeClass('animated fadeInUp').hide();
	 		

 		 },
 		 afterChange : function(){

	 		$('.nivo-caption p').addClass('animated slideInLeft').show();
	 		$('.nivo-caption h2').addClass('animated slideInRight').show();
	 		$('.nivo-caption span button').addClass('animated fadeInUp').show();
	 		

 		 }

 	});
 });



})(jQuery);