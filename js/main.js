$(document).ready(function($) {

  // Smooth Scrolling on nav-link classes
  $(".nav-link").click(function() {
    console.log("start");
    var id =  $(this).attr('href');
    $('html, body').animate({         
        scrollTop: $(id).offset().top-230
    }, 1000);
  });
});