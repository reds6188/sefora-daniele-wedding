// Show menu button (for mobile) or extend menu (for desktop) ---------------------------

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

window.addEventListener('load', checkWidth);	// Rendering on window load
window.addEventListener('resize', checkWidth);	// Rendering on window resize

//---------------------------------------------------------------------------------------

function showSection(section) {
	closeNav();
	const sections = document.querySelectorAll("div.section");
	for(item of sections) {
	  item.classList.add("hidden");
	}
	document.getElementById(section).classList.remove("hidden");
  }

// Open when someone clicks on the span element
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

// Close when someone clicks on the "x" symbol inside the overlay
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Countdown ----------------------------------------------------------------------------

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
  document.getElementById("countdown").innerHTML = days + " giorni " + hours + " ore "
  + minutes + " minuti " + seconds + " secondi ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);