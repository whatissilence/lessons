const posts = [
  {
    id: 1,
    text: 'Js is the best',
    author: 'Oleksii'
  },
  {
    id: 2,
    text: 'I use moment for date',
    author: 'Roman'
  }
];

const comments = [
  {
    commentId: 1,
    postId: 1,
    text: 'Noway! Dot net is better!'
  },
  {
    commentId: 2,
    postId: 1,
    text: `I don't think so!`
  },
  {
    commentId: 3,
    postId: 2,
    text: 'Moment is too old, nobody uses it!'
  },
]

export {
  posts,
  comments
}