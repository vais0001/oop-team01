import Bedroom from './Bedroom.js';
import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';

export default class Webpage extends Scene {
  private newLevel: boolean;

  private downloading: boolean;

  private loadingBar: number;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.image = CanvasUtil.loadNewImage('./placeholders/internet_browser.png');
    this.newLevel = false;
    this.downloading = false;
    this.loadingBar = 0;
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_ENTER)) {
      this.downloading = true;
    }
  }

  public update(elapsed: number): Scene {
    if (this.downloading) {
      this.loadingBar += elapsed * 0.5;
    }
    if (this.loadingBar > 300) {
      this.newLevel = true;
    }
    if (this.newLevel === true) {
      return new Bedroom(0, 0, 1);
    }
    return null;
  }

  /**
   *
   * @param canvas
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, 50, 0);
    CanvasUtil.drawRectangle(canvas, canvas.width / 2 - 180, 600, 300, 30, 'white');
    CanvasUtil.fillRectangle(canvas, canvas.width / 2 - 180, 600, this.loadingBar, 30, 'green');
    if (!(this.downloading)) {
      CanvasUtil.writeTextToCanvas(canvas, 'Press [ENTER] To Download The Game', canvas.width / 2, 700, 'center', 'arial', 40, 'white');
    } else {
      CanvasUtil.writeTextToCanvas(canvas, 'DOWNLOADING', canvas.width / 2, 500, 'center', 'arial', 40, 'white');
    }

  }
}
