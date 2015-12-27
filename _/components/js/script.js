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
		//(direction === 'next') ? ++current : --current;  //terinery operator for

		if (direction === 'next') {
			current += 1;
		}
		else {
			current -= 1;
			console.log('before: ' + loc);
			loc -= widthMargin;
			console.log('after: ' + loc);
		};

		// if first image
		if (current === 0) { // are we going beyond the first image
			current = imgLen; // change current to 6
			loc = totalImgWidth;
			direction = 'next';
		} else if(current - 1 === imgLen){ // are we at the end? Should we reset
			current = 1; // send back to the first image
			loc = 0;
		}

		output(e);


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

	} // transition func

		// output panel show
		var outputPanel = document.createElement('div'),
				d_direction = document.createElement('div'),
				d_loc = document.createElement('div'),
				d_totalImgWidth = document.createElement('div'),
				d_current = document.createElement('div'),
				carouselRow = document.getElementById('row5');

		d_direction.id = 'd_direction';
		d_loc.id = 'd_loc';
		d_totalImgWidth.id = 'd_totalImgWidth';
		d_current.id = 'd_current';

		// styling panel
		outputPanel.innerHTML = 'This is the output panel';
		outputPanel.style.border = '1px solid tomato';
		outputPanel.style.background = 'white';
		outputPanel.style.position = 'absolute';
		outputPanel.style.top = '0px';
		outputPanel.style.height = '150px';
		outputPanel.style.width = '300px';

		// adding panel to row
		carouselRow.appendChild(outputPanel);

		outputPanel.appendChild(d_direction);
		outputPanel.appendChild(d_loc);
		outputPanel.appendChild(d_totalImgWidth);
		outputPanel.appendChild(d_current);

		function output(evt) {

				// adding stuff to panel
				// outputPanel.appendChild(loc);
				// outputPanel.appendChild(totalImgWidth);
				d_direction.innerHTML = 'Direction: ' + evt.target.getAttribute('data-dir');
				d_loc.innerHTML = 'Location: ' + loc;
				d_totalImgWidth.innerHTML = 'Moved along: ' + totalImgWidth;
				d_current.innerHTML = 'Current count: ' + current;

			//	console.log(direction);
				console.log("console");

		} // output panel


})(); // ife carousel

// scroll func
// (function() {
// 	"use strict"
//
// 	var header = document.querySelector('#header'),
// 		shrinkOn = 600;
//
// 	// JS Media Query
// 	// mq = window.matchMedia( "(min-width: 997px)" );
// 	// if (mq.matches) {} // JS Media Query
//
// 	window.addEventListener('scroll', function scrollFunc() {
//
// 			var distanceY = window.pageYOffset || document.documentElement.scrollTop;
//
// 			if (distanceY > shrinkOn) {
// 				header.className = 'shrink-header';
// 				//window.removeEventListener(scroll, scrollFunc, false);
// 			} else {
// 				header.removeAttribute('class', 'shrink-header');
//
// 			};
//
// 	}, false); // scroll evt listener
// })(); // scroll ife
