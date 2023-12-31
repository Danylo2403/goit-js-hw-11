import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryWrapper = document.querySelector('.gallery');

export function renderPhotoCard(data) {
  const markup = data
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<div class="photo-card">
          <a class="photo-link" href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b> ${likes}</p>
            <p class="info-item"><b>Views</b> ${views}</p>
            <p class="info-item"><b>Comments</b> ${comments}</p>
            <p class="info-item"><b>Downloads</b> ${downloads}</p>
          </div>
        </div>`;
      }
    )
    .join('');

  galleryWrapper.insertAdjacentHTML('beforeend', markup);

  // Ініціалізуємо SimpleLightbox для нової галереї
  const newGallery = new SimpleLightbox('.gallery .photo-link');
}
