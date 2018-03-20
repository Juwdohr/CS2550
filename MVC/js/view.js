const MAX_ITEMS = 3;
export default () => {
  const rowClass = ['top', 'middle', 'bottom'];
  const grid = document.createElement('table');
  grid.classList.add('main-grid');
  for (let id = 0; id < MAX_ITEMS; id++) {
    const row = document.createElement('tr');
    row.classList.add(rowClass[id]);
    for(let indx = 0; indx < MAX_ITEMS; indx++){
      const subgridClass = ['left', 'center', 'right'];
      const cell = document.createElement('td');
      cell.append(subgrid(subgridClass[indx]));
      row.append(cell);
    }
    grid.append(row);
  }
  return grid;
}

const subgrid = (className) => {
  const grid = document.createElement('table');
  grid.classList.add('subgrid', className);
  for(let indx = 0; indx < MAX_ITEMS; indx++) {
    const row = document.createElement('tr');
    for(let id = indx * MAX_ITEMS; id < ((indx * MAX_ITEMS) + MAX_ITEMS); id++) {
      const cell = document.createElement('td');
      cell.classList.add('cell');
      row.append(cell)
    }
    grid.append(row);
  }
  return grid;
}
