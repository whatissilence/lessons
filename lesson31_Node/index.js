
// використовуємо бібліотеки
import express from 'express';
import moment from 'moment';
import { posts, comments } from './db.js';
import { html } from './html_for_root.js';

const port = 3000; // Обʼявили змінну для порту
let lastPostId = 2;
const app = express(); // Створили представника (instance) Експресу
app.use(express.json()); // Щоб парсити body в POST запросах


// Конфігуруємо функції, які будуть обробляти запроси до нас і вертати відповідь
app.get('/', (request, response) => {
  response.send(html);
});

app.get('/time', (request, response) => {
  const timeString = moment().format('LLLL');
  response.send(timeString);
});

app.get('/posts', (request, response) => {
  const authorName = request.query.author;

  if (authorName) {
    const found = posts.filter(p => p.author === authorName)
    response.send(found);
    return;
  }

  response.send(posts);
});

app.get('/posts/:postId/comments', (request, response) => {
  const postId = Number(request.params.postId);
  const comms = comments.filter(c => c.postId === postId);

  response.send(comms);
});

//   localhost:3000/posts/14/text
//  request.params = {
//    postId: '14',
//    myVar: 'text'
//  }

app.get('/posts/:postId/:myVar', (request, response) => {
  const postId = Number(request.params.postId);
  console.log(request.params);
  const foundPost = posts.find(p => p.id === postId);

  if(!foundPost) {
    response.status(404).send('Post not found');
    return;
  }

  response.send(foundPost);
});

app.post('/posts', (req, res) => {
  const newPost = req.body;
  newPost.id = ++lastPostId;

  posts.push(newPost);
  res.status(201).send(newPost);
})





// Запускаємо сервер. Сервер, почни слухати порт 3000 і коли почнешь, дай мені знати оцим колбеком
app.listen(port, () => {
  console.log('Server started and listening to port: ', port);
});