import NightmareStreet from './NigthmareStreet.js';
import { GameLoop } from './GameLoop.js';

const game = new NightmareStreet(document.getElementById('game') as HTMLCanvasElement);

const gameLoop = new GameLoop(game);
window.addEventListener('load', () => {
  gameLoop.start();
});
