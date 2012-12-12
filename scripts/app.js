(function(){
	var curIndex = 0;
	var showDuration = 2 * 1000; // Dealy in seconds
	var slideCount = 5;
	var $slogans;

	var $cc;
	var $contact;
	var $about;

	$(document).ready(function(){
		$slogans = $('#directives li');

		$cc = $('#content_container');
		$contact = $('#contact');
		$about = $('#about');

		$('#brand_bar').find('.brand_link')
			.click(closeClicked);

		var $menu = $('#menu');

		$menu.find('.contact_us').click(contactClicked);
		$menu.find('.about_us').click(aboutClicked);

		$cc.children('.close_link')
			.click(closeClicked);

		populateContactInfo();

		setTimeout(showNext, showDuration);
	});

	function populateContactInfo(){
		var contact = $('#contact').children('.info');

		
		$('<span>196 Hartford<br />Newport Beach, CA 92660</span>')
			.appendTo(contact.children('.address'));
		$('<a href="tel:9498873176">(949) 887-3176</a>')
			.appendTo(contact.children('.phone'));
		$('<a href="mailto:contact@brokengravity.com" 	target="_blank">contact@brokengravity.com</a>')
			.appendTo(contact.children('.email'));
	}

	function closeClicked(){
		$cc.fadeOut('slow');
	}

	function contactClicked(){
		if($cc.is(':visible')){
			$about.fadeOut('slow', function(){
				$contact.fadeIn('slow');
			});

			return;
		}

		$about.hide();
		$contact.show();
		$cc.fadeIn('slow');		
	}

	function aboutClicked(){
		if($cc.is(':visible')){
			$contact.fadeOut('slow', function(){
				$about.fadeIn('slow');
			});

			return;
		}

		$contact.hide();
		$about.show();
		$cc.fadeIn('slow');
	}

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