const grid = [];
let lins  = 0;
let cols = 0;

export const init = (l, c) => {
  lins  = l > 0 ? l : 0;
  cols = c > 0 ? c : 0;

  for (let i = 0; i < lins * cols; i++){
    grid[i] = 0;
  }
} 

const pos = (x, y) => {
  return y + (x * cols );
}

export const set = (x, y, value ) => {
  grid[pos(x,y)] = value >= 0 ? value : 0;
}

export const get = (x ,y) => {
  return grid[pos(x,y)];
}

export const getElUnder = (x, y) => {
  return grid[pos(x,y) + cols];
}

export const setLine = (line, x) => {
  x--;
  for (let i = 0; i < cols; i++){
    grid[pos(x, i)] = line[i];
  }
}

export const setList = (list) => { grid = list }
export const getList = () => grid;