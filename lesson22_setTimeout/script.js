'use strict';

// let votes = [0, 0, 0, 0, 0];

// window.location.href = 'https://google.com';
// window.addEventListener('online', (event) => console.log(event))
// window.addEventListener('offline', (event) => console.log(event))

// let timeoutId = setTimeout(() => {
//   console.log('!!!!!!!')
// }, 5000); // 5 sec = 5000 milliseconds

// clearTimeout(timeoutId);


// setInterval(() => {
//     console.log(new Date())
//   },
//   4000)


// function showDate(timerText) {
//   console.log(timerText, " --> ", new Date())
// }
//
// let intervalId = setInterval(showDate, 4000, 'each 4 sec');
// let intervalId2 = setInterval(showDate, 10000, 'each 10 sec');
// clearInterval(intervalId);
// clearInterval(intervalId2);

let person = {
  name: 'Oleksii',
  age: 40,
  sayHello() {
    console.log('Hello!', this);
  }
}

setTimeout(person.sayHello, 5000); // не працюэ як треба. this вказує на window

// bind вертає нову функцію, яка назавжди запамʼятала контекст. Її і передаємо в setTimeout
setTimeout(person.sayHello.bind(person), 5000);

let pureFunc = person.sayHello;
let bindedFunc = person.sayHello.bind(person);

pureFunc(); // не памʼятає свій this
bindedFunc(); // Завжди памʼятає person, який ми їй передали в bind