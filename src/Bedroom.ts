import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';

export default class Bedroom extends Scene {
  private background: HTMLImageElement;

  private starting: boolean;

  public constructor(MaxX: number, MaxY: number) {
    super(MaxX, MaxY);
    this.background = CanvasUtil.loadNewImage('./placeholders/timmysroom.png');
    this.starting = false;
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_S)) this.starting = true;
  }

  public update(elapsed: number): Scene {
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.background, 0, 0);
  }
}
