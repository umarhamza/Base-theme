(function() {

"use strict"

// variables
var headerSearchBar = document.querySelector('#header-search-bar'),
	searchButton = document.querySelector('#search-btn');

searchButton.addEventListener('click', function() {
	headerSearchBar.classList.toggle('show');
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
		imgWidth = imgs[0].clientWidth, // 270
		imgMarginR =  parseInt(window.getComputedStyle(imgs[0]).getPropertyValue("margin-right")),
		widthMargin =  imgWidth + imgMarginR,
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
		if (current === 0) {
			current = imgLen;
			direction = 'next';
		} else if(current - 1 === imgLen){
			current = 1;
		}

			carousel.style.marginLeft = '-' + widthMargin + 'px';

			widthMargin = widthMargin + widthMargin;

		console.log(widthMargin);


		transition();

			
		}; // if has class arrow
	}, false);

function transition() {

}
	console.dir(carousel);

})();  
