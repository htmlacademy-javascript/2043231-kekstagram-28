const successMessage = document.querySelector('#success').content.querySelector('.success');
const successButton = successMessage.querySelector('.success__button');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorMessage.querySelector('.error__button');
const body = document.querySelector('body');

const onSuccessAnywhereClick = (evt) => {
  if (evt.target === successMessage) {
    successMessage.classList.add('hidden');
    document.removeEventListener('click', onSuccessAnywhereClick);
    document.removeEventListener('keydown', onSuccessKeydown);
  }
};

const onErrorAnywhereClick = (evt) => {
  if (evt.target === errorMessage) {
    errorMessage.classList.add('hidden');
    document.removeEventListener('click', onErrorAnywhereClick);
    document.removeEventListener('keydown', onErrorKeydown);
  }
};

function onSuccessKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    successMessage.classList.add('hidden');
  }
}

function onErrorKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    errorMessage.classList.add('hidden');
  }
}

const onSuccessButtonClick = () => {
  successMessage.classList.add('hidden');
};

const onErrorButtonClick = () => {
  errorMessage.classList.add('hidden');
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
  document.addEventListener('keydown', onErrorKeydown);
  document.addEventListener('click', onErrorAnywhereClick);
};

successButton.addEventListener('click', onSuccessButtonClick);
errorButton.addEventListener('click', onErrorButtonClick);

export{showSuccessMessage, showErrorMessage};
