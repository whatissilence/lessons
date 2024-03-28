'use strict';
//
// function getDataFromServer(url, successCallback, errorCallback) {
//   console.log('successCallback', successCallback)
//   console.log('errorCallback', errorCallback)
//
//
//   const xhrObj = new XMLHttpRequest();
//   xhrObj.open('GET', url);
//   xhrObj.onload = (event) => {
//     if (xhrObj.status !== 200) {
//       errorCallback(`Error! ${xhrObj.status}`);
//       return;
//     }
//
//     const data = xhrObj.response;
//     const parsedData = JSON.parse(data);
//
//     successCallback(parsedData);
//   }
//
//   xhrObj.send();
// }
//
// function onSuccess(response) {
//   console.log('Everything is ok', response);
// }
//
// function onError(errorText) {
//   console.log('Something wrong', errorText);
// }
//
//
// getDataFromServer(
//   'https://jsonplaceholder.typicode.com/users/1',
//   onSuccess,
//   onError
// );

// function onOkClick() {
//   console.log('Все добре!');
//   return 4;
// }
//
// function onBadClick() {
//   console.log('Щось пішло не так!');
//   return 0;
// }

function headOrTail(headFunc, tailFunc) {
  console.log('Інтрига!');
  setTimeout(() => {
    const rand = Math.floor(Math.random() * 2);

    if (rand === 0) {
      headFunc();
    } else {
      tailFunc();
    }
  },1000);
}

// document.getElementById('ok').addEventListener('click', clickEventLis);

console.log('End line');

// const promExample = new Promise((resolve, reject) => {
//   // headOrTail(resolve, reject);
//   reject();
// });
//
// promExample.then(() => {
//   console.log('THEN');
// }).catch(() => {
//   console.log('CATCH');
// })

//
// // ======================================
//
// fetch('https://jsonplaceholder.typicode.com/users/1') // Взяли юзера
//   .then((response) => {
//     if (response.ok) {
//       console.log('success', response);
//       return response.json();
//     } else {
//       console.log('error', response.status);
//       return undefined;
//     }
//   })
//   .then((user) => { // Вже є наш юзер
//     fetch('https://jsonplaceholder.typicode.com/posts').then((response) => { // Беремо його пости
//       return response.json();
//     }).then((posts) => {
//       console.log(posts.filter(post => user.id === post.userId)) // Фільтруємо пости тільки нашого юзера
//     })
//   })
//
//
// // ======================================
// const userProm = fetch('https://jsonplaceholder.typicode.com/users/1').then((response) => {
//   return response.json();
// });
//
// const postsProm = fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
//   return response.json();
// })
//
// const result = Promise.all([userProm, postsProm]);
//
// result.then(res => console.log(res))
//
// // ======================================

async function fetchUser() {
  try {
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await userResponse.json();
    console.log(user);
  } catch (error) {
    console.log('Error', error)
  }
}

// fetchUser();


async function fetchUserAndPosts() {
  try {
    // два запроса відсилаємо одразу незалежно друг від друга. І чекаємо поки обидва виконаються.
    const userPromise = fetch('https://jsonplaceholder.typicode.com/users/1').then(resp => resp.json());
    const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(resp => resp.json());

    const [user, posts] = await Promise.all([userPromise, postsPromise]);

    console.log(user, posts);
  } catch (error) {
    console.log('Error', error)
  }
}

fetchUserAndPosts();






