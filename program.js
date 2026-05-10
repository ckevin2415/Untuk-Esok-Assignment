/* =====================================================
   program.js — sort dropdown toggle for program.html
   ===================================================== */

(function () {
    'use strict';

    var sortBtn  = document.getElementById('sort-btn');
    var sortMenu = document.getElementById('sort-menu');

    if (!sortBtn || !sortMenu) return;

    /* Toggle dropdown */
    sortBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        var isOpen = sortMenu.classList.toggle('open');
        sortBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    /* Close when clicking outside */
    document.addEventListener('click', function () {
        sortMenu.classList.remove('open');
        sortBtn.setAttribute('aria-expanded', 'false');
    });

    /* Sort handler */
    var programList = document.getElementById('program-list');

    sortMenu.querySelectorAll('a[data-sort]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var type = this.getAttribute('data-sort');
            var items = Array.prototype.slice.call(programList.querySelectorAll('.program-list-item'));

            items.sort(function (a, b) {
                var titleA = a.querySelector('.pli-title').textContent.trim();
                var titleB = b.querySelector('.pli-title').textContent.trim();

                if (type === 'name') {
                    return titleA.localeCompare(titleB, 'id');
                }
                /* For latest/oldest we just reverse the DOM order used as proxy */
                if (type === 'oldest') {
                    return titleA.localeCompare(titleB, 'id');
                }
                /* Default / latest — keep natural order */
                return 0;
            });

            /* Re-append in new order */
            items.forEach(function (item) {
                programList.appendChild(item);
            });

            sortMenu.classList.remove('open');
            sortBtn.setAttribute('aria-expanded', 'false');
        });
    });

})();
