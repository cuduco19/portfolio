/**
 * Handles contact form submission and displays an accessible inline status message.
 */
export function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    // Create status message element dynamically so HTML stays clean
    const statusMsg = document.createElement('p');
    statusMsg.id = 'form-status';
    statusMsg.setAttribute('role', 'status');
    statusMsg.setAttribute('aria-live', 'polite');
    form.appendChild(statusMsg);

    form.addEventListener('submit', e => {
        e.preventDefault();

        statusMsg.textContent = 'Thanks! Your message was sent.';
        statusMsg.classList.add('visible');
        form.reset();

        // Hide confirmation message after 5 seconds
        setTimeout(() => {
            statusMsg.textContent = '';
            statusMsg.classList.remove('visible');
        }, 5000);
    });
}