(function(){
	var curIndex = 0;
	var showDuration = 5 * 1000; // Dealy in seconds
	var slideCount = 4;
	var $slogans;

	$(document).ready(function(){
		$slogans = $('.slogan');

		setTimeout(showNext, showDuration);
	});

	function showNext(){
		$slogans.eq(curIndex).fadeOut('slow', function(){
			if(curIndex >= (slideCount - 1)) curIndex = 0;
			else curIndex++;
			$slogans.eq(curIndex).fadeIn('slow', function(){
				setTimeout(showNext, showDuration);
			});
		});
	}
})();