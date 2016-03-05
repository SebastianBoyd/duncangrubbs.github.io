//Fixed nav-bar Code for Desktop
$("document").ready(function($){
    var nav = $('.desktop-nav');

    $(window).scroll(function () {
      if ($(this).scrollTop() > 202) {
          nav.addClass("fixed");
      } else {
          nav.removeClass("fixed");
      }
  });
});

//Fixed nav-bar Code for Mobile
$("document").ready(function($){
    var nav = $('.mobile-nav');

    $(window).scroll(function () {
      if ($(this).scrollTop() > 202) {
          nav.addClass("fixed");
      } else {
          nav.removeClass("fixed");
      }
  });
});

//Animation for Mobile Navigation
$('.handle').on('click', function(){
	$('nav ul').toggleClass('showing');
});
