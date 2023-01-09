import { Game } from './GameLoop.js';
import CanvasUtil from './CanvasUtil.js';
import Scene from './Scene.js';
import KeyListener from './KeyListener.js';
import Bedroom from './Bedroom.js';
import StartScene from './StartScene.js';

export default class NightmareStreet extends Game {
  private canvas: HTMLCanvasElement;

  private currentScene: Scene;

  private keyListener: KeyListener;

  private starting: boolean;

  private background: HTMLImageElement;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    console.log(this.canvas.width);
    this.keyListener = new KeyListener();
    this.background = CanvasUtil.loadNewImage('./placeholders/start.png');
    this.currentScene = new StartScene(this.canvas.width, this.canvas.height);
    this.starting = false;
  }

  public processInput(): void {
    this.currentScene.processInput();
    if (this.keyListener.keyPressed(KeyListener.KEY_S)) console.log('yo');
  }

  /** updates every milisecond */
  public update(): Scene {
    if (this.starting) return new Bedroom(this.canvas.width, this.canvas.height);
    return null;
  }

  /** draws all the images */
  public render(): void {
    CanvasUtil.fillCanvas(this.canvas, 'black');
    CanvasUtil.drawImage(this.canvas, this.background, 80, 40);
    CanvasUtil.writeTextToCanvas(this.canvas, '[S] TO START', this.canvas.width / 2, this.canvas.height / 2 + 300, 'center', 'ScoreFont', 50, 'white');
  }
}
