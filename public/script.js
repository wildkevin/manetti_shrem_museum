// Reference: https://www.geeksforgeeks.org/create-countdown-timer-using-javascript/

var deadline = new Date("may 10, 2020 17:00:00").getTime(); 
var x = setInterval(function() { 
  var now = new Date().getTime(); 
  var left = Math.floor((deadline - now) / 1000);
  left = Number(left).toLocaleString();
  document.getElementById("myleft").innerHTML = left;  
  if (left < 0) {
    clearInterval(x); 
    document.getElementById("myleft").innerHTML = '0';
  }
}, 1000); 


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}