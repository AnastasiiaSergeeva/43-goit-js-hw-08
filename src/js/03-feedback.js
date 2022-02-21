
import throttle from 'lodash.throttle';
// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.
const form = document.querySelector("form");
const LOCALSTORAGE_KEY = "feedback-form-state";

const formData = {};

updateForm();

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function onInput(evt) {
    formData[evt.target.name] = evt.target.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};


function onSubmit(evt) { 
  evt.preventDefault();

  if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  };
  
  evt.currentTarget.reset();

  localStorage.removeItem(LOCALSTORAGE_KEY);
};

function updateForm() {
  const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
  if (savedData) {
      const { email, message } = JSON.parse(savedData);
      form.email.value = email;
      form.message.value = message;
        
  }
}
