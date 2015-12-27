(function() {

"use strict"

// variables
var headerSearchBar = document.getElementById('header-search-bar'),
	searchButton = document.getElementById('search-btn'),
	mobileMenu = document.getElementById('mobile-menu'),
	navBar = document.getElementById('navbar');

searchButton.addEventListener('click', function() {
	headerSearchBar.classList.toggle('show');
}, false);

mobileMenu.addEventListener('click', function() {
	navBar.classList.toggle('show');
}, false);

})();

//carousel
(function() {
	"use strict"

	var	buttonWrap = document.querySelector('.carousel-title'),
		buttons = buttonWrap.querySelectorAll('.arrows'),
		carouselWrap = document.querySelector('.carousel .pod-wrap'),
		carousel = carouselWrap.querySelector('.overflow-scroll'),
		imgs = carouselWrap.querySelectorAll('.col'),
		imgWidth = imgs[0].clientWidth, // 253
		imgMarginR =  parseInt(window.getComputedStyle(imgs[0], null).getPropertyValue("margin-right")),
		widthMargin =  imgWidth + imgMarginR, // 278
		loc = widthMargin, // 278
		imgLen = imgs.length, // 6
		current = 1,
		totalImgWidth = imgLen * imgWidth; // 1620


	// making carousel buttons visible

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].style.display = 'block';
	};

	// removes carousel scroll bar and sets it to hidden
	carouselWrap.style.overflow = 'hidden';

	// listen for button click
	buttonWrap.addEventListener('click', function (e) {
		if (e.target.classList.contains('arrows') == true) {

		var direction = e.target.getAttribute('data-dir');
		// update current value
		(direction === 'next') ? ++current : --current;  //terinery operator for if (direction === 'next') { current += 1; } else {current -= 1};

		// if first image
		if (current === 0) { // are we going beyond the first image
			current = imgLen; // change current to 6
			loc = totalImgWidth;
			direction = 'next';
		} else if(current - 1 === imgLen){ // are we at the end? Should we reset
			current = 1; // send back to the first image
			loc = 0;
		}

		transition(carousel, direction, widthMargin);

// my code : moving things forward
// carousel.style.marginLeft = '-' + counter + 'px';
// counter += widthMargin;

		}; // if has class arrow
	}, false);

//transition function
function transition( container, direction, width ) {

	var unit; // - or +

	if (direction && loc !== 0) {
		unit = (direction === 'next') ? '-' : '+';
	};

	container.style.marginLeft = '-' + loc + 'px';

	loc += width;

}

})();

// scroll func
(function() {
	//"use strict"

	var header = document.querySelector('#header'),
		shrinkOn = 600;

		// var mq = window.matchMedia( "(min-width: 997px)" );
		// if (mq.matches) { } // JS Media query

	window.addEventListener('scroll', function scrollFunc() {

		var distanceY = window.pageYOffset || document.documentElement.scrollTop;

		if (distanceY > shrinkOn) {
			header.className = 'shrink-header';
			//window.removeEventListener(scroll, scrollFunc, false);
		} else {
			header.removeAttribute('class', 'shrink-header');

		};

	}, false); // scroll evt listener
})();
