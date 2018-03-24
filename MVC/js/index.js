import Grid from './sudoku.js';
import Controller from './controller.js';
import Model from './model.js';
import View from './view.js';

const grid = new Grid(document.getElementById('root'));

(() => {
  const model = new Model();
  const controller = new Controller(model, grid);
  const view = new View(controller);
})();
