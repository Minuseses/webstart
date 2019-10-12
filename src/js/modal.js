$(document).ready(function(){
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');
  var top_show = 150; 
  var delay = 1000;
  button.on('click', function() {
    modal.addClass('modal_active');
  });

  close.on('click', function() {
    modal.removeClass('modal_active');
  });

  $(window).scroll(function () { 
    if ($(this).scrollTop() > top_show) $('#top').fadeIn();
    else $('#top').fadeOut();
  });

  $('#top').click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, delay);
  });
});