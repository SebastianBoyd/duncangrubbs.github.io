//fixed nav-bar code for desktop
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

//fixed nav-bar code for mobile
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

//animation for mobile nav
$('.handle').on('click', function(){
	$('nav ul').toggleClass('showing');
});
