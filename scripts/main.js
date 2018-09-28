$(document).ready(function(){
  $('.team-carousel').slick({
    autoplay:true,
    autospeed:900,
    prevArrow:'<i class="fas fa-arrow-circle-left left-arrow"></i>',
    nextArrow:'<i class="fas fa-arrow-circle-right right-arrow"></i>',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });
});
		