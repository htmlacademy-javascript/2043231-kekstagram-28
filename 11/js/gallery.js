import {renderPreviews} from './preview.js';
import {showFullSize} from './full-size.js';

const picturesContainer = document.querySelector('.pictures');

let pictures = [];

const onPicturesContainerClick = (evt) => {
  const preview = evt.target.closest('[data-preview-id]');
  if (!preview) {
    return;
  }

  evt.preventDefault();
  const picture = pictures.find(
    (item) => item.id === +preview.dataset.previewId
  );
  showFullSize(picture);
};

const renderGallery = (currentPictures) => {
  pictures = currentPictures;
  renderPreviews(pictures, picturesContainer);
  picturesContainer.addEventListener('click', onPicturesContainerClick);
};

export {renderGallery};
