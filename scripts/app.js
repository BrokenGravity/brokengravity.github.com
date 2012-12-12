(function(){
	var curIndex = 0;
	var showDuration = 3 * 1000; // Dealy in seconds
	var slideCount = 5;
	var $slogans;

	$(document).ready(function(){
		$slogans = $('#directives li');

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