// Select the hamburger menu button
const mobileMenu = document.getElementById('mobile-menu');

// Select the navigation links container
const navbarLinks = document.querySelector('.nav-links');

// Event listener to toggle the menu's visibility on click
mobileMenu.addEventListener('click', () => {
    // Toggle the 'active' class on the nav-links element
    navbarLinks.classList.toggle('active');
});