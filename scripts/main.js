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

// 3. Handle contact form submission
const form = document.getElementById('contactForm');
if (form) {
    // Create status message element dynamically so you don't have to edit HTML
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

        // Hide the message after 5 seconds
        setTimeout(() => {
            statusMsg.textContent = '';
            statusMsg.classList.remove('visible');
        }, 5000);
    });
}

// 4. Click-to-zoom Lightbox for Project Screenshots
const projectImages = document.querySelectorAll('.card img');

if (projectImages.length > 0) {
    // Create lightbox container dynamically
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Project screenshot preview');

    const lightboxImg = document.createElement('img');
    lightbox.appendChild(lightboxImg);
    document.body.appendChild(lightbox);

    // Helper functions to open and close consistently
    const openLightbox = (img) => {
        lightboxImg.src = img.currentSrc || img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock background scroll
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore background scroll
    };

    // Open when clicking any project image
    projectImages.forEach(img => {
        img.addEventListener('click', () => openLightbox(img));
    });

    // Close when clicking outside the image (on the dark overlay)
    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close when pressing the Escape key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}