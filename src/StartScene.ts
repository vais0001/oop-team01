import Bedroom from './Bedroom.js';
import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';

export default class StartScene extends Scene {
  private starting: boolean;

  private background: HTMLImageElement;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.background = CanvasUtil.loadNewImage('./placeholders/timmysroom.png');
    this.starting = false;
    this.keyListener = new KeyListener();
  }

  public processInput(): void {
    if (this.keyListener.keyPressed(KeyListener.KEY_S)) {
      console.log('yes');
    }
  }

  public update(elapsed: number): Scene {
    // Load scene when starting.
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.fillCanvas(canvas, '#000');
    CanvasUtil.drawImage(
      canvas,
      this.background,
      (canvas.width / 2) - (this.background.width / 2),
      (canvas.height / 2) - (this.background.height / 2),
    );
    CanvasUtil.writeTextToCanvas(canvas, '[S] TO START', canvas.width / 2, canvas.height / 2 + 300, 'center', 'ScoreFont', 50, 'white');
  }
}
