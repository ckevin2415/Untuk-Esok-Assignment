/* =====================================================
   slideshow.js — Hero banner auto-slideshow
   Only used on index.html
   ===================================================== */

(function () {
    'use strict';

    var slides = document.querySelectorAll('.hero-slideshow .slide');
    if (!slides.length) return;

    var current = 0;

    function showSlide(index) {
        slides.forEach(function (slide) {
            slide.classList.remove('slide-active');
            slide.classList.add('slide-inactive');
        });
        slides[index].classList.add('slide-active');
        slides[index].classList.remove('slide-inactive');
    }

    setInterval(function () {
        current = (current + 1) % slides.length;
        showSlide(current);
    }, 5000);

})();
