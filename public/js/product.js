// owl carousel
$(".show1").hover(function (e) {
  $("#effect1").toggleClass("effect-11");
});

// owl carousel

$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds

    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
  });
});
