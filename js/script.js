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

    // --- Function for Mobile Navigation Toggle ---
    function toggleMobileNav() {
        // We now have multiple .main-nav elements, so we select them all
        const navElements = document.querySelectorAll('.main-nav');
        navElements.forEach(nav => {
            nav.classList.toggle('nav-open');
        });
        navToggle.classList.toggle('active');   // Animate hamburger icon
    }

    // --- Function to Set Active Navigation Link ---
    function setActiveNavLink() {
        const navLinks = document.querySelectorAll('.main-nav a'); // Select all nav links
        if (navLinks.length === 0) return;

        let currentPage = window.location.pathname.split('/').pop();
        if (currentPage === '' || currentPage === 'index.html') {
            currentPage = 'index.html';
        }

        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
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

    if (navToggle) {
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
