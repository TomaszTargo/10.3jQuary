$(function(){
    //this code will execute after the DOM is loaded
});
//przypisujemy do zmiennej liste elementów
var carouselList = $("#carousel ul");

var changeSlide;
function moveFirstSlide(){
    setTimeout(changeSlide, 3000);
};

carouselList.animate({'marginLeft':-600}, 5000, moveFirstSlide);
carouselList.animate({'marginLeft':-1200}, 5000, moveFirstSlide);
carouselList.animate({'marginLeft':-1800}, 5000, moveFirstSlide);
carouselList.animate({'marginLeft':-2400}, 5000, moveFirstSlide);


var firstItem = carouselList.find("li:first");
var lastItem = carouselList.find("li:last");

function changePosition(){
    lastItem.after(firstItem)
    carouselList.css({marginLeft:0});
};