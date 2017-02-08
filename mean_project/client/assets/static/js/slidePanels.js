$(document).on('click', '#opener', function() {
  var panel = $('#slide-panel');
  if (panel.hasClass("visible")) {
    panel.removeClass('visible').animate({'margin-left':'-200px'});
  } else {
    panel.addClass('visible').animate({'margin-left':'0px'});
  }
  return false;
});
$(document).on('click', '#right-opener', function() {
  var panel = $('#right-panel');
  if (panel.hasClass("visible")) {
    panel.removeClass('visible').animate({right:'0'}, 500)
  } else {
    panel.addClass('visible').animate({right:'-200px'}, 500);
  }
  return false;
});
