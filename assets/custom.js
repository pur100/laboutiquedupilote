$(document).ready(function() {

  console.log("Hello cystom")

  $("#search_icon").click(function() {
    console.log("searcg ")
    $(".search_dropdown").toggleClass("no_show")
  })

  $(".voirplus").click(function() {
    $(this).toggleClass("no_show");
    $(".desc_hidden").toggleClass("no_show");
    $(".voirmoins").toggleClass("no_show");
  })

  $(".voirmoins").click(function() {
    $(this).toggleClass("no_show");
    $(".desc_hidden").toggleClass("no_show");
    $(".voirplus").toggleClass("no_show");
  })


})


