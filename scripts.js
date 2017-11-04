$(document).ready(function(){

	//popup block
	$('.popup-wrap .btn-toggle').on('click touchstart', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
		} else {
			$('.popup-wrap .btn-toggle').removeClass('active');
			$(this).addClass('active');
		}
		return false;
	})
	$(document).click(function(event) {
	    if ($(event.target).closest(".popup-block").length) return;
	    $('.popup-wrap .btn-toggle').removeClass('active');
	    event.stopPropagation();
	});


	//search
	$('.header .frm-search .btn-toggle').on('click', function() {
		$('.header .frm-search').toggleClass('active');
		return false;
	})
	$(document).click(function(event) {
	    if ($(event.target).closest(".header .frm-search").length) return;
	    $('.header .frm-search').removeClass('active');
	    event.stopPropagation();
	});
	

	//header logo
	$(window).scroll(function(){
		var windowTop = $(window).scrollTop();
		if (windowTop>100){
			$('.wrap').addClass('fixed');
		}
		else {
			$('.wrap').removeClass('fixed');
		}
	});


	//ext item
	$('.ext-item li a').on('click', function() {
		$(this).parents('ul').find('.active').removeClass('active');
		$(this).addClass('active');
		$(this).parents('.ext-item').find('.btn-toggle').removeClass('active')
		.text($(this).text());
		return false;
	})



	//price
	/*
	$('#widget').draggable();
	*/


	//product slider
	var owl=$('.product-box .photos-block .main-block').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: false,
		smartSpeed: 1000,
		fluidSpeed: 1000,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		dotsSpeed: 1000,
		dragEndSpeed: 1000,
		responsiveRefreshRate: 100
	})
	$('.product-box .photos-block .preview-block .item').on('click', function() {
		owl.trigger('to.owl.carousel', [$(this).index(),300,true]);
		return false;
	})


	//tab
	$('.tabs-box').tabs();


	//opin slider box
	$('.opins-slider-box').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: true,
		smartSpeed: 1000,
		fluidSpeed: 1000,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		dotsSpeed: 1000,
		dragEndSpeed: 1000,
		responsiveRefreshRate: 100,
		autoHeight: true
	})
	//main slider box
	$('.main-slider-box').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: false,
		smartSpeed: 1000,
		fluidSpeed: 1000,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		dotsSpeed: 1000,
		dragEndSpeed: 1000,
		responsiveRefreshRate: 100
	});     
});