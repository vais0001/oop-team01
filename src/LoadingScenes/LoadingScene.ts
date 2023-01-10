import Bedroom from "../Bedroom.js";
import CanvasUtil from "../CanvasUtil.js";
import KeyListener from "../KeyListener.js";
import Scene from "../Scene.js";

export default class LoadingScene extends Scene {
  private loadingBar: number;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.loadingBar = 0;
    this.image = CanvasUtil.loadNewImage('./placeholders/loading_screen_controls.png');
  }

  public processInput(keyListener: KeyListener): void {
    return null;
  }

  public update(elapsed: number): Scene {
    this.loadingBar += elapsed * 2.15;
    if (this.loadingBar > 300) return new Bedroom(this.maxX, this.maxY, 0);
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.drawImage(canvas, this.image, 50, -20);
    CanvasUtil.drawRectangle(canvas, 100, 100, 300, 30, 'white');
    CanvasUtil.fillRectangle(canvas, 100, 100, this.loadingBar, 30, 'white');
  }
}

