$(function() {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  $(".post-box").click(function(){
    // window.open($(this).attr("href"), "_brank");
    window.location = $(this).attr("href");
  });
});