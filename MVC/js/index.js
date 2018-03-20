import board from './view.js';
import { fillCell, cellClick } from './controller.js';

const root = document.getElementById('root');

const gameLayout = board();
const cells = gameLayout.querySelectorAll('.cell');


cells.forEach((cell, id) => fillCell(cell, id));
cells.forEach((cell,id) =>
  cell.addEventListener('click', cellClick.bind(this, cell, id))
);


root.append(gameLayout);
