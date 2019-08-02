import * as Grid from './grid.js';
import * as Canvas from './canvas.js';
import * as d3 from 'd3';

const _DEBUG_ = true;
const lins = 70;
const cols = 50;
Grid.init(lins, cols);

const start = () => {
  fireSource();
  render();
}

const fireSource = () => {
  const newline = []
  for (let i = 0; i < lins; i++) 
    newline[i] = 36;
  
  Grid.setLine(newline, lins);
}

const fireIntesityCalc = () => {
  for (let c = 0; c < cols; c++) {
    for (let l = 0; l < lins; l++) {
      if (l + 1 == lins) continue;
      const value = Grid.getElUnder(l, c + Math.round(Math.random()));
      Grid.set(l, c, value - Math.round(Math.random()) );
    }
  }
}

const render = () => {
  fireIntesityCalc();
  for (let l = 0; l < lins; l++) {
    for (let c = 0; c < cols; c++) {
      Canvas.printRect({
        x: l, 
        y: c, 
        intensity: Grid.get(l, c) 
      });
    }
  }
  if (_DEBUG_) {
    d3.select("#tbl-debug").html("");
    renderDebug();
  }
  requestAnimationFrame(render);
}

const renderDebug = () => {
  const arr = [];
  for (let l = 0; l < lins; l++) {
    arr[l] = []
    for (let c = 0; c < cols; c++) {
      arr[l][c] = Grid.get(l, c); 
    }
  }
  const tr = d3.select("#tbl-debug")
               .selectAll("tr")
               .data(arr)
               .enter()
               .append("tr");

  const td = tr.selectAll("td")
               .data(function(d, i) { return d; })
               .enter().append("td")
               .text(function(d) { return d; });             
}

start();
