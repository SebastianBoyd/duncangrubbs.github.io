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

$("document").ready(function($){
  var nav = $('.handle');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 202) {
      nav.addClass("fixed");
    } else {
      nav.removeClass("fixed");
    }
  });
});

$('.handle').on('click', function(){
	$('nav ul').toggleClass('showing');
});