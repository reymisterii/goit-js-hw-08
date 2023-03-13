import throttle from "lodash.throttle";
const STORAGE_KEY = `feedback-form-state`;

const refs = {
   form: document.querySelector(`.feedback-form`),
   textarea: document.querySelector(`.feedback-form textarea`),
};

refs.form.addEventListener(`submit`, onFormSubmit);
refs.textarea.addEventListener(`input`, throttle(onTextareaInput, 500));

populateTextarea();

function onFormSubmit (e) {
   e.preventDefault();
   localStorage.removeItem(`STORAGE_KEY`);
   refs.form.reset();
   console.log(`Отправляeм форму`); 
};

function onTextareaInput (e) {
   const massage = e.target.value;
   localStorage.setItem(`STORAGE_KEY`, massage);
};

function populateTextarea() {
   const savedMessage = localStorage.getItem(`STORAGE_KEY`);
   if (savedMessage) {
      console.log(savedMessage);

      refs.textarea.value = savedMessage;
   }
};



