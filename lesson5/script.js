'use strict';

// let variable = 8;
// let text = variable < 10 ? 'Змінна меньша ніж потрібно' : 'Змінна більша ніж потрібно';
//
// console.log(`Мій результат:
// ${text}`);

// (0.1 + 0.2).toFixed(2)
// https://0.30000000000000004.com/

// 21 % 3 === 0 // true, якщо число ділиться на 3 без залишку

// Цикли ============================
// for(let i = 0; i < 5; i++) {
//   console.log(`Додали ${i} яйце`);
// }

let arr = ['aaa', 'bbb', 'ccc', 44, 55, true];
// for(let i = 0; i < arr.length; i++) {
//   console.log(`key = ${i}, value = ${arr[i]}`);
// }

let person = {
  name: 'Oleksii',
  age: 40,
  gender: 'male'
}

//  Не рекомендую
// ітерація по ключам для обʼєктів
// for(let key in person) {
//   console.log(`${key} = ${person[key]}`);
// }

//  Не рекомендую
// ітерація по значенню для масивів
// for(let value of arr) {
//   console.log(value);
// }
//
// let i = 0;
// while(i < arr.length) {
//   console.log(arr[i]);
//   i = i + 1;
// }

let userInput = 'на';

// // Цикл з предумовою
// while(userInput !== 'на') {
//   console.log('В ЦИКЛІ WHILE !!!!!!')
//   userInput = prompt('Хочу печива!');
// }


// Цикл з постумовою
// let counter = 5;
// do {
//   counter--;
//   console.log(`В ЦИКЛІ DO - WHILE !!!!!! Counter: ${counter}`);
//   userInput = prompt('Хочу печива!');
// } while(userInput !== 'на' && counter > 0)


let myData = ['aaa', 'bbb', 'ccc', 44, 55, true, 88, 22, 'qqq', 'eee'];

// for(let i = 0; i < myData.length; i++) {
//   console.log(`Перевіряю, чи myData[i], тобто ${myData[i]} дорівнює 44?`);
//
//   if (myData[i] === 44) {
//     console.log('BREAK!')
//     break;
//   }
//   console.log(`key = ${i}, value = ${myData[i]}`);
// }

// console.log('Після циклу життя існує');

// for(let i = 0; i < myData.length; i++) {
//   if (myData[i] === 44) {
//     console.log('CONTINUE!');
//     continue;
//   }
//   console.log(`key = ${i}, value = ${myData[i]}`);
// }
//
// console.log('Після циклу життя існує');

// for (let i = 0; i < 10; i++) {
//   console.log(`i = ${i}`);
//
//   for (let j = 0; j < 5; j++){
//     console.log(`    j = ${j}, i = ${i}, sum = ${i + j}`);
//   }
//
// }

// let killCounter = 0;
// while(true) {
//   console.log(killCounter++);
// }

// let connect;
// let cnt = 0;
//
// while(true) {
//   console.log('пінг!', cnt++);
//   connect = prompt('Нажміть Cancel коли сайт буде доступний');
//   if (connect === null) {
//     break;
//   }
// }

// let i = 0;
//
// for( ;; ) {
//   if (i >= 50) {
//     break;
//   }
//
//   console.log('Smth', i);
//   i = i + 1;
// }

// for (let i = 0, j = 50; i < 20 && j > 40; i++, j-- ) {
//   console.log(`i = ${i}, j = ${j}`);
// }






















