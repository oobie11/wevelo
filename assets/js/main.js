(function() {
  $(function() {
    $('.parallax-section').parallax({
      speed: 0.5,
      axis: 'y'
    });
    return $('a.scroll-to').click(function() {
      var $anchor;
      $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 2000, 'easeInOutExpo');
      return event.preventDefault();
    });
  });

}).call(this);
