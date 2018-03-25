import board from './view.js';
import { fillCell, cellClick } from './controller.js';

const userInfo = JSON.parse(localStorage['cs2550timestamp'])
const user = document.getElementById('user');
const timestamp = document.getElementById('timestamp');
const clear = document.querySelector('#clr');
const root = document.getElementById('root');

const gameLayout = board();
const cells = gameLayout.querySelectorAll('.cell');


cells.forEach((cell, id) => fillCell(cell, id));
cells.forEach((cell,id) =>
  cell.addEventListener('click', cellClick.bind(this, cell, id))
);

user.innerText = userInfo.userName;
timestamp.innerText = userInfo.timestamp
clear.addEventListener('click', (e) => {
  localStorage.removeItem('cs2550timestamp');
  location.href = '/';
})
root.append(gameLayout);
