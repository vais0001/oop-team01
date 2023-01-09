import Bedroom from './Bedroom.js';
import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';

export default class StartScene extends Scene {
  private starting: boolean;

  public constructor(MaxX: number, MaxY: number) {
    super(MaxX, MaxY);
    this.image = CanvasUtil.loadNewImage('./placeholders/start800.png');
    this.starting = false;
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_S)) this.starting = true;
  }

  public update(elapsed: number): Scene {
    if (this.starting) return new Bedroom(this.maxX, this.maxY);
    return null;
    console.log('1');
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, 50, 0);
    CanvasUtil.writeTextToCanvas(canvas, 'press [S] to start', canvas.width / 2, canvas.height / 2 + 300, 'center', 'courier', 40, 'white');
  }
}
