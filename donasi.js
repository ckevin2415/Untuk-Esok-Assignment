/* =====================================================
   donasi.js — 2-step donation form logic
   ===================================================== */

(function () {
    'use strict';

    var amountInput   = document.getElementById('donation-amount');
    var totalDisplay  = document.getElementById('total-display');
    var totalDisplay2 = document.getElementById('total-display-2');
    var summaryAmount = document.getElementById('summary-amount');
    var btnNext       = document.getElementById('btn-next');
    var btnBack       = document.getElementById('btn-back');
    var step1         = document.getElementById('step-1');
    var step2         = document.getElementById('step-2');
    var step1Circle   = document.getElementById('step1-circle');
    var step2Circle   = document.getElementById('step2-circle');

    function formatIDR(value) {
        if (!value) return '0';
        return new Intl.NumberFormat('id-ID').format(parseInt(value, 10));
    }

    function updateTotal(raw) {
        var formatted = 'Rp ' + formatIDR(raw);
        if (totalDisplay)  totalDisplay.textContent  = formatted;
        if (totalDisplay2) totalDisplay2.textContent = formatted;
        if (summaryAmount) summaryAmount.textContent  = formatted;
    }

    /* Live input — numbers only */
    if (amountInput) {
        amountInput.addEventListener('input', function () {
            var raw = this.value.replace(/\D/g, '');
            if (raw.length > 12) raw = raw.slice(0, 12);
            this.value = raw;
            updateTotal(raw);
            if (btnNext) {
                btnNext.disabled = !raw || parseInt(raw, 10) <= 0;
            }
        });
    }

    /* Go to step 2 */
    if (btnNext) {
        btnNext.addEventListener('click', function () {
            if (step1) step1.classList.remove('active');
            if (step2) step2.classList.add('active');
            if (step2Circle) step2Circle.classList.add('active');
        });
    }

    /* Go back to step 1 */
    if (btnBack) {
        btnBack.addEventListener('click', function () {
            if (step2) step2.classList.remove('active');
            if (step1) step1.classList.add('active');
            if (step2Circle) step2Circle.classList.remove('active');
        });
    }

})();
