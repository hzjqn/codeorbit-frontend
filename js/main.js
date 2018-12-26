var state = 0;
var activeSection = 0;
var scrollable = true;

window.setInterval( function(){
	state = 0;
}, 500);

$(document).ready(function(){
	var $window = $(window);
	var lastScrollTop = 0;
	var scrollDirection = 0;
	var currentSection = 0;
	var $body = $('#body');
	var maxSections = $body.data('maxs').value;


	$('.menu-btn').on('click', function(){
		$('.'+$(this).data('target')).toggleClass('active');
			if (scrollable) {
				scrollable = false;
			} else if (!scrollable){
				scrollable = true;
			}
	})
	$(window).on('swipedown', function(){
		changeSection(0);
	});

	$(window).on('swipeup', function(){
		changeSection(1);
	});

	$(window).bind('mousewheel', function(event) {
	    if (event.originalEvent.wheelDelta >= 0) {
	        changeState(0);
	        console.log('state: '+state);
	    }
	    else {
	        changeState(1);
	        console.log('state: '+state);
	    }
	});

	
	$(window).bind('mousewheel', function(){
			if (state < -5 && scrollable) {
				changeSection(0);
				state = 0;
			} else if (state > 5 && scrollable) {
				changeSection(1);
				state = 0;
			}

		});

	function changeState(a) {
		if (a == 0) {
			state = state - 1;
			console.log('f1')
		}

		if (a == 1) {
			state = state + 1;
			console.log('f3')
		}
	}

	function changeSection(a){
		if (a == 1) {
			if (currentSection < 2) {
				currentSection++;
				animateUI();
			} else {
				currentSection = 2;
			}
		}
		else {
			if (currentSection > 0) {
				currentSection--;
				animateUI();
			} else {
				currentSection = 0;
			}
		}
	}

	function animateUI(){
		if (currentSection == 0){
			$body.addClass('state0');
			$body.removeClass('state1');
			$body.removeClass('state2');
			console.log('section: home')
		} else if (currentSection == 1) {
			$body.addClass('state1');
			$body.removeClass('state0');
			$body.removeClass('state2');
			console.log('section: portfolio')
		} else if (currentSection == 2) {
			$body.addClass('state2');
			$body.removeClass('state0');	
			$body.removeClass('state1');		
			console.log('section: blog')
		}
	}

	}
);
