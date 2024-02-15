import { showPanic } from "./helpers.js";
// import * as Ludyna from "./Person.js";
// import { GENDERS, Person as Lyudyna } from "./Person.js";
// import { GENDERS, Person } from "./Person.js";
import Person, { GENDERS } from "./Person.js";
// import moment from 'moment'; // сторонні бібліотеки

// if (me === undefined) {
//   debugger;
// }

showPanic();
const me = new Person('Oleksii');
console.log(me);
console.log(GENDERS);

// const obj = {
//   name: 'Oleksii',
//   age: 40
// }

// const { name, age } = obj; // destructuring
// const name = obj.name;
// const age = obj.age;

const bigObj = {
  a_1: 111,
  a_2: 222,
  a_3: {
    b_1:111,
    b_2:222,
    b_3: {
      c_1: {
        ccc:555
      }
    }
  }
}

console.log(bigObj);

if (bigObj.a_1 === 111) {

}

// console.dir(bigObj, {depth: null});
// console.warn('QQQQQQQ');
// console.error('EEEEEEE');

















