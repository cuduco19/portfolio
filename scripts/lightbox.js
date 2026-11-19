/**
 * Creates a click-to-zoom lightbox modal for project card screenshots.
 */
export function initLightbox() {
    const projectImages = document.querySelectorAll('.card img');
    if (projectImages.length === 0) return;

    // Create accessible lightbox overlay dynamically
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Project screenshot preview');

    const lightboxImg = document.createElement('img');
    lightbox.appendChild(lightboxImg);
    document.body.appendChild(lightbox);

    // Open modal and lock background page scroll
    const openLightbox = (img) => {
        lightboxImg.src = img.currentSrc || img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Close modal and restore background page scroll
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    // Trigger lightbox when clicking any project screenshot
    projectImages.forEach(img => {
        img.addEventListener('click', () => openLightbox(img));
    });

    // Close when clicking outside the image (on the dark backdrop)
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