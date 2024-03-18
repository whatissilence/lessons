'use strict';

// Чиста функція - добре
// function sum(first, second) {
//   const result = first + second;
//   return result;
// }
//
// const summa = sum(3, 5);
// console.log(summa);
//
// const result = sum(10, 21);
// console.log(result);
//
// const summa = 30; // ERROR
// console.log(summa);



// Дуже схематично
// const lexicalEnv = {
//   name: 'Oleksii',
//   result: '',
//   globalEnv: {
//     gl: 'global'
//   }
// }


// =======================================
// function myFunc() {
//   let outer = 'outer';
//
//   function resultFunction() {
//     let inner = 'inner';
//     console.log('global: ', glob);
//     console.log('outer: ', outer);
//     console.log('inner: ', inner);
//     return 'something';
//   }
//
//   let result = resultFunction(); // вертає undefined
//   return result;
// }
//
//
// let glob = 'global';
// let res = myFunc();
// console.log(res);
//
// console.log( myFunc() );
// console.log( myFunc() );

//
// // =======================================
//
// function creator(createVar) {
//
//   function insider(additionalText) {
//     createVar = createVar + additionalText;
//     return createVar;
//   }
//
//   return insider;
// }
//
// let someFunc = creator('aaa');
// let resultText = someFunc('bbb');
// console.log(resultText);
//
// console.log(someFunc('ccc'));
// console.log(someFunc('ddd'));
// console.log(someFunc('eee'));
//
//
// // =======================================
//
// function makeCounter() {
//   let count = 0;
//
//   return () => {
//     count++;
//     return count;
//   }
// }
//
// const increaseAndReturnCount = makeCounter();
//
// console.log(increaseAndReturnCount());
// console.log(increaseAndReturnCount());
// console.log(increaseAndReturnCount());
//
//
// const myOwnCounter = makeCounter();
// myOwnCounter();
// myOwnCounter();
// myOwnCounter();
// myOwnCounter();
// myOwnCounter();
// myOwnCounter();
// myOwnCounter();
// console.log(myOwnCounter());
// console.log(myOwnCounter());
// console.log(myOwnCounter());
// console.log(myOwnCounter());
// console.log('myOwnCounter', myOwnCounter());
//
//
// console.log('increaseAndReturnCount', increaseAndReturnCount());


// ======================================
let arr = [5,10,80,100];

function sayHello() {
  console.log('Hello');
}

const myObj = {
  name: 'Oleksii',
  hi: sayHello,
  myMarks: arr
}

myObj.hi();
console.log(myObj.myMarks[3]);

// =======================================

function creatorProtected(initNum) {
  let count = initNum;

  function plus(num) {
    count = count + num;
  }

  function minus(num) {
    count = count - num;
    if (count < 1) {
      count = 1;
    }
  }

  function getCount() {
    return count;
  }

  return {
    plus: plus,
    minus: minus,
    getCount: getCount,
  }
}

let obj = creatorProtected(5);
console.log(    obj.getCount()    );
obj.plus(50);
obj.plus(2);

console.log(    obj.getCount()    );

obj.minus(12);

console.log(    obj.getCount()    );

obj.minus(200);

console.log(    obj.getCount()    );











