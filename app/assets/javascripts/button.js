$(function() {
  $("#button_about").click(function() {
    var p = $(".about").offset().top;
    $('html,body').animate({scrollTop: p}, 'swing');
    return false;
  });
  $("#button_work").click(function() {
    var q = $(".works").offset().top;
    $('html,body').animate({scrollTop: q}, 'swing');
    return false;
  });
  $('#top_button').click(function() {
    $('html,body').animate({scrollTop: 0}, 'swing');
    return false;
  });
});
