import './goblin.png';

const cells = [...document.querySelectorAll('.cell')];
const img = document.createElement('img');
img.src = './goblin.png';

const startGame = Math.floor(Math.random() * cells.length);
cells[startGame].appendChild(img);

const randomImg = setInterval(() => {
  const cell = Math.floor(Math.random() * cells.length);

  if (cell !== startGame) {
    cells[cell].appendChild(img);
  }
}, 1000);
