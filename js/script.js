// Portfolio Website - Samara
// script.js
// Main script file for portfolio website interactions.

document.addEventListener('DOMContentLoaded', function() {
    'use strict'; // Enable strict mode

    console.log('Portfolio website script initialized.');

    // --- Cache DOM Elements ---
    const siteHeader = document.querySelector('.site-header');
    const navToggle = document.querySelector('.nav-toggle'); // Hamburger button
    const mainNav = document.querySelector('.main-nav');     // <nav> element containing the ul

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
        const navLinks = mainNav ? mainNav.querySelectorAll('a') : [];
        if (navLinks.length === 0) return; // No nav links found

        let currentPage = window.location.pathname.split('/').pop();
        if (currentPage === '' || currentPage === 'index.html') { // Consistent handling for root/index
            currentPage = 'index.html';
        }

        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
            if (linkPage === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active'); // Ensure only current page is active
            }
        });
    }

    // --- Attach Event Listeners ---
    if (siteHeader) {
        window.addEventListener('scroll', handleHeaderScroll);
    }

    if (navToggle) { // Check if navToggle exists before adding listener
        navToggle.addEventListener('click', toggleMobileNav);
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
