$('.counter').counterUp();
// silk slider-----------

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
// -----------testimonials slider-----
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});
// ----testimonials----
$('.my_slider_2').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<i class="fa-solid arrow1 fa-arrow-left"></i>',
  nextArrow: "<i class='fa-solid arrow2 fa-arrow-right'></i>"
});
	
	