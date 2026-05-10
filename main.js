/* =====================================================
   main.js — shared behaviour for all pages
   ===================================================== */

(function () {
    'use strict';

    /* --------------------------------------------------
       1. Mark the current nav link as active
    -------------------------------------------------- */
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var navLinks = document.querySelectorAll('.nav-item, .mobile-nav-item');
    navLinks.forEach(function (link) {
        var href = link.getAttribute('href');
        if (href === currentPage ||
            (currentPage === 'index.html' && (href === 'index.html' || href === './')) ||
            (currentPage !== 'index.html' && href === currentPage)) {
            link.classList.add('active-link');
        }
    });

    /* --------------------------------------------------
       2. Hamburger / mobile menu toggle
    -------------------------------------------------- */
    var hamburger = document.getElementById('hamburger-btn');
    var mobileMenu = document.getElementById('mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
        });

        /* Close when a link inside the menu is clicked */
        mobileMenu.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
            });
        });

        /* Close when clicking outside */
        document.addEventListener('click', function (e) {
            if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
            }
        });
    }

    /* --------------------------------------------------
       3. Scroll-reveal for .reveal elements
    -------------------------------------------------- */
    var revealEls = document.querySelectorAll('.reveal');

    function onScroll() {
        revealEls.forEach(function (el) {
            var rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                el.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); /* run once on load */

})();
