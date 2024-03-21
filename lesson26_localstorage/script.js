'use strict';

localStorage.setItem('key', '339')
localStorage.getItem('key')

// Виводить також ключі самого localStorage - несподіванка
for(let key in localStorage) {
  console.log(`key: ${key}, value: ${localStorage.getItem(key)}`);
}


// Працює добре
for(let key in localStorage) {
  if (localStorage.hasOwnProperty(key)) {
    console.log(`key: ${key}, value: ${localStorage.getItem(key)}`);
  }
}

// Працює добре і займає меньше строк коду
Object.keys(localStorage).forEach(key => {
  console.log(`key: ${key}, value: ${localStorage.getItem(key)}`);
})



function saveObject(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}

function loadObject(key) {
  return JSON.parse(localStorage.getItem(key));
}

let myDog = {
  name: 'Rex',
  type: 'Dog',
  color: 'grey'
}

// saveObject('dog', myDog);
console.log(loadObject('dog'));


// Спрацьовує в усіх вкладках окрім тої, де зробили зміну сховища. Використовується для синхронізаціʼ між вкладками.
window.addEventListener('storage', (event) => {
  console.log(event);
})


document.cookie = 'user=Mary';
document.cookie = 'status=friend';
let status = document.cookie.split('; ')
  .find(val => val.startsWith('status'))
  .split('=')
  .pop();

encodeURIComponent('I <strong>am</strong> a human;')

document.cookie = 'status2=friend2; domain=lms.ithillel.ua';
document.cookie = 'status2=friend2; domain=lms.ithillel.ua;expires='+now.toUTCString();



