import DareDriver from './DareDriver.js';
import { GameLoop } from './GameLoop.js';

const game = new DareDriver(document.getElementById('game') as HTMLCanvasElement);

const gameLoop = new GameLoop(game);
window.addEventListener('load', () => {
  gameLoop.start();
});
