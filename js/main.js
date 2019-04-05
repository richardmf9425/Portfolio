// Select items from the DOM

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');


const navItems = document.querySelectorAll('.nav-item');

// Set initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBtn.classList.remove('menu-btn-back');

    // menuBranding.classList.add('show');

    navItems.forEach(item => item.classList.add('show'));
    // set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    // menuBranding.classList.remove('show');
    menuBtn.classList.add('menu-btn-back');

    navItems.forEach(item => item.classList.remove('show'));
    // set menu state
    showMenu = false;
  }
}

// remove logo icon when scroll
window.onscroll = () => {
  const logo = document.querySelector('.logo');
  const navbar = document.querySelector('.menu-nav');
  const topButton = document.querySelector('.top-button');
  if (this.scrollY <= 10) {
    logo.classList.remove('scroll');
    navbar.classList.remove('scroll');
    topButton.classList.add('scroll');
  } else {
    logo.classList.add('scroll');
    navbar.classList.add('scroll');
    topButton.classList.remove('scroll');
  }
};
