'use strict';

// user_login_for_authenitation // snake case
// user-login-for-auth // kebab case http://google.com/user-auth
// userLoginForAuth // camel case
// UserLoginForAuth // Pascal case

// userName
// userAge
// isUserLoggedIn = true


// const age = 'tty'; // cannot change variable value
// let age; // can change it later
//
// console.log(age, 'years');

// functions
// let studentOneName = 'Nikolay';
// const studentTwoName = 'Anastasia';
// const studentThreeName = 'Maks';
//
// function greetUser(name) {
//   console.log(`Hello, ` + name + '!');
// }
//
// greetUser(studentOneName);
// greetUser(studentTwoName);
// greetUser(studentThreeName);

// ------- file beginnging
// 'use strict';
//
// function greetUser(name) {
//   console.log(`Hello, ` + name + '!');
// }
//
//
// const neighbourName = 'Andrew';
// const catAge = 0;
// const countOfPeople = 12;
//
// let userName, isAlive, weatherToday;
//
//
// userName = 'Oleksii';
//
// isAlive = true;
// weatherToday = 'Gooood!'
//
// greetUser('Katerina');
//
// console.log('Weather: ', weatherToday);
// ------- file ending

let digit = 84245; // type number
let str = 'qwerty'; // string
let isLoggedIn = true; // boolean
let und; // undefined
let not = NaN; // number
let nullllll = null; //

let studentsNames = ['Oleksandr', 'Oleksii', 'Nikolay']; // масив - порядок гарантований
console.log(studentsNames[2]); // Беремо третій елемент масиву

let person = {
  name: 'Oleksii',
  lastName: 'Pavlenko',
  age: 40,
  isAlive: true
};

let file = {
  name: 'index',
  type: 'html',
  size: 32785,
}

console.log( Number(false) );
console.log( String(digit) );

// У строки можна брати символи звертаючись до них, як до массива. Нумерація починається з нуля.
let myString = 'abcdefg';
console.log(myString[0], myString[6]); // a g



