'use strict';

const first = document.getElementById('first');
first.addEventListener('keydown', (event) => {
  if(event.code === 'Enter') {
    event.preventDefault();
  }
});

// Робота з multiple select options
const mySelect = document.getElementById('mySelect');
Array.from(mySelect.children).forEach(opt => {
    if (opt.selected) {
      console.log(opt)
    }
  }
)

// Вибрані чекбокси по імені
// document.querySelectorAll('input[name="me"]:checked')

// Вибрані радіобатони
// document.querySelectorAll('input[name="rad"]:checked')[0].value

// Інпути які лежать безпосередньо в лейблі з атрібутом for, який дорівнює ch1
// document.querySelectorAll('label[for="ch1"] > input')

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector

function togglePass() {
  const pass = document.getElementById('pass');

  pass.type = (pass.type === 'password' ? 'text' : 'password');
}

function post() {
  const mess = document.getElementById('message').value;
  const div = document.createElement('div');
  div.innerHTML = mess;

  document.getElementById('postContainer').appendChild(div);
}

// Bad post message:   I'm only <span onmouseover="console.log('!!!!!')">dreaming</span>


