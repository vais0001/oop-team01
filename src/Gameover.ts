import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import StartScene from './StartScene.js';

export default class Gameover extends Scene {
  private continue: boolean;

  private timeToContinue: number;

  private timeToRemove: number;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.image = CanvasUtil.loadNewImage('./placeholders/gameover.png');
    this.continue = false;
    this.timeToContinue = 1000;
    this.timeToRemove = 700;
  }

  /**
   *
   * @param keyListener is an input
   */
  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed('Space') && this.timeToContinue <= 0) {
      this.continue = true;
    }
  }

  /**
   *
   * @param elapsed is time
   * @returns true or false
   */
  public update(elapsed: number): Scene {
    this.timeToContinue -= elapsed;
    if (this.timeToContinue <= 0) {
      this.timeToRemove -= elapsed;
      if (this.timeToRemove < -300) {
        this.timeToRemove = 900;
      }
    }
    if (this.continue) {
      return new StartScene(window.innerWidth, window.innerHeight);
    }
    return null;
  }

  /**
   *
   * @param canvas is html canvas element
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.fillCanvas(canvas, '#0078d7');
    CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
    if (!(this.timeToContinue <= 0)) {
      CanvasUtil.fillRectangle(canvas, this.dimensionsX + 200, this.dimensionsY + 665, 1000, 60, '#0078d7');
    }
    if (this.timeToRemove < 0 && this.timeToContinue <= 0) {
      CanvasUtil.fillRectangle(canvas, this.dimensionsX + 200, this.dimensionsY + 665, 1000, 60, '#0078d7');
    }
  }
}
