import Bedroom from '../Bedroom.js';
import CanvasUtil from '../CanvasUtil.js';
import KeyListener from '../KeyListener.js';
import Scene from '../Scene.js';

export default class LoadingScene extends Scene {
  private loadingBar: number;

  private realisticPause: number;

  private continue: boolean;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.loadingBar = 0;
    this.image = CanvasUtil.loadNewImage('./assets/bedroomloading.png');
    this.realisticPause = 50;
    this.continue = false;
  }

  /**
   *
   * @param keyListener is input
   * @returns nothing
   */
  public processInput(keyListener: KeyListener): void {
    if (this.loadingBar === 1100 && keyListener.keyPressed('Space')) {
      this.continue = true;
    }
    return null;
  }

  /**
   *
   * @param elapsed is time
   * @returns true or false
   */
  public update(elapsed: number): Scene {
    const randomPause: number = Math.floor(Math.random() * 1220) + 100;
    if (this.realisticPause === 50 || this.realisticPause < 0) {
      this.loadingBar += elapsed * 8; // for final 0.3
    }
    if (this.loadingBar > randomPause) {
      this.realisticPause -= elapsed;
    }
    if (this.loadingBar > 1100) {
      this.loadingBar = 1100;
    }

    if (this.continue) return new Bedroom(this.maxX, this.maxY, 0);
    return null;
  }

  /**
   *
   * @param canvas is html canvas element
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, this.dimensionsX, this.dimensionsY);
    CanvasUtil.drawRectangle(canvas, this.dimensionsX + 160, this.dimensionsY + 180, 1100, 30, 'white');
    if (this.loadingBar === 1100) {
      CanvasUtil.fillRectangle(canvas, this.dimensionsX + 450, this.dimensionsY + 550, 520, 90, 'black');
      CanvasUtil.writeTextToCanvas(canvas, 'Press         to continue', canvas.width / 2, this.dimensionsY + 600, 'center', 'Kongtext', 40, 'White');
      CanvasUtil.writeTextToCanvas(canvas, '      [SPACE]            ', canvas.width / 2, this.dimensionsY + 600, 'center', 'Kongtext', 40, 'red');
    }
    CanvasUtil.fillRectangle(canvas, this.dimensionsX + 160, this.dimensionsY + 180, this.loadingBar, 30, 'white');
  }
}
