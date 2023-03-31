import {isEscapeKey} from './util.js';
import {onModalKeydown} from './form.js';

const successMessage = document.querySelector('#success').content.querySelector('.success');
const successButton = successMessage.querySelector('.success__button');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorMessage.querySelector('.error__button');
const body = document.querySelector('body');

const onSuccessAnywhereClick = (evt) => {
  if (evt.target === successMessage) {
    document.querySelector('.success').remove();
    document.removeEventListener('click', onSuccessAnywhereClick);
    document.removeEventListener('keydown', onSuccessKeydown);
  }
};

const onErrorAnywhereClick = (evt) => {
  if (evt.target === errorMessage) {
    document.querySelector('.error').remove();
    document.removeEventListener('click', onErrorAnywhereClick);
    document.removeEventListener('keydown', onErrorKeydown);
  }
};

function onSuccessKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    document.querySelector('.success').remove();
  }
}

function onErrorKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    document.querySelector('.error').remove();
    document.addEventListener('keydown', onModalKeydown);
  }
}

const onSuccessButtonClick = () => {
  document.querySelector('.success').remove();
};

const onErrorButtonClick = () => {
  document.querySelector('.error').remove();
};

const showSuccessMessage = () => {
  successMessage.cloneNode(true);
  body.append(successMessage);
  document.addEventListener('keydown', onSuccessKeydown);
  document.addEventListener('click', onSuccessAnywhereClick);
};


const showErrorMessage = () => {
  errorMessage.cloneNode(true);
  body.append(errorMessage);
  document.removeEventListener('keydown', onModalKeydown);
  document.addEventListener('keydown', onErrorKeydown);
  document.addEventListener('click', onErrorAnywhereClick);
};

successButton.addEventListener('click', onSuccessButtonClick);
errorButton.addEventListener('click', onErrorButtonClick);

export{showSuccessMessage, showErrorMessage};
