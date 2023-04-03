import {resetScale} from './scale.js';
import {resetEffects} from './effect.js';
import {isEscapeKey} from './util.js';

const Hashtag = {
  MAX_SYMBOLS: 20,
  MAX_COUNT: 5,
};

const HashtagErrorText = {
  START_WITH_GRID: 'Хэш-тег начинается с символа # (решётка).',
  ONLY_LETTERS_AND_NUMBERS: 'Строка после решётки должна состоять только из букв и чисел.',
  NOT_ONLY_GRID: 'Хэш-тег не может состоять только из одной решётки.',
  MAX_COUNT_HASHTAGS: `Нельзя указать больше ${Hashtag.MAX_COUNT} хэш-тегов.`,
  SEPARATED_BY_SPACES: 'Хэш-теги разделяются пробелами.',
  MAX_LENGTH_ONE_HASHTAG: `Максимальная длина одного хэш-тега ${Hashtag.MAX_SYMBOLS} символов, включая решётку.`,
  NOT_REPEAT: 'Хэш-теги не должны повторяться.',
};

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

const SubmitButtonText = {
  SUBMITTING: 'Отправляю...',
  IDLE: submitButton.textContent,
};

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalKeydown);
};

const hideModal = () => {
  form.reset();
  resetScale();
  resetEffects();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalKeydown);
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

function onModalKeydown(evt) {
  if (isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

const onCancelButtonClick = () => {
  hideModal();
};

const onFileInputChange = () => {
  showModal();
};

const getHashtagsArr = (hashtagsStr) => (
  hashtagsStr.toUpperCase()
    .split(' ')
    .filter((hashtag) => hashtag !== '')
);

const validateHashtagUnique = (value) => (
  getHashtagsArr(value)
    .reduce(
      (result, hashtag, index, array) => {
        if (index + 1 < array.length) {
          result = result && !array.includes(hashtag, index + 1);
        }
        return result;
      },
      true,
    )
);

const validateHashtagMaxQuantity = (value) => getHashtagsArr(value).length <= Hashtag.MAX_COUNT;

const validateHashtagMaxLength = (value) => (
  getHashtagsArr(value).reduce(
    (result, hashtag) => (result && hashtag.length <= Hashtag.MAX_SYMBOLS),
    true
  )
);

const validateHashtagLetters = (value) => (
  getHashtagsArr(value).reduce(
    (result, hashtag) => {
      if (hashtag.length > 1) {
        result = result && !(hashtag.search(/[^А-Яа-яA-Za-zЁё0-9#]+/) + 1);
      }
      return result;
    },
    true
  )
);

const validateHashtagMinLength = (value) => (
  getHashtagsArr(value).reduce(
    (result, hashtag) => {
      if (hashtag.length === 1) {
        result = result && hashtag !== '#';
      }
      return result;
    },
    true
  )
);

const validateHashtagFirstChar = (value) => (
  getHashtagsArr(value).reduce(
    (result, hashtag) => {
      if (hashtag !== '') {
        result = result && hashtag[0] === '#';
      }
      return result;
    },
    true
  )
);

const validateHashtagSpaces = (value) => (
  getHashtagsArr(value).reduce(
    (result, hashtag) => {
      if (hashtag.length > 1) {
        result = result && !hashtag.includes('#', 1);
      }
      return result;
    },
    true
  )
);

pristine.addValidator(hashtagField, validateHashtagFirstChar, HashtagErrorText.START_WITH_GRID);
pristine.addValidator(hashtagField, validateHashtagMinLength, HashtagErrorText.NOT_ONLY_GRID);
pristine.addValidator(hashtagField, validateHashtagLetters, HashtagErrorText.ONLY_LETTERS_AND_NUMBERS);
pristine.addValidator(hashtagField, validateHashtagSpaces, HashtagErrorText.SEPARATED_BY_SPACES);
pristine.addValidator(hashtagField, validateHashtagMaxLength, HashtagErrorText.MAX_LENGTH_ONE_HASHTAG);
pristine.addValidator(hashtagField, validateHashtagMaxQuantity, HashtagErrorText.MAX_COUNT_HASHTAGS);
pristine.addValidator(hashtagField, validateHashtagUnique, HashtagErrorText.NOT_REPEAT);

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SUBMITTING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const setOnFormSubmit = (cb) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if(isValid) {
      blockSubmitButton();
      await cb(new FormData(form));
      unblockSubmitButton();
    }
  });
};

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);

export {setOnFormSubmit, hideModal, onModalKeydown};
