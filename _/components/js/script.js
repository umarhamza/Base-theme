// counters
(function() {

	//console.log( counters.getAttribute('data-counter') );

	// for (var i = 0; i < counterTitles.length; i++) {
	//
	//  numbers = parseFloat( counterTitles[i].innerText.replace(/,/g, '') );
	//
	//  countUp(increment);
	//
	//  counterTitles[i].innerText = increment;
	//
	//  console.log(increment);
	//
	// } // for loop to loop over counterTitles


	var counterTitles = document.querySelectorAll('.counters .pod h4'),
			//counterTitles = document.querySelector('.counters .pod h4'),
			numbers,
			countUp,
			increment = 0;

//counterTitles.forEach(startTimer);

// testing

function startTimer(argument) {

console.log(index);

	numbers = parseFloat( counterTitles[index].innerText.replace(/,/g, '') );

	timer = setInterval(function() {
	  increment++;
		//console.log(increment);

		// multiply increment var
		if ( increment === 500 ) {
			increment = numbers;
			clearInterval( timer );
		}

		// print out numbers
		counterTitles.innerText = increment;

	}, 0.05);
} // startTimer func

})(); // counters ife

// search bar and mobile button
(function() {

"use strict"

// variables
var headerSearchBar = document.getElementById('header-search-bar'),
	searchButton = document.getElementById('search-btn').parentNode,
	mobileMenu = document.getElementById('mobile-menu'),
	branding = document.querySelector('.branding'),
	body = document.body,
	navBar = document.getElementById('navbar'),
	searchCloseBtn = document.getElementById('search-close-btn');

searchButton.addEventListener('click', function() {
	headerSearchBar.classList.toggle('show');
	body.classList.toggle('clicked');
}, false);

searchCloseBtn.addEventListener('click', function(e) {
	headerSearchBar.classList.toggle('show');
	e.preventDefault();
}, false);

mobileMenu.addEventListener('click', function(e) {
	body.classList.toggle('clicked');
	//mobileMenu.classList.toggle('clicked');
	branding.classList.toggle('clicked');
}, false);

})(); // search bar and mobile button ife

//carousel
(function() {
	"use strict"

	var	carouselRow = document.querySelector('.carousel'),
		buttons = carouselRow.querySelectorAll('.arrows'),
		carouselWrap = carouselRow.querySelector('.pod-wrap'),
		carousel = carouselWrap.querySelector('.overflow-scroll'),
		imgs = carouselWrap.querySelectorAll('.col'),
		imgWidth = imgs[0].clientWidth, // 253
		imgMarginR =  parseInt(window.getComputedStyle(imgs[0], null).getPropertyValue("margin-right")),
		widthMargin =  imgWidth + imgMarginR, // 278
		loc = 0,
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
	carouselRow.addEventListener('click', function (e) {
		if (e.target.hasAttributes('data-dir') == true) {

		var direction = e.target.getAttribute('data-dir');

		// update current value
		//(direction === 'next') ? ++current : --current;  //terinery operator for

		if (direction === 'next') {

				// Are we at the end? Should we reset
				if(current === Math.ceil(imgLen / 2)){
					// send back to the first image
					current = 1;
					loc = 0;
				} else {
					// increment current and location
					current += 1;
					loc += widthMargin;
				};// check if at end else move

				//call transition Right
				transitionRight(loc);

		} // if next

		 	if (direction === 'prev') {

				// Are we going beyond the first image
				if (current === 1) {
					current = Math.ceil(imgLen / 2); // change current to Math.ceil(7 / 2) = 4
					loc = widthMargin * Math.floor(imgLen / 2); // change loc to 3
					//direction = 'next';
				} else {
					// decrement current and location
					current -= 1;
					loc -= widthMargin;
				}; // if beyond end or else move

				// Call transition Left
				transitionLeft(loc);

		}; // if prev

		}; // if has class arrow
	}, false);

	function transitionRight(locationR) {
		carousel.style.marginLeft = '-' + locationR + 'px';
	} //transitionRight

	function transitionLeft(locationL) {
		carousel.style.marginLeft = '-' + locationL + 'px';
	}//transitionLeft

})(); // ife carousel

// scroll func
(function() {
	"use strict"

	var header = document.querySelector('#header'),
		shrinkOn = 200;

	// JS Media Query
	// mq = window.matchMedia( "(min-width: 997px)" );
	// if (mq.matches) {} // JS Media Query

	window.addEventListener('scroll', function scrollFunc() {

			var distanceY = window.pageYOffset || document.documentElement.scrollTop;

			if (distanceY > shrinkOn) {
				header.className = 'shrink-header';
				//window.removeEventListener(scroll, scrollFunc, false);
			} else {
				header.removeAttribute('class', 'shrink-header');

			};

	}, false); // scroll evt listener
})(); // scroll ife
