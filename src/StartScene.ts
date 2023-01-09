import Bedroom from './Bedroom.js';
import CanvasUtil from './CanvasUtil.js';
import Scene from './Scene.js';
import KeyListener from './KeyListener.js';
import CreditScene from './CreditScene.js';

export default class StartScene extends Scene {
  private starting: boolean;

  private creditscene: boolean;

  private button: HTMLImageElement;

  public constructor(MaxX: number, MaxY: number) {
    super(MaxX, MaxY);
    this.image = CanvasUtil.loadNewImage('./placeholders/start800.png');
    this.starting = false;
    this.creditscene = false;
    this.button = CanvasUtil.loadNewImage('./placeholders/start_button.png');
  }

  public processInput(KeyListener: KeyListener): void {
    if (KeyListener.keyPressed('KeyS')) {
      this.starting = true;
    }
    if (KeyListener.keyPressed('KeyC')) {
      this.creditscene = true;
    }
  }

  public update(elapsed: number): Scene {
    if (this.starting) return new Bedroom(this.maxX, this.maxY);
    if (this.creditscene) return new CreditScene(this.maxX, this.maxY);
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, 50, 0);
    CanvasUtil.drawImage(canvas, this.button, 460, 270);
    CanvasUtil.drawImage(canvas, this.button, 460, 400);
    CanvasUtil.writeTextToCanvas(canvas, '[S] to start', canvas.width / 2, canvas.height / 2 - 35, 'center', 'Kongtext', 35, 'black');
    CanvasUtil.writeTextToCanvas(canvas, '[C] for Credits', canvas.width / 2, canvas.height / 2 + 95, 'center', 'Kongtext', 35, 'black');
  }
}
