'use strict';

const numArray = [1,45,8,3,8,-9];
const numArr2 = [778,34,67,99,23,3];

const arrayToSum = [1,7,2];

// spread ================================================

const copyOfArr = [22,33, ...arrayToSum, 99];

const str = 'Hello world';

const defaultPerson = {
  name: 'No name',
  age: 10,
  gender: 'male',
}

const person = {
  ...defaultPerson,
  name: 'Oleksii',
  age: 40,
}

const anotherObj = {
  aaaa: 777,
  ...person,
  age: 7,
}


// function sum(a,b,c) {
//   return a + b + c;
// }

function sum(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  }, 0);
}

// rest ================================================

function showStudent(name, course, ...marks) {
  console.log(name, course, 'Average:', sum(marks)/marks.length);
}

showStudent('Oleksii', 'JS Pro', 95,88,77,33,55,88,100,100,100,77);

showStudent('Oleh', 'JS Pro', 100,100,100);

// destructuring ================================================

const nums = [{aaa:555},2,3,4,5,6,7,8,9,10];

// const first = nums[0];
// const second = nums[1];
// const third = nums[2];
// const mySuperVariable = nums[3];

const [ first, second, third, mySuperVariable ] = nums;

console.log(first, second, third, mySuperVariable);
first.aaa = 999; // передає обʼєкти по посиланню!

console.log(nums);

let [ aaaObj, ...another] = nums;
console.log('aaaObj', aaaObj);
console.log('another', another);

// ===
const person2 = {
  name: 'Oleksandr',
  age: 25,
  gender: 'Male',
  course: 'JS Pro'
}

// const name = person2.name;
// const age = person2.age;
// const direction = person2.course;

const { name, age, course: direction } = person2;

console.log('name', name);
console.log('age', age);
console.log('direction', direction);

const oleksii = ['Oleksii', 'JS Pro', 95,88,77,33,55,88,100,100,100,77];

const [studentName, studentCourse, ...studentMarks ] = oleksii;

console.log('studentName', studentName);
console.log('studentCourse', studentCourse);
console.log('studentMarks', studentMarks);


// Щось подібне робить Babel
// if (!Array.forEach) {
//   Array.forEach = function(funct) {
//     for(var i =0 ; i< this.length; i++) {
//       funct(this[i]);
//     }
//   }
// }


// Promises ================================================


// resolve та reject - це 2 функції - одна на випадок, якщо все пішло так, інша, якщо не так
// Те що ми передали в аргументи resolve прийде в перший then
function funct4sec(resolve, reject) {
  setTimeout(() => {
    resolve({ name: 'Kate', age: 22 });
    // reject('Ой лишенько! Щось трапилося!');
  }, 4000);
}

console.log('Promise 4 sec created');
console.log('Показуємо крутилку!');
const prom4sec = new Promise(funct4sec);

// prom4sec
//   .then((result) => {
//     console.log('Then triggered', result);
//     return result.name;
//   })
//   .then((result) => {
//     // В наступний then аргументом прийде те, що ми повернули з попереднього
//     console.log('Second then triggered', result);
//   })
//   .catch((error) => {
//     console.log('Ми потрапили в CATCH!', error);
//   })
//   .finally(()=> {
//     console.log('Ховаємо крутилку!');
//   });

// const fetchPromise = fetch('https://jsonplaceholder.typicode.com/users/1');
// fetchPromise
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log('In catch:', error);
//   });

(async function() {
  console.log('async start');
  async function getUser(userId) {
    try {
      const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const user = await userResponse.json();

      return user.name;
    } catch(error) {
      console.log('CAtch', error);
    } finally {
      console.log('finally');
    }

  }

  console.log('User name: ', await getUser(5));

  // const friend1Prom = fetch(`https://jsonplaceholder.typicode.com/users/1`).then(resp => resp.json());
  // const friend2Prom = fetch(`https://jsonplaceholder.typicode.com/users/2`).then(resp => resp.json());
  // const friend3Prom = fetch(`https://jsonplaceholder.typicode.com/users/3`).then(resp => resp.json());

  // const friends = await Promise.all([friend1Prom, friend2Prom, friend3Prom]);

  const ids = [1,2,3,4,5,6,7,8,9,10];

  const promiseArray = ids.map(id => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(resp => resp.json());
  })

  const friends = await Promise.all(promiseArray);

  console.log('friends', friends);

})();





















