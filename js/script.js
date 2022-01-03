// ======================================
// 		Nav Bar Fixing Section 
// ======================================
$(window).scroll(function(){
    // console.log($(window).scrollTop())
    var couting_scroll = $(window).scrollTop()
    if(couting_scroll>90){
        $(".nav_fix").addClass("fixed")
    }
    else{
        $(".nav_fix").removeClass("fixed")   
    }
})
// Responsive nav bar //
$(".mobile_click").click(function(){
	$(".mobile_drop").slideToggle();
})

// ======================================
// 		Banner Plugin Section Start
// ======================================
$('.plugin').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: false,
    autoplaySpeed: 300,
    prevArrow: '<i class="fa fa-arrow-left left_arrow" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-right right_arrow" aria-hidden="true"></i>',
});
// ====================================================
// 		    Portfolio Venobox Part
// ====================================================
$('.venobox').venobox(); 
// ======================================
// 		Counter Plugin Section Start
// ======================================
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
// ====================================================
// 		    Service Plugin Start
// ====================================================
$('.service_slider').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: 0,
    prevArrow: '<i class="fa fa-angle-up up_arrow" aria-hidden="true"></i>    ',
	nextArrow: '<i class="fa fa-angle-down bottom_arrow" aria-hidden="true"></i>'    ,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			centerMode: false,
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: false,
		  }
		},
		{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			vertical: true,
			centerMode: false,
		  }
		}
	  ]
});
// ====================================================
// 		    Testi img Plugin Start
// ====================================================
$('.image_slider').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: 0,
    asNavFor: '.txt_slider',
    prevArrow: '<i class="fa fa-angle-up up_arrow" aria-hidden="true"></i>',
	nextArrow: '<i class="fa fa-angle-down bottom_arrow" aria-hidden="true"></i>',
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			vertical: false,
			prevArrow: '<i class="fa fa-angle-left left_arrow" aria-hidden="true"></i>',
			nextArrow: '<i class="fa fa-angle-right right_arrow" aria-hidden="true"></i>',
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: false,
		  }
		},
		{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: false,
			vertical: false,
			prevArrow: '<i class="fa fa-angle-left up_arrow" aria-hidden="true"></i>			',
			nextArrow: '<i class="fa fa-angle-right bottom_arrow" aria-hidden="true"></i>			',
		  }
		}
	  ]
});
// ====================================================
// 		    Testi text Plugin Start
// ====================================================
$('.txt_slider').slick({
    dots: false,
    arrows: false,
    autoplay: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.image_slider',
});
// ====================================================
// 		    Brand Plugin Start
// ====================================================
$('.brand_plugin').slick({
    dots: false,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
	centerPadding: 0,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 5,
			slidesToScroll: 1,
			infinite: true,
			dots: false
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			dots: false
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
});