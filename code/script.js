document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling behavior to navigation links
    document.querySelectorAll('nav a').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            // Prevent the default behavior of jumping directly to the section
            event.preventDefault();

            // Get the target section ID from the href attribute
            const targetSection = document.querySelector(anchor.getAttribute('href'));

            // Smoothly scroll to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth', // Enables smooth scrolling
                block: 'start',     // Aligns to the top of the section
            });
        });
    });

    // Select the hamburger menu button and nav links container
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    // Add click event listener to toggle the 'active' class
    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
