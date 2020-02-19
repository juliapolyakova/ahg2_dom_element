import './img/goblin.png';

const cells = [...document.querySelectorAll('.cell')];
const img = document.createElement('img');
img.src = './images/goblin.png';

const startGame = Math.floor(Math.random() * cells.length);
cells[startGame].appendChild(img);

function randomImg() {
  const cell = Math.floor(Math.random() * cells.length);

  if (cell !== startGame) {
    cells[cell].appendChild(img);
  }
}

setInterval(randomImg, 1000);
