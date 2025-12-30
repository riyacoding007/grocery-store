// 1. Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open (optional)
        const nav = document.querySelector('nav');
        if (nav.classList.contains('active')) {
             nav.classList.remove('active');
        }
    });
});


const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".navbar");
const root = document.documentElement;

menuToggle.addEventListener("click", () => {
  root.classList.toggle("menu-open");
});

// Close menu when a nav link is clicked
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    root.classList.remove("menu-open");
  });
});



// Site Loader
// window.addEventListener("load", () => {
//   const loader = document.getElementById("site-loader");
//   loader.classList.add("hidden");
// });

const loader = document.getElementById("site-loader");

const MIN_LOADER_TIME = 3200; // must match animation duration
let pageLoaded = false;
let minTimePassed = false;

// Page load flag
window.addEventListener("load", () => {
  pageLoaded = true;
  tryHideLoader();
});

// Minimum animation time
setTimeout(() => {
  minTimePassed = true;
  tryHideLoader();
}, MIN_LOADER_TIME);

// Hide only when BOTH conditions are true
function tryHideLoader() {
  if (pageLoaded && minTimePassed) {
    loader.classList.add("hidden");
  }
}
