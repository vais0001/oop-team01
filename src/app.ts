import Nightmare from './Nightmare.js';
import { GameLoop } from './GameLoop.js';

const game = new Nightmare(document.getElementById('game') as HTMLCanvasElement);

const gameLoop = new GameLoop(game, GameLoop.PLAY_CATCH_UP);
window.addEventListener('load', () => {
  gameLoop.start();
});
