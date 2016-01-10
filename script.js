console.log('Hi, it seems I\'ve piqued your interest! I\'m only one email away from answering any questions - ssuksawat21@gmail.com :)');

(function () {
  'use strict';

  var $howBtn = $('#howBtn');
  var $features = $('#features');
  var $featureCards = $features.find('.featureCard');
  var $firstFeatureCard = $($featureCards[0]);

  $featureCards.css('opacity', 0);

  $howBtn.click(scrollToFeature);
  $(window).scroll(fadeInOnScrollOver);

  function fadeInOnScrollOver() {
    var windowLocation = $(window).scrollTop() + $(window).height();
    var elemLocation = $firstFeatureCard.offset().top + $firstFeatureCard.height();

    if(windowLocation >= elemLocation) {
      $featureCards.each(function (index) {
        var delay = (index++) * 250;
        $(this).delay(delay).animate({'opacity':'1'}, 500);
      });
      $(window).unbind('scroll');
    }
  }

  function scrollToFeature(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    $('body').animate({ scrollTop: $features.offset().top }, 500);
  }
})();
