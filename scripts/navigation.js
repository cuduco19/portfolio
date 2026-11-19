/**
 * Initializes dynamic footer copyright year and smooth anchor scrolling.
 */
export function initNavigation() {
    // 1. Auto-update copyright year
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // 2. Smoothly scroll any internal "#" link (including "View My Work")
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.length > 1) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    e.preventDefault();
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}