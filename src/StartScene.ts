import Bedroom from './Bedroom.js';
import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';

export default class StartScene extends Scene {
  private background: HTMLImageElement;

  private starting: boolean;

  public constructor(MaxX: number, MaxY: number) {
    super(MaxX, MaxY);
    this.background = CanvasUtil.loadNewImage('./placeholders/start.png');
    this.starting = false;
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_S)) this.starting = true;
  }

  public update(elapsed: number): Scene {
    if (this.starting) return new Bedroom(this.maxX, this.maxY);
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.background, 170, 70);
    CanvasUtil.writeTextToCanvas(canvas, 'press [S] to start', canvas.width / 2, canvas.height / 2 + 300, 'center', 'courier', 40, 'white');
  }
}
