/* control the countdown clock */
// Reference: https://www.geeksforgeeks.org/create-countdown-timer-using-javascript/
var deadline = new Date("may 10, 2020 17:00:00").getTime(); // get the museum open time
var x = setInterval(function() { 
  var now = new Date().getTime(); 
  var left = Math.floor((deadline - now) / 1000); // get the time left
  left = Number(left).toLocaleString(); // change the format
  document.getElementById("myleft").innerHTML = left;  // input to html
  if (left < 0) {// if it is the time to open, then left = 0
    clearInterval(x); 
    document.getElementById("myleft").innerHTML = '0';
  }
}, 1000); 

/* control the image slide show */
// Reference: https://www.w3schools.com/howto/howto_js_slideshow.asp
function showSlide(n) {
  var i;
  // store all images into list slides
  var slides = document.getElementsByClassName("slide");
  // store all images as list dots
  var dots = document.getElementsByClassName("dot");
  // if current ind = 3, +1 will change to the first image
  if (n > slides.length) {
    slide_ind = 1
  }
  // if curr ind = 0, -1 will change to the last image
  if (n < 1) {
    slide_ind = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    // set all images to not display at first
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    // set all dots as non-active at first
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // base on the given slide_ind, to display the specific image and set the dot to be active
  slides[slide_ind-1].style.display = "block";
  dots[slide_ind-1].className += " active";
}
// initially show the first image
var slide_ind = 1;
showSlide(slide_ind);

// Next/previous controls
function changeSlide(n) {
  showSlide(slide_ind += n);
}

// use dot to control images
function currentSlide(n) {
  showSlide(slide_ind = n);
}