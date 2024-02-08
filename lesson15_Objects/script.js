'use strict';

// ================ Objects ======================
//
// const baseAuto = {
//   color: 'white',
//   name: 'Audi',
//   drive: function() {
//     console.log('wrrrooooom');
//   }
// };
//
// const myAuto = Object.create(baseAuto);
// myAuto.color = 'red';
//
// // Object.seal(myAuto); // Не можна додавати та видаляти свойства, можна змінювати
// // Object.freeze(baseAuto); // Не можна додаватиб видаляти свойства, НЕ можна змінювати
//
// // const myArr = [1,2,3,4,5,6];
// // Object.freeze(myArr);
// // myArr[2] = 5; // ERROR
// console.log(myAuto);

// ===================== Classes =====================

function Wolf(name, height, furColor) {
  this.name = name;
  this.height = height;
  this.furColor = furColor;
  // ...
}

Wolf.prototype.makeSound = function() {
  console.log('Awoo!');
}

Wolf.prototype.run = function() {
  console.log(`I'm running!`);
}

Wolf.prototype.jump = function() {
  console.log(`I'm jumping!`);
}

Wolf.prototype.eat = function() {
  console.log(`I'm eating!`);
}


const grey = new Wolf('Grey', 120, 'GREY');
const mary = new Wolf('Mary', 80, 'black');
console.log(mary);

function Dog(name, height, furColor) {
  this.name = name;
  this.height = height;
  this.furColor = furColor;
}
// 1 спосіб зробити наслідування (inheritance)
Dog.prototype = Object.create(Wolf.prototype);
Dog.prototype.constructor = Dog;

// 2 спосіб зробити наслідування
// Dog.prototype = new Wolf();
// Dog.prototype.constructor = Dog;

Dog.prototype.makeSound = function() {
  console.log('Woof!');
}

const bolto = new Dog('Bolto', 100, 'black-grey');
bolto.housePlace = true;

const jenny = new Dog('Jenny', 70, 'black');

// =================== Class ====================== - the best
class Cat extends Wolf {
  constructor(name, furColor) {
    super();
    this.name = name;
    this.furColor = furColor || 'grey';
  }

  eat() {
    console.log(`I'm eating!`);
  }
}

const fuzzy = new Cat('Fuzzy!');











