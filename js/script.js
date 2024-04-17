const header = document.querySelector("header");
const navbar = document.querySelector('.navbar'); // Select the navbar element for color change
const logo = document.querySelector('.logo'); // Select the logo element
const logoSub = document.querySelector('.logo--sub');

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);

  // Update navbar color based on scroll position (adjust threshold as needed)
  if (window.scrollY > 50) { // Change color after 50px scroll (adjust as needed)
    navbar.classList.add('scrolled'); // Add class for scrolled state
    logo.classList.add('scrolled'); // Add class for scrolled state to logo
    logoSub.classList.add('scrolled'); // Add class for scrolled state to logo sub
  } else {
    navbar.classList.remove('scrolled'); // Remove class for default color
    logo.classList.remove('scrolled'); // Remove class for default color from logo
    logoSub.classList.remove('scrolled'); // Remove class for default color from logo sub
  }
});

// For responsive menu
let menu = document.querySelector('#menu-icon')

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  navbar.classList.toggle('open')
}

window.onscroll = () => {
  menu.classList.remove('bx-x')
  navbar.classList.remove('open')
}

// For revealing text on scrolling
const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  reset: true
});

sr.reveal('.home-text', { delay: 200, origin: 'left' });

sr.reveal('.container, .about, .menu, .contact', { delay: 200, origin: 'bottom' });

