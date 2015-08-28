$('document').ready(function() {
  var trigger = $('#hamburger'),
      isClosed = true;
  trigger.click(function() {
      burgerTime();
  });
  var menu = $('.menu');

  function burgerTime() {
      if (isClosed == true) {
          isClosed = false;
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          menu.show();
      } else {
          isClosed = true;
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          menu.hide();
      }
  }
});