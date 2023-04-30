let thumbnails = document.getElementsByClassName('thumbnail');
let lightbox = document.getElementById('lightbox');
let lightboxContent = document.getElementsByClassName('lightbox-content')[0];
let lightboxCaption = document.getElementsByClassName('lightbox-caption')[0];
let close = document.getElementsByClassName('close')[0];

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

close.addEventListener('click', function(){
    hideLightbox();
})