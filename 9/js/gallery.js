import {renderPreviews} from './preview.js';
import {showFullSize} from './full-size.js';

const picturesContainer = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  picturesContainer.addEventListener('click', (evt) => {
    const preview = evt.target.closest('[data-preview-id]');
    if (!preview) {
      return;
    }

    evt.preventDefault();
    const picture = pictures.find(
      (item) => item.id === +preview.dataset.previewId
    );
    showFullSize(picture);
  });

  renderPreviews(pictures, picturesContainer);
};

export {renderGallery};
