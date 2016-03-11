$("document").ready(function($){
    var nav = $('ul');

    $(window).scroll(function () {
      if ($(this).scrollTop() > 202) {
          nav.addClass("fixed");
      } else if ($(this).scrollTop() <= 202){
          nav.removeClass("fixed");
      }
  });
});
