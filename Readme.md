Lightbox Gallery
Overview
Lightbox Gallery is a simple image gallery that displays images as thumbnails. When a user clicks on a thumbnail, the image is enlarged within a lightbox with a caption. Users can navigate between images using the prev and next buttons and close the lightbox when finished viewing.

File Structure
index.html
css/style.css
js/lightbox.js
1. index.html
Basic HTML5 structure
Meta tags for character set, compatibility, and viewport
Page title: "Lightbox Gallery"
Link to CSS file: "css/style.css"
Main content consists of a div with class "gallery" containing a div with class "grid" for image thumbnails
Div with id "lightbox" for displaying the lightbox, including close button, prev and next buttons, and caption
Script tag to include JavaScript file: "js/lightbox.js"
2. css/style.css
General styling for HTML elements (box-sizing, font-family, background-color, etc.)
Styling for "gallery" and "grid" classes (padding, max-width, display, grid-template-columns, grid-gap)
Styling for "thumbnail" class (width, cursor, border-radius, overflow, box-shadow, transform, hover effect)
Styling for "lightbox" id and its child elements (position, z-index, left, top, width, height, background-color, font-size, cursor, etc.)
3. js/lightbox.js
Define variables for thumbnail elements, lightbox, close button, prev and next buttons
showLightbox() function to display the lightbox with the appropriate image and caption
Event listeners for thumbnails that call showLightbox() when clicked
hideLightbox() function to hide the lightbox
showNextImage() function to navigate to the next image in the gallery
showPrevImage() function to navigate to the previous image in the gallery
Event listeners for prev, next, and close buttons to execute their respective functions
To implement this Lightbox Gallery, make sure all files (index.html, style.css, and lightbox.js) are in the correct structure and references between files are accurate.

Enjoy using Lightbox Gallery!