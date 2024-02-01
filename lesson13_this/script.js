'use strict';


function weeee() {
  console.log('inside weee', this); // undefined in strict mode
}

weeee();


const myDog = {
  name: 'Ruby',
  type: 'dog',
  age: 3,
  bark: function () {
    console.log(`${this.name} is barking!`);
  },
  wagTail: function () {

    // const arrrr = () => {
    //   console.log(`ARRRRRRR!`, this); // Не має свого this, бере з виклику, тобто виведе this від wagTail
    // }
    // arrrr();

    console.log(`${this.name} wags tail`);
  },
  seeFood: function () {
    this.wagTail();
    console.log(`${this.name} eat`);
  },
  seeFriend: function () {
    this.wagTail();
    this.bark();
  },
  showThis() {
    console.log('show this', this);
  }
}

myDog.seeFriend();
myDog.bark();

myDog.showThis();

const sound = myDog.showThis;
sound();


const myFox = {
  name: 'Quicky',
  age: 5,
  bark: myDog.bark,
  weeee
}

myFox.bark();
myFox.weeee(); // this буде вказувати myFox

//
// delete myFox.age;
// console.log(myFox);

console.log('====================================');

const wolf = {
  name: 'Grey',
  type: 'wolf',
}


let wolfBark = myDog.bark.bind(wolf);
wolfBark();

let weeeeBinded = weeee.bind(wolf);
weeeeBinded();

function add(a, b) {
  return a + b;
}

const add5 = add.bind(null, 5);
console.log(     add5(3)     );
console.log(     add5(10)     );
console.log(     add5(21)     );

const add20 = add.bind(null, 20);
console.log(     add20(21)     );

let me = {
  name: 'Oleksii',
  type: 'admin'
};
function isAdmin(user) {
  return user.type === 'admin';
}

let isAdm = isAdmin.bind(null, me);

console.log(    isAdmin(me)    );
console.log('currying',    isAdm()    );


console.log('====================================');

const person = {
  name: 'Oleksii',
  state: 'tired'
}

function test(a, b, c, d) {
  console.log('test', a + b + c + d, this);
}

test.call(person, 1, 2, 3, 4);
test.apply(person, [ 1, 2, 3, 4 ]);

const arr = [ 1, 2, 8, 4, 3, 8, 555, 9, 3, 5, 7, 8, 3, 2];
console.log('Math.max',     Math.max.apply(null, arr)  );

setTimeout(myFox.bark, 1000); // Втратить контекст
setTimeout(function() { myFox.bark(); }, 1000); // Спрацює - одна функція викликає іншу
setTimeout(myFox.bark.bind(myFox), 1000);


// одна функція викликає іншу
function sum(a, b) {
  return a+b;
}

function showSum(a,b ) {
  console.log(   sum(a, b)  );
}




















