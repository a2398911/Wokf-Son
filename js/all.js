$(window).scroll(function(e){
  var windowscrollTop=$(window).scrollTop();
  if (windowscrollTop>=100)
    $(".navbar").addClass("js-navbar");
  else
    $(".navbar").removeClass("js-navbar");
});

$('.header-navbar').on('click','a',function(e){
  e.preventDefault();
  let target = $(this).attr("href");
  $('html,body').animate({
    scrollTop: $(target).offset().top
  },500);
});


// plugin set
// slick
$(document).on('ready', function() { 
  $('.hero-img-group').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
  });
});

// wow
if(screen.width > 768){
  new WOW().init();
}