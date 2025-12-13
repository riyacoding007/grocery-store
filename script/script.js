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

// 2. Mobile Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// (You'd need to add CSS media queries for the mobile menu to work visually)