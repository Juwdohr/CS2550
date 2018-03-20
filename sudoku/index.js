const root = document.getElementById('root');
const cells = document.querySelectorAll('cells')

const createGrid = (state = {}) => {
  const rows = 3;
  const mainGrid = document.createElement('table');
  mainGrid.classList.add('main-grid');
  for(let id = 0; id < rows; id++) {
    mainGrid.append(createRow(state, id));
  }
  root.append(mainGrid)
}

const createRow = ({grids}, id) => {
  const MAX_SUBGRIDS = 3;
  let grid = id * MAX_SUBGRIDS;
  const rows = ["top", "middle", "bottom"];
  const row = document.createElement("tr");
  row.classList.add(rows[id]);
  for(let i = 0; i < MAX_SUBGRIDS; grid++, i++) {
    row.append(createSubGrid(grids[grid]))
  }
  return row;
}

const createSubGrid = (grid) => {
  const MAX_ITEMS = 3;
  const tableData = document.createElement('td');
  tableData.classList.add(grid.location);
  const subGrid = document.createElement('table');
  subGrid.classList.add('sub-grid');
  const cells = grid.cells.map(({initial, value}, id) => {
    const tableCell = document.createElement('td');
    tableCell.classList.add(`cell`);
    if(initial) {
      tableCell.classList.add('initial');
      tableCell.innerText = value;
    }
    return tableCell
  })
  for(let row = 0; row < MAX_ITEMS; row++){
    const subGridRow = document.createElement('tr');
    const startingCell = row * MAX_ITEMS;
    const endingCell = row * MAX_ITEMS + MAX_ITEMS;
    for(indx = startingCell; indx < endingCell; indx++) {
      subGridRow.append(cells[indx]);
    }
    subGrid.append(subGridRow);
  }
  tableData.append(subGrid);
  return tableData;
}

const startGame = () => {
  fetch('./gamestate.json')
    .then(data => data.ok ? data.json() : data.error())
    .then(json => {
      createGrid(json);
    })
    .then(()=>{
      const cells = document.querySelectorAll('.cell');
      console.log(cells);
    })
}

const getInitialState = (callback) => {
  const request = new XMLHttpRequest();
  request.open(`GET`, './gameState.json');
  request.send(null);
  request.onreadystatechange = () => {
    if(request.readyState === 4 && request.status === 200) {
      callback(JSON.parse(request.responseText));
    }
  }


}

startGame();
