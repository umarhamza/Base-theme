(function() {

"use strict"

// variables
var headerSearchBar = document.querySelector('#header-search-bar'),
	searchButton = document.querySelector('#search-btn');

searchButton.addEventListener('click', function() {
	headerSearchBar.classList.toggle('show');
}, false);

})();
