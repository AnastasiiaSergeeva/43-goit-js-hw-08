// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map(({ preview, original, description }) =>
`<a class="gallery__item" href=${original}>
<img class="gallery__image" src=${preview} alt=${description} />
</a>`)
    .join('');

galleryRef.insertAdjacentHTML(`beforeend`, galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 100,
    captionPosition: 'bottom'
});