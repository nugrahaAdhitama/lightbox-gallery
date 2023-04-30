let thumbnails = document.getElementsByClassName('thumbnail');
let lightbox = document.getElementById('lightbox');
let lightboxContent = document.getElementsByClassName('lightbox-content')[0];
let lightboxCaption = document.getElementsByClassName('lightbox-caption')[0];
let close = document.getElementsByClassName('close')[0];
let prev = document.getElementsByClassName('prev')[0];
let next = document.getElementsByClassName('next')[0];

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

function hideLightbox() {
    lightbox.classList.add('lightbox-hidden');
}

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