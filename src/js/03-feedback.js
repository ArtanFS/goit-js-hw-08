import Throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const messageInput = document.querySelector('.feedback-form textarea');
const localStorageKey = 'feedback-form-state';
let inputData = {
  email: '',
  message: '',
};

function loadData(key) {
  try {
    const serializedState = localStorage.getItem(key);
    inputData =
      serializedState === null ? inputData : JSON.parse(serializedState);
    return;
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

function saveData() {
  localStorage.setItem(localStorageKey, JSON.stringify(inputData));
}

loadData(localStorageKey);
emailInput.value = inputData.email;
messageInput.value = inputData.message;

emailInput.addEventListener(
  'input',
  Throttle(evt => {
    inputData.email = evt.target.value;
    saveData();
  }, 500)
);
messageInput.addEventListener(
  'input',
  Throttle(evt => {
    inputData.message = evt.target.value;
    saveData();
  }, 500)
);

form.addEventListener('submit', evt => {
  evt.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
  console.log(inputData);
});