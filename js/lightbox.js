/**
 * Lightbox.js - A simple image gallery lightbox
 * This script adds a lightbox feature to an image gallery.
 * When a thumbnail is clicked, the lightbox opens, displaying
 * the full-size image with a caption. Users can navigate through
 * images using the prev and next buttons, and close the lightbox
 * when finished.
 */

let thumbnails = document.getElementsByClassName('thumbnail');
let lightbox = document.getElementById('lightbox');
let lightboxContent = document.getElementsByClassName('lightbox-content')[0];
let lightboxCaption = document.getElementsByClassName('lightbox-caption')[0];
let close = document.getElementsByClassName('close')[0];
let prev = document.getElementsByClassName('prev')[0];
let next = document.getElementsByClassName('next')[0];

/**
 * Shows the lightbox with the specified image and caption.
 * @param {string} imageSrc - The source URL of the image to display.
 * @param {string} imageAlt - The alt text of the image to display as the caption.
 */
function showLightbox(imageSrc, imageAlt) {
    lightbox.classList.remove('lightbox-hidden');
    lightboxContent.src = imageSrc;
    lightboxCaption.innerHTML = imageAlt;
}

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function() {
        showLightbox(this.src, this.alt);
    })
}

/**
 * Hides the lightbox.
 */
function hideLightbox() {
    lightbox.classList.add('lightbox-hidden');
}

/**
 * Shows the next image in the gallery.
 */
function showNextImage() {
    for (let i = 0; i < thumbnails.length; i++) {
        if (thumbnails[i].src === lightboxContent.src) {
            if (i === thumbnails.length - 1) {
                showLightbox(thumbnails[0].src, thumbnails.alt);
            } else {
                showLightbox(thumbnails[i + 1].src, thumbnails[i + 1].alt);
            }
            break;
        }
    }
}

/**
 * Shows the previous image in the gallery.
 */
function showPrevImage() {
    for (let i = 0; i < thumbnails.length; i++) {
        if (thumbnails[i].src === lightboxContent.src) {
            if (i === 0) {
                showLightbox(thumbnails[thumbnails.length - 1].src, thumbnails[thumbnails.length - 1].alt);
            } else {
                showLightbox(thumbnails[i - 1].src, thumbnails[i - 1].alt);
            }
            break;
        }
    }
}

prev.addEventListener('click', function() {
    showPrevImage();
})

next.addEventListener('click', function() {
    showNextImage();
})

close.addEventListener('click', function(){
    hideLightbox();
})