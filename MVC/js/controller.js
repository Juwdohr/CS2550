function Controller(model, grid) {
  const self = this;
  this.model = model;
  this.grid = grid;

  // EventListener Interface
  this.handleEvent = function(e) {
    e.stopPropagation();
    switch(e.type) {
      case 'click':
        self.clickHandler(e.target);
        break;
      default:
        console.log(e.target);
    }
  }

  // Initialize cell to default
  this.initializeCell = function(cell) {
    cell.innerText = this.getCellValue(cell.id);
    this.isInitial(cell.id) ? cell.classList.add('initial') : '';
  }

  // Get cell value
  this.getCellValue = function(id) {
    return this.model.state.grids[Math.floor(id / 9)].cells[id % 9].value;
  }

  // Set cell value
  this.setCellValue = function() {}

  this.isInitial = function(id) {
    return this.model.state.grids[Math.floor(id / 9)].cells[id % 9].initial;
  }

  // Change the model
  this.clickHandler = function(target) {
    const input = this.grid.input()
    target.append(input);
    input.focus();
    // console.dir(target)
  }

}

export default Controller
