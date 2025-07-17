// Portfolio Website - Samara
// script.js
// Main script file for portfolio website interactions.

document.addEventListener('DOMContentLoaded', function() {
    'use strict'; // Enable strict mode

    console.log('Portfolio website script initialized.');

    // --- Cache DOM Elements ---
    const siteHeader = document.querySelector('.site-header');

    // --- Function for Header Scroll Effect ---
    function handleHeaderScroll() {
        if (window.scrollY > 50) { // Add 'scrolled' class after 50px of scroll
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    }

    // --- Function for Mobile Navigation Toggle ---
    function toggleMobileNav() {
        if (mainNav) { // Ensure mainNav exists
            mainNav.classList.toggle('nav-open'); // Toggle visibility of the nav menu
        }
        navToggle.classList.toggle('active');   // Animate hamburger icon
    }

    // --- Function to Set Active Navigation Link ---
    function setActiveNavLink() {
        const navLinks = document.querySelectorAll('.main-nav a:not(.logo-link)'); // Select all nav links, excluding the logo
        if (navLinks.length === 0) return;

        let currentPage = window.location.pathname.split('/').pop();
        // Treat both no-file path and index.html as the home page for highlighting
        if (currentPage === '') {
            currentPage = 'index.html';
        }

        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();

            // Special handling for the 'My Work' link on the home page.
            // If we are on index.html, no link should be active.
            if (currentPage === 'index.html') {
                 link.classList.remove('active');
                 return; // Exit the loop for this link
            }

            if (linkPage === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // --- Attach Event Listeners ---
    if (siteHeader) {
        window.addEventListener('scroll', handleHeaderScroll);
    }

    // --- Initialize Functions ---
    setActiveNavLink(); // Set active link on page load

    // --- Placeholder for Home page "Latest Works" hover interaction (if JS is needed beyond CSS) ---
    // Example:
    // const latestWorkItems = document.querySelectorAll('.latest-works-grid .work-item');
    // latestWorkItems.forEach(item => {
    //     item.addEventListener('mouseenter', function() { /* ... */ });
    //     item.addEventListener('mouseleave', function() { /* ... */ });
    // });
    console.log('Event listeners attached and initial functions executed.');
});
