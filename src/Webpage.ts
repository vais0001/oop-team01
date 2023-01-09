import Bedroom from './Bedroom.js';
import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';

export default class Webpage extends Scene {

  private newLevel: boolean;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.image = CanvasUtil.loadNewImage('./placeholders/internet_browser.png')
    this.newLevel = false;
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_ENTER)) this.newLevel = true;
  }
  public update(elapsed: number): Scene {
    if (this.newLevel === true) {
      return new Bedroom(0, 0, 1)
    }
    return null;
  }
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, 0, 0);
    CanvasUtil.writeTextToCanvas(canvas, 'Press [ENTER] To Download The Game', 700, 700, 'center', 'arial', 40, 'white')
  }

}
