$(function(){
    //this code will execute after the DOM is loaded
	var carouselList = $("#carousel ul");
	setInterval(changeSlide, 3000);
	function changeSlide(){
		carouselList.animate({'marginLeft':-600}, 500, changePosition);
	};

	function changePosition(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
	    lastItem.after(firstItem);
	    carouselList.css({marginLeft:0});
	 }; 
});
//przypisujemy do zmiennej liste elementów
