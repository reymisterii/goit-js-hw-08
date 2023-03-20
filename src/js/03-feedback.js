// import throttle from "../../node_modules/lodash.throttle";
import throttle from 'lodash.throttle';
const STORAGE_KEY = `feedback-form-state`;
const feedbackFormRef = document.querySelector(`.feedback-form`);
const { email, message } = feedbackFormRef.elements;
const formData = {};


feedbackFormRef.addEventListener(`submit`, onFormSubmit);
feedbackFormRef.addEventListener(`input`, throttle(onTextareaInput, 500));

populateTextarea();

// Імітація відправки форми на кнопці Сабміт, яка на додачу відправляє очищається локалсторидж(ресет очищає інпут)
function onFormSubmit(e) {
   e.preventDefault();

   if (email.value === `` || message.value === ``) {
      alert(`Заповніть всі поля!`);
   } else {
      console.log('Отправляєм форму');
   e.target.reset();
   localStorage.removeItem(STORAGE_KEY);
   }
};

// velue іnput message (ввод тексту в форму та локалстор)
function onTextareaInput() {
   localStorage.setItem(STORAGE_KEY,
      JSON.stringify({
         email: email.value,
         message: message.value,
      })
   );
};

// вивод данних з локалстор і заповнення цими данними полей форм
function populateTextarea() {

   if (localStorage.getItem(STORAGE_KEY)) {
      const savedObj = JSON.parse(localStorage.getItem(STORAGE_KEY));
    email.value = savedObj.email;
    message.value = savedObj.message;
      }
};