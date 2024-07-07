document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.getElementById('close-btn');

    document.querySelectorAll('.gallery img').forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'block';
            //lightboxImage.src = this.src.replace('thumb/', '');
            lightboxImage.src = this.src;
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
