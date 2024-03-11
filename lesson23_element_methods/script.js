'use strict';

let categoryElements = Array.from(document.getElementsByClassName('category'))
const data = {
  phones: {
    iphone: [
      {
        title: 'Iphone 15',
        price: 1399
      }
    ],
    xiaomi: []
  },
  tvsets: {
    dex: [],
    aiwa: []
  },
}

categoryElements.forEach(element => {
  element.addEventListener(
    'click',
    event => {
      let myDiv = event.target
      console.log('Датасет таргету', myDiv.dataset);
      let selectedCat = myDiv.closest('.category').dataset.category;
      console.log('Датасет категорії', myDiv.closest('.category').dataset); // Більш надійний
      console.log('Товари в категорії: ', data[selectedCat]);
      console.log('First child', myDiv.firstElementChild);

    },
    {
      once: true // подія спрацьовує тільки один раз і потім "самознишується"
    }
  )
});

// let person = {
//   name: 'Oleksii',
//   secondName: 'Pavlenko',
//   age: 40
// }
//
// Object.keys(person).forEach(key => console.log(`${key} --> ${person[key]}`));

console.log(document.querySelectorAll('.container .category'))

let myDiv = document.getElementById('myDiv');
console.log(myDiv.getElementsByClassName('category'));

// ===============================================
//
// const data = {
//   phones: {
//     iphone: [
//       {
//         title: 'Iphone 15',
//         price: 1399
//       }
//     ],
//     xiaomi: []
//   },
//   tv: {
//     dex: [],
//     aiwa: []
//   }
// }

let selectedCategory= 'phones';
let selectedCompany= 'iphone';
console.log(  data[selectedCategory][selectedCompany][0]  ); data.phones

let categoriesList = Object.keys(data);
console.log(categoriesList)

// ===============================================

const products = [
  {
    id: 56,
    category: 'phones',
    producer: 'apple',
    title: 'Iphone 15',
    price: 1399
  },
  {
    id:78,
    category: 'phones',
    producer: 'xiaomi',
    title: 'Mi 12 Pro',
    price: 999
  },
  {
    id: 344,
    category: 'tvs',
    producer: 'dex',
    title: 'ABC 12',
    price: 700
  },
  {
    id: 555,
    category: 'vacuums',
    producer: 'VAC',
    title: 'Vac 34',
    price: 700
  },
];

const uniqueFilter = (value, index, array) => array.indexOf(value) === index;
let categoriesList2 = products.map(prod => prod.category).filter(uniqueFilter);

let producersList = products.map(prod => prod.producer).filter(uniqueFilter);
console.log(categoriesList2);
console.log(producersList);










