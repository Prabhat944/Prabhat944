// Animations JavaScript File

// Fade in on scroll using Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    // Create Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '<i class="fa fa-arrow-up"></i>';
    backToTopButton.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopButton);

    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Smooth scroll to top
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scroll for non-page-scroll links (jQuery handles .page-scroll)
    document.querySelectorAll('a[href^="#"]:not(.page-scroll)').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target && typeof $ !== 'undefined') {
                    e.preventDefault();
                    const offsetTop = target.offsetTop - 60;
                    $('html, body').stop(true, false).animate({
                        scrollTop: offsetTop
                    }, 1000, 'swing');
                }
            }
        });
    });

    // Add hover effects to skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add animation to achievement boxes
    const achievementBoxes = document.querySelectorAll('.achievement-box');
    achievementBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Removed parallax effect as it interferes with smooth scrolling
// If needed, use CSS transform with will-change for better performance
