
$(document).ready(function(){
	$(window).load(function() { // makes sure the whole site is loaded
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(1000).fadeOut(1000); // will fade out the white DIV that covers the website.
})
	  var toTop = $('.to-top');
  // logic
  toTop.on('click', function() {
    $('html, body').animate({
      scrollTop: $('html, body').offset().top,
    },5000);
  });

})