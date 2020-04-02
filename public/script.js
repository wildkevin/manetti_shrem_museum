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