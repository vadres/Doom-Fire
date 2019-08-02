import firePalette from './firePalette.js';

const canvas = document.getElementById("panel");
const contex = canvas.getContext("2d");

export const printRect = ({ x, y, intensity }) => {
  const { r, g, b } = firePalette[intensity];
  contex.fillStyle  = `rgb(${r},${g}, ${b})`;  
  contex.fillRect(y*10, x*10, 10, 10);
}