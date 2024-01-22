'use strict';

// const ENV = 'prod';
// +'q' == +'q' // NaN ніколи не дорівнює нічому, навіть такому собі

// Boolean, String, Number, undefined, null, Symbol, BigInt // примітивні
// Array, Object // посилальні

// let myStr = 'Quick brown fox';
// let newString = myStr;
//
// newString = 'lazy dog';
// console.log(`myStr: ${myStr}`);
// console.log(`newString: ${newString}`);

// ====================
// let students = [ 'Nikolay', 'Maria', 'Maks', 'Natalia' ];
// let newArr = students;
//
// newArr[2] = 'Imposter';
// console.log('student', students);
// console.log('newArr' , newArr);
// ====================
// const age = Number(prompt('How old are you?'));
//
// console.log(`age: ${age}`);
//
// if (age < 18) {
//   alert('Ви не можете увійти на наш сайт!');
// } else {
//   alert('Thanks I will show you the site');
// }

// ====================
// const age = Number(prompt('How old are you?'));
//
// console.log(`age: ${age}`);
// if (age < 18) {
//   alert('Ви не можете оформити страховку. Попросить дорослих');
// } else if (age >= 18 && age <= 30) {
//   alert('Ваша ставка 5%');
// } else if (age > 30 && age < 50) {
//   alert('Ваша ставка 10%');
// } else {
//   alert('Ваша ставка 15%');
// }

// ====================
// const user = {};

// Вертає перший аргумент, який може бути приведений в true
// const name = user.name || user.nickname || user.secondName || user.email;

//
// if (name) {
//   alert(`Glad to see you ${name}!`);
// } else {
//   alert('Please Login.');
// }

// ====================
const user = {
  name: 'Oleksii',
  secondName: 'Pavlenko',
  age: 40,
  gender: 'male',
  auto: {
    derzhNumer: 'AA1111AA',
    color: 'red',
    weight: 1200,
    engine: {
      power: 1600,
      material: 'aluminium',
      num: 'trert12e313tretr1e31313'
    }
  }
}

const user2 = {
  name: 'Kateryna',
  secondName: 'Dudkina',
  cat: {
    name: 'Leo',
    color: 'siamese'
  }
}

//
// console.log('user', user);
// console.log('user.cat', user.cat);
// console.log('user.cat.color', user.cat.color); // Uncaught TypeError: Cannot read properties of undefined (reading 'color')

// Вертає перший аргумент, який може бути приведений в false
// const enginePower = user && user.auto && user.auto.engine && user.auto.engine.power;
// const catColor = user && user.cat && user.cat.color;
//
// console.log('enginePower', enginePower);
// console.log('catColor', catColor);
//
// if (enginePower) {
//   console.log('Я знаю, що в тебе є машина');
// } else if (catColor) {
//   console.log('В мене твій кіт. Вивчіть js і я поверну його вам');
// }
//
// if ( user && (user.auto || user.cat) ) {
//   console.log('В нього є, чим його шантажувати');
// }
//
// // То само що
// // user && user.auto && user.auto.engine && user.auto.engine.power;
// const enginePower2 = user?.auto?.engine?.power;  // optional chaining

// =================================================

// const food = prompt('What is your favourite food?');

// То само
// if (food === 'potato') {
//   alert('I love them too!');
// } else if (food === 'onion') {
//   alert(`I don't like this one`);
// }

// Може бути true
// switch (food) {
//   case 'potato':
//     alert('Oh Potatoes!');
//   case 'tomato':
//   case 'milk':
//     alert('I love them too!');
//     break;
//
//   case 'onion':
//     alert(`I don't like this one`);
//     break;
//
//   case null:
//     alert(`I know you clicked Cancel`);
//     break;
//
//   default:
//     alert(`I've never tried this one!`);
//     break;
// }


const user = {};
// Тернарний оператор = умова ? якщо truly : якщо falsy - зручний тому що коротко типові операції. Не вкладати один в одного!
const particularInfo = user.name || user.nickname || user.secondName || user.email || user.age || user.passportNumber;

const userMessage = particularInfo ? 'I know you!' : 'Please Login.';
alert(userMessage);











