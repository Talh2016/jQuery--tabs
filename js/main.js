$(document).ready(function(){

	$('.ba-section__item').on('click', function(evt) {
		evt.preventDefault();

		$('.ba-section__item').removeClass('active');
		$(this).addClass('active');

		$('.ba-section__page').hide();
		$( $(this).attr('href') ).show();
	});

	$(function() {
      $('#star').barrating({
        theme: 'fontawesome-stars'
      });
   });

	$('#circle').circleProgress({
	    value: 0.6,
	    size: 70,
	    fill: { gradient: ["#1ae77f", "#00d4be"] },
	    startAngle: -1.5,
	    emptyFill: '#787c9b'

  });
})