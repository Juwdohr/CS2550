function Grid(root) {
  this.MAX_ITEMS = 3;

  this.grid = () => {
    const className = ['top', 'middle', 'bottom']
    const table = document.createElement('table');
    table.classList.add('main-grid')
    for(let indx = 0; indx < this.MAX_ITEMS; indx++){
      const row = document.createElement('tr');
      row.classList.add(className[indx]);
      for(let i = 0; i < this.MAX_ITEMS; i++) {
        const subgrids = ['left', 'center', 'right'];
        row.append(this.cell('', this.subgrid(subgrids[i])));
      }
      table.append(row);
      const cells = table.querySelectorAll('td.cell');
      cells.forEach((cell, id) => {
        cell.id = id;
      })
    }
    return table;
  }

  this.cell = (className = 'cell', subgrid) => {
    const cell = document.createElement('td');
    if (typeof subgrid !== 'undefined'){
      cell.append(subgrid);
    } else {
      cell.classList.add(className);
    }
    return cell;
  }

  this.subgrid = (className) => {
    const rows = [];
    for(let indx = 0; indx < this.MAX_ITEMS; indx++){
      const row = document.createElement('tr');
      for(let id = 0; id < this.MAX_ITEMS; id++) {
        row.append(this.cell());
      }
      rows.push(row);
    }
    const table = document.createElement('table');
    table.classList.add(className, 'subgrid');
    table.append(...rows);
    return table;
  }

  this.input = () => {
    const input = document.createElement('form');
    input.classList.add('cell-form');
    const field = document.createElement('input');
    field.type = 'tel';
    field.size = 1;
    field.classList.add('cell-input')
    input.append(field);
    return input;
  }

  root.append(this.grid());
}

export default Grid
