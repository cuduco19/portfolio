/**
 * Handles contact form submission via Formspree and displays accessible inline status feedback.
 */
export function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const statusMsg = document.createElement('p');
    statusMsg.id = 'form-status';
    statusMsg.setAttribute('role', 'status');
    statusMsg.setAttribute('aria-live', 'polite');
    form.appendChild(statusMsg);

    // Track active timeout ID to prevent race conditions on rapid resubmissions
    let statusTimeoutId;

    form.addEventListener('submit', async e => {
        e.preventDefault();

        // Cancel any pending hide timer from a previous submission
        clearTimeout(statusTimeoutId);

        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        statusMsg.textContent = 'Sending...';
        statusMsg.classList.add('visible');

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                statusMsg.textContent = 'Thanks! Your message was sent.';
                form.reset();
            } else {
                statusMsg.textContent = 'Oops! There was a problem sending your message.';
            }
        } catch {
            statusMsg.textContent = 'Network error. Please try again later.';
        } finally {
            submitBtn.disabled = false;

            // Schedule a fresh 5-second hide timer
            statusTimeoutId = setTimeout(() => {
                statusMsg.textContent = '';
                statusMsg.classList.remove('visible');
            }, 5000);
        }
    });
}