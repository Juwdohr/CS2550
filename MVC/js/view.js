function View (controller) {
  this.controller = controller;
  this.cells = document.querySelectorAll('td.cell');
  this.cells.forEach((cell, id) => {
    controller.initializeCell(cell);
    if( !cell.classList.contains('initial'))
      cell.addEventListener('click', controller);
  })
}

export default View;
