function showSection(section) {
  closeNav();
  const sections = document.querySelectorAll("div.section");
  for(item of sections) {
    item.classList.add("hidden");
  }
  document.getElementById(section).classList.remove("hidden");
}

function checkWidth() {
  console.log(`Inner width is: ${window.innerWidth}`)
  if(window.innerWidth < 500) {
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("menu-btn").classList.remove("hidden");
  }
  else {
    document.getElementById("menu").classList.remove("hidden");
    document.getElementById("menu-btn").classList.add("hidden");
  }
}

/*
window.onload = checkWidth();
window.onresize = checkWidth();
*/

window.addEventListener('resize', checkWidth);
window.addEventListener('load', checkWidth);

/*
function reportWindowSize() {
  console.log(`Inner width is: ${window.innerWidth}`)
}
*/

/*
window.onresize = function() {
  if(window.innerWidth < 400) {
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("menu-btn").classList.remove("hidden");
  }
  else {
    document.getElementById("menu").classList.remove("hidden");
    document.getElementById("menu-btn").classList.add("hidden");
  }
};
*/
// When the user scrolls the page, execute myFunction
/*
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
*/

// Open when someone clicks on the span element
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

// Close when someone clicks on the "x" symbol inside the overlay
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Set the date we're counting down to
var countDownDate = new Date("Sep 3, 2022 11:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);