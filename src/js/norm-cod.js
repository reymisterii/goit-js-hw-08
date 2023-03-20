import throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const { email, message } = feedbackFormRef.elements;

checkLocalStorage();

feedbackFormRef.addEventListener('input', throttle(onFormInput, 500));
feedbackFormRef.addEventListener('submit', onBtnSubmit);

function onFormInput() {
  localStorage.setItem(
    LOCALSTORAGE_KEY,
    JSON.stringify({
      email: email.value,
      message: message.value,
    })
  );
}

function checkLocalStorage() {
  if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    const savedObj = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    email.value = savedObj.email;
    message.value = savedObj.message;
  }
}

function onBtnSubmit(e) {
  e.preventDefault();

  if (email.value === '' || message.value === '') {
    alert('Всі поля повинні бути заповнені!');
  } else {
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

    e.currentTarget.reset();
    localStorage.clear();
  }
}


