/* eslint-disable @typescript-eslint/naming-convention */
import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import StartScene from './StartScene.js';

export default class CreditScene extends Scene {
  private continue: boolean;

  public constructor(MaxX: number, MaxY: number) {
    super(MaxX, MaxY);
    this.image = CanvasUtil.loadNewImage('./placeholders/credits.png');
    this.continue = false;
  }

  /**
   *
   * @param keyListener is an input
   */
  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed('Space')) {
      this.continue = true;
    }
  }

  /**
   *
   * @returns true or false
   */
  public update(): Scene {
    if (this.continue) {
      return new StartScene(this.maxX, this.maxY);
    }
    return null;
  }

  /**
   *
   * @param canvas is html canvas element
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
    CanvasUtil.writeTextToCanvas(canvas, 'Press [SPACE] to go back', canvas.width / 2 - 50, canvas.height / 2 + 270, 'center', 'Helvetica', 30, 'black');
  }
}
