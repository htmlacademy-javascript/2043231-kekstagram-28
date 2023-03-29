const previewTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

const createPreview = ({url, likes, comments, description, id}) => {
  const preview = previewTemplate.cloneNode(true);

  preview.querySelector('.picture__img').src = url;
  preview.querySelector('.picture__img').alt = description;
  preview.querySelector('.picture__comments').textContent = comments.length;
  preview.querySelector('.picture__likes').textContent = likes;
  preview.dataset.previewId = id;

  return preview;
};

const renderPreviews = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const preview = createPreview (picture);
    fragment.append(preview);
  });

  picturesContainer.append(fragment);
};

export {renderPreviews};
